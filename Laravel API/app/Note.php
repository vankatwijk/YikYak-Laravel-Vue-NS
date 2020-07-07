<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Note extends Model
{
    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
      'user_id',
      'title',
      'channel_id',
      'description',
      'lat',
      'lng',
      'cos_radians_lat',
      'radians_lng',
      'sin_radians_lat'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function channel()
    {
        return $this->belongsTo(Channel::class);
    }


}
