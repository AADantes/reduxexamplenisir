<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $table = 'students';
    public $timestamps = false;


    protected $fillable = [
        'id',
        'firstname',
        'lastname',
        'status'
        
        ];

        public function borrowed()
        {
            return $this->belongsTo(Borrowed::class);
        }
        
}
