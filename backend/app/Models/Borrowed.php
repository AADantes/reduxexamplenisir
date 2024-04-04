<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Borrowed extends Model
{
    use HasFactory;

    protected $table = 'borroweds';
    public $timestamps = false;


    protected $fillable = [
        'id',
        'book_id',
        'student_id',
        'status'
        
        ];

        public function student()
{
    return $this->hasMany(Student::class);
}

public function book()
{
    return $this->hasMany(Book::class);
}
}
