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
          'nama_responden' => 'required|string|max:255',
          'nama_institusi_sekolah' => 'required|string|max:255',
          'kabupaten_kota' => 'required|string|max:255',
          'no_whatsapp' => 'required|string|max:20|unique:edps,no_whatsapp',
          'email' => 'required|email|max:255|unique:edps,email',
          'nama_tamatan_pelatihan' => 'required|string|max:255',
          'nama_jenis_pelatihan' => 'required|string|max:255',
          'tanggal_dimulai' => 'required|date_format:d/m/Y',
          'tanggal_selesai' => 'required|date_format:d/m/Y',
          'tampilan_menarik' => 'required|string',
          'sabar' => 'required|string',
          'pilih_kasih' => 'required|string',
          'sering_membantu_siswa' => 'required|string',
          'praktis_dalam_menjawab' => 'required|string',
          'memberikan_motivasi' => 'required|string',
          'pemberian_tugas' => 'required|string',
          'menciptakan_pembelajaran' => 'required|string',
          'tepat_waktu' => 'required|string',
          'penyampaian_materi' => 'required|string',
          'penggunaan_media' => 'required|string',
          'mengaitkan_materi' => 'required|string',
          'saran_dan_masukan' => 'nullable|string|max:1000'
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
