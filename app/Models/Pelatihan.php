<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pelatihan extends Model
{
    protected $fillable =[
      'name'
    ];
    public function BiodataPeserta(){
      return $this->hasMany(BiodataPeserta::class);
    }
}
