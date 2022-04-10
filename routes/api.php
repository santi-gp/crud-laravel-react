<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/movies/create', 'App\Http\Controllers\API\MovieController@store');
Route::get('/movies/list', 'App\Http\Controllers\API\MovieController@index');
Route::delete('/movies/{id}', 'App\Http\Controllers\API\MovieController@destroy');
Route::get('/movies/{id}', 'App\Http\Controllers\API\MovieController@edit');
Route::put('/movies/{id}', 'App\Http\Controllers\API\MovieController@update');

