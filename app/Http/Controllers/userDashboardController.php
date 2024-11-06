<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\BiodataPeserta;
use App\Models\Peserta;
use App\Http\Requests\Post\V1\Peserta\BiodataPesertaRequest; // Import kelas request

class UserDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/User/index');
    }

    public function addBiodata(BiodataPesertaRequest $request)
    {
        $validatedData = $request->validated();

        // Get the current logged-in user
        $user = auth()->user(); // Get the logged-in user

        // Assuming you have a relationship where each user is linked to a peserta
        // Let's get the Peserta for the logged-in user
        $peserta = Peserta::find($user->id); // Assuming user ID matches the peserta ID

        if ($peserta) {
            // Add the peserta_id to the validated data
            $validatedData['peserta_id'] = $peserta->id;
        } else {
            // If no peserta found for the logged-in user, return an error
            return redirect()->back()->with('error', 'Peserta not found.');
        }

        // Save the BiodataPeserta record to the database
        try {
            BiodataPeserta::create($validatedData);
            return redirect()->route('user.dashboard')->with('success', 'Biodata berhasil ditambahkan.');
        } catch (\Exception $e) {
            \Log::error('Failed to save biodata: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Gagal menambahkan biodata.');
        }
    }
  }
