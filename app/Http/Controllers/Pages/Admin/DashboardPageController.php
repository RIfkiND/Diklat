<?php

namespace App\Http\Controllers\Pages\Admin;

use App\Http\Controllers\Controller;
use App\Models\Peserta;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardPageController extends Controller
{
  public function Dashboard()
  {
    return Inertia::render('Dashboard/Admin/Table/Users');
  }

  // Admin Table User
  public function viewUser()
  {
    return Inertia::render('Dashboard/Admin/Table/User/ViewData');
  }

  public function editUser()
  {
    return Inertia::render('Dashboard/Admin/Table/User/Edit');
  }

  // Account Table User
  public function accountUser()
  {
    $pesertas = Peserta::latest()->paginate(8);

    return Inertia::render('Dashboard/Admin/Account/TableUser',compact('pesertas'));
  }

  // Account Table Petugas
  public function accountPetugas()
  {
    return Inertia::render('Dashboard/Admin/Account/TablePetugas');
  }

  public function viewDataUser()
  {
    return Inertia::render('Dashboard/Admin/Table/User/View/ViewData');
  }
}
