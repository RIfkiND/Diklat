<?php

use App\Models\Rtl;
use App\Models\Peserta;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->foreignIdFor(Rtl::class);
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
