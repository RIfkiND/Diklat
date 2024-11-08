<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PelatihanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $diklats = [
        'Matematika Berbasis Kejuruan',
        'Pelatihan Bahasa Inggris Berbasis Kejuruan',
        'Commercial Building Electrical Installation',
        'Pengukur Kecepatan Motor BLDC dan Level Baterai Berbasis Mikrokontroler',
        'Perawatan Sistem AC Kendaraan',
        'Industrial Control Application Based PLC',
        'Metrologi (Pengukuran)',
        'Pemrograman CNC dengan Mastercam',
        'Pengoperasian Mesin CNC',
        'Electrical Equipment Monitoring and Control System',
        'Finishing Kayu',
        'Pemetaan Topografi',
        'BIM - Pemodelan Arsitektur Menggunakan Autodesk Revit. Angk 2',
        'Penginderaan Jauh Menggunakan LIDAR',
        'Membangun Bisnis Makanan Ringan',
        'Membangun Komunikasi dengan Bantuan Teknologi bagi Guru Project IPAS',
        'Perawatan Berkala Kendaraan Ringan',
        'Membangun Jaringan Lokal dan Internet',
        'Teknik Pengelasan Flux Core Arc Welding (FCAW) bagi Guru',
        'Welding Inspector Basic Batch 2',
        'IIW Welding Specialist',
        'Building Automation System Based KNX Protocol',
        'Pemetaan Tematik Menggunakan UAV',
        'Membuat Model 3D dengan CAD',
        'Pemasangan Komponen Mekanikal Pembangkit Listrik Tenaga Bayu (PLTB) Skala Kecil',
        'Dokumentasi 2D Pekerjaan Konstruksi Bangunan Gedung Menggunakan Autocad',
        'Network Internet Service',
        'Sistem Informasi Geografis',
        'Ducting System Batch 1',
        'Game Edukasi 3 Dimensi',
        'Lingkungan Sebagai Sumber Energi Bagi Guru Projek IPAS',
        'Web Programming',
    ];

    foreach ($diklats as $nama) {
        DB::table('pelatihans ')->insert(['name' => $nama]);
    }
    }
}
