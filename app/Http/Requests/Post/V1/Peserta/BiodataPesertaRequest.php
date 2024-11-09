<?php

namespace App\Http\Requests\Post\V1\Peserta;

use Illuminate\Foundation\Http\FormRequest;
use Carbon\Carbon;

class BiodataPesertaRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      'fullname' => 'required|string|max:255|min:1',
      'kabupaten' => 'required|string|min:1',
      'pelatihan_id' => 'required|exists:pelatihans,id',
      'periode_mulai' => 'required|date|min:1',
      'sekolah' => 'required|string|min:1|max:255',
      'provinsi' => 'required|string|min:1|max:255',
      'petugas_id_1' => 'required|exists:petugas,id', // Ensures that the petugas ID exists
      'petugas_id_2' => 'required|exists:petugas,id',
      'periode_akhir' => 'required|date|after_or_equal:periode_mulai',
      // 'peserta_id' => 'required|exists:pesertas,id',
    ];
  }

  public function messages()
  {
      return [
          'fullname.required' => 'Nama lengkap harus diisi.',
          'kabupaten.required' => 'Kabupaten harus diisi.',
          'pelatihan_id.required' => 'Pelatihan harus dipilih.',
          'pelatihan_id.exists' => 'Pelatihan yang dipilih tidak valid.',
          'periode_mulai.required' => 'Periode mulai harus diisi.',
          'periode_akhir.after_or_equal' => 'Periode akhir harus sama atau setelah periode mulai.',
          'petugas_id_1.required' => 'Petugas pembimbing 1 harus dipilih.',
          'petugas_id_2.required' => 'Petugas pembimbing 2 harus dipilih.',
          'peserta_id.exists' => 'Peserta yang dipilih tidak valid.',
      ];
  }
  /**
   * Prepare the data for validation.
   */
  protected function prepareForValidation()
  {
    $this->merge([
      'periode_mulai' => $this->convertDate($this->periode_mulai),
      'periode_akhir' => $this->convertDate($this->periode_akhir),
    ]);
  }

  /**
   * Convert date to MySQL format.
   *
   * @param string $date
   * @return string
   */
  private function convertDate($date)
  {
    return Carbon::parse($date)->format('Y-m-d H:i:s');
  }
}
