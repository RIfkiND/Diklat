<?php

use App\Http\Controllers\PetugasController;
use Illuminate\Support\Facades\Route;

Route::get('/dashboard/petugas/monitoring-peserta', [PetugasController::class, 'render'])->name('petugas.monitoring-peserta');
