<?php

use App\Http\Controllers\Auth\V1\AuthPagesController;

use App\Http\Controllers\Auth\V1\LoginController;
use App\Http\Controllers\Auth\V1\LogoutController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix'=>'Auth','as'=>'Views.Auth.' ], function(){
  Route::get('/Admin/Login', [AuthPagesController::class, 'AdminLoginPage'])->name('Admin');
  Route::get('/Petugas/Login', [AuthPagesController::class, 'PetugasLoginPage'])->name('Petugas');
  Route::get('/Peserta/Login', [AuthPagesController::class, 'PesertaLoginPage'])->name('Peserta');
});
Route::group(['prefix'=>'Auth/v1','as'=>'Auth.V1.Login.' ,'middleware'=>'guest'], function(){
  Route::post('/Admin/Login', [LoginController::class, 'AdminLogin'])->name('Admin');
  Route::post('/Petugas/Login', [LoginController::class, 'PetugasLogin'])->name('Petugas');
  Route::post('/Peserta/Login', [LoginController::class, 'PesertaLogin'])->name('Peserta');
});

Route::group(['prefix'=>'Auth/v1','as'=>'Auth.V1.' ], function(){
  Route::post('/Logout', [LogoutController::class, 'Logout'])->name('Logout');
});



