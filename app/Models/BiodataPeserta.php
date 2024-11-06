<?php

namespace App\Models;

use App\Models\Peserta;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BiodataPeserta extends Model
{
    protected $table = 'biodata_peserta'; // Tentukan nama tabel yang benar

    protected $fillable = [
        'fullname',
        'kabupaten',
        'pelatihan',
        'periode_mulai',
        'sekolah',
        'provinsi',
        'nama_petugas_pembimbing',
        'periode_akhir',
        'peserta_id',
    ];

    // Relasi ke model User
    public function user()
    {
        return $this->belongsTo(Peserta::class, 'peserta_id'); // Pastikan peserta_id merujuk ke tabel 'users'
    }
}
