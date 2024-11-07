<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EdpFormController extends Controller
{
  public function render()
  {
    return Inertia::render('EdpForm/FormGuruDll/Index');
  }
  public function renderSiswa()
  {
    return Inertia::render('EdpForm/FormSiswa/Index');
  }
}
