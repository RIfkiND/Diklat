<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Berkas extends Model
{
    protected $fillable = ['petugas_id', 'vidio_berkas', 'signature_companion1', 'signature_companion2'];

    public function petugas(){
        return $this->belongsTo(PEtugas::class);
    }
    public function photo_berkas(){
        return $this->hasMany(Photo_Berkas::class);
    }
}
