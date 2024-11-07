<?php

use App\Http\Controllers\UserDashboardController;
use App\Http\Controllers\UserFormRegister;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//peserta
Route::middleware(['role:peserta'])->group(function () {
    Route::get('/dashboard/user', [UserDashboardController::class, 'index'])->name('user.dashboard');
    Route::get('/dashboard/user/register', [UserFormRegister::class, 'index'])->name('user.register');

    Route::post('/dashboard/user', [userDashboardController::class, 'addBiodata']);
    Route::post('/dashboard/user/register', [UserFormRegister::class, 'addKegiatan']);
    Route::delete('/user/register/{id}', [UserFormRegister::class, 'DeleteKegiatan'])->name('user.register.delete');
    Route::put('/user/register/{id}', [UserFormRegister::class, 'editKegiatan'])->name('user.register.edit');
});
