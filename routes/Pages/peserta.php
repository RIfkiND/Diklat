<?php

use App\Http\Controllers\UserDashboardController;
use App\Http\Controllers\UserFormRegister;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\EdpFormController;
use App\Http\Controllers\function\V1\EdpFunctionformController;


//peserta
Route::middleware(['role:peserta'])->group(function () {
    Route::get('/dashboard/user', [UserDashboardController::class, 'index'])->name('user.dashboard');
    Route::get('/dashboard/user/register', [UserFormRegister::class, 'index'])->name('user.register');


    // Monitoring Harus ganti Route ya BE
    Route::get('/dashboard/user/monitoring/user', function () {
        return Inertia::render('Dashboard/User/Monitoring');
    });
    // End Monitoring

    Route::post('/dashboard/user', [userDashboardController::class, 'addBiodata']);
    Route::post('/dashboard/user/register', [UserFormRegister::class, 'addForm']);
});


//form
Route::get('/form-edp-siswa', [EdpFormController::class, 'renderSiswa'])->name('form-edp.siswa');
Route::get('/form-edp', [EdpFormController::class, 'render'])->name('form-edp.other');
Route::get('/form-edp-send-link', [EdpFormController::class, 'renderSendLink'])->name('form-edp.link');


Route::post('/form/edp/siswa/proses',[EdpFunctionformController::class ,'EdpPostSiswa'])->name('post.edp.siswa');
<<<<<<< HEAD

Route::post('/form/edp/other/proses',[EdpFunctionformController::class ,'EdpPostOther'])->name('post.edp.other');
=======
>>>>>>> 9d369328dc9db4baba9e7359204f382dde069f84
