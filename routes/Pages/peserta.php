<?php

use App\Http\Controllers\UserDashboardController;
use App\Http\Controllers\UserFormRegister;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//peserta
Route::middleware(['role:peserta'])->group(function () {
    Route::get('/dashboard/user', [UserDashboardController::class, 'index'])->name('user.dashboard');
    Route::post('/dashboard/user', [userDashboardController::class, 'addBiodata']);
    Route::get('/dashboard/user/register', [UserFormRegister::class, 'index'])->name('user.register');
});
