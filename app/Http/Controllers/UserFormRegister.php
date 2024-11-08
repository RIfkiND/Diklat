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
        return Inertia::render('Dashboard/User/DiklatRegister', [
            'Rtl' => $rtls,
        ]);
    }

    public function addKegiatan(RtlRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();

        $user = Auth::user();
        $peserta = Peserta::find($user?->id);

        if (!$peserta) {
            return redirect()->back()->withErrors(['error' => 'Peserta record not found for the authenticated user.']);
        }

        // Manipulasi tanggal untuk menghilangkan waktu
        if (isset($validatedData['waktu_pelaksanaan'])) {
            $validatedData['waktu_pelaksanaan'] = Carbon::parse($validatedData['waktu_pelaksanaan'])->format('Y-m-d');
        }

        $data = array_merge($validatedData, ['peserta_id' => $peserta->id]);

        Rtl::create($data);

        return redirect()->route('user.register')->with('success', 'Data berhasil ditambahkan!');
    }


    // public function editKegiatan(RtlRequest $request, $id): RedirectResponse
    // {
    //     $validatedData = $request->validated();

    //     $rtls = Rtl::findOrFail($id);

    //     $rtls->update($validatedData);

    //     return redirect()->route('user.register')->with('success', 'Data berhasil diubah!');
    // }

    public function DeleteKegiatan($id)
    {
        $rtls = Rtl::findOrFail($id);

        $rtls->delete();

        return redirect()->route('user.register')->with('success', 'Data berhasil dihapus!');
    }
}
