<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class RtlSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('rtls')->insert([
            [
                'nama_kegiatan' => 'Workshop Pengembangan Diri',
                'tujuan' => 'Meningkatkan keterampilan diri',
                'sasaran' => 'Guru Sejawat',
                'metode' => 'offline',
                'tempat' => 'Ruang Serbaguna',
                'waktu_pelaksanaan' => '2024-11-15 10:00:00',
                'peserta_id' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
          ]);
          }
      };
