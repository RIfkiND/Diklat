<?php

namespace App\Models;

use App\Models\Rtl;
use App\Models\Peserta;
use App\Models\Pelatihan;
use App\Models\bukti_dukung;
use App\Models\hasil_monitoring;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BiodataPeserta extends Model
{
    use HasFactory;

    protected $fillable = [
        'fullname',
        'kabupaten',
        'pelatihan_id',
        'periode_mulai',
        'sekolah',
        'provinsi',
        'petugas_id_1',
        'petugas_id_2',
        'periode_akhir',
        'peserta_id', // ID peserta yang terkait dengan biodata
    ];

    // Relasi ke model Peserta (menggunakan peserta_id)
    public function peserta()
    {
        return $this->belongsTo(Peserta::class, 'peserta_id'); // Menghubungkan biodata_peserta ke pesertas
    }
    public function petugas1()
    {
      return $this->belongsTo(Petugas::class, 'petugas_id_1');
    }

    public function petugas2()
    {
      return $this->belongsTo(Petugas::class, 'petugas_id_2');
    }
    public function pelatihan()
    {
        return $this->belongsTo(Pelatihan::class, 'pelatihan_id');
    }
    public function rtls()
    {
        return $this->hasMany(Rtl::class, 'peserta_id');
    }
    public function hasilMonitorings()
    {
        return $this->hasMany(hasil_monitoring::class, 'peserta_id');
    }

}
