<?php
namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\QueryException;
use App\User;
use App\Note;
use App\Message;
use Auth;

class MessangerController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function showAllChannelMessanges(Request $request)
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


        try{
            
            $user = Auth::user();
            $channellist = Auth::user()->currentCompany->channels->pluck('id')->toArray();
            $message = Note::whereIn('channel_id', $channellist )->get();
            $messageDistance = [];
            
            foreach($message as $msg){
                $distance = $this->distance($msg->lat, $msg->lng, $request->lat, $request->lng, 'M');
                //dd($distance);
                $msg->distance = $distance;
                if($distance <400){ //400 centemeters
                    array_push($messageDistance,$msg);
                }
            }
            

            return response()->json([
                'success' => $messageDistance
                ], 200);

        }catch(\Exception $e){

            return response()->json([
                'error' => $e
            ], 200);
        }

    }

    public function distance($lat1, $lon1, $lat2, $lon2, $unit) {

        $theta = $lon1 - $lon2;
        $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
        $dist = acos($dist);
        $dist = rad2deg($dist);
        $miles = $dist * 60 * 1.1515;
        $unit = strtoupper($unit);

        if ($unit == "K") {
            return ($miles * 1.609344);
        } else if ($unit == "N") {
            return ($miles * 0.8684);
        }else if ($unit == "M") {
            return ($miles * 1609.34);
        } else {
            return $miles;
        }
    }
    public function showUserMessanger(Request $request)
    {

        try{
            $messages = Message::where('from_user_id','=',Auth::id())->where('to_user_id','=',$request->user_id)
                        ->orWhere('to_user_id','=',Auth::id())->where('from_user_id','=',$request->user_id)
                        ->get();
            return response()->json([
                'success' => $messages
                ], 200);

        }catch(\Exception $e){

            return response()->json([
                'error' => $e
            ], 200);
        }

    }

    public function showChannelMessanger(Request $request)
    {
        try{
            $message = Note::where('channel_id', '=',$request->channel_id)->get();
            return response()->json([
                'success' => $message
                ], 200);

        }catch(\Exception $e){

            return response()->json([
                'error' => $e
            ], 200);
        }

    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function storeUserMessange(Request $request)
    {

        //dd($request);
        //validate the data
        $validator = Validator::make($request->all(), [
          'message' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
              'error' => $validator->errors()
            ], $this->unAuthorized);
        }

        try{
            //store the information
            $message = new Message;
            $message->from_user_id = Auth::id();
            $message->to_user_id = $request->user_id;
            $message->message = $request->message;
            $message->meta = '{}';

            $message->save();
            return response()->json([
                'success' => $message
                ], 200);
        }catch(\Exception $e){

            return response()->json([
                'error' => $e
            ], 200);
        }

    }

    public function storeChannelMessange(Request $request)
    {

        //dd($request);
        //validate the data
        $validator = Validator::make($request->all(), [
          'title' => 'required|max:255',
          'description' => 'required',
          'lat' => 'required',
          'lng' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
              'error' => $validator->errors()
            ], $this->unAuthorized);
        }

        try{
            //store the information
            $note = new Note;
            $note->user_id = Auth::id();
            $note->channel_id = $request->channel_id;
            $note->title = $request->title;
            $note->description = $request->description;
            $note->lat = $request->lat;
            $note->lng = $request->lng;
            $note->cos_radians_lat = round(cos(deg2rad($request->lat)), 6);
            $note->radians_lng = round(deg2rad($request->lng), 6);
            $note->sin_radians_lat = round(sin(deg2rad($request->lat)), 6);

            $note->save();
            return response()->json([
                'success' => $note
                ], 200);

        }catch(\Exception $e){

            return response()->json([
                'error' => $e
              ], 200);
        }
    }

    public function updateChannelMessange(Request $request)
    {
        $user = Auth::user();

        //     return response()->json([
        //     'value' => $request->message_id,
        //     'next' => $request
        //   ], $this->unAuthorized);

        // field validation (only id is required)
        if (!$request->message_id) {
            return response()->json([
            'error' => 'id is required'
          ], $this->unAuthorized);
        }

        // check if the note exists in the database by id
        $note = Note::find($request->message_id);

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
        
        $note->update($request->except('lat', 'lng'));
        $note->save;
        // update the note
        return response()->json([
            'success' => $note,
          ], $this->successStatus);
    }
    public function destroyChannelMessange($message_id)
    {
        $user = Auth::user();

        // field validation (only id is required)
        if (!$message_id) {
            return response()->json([
            'error' => 'id is required'
          ], $this->unAuthorized);
        }

        // check if the note exists in the database by id
        $note = Note::find($message_id);

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

}
