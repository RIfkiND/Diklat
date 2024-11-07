<?php

namespace App\Http\Controllers\function\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\V1\EdpForm\EdpformRequest;
use App\Models\Edp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EdpFunctionformController extends Controller
{
    public function EdpPostSiswa(Request $request){
      $validated = $request->validate([
        'nama_responden'             => 'required|string|max:255',
        'nama_institusi_sekolah'     => 'required|string|max:255',
        'kabupaten_kota'             => 'required|string|max:255',
        'no_whatsapp'                => 'required|numeric|unique:edps,no_whatsapp',
        'email'                      => 'required|email|unique:edps,email',
        'nama_tamatan_pelatihan'     => 'required|string|max:255',
        'nama_jenis_pelatihan'      => 'required|string|max:255',
        'tanggal_dimulai'            => 'required|date',
        'tanggal_selesai'            => 'required|date|after_or_equal:tanggal_dimulai',
        'tampilan_menarik'           => 'nullable|string|in:ya,tidak',
        'sabar'                      => 'nullable|string|in:ya,tidak',
        'pilih_kasih'                => 'nullable|string|in:ya,tidak',
        'sering_membantu_siswa'      => 'nullable|string|in:ya,tidak',
        'praktis_dalam_menjawab'     => 'nullable|string|in:ya,tidak',
        'memberikan_motivasi'        => 'nullable|string|in:ya,tidak',
        'pemberian_tugas'            => 'nullable|string|in:ya,tidak',
        'menciptakan_pembelajaran'   => 'nullable|string|in:ya,tidak',
        'tepat_waktu'                => 'nullable|string|in:ya,tidak',
        'penyampaian_materi'         => 'nullable|string|in:ya,tidak',
        'penggunaan_media'           => 'nullable|string|in:ya,tidak',
        'mengaitkan_materi'          => 'nullable|string|in:ya,tidak',
        'saran_dan_masukan'          => 'nullable|string|max:1000',
    ]);

    Edp::create($validated);
    return redirect()->route('form-edp.siswa')->with('success', 'Edp Berhasil Ditambahkan');
    }
}
