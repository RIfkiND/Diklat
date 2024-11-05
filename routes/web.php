<?php

use App\Http\Controllers\AdminDashboardController;
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

// Admin
Route::get('/dashboard/admin/users/table/user', [AdminDashboardController::class, 'index'])->name('admin.users');
Route::get('/dashboard/admin/users/table/user/view', function () {
    return Inertia::render('Dashboard/Admin/Table/View/ViewData');
})->name(name: 'admin.users.view');



require __DIR__ . '/Auth/auth.php';
require __DIR__ . '/petugas.php';
require __DIR__ . '/peserta.php';
