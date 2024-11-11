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
            $table->string('link_foto')->nullable()->change();
            $table->string('link_vidio')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('bukti_dukungs', function (Blueprint $table) {
            $table->string('link_foto')->nullable(false)->change();
            $table->string('link_vidio')->nullable(false)->change();
        });
    }
};
