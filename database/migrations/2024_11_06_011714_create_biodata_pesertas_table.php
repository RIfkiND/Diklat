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
      Schema::create('biodata_peserta', function (Blueprint $table) {
        $table->id();
        $table->string('fullname');
        $table->integer('kabupaten');
        $table->string('pelatihan');
        $table->dateTime('periode_mulai');
        $table->string('sekolah');
        $table->integer('provinsi');
        $table->string('nama_petugas_pembimbing');
        $table->dateTime('periode_akhir');
        $table->unsignedBigInteger('peserta_id'); // Ensure this is unsignedBigInteger

        // Add foreign key constraint with correct references
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
