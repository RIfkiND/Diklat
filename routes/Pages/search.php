<?php

use App\Http\Controllers\function\V1\SearchFunctionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['role:petugas'])->group(function () {

  Route::get("/monitoring/peserta/search",[SearchFunctionController::class,'MonitoringSearch'])->name("search.monitoring");
  Route::get("/edp/other/search",[SearchFunctionController::class,'SearchEdpOther'])->name("search.edpother");
  Route::get("/edp/siswa/search",[SearchFunctionController::class,'SearchEdpSiswa'])->name("search.edpsiswa");



});
