<?php

namespace App\Models;

use App\Models\bukti_dukung;
use App\Models\BiodataPeserta;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class hasil_monitoring extends Model
{
  use HasFactory;

  protected $fillable = [
    'realisasi', 'solusi', 'kendala', 'peserta_id'
];


    public function biodataPeserta()
    {
        return $this->belongsTo(BiodataPeserta::class, 'peserta_id');
    }
}
