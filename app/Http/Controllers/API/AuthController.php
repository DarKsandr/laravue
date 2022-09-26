<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\API\AuthLoginRequest;

class AuthController extends Controller
{
    public function login(AuthLoginRequest $request)
    {
        $user = User::where('email', $request->email)->first();
        if ($user && Hash::check($request->password, $user->password)) {
            return response([
                'token' => $user->createToken('Laravel Password Grant Client')->accessToken,
            ]);
        } else {
            return response(["message" => 'Логин или пароль указан неверно'], 422);
        }
    }
}
