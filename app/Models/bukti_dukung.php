<?php

namespace App\Models;

use App\Models\BiodataPeserta;
use App\Models\hasil_monitoring;
use Illuminate\Database\Eloquent\Model;

class bukti_dukung extends Model
{
  protected $fillable = [
      'undangan', 'daftar_hadir', 'link_foto', 'link_vidio', 'peserta_id'
  ];
    public function hasil_monitoring(){
      return $this->belongsTo(hasil_monitoring::class);
    }
    public function biodataPeserta()
    {
        return $this->belongsTo(BiodataPeserta::class, 'peserta_id');
    }
}
