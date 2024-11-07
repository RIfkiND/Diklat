<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pelatihan extends Model
{
    protected $fillable =[
      'name'
    ];
    public function peserta(){
      return $this->hasMany(Peserta::class);
    }
}
