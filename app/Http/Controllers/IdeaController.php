<?php

namespace App\Http\Controllers;

use App\Models\Idea;
use App\Models\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class IdeaController extends Controller
{
    public function index()
    {
        $ideas = Idea::with('response')->latest()->get();
        return response()->json($ideas);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'description' => 'required|string',
        ]);

        $idea = Idea::create($validated);

        $response = $this->queryChatGpt($idea->description);
        $idea->response()->create($response);

        return response()->json($idea->load('response'), 201);
    }

    private function queryChatGpt(string $description)
    {
        $prompt = "You are an expert leader on think tank, evaluate the idea and tell me in a json if is_good, your rationale and the next step to make the idea come through, for each one you need to be brief (less than 140 chars): $description";

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('CHATGPT_API_KEY'),
            'Content-Type' => 'application/json',
        ])->post('https://api.openai.com/v1/completions', [
            'model' => 'gpt-3.5-turbo-instruct',
            'prompt' => $prompt,
            'max_tokens' => 150,
            'n' => 1,
            'stop' => null,
            'temperature' => 0.5,
        ]);

        $result = json_decode($response->body(), true);


        if (!isset($result['choices']) || !isset($result['choices'][0]['text'])) {
            throw new \Exception('Invalid response from ChatGPT API');
        }

        $data = json_decode($result['choices'][0]['text'], true);

        return [
            'is_good' => $data['is_good'],
            'rationale' => $data['rationale'],
            'next_step' => $data['next_step'],
        ];
    }
}
