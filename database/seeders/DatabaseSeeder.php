<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Petugas;
use App\Models\Admin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create a general user as a peserta
        User::create([
            'name' => 'Peserta User',
            'email' => 'peserta@example.com',
            'password' => Hash::make('password123'), // Use a secure password
            'role' => 'peserta', // Assuming you have a 'role' column
        ]);

        // Create a petugas
        Petugas::create([
            'name' => 'Petugas User',
            'email' => 'petugas@example.com',
            'password' => Hash::make('password123'), // Use a secure password
            'role' => 'petugas', // Assuming you have a 'role' column
            // Include any other fields required by the Petugas model
        ]);

        // Create an admin
        Admin::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('password123'), // Use a secure password
            'role' => 'admin', // Assuming you have a 'role' column
            // Include any other fields required by the Admin model
        ]);
    }
}
