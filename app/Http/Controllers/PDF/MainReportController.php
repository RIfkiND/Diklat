<?php

namespace App\Http\Controllers\PDF;

use App\Http\Controllers\Controller;
use App\Models\Berkas;
use App\Models\BiodataPeserta;
use App\Models\EdpOther;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Barryvdh\DomPDF\Facade\Pdf;
use Barryvdh\Snappy\Facades\SnappyPdf;
class MainReportController extends Controller
{
  public function main_report_view()
  {
    $petugas = Auth::guard('petugas')->user();
    $biodataPeserta = BiodataPeserta::with(['peserta', 'pelatihan', 'petugas1', 'petugas2', 'rtls'])
    ->where('petugas_id_1', $petugas->id)
    ->orWhere('petugas_id_2', $petugas->id)
    ->distinct()
    ->get();

    $biodataPesertaNames = $biodataPeserta->pluck('fullname')->toArray();

    $EdpOther = EdpOther::whereIn('nama_tamatan_pelatihan', $biodataPesertaNames)->get();


$berkas = Berkas::with('photo_berkas')
    ->where('petugas_id', $petugas->id)
    ->take(1)
    ->get();

return view("reports.main_report", compact('EdpOther','petugas', 'biodataPeserta', 'berkas'));
  }


  public function downloadpdf()
{
    $petugas = Auth::guard('petugas')->user();
    $biodataPeserta = BiodataPeserta::with(['peserta', 'pelatihan', 'petugas1', 'petugas2', 'rtls'])
        ->where('petugas_id_1', $petugas->id)
        ->orWhere('petugas_id_2', $petugas->id)
        ->distinct()
        ->get();

    $biodataPesertaNames = $biodataPeserta->pluck('fullname')->toArray();
    $EdpOther = EdpOther::whereIn('nama_tamatan_pelatihan', $biodataPesertaNames)->get();
    $berkas = Berkas::with('photo_berkas')->where('petugas_id', $petugas->id)->get();

    $pdf = Pdf::loadView('reports.main_report', compact('EdpOther', 'petugas', 'biodataPeserta', 'berkas'))
    ->setPaper('A4', 'portrait')
    ->setOptions([
        'defaultFont' => 'sans-serif',
        'isHtml5ParserEnabled' => true,
        'isPhpEnabled' => true
    ]);

return $pdf->download('main_report.pdf');


}

}
