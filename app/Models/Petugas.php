<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Petugas extends Model
{
    use HasFactory;

    // Specify the table name if it doesn't follow Laravel's convention
    protected $table = 'petugas';

    // Specify which attributes can be mass assigned
    protected $fillable = [
        'name',       // Add all relevant fields for the petugas model
        'email',
        'password',
        'role',
        // Add any other fields as needed
    ];

    // Enable timestamps if your table has created_at and updated_at fields
    public $timestamps = true;
}
