<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class bukti_dukung extends Model
{
    public function hasil_monitoring(){
      return $this->belongsTo(hasil_monitoring::class);
    }
}
