<?php

use App\Http\Controllers\Mail\V1\EmailController;
use App\Http\Controllers\PDF\MainReportController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//   return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
// Route::get('/dashboard/admin', function () {
//   return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');



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
