@extends('layouts.home')

@section('content')
    <style>
        #mapid{
            height: 200px;
            overflow:hidden;
        }
    </style>
    <div id="dfdapp">

        <div class="card mb-4 " style="min-height: 100%">
            <div class="card-header">
                Add Note
            </div>
            <div class="card-body">
            <form method="POST" action="{{ route('userMessanger.store',$toUser) }}">
            @csrf
                <div class="row">

                    <div class="col-lg-6">

                            <div class="form-group row">
                                <label for="message" class="col-md-4 col-form-label text-md-right">{{ __('message') }}</label>

                                <div class="col-md-6">
                                    <input id="message" type="text" class="form-control @error('message') is-invalid @enderror" name="message" value="{{ old('message') }}" required autocomplete="message" autofocus>

                                    @error('message')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>


                    </div>

                    <div class="col-lg-6">
                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Add_message') }}
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </form>
                
            </div>
        </div>

        <div class="card mb-4 " style="min-height: 100%">
            <div class="card-header">
                History Notes
            </div>
            <div class="card-body">
                @foreach($messages as $message) 
                <div class="card mb-4 " style="min-height: 100%">
                    <div class="card-header">
                    </div>
                    <div class="card-body" style="{{$message->from_user_id == $toUser? 'color:blue;' : 'color:red;'}}">
                        <div>{{$message->message}}</div>
                    </div>
                </div>
                @endforeach 
            </div>
        </div>
    </div>
    <style>
        .addressbtn{
            border:1px solid black;
        }
    </style>
@endsection
