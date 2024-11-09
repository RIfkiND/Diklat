<?php

use App\Http\Controllers\Mail\V1\EmailController;
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


// edp

Route::get('/dashboard/petugas/edp/edp-peserta', function () {
  return Inertia::render('Dashboard/Petugas/DataEdp/EdpSiswa/Index');
});
Route::get('/dashboard/petugas/edp/edp-peserta/show', function () {
  return Inertia::render('Dashboard/Petugas/DataEdp/EdpSiswa/Show');
})->name('petugas.dataedp-edp-siswa.show');

Route::get('/dashboard/petugas/edp/edp-other', function () {
  return Inertia::render('Dashboard/Petugas/DataEdp/EdpOther/Index');
});
Route::get('/dashboard/petugas/edp/edp-other/show', function () {
  return Inertia::render('Dashboard/Petugas/DataEdp/EdpOther/Show');
})->name('petugas.dataedp-edp-other.show');


require __DIR__ . '/Auth/auth.php';
require __DIR__ . '/Pages/petugas.php';
require __DIR__ . '/Pages/peserta.php';
require __DIR__ . '/Pages/admin.php';
