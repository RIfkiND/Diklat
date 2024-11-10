<?php

namespace App\Http\Controllers\Pages\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\BiodataPeserta;
use App\Models\Peserta;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


class PetugasController extends Controller
{
  public function Petugas()
  {
    if (!Auth::guard('petugas')->check()) {
      return redirect('/')->with('error', 'You must be logged in to view this page.');
  }
  $user = Auth::guard('petugas')->user();
  $petugasId = $user->id;
    
    $biodata = BiodataPeserta::with(['petugas1', 'petugas2', 'pelatihan'])
        ->where('petugas_id_1', $petugasId)
        ->orWhere('petugas_id_2', $petugasId)
        ->latest()
        ->paginate(5);

    return Inertia::render('Dashboard/Petugas/MonitoringPeserta', [
        'biodata' => $biodata
    ]);
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
