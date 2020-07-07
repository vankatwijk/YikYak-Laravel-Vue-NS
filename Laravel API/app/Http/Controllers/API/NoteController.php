<?php
namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Note;
use Illuminate\Support\Facades\Auth;
use Validator;
use DB;

use Illuminate\Database\QueryException;

class NoteController extends Controller
{
    /**
     * show note list api
     *
     * required field
     * 'lat' => 'required',
     * 'lng' => 'required'
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // field validation
        $validator = Validator::make($request->all(), [
            'lat' => 'required|numeric',
            'lng' => 'required|numeric',
        ]);
        if ($validator->fails()) {
            return response()->json([
              'error' => $validator->errors()
            ], $this->unAuthorized);
        }

        // google query for distance
        /*
        SELECT
        id,
        (
           6371 * // earth radius kms
      acos(
          cos(radians(37)) *
          cos(radians(lat)) *
          cos(
            radians(lng) -
            radians(-122)
          ) +
          sin(radians(37)) *
          sin(radians(lat ))
          )
      ) AS distance
        FROM markers
        HAVING distance < 28
        ORDER BY distance LIMIT 0, 20;
        */

        $cos_radians_lat = cos(deg2rad($request->lat));
        $sin_radians_lat = sin(deg2rad($request->lat));
        $radians_lng = deg2rad($request->lng);

        try {
            $notes = DB::table('notes')
            ->selectRaw('id, title,
              (6371 * acos( ROUND( ? * cos_radians_lat * cos( ? - radians_lng ) + ? * sin_radians_lat, 4))) AS distance', [
                $cos_radians_lat,
                $radians_lng,
                $sin_radians_lat
              ])
              ->where('deleted_at', null)
              ->having('distance', '<', env('RADIUS_DISTANCE', 1))
              ->orderBy('distance', 'asc')
              ->get();
        } catch (QueryException $e) {
            return response()->json([
                  'error' => $e,
                ], 500);
        }
        return response()->json([
            'notes' => $notes
          ], $this->successStatus);
    }

    /**
     * create note api
     *
     * required field
     * 'title' => 'required',
     * 'description' => 'required',
     * 'lat' => 'required',
     * 'lng' => 'required',
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        // field validation
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required',
            'lat' => 'required|numeric',
            'lng' => 'required|numeric',
        ]);
        if ($validator->fails()) {
            return response()->json([
              'error' => $validator->errors()
            ], $this->unAuthorized);
        }

        try {
            // create the note
            $noteData = $request->all();

            // adding creator
            $noteData["user_id"] = $user->id;
            // adding calculation for the geo query
            $noteData["cos_radians_lat"] = round(cos(deg2rad($request->lat)), 6);
            $noteData["radians_lng"] = round(deg2rad($request->lng), 6);
            $noteData["sin_radians_lat"] = round(sin(deg2rad($request->lat)), 6);

            // return response()->json($noteData);
            $note = Note::create($noteData);
        } catch (QueryException $e) {
            return response()->json([
              'error' => $e,
              'data' => $noteData,
            ], $this->unAuthorized);
        }
        return response()->json([
            'success' => $note->id,
          ], $this->successStatus);
    }

    /**
     * update note api based on id
     * required field
     * 'id' => 'required' // note id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = Auth::user();

        // field validation (only id is required)
        if (!$id) {
            return response()->json([
            'error' => 'id is required'
          ], $this->unAuthorized);
        }

        // check if the note exists in the database by id
        $note = Note::find($id);

        if (!$note) {
            return response()->json([
              'error' => 'Cannot find the note'
            ], $this->unAuthorized);
        }

        // check if the user who wants to update the note is the creator of the note
        if ($note->user_id != $user->id) {
            return response()->json([
            'error' => 'Unauthorized'
          ], $this->unAuthorized);
        }

        // update the note
        return response()->json([
            'success' => $note->update($request->except('lat', 'lng')),
          ], $this->successStatus);
    }

    /**
     * soft delete note api based on id
     * required field
     * 'id' => 'required' // note id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = Auth::user();

        // field validation (only id is required)
        if (!$id) {
            return response()->json([
            'error' => 'id is required'
          ], $this->unAuthorized);
        }

        // check if the note exists in the database by id
        $note = Note::find($id);

        if (!$note) {
            return response()->json([
              'error' => 'Cannot find the note'
            ], $this->unAuthorized);
        }

        // check if the user who wants to update the note is the creator of the note
        if ($note->user_id != $user->id) {
            return response()->json([
            'error' => 'Unauthorized'
          ], $this->unAuthorized);
        }

        // delete the note
        return response()->json([
            'success' => $note->delete(),
          ], $this->successStatus);
    }

    /**
     * soft delete note api based on id
     * required field
     * 'id' => 'required' // note id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = Auth::user();

        // field validation (only id is required)
        if (!$id) {
            return response()->json([
            'error' => 'id is required'
          ], $this->unAuthorized);
        }

        // check if the note exists in the database by id
        $note = Note::with('user')->find($id);

        if (!$note) {
            return response()->json([
              'error' => 'Cannot find the note'
            ], $this->unAuthorized);
        }

        // delete the note
        return response()->json($note, $this->successStatus);
    }
}
