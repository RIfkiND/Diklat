<?php

namespace App\Http\Controllers\Post\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\V1\Peserta\StorePesertaRequest;
use App\Models\Peserta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class AdminController extends Controller
{
  public function CreatePeserta(StorePesertaRequest $request)
  {
      Peserta::create([
          'name' => $request->input('name'),
          'email' => $request->input('email'),
          'no_hp' => $request->input('no_hp'),
          'password' => Hash::make($request->input('password')),
      ]);

      return redirect()->route('admin.users.view')->with(['succes'=> 'Peserta Berhasil Ditambahkan']);
  }


}
