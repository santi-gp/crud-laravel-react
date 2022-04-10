<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/movies', function () {
    return view('movies');
});

Route::get('movies/list', function () {
    return view('movies');
});
Route::get('movies/new', function () {
    return view('movies');
});

Route::get('movies/{id}', function () {
    return view('movies');
});

Route::resource('movies', MovieController::class);
