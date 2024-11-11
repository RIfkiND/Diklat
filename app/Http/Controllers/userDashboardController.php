<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use App\Models\BiodataPeserta;
use App\Models\Peserta;
use App\Models\Petugas;
use App\Http\Requests\Post\V1\Peserta\BiodataPesertaRequest;
use App\Models\Pelatihan;
use Illuminate\Http\RedirectResponse;

class UserDashboardController extends Controller
{
  public function index(): \Inertia\Response
  {

    $petugas = Petugas::all();
    $pelatihans = Pelatihan::all();
    return Inertia::render('Dashboard/User/index', compact("petugas","pelatihans"));
  }

  public function addBiodata(BiodataPesertaRequest $request): RedirectResponse
  {
    $validatedData = $request->validated();

    $user = Auth::user();
    $peserta = Peserta::find($user?->id);

    if (!$peserta) {
      return back()->with('error', 'Peserta not found.');
    }

    $validatedData['peserta_id'] = $peserta->id;

    try {
      BiodataPeserta::create($validatedData);
      return redirect()->route('user.dashboard')->with('success', 'Biodata berhasil ditambahkan.');
    } catch (\Exception $e) {
      Log::error('Failed to save biodata: ' . $e->getMessage());
      return back()->with('error', 'Gagal menambahkan biodata.');
    }
  }

  public function updateBiodata(BiodataPesertaRequest $request): RedirectResponse
{
    $validatedData = $request->validated();

    $user = Auth::user();
    $peserta = Peserta::find($user?->id);

    if (!$peserta) {
        return back()->with('error', 'Peserta not found.');
    }

    $biodataPeserta = BiodataPeserta::where('peserta_id', $peserta->id)->first();

    if (!$biodataPeserta) {
        return back()->with('error', 'Biodata not found.');
    }

    try {
        $biodataPeserta->update($validatedData);
        return redirect()->route('user.dashboard')->with('success', 'Biodata berhasil diperbarui.');
    } catch (\Exception $e) {
        Log::error('Failed to update biodata: ' . $e->getMessage());
        return back()->with('error', 'Gagal memperbarui biodata.');
    }
}

}
