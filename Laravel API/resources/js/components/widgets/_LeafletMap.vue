<template>
    <section class="map-container">
        <!-- <div id="map" class="map" style="height: 600px"></div> -->
        <input type="hidden" name="lat" value="">
        <input type="hidden" name="lng" value="">
        <input type="hidden" name="cos_radians_lat" value="">
        <input type="hidden" name="radians_lng" value="">
        <input type="hidden" name="sin_radians_lat" value="">
        <!-- <div id="mapid"></div> -->
        <MglMap :accessToken="accessToken" :mapStyle="mapStyle" class="mapbox" />
        <!-- <input type="hidden" name="lat" value="{{ old('lat') }}">
        <input type="hidden" name="lng" value="{{ old('lng') }}">
        <input type="hidden" name="cos_radians_lat" value="{{ old('cos_radians_lat') }}">
        <input type="hidden" name="radians_lng" value="{{ old('radians_lng') }}">
        <input type="hidden" name="sin_radians_lat" value="{{ old('sin_radians_lat') }}"> -->

    </section>
</template>

<script>
// import leafletScript from '@/assets/js/leaflet-script.js'

import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: "pk.eyJ1IjoidmFua2F0d2lqayIsImEiOiJjazZvNXZmbmswcmY5M25seWRnaWR3amRhIn0.2UyRhsFU7ZdNe1GZyBPzcQ", // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/light-v10',
      map_lat: null,
      map_lng: null,
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },

  methods : {
    //     onMapClick : function(e) {
    //     console.log(e);
    //     popup.setLatLng(e.latlng)
    //         .setContent("You clicked the map at " + e.latlng.toString())
    //         .openOn(mymap);

    //     document.getElementsByName('lat')[0].value = e.latlng.lat;
    //     document.getElementsByName('lng')[0].value = e.latlng.lng;

    //     var numb = Math.cos(degrees_to_radians(e.latlng.lat));
    //     numb = numb.toFixed(6);
    //     document.getElementsByName('cos_radians_lat')[0].value = numb;

    //     var numb = degrees_to_radians(e.latlng.lng);
    //     numb = numb.toFixed(6);
    //     document.getElementsByName('radians_lng')[0].value = numb;

    //     var numb = Math.sin(degrees_to_radians(e.latlng.lng));
    //     numb = numb.toFixed(6);
    //     document.getElementsByName('sin_radians_lat')[0].value = numb;

    // },
    // // mymap.on('click', onMapClick);
    // selectLocation : function(lat,lng) {
    //     document.getElementsByName('lat')[0].value =lat;
    //     document.getElementsByName('lng')[0].value = lng;

    //     var numb = Math.cos(degrees_to_radians(lat));
    //     numb = numb.toFixed(6);
    //     document.getElementsByName('cos_radians_lat')[0].value = numb;

    //     var numb = degrees_to_radians(lng);
    //     numb = numb.toFixed(6);
    //     document.getElementsByName('radians_lng')[0].value = numb;

    //     var numb = Math.sin(degrees_to_radians(lng));
    //     numb = numb.toFixed(6);
    //     document.getElementsByName('sin_radians_lat')[0].value = numb;

    //     popup.closePopup();
    //     mymap.setView([lat, lng],18);
    //     popup.setLatLng([lat, lng]);
    //     lat = lat.toFixed(8);
    //     lon = lng.toFixed(8);
    //     popup.setContent("You selected this point" + lat +'  '+ lng)
    //         .openOn(mymap);
    // },
    // myFunction : function(arr) {
    //     var out = "<br />";
    //     var i;

    //     if(arr.length > 0){
    //         for(i = 0; i < arr.length; i++)
    //         {
    //             out += "<div class='addressbtn' title='Show Location and Coordinates' onclick='selectLocation(" + arr[i].lat + ", " + arr[i].lon + ");return false;'>" + arr[i].display_name + "</div>";
    //         }
    //         document.getElementById('addressList').innerHTML = out;
    //         console.log(arr[0].lat,arr[0].lon);
    //         selectLocation(arr[0].lat,arr[0].lon);
    //     }
    //     else{
    //         //document.getElementById('results').innerHTML = "Sorry, no results...";
    //         console.log('no locations');
    //     }
    // },
    // addr_search : function() {
    //     console.log('searching');

    //     var inp = document.getElementById("address");
    //     var xmlhttp = new XMLHttpRequest();
    //     var url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + inp.value;
    //     xmlhttp.onreadystatechange = function(){
    //         if (this.readyState == 4 && this.status == 200)
    //         {
    //             var myArr = JSON.parse(this.responseText);
    //             myFunction(myArr);
    //             console.log(myArr);
    //         }
    //     };
    //     xmlhttp.open("GET", url, true);
    //     xmlhttp.send();
    // },

    // degrees_to_radians : function(degrees){
    //     var pi = Math.PI;
    //     return degrees * (pi/180);
    // }
  }

 }
</script>

<style scoped>
    .addressbtn{
        border:1px solid black;
    }

    .mapbox {
        width: 100%;
        min-height: 300px
    }


    /* #mapid{
        height: 250px;
        overflow:hidden;
    } */
</style>