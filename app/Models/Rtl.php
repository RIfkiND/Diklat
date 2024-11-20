<?php

namespace App\Models;

use App\Models\Peserta;
use App\Models\BiodataPeserta;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Rtl extends Model
{
    use HasFactory;

    /**
     * Nama tabel yang berhubungan dengan model ini.
     *
     * @var string
     */
    protected $table = 'rtls';

    /**
     * Kolom yang dapat diisi secara massal.
     *
     * @var array
     */
    protected $fillable = [
        'nama_kegiatan',
        'tujuan',
        'sasaran',
        'metode',
        'tempat',
        'waktu_pelaksanaan',
        'peserta_id',
    ];

    /**
     * Tipe data atribut bawaan untuk kolom-kolom tertentu.
     *
     * @var array
     */
    protected $casts = [
        'waktu_pelaksanaan' => 'datetime',
    ];

    /**
     * Definisi relasi ke model `Peserta`.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function peserta()
    {
        return $this->belongsTo(Peserta::class, 'peserta_id');
    }
    public function biodataPeserta()
    {
        return $this->belongsTo(BiodataPeserta::class, 'peserta_id');
    }

    public function hasil_monitoring()
{
    return $this->hasOne(hasil_monitoring::class);
}

}
