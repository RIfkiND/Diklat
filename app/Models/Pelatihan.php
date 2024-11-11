<?php

namespace App\Models;

use App\Models\BiodataPeserta;
use Illuminate\Database\Eloquent\Model;

class Pelatihan extends Model
{
    protected $fillable =[
      'name'
    ];
    public function biodataPesertas()
    {
        return $this->hasMany(BiodataPeserta::class, 'pelatihan_id');
    }
}
