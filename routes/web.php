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

// Admin Table User
Route::get('/dashboard/admin/users/table/user', [AdminDashboardController::class, 'index'])->name('admin.users');
// Admin Table User View and Edit
Route::get('/dashboard/admin/users/table/user/view', function () {
    return Inertia::render('Dashboard/Admin/Table/User/ViewData');
})->name(name: 'admin.users.view');
Route::get('/dashboard/admin/users/table/user/edit', function () {
    return Inertia::render('Dashboard/Admin/Table/User/Edit');
})->name(name: 'admin.users.edit');

// Account Table User
Route::get('/dashboard/admin/account/user', function () {
    return Inertia::render('Dashboard/Admin/Account/TableUser');
})->name(name: 'admin.account.user');
// Account Table Petugas
Route::get('/dashboard/admin/account/petugas', function () {
    return Inertia::render('Dashboard/Admin/Account/TablePetugas');
})->name(name: 'admin.account.petugas');



require __DIR__ . '/Auth/auth.php';
require __DIR__ . '/Pages/petugas.php';
require __DIR__ . '/Pages/peserta.php';
