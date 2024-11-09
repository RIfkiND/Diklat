<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\EdpOther;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;

class EdpOtherController extends Controller
{
    public function renderEdpOther()
    {
      $edp_others = EdpOther::all()->map(function ($peserta) {
        $peserta->formatted_tanggal_dimulai = Carbon::parse($peserta->tanggal_dimulai)->format('Y-m-d');
        $peserta->formatted_tanggal_selesai = Carbon::parse($peserta->tanggal_selesai)->format('Y-m-d');
        return $peserta;
    });
        return Inertia::render('Dashboard/Petugas/DataEdp/EdpOther/Index', [
            'EdpOther' => $edp_others,
        ]);
    }

    public function renderEdpOtherShow(Request $request)
    {
        $selectedData = $request->input('selectedData');
        return Inertia::render('Dashboard/Petugas/DataEdp/EdpOther/Show', [
            'selectedData' => $selectedData,
        ]);
    }
}
