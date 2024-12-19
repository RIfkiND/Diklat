<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class AuthPagesController extends Controller
{
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
