<?php

namespace App\Http\Controllers\Post\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\V1\Peserta\StorePesertaRequest;
use App\Http\Requests\Put\V1\Peserta\UpdatePesertaRequest;
use App\Models\Peserta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
class PesertaController extends Controller
{

  public function SearchPeserta(Request $request)
  {

    $search = $request->input('search', '');

    $pesertas = Peserta::where('name', 'like', '%' . $search . '%')->get();

    return Inertia::render('Dashboard/Admin/Account/TableUser', [
      'pesertas' => $pesertas,
      'search' => $search,
    ]);
  }
  public function CreatePeserta(StorePesertaRequest $request)
  {
    Peserta::create([
      'name' => $request->input('name'),
      'email' => $request->input('email'),
      'no_hp' => $request->input('no_hp'),
      'password' => Hash::make($request->input('password')),
    ]);

    return redirect()->route('account.peserta')->with('succes', 'Peserta Berhasil Ditambahkan');
  }

  public function UpdatePeserta($id, UpdatePesertaRequest $request)
  {
    $pesertas = Peserta::findOrFail($id);


    $pesertas->update([
      'name' => $request->input('name'),
      'email' => $request->input('email'),
      'no_hp' => $request->input('no_hp'),
      'password' => $request->filled('password') ? Hash::make($request->input('password')) : $pesertas->password,
    ]);


    return redirect()->route('account.peserta')->with('success', 'Peserta successfully updated.');
  }


  public function DeletePeserta($id)
  {
    $pesertas = Peserta::findOrFail($id);

    $pesertas->delete();

    return redirect()->route('account.peserta')->with('success', 'Peserta successfully deleted.');
  }
}
