<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EdpFormController extends Controller
{
  public function render()
  {
    return Inertia::render('EdpForm/Index');
  }
}
