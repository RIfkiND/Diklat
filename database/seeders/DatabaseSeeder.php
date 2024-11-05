<?php

namespace Database\Seeders;

use App\Models\Peserta;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create a general Peserta
        Peserta::factory()->create([
            'name' => 'Peserta Name',
            'email' => 'Peserta@example.com',
            'password' => Hash::make('Pesertapassword'),
            'role' => 'peserta',
        ]);

        // Create an admin Peserta
        Peserta::factory()->create([
            'name' => 'Admin Name',
            'email' => 'admin@example.com',
            'password' => Hash::make('adminpassword'),
            'role' => 'petugas',
        ]);

        // Create a super admin Peserta
        Peserta::factory()->create([
            'name' => 'Super Admin Name',
            'email' => 'superadmin@example.com',
            'password' => Hash::make('superadminpassword'),
            'role' => 'admin',
        ]);
    }
}
