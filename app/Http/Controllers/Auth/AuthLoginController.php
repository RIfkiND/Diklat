<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\V1\AdminLoginRequest;
use App\Http\Requests\Auth\V1\PesertaLoginRequest;
use App\Http\Requests\Auth\V1\PetugasLoginRequest;
use Inertia\Inertia;
use Inertia\Response;

class AuthLoginController extends Controller
{
  public function AdminLogin(AdminLoginRequest $request){
    $request->AdminAuth();
    $request->session()->regenerate();

    return redirect()->intended(default: route('admin.users'));
  }

  public function PetugasLogin(PetugasLoginRequest $request){
    $request->PetugasAuth();
    $request->session()->regenerate();

    return redirect()->intended(route('petugas.monitoring-peserta'));
  }

  public function PesertaLogin(PesertaLoginRequest $request){
    $request->PesertaAuth();
    $request->session()->regenerate();

    return redirect()->intended(route('user.dashboard'));
  }

  public function AdminLoginPage(): Response
  {
    return Inertia::render('Auth/Admin/Login', [
      'status' => session('status'),
    ]);
  }
  public function PesertaLoginPage()
  {
    return Inertia::render('Auth/Login', [
      'status' => session('status'),
    ]);
  }
  public function PetugasLoginPage(): Response
  {
    return Inertia::render('Auth/Petugas/Login', [
      'status' => session('status'),
    ]);
  }

}
