<?php

namespace App\Http\Requests\Post\V1\EdpForm;

use Illuminate\Foundation\Http\FormRequest;

class EdpOtherFormRequet extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
   */
  public function rules()
  {
    return [
      'nama_responden' => 'required|string|max:255',
      'nama_institusi_sekolah' => 'required|string|max:255',
      'kabupaten_kota' => 'required|string|max:255',
      'no_whatsapp' => 'required|numeric',
      'nama_tamatan_pelatihan' => 'required|string|max:255',
      'nama_jenis_pelatihan' => 'required|string|max:255',
      'jabatan_responden' => 'required|string|max:255',
      'tanggal_dimulai' => 'required|date|before_or_equal:tanggal_selesai',
      'tanggal_selesai' => 'required|date|after_or_equal:tanggal_dimulai',
      'adanya_dokumen' => 'required|string|in:ya,tidak',
      'kesesuaian_program' => 'required|string|in:ya,tidak',
      'adanya_dukungan' => 'required|string|in:ya,tidak',
      'adanya_jadwal_pelaksanaan' => 'required|string|in:ya,tidak',
      'dukungan_pihak_terkait' => 'required|string|in:ya,tidak',
      'ketersidaan_perangkat_fasilitas' => 'required|string|in:ya,tidak',
      'adanya_silabus' => 'required|string|in:ya,tidak',
      'adanya_bahan_ajar' => 'required|string|in:ya,tidak',
      'adanya_lembar_evaluasi' => 'required|string|in:ya,tidak',
      'kesesuaian_metode_materi' => 'required|string|in:ya,tidak',
      'meningkatkan_interaksi' => 'required|string|in:ya,tidak',
      'melakukan_kegiatan_pra_pembelajaran' => 'required|string|in:ya,tidak',
      'melaksanakan_pemebelajaran' => 'required|string|in:ya,tidak',
      'menggunakan_keterampilan' => 'required|string|in:ya,tidak',
      'melaksanakan_refleksi' => 'required|string|in:ya,tidak',
      'melakukan_tindak_lanjut' => 'required|string|in:ya,tidak',
      'kesesuaian_pelaksanaan_evaluasi' => 'required|string|in:ya,tidak',
      'adanya_analisis_belajar' => 'required|string|in:ya,tidak',
      'adanya_nilai_hasil_belajar' => 'required|string|in:ya,tidak',
      'adanyan_program_tindak_lanjut' => 'required|string|in:ya,tidak',
      'adanya_program_pengembangan_diri' => 'required|string|in:ya,tidak',
      'adanya_proposal_pembuatan_karya_tulis' => 'required|string|in:ya,tidak',
      'adanya_dukungan_pihak_terkait' => 'required|string|in:ya,tidak',
      'adanya_laporan_pelaksanaan_program' => 'required|string|in:ya,tidak',
      'adanya_karya_tulis_ilmiah' => 'required|string|in:ya,tidak',
      'adanya_karya_inovatif' => 'required|string|in:ya,tidak',
      'saran_masukan' => 'nullable|string|max:1000',
    ];
  }

  /**
   * Get custom messages for validator errors.
   *
   * @return array
   */
  public function messages()
  {
    return [
      'no_whatsapp.unique' => 'The WhatsApp number is already in use.',
      'tanggal_selesai.after_or_equal' => 'The end date must be after or equal to the start date.',
      // Add other custom messages as needed
    ];
  }
}
