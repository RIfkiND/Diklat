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
            $table->id();
            $table->string('fullname');
            $table->string('kabupaten');
            $table->string('pelatihan');
            $table->dateTime('periode_mulai');
            $table->string('sekolah');
            $table->string('provinsi');
            $table->string('nama_petugas_pembimbing1');
            $table->string('nama_petugas_pembimbing2');
            $table->dateTime('periode_akhir');
            $table->foreignId('peserta_id')->constrained('pesertas');
            $table->timestamps();
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
