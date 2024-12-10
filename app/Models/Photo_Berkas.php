<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Photo_Berkas extends Model
{
    //

    protected $fillable = ['url', 'berkas_id'];

    public function Berkas(){
        return $this->belongsTo(Berkas::class);
    }
}
