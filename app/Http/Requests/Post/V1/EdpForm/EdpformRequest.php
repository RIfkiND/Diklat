<?php

namespace App\Http\Requests\Post\V1\EdpForm;

use Illuminate\Foundation\Http\FormRequest;

class EdpformRequest extends FormRequest
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
    public function rules(): array
    {
        return [
          'nama_responden'             => 'required|string|max:255',
          'nama_institusi_sekolah'     => 'required|string|max:255',
          'kabupaten_kota'             => 'required|string|max:255',
          'no_whatsapp'                => 'required|numeric|unique:edps,no_whatsapp',
          'email'                      => 'required|email|unique:edps,email',
          'nama_tamatan_pelatihan'     => 'required|string|max:255',
          'nama_jenis_pelatihan'      => 'required|string|max:255',
          'tanggal_dimulai'            => 'required|date',
          'tanggal_selesai'            => 'required|date|after_or_equal:tanggal_dimulai',
          'tampilan_menarik'           => 'required|string|in:ya,tidak',
          'sabar'                      => 'required|string|in:ya,tidak',
          'pilih_kasih'                => 'required|string|in:ya,tidak',
          'sering_membantu_siswa'      => 'required|string|in:ya,tidak',
          'praktis_dalam_menjawab'     => 'required|string|in:ya,tidak',
          'memberikan_motivasi'        => 'required|string|in:ya,tidak',
          'pemberian_tugas'            => 'required|string|in:ya,tidak',
          'menciptakan_pembelajaran'   => 'required|string|in:ya,tidak',
          'tepat_waktu'                => 'required|string|in:ya,tidak',
          'penyampaian_materi'         => 'required|string|in:ya,tidak',
          'penggunaan_media'           => 'required|string|in:ya,tidak',
          'mengaitkan_materi'          => 'required|string|in:ya,tidak',
          'saran_dan_masukan'          => 'required|string|max:1000',
        ];
    }
    public function messages()
    {
        return [
            'no_whatsapp.unique' => 'Nomor WhatsApp sudah terdaftar.',
            'email.unique' => 'Email sudah terdaftar.',
        ];
    }

}
