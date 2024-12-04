<?php

namespace App\Http\Controllers\PDF;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MainReportController extends Controller
{
  public function main_report_view()
  {
    return view("reports.main_report");
  }
}
