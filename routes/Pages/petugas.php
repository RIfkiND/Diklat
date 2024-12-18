<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EdpOtherController;
use App\Http\Controllers\EdpPesertaController;
use App\Http\Controllers\EdpDashboardController;
use App\Http\Controllers\Pages\Dashboard\PetugasController;
use App\Http\Controllers\function\V1\UploadBerkasController;
use App\Http\Controllers\function\V1\EdpFunctionFormUpdateController;

Route::middleware(['role:petugas'])->group(function () {
    Route::get('/dashboard/petugas/monitoring-peserta', [PetugasController::class, 'Petugas'])->name('petugas.monitoring-peserta');
    Route::get('/dashboard/petugas/monitoring-peserta/daftar-rtl', [PetugasController::class, 'index'])->name('petugas.daftar-rtl-peserta');
    Route::get('/dashboard/petugas/monitoring-peserta/daftar-rtl/{id}', [PetugasController::class, 'show'])->name('petugas.show-rtl-peserta');
    Route::get('/dashboard/petugas/data-edp', [PetugasController::class, 'PetugasDataEdp'])->name('petugas.data-edp');
    Route::get('/dashboard/petugas/data-edp/show', action: [PetugasController::class, 'PetugasDataEdpShow'])->name(name: 'petugas.data-edp-show');
    Route::get('/dashboard/petugas/report/upload-berkas',  [PetugasController::class, 'PetugasBerkas'])->name('UploadBerkas');

    Route::post('/dashboard/petugas/monitoring-peserta/daftar-rtl/{id}/upload', [PetugasController::class, 'upload'])->name('petugas.upload-rtl-peserta');
    Route::delete('/dashboard/petugas/monitoring-peserta/daftar-rtl/{id}', [PetugasController::class, 'delete'])->name('petugas.delete-rtl-peserta');
    Route::put('/dashboard/petugas/monitoring-peserta/daftar-rtl/{id}/update', [PetugasController::class, 'update'])->name('petugas.update-rtl-peserta');
    // Report
    Route::get('/dashboard/petugas/report/hasil-pendampingan-rtl', [PetugasController::class, "PetugasReportPendampinganRtl"])->name('petugas.report-pendampingan-rtl');
    Route::get('/dashboard/petugas/report/hasil-pendampingan-rtl/slug', [PetugasController::class, "PetugasReportPendampinganRtlSlug"])->name('petugas.report-pendampingan-rtl-slug');

    Route::get('/dashboard/petugas/report/hasil-pengolahan-edp', [PetugasController::class, "PetugasReportPengolahanEdp"])->name('petugas.report-pengolahan-edp');
    Route::get('/dashboard/petugas/report/hasil-pengolahan-edp/slug', [PetugasController::class, "PetugasReportPengolahanEdpSlug"])->name('petugas.report-pengolahan-edp-slug');

    Route::get('/dashboard/petugas/edp/edp-peserta', [EdpPesertaController::class, 'renderEdpPeserta'])->name('petugas.dataedp-edp-siswa');
    Route::put('/dashboard/petugas/edp/edp-peserta/{id}/update', [EdpPesertaController::class, 'EdpEdit'])->name('petugas.data.edp-siswa.update');
    Route::get('/dashboard/petugas/edp/edp-other', [EdpOtherController::class, 'renderEdpOther'])->name('petugas.dataedp-edp-other');
    Route::put('/dashboard/petugas/edp/edp-other/{id}/update', [EdpOtherController::class, 'EdpOtherEdit'])->name('petugas.data.edp-other.update');

    Route::get('/dashboard/petugas/edp/edp-peserta/show', [EdpPesertaController::class, 'renderEdpPesertaShow'])->name('petugas.data.edp-siswa.show');
    Route::get('/dashboard/petugas/edp/edp-other/show', [EdpOtherController::class, 'renderEdpOtherShow'])->name('petugas.data.edp-other.show');

});

Route::post('/petugas/upload/berkas',[UploadBerkasController::class ,'upload'])->name('upload.berkas');
