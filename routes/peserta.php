<?php

use App\Http\Controllers\UserDashboardController;
use App\Http\Controllers\Pages\Dashboard\DashboardController;
use App\Http\Controllers\UserFormRegister;
use Illuminate\Support\Facades\Route;

// Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard/user', [UserDashboardController::class, 'index'])->name('user.dashboard');
    Route::get('/dashboard/user/register', [UserFormRegister::class, 'index'])->name('user.register');
// });
