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
            <form method="POST" action="{{ route('channelMessanger.store',$channel) }}">
            @csrf
                <div class="row">

                    <div class="col-lg-6">

                            <div class="form-group row">
                                <label for="title" class="col-md-4 col-form-label text-md-right">{{ __('title') }}</label>

                                <div class="col-md-6">
                                    <input id="title" type="text" class="form-control @error('title') is-invalid @enderror" name="title" value="{{ old('title') }}" required autocomplete="title" autofocus>

                                    @error('title')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="description" class="col-md-4 col-form-label text-md-right">{{ __('description') }}</label>

                                <div class="col-md-6">
                                    <input id="description" type="text" class="form-control @error('description') is-invalid @enderror" name="description" value="{{ old('description') }}" required autocomplete="description" autofocus>

                                    @error('description')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <input type="hidden" name="lat" value="{{ old('lat') }}">
                            <input type="hidden" name="lng" value="{{ old('lng') }}">
                            <input type="hidden" name="cos_radians_lat" value="{{ old('cos_radians_lat') }}">
                            <input type="hidden" name="radians_lng" value="{{ old('radians_lng') }}">
                            <input type="hidden" name="sin_radians_lat" value="{{ old('sin_radians_lat') }}">

                    </div>

                    <div class="col-lg-6">
                        <input id="address" type="text" class="form-control @error('address') is-invalid @enderror" onkeyup="addr_search()" name="address" value="" placeholder="Address..." >
                        <div id="addressList"></div>
                        <div id="mapid" ></div>
                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Add_note') }}
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
                @foreach($notes as $note) 
                <div class="card mb-4 " style="min-height: 100%">
                    <div class="card-header">
                        {{$note->name}}
                    </div>
                    <div class="card-body">
                        <div>{{$note->description}}</div>
                        <div>{{$note->lat}}</div>
                        <div>{{$note->lng}}</div>
                    </div>
                </div>
                @endforeach 
            </div>
        </div>
    </div>    
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>

    <script>
        //https://stackoverflow.com/questions/15919227/get-latitude-longitude-as-per-address-given-for-leaflet
        

        var mymap = L.map('mapid').setView([51.505, -0.09], 13);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            height:'300px'
        }).addTo(mymap);

        var popup = L.popup();
        function onMapClick(e) {
            console.log(e);
            popup.setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(mymap);

            document.getElementsByName('lat')[0].value = e.latlng.lat;
            document.getElementsByName('lng')[0].value = e.latlng.lng;

            var numb = Math.cos(degrees_to_radians(e.latlng.lat));
            numb = numb.toFixed(6);
            document.getElementsByName('cos_radians_lat')[0].value = numb;

            var numb = degrees_to_radians(e.latlng.lng);
            numb = numb.toFixed(6);
            document.getElementsByName('radians_lng')[0].value = numb;

            var numb = Math.sin(degrees_to_radians(e.latlng.lng));
            numb = numb.toFixed(6);
            document.getElementsByName('sin_radians_lat')[0].value = numb;

        }
        mymap.on('click', onMapClick);
        function selectLocation(lat,lng){
            document.getElementsByName('lat')[0].value =lat;
            document.getElementsByName('lng')[0].value = lng;

            var numb = Math.cos(degrees_to_radians(lat));
            numb = numb.toFixed(6);
            document.getElementsByName('cos_radians_lat')[0].value = numb;

            var numb = degrees_to_radians(lng);
            numb = numb.toFixed(6);
            document.getElementsByName('radians_lng')[0].value = numb;

            var numb = Math.sin(degrees_to_radians(lng));
            numb = numb.toFixed(6);
            document.getElementsByName('sin_radians_lat')[0].value = numb;

            popup.closePopup();
            mymap.setView([lat, lng],18);
            popup.setLatLng([lat, lng]);
            lat = lat.toFixed(8);
            lon = lng.toFixed(8);
            popup.setContent("You selected this point" + lat +'  '+ lng)
                .openOn(mymap);
        }
        function myFunction(arr){
            var out = "<br />";
            var i;

            if(arr.length > 0){
                for(i = 0; i < arr.length; i++)
                {
                    out += "<div class='addressbtn' title='Show Location and Coordinates' onclick='selectLocation(" + arr[i].lat + ", " + arr[i].lon + ");return false;'>" + arr[i].display_name + "</div>";
                }
                document.getElementById('addressList').innerHTML = out;
                console.log(arr[0].lat,arr[0].lon);
                selectLocation(arr[0].lat,arr[0].lon);
            }
            else{
                //document.getElementById('results').innerHTML = "Sorry, no results...";
                console.log('no locations');
            }
        }
        function addr_search(){
            console.log('searching');

            var inp = document.getElementById("address");
            var xmlhttp = new XMLHttpRequest();
            var url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + inp.value;
            xmlhttp.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200)
                {
                    var myArr = JSON.parse(this.responseText);
                    myFunction(myArr);
                    console.log(myArr);
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        }

        function degrees_to_radians(degrees){
            var pi = Math.PI;
            return degrees * (pi/180);
        }

    </script>
    <style>
        .addressbtn{
            border:1px solid black;
        }
    </style>
@endsection
