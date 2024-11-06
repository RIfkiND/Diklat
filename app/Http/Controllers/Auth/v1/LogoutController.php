<?php

namespace App\Http\Controllers\Auth\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
  public function logout(Request $request)
  {
      // Menggunakan guard yang sesuai berdasarkan pengguna yang sedang login
      Auth::logout();

      // Menghapus session
      $request->session()->invalidate();
      $request->session()->regenerateToken();

      // Redirect ke halaman login atau halaman lain
      return redirect('/login');
  }
}
