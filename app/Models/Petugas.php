<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Petugas extends Authenticatable
{
  /** @use HasFactory<\Database\Factories\UserFactory> */
  use HasFactory, Notifiable;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'name',
    'NIP',
    'unit_kerja',
    'no_hp'
  ];
  public function getAuthIdentifierName()
  {
    return "NIP";
  }

  public function berkas(){
    return $this->hasMany(Berkas::class);
  }
  public function detail_petugas()
  {
    return $this->hasOne(DetailPetugas::class);
  }

  public function biodataPesertaAsPetugas1()
  {
      return $this->hasMany(BiodataPeserta::class, 'petugas_id_1');
  }

  public function biodataPesertaAsPetugas2()
  {
      return $this->hasMany(BiodataPeserta::class, 'petugas_id_2');
  }
  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [
    'remember_token',
  ];

}
