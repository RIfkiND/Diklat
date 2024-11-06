<?php

use App\Models\Petugas;
use App\Models\Rtl;
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
        Schema::create('pembimbingans', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Petugas::class);
            $table->foreignIdFor(Rtl::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pembimbingans');
    }
};
