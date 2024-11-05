<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class PesertaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pesertas')->insert([
            [
                'name' => 'Peserta Satu',
                'no_hp' => '1234567890',
                'password' => Hash::make('password123'),
                'remember_token' => \Illuminate\Support\Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Peserta Dua',
                'no_hp' => '0987654321',
                'password' => Hash::make('password456'),
                'remember_token' => \Illuminate\Support\Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Tambahkan lebih banyak data peserta di sini jika diperlukan
        ]);
    }
}
