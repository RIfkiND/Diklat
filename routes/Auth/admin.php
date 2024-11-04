<?php

use App\Http\Controllers\Auth\AdminAuthenticatedSessionController;

Route::middleware('guest')->group(function () {
    // Routes for admin login
    Route::get('admin/login', [AdminAuthenticatedSessionController::class, 'create'])
        ->name('admin.login');

    Route::post('admin/login', [AdminAuthenticatedSessionController::class, 'store']);
});

Route::middleware(['auth', 'role:admin'])->group(function () { // Ensure you include your admin middleware here
    // Routes for admin logout
    Route::post('admin/logout', [AdminAuthenticatedSessionController::class, 'destroy'])
        ->name('admin.logout');
});
