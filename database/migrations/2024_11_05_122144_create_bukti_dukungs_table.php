<?php

use App\Models\hasil_monitoring;
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
        Schema::create('bukti_dukungs', function (Blueprint $table) {
            $table->id();
            $table->string('undangan');
            $table->dateTime('daftar_hadir');
            $table->string('link_foto');
            $table->string('link_vidio');
            $table->foreignIdFor(hasil_monitoring::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bukti_dukungs');
    }
};
