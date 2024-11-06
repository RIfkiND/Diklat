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
  public function PetugasDaftarRtlPeserta()
  {
    return Inertia::render('Dashboard/Petugas/Show/PesertaRtlShow');
  }
  public function PetugasReportPendampinganRtl()
  {
    return Inertia::render('Dashboard/Petugas/Report/HasilPendampinganRtl/SelectUser');
  }
  public function PetugasReportPendampinganRtlSlug()
  {
    return Inertia::render('Dashboard/Petugas/Report/HasilPendampinganRtl/ReportPage');
  }
  public function PetugasReportPengolahanEdp()
  {
    return Inertia::render('Dashboard/Petugas/Report/HasilPengolahanEdp/SelectUser');
  }
  public function PetugasReportPengolahanEdpSlug()
  {
    return Inertia::render('Dashboard/Petugas/Report/HasilPengolahanEdp/ReportPage');
  }
}
