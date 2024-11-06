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
            'name' => 'required|string|max:255|min:1',
            'kabupaten' => 'required|integer|max:255|min:1',
            'pelatihan' => 'required|string"|max:255|min:1',
            'periode_mulai' => 'required|date|min:1',
            'sekolah' => 'required|string|min:1|max:255',
            'provinsi' => 'required|integer|min:1|max:255',
            'nama_petugas_pembimbing' => 'required|string|max:255|min:1',
            'periode_akhir' => 'required|date',
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
