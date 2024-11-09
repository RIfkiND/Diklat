<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class EdpSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('edps')->insert([
            [
                'nama_responden' => 'john',
                'nama_institusi_sekolah' => 'SMKN 1 Pluto',
                'kabupaten_kota' => 'Ciamis',
                'no_whatsapp' => '0882772746',
                'email' => 'john@example.com',
                'nama_tamatan_pelatihan' => 'Pembuatan Kaca Pasir',
                'nama_jenis_pelatihan' => 'Pembuatan Kaca',
                'tanggal_dimulai' => Carbon::create('2024', '03', '12'),
                'tanggal_selesai' => Carbon::create('2024', '04', '22'),
                'tampilan_menarik' => false,
                'sabar' => false,
                'pilih_kasih' => false,
                'sering_membantu_siswa' => false,
                'praktis_dalam_menjawab' => false,
                'memberikan_motivasi' => false,
                'pemberian_tugas' => false,
                'menciptakan_pembelajaran' => false,
                'tepat_waktu' => false,
                'penyampaian_materi' => false,
                'penggunaan_media' => false,
                'mengaitkan_materi' => false,
                'saran_dan_masukan' => 'Keep up the good work!',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more records as needed
        ]);
    }
}
