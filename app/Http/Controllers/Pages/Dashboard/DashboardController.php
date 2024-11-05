<?php

namespace App\Http\Controllers\Pages\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
class DashboardController extends Controller
{
  public function Petugas()
  {
    return Inertia::render('Petugas/MonitoringPeserta');
  }
}
