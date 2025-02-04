<?php

use App\Http\Controllers\Mail\V1\EmailController;
use App\Http\Controllers\PDF\MainReportController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



// landingpage

Route::get('/', function () {
  return Inertia::render('Landingpage/Landingpage');
})->name('landingpage');

Route::post('send/email', [EmailController::class, 'SendEmail'])->name('send.email');



// Report

Route::get('/report/main-report/pdf', [MainReportController::class, 'main_report_view'])->name('main-report-view');


require __DIR__ . '/Pages/search.php';
require __DIR__ . '/Auth/auth.php';
require __DIR__ . '/Pages/petugas.php';
require __DIR__ . '/Pages/peserta.php';
require __DIR__ . '/Pages/admin.php';
