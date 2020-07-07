<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Test the connection to the API server
Route::get('test', function () {
    $result = ['result' => 'OK',
            'data' => 'No Data Yet, Get route'];
    $response = \Response::json($result)->setStatusCode(200, 'Success');
    return $response;
});
Route::post('test', function () {
    $result = ['result' => 'OK',
            'data' => 'No Data Yet, Post route'];
    $response = \Response::json($result)->setStatusCode(200, 'Success');
    return $response;
});

// AUTH
Route::post('login', 'API\UserController@login');
Route::post('register', 'API\UserController@register');
Route::post('reset-password', 'API\UserController@resetPassword');
// end


Route::group(['middleware' => 'auth:api'], function () {
    // User
    Route::get('logout', 'API\UserController@logout');
    Route::get('details', 'API\UserController@details');
    Route::post('usermessanger/{channel_id}/join','API\UserController@joinChannel');
    Route::post('usermessanger/{channel_id}/unjoin','API\UserController@unJoinChannel');

    //Company
    Route::post('entity','API\CompaniesController@store');
    Route::post('adduser','API\CompaniesController@addUser');
    Route::get('entity','API\CompaniesController@view');

    //Channels showAllChannelMessanges
    Route::post('channels','API\ChannelsController@store');
    Route::get('channels','API\ChannelsController@view');
    Route::post('channels/{user_id}/{channel_id}/addUser','API\ChannelsController@addUser');
    Route::post('channels/{user_id}/{channel_id}/removeUser','API\ChannelsController@removeUser');

    //Channel Messanger
    Route::post('channelmessanger/{channel_id}','API\MessangerController@storeChannelMessange');
    Route::get('channelmessanger/{channel_id}','API\MessangerController@showChannelMessanger');
    Route::post('channelmessanger/{message_id}/update','API\MessangerController@updateChannelMessange');
    Route::delete('channelmessanger/{message_id}/delete','API\MessangerController@destroyChannelMessange');
    Route::post('showAllChannelMessanges','API\MessangerController@showAllChannelMessanges');


    //User Messanger
    Route::post('usermessanger/{user_id}','API\MessangerController@storeUserMessange');
    Route::get('usermessanger/{user_id}','API\MessangerController@showUserMessanger');


    // NOTES routes
    Route::apiResource('notes', 'API\NoteController');
});
