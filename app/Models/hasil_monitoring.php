<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class hasil_monitoring extends Model
{
    //

    public function bukti_dukung(){
      return $this->hasOne(bukti_dukung::class);
    }
}
