  <?php

use App\Http\Controllers\Pages\Admin\DashboardPageController;
use App\Http\Controllers\Post\V1\PesertaController;
  use Illuminate\Support\Facades\Route;
  use Inertia\Inertia;
  // Admin
//   Route::middleware(['role:admins'])->prefix("/dashboard/admin")->group(function () {
    Route::get('/users/table/user', [DashboardPageController::class, 'Dashboard'])->name('admin.users');


      Route::get('/table/user/view', [DashboardPageController::class, 'ViewPeserta'])->name('peserta.view');
      Route::get('/table/user/edit', [DashboardPageController::class, 'EditPeserta'])->name('peserta.edit');

      Route::get('/account/user', [DashboardPageController::class, 'AccountPeserta'])->name('account.peserta');
      Route::get('/account/petugas', [DashboardPageController::class, 'AccountPetugas'])->name('account.petugas');

    // });
    Route::post('/admin/add/peserta',[PesertaController::class,'CreatePeserta'])->name('admin.add.peserta');

    Route::put('/admin/update/peserta/{id}',[PesertaController::class,'UpdatePeserta'])->name('admin.update.peserta');

    Route::delete('/admin/delete/peserta/{id}',[PesertaController::class,'DeletePeserta'])->name('admin.delete.peserta');

    Route::post('/peserta/search', [PesertaController::class, 'SearchPeserta'])->name('peserta.search');
