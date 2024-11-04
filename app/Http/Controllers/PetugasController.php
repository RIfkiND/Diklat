<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PetugasController extends Controller
{
  public function render()
  {
    return Inertia::render('Petugas/MonitoringPeserta');
  }
}
