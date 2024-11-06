  <?php

use App\Http\Controllers\AdminDashboardController;
use Illuminate\Routing\Route;
use Inertia\Inertia;
// Admin
Route::get('/dashboard/admin/users/table/user', [AdminDashboardController::class, 'index'])->name('admin.users');

Route::get('/dashboard/admin/users/table/user/view', function () {
    return Inertia::render('Dashboard/Admin/Table/User/ViewData');
})->name(name: 'admin.users.view');
Route::get('/dashboard/admin/users/table/user/edit', function () {
    return Inertia::render('Dashboard/Admin/Table/User/Edit');
})->name(name: 'admin.users.edit');

