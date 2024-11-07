<?php

use App\Http\Controllers\Auth\V1\AuthPagesController;

use App\Http\Controllers\Auth\V1\LoginCotnroller;
use App\Http\Controllers\Auth\V1\LogoutController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix'=>'auth','as'=>'Views.Auth.','middleware'=>'guest' ], function(){
  Route::get('/admin/login', [AuthPagesController::class, 'AdminLoginPage'])->name('Admin');
  Route::get('/petugas/login', [AuthPagesController::class, 'PetugasLoginPage'])->name('Petugas');
  Route::get('/peserta/pogin', [AuthPagesController::class, 'PesertaLoginPage'])->name('Peserta');
});
Route::group(['prefix'=>'Auth/v1','as'=>'Auth.V1.Login.' ,'middleware'=>'guest'], function(){
  Route::post('/admin/login', [LoginCotnroller::class, 'AdminLogin'])->name('Admin');
  Route::post('/petugas/login', [LoginCotnroller::class, 'PetugasLogin'])->name('Petugas');
  Route::post('/peserta/login', [LoginCotnroller::class, 'PesertaLogin'])->name('Peserta');
});

Route::group(['prefix'=>'Auth/v1','as'=>'Auth.V1.' ], function(){
  Route::post('/Logout', [LogoutController::class, 'Logout'])->name('Logout');
});



