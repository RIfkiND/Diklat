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

        DB::table('peserta')->insert([
          ['name' => 'SAIDI SETIAWAN', 'no_hp' => '81540923927', 'password' => bcrypt('81540923927')],
          ['name' => 'Erniasih, S.Pd., Gr.', 'no_hp' => '83875292957', 'password' => bcrypt('83875292957')],
          ['name' => 'IRFAN FAUZIYAN, S.Pd', 'no_hp' => '81287556454', 'password' => bcrypt('81287556454')],
          ['name' => 'Maman Hidayaturrohman, S.Pd', 'no_hp' => '82120192389', 'password' => bcrypt('82120192389')],
          ['name' => 'Khoirul Munir, S.Pd.', 'no_hp' => '8888197795', 'password' => bcrypt('8888197795')],
          ['name' => 'FIRZA FADLULLAH ASMAN, S.Pd', 'no_hp' => '8993602321', 'password' => bcrypt('8993602321')],
          ['name' => 'Nida Fattahun Nisa, S.Pd.', 'no_hp' => '89513080150', 'password' => bcrypt('89513080150')],
          ['name' => 'DZULATIP AS SHODIK', 'no_hp' => '89676053405', 'password' => bcrypt('89676053405')],
          ['name' => 'AANG ZAELANI', 'no_hp' => '81911988948', 'password' => bcrypt('81911988948')],
          ['name' => 'MUHAMAD KUSDINAR, S.Pd', 'no_hp' => '8111233300', 'password' => bcrypt('8111233300')],
          ['name' => 'WIDODO PUTRA HALOMOAN SIREGAR', 'no_hp' => '85694302745', 'password' => bcrypt('85694302745')],
          ['name' => 'FERA PUSPITASARI, S.Pd', 'no_hp' => '82112385804', 'password' => bcrypt('82112385804')],
          ['name' => 'DEDI PRIHADI, S.T', 'no_hp' => '89501919209', 'password' => bcrypt('89501919209')],
          ['name' => 'MUHAMAD KURNIAWAN', 'no_hp' => '85717629346', 'password' => bcrypt('85717629346')],
          ['name' => 'INDRA TRIADI', 'no_hp' => '82298470475', 'password' => bcrypt('82298470475')],
          ['name' => 'Andreas Dwi Jati Prasetyo, S.Pd.', 'no_hp' => '82210291682', 'password' => bcrypt('82210291682')],
          ['name' => 'ANDRIANI PUSPITA ARIFIN MOODUTO', 'no_hp' => '82111365580', 'password' => bcrypt('82111365580')],
          ['name' => 'Nurjana, S.Pd.', 'no_hp' => '81379838422', 'password' => bcrypt('81379838422')],
          ['name' => 'REVIANDI, S.Pd', 'no_hp' => '85378808291', 'password' => bcrypt('85378808291')],
          ['name' => 'Sunan Hamri, M.TPd.', 'no_hp' => '85267944321', 'password' => bcrypt('85267944321')],
          ['name' => 'Elfison Dahsananranca Syawtupan, SE', 'no_hp' => '81278217390', 'password' => bcrypt('81278217390')],
          ['name' => 'FITRI AMELIA, S.Pd', 'no_hp' => '85266182633', 'password' => bcrypt('85266182633')],
          ['name' => 'FERDI ARIANSYAH PUTRA, S.Pd', 'no_hp' => '85788295258', 'password' => bcrypt('85788295258')],
          ['name' => 'RATNAWATI', 'no_hp' => '85214875528', 'password' => bcrypt('85214875528')],
          ['name' => 'NENI RESTIANA, S.Kom.', 'no_hp' => '85764656660', 'password' => bcrypt('85764656660')],
          ['name' => 'Rosni, S. Pd', 'no_hp' => '85367082105', 'password' => bcrypt('85367082105')],
          ['name' => 'RAKIDI', 'no_hp' => '85842679495', 'password' => bcrypt('85842679495')],
          ['name' => 'HARRY SULISTYO, S.Pd.', 'no_hp' => '85711181168', 'password' => bcrypt('85711181168')],
          ['name' => 'Gunawan, S.Pd.', 'no_hp' => '85392052065', 'password' => bcrypt('85392052065')],
          ['name' => 'VIRONICA DYAH HARINI, S.T.', 'no_hp' => '87739467267', 'password' => bcrypt('87739467267')],
          ['name' => 'Surya Eka Dwi Purba', 'no_hp' => '85725959297', 'password' => bcrypt('85725959297')],
          ['name' => 'HUSNI NURIL LATIFAH', 'no_hp' => '85728166595', 'password' => bcrypt('85728166595')],
          ['name' => 'Ahmad Taufiq Tambunan, S.Pd', 'no_hp' => '85270547364', 'password' => bcrypt('85270547364')],
          ['name' => 'Maryuwono, S.Pd', 'no_hp' => '8,95E+16', 'password' => bcrypt('8,95E+16')],
          ['name' => 'CANDRA ARI UNTORO, S.Pd.', 'no_hp' => '89506164339', 'password' => bcrypt('89506164339')],
          ['name' => 'YOHANES SRI WIJAYANTO', 'no_hp' => '8562888552', 'password' => bcrypt('8562888552')],
          ['name' => 'YULIUS RONALDO DWIYATMOKO, S.Pd.', 'no_hp' => '81393711195', 'password' => bcrypt('81393711195')],
          ['name' => 'ANGELINA TARULI R. TOGATOROP, S.Pd', 'no_hp' => '81298581156', 'password' => bcrypt('81298581156')],
          ['name' => 'YUNITA NOVYANTI', 'no_hp' => '81293750986', 'password' => bcrypt('81293750986')],
          ]);
    }
}
