<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Edp;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request; // Ensure this line is present

class EdpPesertaController extends Controller
{
    public function renderEdpPeserta()
    {
        $edp_pesertas = Edp::all()->map(function ($peserta) {
            $peserta->formatted_tanggal_dimulai = Carbon::parse($peserta->tanggal_dimulai)->format('Y-m-d');
            $peserta->formatted_tanggal_selesai = Carbon::parse($peserta->tanggal_selesai)->format('Y-m-d');
            return $peserta;
        });

        return Inertia::render('Dashboard/Petugas/DataEdp/EdpSiswa/Index', [
            'Edp' => $edp_pesertas
        ]);
    }

    public function renderEdpPesertaShow(Request $request)
    {
        $selectedData = $request->input('selectedData');
        return Inertia::render('Dashboard/Petugas/DataEdp/EdpSiswa/Show', [
            'selectedData' => $selectedData,
        ]);
    }
}
