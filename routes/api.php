<?php
use App\Http\Controllers\IdeaController;

Route::get('/ideas', [IdeaController::class, 'index']);
Route::post('/ideas', [IdeaController::class, 'store']);
Route::post('/ideas/{idea}/response', [IdeaController::class, 'addResponse']);
