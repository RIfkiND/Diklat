<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('biodata_pesertas', function (Blueprint $table) {
            $table->id(); // ID, auto increment primary key
            $table->string('fullname'); // Kolom untuk nama lengkap peserta
            $table->string('kabupaten'); // Kolom untuk kabupaten (mungkin ID atau kode kabupaten)
            $table->string('pelatihan'); // Kolom untuk pelatihan yang diikuti
            $table->dateTime('periode_mulai'); // Kolom untuk tanggal mulai pelatihan
            $table->string('sekolah'); // Kolom untuk nama sekolah peserta
            $table->string('provinsi'); // Kolom untuk provinsi (mungkin ID atau kode provinsi)
            $table->string('nama_petugas_pembimbing'); // Kolom untuk nama petugas pembimbing
            $table->dateTime('periode_akhir'); // Kolom untuk tanggal akhir pelatihan
            $table->foreignId('peserta_id')->constrained('pesertas'); // Kolom untuk ID peserta, merujuk ke tabel 'pesertas'
            $table->timestamps(); // Kolom created_at dan updated_at
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('biodata_pesertas');
    }
};
