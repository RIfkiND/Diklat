<?php

use App\Http\Controllers\Pages\Dashboard\PetugasController;
use Illuminate\Support\Facades\Route;


Route::middleware(['role:petugas'])->group(function () {
    Route::get('/dashboard/petugas/monitoring-peserta', [PetugasController::class, 'Petugas'])->name('petugas.monitoring-peserta');
    Route::get('/dashboard/petugas/monitoring-peserta/daftar-rtl', [PetugasController::class, 'PetugasDaftarRtlPeserta'])->name('petugas.daftar-rtl-peserta');
    Route::get('/dashboard/petugas/data-edp', [PetugasController::class, 'PetugasDataEdp'])->name('petugas.data-edp');
    Route::get('/dashboard/petugas/data-edp/show', [PetugasController::class, 'PetugasDataEdpShow'])->name('petugas.data-edp-show');

    // Report
    Route::get('/dashboard/petugas/report/hasil-pendampingan-rtl', [PetugasController::class, "PetugasReportPendampinganRtl"])->name('Petugas.report-pendampingan-rtl');
    Route::get('/dashboard/petugas/report/hasil-pendampingan-rtl/slug', [PetugasController::class, "PetugasReportPendampinganRtlSlug"])->name('Petugas.report-pendampingan-rtl-slug');

    Route::get('/dashboard/petugas/report/hasil-pengolahan-edp', [PetugasController::class, "PetugasReportPengolahanEdp"])->name('Petugas.report-pengolahan-edp');
    Route::get('/dashboard/petugas/report/hasil-pengolahan-edp/slug', [PetugasController::class, "PetugasReportPengolahanEdpSlug"])->name('Petugas.report-pengolahan-edp-slug');
});
