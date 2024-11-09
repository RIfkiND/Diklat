<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Rtl;
use App\Models\BiodataPeserta;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Peserta extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;
    protected $table = 'pesertas';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
      'name',
      'no_hp',
      'tamatan',
      'password',
     ];

    public function getAuthIdentifierName(){
      return  "no_hp";
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }
    // public function biodataPeserta()
    // {
    //     return $this->hasOne(BiodataPeserta::class);
    // }

    public function peserta()
    {
        return $this->hasOne(Peserta::class);
    }

    public function rtl()
    {
        return $this->hasOne(Rtl::class);
    }
    public function pelatihan(){
      return $this->belongsTo(Pelatihan::class);
    }
    public function biodataPeserta()
    {
        return $this->hasOne(BiodataPeserta::class, 'peserta_id');
    }
  }
