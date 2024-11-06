<?php

namespace App\Models;

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
        'nama_petugas_pembimbing',
        'periode_akhir',
        'peserta_id',
    ];

    // Relasi ke model User
    public function user()
    {
        return $this->belongsTo(User::class, 'peserta_id'); // Pastikan peserta_id merujuk ke tabel 'users'
    }

    // Relasi ke model Peserta
    public function peserta()
    {
        return $this->belongsTo(Peserta::class); // Jika mengarah ke model Peserta
    }
}
