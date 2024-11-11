<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class BuktiDukungsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('bukti_dukungs')->insert([
            [
                'undangan' => 'https://example.com/undangan1.pdf',
                'daftar_hadir' => '2024-11-10 09:00:00',
                'link_foto' => 'https://example.com/foto1.jpg',
                'link_vidio' => 'https://example.com/video1.mp4',
                'hasil_monitoring_id' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'undangan' => 'https://example.com/undangan2.pdf',
                'daftar_hadir' => '2024-11-12 14:00:00',
                'link_foto' => 'https://example.com/foto2.jpg',
                'link_vidio' => 'https://example.com/video2.mp4',
                'hasil_monitoring_id' => 2,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'undangan' => 'https://example.com/undangan3.pdf',
                'daftar_hadir' => '2024-11-15 10:00:00',
                'link_foto' => 'https://example.com/foto3.jpg',
                'link_vidio' => 'https://example.com/video3.mp4',
                'hasil_monitoring_id' => 3,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
