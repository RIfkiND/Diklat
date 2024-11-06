  <?php

use App\Http\Controllers\Pages\Admin\DashboardPageController;
use App\Http\Controllers\Post\V1\AdminController;
  use Illuminate\Support\Facades\Route;
  use Inertia\Inertia;
  // Admin
  Route::middleware(['role:admins'])->prefix("/dashboard/admin")->group(function () {
    Route::get('/users/table/user', [DashboardPageController::class, 'Dashboard'])->name('admin.users');


      Route::get('/table/user/view', [DashboardPageController::class, 'viewUser'])->name('users.view');
      Route::get('/table/user/edit', [DashboardPageController::class, 'editUser'])->name('users.edit');
      Route::get('/users/table/user/view/viewdata', [DashboardPageController::class, 'viewDataUser'])->name('admin.users.view');



      Route::get('/account/user', [DashboardPageController::class, 'accountUser'])->name('account.user');
      Route::get('/account/petugas', [DashboardPageController::class, 'accountPetugas'])->name('account.petugas');

    });
    Route::post('/admin/add/peserta',[AdminController::class,'CreatePeserta'])->name('admin.add.peserta');



