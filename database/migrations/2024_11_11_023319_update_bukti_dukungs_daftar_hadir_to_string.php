<?php

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
        Schema::table('bukti_dukungs', function (Blueprint $table) {
            $table->string('daftar_hadir')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('bukti_dukungs', function (Blueprint $table) {
            $table->dateTime('daftar_hadir')->change();
        });
    }
};
