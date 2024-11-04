<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create a general user
        User::factory()->create([
            'name' => 'User Name',
            'email' => 'user@example.com',
            'password' => Hash::make('userpassword'),
            'role' => 'peserta',
        ]);

        // Create an admin user
        User::factory()->create([
            'name' => 'Admin Name',
            'email' => 'admin@example.com',
            'password' => Hash::make('adminpassword'),
            'role' => 'petugas',
        ]);

        // Create a super admin user
        User::factory()->create([
            'name' => 'Super Admin Name',
            'email' => 'superadmin@example.com',
            'password' => Hash::make('superadminpassword'),
            'role' => 'admin',
        ]);
    }
}
