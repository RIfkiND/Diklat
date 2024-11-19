<?php

namespace App\Http\Controllers\Pages\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\BiodataPeserta;
use App\Models\hasil_monitoring;
use App\Models\bukti_dukung;
use App\Models\Peserta;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
class PetugasController extends Controller
{
  public function Petugas()
  {
    $biodata = BiodataPeserta::with(['peserta','rtls'])->latest()->paginate(5);
    return Inertia::render('Dashboard/Petugas/MonitoringPeserta', compact('biodata'));
  }

  public function PetugasDataEdp()
  {
    return Inertia::render('Dashboard/Petugas/DataEdp');
  }

  public function PetugasDataEdpShow()
  {
    return Inertia::render('Dashboard/Petugas/Data/Show');
  }
  public function index()
    {
        $biodata = BiodataPeserta::with(['rtls','peserta'])->get();

        return Inertia::render('Dashboard/Petugas/MonitoringPeserta', [
            'biodata' => $biodata
        ]);
    }

    public function show($id)
    {
        $biodata = BiodataPeserta::with('peserta.rtls')->findOrFail($id);
        $rtls = $biodata->peserta->rtls->map(function ($rtl) {
            // Format the waktu_pelaksanaan date to "day month year"
            $rtl->formatted_waktu_pelaksanaan = Carbon::parse($rtl->waktu_pelaksanaan)->format('d F Y');
            return $rtl;
        });

        return Inertia::render('Dashboard/Petugas/Show/PesertaRtlShow', [
            'biodata' => $biodata,
            'Rtls' => $rtls,
        ]);
    }
    public function upload(Request $request, $id)
{
    $request->validate([
        'realisasi' => 'required|string',
        'kendala' => 'required|string',
        'solusi' => 'required|string',
        'undangan' => 'required|string',
        'daftar_hadir' => 'required|string',
        'link_foto' => 'required|string',
        'link_vidio' => 'required|string',
    ]);

    $hasilMonitoring = hasil_monitoring::create([
        'peserta_id' => $id,
        'realisasi' => $request->input('realisasi'),
        'kendala' => $request->input('kendala'),
        'solusi' => $request->input('solusi'),
    ]);

    if (!$hasilMonitoring) {
        return back()->withErrors(['message' => 'Failed to create hasil_monitoring.']);
    }

    if ($hasilMonitoring->id) {
        bukti_dukung::create([
            'peserta_id' => $id,
            'undangan' => $request->input('undangan'),
            'daftar_hadir' => $request->input('daftar_hadir'),
            'link_foto' => $request->input('link_foto'),
            'link_vidio' => $request->input('link_vidio'),
            'hasil_monitoring_id' => $hasilMonitoring->id,
        ]);

        return redirect()->route('petugas.show-rtl-peserta', ['id' => $id])
                         ->with('success', 'Data RTL berhasil ditambahkan.');
    } else {
        return back()->withErrors(['message' => 'Failed to retrieve hasil_monitoring ID.']);
    }
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
