<?php

use App\Http\Controllers\Pages\Dashboard\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/dashboard/petugas/monitoring-peserta', [DashboardController::class, 'Petugas'])->name('petugas.monitoring-peserta');
Route::get('/dashboard/petugas/monitoring-peserta/daftar-rtl', [DashboardController::class, 'PetugasDaftarRtlPeserta'])->name('petugas.daftar-rtl-peserta');
Route::get('/dashboard/petugas/data-edp', [DashboardController::class, 'PetugasDataEdp'])->name('petugas.data-edp');
Route::get('/dashboard/petugas/data-edp/show', [DashboardController::class, 'PetugasDataEdpShow'])->name('petugas.data-edp-show');

// Report

Route::get('/dashboard/petugas/report/hasil-pendampingan-rtl', [DashboardController::class, "PetugasReportPendampinganRtl"])->name('Petugas.report-pendampingan-rtl');
Route::get('/dashboard/petugas/report/hasil-pendampingan-rtl/slug', [DashboardController::class, "PetugasReportPendampinganRtlSlug"])->name('Petugas.report-pendampingan-rtl-slug');

Route::get('/dashboard/petugas/report/hasil-pengolahan-edp', [DashboardController::class, "PetugasReportPengolahanEdp"])->name('Petugas.report-pengolahan-edp');
Route::get('/dashboard/petugas/report/hasil-pengolahan-edp/slug', [DashboardController::class, "PetugasReportPengolahanEdpSlug"])->name('Petugas.report-pengolahan-edp-slug');
