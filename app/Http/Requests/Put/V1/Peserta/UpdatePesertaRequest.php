<?php

namespace App\Http\Requests\Put\V1\Peserta;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePesertaRequest extends FormRequest
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
          'email' => 'required|email|unique:pesertas,email',
          'no_hp' => 'required|string|max:15',
          'password' => 'nullable|min:6',
        ];
    }
}
