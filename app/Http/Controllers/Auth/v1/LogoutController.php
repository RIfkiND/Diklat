<?php

namespace App\Http\Controllers\Auth\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    public function Logout(Request $request){
      $guards = ['peserta', 'admins', 'petugas'];

      foreach ($guards as $guard) {
          if (Auth::guard($guard)->check()) {
              Auth::guard($guard)->logout();
              break;
          }
      }

      $request->session()->invalidate();
      $request->session()->regenerateToken();

      return redirect('/');
    }
}
