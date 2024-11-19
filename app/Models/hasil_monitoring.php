<?php

namespace App\Models;

use App\Models\BiodataPeserta;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class hasil_monitoring extends Model
{
    use HasFactory;

    protected $fillable = [
        'realisasi',
        'kendala',
        'solusi',
        'undangan',
        'daftar_hadir',
        'foto',
        'vidio',
        'link_foto',
        'link_vidio',
        'peserta_id'
    ];

    public function biodataPeserta()
    {
        return $this->belongsTo(BiodataPeserta::class, 'peserta_id');
    }
}
