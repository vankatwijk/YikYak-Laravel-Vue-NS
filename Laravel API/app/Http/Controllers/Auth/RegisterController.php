<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('api')->except(['logout', 'index']);
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('auth.register');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    public function addUser(Request $request)
    {
        // validation
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'password-confirm' => 'required|same:password'
        ]);

        if ($validator->fails()) {
            return response()->json([
              'error' => $validator->errors()
            ], $this->unAuthorized);
        }

        // creating password hash
        $input = $request->all();
        $input['company_id'] = auth()->user()->currentCompany->id;
        $input['current_channel_id'] = auth()->user()->currentChannel->id;
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

        $company_id = auth()->user()->currentCompany->id;
        $company_users = User::where('company_id', '=',$company_id)->get();
        return view('adduser')->withCompanyUsers($company_users);

        // $success['token'] =  $user->createToken('MyApp')->accessToken;
        // $success['name'] =  $user->name;
        // return response()->json([
        //     'success' => $success
        //   ], $this->successStatus);
    }
}
