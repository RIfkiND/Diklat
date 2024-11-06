<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BiodataPeserta extends Model
{

  public function peserta(){
    return $this->belongsTo(Peserta::class);
  }
}
