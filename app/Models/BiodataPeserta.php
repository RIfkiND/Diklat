<?php

namespace App\Models;

use App\Models\Peserta;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BiodataPeserta extends Model
{
    use HasFactory;

    protected $fillable = [
        'fullname',
        'kabupaten',
        'pelatihan',
        'periode_mulai',
        'sekolah',
        'provinsi',
        'nama_petugas_pembimbing1',
        'nama_petugas_pembimbing2',
        'periode_akhir',
        'peserta_id', // ID peserta yang terkait dengan biodata
    ];

    // Relasi ke model Peserta (menggunakan peserta_id)
    public function peserta()
    {
        return $this->belongsTo(Peserta::class, 'peserta_id'); // Menghubungkan biodata_peserta ke pesertas
    }
}
