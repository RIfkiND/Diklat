<?php

use App\Http\Controllers\PetugasController;
use Illuminate\Support\Facades\Route;

Route::get('/dashboard/petugas/monitoring-peserta', [PetugasController::class, 'renderMonitoring'])->name('petugas.monitoring-peserta');
Route::get('/dashboard/petugas/data-edp', [PetugasController::class, 'renderDataEdp'])->name('petugas.data-edp');
