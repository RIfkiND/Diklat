<?php
namespace App\Http\Requests\Put\V1\Petugas;

use Illuminate\Foundation\Http\FormRequest;

class UpdateHasilMonitoringRequest extends FormRequest
{
    public function authorize()
    {
        return true; // Set to true if you want to allow all users to make this request
    }

    public function rules()
    {
        return [
            'realisasi' => 'required|date',
            'kendala' => 'required|string',
            'solusi' => 'required|string',
            'undangan' => 'required|string',
            'daftar_hadir' => 'required|string',
            'link_foto' => 'required|string',
            'link_vidio' => 'required|string',
        ];
    }
}
