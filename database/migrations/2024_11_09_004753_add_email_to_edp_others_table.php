<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddEmailToEdpOthersTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('edp_others', function (Blueprint $table) {
            $table->string('email')->after('no_whatsapp')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('edp_others', function (Blueprint $table) {
            $table->dropColumn('email');
        });
    }
}
