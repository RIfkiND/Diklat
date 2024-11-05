<?php

use App\Http\Controllers\Auth\V1\AuthPagesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('Auth')->group(function () {
  Route::get('/login', [AuthPagesController::class,'LoginPage'])->name('login');
  Route::get('/Register', [AuthPagesController::class,'LoginPage'])->name('register');

});
