<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFormRequest;
use App\Models\Form;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function store(StoreFormRequest $request)
    {
        try {
            Form::query()->create($request->validated());
        }catch (\Throwable $throwable){
            return response()->json(['global_error' => $throwable->getMessage()]);
        }
        return response()->json(['message' => 'success'], 201);
    }
}
