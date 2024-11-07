<?php

namespace App\Http\Requests\Auth\V1;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use App\Models\Petugas;

class PetugasLoginRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'NIP' => ['required', 'numeric'],
        ];
    }

    /**
     * Attempt to authenticate the request's credentials.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function PetugasAuth(): void
    {
        $this->ensureIsNotRateLimited();

        $petugas = Petugas::where('NIP', $this->NIP)->first();

        if (! $petugas) {
            RateLimiter::hit($this->throttleKey());

            throw ValidationException::withMessages([
                'NIP' => trans('auth.failed'),
            ]);
        }

        Auth::guard('petugas')->login($petugas);

        RateLimiter::clear($this->throttleKey());
    }

    /**
     * Ensure the login request is not rate-limited.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ensureIsNotRateLimited(): void
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'NIP' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Get the rate limiting throttle key for the request.
     */
    public function throttleKey(): string
    {
        return Str::transliterate(Str::lower($this->string('NIP')).'|'.$this->ip());
    }
}
