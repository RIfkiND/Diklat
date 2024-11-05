<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DetailPeserta extends Model
{

  public function peserta(){
    return $this->belongsTo(Peserta::class);
  }
}
