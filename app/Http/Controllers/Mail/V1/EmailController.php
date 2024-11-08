<?php

namespace App\Http\Controllers\Mail\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Resend\Laravel\Facades\Resend;
class EmailController extends Controller
{
  public function SendEmail(Request $request)
  {

      $jabatanResponden = $request->input('jabatan_responden');

      $formLink = ($jabatanResponden === 'Siswa')
          ? route('form-edp.siswa')
          : route('form-edp.other');
      $sender = $request->input('email');

      Resend::emails()->send([
          'from' => 'BMTI <BMTI@gmail.com>',
          'to' => [$request->input('email')],
          'subject' => 'Form Link',
          'html' => view('emails.form_link', ['formLink' => $formLink ,'sender'=> $sender])->render(),
      ]);

      return redirect('/');
  }
}
