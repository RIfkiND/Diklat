<?php

namespace App\Http\Requests\Put\V1\Petugas;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePetugasRequest extends FormRequest
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
          'name' => 'required|string|max:255',
          'nip' => 'required|integer|unique:petugas,NIP',
          'unit_kerja'=>'required|string|min:1',
        ];
    }
}
