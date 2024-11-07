<?php

namespace App\Http\Controllers\Mail\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Resend\Laravel\Facades\Resend;
class EmailController extends Controller
{
    public function SendEmail(Request $request){


      Resend::emails()->send([
          'from' => 'Acme <onboarding@resend.dev>',
          'to' => [$request->user()->email],
          'subject' => 'hello world',
          'html' => (new LinkEdp($order))->render(),
      ]);

      return redirect('/orders');
    }
}
