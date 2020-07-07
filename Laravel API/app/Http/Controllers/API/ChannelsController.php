<?php
namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Channel;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\QueryException;
use App\Events\ChannelCreated;
use App\Http\Requests\Channels\CreateChannelRequest;
use App\Http\Resources\ChannelCollection;

class ChannelsController extends Controller
{

    
    public function store(CreateChannelRequest $request)
    {


        try{
            if( Auth::user()->company_id ){
                $channel = $request->user()->currentCompany->createChannel($request->name);
                broadcast(new ChannelCreated($channel));

                return response()->json([
                'success' => $channel
                ], 200);
            }else{

                return response()->json([
                'success' => false
                ], 200);
            }

        }catch(\Exception $e){

            return response()->json([
                'error' => $e
              ], 200);
        }


    }
    public function view()
    {
        return response()->json(['success' => true,'data'=> Auth::user()->currentCompany->channels], 200);
    }

    public function addUser(Request $request){
        try{

            $user = User::find($request->user_id);
            $channel = Channel::find($request->channel_id);
            //check if the channel already exist
            if (!$user) {
                return response()->json([
                    'error' => 'Cannot find the user'
                ], $this->unAuthorized);
            }
            if (!$channel) {
                return response()->json([
                    'error' => 'Cannot find the channel'
                ], $this->unAuthorized);
            }

            //check if the user already belongs to the channel
            $userChannels = $channel->hasUsers();
            if ($userChannels->where('id', $request->user_id)->exists()) {
                return response()->json([
                    'error' => 'User already belongs to channel'
                ], $this->unAuthorized);
            }

            $channel->hasUsers()->attach($request->user_id);
            return response()->json([
                'success' => $channel->hasUsers()
                ], 200);

        }catch(\Exception $e){

            return response()->json([
                'error' => $e
              ], 200);
        }
    }

    public function removeUser(Request $request){
        try{

            $user = User::find($request->user_id);
            $channel = Channel::find($request->channel_id);
            //check if the channel already exist
            if (!$user) {
                return response()->json([
                    'error' => 'Cannot find the user'
                ], $this->unAuthorized);
            }
            if (!$channel) {
                return response()->json([
                    'error' => 'Cannot find the channel'
                ], $this->unAuthorized);
            }

            //check if the user already belongs to the channel
            $userChannels = $channel->hasUsers();
            if (!$userChannels->where('id', $request->user_id)->exists()) {
                return response()->json([
                    'error' => 'User already belongs to channel'
                ], $this->unAuthorized);
            }

            $channel->hasUsers()->detach($request->user_id);
            return response()->json([
                'success' => $channel->hasUsers()
                ], 200);

        }catch(\Exception $e){

            return response()->json([
                'error' => $e
              ], 200);
        }
    }

}
