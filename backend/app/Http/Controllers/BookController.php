<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function index()
    {

        $books = Book::all();
    

        return response()->json([

            $books,

        ],200);
    }

    public function store(Request $request)
    {

        $books = Book::create(
            [
                'bookname' => $request->bookname,
                'description' => $request->description,
                'status' => $request->status
            ]
        );

    }

    public function show($id)
    {
        $books = Book::find($id);

        return response()->json([
            $books,
            ],200);

    }

    public function edit(int $id)
    {
        $books = Book::find($id);
        if ($books) 
        {

        return response()->json([
            $books,
            ],200);

        }
    else
        {
        return response()->json([
            'message' => "Student Does not Exist"
            ],404);
        }
    }

    public function update(Request $request, int $id)
    {

        $books = Book::find($id);
        $books->update(
            [
                'bookname' => $request->bookname,
                'description' => $request->description,
                'status' => $request->status
            ]
        );

    }

    public function delete ($id)
    {
        $books = Book::find( $id );
        
        $books->delete();
    }


}
