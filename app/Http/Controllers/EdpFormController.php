<?php

namespace App\Http\Controllers;

use App\Models\BiodataPeserta;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
class EdpFormController extends Controller
{
  public function render()
  {

    $peserta = BiodataPeserta::with(['peserta', 'pelatihan'])->get();
    return Inertia::render('EdpForm/FormGuruDll/Index', [
          'peserta' => $peserta->map(function($peserta) {
              return [
                  'fullname' => $peserta->fullname,
                  'nama_institusi_sekolah' => $peserta->sekolah,
                  'kabupaten_kota' => $peserta->kabupaten,
                  'no_whatsapp' => optional($peserta->peserta)->no_hp, // Safely access no_hp
                  'nama_jenis_pelatihan' => optional($peserta->pelatihan)->name, // Safely access pelatihan name
                  'tanggal_dimulai' => Carbon::parse($peserta->periode_mulai)->format('Y-m-d'),
                  'tanggal_selesai' => Carbon::parse($peserta->periode_akhir)->format('Y-m-d'),
              ];
          }),
      ]);
  }
  public function renderSiswa()
  {
      $peserta = BiodataPeserta::with(['peserta', 'pelatihan'])->get();

      return Inertia::render('EdpForm/FormSiswa/Index', [
          'peserta' => $peserta->map(function($peserta) {
              return [
                  'fullname' => $peserta->fullname,
                  'nama_institusi_sekolah' => $peserta->sekolah,
                  'kabupaten_kota' => $peserta->kabupaten,
                  'no_whatsapp' => optional($peserta->peserta)->no_hp, // Safely access no_hp
                  'nama_jenis_pelatihan' => optional($peserta->pelatihan)->name, // Safely access pelatihan name
                  'tanggal_dimulai' => Carbon::parse($peserta->periode_mulai)->format('Y-m-d'),
                  'tanggal_selesai' => Carbon::parse($peserta->periode_akhir)->format('Y-m-d'),
              ];
          }),
      ]);
  }


    public function renderSendLink()
  {
    return Inertia::render('EdpForm/SendLink');
  }
  public function renderFinish()
  {
    return Inertia::render('EdpForm/EdpFinish');
  }
  public function getBiodata($id)
  {
      $biodata = BiodataPeserta::with(['pelatihan'])->find($id);

      if (!$biodata) {
          return response()->json(['error' => 'Peserta not found'], 404);
      }


      return response()->json($biodata);
  }

}
