<?php

namespace App\Http\Controllers;

use App\Models\Rtl;
use Inertia\Inertia;
use App\Models\Peserta;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\Put\V1\Peserta\RtlRequest;

class UserFormRegister extends Controller
{
    public function index()
    {
      $rtls = Rtl::all();

      // Debugging
      // dd($rtls); // This will dump the data and stop the execution

      return Inertia::render('Dashboard/User/DiklatRegister', [
          'rtls' => $rtls
      ]);
    }

    public function addForm(RtlRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();

        $user = Auth::user();
        $peserta = Peserta::find($user?->id);

        if (!$peserta) {
            return redirect()->back()->withErrors(['error' => 'Peserta record not found for the authenticated user.']);
        }

        $data = array_merge($request->validated(), ['peserta_id' => $peserta->id]);

        Rtl::create($data);

        return redirect()->route('user.register')->with('success', 'Data berhasil ditambahkan!');
    }
}
