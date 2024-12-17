<?php

namespace App\Http\Controllers\function\V1;

use App\Models\Edp;
use App\Models\EdpOther;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\Put\V1\Petugas\UpdateEdpRequest;
use App\Http\Requests\Put\V1\Petugas\UpdateEdpOtherRequest;

class EdpFunctionFormUpdateController extends Controller
{
    public function EdpUpdateSiswa(UpdateEdpRequest $request, $id)
    {
        $edp = Edp::findOrFail($id);
        $edp->update($request->validated());

        return redirect('/')->with('success', 'Edp Berhasil Diperbarui', [
            'edp' => $edp
        ]);
    }

    public function EdpUpdateOther(UpdateEdpOtherRequest $request, $id)
    {
        $edpOther = EdpOther::findOrFail($id);
        $edpOther->update($request->validated());

        return redirect('/')->with('success', 'Edp Berhasil Diperbarui');
    }
}
