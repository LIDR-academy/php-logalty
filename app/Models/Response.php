<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Response extends Model
{
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'idea_id',
        'is_good',
        'rationale',
        'next_step'
    ];

    protected $casts = [
        'is_good' => 'boolean'
    ];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->id = Str::uuid();
        });
    }

    public function idea(): BelongsTo
    {
        return $this->belongsTo(Idea::class);
    }
}
