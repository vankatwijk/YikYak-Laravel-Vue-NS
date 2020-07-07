@extends('layouts.home')

@section('content')
    <div id="dfdapp">
    {{auth()->user()->currentCompany}}

 
    @foreach (auth()->user()->currentCompany->channels as $w)
        <div>{{ $w }} </div>   
    @endforeach

    </div>
@endsection
