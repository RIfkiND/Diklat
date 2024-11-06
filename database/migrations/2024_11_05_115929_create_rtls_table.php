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
        Schema::create('rtls', function (Blueprint $table) {
            $table->id();
            $table->string('nama_kegiatan');
            $table->string('tujuan');
            $table->enum('sasaran', ['Peserta Didik', 'Guru Sejawat', 'Kepala Sekolah','Alumni Pembimbing']);
            $table->enum('metode', ['online', 'offline']);
            $table->string('tempat');
            $table->dateTime('periode_awal');
            $table->dateTime('periode_akhir')->nullable();
            $table->foreignIdFor(Peserta::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rtls');
    }
};
