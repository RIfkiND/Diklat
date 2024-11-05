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
            'name' => 'John Doe',
            'email' => 'john.doe@example.com',
            'password' => Hash::make('password123'), // Hashing the password
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'name' => 'Jane Smith',
            'email' => 'jane.smith@example.com',
            'password' => Hash::make('password123'), // Hashing the password
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'name' => 'Alice Johnson',
            'email' => 'alice.johnson@example.com',
            'password' => Hash::make('password123'), // Hashing the password
            'created_at' => now(),
            'updated_at' => now(),
        ],
        ]);
    }
}
