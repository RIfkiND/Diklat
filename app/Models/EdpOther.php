<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EdpOther extends Model
{
  protected $fillable = [
    'nama_responden',
    'nama_institusi_sekolah',
    'kabupaten_kota',
    'no_whatsapp',
    'nama_tamatan_pelatihan',
    'nama_jenis_pelatihan',
    'jabatan_responden',
    'tanggal_dimulai',
    'tanggal_selesai',
    'adanya_dokumen',
    'kesesuaian_program',
    'adanya_dukungan',
    'adanya_jadwal_pelaksanaan',
    'dukungan_pihak_terkait',
    'ketersidaan_perangkat_fasilitas',
    'adanya_silabus',
    'adanya_bahan_ajar',
    'adanya_lembar_evaluasi',
    'kesesuaian_metode_materi',
    'meningkatkan_interaksi',
    'melakukan_kegiatan_pra_pembelajaran',
    'melaksanakan_pemebelajaran',
    'menggunakan_keterampilan',
    'melaksanakan_refleksi',
    'melakukan_tindak_lanjut',
    'kesesuaian_pelaksanaan_evaluasi',
    'adanya_analisis_belajar',
    'adanya_nilai_hasil_belajar',
    'adanyan_program_tindak_lanjut',
    'adanya_program_pengembangan_diri',
    'adanya_proposal_pembuatan_karya_tulis',
    'adanya_dukungan_pihak_terkait',
    'adanya_laporan_pelaksanaan_program',
    'adanya_karya_tulis_ilmiah',
    'adanya_karya_inovatif',
    'saran_masukan',
];

public function peserta (){
  return $this->belongsTo(Peserta::class);
}
}
