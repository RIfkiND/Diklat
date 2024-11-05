<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DetailPetugas extends Model
{
    public function petugas(){
      return $this->belongsTo(Petugas::class);

    }
}
