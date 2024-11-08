<?php

namespace App\Http\Controllers\function\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\V1\Petugas\StorePetugasRequest;
use App\Http\Requests\Put\V1\Petugas\UpdatePetugasRequest;
use App\Models\Petugas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class PetugasFunctionController extends Controller
{
  public function SearchPetugas(Request $request)
  {

    $search = $request->input('search', '');

    $Petugass = Petugas::where('name', 'like', '%' . $search . '%')
    ->orWhere('NIP', 'like', '%' . $search . '%')
    ->paginate(8);


    return Inertia::render('Dashboard/Admin/Account/TableUser', [
      'Petugass' => $Petugass,
      'search' => $search,
    ]);
  }
  public function CreatePetugas(StorePetugasRequest $request)
  {

    Petugas::create([
      'name' => $request->input('name'),
      'NIP' => $request->input('nip'),
      'unit_kerja'=>$request->input('unit_kerja'),
    ]);

    return redirect()->route('account.petugas')->with('succes', 'Petugas Berhasil Ditambahkan');
  }

  public function UpdatePetugas($id, UpdatePetugasRequest $request)
  {
    $Petugass = Petugas::findOrFail($id);


    $Petugass->update([
      'name' => $request->input('name'),
      'NIP' => $request->input('nip'),
      'unit_kerja'=>$request->input('unit_kerja'),
    ]);


    return redirect()->route('account.petugas')->with('success', 'Petugas successfully updated.');
  }


  public function DeletePetugas($id)
  {
    $Petugass = Petugas::findOrFail($id);

    $Petugass->delete();

    return redirect()->route('account.petugas')->with('success', 'Petugas successfully deleted.');
  }
}
