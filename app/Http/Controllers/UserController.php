<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    // Register a new user
    public function register(Request $request)
    {
        // Validate the incoming request data
        // Validate the incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'phone' => 'required|string|max:255',
            'address' => 'required|string|max:255'
        ]);

        dd($request->all());

        // Create a new user record in the database
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'phone' => $request->phone,
            'address' => $request->address
        ]);


        // check if the user was created
        if ($user) {
            // return a successful response
            return response()->json([
                'success' => true,
                'message' => 'User created successfully',
                'data' => $user
            ], 201);
        }

        // return an error response
        return response()->json([
            'success' => false,
            'message' => 'Sorry, user could not be created'
        ], 500);
    }
}
