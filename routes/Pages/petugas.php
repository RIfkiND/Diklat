<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EdpOtherController;
use App\Http\Controllers\EdpPesertaController;
use App\Http\Controllers\EdpDashboardController;
use App\Http\Controllers\Pages\Dashboard\PetugasController;


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

    Route::get('/dashboard/petugas/edp/edp-peserta', [EdpPesertaController::class, 'renderEdpPeserta'])->name('petugas.dataedp-edp-siswa');
    Route::get('/dashboard/petugas/edp/edp-other', [EdpOtherController::class, 'renderEdpOther'])->name('petugas.dataedp-edp-other');

    Route::get('/dashboard/petugas/edp/edp-peserta/show', [EdpPesertaController::class, 'renderEdpPesertaShow'])->name('petugas.dataedp-edp-siswa.show');
    Route::get('/dashboard/petugas/edp/edp-other/show', [EdpOtherController::class, 'renderEdpOtherShow'])->name('petugas.dataedp-edp-other.show');
});
