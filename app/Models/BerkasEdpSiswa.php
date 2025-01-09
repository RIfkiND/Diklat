<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BerkasEdpSiswa extends Model
{
    protected $table = 'berkas_edp_siswas';

    protected $fillable = [
        'berkas_id', 
        'edp_siswa_id_1', 
        'edp_siswa_id_2', 
        'edp_siswa_id_3', 
        'edp_siswa_id_4', 
        'edp_siswa_id_5'
    ];

    public function berkas()
    {
        return $this->belongsTo(Berkas::class);
    }
    public function siswa1()
    {
        return $this->belongsTo(Edp::class, 'edp_siswa_id_1');
    }

    public function siswa2()
    {
        return $this->belongsTo(Edp::class, 'edp_siswa_id_2');
    }

    public function siswa3()
    {
        return $this->belongsTo(Edp::class, 'edp_siswa_id_3');
    }

    public function siswa4()
    {
        return $this->belongsTo(Edp::class, 'edp_siswa_id_4');
    }

    public function siswa5()
    {
        return $this->belongsTo(Edp::class, 'edp_siswa_id_5');
    }
}
