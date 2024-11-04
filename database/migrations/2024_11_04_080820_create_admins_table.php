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
        Schema::create('admins', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('name'); // Admin's name
            $table->string('email')->unique(); // Admin's email, unique constraint
            $table->string('password'); // Admin's password
            $table->enum('role', ['admin'])->default('admin'); // Admin's role, default to 'admin'
            $table->rememberToken(); // For "remember me" functionality
            $table->timestamps(); // Created at and updated at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
