<?php
namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\HasOne;
    use Illuminate\Support\Str;

    class Idea extends Model
    {
        protected $keyType = 'string';
        public $incrementing = false;

        protected $fillable = [
            'title',
            'description',
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

        public function response(): HasOne
        {
            return $this->hasOne(Response::class);
        }
    }
