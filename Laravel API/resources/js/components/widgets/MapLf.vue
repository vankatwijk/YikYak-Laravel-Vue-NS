<template>
    <section class="map-container">
        <v-row justify="space-between">
            <v-col xl="12">
                    <LMap id="dd2" :zoom="zoom" :center="center" @click="addMarker" class="map-box">
                        <LTileLayer :url="url" :attribution="attribution"></LTileLayer>
                        <LMarker 
                            v-for="(marker, index) in markers" 
                            :key="'marker' + index" 
                            :lat-lng="marker" 
                            @click="removeMarker(index)">
                        </LMarker>
                    </LMap>

                    <v-text-field
                    label=""
                    class="hidden-field"
                    name="map_lat"
                    v-model="note_map_lat"
                    type="hidden"
                    ></v-text-field>
                    <!-- End Text Field -->
                    <v-text-field
                    label=""
                    class="hidden-field"
                    name="map_lng"
                    v-model="note_map_lng"
                    type="hidden"
                    ></v-text-field>
                    <!-- End Text Field -->
                    <v-text-field
                    label=""
                    class="hidden-field"
                    name="map_cos_radians_lat"
                    v-model="cos_radians_lat"
                    type="hidden"
                    ></v-text-field>
                    <!-- End Text Field -->
                    <v-text-field
                    label=""
                    class="hidden-field"
                    name="map_radians_lng"
                    v-model="radians_lng"
                    type="hidden"
                    ></v-text-field>
                    <!-- End Text Field -->
                    <v-text-field
                    label=""
                    class="hidden-field"
                    name="map_sin_radians_lat"
                    v-model="sin_radians_lat"
                    type="hidden"
                    ></v-text-field>
                    <!-- End Text Field -->

                <!-- <input type="hidden" name="lat" value="">
                <input type="hidden" name="lng" value="">
                <input type="hidden" name="cos_radians_lat" value="">
                <input type="hidden" name="radians_lng" value="">
                <input type="hidden" name="sin_radians_lat" value=""> -->
                <v-form>
                    <!-- Form -->
                    <v-text-field
                    label="Title"
                    name="title"
                    v-model="note_title"
                    prepend-icon="mdi-format-color-text"
                    type="text"
                    ></v-text-field>
                    <!-- End Text Field -->
                   <v-text-field
                    label="Address"
                    name="address"
                    hint="Type address for show custom results"
                    prepend-icon="mdi-map-marker"
                    type="text"
                    v-model="note_address"
                    @keyup="addressSearch()"
                    autocomplete="off" 
                    ></v-text-field>
                    <v-card
                        class="mx-auto"
                        tile
                        v-if="show_related"
                    >
                        <v-list class="address-list">
                        <v-list-item-group color="primary">
                            <v-list-item
                            v-for="(item,index) in addressListSelect" :key="'addresslist-'+ index"
                            @click='selectLocation(item.lat,item.lon)'>
                            <v-list-item-content>
                                <v-list-item-title >{{item.display_name}}</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                        </v-list>
                    </v-card>
                    <!-- End Text Field -->
                    <v-textarea
                    prepend-icon="mdi-comment"
                    name="description"
                    v-model="note_description"
                    label="Description"
                    auto-grow
                    value=""
                    ></v-textarea>
                    <!-- End Textarea Field -->
                    <v-btn color="primary"
                    x-large
                    block
                    @click="addNewNotes"
                    >Add Note</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </section>
</template>

<script>

// import LeafletMapComponent from '@/components/widgets/LeafletMap.vue';
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
    data() {
        return {
            note_title : "",
            note_address : "",
            note_description : "",
            note_map_lat : "",
            note_map_lng : "",

            cos_radians_lat : "", // Not Used
            radians_lng : "", // Not Used
            sin_radians_lat : "", // Not Used
            zoom: 14,
            center: L.latLng(47.413220, -1.219482),
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            markers: [
                // L.latLng(47.412, -1.218),
                // L.latLng(47.413220, -1.219482),
                // L.latLng(47.414, -1.22),
            ],
            show_related: false,
            address: '',
            addressList: [],
        }
    },
    props : ['title'],
    components : {
        LMap,
        LTileLayer,
        LMarker
    },
    methods: {
        doSomethingOnReady() {
            this.$nextTick(() => {
                this.map = this.$refs.myMap.mapObject
            });
        },

        removeMarker(index) {
            this.markers.splice(index, 1);
        },
        addMarker(event) {
            this.markers.push(event.latlng);
            this.note_map_lat = event.latlng.lat;
            this.note_map_lng = event.latlng.lng;
            // console.log(event.latlng.lat);
            // console.log(event.latlng.lng);
        },
        addressSearch(){
            // Custom Url for Api Call
            const searchUrl = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + this.note_address;
            this.$http.get(searchUrl)
            .then((result) => {
                console.log(result);
                 if(result.status == 200 && result.request.readyState == 4){

                    this.addressList = result.data;
                    this.show_related = true;
                 }
                // console.log('email reset');
            })
        },
        selectLocation(lat,lon){
            //console.log(lat+'----'+lon);
            this.markers = []; //reset all markers
            this.markers.push(L.latLng(lat, lon));
            this.center = L.latLng(lat, lon);
            this.show_related = false;
            
            this.note_map_lat = lat;
            this.note_map_lng = lon;
        },
        addNewNotes : function() {
            // Base Url of App
            const baseUrl = localStorage.getItem('appUrl');
            // Channel Id from Local
            const channelId = localStorage.getItem('current-channel-id');
            // Custom Url for Api Call
            const addNewNoteUrl = baseUrl + '/api/channelmessanger/'+ channelId;
            // Session Token
            const token = localStorage.getItem('session_token');

            // Data to Post
            const data = {
                title : this.note_title,
                description : this.note_description,
                lat : this.note_map_lat,
                lng : this.note_map_lng,
            }
            console.log(data);

            // Header to post Request 
            const headers = {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+ token,
            }

            this.$http.post(addNewNoteUrl, data, {
                headers : headers
            })
            .then((result) => {
                console.log(result);
                this.updateList();
                //this.item_channel.push(result.data.success)
            })
        },
        updateList : function() {
            
            const data = {
                title : this.note_title,
                description : this.note_description,
                lat : this.note_map_lat,
                lng : this.note_map_lng,
            };
            this.$emit('updateUserList', data);
            //console.log(data);
        }

    },
    computed: {
        addressListSelect(){
            return this.addressList;
        }
    }

}
</script>

<style scoped>
.map-container {
    /* z-index:1; */
}

.map-container .map-box {
    width: 100%;
    height: 250px;
    overflow: hidden;
    z-index:1;
}
.address-list {
    padding: 0;
}
</style>