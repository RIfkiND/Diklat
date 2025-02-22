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
            ['name'=> 'user','no_hp'=>'85467667577','password'=>bcrypt('85467667577'),'tamatan' => 'Matematika Berbasis Kejuruan'],
            ['name'=> 'kaka','no_hp'=>'85467667566','password'=>bcrypt('85467667566'),'tamatan' => 'Matematika Berbasis Kejuruan'],
          ]);
    }
}
