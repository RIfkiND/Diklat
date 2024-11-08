<?php

use App\Http\Controllers\Auth\V1\AuthLoginController;
use App\Http\Controllers\Auth\V1\LogoutController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix'=>'Auth','as'=>'Views.Auth.','middleware'=>'guest' ], function(){
  Route::get('/Admin/Login', [AuthLoginController::class, 'AdminLoginPage'])->name('Admin');
  Route::get('/Petugas/Login', [AuthLoginController::class, 'PetugasLoginPage'])->name('Petugas');
  Route::get('/Peserta/Login', [AuthLoginController::class, 'PesertaLoginPage'])->name('Peserta');
});
Route::group(['prefix'=>'Auth/v1','as'=>'Auth.V1.Login.' ,'middleware'=>'guest'], function(){
  Route::post('/Admin/Login', [AuthLoginController::class, 'AdminLogin'])->name('Admin');
  Route::post('/Petugas/Login', [AuthLoginController::class, 'PetugasLogin'])->name('Petugas');
  Route::post('/Peserta/Login', [AuthLoginController::class, 'PesertaLogin'])->name('Peserta');
});

Route::group(['prefix'=>'Auth/v1','as'=>'Auth.V1.' ], function(){
  Route::post('/Logout', [LogoutController::class, 'Logout'])->name('Logout');
});



