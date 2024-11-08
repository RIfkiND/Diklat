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
  public function renderSendLink()
  {
    return Inertia::render('EdpForm/SendLink');
  }
  public function renderFinish()
  {
    return Inertia::render('EdpForm/EdpFinish');
  }
}
