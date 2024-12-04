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
            'vidio_berkas' => 'required|file|mimes:mp4,mov,avi,wmv|max:20480', 
            'signature_companion1' => 'required|file|mimes:jpg,jpeg,png|max:5120',
            'signature_companion2' => 'required|file|mimes:jpg,jpeg,png|max:5120',
            'url.*' => 'required|file|mimes:jpg,jpeg,png|max:5120',
        ];
    }
    public function messages()
    {
        return [
            'vidio_berkas.required' => 'A video file is required.',
            'vidio_berkas.file' => 'The uploaded video must be a valid file.',
            'vidio_berkas.mimetypes' => 'The video must be in MP4, AVI, or MPEG format.',
            'vidio_berkas.max' => 'The video file size must not exceed 20MB.',
            'signature_companion1.required' => 'The first companion signature is required.',
            'signature_companion2.required' => 'The second companion signature is required.',
            'photos.array' => 'The photos field must be an array of URLs.',
            'photos.*.url' => 'Each photo must be a valid URL.',
        ];
    }
}
