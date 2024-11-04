<?php

use App\Http\Controllers\Auth\PetugasAuthenticatedSessionController;

Route::middleware('guest')->group(function () {
    // Routes for petugas login
    Route::get('petugas/login', [PetugasAuthenticatedSessionController::class, 'create'])
        ->name('petugas.login');

    Route::post('petugas/login', [PetugasAuthenticatedSessionController::class, 'store']);
});

Route::middleware(['auth', 'role:petugas'])->group(function () { // Ensure you include your petugas middleware here
    // Routes for petugas logout
    Route::post('petugas/logout', [PetugasAuthenticatedSessionController::class, 'destroy'])
        ->name('petugas.logout');
});
