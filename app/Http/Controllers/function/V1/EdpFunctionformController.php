<?php

namespace App\Http\Controllers\function\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\V1\EdpForm\EdpformRequest;
use App\Http\Requests\Post\V1\EdpForm\EdpOtherFormRequet;
use App\Models\Edp;
use App\Models\EdpOther;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EdpFunctionformController extends Controller
{
    public function EdpPostSiswa(EdpformRequest $request){


    Edp::create($request->validated());
    return redirect('/')->with('success', 'Edp Berhasil Ditambahkan');
    }

    public function EdpPostOther(EdpOtherFormRequet $request){


      EdpOther::create($request->validated());

      return redirect('/')->with('success', 'Edp Berhasil Ditambahkan');
    }


}
