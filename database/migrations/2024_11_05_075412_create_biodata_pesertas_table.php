<?php

use App\Models\Petugas;
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
        Schema::create('biodata_pesertas', function (Blueprint $table) {
            $table->id();
            $table->string('sekolah');
            $table->string('provinsi');
            $table->string('kabupaten');
            $table->interger('no_hp');
            $table->foreignIdFor(Petugas::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_pesertas');
    }
};
