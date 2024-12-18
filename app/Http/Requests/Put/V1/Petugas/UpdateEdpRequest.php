<?php
namespace App\Http\Requests\Put\V1\Petugas;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEdpRequest extends FormRequest
{
  public function authorize()
  {
      return true;
  }

  public function rules()
  {
      return [
          'nama_responden' => 'required|string|max:255',
          'nama_institusi_sekolah' => 'required|string|max:255',
          'kabupaten_kota' => 'required|string|max:255',
          'no_whatsapp' => 'required|string|max:15',
          'email' => 'required|email|max:255',
          'nama_tamatan_pelatihan' => 'required|string|max:255',
          'nama_jenis_pelatihan' => 'required|string|max:255',
          'tanggal_dimulai' => 'required|date',
          'tanggal_selesai' => 'required|date|after_or_equal:tanggal_dimulai',
      ];
  }
}
