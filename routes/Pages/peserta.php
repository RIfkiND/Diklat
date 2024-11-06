<?php

use App\Http\Controllers\UserDashboardController;
use App\Http\Controllers\Pages\Dashboard\DashboardController;
use App\Http\Controllers\UserFormRegister;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminDashboardController;
use Inertia\Inertia;

//peserta
// Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard/user', [UserDashboardController::class, 'index'])->name('user.dashboard');
    Route::get('/dashboard/user/register', [UserFormRegister::class, 'index'])->name('user.register');

    Route::post('/dashboard/user', [UserDashboardController::class, 'addBiodata']);
// });

//admin
Route::get('/dashboard/admin/users/table/user', [AdminDashboardController::class, 'index'])->name('admin.users');
Route::get('/dashboard/admin/users/table/user/view', function () {
    return Inertia::render('Dashboard/Admin/Table/User/View/ViewData');
})->name(name: 'admin.users.view');

