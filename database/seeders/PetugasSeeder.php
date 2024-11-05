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
            [
                'NIP' => 123456789,
                'password' => Hash::make('password123'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'NIP' => 987654321,
                'password' => Hash::make('password456'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Tambahkan lebih banyak data petugas di sini jika diperlukan
        ]);
    }
}
