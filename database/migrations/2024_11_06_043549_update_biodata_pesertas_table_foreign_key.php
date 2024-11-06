<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateBiodataPesertasTableForeignKey extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('biodata_pesertas', function (Blueprint $table) {
            // First, drop the existing foreign key if it exists
            $table->dropForeign(['peserta_id']);

            // Then, add the new foreign key
            $table->foreign('peserta_id')
                  ->references('id')
                  ->on('pesertas')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('biodata_pesertas', function (Blueprint $table) {
            // Drop the new foreign key
            $table->dropForeign(['peserta_id']);

            // If you want to revert to the original foreign key (assuming it was to 'users' table)
            $table->foreign('peserta_id')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade');
        });
    }
}
