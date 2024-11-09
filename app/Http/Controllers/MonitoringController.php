<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\BiodataPeserta;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\Put\V1\Peserta\RtlRequest;
use Carbon\Carbon;

class MonitoringController extends Controller
{
    public function Monitoring()
    {
        $biodata_pesertas = BiodataPeserta::with(["pelatihan"])->get()->map(function ($peserta) {
            $peserta->formatted_periode_mulai = Carbon::parse($peserta->periode_mulai)->format('Y-m-d');
            $peserta->formatted_periode_akhir = Carbon::parse($peserta->periode_akhir)->format('Y-m-d');
            return $peserta;
        });

        return Inertia::render('Dashboard/User/Monitoring', [
            'BiodataPeserta' => $biodata_pesertas,
        ]);
    }
}
