<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// view for resetting the password
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');

// resetting the password
Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

// email Verification
Route::get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::get('/{any?}', function () {
    return view('welcome');
})->where('api', '^(?!api\/)[\/\w\.-]*');


// old laravel blade routes

// Auth::routes(); //all authentication routes are here

// Route::view('/', 'welcome')->middleware('guest')->name('welcome');


// Route::get('/home', 'HomeController@index')->name('home');
// Route::get('/userlogout', 'Auth\LoginController@userlogout')->name('userlogout');

// Route::get('/adduser', 'PagesController@adduser')->name('adduser');
// Route::post('/adduser', 'Auth\RegisterController@addUser')->name('auth.adduser');

// Route::get('/addchannel', 'PagesController@addchannel')->name('addchannel');
// Route::post('/addchannel', 'ChannelsController@store')->name('channels.store');


// Route::get('/{user_id}/u/Messanger', 'MessangerController@showUserMessanger')->name('showUserMessanger');
// Route::post('/{user_id}/u/Messanger', 'MessangerController@storeUserMessange')->name('userMessanger.store');

// Route::get('/{channel_id}/c/Messanger', 'MessangerController@showChannelMessanger')->name('showChannelMessanger');
// Route::post('/{channel_id}/c/Messanger', 'MessangerController@storeChannelMessange')->name('channelMessanger.store');

// Route::resource('companies', 'CompaniesController', ['only' => ['create', 'store']]);





// AUTH ROUTES OVERRIDE
// Auth::routes([
//   'register' => false,
//   'verify' => true
// ]);


// view for resetting the password
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');

// resetting the password
Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

// email Verification
Route::get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');


// // redirecting all routes to the initial page
// Route::any('{any}', function () {
//     return view('home');
// })->where('any', '.*');

