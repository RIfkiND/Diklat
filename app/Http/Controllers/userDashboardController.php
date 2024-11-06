<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\BiodataPeserta;

class UserDashboardController extends Controller
{
    public function index()
    {
        // Mengembalikan tampilan untuk user dashboard
        return Inertia::render('Dashboard/User/index');
    }

    public function addBiodata(Request $request)
{
    // Validasi form data
    $validatedData = $request->validate([
        'fullname' => 'required|string|max:255',
        'kabupaten' => 'required|integer',
        'pelatihan' => 'required|string',
        'periode_mulai' => 'required|date',
        'sekolah' => 'required|string',
        'provinsi' => 'required|integer',
        'nama_petugas_pembimbing' => 'required|string',
        'periode_akhir' => 'required|date',
    ]);

    // Menggunakan Carbon untuk mengonversi tanggal jika perlu
    // Jika periode_mulai dan periode_akhir berupa format string tanggal, kita konversikan ke format Y-m-d
    $validatedData['periode_mulai'] = Carbon::parse($validatedData['periode_mulai'])->format('Y-m-d');
    $validatedData['periode_akhir'] = Carbon::parse($validatedData['periode_akhir'])->format('Y-m-d');

    // Menyimpan biodata peserta yang terhubung dengan pengguna yang sedang login
    BiodataPeserta::create([
        'fullname' => $validatedData['fullname'],
        'kabupaten' => $validatedData['kabupaten'],
        'pelatihan' => $validatedData['pelatihan'],
        'periode_mulai' => $validatedData['periode_mulai'],
        'sekolah' => $validatedData['sekolah'],
        'provinsi' => $validatedData['provinsi'],
        'nama_petugas_pembimbing' => $validatedData['nama_petugas_pembimbing'],
        'periode_akhir' => $validatedData['periode_akhir'],
        'peserta_id' => auth()->user()->id, // Mengambil ID user yang sedang login
    ]);

    return redirect()->route('user.dashboard')->with('success', 'Biodata added successfully');
}
}
