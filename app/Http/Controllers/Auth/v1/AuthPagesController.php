<?php

namespace App\Http\Controllers\Auth\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
class AuthPagesController extends Controller
{
  public function AdminLoginPage(): Response
  {
      return Inertia::render('AuthAdmin/Login', [
          'status' => session('status'),
      ]);
  }
    public function PesertaLoginPage(){
      return Inertia::render('Auth/Login', [
        'canResetPassword' => Route::has('password.request'),
        'status' => session('status'),
    ]);
    }
    public function PetugasLoginPage(): Response
    {
        return Inertia::render('AuthPetugas/Login', [
            'status' => session('status'),
        ]);
    }

}
