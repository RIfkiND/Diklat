<?php

namespace App\Http\Requests\Put\V1\Peserta;

use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;

class RtlRequest extends FormRequest
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
        'nama_kegiatan' => 'required|string|max:255|min:1',
        'tujuan' => 'required|string|max:255|min:1',
        'sasaran' => 'required|in:Peserta Didik,Guru Sejawat,Kepala Sekolah,Alumni Pembimbing|min:1',
        'metode' => 'required|in:online,offline|min:1',
        'tempat' => 'required|string|max:255|min:1',
        'waktu_pelaksanaan' => 'required|date|min:1',
        // 'peserta_id' => 'required|exists:pesertas,id', // pastikan ada relasi ke tabel 'pesertas'
    ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'waktu_pelaksanaan' => $this->convertDate($this->waktu_pelaksanaan),
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
