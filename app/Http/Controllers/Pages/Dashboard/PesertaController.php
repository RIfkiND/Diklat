<?php

namespace App\Http\Controllers\Pages\Dashboard;

use App\Http\Controllers\Controller;
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

class PesertaController extends Controller
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
        return back()->with('success', 'Biodata berhasil ditambahkan.');
      } catch (\Exception $e) {
        Log::error('Failed to save biodata: ' . $e->getMessage());
        return back()->with('error', 'Gagal menambahkan biodata.');
      }
    }
  
    public function updateBiodata(BiodataPesertaRequest $request): RedirectResponse
    {
       
        if (!Auth::check()) {
            return redirect()->route('login')->with('error', 'Please log in to update your biodata.');
        }
  
        $validatedData = $request->validated();
  
        try {
            // Get authenticated user and associated peserta
            $user = Auth::user();
            $peserta = Peserta::findOrFail($user->id);
  
            // Find or create biodata if it doesn't exist
            $biodataPeserta = BiodataPeserta::firstOrCreate(
                ['peserta_id' => $peserta->id],
                $validatedData
            );
  
            $biodataPeserta->update($validatedData);
  
            return redirect()->route('user.dashboard')->with('success', 'Biodata berhasil diperbarui.');
        } catch (\Exception $e) {
            Log::error('Failed to update biodata for Peserta ID ' . ($user->id ?? 'N/A') . ': ' . $e->getMessage());
            return back()->with('error', 'Gagal memperbarui biodata. Silakan coba lagi.');
        }
    }
}
