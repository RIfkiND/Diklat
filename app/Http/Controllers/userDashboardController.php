<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserDashboardController extends Controller
{
  public function index()
  {
    return Inertia::render('Dashboard/User/index');
  }
}
