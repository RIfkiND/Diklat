<?php

namespace App\Http\Controllers\Pages\Admin;

use App\Http\Controllers\Controller;
use App\Models\Peserta;
use App\Models\Petugas;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardPageController extends Controller
{
  public function Dashboard()
  {
    $pesertas = Peserta::latest()->paginate(5);

    return Inertia::render('Dashboard/Admin/Table/Users',compact('pesertas'));
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
    $pesertas = Peserta::latest()->paginate(5);

    return Inertia::render('Dashboard/Admin/Account/TableUser',compact('pesertas'));
  }

  // Account Table Petugas
  public function AccountPetugas()
  {
    $petugas = Petugas::latest()->paginate(5);
    return Inertia::render('Dashboard/Admin/Account/TablePetugas',compact('petugas'));
  }         


}
