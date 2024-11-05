<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\V1\AdminLoginRequest; // Make sure you have this request
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Admin;

class AdminAuthenticatedSessionController extends Controller
{
    /**
     * Display the admin login view.
     */
    public function create(): Response
    {
        return Inertia::render('AuthAdmin/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming admin authentication request.
     */
    public function store(AdminLoginRequest $request): RedirectResponse
    {
        $request->AdminAuth();
        $request->session()->regenerate();

        // Check if the authenticated user exists in the admins table
        $admin = Admin::where('email', $request->input('email'))->first();

        if ($admin) {
            // Redirect to the intended admin dashboard
            return redirect()->intended(route('dashboard')); // Adjust to your admin dashboard route
        }

        // If admin is not found, logout and redirect
        Auth::logout();
        return redirect('/admin/login')->with('error', 'Invalid credentials or account does not exist.');
    }

    /**
     * Destroy an authenticated admin session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/admin/login');
    }
}
