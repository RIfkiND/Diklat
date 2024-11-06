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
          $table->id(); // ID untuk tabel ini, auto increment
          $table->string('fullname'); // Nama peserta
          $table->string('kabupaten'); // Kabupaten
          $table->string('pelatihan'); // Nama pelatihan
          $table->date('periode_mulai'); // Periode mulai (tanggal)
          $table->string('sekolah'); // Nama sekolah
          $table->string('provinsi'); // Provinsi
          $table->string('nama_petugas_pembimbing'); // Nama petugas pembimbing
          $table->date('periode_akhir'); // Periode akhir (tanggal)

          // Tambahkan kolom user_id
          $table->unsignedBigInteger('peserta_id'); // Menyimpan user_id sebagai foreign key
          $table->foreign('peserta_id')->references('id')->on('pesertas')->onDelete('cascade'); // Relasi ke tabel pesertas

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
