<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBiodataPesertasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('biodata_pesertas', function (Blueprint $table) {
            $table->id();
            $table->string('name'); 
            $table->string('kabupaten'); // Kabupaten
            $table->string('pelatihan'); // Nama pelatihan
            $table->date('periode_mulai'); // Periode mulai (tanggal)
            $table->string('sekolah'); // Nama sekolah
            $table->string('provinsi'); // Provinsi
            $table->string('nama_petugas_pembimbing'); // Nama petugas pembimbing
            $table->date('periode_akhir'); // Periode akhir (tanggal)
            $table->timestamps(); // Menambahkan kolom created_at dan updated_at
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
}
