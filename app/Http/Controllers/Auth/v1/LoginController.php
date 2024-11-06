<?php
namespace App\Http\Controllers\Auth\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\V1\AdminLoginRequest;
use App\Http\Requests\Auth\V1\PesertaLoginRequest;
use App\Http\Requests\Auth\V1\PetugasLoginRequest;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function AdminLogin(AdminLoginRequest $request)
    {
        $request->AdminAuth();
        $request->session()->regenerate();

        return Inertia::render('/dashboard/admin/users/table/user');
    }

    public function PetugasLogin(PetugasLoginRequest $request)
    {
        $request->PetugasAuth();
        $request->session()->regenerate();

        return Inertia::render('Dashboard/Petugas/MonitoringPeserta');
    }

    public function PesertaLogin(PesertaLoginRequest $request)
    {
        $request->PesertaAuth();
        $request->session()->regenerate();

        return Inertia::render('Dashboard/User/index');
    }
}
