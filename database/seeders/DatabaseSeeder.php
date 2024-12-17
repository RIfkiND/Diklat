<?php

namespace Database\Seeders;

use App\Models\Pelatihan;
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
      // $this->call(AdminSeeder::class);
      // $this->call(PetugasSeeder::class);
     $this->call(PelatihanSeeder::class);
      // $this->call(PesertaSeeder::class);
      // $this->call(EdpSeeder::class);
      // $this->call(HasilMonitoringSeeder::class);
    }
}
