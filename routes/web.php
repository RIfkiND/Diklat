<?php

use App\Http\Controllers\userDashboardController;
use App\Http\Controllers\UserFormRegister;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/dashboard/admin', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    //   Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    //   Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    //   Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard/user', [userDashboardController::class, 'index'])->name('user.dashboard');
    Route::get('/dashboard/user/register', [UserFormRegister::class, 'index'])->name('user.register');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/petugas.php';
