<?php

namespace App\Http\Controllers\Mail\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EmailController extends Controller
{
    public function SendEmail(Request $request){
      // $order = Order::findOrFail($request->order_id);


      // Resend::emails()->send([
      //     'from' => 'Acme <onboarding@resend.dev>',
      //     'to' => [$request->user()->email],
      //     'subject' => 'hello world',
      //     'html' => (new OrderShipped($order))->render(),
      // ]);

      // return redirect('/orders');
    }
}
