<?php

namespace App\Http\Controllers\PDF;

use App\Http\Controllers\Controller;
use App\Models\BiodataPeserta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PDF;

class MainReportController extends Controller
{
  public function main_report_view()
  {
    $petugas = Auth::guard('petugas')->user();
    $biodataPeserta = BiodataPeserta::with(['peserta', 'pelatihan', 'petugas1', 'petugas2','rtls'])
    ->where('petugas_id_1', $petugas->id)
    ->orWhere('petugas_id_2', $petugas->id)
    ->get();

    return view("reports.main_report",compact('petugas','biodataPeserta','petugas'));
  }


  // public function downloadpdf()
  // {

  //   $pdf = PDF::loadView('reports.main_report', compact('data'));

  //   return $pdf->download('main_report.pdf');

  // }
}
