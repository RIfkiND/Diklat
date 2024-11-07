<?php

use App\Http\Controllers\UserDashboardController;
use App\Http\Controllers\UserFormRegister;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\EdpFormController;
    
//peserta
Route::middleware(['role:peserta'])->group(function () {
    Route::get('/dashboard/user', [UserDashboardController::class, 'index'])->name('user.dashboard');
    Route::get('/dashboard/user/register', [UserFormRegister::class, 'index'])->name('user.register');

    Route::post('/dashboard/user', [userDashboardController::class, 'addBiodata']);
    Route::post('/dashboard/user/register', [UserFormRegister::class, 'addForm']);
});


//form
Route::get('/form-edp-siswa', [EdpFormController::class, 'renderSiswa'])->name('form-edp');
Route::get('/form-edp', [EdpFormController::class, 'render'])->name('form-edp');
Route::get('/form-edp-send-link', [EdpFormController::class, 'renderSendLink'])->name('form-edp');


