<?php
namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\QueryException;
use App\Http\Requests\Companies\CreateCompanyRequest;

class CompaniesController extends Controller
{

    public function store(CreateCompanyRequest $request)
    {

        try{
            if( ! isset(Auth::user()->company_id) ){
                $result = $request->user()->createCompany($request->name);

                return response()->json([
                'success' => $result
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
        $success['hasEntity'] = $hasCompany;
        $success['entity'] =  $company;

        return response()->json(['success' => $success], $this->successStatus);



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

        return response()->json(['success' => $input], $this->successStatus);

    }


}
