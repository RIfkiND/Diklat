<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Edp;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\Post\V1\EdpForm\EdpformRequest;
use App\Http\Requests\Put\V1\Petugas\UpdateEdpRequest;
use Illuminate\Http\Request; // Ensure this line is present

class EdpPesertaController extends Controller
{
    public function renderEdpPeserta(Request $request)
    {
      $selectedData = $request->input('selectedData');
      $edp_pesertas = Edp::paginate(5);

        $edp_pesertas->getCollection()->transform(function ($peserta) {
            $peserta->formatted_tanggal_dimulai = Carbon::parse($peserta->tanggal_dimulai)->format('Y-m-d');
            $peserta->formatted_tanggal_selesai = Carbon::parse($peserta->tanggal_selesai)->format('Y-m-d');
            return $peserta;
        });

        return Inertia::render('Dashboard/Petugas/DataEdp/EdpSiswa/Index', [
            'Edp' => $edp_pesertas,
            'selectedData' => $selectedData,
        ]);
    }

    public function renderEdpPesertaShow(Request $request)
    {
        $selectedData = $request->input('selectedData');

        return Inertia::render('Dashboard/Petugas/DataEdp/EdpSiswa/Show', [
            'selectedData' => $selectedData,
        ]);
    }
   public function EdpEdit(Request $request, $id)
    {
        // Validasi data yang diterima dari request
        $request->validate([
            'name' => 'required|string|max:255',
            'sekolah' => 'required|string|max:255',
            'kabupaten' => 'required|string|max:255',
            'no_wa' => 'required|string|max:15',
            'email' => 'required|email|max:255',
            'nama_jenis_pelatihan' => 'required|string|max:255',
            'tamatan_pelatihan' => 'required|string|max:255',
            'tanggal_mulai' => 'required|date',
            'tanggal_akhir' => 'required|date',
        ]);

        // Temukan data EDP berdasarkan ID
        $edp = Edp::findOrFail($id);

        // Update data EDP dengan data yang diterima dari request
        $edp->update([
            'nama_responden' => $request->name,
            'nama_institusi_sekolah' => $request->sekolah,
            'kabupaten_kota' => $request->kabupaten,
            'no_whatsapp' => $request->no_wa,
            'email' => $request->email,
            'nama_jenis_pelatihan' => $request->nama_jenis_pelatihan,
            'nama_tamatan_pelatihan' => $request->tamatan_pelatihan,
            'tanggal_dimulai' => $request->tanggal_mulai,
            'tanggal_selesai' => $request->tanggal_akhir,
        ]);

        // Redirect atau response sesuai kebutuhan
        return redirect()->route('petugas.dataedp-edp-siswa')->with('success', 'Data EDP berhasil diperbarui.');
    }
}
