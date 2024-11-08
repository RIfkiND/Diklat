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
                'name' => 'ambatron',
                'email' => 'terangbulan@cus.com',
                'password' => Hash::make('Ambatron123_-'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
