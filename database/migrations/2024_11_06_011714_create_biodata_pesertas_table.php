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
            $table->string('fullname');
            $table->string('kabupaten');
            $table->string('pelatihan');
            $table->date('periode_mulai');
            $table->string('sekolah');
            $table->string('provinsi');
            $table->string('nama_petugas_pembimbing');
            $table->date('periode_akhir');

            // Changed to reference 'pesertas' table instead of 'users'
            $table->unsignedBigInteger('peserta_id');
            $table->foreign('peserta_id')->references('id')->on('pesertas')->onDelete('cascade');

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
}
