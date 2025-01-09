<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BerkasEdpOther extends Model
{
    protected $table = 'berkas_edp_others';

    protected $fillable = [
        'edp_other_id_1', 'edp_other_id_2', 'edp_other_id_3', 'edp_other_id_4', 'edp_other_id_5',
    ];

    // Define the relationship with the Edp model
    public function edp1()
    {
        return $this->belongsTo(EdpOther::class, 'edp_id_1');
    }

    public function edp2()
    {
        return $this->belongsTo(EdpOther::class, 'edp_id_2');
    }

    public function edp3()
    {
        return $this->belongsTo(EdpOther::class, 'edp_id_3');
    }

    public function edp4()
    {
        return $this->belongsTo(EdpOther::class, 'edp_id_4');
    }

    public function edp5()
    {
        return $this->belongsTo(EdpOther::class, 'edp_id_5');
    }

}
