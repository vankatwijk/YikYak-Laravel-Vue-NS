<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Note;
use App\Message;
use Auth;

class MessangerController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('company');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function showUserMessanger(Request $request)
    {
        //dd(auth()->user()->currentCompany->id);
        $company_id = auth()->user()->currentCompany->id;
        $company_users = User::where('company_id', '=',$company_id)->get();
        // $messages = Message::where(['from_user_id','=',Auth::id()],['to_user_id','=',$request->user_id])
        //             ->orWhere(['to_user_id','=',Auth::id()],['from_user_id','=',$request->user_id])
        //             ->get();
        $messages = Message::where('from_user_id','=',Auth::id())->where('to_user_id','=',$request->user_id)
                    ->orWhere('to_user_id','=',Auth::id())->where('from_user_id','=',$request->user_id)
                    ->get();

        return view('user_messanger')->withCompanyUsers($company_users)->withToUser($request->user_id)->withMessages($messages);
    }

    public function showChannelMessanger(Request $request)
    {
        //dd(auth()->user()->currentCompany->id);
        $company_id = auth()->user()->currentCompany->id;
        $company_users = User::where('company_id', '=',$company_id)->get();
        $notes = Note::where('channel_id', '=',$request->channel_id)->get();

        return view('channel_messanger')->withCompanyUsers($company_users)->withChannel($request->channel_id)->withNotes($notes);
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
        $this->validate($request, array(
          'message' => 'required|max:255',
        ));

        //store the information
        $message = new Message;
        $message->from_user_id = Auth::id();
        $message->to_user_id = $request->user_id;
        $message->message = $request->message;
        $message->meta = '{}';

        $message->save();
        //Session::flash('Success','The note was saved successfully !');
        //Session::put()

        //redirect to the post
        return  redirect()->route('showUserMessanger',$request->user_id);

    }

    public function storeChannelMessange(Request $request)
    {

        //dd($request);
        //validate the data
        $this->validate($request, array(
          'title' => 'required|max:255',
          'description' => 'required',
          'lat' => 'required',
          'lng' => 'required',
        ));

        //store the information
        $note = new Note;
        $note->user_id = Auth::id();
        $note->channel_id = $request->channel_id;
        $note->title = $request->title;
        $note->description = $request->description;
        $note->lat = $request->lat;
        $note->lng = $request->lng;
        $note->cos_radians_lat = $request->cos_radians_lat;
        $note->radians_lng = $request->radians_lng;
        $note->sin_radians_lat = $request->sin_radians_lat;

        $note->save();
        //Session::flash('Success','The note was saved successfully !');
        //Session::put()

        //redirect to the post
        return  redirect()->route('showChannelMessanger',$request->channel_id);
    }


}
