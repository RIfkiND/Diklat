<?php

use App\Http\Controllers\Auth\V1\AuthPagesController;

use App\Http\Controllers\Auth\V1\LoginCotnroller;
use App\Http\Controllers\Auth\V1\LogoutController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix'=>'Auth','as'=>'Views.Auth.' ,'middleware'=>'guest'], function(){
  Route::get('/Admin/Login', [AuthPagesController::class, 'AdminLoginPage'])->name('Admin');
  Route::get('/Petugas/Login', [AuthPagesController::class, 'PetugasLoginPage'])->name('Petugas');
  Route::get('/Peserta/Login', [AuthPagesController::class, 'PesertaLoginPage'])->name('Peserta');
});
Route::group(['prefix'=>'Auth/v1','as'=>'V1.Auth.' ,'middleware'=>'guest'], function(){
  Route::post('/Admin/Login', [LoginCotnroller::class, 'AdminLogin'])->name('Admin');
  Route::post('/Petugas/Login', [LoginCotnroller::class, 'PetugasLogin'])->name('Petugas');
  Route::post('/Peserta/Login', [LoginCotnroller::class, 'PesertaLogin'])->name('Peserta');
});

Route::group(['prefix'=>'Auth/v1','as'=>'V1.Auth.' ,'middleware'=>'auth'], function(){
  Route::post('/Admin/Logout', [LogoutController::class, 'AdminLogout'])->name('Admin');
  Route::post('/Petugas/logout', [LogoutController::class, 'PetugasLogout'])->name('Petugas');
  Route::post('/Peserta/Logout', [LogoutController::class, 'PesertaLogout'])->name('Peserta');
});



