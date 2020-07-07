<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class PagesController extends Controller
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
    public function adduser()
    {
        //dd(auth()->user()->currentCompany->id);
        $company_id = auth()->user()->currentCompany->id;
        $company_users = User::where('company_id', '=',$company_id)->get();
        return view('adduser')->withCompanyUsers($company_users);
    }

    public function addchannel()
    {
        //dd(auth()->user()->currentCompany->id);
        $company_id = auth()->user()->currentCompany->id;
        $company_users = User::where('company_id', '=',$company_id)->get();
        return view('addchannel')->withCompanyUsers($company_users);
    }
}
