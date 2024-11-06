<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('admins')->insert([
            [
                'name' => 'terangbulan',
                'email' => 'banana@cumail.com',
                'password' => Hash::make('ambatron'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Admin Dua',
                'email' => 'admin2@example.com',
                'password' => Hash::make('password456'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Tambahkan lebih banyak data admin di sini jika diperlukan
        ]);
    }
}
