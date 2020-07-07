<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'company_id',
    ];

    /**
     * @var array
     */
    protected $visible = [
        'id',
        'name',
        'company_id',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function notes()
    {
        return $this->hasMany(Note::class);
    }

    public function hasUsers(){
        return $this->belongsToMany(User::class);
    }
}
