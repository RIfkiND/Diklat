<?php

namespace App\Http\Controllers\Auth\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\V1\AdminLoginRequest;
use App\Http\Requests\Auth\V1\PesertaLoginRequest;
use App\Http\Requests\Auth\V1\PetugasLoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class LoginCotnroller extends Controller
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



}
