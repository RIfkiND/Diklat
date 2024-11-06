  <?php

    use App\Http\Controllers\AdminDashboardController;
    use Illuminate\Support\Facades\Route;
    use Inertia\Inertia;
    // Admin
    //   Route::middleware(['role:admins'])->group(function () {
    Route::get('/dashboard/admin/users/table/user', [AdminDashboardController::class, 'index'])->name('admin.users');
    Route::get('/dashboard/admin/users/table/user/view', function () {
        return Inertia::render('Dashboard/Admin/Table/User/ViewData');
    })->name(name: 'admin.users.view');
    Route::get('/dashboard/admin/users/table/user/edit', function () {
        return Inertia::render('Dashboard/Admin/Table/User/Edit');
    })->name(name: 'admin.users.edit');

    // Admin Table User
    Route::get('/dashboard/admin/users/table/user', [AdminDashboardController::class, 'index'])->name('admin.users');
    // Admin Table User View and Edit
    Route::get('/dashboard/admin/users/table/user/view', function () {
        return Inertia::render('Dashboard/Admin/Table/User/ViewData');
    })->name(name: 'admin.users.view');
    Route::get('/dashboard/admin/users/table/user/edit', function () {
        return Inertia::render('Dashboard/Admin/Table/User/Edit');
    })->name(name: 'admin.users.edit');

    // Account Table User
    Route::get('/dashboard/admin/account/user', function () {
        return Inertia::render('Dashboard/Admin/Account/TableUser');
    })->name(name: 'admin.account.user');
    // Account Table Petugas
    Route::get('/dashboard/admin/account/petugas', function () {
        return Inertia::render('Dashboard/Admin/Account/TablePetugas');
    })->name(name: 'admin.account.petugas');
//   });
