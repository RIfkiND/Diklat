<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Petugas;
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('berkas', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Petugas::class);
            $table->string('vidio_berkas');
            $table->string('signature_companion1');
            $table->string('signature_companion2');
            $table->string('kesimpulan');
            $table->string('saran');
            $table->string('surat_tugas');     
            $table->string('daftar_hadir');       
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('berkas');
    }
};
