<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EdpOtherController;
use App\Http\Controllers\EdpPesertaController;
use App\Http\Controllers\EdpDashboardController;
use App\Http\Controllers\Pages\Dashboard\PetugasController;

Route::middleware(['role:petugas'])->group(function () {
    Route::get('/dashboard/petugas/monitoring-peserta', [PetugasController::class, 'Petugas'])->name('petugas.monitoring-peserta');
    Route::get('/dashboard/petugas/monitoring-peserta/daftar-rtl', [PetugasController::class, 'index'])->name('petugas.daftar-rtl-peserta');
    Route::get('/dashboard/petugas/monitoring-peserta/daftar-rtl/{id}', [PetugasController::class, 'show'])->name('petugas.show-rtl-peserta');
    Route::get('/dashboard/petugas/data-edp', [PetugasController::class, 'PetugasDataEdp'])->name('petugas.data-edp');
    Route::get('/dashboard/petugas/data-edp/show', [PetugasController::class, 'PetugasDataEdpShow'])->name('petugas.data-edp-show');

    // Report
    Route::get('/dashboard/petugas/report/hasil-pendampingan-rtl', [PetugasController::class, "PetugasReportPendampinganRtl"])->name('petugas.report-pendampingan-rtl');
    Route::get('/dashboard/petugas/report/hasil-pendampingan-rtl/slug', [PetugasController::class, "PetugasReportPendampinganRtlSlug"])->name('petugas.report-pendampingan-rtl-slug');

    Route::get('/dashboard/petugas/report/hasil-pengolahan-edp', [PetugasController::class, "PetugasReportPengolahanEdp"])->name('petugas.report-pengolahan-edp');
    Route::get('/dashboard/petugas/report/hasil-pengolahan-edp/slug', [PetugasController::class, "PetugasReportPengolahanEdpSlug"])->name('petugas.report-pengolahan-edp-slug');

    Route::get('/dashboard/petugas/edp/edp-peserta', [EdpPesertaController::class, 'renderEdpPeserta'])->name('petugas.dataedp-edp-siswa');
    Route::get('/dashboard/petugas/edp/edp-other', [EdpOtherController::class, 'renderEdpOther'])->name('petugas.dataedp-edp-other');

    Route::get('/dashboard/p
    etugas/edp/edp-peserta/show', [EdpPesertaController::class, 'renderEdpPesertaShow'])->name('petugas.dataedp-edp-siswa.show');
    Route::get('/dashboard/petugas/edp/edp-other/show', [EdpOtherController::class, 'renderEdpOtherShow'])->name('petugas.dataedp-edp-other.show');

    Route::post('/dashboard/petugas/monitoring-peserta/daftar-rtl/{id}/upload', [PetugasController::class, 'upload'])->name('petugas.upload-rtl-peserta');

    Route::delete('/dashboard/petugas/monitoring-peserta/daftar-rtl/{id}', [PetugasController::class, 'delete'])->name('petugas.delete-rtl-peserta');
    
    Route::put('/dashboard/petugas/monitoring-peserta/daftar-rtl/{id}/update', [PetugasController::class, 'update'])->name('petugas.update-rtl-peserta');
});
