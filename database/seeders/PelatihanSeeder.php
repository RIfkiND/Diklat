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
        $pelatihanData = [
            "Matematika Berbasis Kejuruan",
            "Pelatihan Bahasa Inggris Berbasis Kejuruan",
            "Commercial Building Electrical Installation",
            "Pengukur Kecepatan Motor BLDC dan Level Baterai Berbasis Mikrokontroler",
            "Perawatan Sistem AC Kendaraan",
            "Industrial Control Application Based PLC",
            "Metrologi (Pengukuran)",
            "Pemrograman CNC dengan Mastercam",
            "Pengoperasian Mesin CNC",
            "Electrical Equipment Monitoring and Control System",
            "Finishing Kayu",
            "Pemetaan Topografi",
            "BIM - Pemodelan Arsitektur Menggunakan Autodesk Revit. Angk 2",
            "Penginderaan Jauh Menggunakan LIDAR",
            "Membangun Bisnis Makanan Ringan",
            "Membangun Komunikasi dengan Bantuan Teknologi bagi Guru Project IPAS",
            "Perawatan Berkala Kendaraan Ringan",
            "Membangun Jaringan Lokal dan Internet",
            "Teknik Pengelasan Flux Core Arc Welding (FCAW) bagi Guru",
            "Welding Inspector Basic Batch 2",
            "IIW Welding Specialist",
            "BIM - Pemodelan Arsitektur Bangunan dengan Aplikasi Berbasis BIM (Revit)",
            "Building Automation System Based KNX Protocol",
            "Pemetaan Tematik Menggunakan UAV",
            "Membuat Model 3D dengan CAD",
            "Pemasangan Komponen Mekanikal Pembangkit Listrik Tenaga Bayu (PLTB) Skala Kecil",
            "Matematika Terapan Berbasis Kejuruan",
            "Dokumentasi 2D Pekerjaan Konstruksi Bangunan Gedung Menggunakan Autocad",
            "Network Internet Service",
            "Penggunaan Peralatan dan Pengoperasian Mesin Pengerjaan Kayu",
            "Mengembangkan Proyek Kreatif Berbasis Artificial Intelegence untuk Mendorong Kewirausahaan di SMK",
            "Pengoperasian Peralatan Kerja Kayu",
            "Pengoperasian Mesin Bubut dan Frais",
            "Bahasa Inggris Berbasis Kejuruan",
            "Pengoperasian Mesin Bubut Dasar dan Kompleks",
            "Pemrograman dan Aplikasi Mikrokontroler",
            "Sistem Informasi Geografis",
            "RAB Konstruksi Bangunan Dengan Aplikasi Microsoft Project",
            "Lingkungan Sebagai Sumber Energi Bagi Guru Projek IPAS",
            "Ducting System Batch 1",
            "Game Edukasi 3 Dimensi",
            "Bahasa Inggris Berbasis Kejuruan (Angkatan 2)",
            "Welding Inspector Basic",
            "Teknik Pengelasan GTAW bagi Guru",
            "Pengenalan Dasar Perawatan Alat Berat",
            "Motion Graphic",
            "Pembuatan dan Pengoperasian Instalasi Reaktor Biodiesel",
            "Desain Grafis",
            "Pemasangan Dudukan Modul dan Kelistrikan PLTS Tipe Off Grid Terpusat",
            "Pengelasan Shielded Metal ARC Welding (SMAW) Angkatan 5",
            "Bahan Bakar Biodiesel",
            "Pelatihan Bahan Bakar Bioetanol",
            "Web Programming",
            "Aplikasi Android",
            "Manajerial Kepala Sekolah",
            "Pemasangan Instalasi Biogas Konstruksi Serat Kaca untuk Pembakaran Skala Rumah Tangga",
            "Mengembangkan Proyek Kreatif Berbasis Artificial Intelegence untuk Mendorong Kewirausahaan di SMK",
            "Building Automation System Based KNX Protocol",
            "Pemasangan Komponen Mekanikal Pembangkit Listrik Tenaga Bayu (PLTB) Skala Kecil",
            "Pemetaan Tematik Menggunakan UAV",
            "Pemasangan Komponen Mekanikal Pembangkit Listrik Tenaga Bayu (PLTB) Skala Kecil",
            "Pemasangan Dudukan Modul dan Kelistrikan PLTS Tipe Off Grid Terpusat",
            "Pemetaan Tematik Menggunakan UAV",
            "Pemasangan Komponen Mekanikal Pembangkit Listrik Tenaga Bayu (PLTB) Skala Kecil",
        ];

        foreach ($pelatihanData as $name) {
            // Check if the record already exists in the table
            if (!DB::table('pelatihans')->where('name', $name)->exists()) {
                DB::table('pelatihans')->insert([
                    'name' => $name,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
