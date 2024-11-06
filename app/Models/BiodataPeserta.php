<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BiodataPeserta extends Model
{

  public function peserta(){
    return $this->belongsTo(Peserta::class);
  }

  use HasFactory;

  protected $fillable = [
    'fullname',
    'kabupaten',
    'pelatihan', // Add 'pelatihan' to the fillable array
    'periode_mulai',
    'sekolah',
    'provinsi',
    'nama_petugas_pembimbing',
    'periode_akhir',
    'peserta_id',
];

public function user()
    {
        return $this->belongsTo(Peserta::class, 'peserta_id');
    }
}
