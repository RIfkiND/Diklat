<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\EdpFormController;
use App\Http\Controllers\UserFormRegister;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/dashboard/admin', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/form-edp', [EdpFormController::class, 'render'])->name('form-edp');


require __DIR__ . '/Auth/auth.php';
require __DIR__ . '/Pages/petugas.php';
require __DIR__ . '/Pages/peserta.php';
require __DIR__ . '/Pages/admin.php';
