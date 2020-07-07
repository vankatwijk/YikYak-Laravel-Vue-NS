<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Contracts\Auth\CanResetPassword;

class User extends \TCG\Voyager\Models\User implements MustVerifyEmail, CanResetPassword
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'avatar_path', 'company_id', 'current_channel_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $visible = [
        'id',
        'name',
        'avatar_path',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function currentCompany()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function currentChannel()
    {
        return $this->belongsTo(Channel::class);
    }

    /**
     * @param string $companyName
     */
    public function createCompany(string $companyName)
    {
        $company = $this->currentCompany()->create([
            'name' => $companyName,
            'owner_id' => $this->id
        ]);

        $channel = $company->channels()->create([
            'name' => 'General',
        ]);
        $company->update([
            'default_channel_id' => $channel->id,
        ]);
        $this->currentCompany()->associate($company);
        $this->company_id = $company['id'];
        $this->current_channel_id = $channel->id;
        $this->save();

        return $company;
    }

    /**
     * @param \App\Channel $channel
     *
     * @return bool
     */
    public function canJoin(Channel $channel)
    {
        return $this->currentCompany->is($channel->company);
    }

    /**
     * @param \App\Channel $channel
     */
    public function joinChannel(Channel $channel)
    {
        $this->currentChannel()->associate($channel);
        $this->save();
    }

    public function belongsToChannels(){
        return $this->belongsToMany(Channel::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function messagesFrom()
    {
        return $this->hasMany(Messages::class,'id','from_user_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function messagesTo()
    {
        return $this->hasMany(Messages::class,'id','from_user_id');
    }
}
