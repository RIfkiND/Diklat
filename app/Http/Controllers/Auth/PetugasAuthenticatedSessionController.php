<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\V1\PetugasLoginRequest; // Ensure you have this request
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Petugas;

class PetugasAuthenticatedSessionController extends Controller
{
    /**
     * Display the petugas login view.
     */
    public function create(): Response
    {
        return Inertia::render('AuthPetugas/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming petugas authentication request.
     */
    public function store(PetugasLoginRequest $request): RedirectResponse
    {
        $request->PetugasAuth();
        $request->session()->regenerate();

        // Check if the authenticated user is a petugas
        if (Auth::user()->role === 'petugas') {
            return redirect()->intended(route('dashboard')); // Adjust to your petugas dashboard route
        }

        return redirect('/')->with('error', 'You do not have access to this application.');
    }

    /**
     * Destroy an authenticated petugas session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/petugas/login');
    }
}
