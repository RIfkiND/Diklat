<?php

namespace App\Http\Controllers\Auth\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    public function AdminLogout(Request $request){
      Auth::guard('admins')->logout();

      $request->session()->invalidate();
      $request->session()->regenerateToken();

      return redirect('/');
    }
    public function PetugasLogout(Request $request){
      Auth::guard('petugas')->logout();

      $request->session()->invalidate();
      $request->session()->regenerateToken();

      return redirect('/');
    }
    public function PesertaLogout(Request $request){
      Auth::guard('peserta')->logout();

      $request->session()->invalidate();
      $request->session()->regenerateToken();

      return redirect('/');
    }
}
