<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use App\Models\BiodataPeserta;
use App\Models\Peserta;
use App\Http\Requests\Post\V1\Peserta\BiodataPesertaRequest;
use Illuminate\Http\RedirectResponse;

class UserDashboardController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Dashboard/User/index');
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
}
