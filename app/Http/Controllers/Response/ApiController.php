<?php

namespace App\Http\Controllers\Response;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function handleFormSubmit(Request $request)
    {
        $data = $request->all();
        // Process data, e.g., store it in the database
        // Example: User::create($data);
        Post::create($data);
        return response()->json(['message' => 'Data received successfully']);
    }

}
