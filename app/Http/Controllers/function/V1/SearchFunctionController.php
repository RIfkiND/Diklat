<?php

namespace App\Http\Controllers\function\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\BiodataPeserta;
use App\Models\Edp;
use Inertia\Inertia;
use Carbon\Carbon;
use App\Models\EdpOther;

class SearchFunctionController extends Controller
{
  public function MonitoringSearch(Request $request)
  {
    $user = Auth::guard('petugas')->user();
    $petugasId = $user->id;

    // Get the search query from the request
    $search = $request->input('search');

    // Query the data with optional search criteria
    $biodata = BiodataPeserta::with(['petugas1', 'petugas2', 'pelatihan'])
      ->where(function ($query) use ($petugasId) {
        $query->where('petugas_id_1', $petugasId)
          ->orWhere('petugas_id_2', $petugasId);
      })
      ->when($search, function ($query, $search) {
        $query->where('fullname', 'like', "%{$search}%")
          ->orWhere('sekolah', 'like', "%{$search}%");
      })
      ->latest()
      ->paginate(5)
      ->appends(['search' => $search]);
    return Inertia::render('Dashboard/Petugas/MonitoringPeserta', [
      'biodata' => $biodata,
      'search' => $search,
    ]);
  }


  public function SearchEdpOther(Request $request)
  {
    $search = $request->input('search');

    $edp_others = EdpOther::when($search, function ($query, $search) {
      $query->where('nama_responden', 'like', "%{$search}%")
        ->orWhere('sekolah', 'like', "%{$search}%");
    })
      ->paginate(5);

    $edp_others->getCollection()->transform(function ($peserta) {
      $peserta->formatted_tanggal_dimulai = Carbon::parse($peserta->tanggal_dimulai)->format('Y-m-d');
      $peserta->formatted_tanggal_selesai = Carbon::parse($peserta->tanggal_selesai)->format('Y-m-d');
      return $peserta;
    });

    return Inertia::render('Dashboard/Petugas/DataEdp/EdpOther/Index', [
      'EdpOther' => $edp_others,
      'search' => $search,
    ]);
  }

  public function SearchEdpSiswa(Request $request)
  {
    $search = $request->input('search');

    $edp_pesertas = Edp::when($search, function ($query, $search) {
      $query->where('nama_responden', 'like', "%{$search}%")
        ->orWhere('sekolah', 'like', "%{$search}%");
    })
      ->paginate(5);

    $edp_pesertas->getCollection()->transform(function ($peserta) {
      $peserta->formatted_tanggal_dimulai = Carbon::parse($peserta->tanggal_dimulai)->format('Y-m-d');
      $peserta->formatted_tanggal_selesai = Carbon::parse($peserta->tanggal_selesai)->format('Y-m-d');
      return $peserta;
    });

    return Inertia::render('Dashboard/Petugas/DataEdp/EdpSiswa/Index', [
      'Edp' => $edp_pesertas,
      'search' => $search,
    ]);
  }
}
