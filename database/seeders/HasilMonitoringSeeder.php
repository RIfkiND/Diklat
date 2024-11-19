<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class HasilMonitoringSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('hasil_monitorings')->insert([
            [
                'realisasi' => Carbon::now(),
                'kendala' => 'Kendala 1',
                'solusi' => 'Solusi 1',
                'undangan' => 'ya',
                'daftar_hadir' => 'ya',
                'foto' => 'ya',
                'vidio' => 'ya',
                'link_foto' => 'https://example.com/foto1.jpg',
                'link_vidio' => 'https://example.com/vidio1.mp4',
                'peserta_id' => 3,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            // Add more entries as needed
        ]);
    }
}
