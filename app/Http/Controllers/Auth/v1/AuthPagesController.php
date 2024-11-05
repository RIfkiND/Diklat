<?php

namespace App\Http\Controllers\Auth\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
class AuthPagesController extends Controller
{
    public function LoginPage(){
      return Inertia::render('Auth/Login', [
        'canResetPassword' => Route::has('password.request'),
        'status' => session('status'),
    ]);
    }

    public function RegisterPager(){
      return Inertia::render('Auth/Register');
    }
}
