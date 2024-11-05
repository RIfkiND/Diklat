<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RoleAuthMiddleware
{
  /**
   * Handle an incoming request.
   *
   * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
   */
  public function handle(Request $request, Closure $next, string $type): Response
  {
    switch ($type) {
      case 'peserta':
          if (!Auth::guard('peserta')->check()) {
              return redirect()->route('Views.Auth.Peserta');
          }
          break;

      case 'petugas':
          if (!Auth::guard('petugas')->check()) {
              return redirect()->route('Views.Auth.Petugas');
          }
          break;

      case 'admins':
          if (!Auth::guard('admins')->check()) {
              return redirect()->route('Views.Auth.Admin');
          }
          break;

      default:
          return redirect()->route('login');
  }
  return $next($request);
  }
}
