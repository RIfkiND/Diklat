<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Edp extends Model
{
  protected $fillable = [
    'nama_responden',
    'nama_institusi_sekolah',
    'kabupaten_kota',
    'no_whatsapp',
    'email',
    'nama_tamatan_pelatihan',
    'nama_jenis_pelatihan',
    'tanggal_dimulai',
    'tanggal_selesai',
    'tampilan_menarik',
    'sabar',
    'pilih_kasih',
    'sering_membantu_siswa',
    'praktis_dalam_menjawab',
    'memberikan_motivasi',
    'pemberian_tugas',
    'menciptakan_pembelajaran',
    'tepat_waktu',
    'penyampaian_materi',
    'penggunaan_media',
    'mengaitkan_materi',
    'saran_dan_masukan',
];

// You may also want to add casts for certain fields, like dates
protected $casts = [
    'tanggal_dimulai' => 'datetime',
    'tanggal_selesai' => 'datetime',
];

public function peserta (){
  return $this->belongsTo(Peserta::class);
}
}
