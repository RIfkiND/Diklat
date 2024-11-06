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
  public function ViewPeserta()
  {
    return Inertia::render('Dashboard/Admin/Table/User/ViewData');
  }

  public function EditPeserta()
  {
    return Inertia::render('Dashboard/Admin/Table/User/Edit');
  }

  // Account Table User
  public function AccountPeserta()
  {
    $pesertas = Peserta::latest()->paginate(8);

    return Inertia::render('Dashboard/Admin/Account/TableUser',compact('pesertas'));
  }

  // Account Table Petugas
  public function AccountPetugas()
  {
    return Inertia::render('Dashboard/Admin/Account/TablePetugas');
  }


}
