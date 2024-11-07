  <?php

  use App\Http\Controllers\Pages\Admin\DashboardPageController;
  use App\Http\Controllers\function\V1\PesertaFunctionController;
  use App\Http\Controllers\function\V1\PetugasFunctionController;
  use Illuminate\Support\Facades\Route;
  use Inertia\Inertia;
  // Admin
 Route::middleware(['role:admins'])->prefix("/dashboard/admin")->group(function () {
    Route::get('/users/table/user', [DashboardPageController::class, 'Dashboard'])->name('admin.users');


    Route::get('/table/user/view', [DashboardPageController::class, 'ViewPeserta'])->name('peserta.view');
    Route::get('/table/user/edit', [DashboardPageController::class, 'EditPeserta'])->name('peserta.edit');


      Route::get('/account/user', [DashboardPageController::class, 'AccountPeserta'])->name('account.peserta');
      Route::get('/account/petugas', [DashboardPageController::class, 'AccountPetugas'])->name('account.petugas');

    });
    
  //ADMIN FUCNTION
  Route::post('/admin/add/peserta', action: [PesertaFunctionController::class, 'CreatePeserta'])->name('admin.add.peserta');
  Route::put('/admin/update/peserta/{id}', [PesertaFunctionController::class, 'UpdatePeserta'])->name('admin.update.peserta');
  Route::delete('/admin/delete/peserta/{id}', [PesertaFunctionController::class, 'DeletePeserta'])->name('admin.delete.peserta');
  Route::get('/peserta/search', [PesertaFunctionController::class, 'SearchPeserta'])->name('peserta.search');

  //PETUGAS FUNCTION
  Route::post('/admin/add/petugas', [PetugasFunctionController::class, 'CreatePetugas'])->name('admin.add.petugas');
  Route::put('/admin/update/petugas/{id}', [PetugasFunctionController::class, 'UpdatePetugas'])->name('admin.update.petugas');
  Route::delete('/admin/delete/petugas/{id}', [PetugasFunctionController::class, 'DeletePetugas'])->name('admin.delete.petugas');
  Route::get('/petugas/search', [PetugasFunctionController::class, 'SearchPetugas'])->name('petugas.search');

