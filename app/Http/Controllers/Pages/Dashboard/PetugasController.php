<?php

namespace App\Http\Controllers\Pages\Dashboard;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Peserta;
use App\Models\bukti_dukung;
use Illuminate\Http\Request;
use App\Models\BiodataPeserta;
use App\Models\hasil_monitoring;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Put\V1\Petugas\UpdateHasilMonitoringRequest;

class PetugasController extends Controller
{
  public function Petugas()
  {

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
  public function index()
  {
    $biodata = BiodataPeserta::with(['rtls', 'peserta'])->get();

    return Inertia::render('Dashboard/Petugas/MonitoringPeserta', [
      'biodata' => $biodata
    ]);
  }

  public function show($id)
  {

    $hasilMonitorings = hasil_monitoring::where('peserta_id', $id)->orWhere('rtl_id', $id)->get();

    $biodata = BiodataPeserta::with('peserta.rtls')->findOrFail($id);

    $rtls = $biodata->peserta->rtls->map(function ($rtl) {
      $rtl->formatted_waktu_pelaksanaan = Carbon::parse($rtl->waktu_pelaksanaan)->format('d F Y');
      return $rtl;
    });
    // dd($rtls);
    // dd($hasilMonitorings);
    return Inertia::render('Dashboard/Petugas/Show/PesertaRtlShow', [
      'biodata' => $biodata,
      'Rtls' => $rtls,
      'hasilMonitorings' => $hasilMonitorings,
    ]);
  }
  public function upload(Request $request, $id)
  {
    $request->validate([
      'realisasi' => 'required|date',
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
      'undangan' => $request->input('undangan'),
      'daftar_hadir' => $request->input('daftar_hadir'),
      'foto' => 'ya', // Assuming default value
      'vidio' => 'ya', // Assuming default value
      'link_foto' => $request->input('link_foto'),
      'link_vidio' => $request->input('link_vidio'),
      'rtl_id' =>  $id,
    ]);

    if (!$hasilMonitoring) {
      return back()->withErrors(['message' => 'Failed to create hasil_monitoring.']);
    }

    return redirect()->route('petugas.show-rtl-peserta', ['id' => $id])
      ->with('success', 'Data RTL berhasil ditambahkan.');
  }
  public function delete($id)
  {
    $hasilMonitoring = hasil_monitoring::findOrFail($id);

    if (!$hasilMonitoring->delete()) {
      return back()->withErrors(['message' => 'Failed to delete hasil_monitoring.']);
    }

    return redirect()->route('petugas.show-rtl-peserta', ['id' => $hasilMonitoring->peserta_id])
      ->with('success', 'Data RTL berhasil dihapus.');
  }
  public function update(UpdateHasilMonitoringRequest $request, $id)
  {
    $hasilMonitoring = hasil_monitoring::findOrFail($id);
  }
  public function PetugasBerkas()
  {
    return Inertia::render('Dashboard/Petugas/Report/upload-berkas/Index');
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
