<?php

namespace App\Http\Requests\Post\V1\Petugas;

use Illuminate\Foundation\Http\FormRequest;

class StoreBerkasRequest extends FormRequest
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
            'petugas_1' => 'required|string',
            'petugas_2' => 'required|string',
            'imageFiles.*' => 'required|mimes:jpeg,jpg,png,gif|max:20248',
            'videoFile' => 'required|mimes:mp4,mov,avi|max:100000',
            'signatures.companion1' => 'required|mimes:jpeg,jpg,png,gif|max:20248',
            'signatures.companion2' => 'required|mimes:jpeg,jpg,png,gif|max:20248',
            'saran' => 'required|string|min:5|max:255',
            'kesimpulan' => 'required|string|min:5|max:255',
            'files.Surat_Tugas' => 'required|mimes:pdf|max:20248',
            'files.Daftar_Hadir' => 'required|mimes:jpeg,jpg,png,gif|max:20248',


            'edp_other_id_1' => 'required|exists:berkas_edp_others,id',
            'edp_other_id_2' => 'required|exists:berkas_edp_others,id',
            'edp_other_id_3' => 'required|exists:berkas_edp_others,id',
            'edp_other_id_4' => 'required|exists:berkas_edp_others,id',
            'edp_other_id_5' => 'required|exists:berkas_edp_others,id',

            'edp_siswa_id_1' => 'required|exists:berkas_edp_siswas,id',
            'edp_siswa_id_2' => 'required|exists:berkas_edp_siswas,id',
            'edp_siswa_id_3' => 'required|exists:berkas_edp_siswas,id',
            'edp_siswa_id_4' => 'required|exists:berkas_edp_siswas,id',
            'edp_siswa_id_5' => 'required|exists:berkas_edp_siswas,id',
        ];
    }
    public function messages()
    {
        return [
            'vidio_berkas.required' => 'The video file is required.',
            'vidio_berkas.mimes' => 'The video must be a file of type: mp4, mkv, avi.',
            'vidio_berkas.max' => 'The video size must not exceed 10MB.',
            'url.array' => 'The image files must be in an array.',
            'url.*.mimes' => 'Each image file must be a JPG, JPEG, or PNG.',
            'url.*.max' => 'Each image file must not exceed 5MB.',
            'signature_companion1.required' => 'The first signature companion is required.',
            'signature_companion2.string' => 'The second signature companion must be a string.',
            'signature_companion1.max' => 'The first signature companion must not exceed 255 characters.',
            'signature_companion2.max' => 'The second signature companion must not exceed 255 characters.',
        ];
    }
}
