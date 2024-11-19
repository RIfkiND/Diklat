<?php

use App\Models\Peserta;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hasil_monitorings', function (Blueprint $table) {
            $table->id();
            $table->dateTime('realisasi')->nullable();
            $table->string('kendala')->nullable();
            $table->string('solusi')->nullable();

            //
            $table->string('undangan')->default("ya");
            $table->string('daftar_hadir')->default("ya");
            $table->string('foto')->default("ya");
            $table->string('vidio')->default("ya");
            $table->string('link_foto');
            $table->string('link_vidio');
            $table->foreignIdFor(Peserta::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hasil_monitorings');
    }
};
