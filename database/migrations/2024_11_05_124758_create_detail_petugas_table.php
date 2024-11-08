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
        Schema::create('detail_petugas', function (Blueprint $table) {
            $table->id();
            $table->integer("no_hp")->nullable();
            $table->bigInteger('unit_kerja')->nullable()->default(23);
            $table->foreignIdFor(Petugas::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_petugas');
    }
};
