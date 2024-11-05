<?php

use App\Http\Controllers\Pages\Dashboard\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/dashboard/petugas/monitoring-peserta', [DashboardController::class, 'Petugas'])->name('petugas.monitoring-peserta');
Route::get('/dashboard/petugas/data-edp', [DashboardController::class, 'PetugasDataEdp'])->name('petugas.data-edp');
Route::get('/dashboard/petugas/data-edp/show', [DashboardController::class, 'PetugasDataEdpShow'])->name('petugas.data-edp-show');
