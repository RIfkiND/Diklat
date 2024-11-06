<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\BiodataPeserta;

class userDashboardController extends Controller
{
  public function index()
  {
    return Inertia::render('Dashboard/User/index');
  }

  public function addBiodata(Request $request)
{
    // Validate form data
    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'kabupaten' => 'required|integer',
        'pelatihan' => 'required|string',
        'periode_mulai' => 'required|date', // You can still validate it as a date
        'sekolah' => 'required|string',
        'provinsi' => 'required|integer',
        'nama_petugas_pembimbing' => 'required|string',
        'periode_akhir' => 'required|date',
    ]);

    // Convert the dates to MySQL format (YYYY-MM-DD HH:MM:SS)
    $validatedData['periode_mulai'] = Carbon::parse($validatedData['periode_mulai'])->format('Y-m-d H:i:s');
    $validatedData['periode_akhir'] = Carbon::parse($validatedData['periode_akhir'])->format('Y-m-d H:i:s');

    // Save data to the database
    BiodataPeserta::create($validatedData);

    return redirect()->route('user.dashboard')->with('success', 'Biodata added successfully');
}
}
