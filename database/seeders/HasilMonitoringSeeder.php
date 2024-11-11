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
                'realisasi' => 'Pelaksanaan kegiatan sesuai rencana',
                'kendala' => 'Kurangnya partisipasi dari beberapa peserta',
                'solusi' => 'Mengadakan sesi motivasi untuk meningkatkan partisipasi',
                'peserta_id' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'realisasi' => 'Kegiatan berjalan lancar dengan hasil positif',
                'kendala' => 'Keterbatasan waktu untuk beberapa sesi',
                'solusi' => 'Menjadwalkan ulang sesi yang terlewat',
                'peserta_id' => 2,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'realisasi' => 'Pencapaian target 80% dari rencana awal',
                'kendala' => 'Masalah teknis pada peralatan',
                'solusi' => 'Meminta dukungan teknis untuk perbaikan',
                'peserta_id' => 3,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
