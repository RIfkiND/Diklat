<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\BiodataPeserta;
use App\Models\Peserta;
use App\Http\Requests\Post\V1\Peserta\BiodataPesertaRequest;

class UserDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/User/index');
    }

    public function addBiodata(BiodataPesertaRequest $request)
    {
        $validatedData = $request->validated();

        $user = auth()->user();
        $peserta = Peserta::find($user->id);

        if ($peserta) {
            $validatedData['peserta_id'] = $peserta->id;
        } else {
            return redirect()->back()->with('error', 'Peserta not found.');
        }

        try {
            BiodataPeserta::create($validatedData);
            return redirect()->route('user.dashboard')->with('success', 'Biodata berhasil ditambahkan.');
        } catch (\Exception $e) {
            \Log::error('Failed to save biodata: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Gagal menambahkan biodata.');
        }
    }
  }
