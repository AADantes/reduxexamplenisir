<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Book;
use App\Models\Borrowed;

class BorrowedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {


        $student = Borrowed::join('students', 'students.id', '=', 'borroweds.student_id')
        ->join('books', 'borroweds.book_id', '=', 'books.id')
        ->select('borroweds.id', 'students.firstname', 'students.lastname', 'books.book_name', 'books.description')
        ->where('borroweds.id', '=', $id)->first();
    
        if ($student) {
                echo $student;
        } else {
                 echo "Student not found.";
                }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
