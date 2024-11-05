<?php

use App\Http\Controllers\Pages\Dashboard\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/dashboard/petugas/monitoring-peserta', [DashboardController::class, 'Petugas'])->name('petugas.monitoring-peserta');
