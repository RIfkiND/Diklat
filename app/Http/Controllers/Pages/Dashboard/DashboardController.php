<?php

namespace App\Http\Controllers\Pages\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
  public function Petugas()
  {
    return Inertia::render('Dashboard/Petugas/MonitoringPeserta');
  }

  public function PetugasDataEdp()
  {
    return Inertia::render('Dashboard/Petugas/DataEdp');
  }

  public function PetugasDataEdpShow()
  {
    return Inertia::render('Dashboard/Petugas/Data/Show');
  }
}
