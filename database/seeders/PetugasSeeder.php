<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class PetugasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('petugas')->insert([
            ['name'=>'Rifki',
                'NIP' => 123456789,
                'unit_kerja'=> 'rpl',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
              'name'=>'Kaka',
                'NIP' => 987654321,
                'unit_kerja'=> 'rpl',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Tambahkan lebih banyak data petugas di sini jika diperlukan
        ]);
    }
}
