<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'from_user_id',
        'to_user_id',
        'message',
        'meta',
    ];

    public function fromUser()
    {
        return $this->belongsTo('App\User');
    }

    public function toUser()
    {
        return $this->belongsTo('App\User');
    }

}
