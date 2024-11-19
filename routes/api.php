<?php

use App\Http\Controllers\EdpFormController;
use App\Http\Controllers\Response\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get('/biodata/{id}', [EdpFormController::class, 'getBiodata']);
