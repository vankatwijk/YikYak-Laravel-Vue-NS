<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class HomeController extends Controller
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
    public function index()
    {
        //dd(auth()->user()->currentCompany->id);
        $company_id = auth()->user()->currentCompany->id;
        $company_users = User::where('company_id', '=',$company_id)->get();
        return view('home')->withCompanyUsers($company_users);
    }
}
