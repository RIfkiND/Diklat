<?php

namespace App\Http\Requests\Post\V1\Peserta;

use Illuminate\Foundation\Http\FormRequest;

class StorePesertaRequest extends FormRequest
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
            'tamatan' => 'required|string|min:1|max:255',
            'no_hp' => 'required|unique:pesertas,no_hp',
            'password' => 'required|string|min:8',
        ];
    }
}
