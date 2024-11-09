<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class EdpOtherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('edp_others')->insert([
            [
                'nama_responden' => 'John Doe',
                'nama_institusi_sekolah' => 'SMKN 1 Pluto',
                'kabupaten_kota' => 'Ciamis',
                'no_whatsapp' => '0858696969',
                'email' => 'john.doe@example.com',
                'nama_tamatan_pelatihan' => 'Pembuatan Kaca Pasir',
                'nama_jenis_pelatihan' => 'Pembuatan Kaca',
                'jabatan_responden' => 'Guru',
                'tanggal_dimulai' => Carbon::create('2024', '03', '12'),
                'tanggal_selesai' => Carbon::create('2024', '04', '22'),
                'adanya_dokumen' => true,
                'kesesuaian_program' => true,
                'adanya_dukungan' => true,
                'adanya_jadwal_pelaksanaan' => true,
                'dukungan_pihak_terkait' => true,
                'ketersidaan_perangkat_fasilitas' => true,
                'adanya_silabus' => true,
                'adanya_bahan_ajar' => true,
                'adanya_lembar_evaluasi' => true,
                'kesesuaian_metode_materi' => true,
                'meningkatkan_interaksi' => true,
                'melakukan_kegiatan_pra_pembelajaran' => true,
                'melaksanakan_pemebelajaran' => true,
                'menggunakan_keterampilan' => true,
                'melaksanakan_refleksi' => true,
                'melakukan_tindak_lanjut' => true,
                'kesesuaian_pelaksanaan_evaluasi' => true,
                'adanya_analisis_belajar' => true,
                'adanya_nilai_hasil_belajar' => true,
                'adanyan_program_tindak_lanjut' => true,
                'adanya_program_pengembangan_diri' => true,
                'adanya_proposal_pembuatan_karya_tulis' => true,
                'adanya_dukungan_pihak_terkait' => true,
                'adanya_laporan_pelaksanaan_program' => true,
                'adanya_karya_tulis_ilmiah' => true,
                'adanya_karya_inovatif' => true,
                'saran_masukan' => 'Keep up the good work!',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more records as needed
        ]);
    }
}
