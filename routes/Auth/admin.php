<?php

use App\Http\Controllers\Auth\V1\LoginCotnroller;
use App\Http\Controllers\Auth\V1\LogoutController;
use App\Http\Controllers\Auth\V1\AuthPagesController;

Route::middleware('guest')->group(function () {
    // Routes for admin login
    Route::get('admin/login', [AuthPagesController::class, 'LoginPage'])
        ->name('admin.login');

    Route::post('admin/login', [LoginCotnroller::class, 'AdminLogin']);
});

Route::middleware(['auth'])->group(function () { // Ensure you include your admin middleware here
    // Routes for admin logout
    Route::post('admin/logout', [LogoutController::class, 'AdminLogout'])
        ->name('admin.logout');
});
