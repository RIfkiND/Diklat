<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PetugasController extends Controller
{
  public function renderMonitoring()
  {
    return Inertia::render('Dashboard/Petugas/MonitoringPeserta');
  }
  public function renderDataEdp()
  {
    return Inertia::render('Dashboard/Petugas/DataEdp');
  }
}
