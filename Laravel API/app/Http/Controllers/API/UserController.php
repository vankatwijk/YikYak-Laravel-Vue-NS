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
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;

class UserController extends Controller
{
    use SendsPasswordResetEmails;

    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login()
    {
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = Auth::user();

            $company = [];
            $hasCompany = false;
            if( isset( auth()->user()->company_id ) ){
                $company['entity_id'] = auth()->user()->currentCompany->id;
                $company['entity_name'] = auth()->user()->currentCompany->name;
                $company['entity_users'] = User::where('company_id', '=',$company['entity_id'])->get();
                $company['entity_channels'] =  Auth::user()->currentCompany->channels;
                $hasCompany = true;
            }


            //if ($user->hasVerifiedEmail()) {
                $success['token'] =  $user->createToken('MyApp')->accessToken;
                $success['user'] =  Auth::user();
                $success['email_valid'] = ( isset(auth()->user()->email_verified_at)?true:false );
                $success['hasEntity'] = $hasCompany;
                $success['entity'] =  $company;

                return response()->json(['success' => $success], $this->successStatus);
            //}
        }
        return response()->json([
            'error' => 'Unauthorised'
          ], $this->unAuthorized);
    }
    /**
     * logout api
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        try {
            $user = Auth::user();

            return response()->json([
              'success' => (bool) $user->token()->revoke()
            ]);
        } catch (Exception $e) {
            return response()->json([
            'error' => 'Unauthorised'
          ], $this->unAuthorized);
        }
    }

    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        // validation
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json([
              'error' => $validator->errors()
            ], $this->unAuthorized);
        }

        // creating password hash
        $input = $request->all();
        $input['password'] = Hash::make($input['password']);

        try {
            // creating user
            $user = User::create($input);
        } catch (QueryException $e) {
            return response()->json([
            'error' => 'user duplicate'
          ], $this->unAuthorized);
        }
        $user->sendEmailVerificationNotification();

        // $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;
        return response()->json([
            'success' => $success
          ], $this->successStatus);
    }

    /**
     * reset password api
     *
     * @return \Illuminate\Http\Response
     */
    public function resetPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email'
        ]);
        if ($validator->fails()) {
            return response()->json([
              'error' => $validator->errors()
            ], $this->unAuthorized);
        }
        $this->sendResetLinkEmail($request);
        return response()->json([
          'success' => true
        ], $this->successStatus);
    }

    /**
     * details api
     *
     * @return \Illuminate\Http\Response
     */
    public function details()
    {
        $user = Auth::user();

        $company = [];
        $hasCompany = false;
        if( isset( auth()->user()->company_id ) ){
            $company['entity_id'] = auth()->user()->currentCompany->id;
            $company['entity_name'] = auth()->user()->currentCompany->name;
            $company['entity_users'] = User::where('company_id', '=',$company['entity_id'])->get();
            $company['entity_channels'] =  Auth::user()->currentCompany->channels;
            $hasCompany = true;
        }


        //if ($user->hasVerifiedEmail()) {
            $success['user'] =  Auth::user();
            $success['email_valid'] = ( isset(auth()->user()->email_verified_at)?true:false );
            $success['hasEntity'] = $hasCompany;
            $success['entity'] =  $company;

            return response()->json(['success' => $success], $this->successStatus);
        //}
    }

    public function joinChannel(Request $request){
        try{

            $channel = Channel::find($request->channel_id);
            //check if the channel already exist
            if (!$channel) {
                return response()->json([
                    'error' => 'Cannot find the channel'
                ], $this->unAuthorized);
            }

            //check if the user already belongs to the channel
            $userChannels = auth()->user()->belongsToChannels();
            if ($userChannels->where('id', $request->channel_id)->exists()) {
                return response()->json([
                    'error' => 'User already belongs to channel'
                ], $this->unAuthorized);
            }

            auth()->user()->belongsToChannels()->attach($request->channel_id);
            return response()->json([
                'success' => auth()->user()->belongsToChannels()
                ], 200);

        }catch(\Exception $e){

            return response()->json([
                'error' => $e
              ], 200);
        }
    }

    public function unJoinChannel(Request $request){
        try{

            $channel = Channel::find($request->channel_id);
            //check if the channel already exist
            if (!$channel) {
                return response()->json([
                    'error' => 'Cannot find the channel'
                ], $this->unAuthorized);
            }

            //check if the user already belongs to the channel
            $userChannels = auth()->user()->belongsToChannels();
            if (!$userChannels->where('id', $request->channel_id)->exists()) {
                return response()->json([
                    'error' => 'User does not belongs to channel'
                ], $this->unAuthorized);
            }

            //check if the user already belongs to the channel
            //auth()->user()->belongsToChannels()->plu

            auth()->user()->belongsToChannels()->detach($request->channel_id);
            return response()->json([
                'success' => auth()->user()->belongsToChannels()
                ], 200);

        }catch(\Exception $e){

            return response()->json([
                'error' => $e
              ], 200);
        }
    }
}
