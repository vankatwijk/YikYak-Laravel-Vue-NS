<template>
    <section class="page-container">
        <header-global></header-global>
        <!-- End header -->
            <v-content>
                <v-container>
                    <v-toolbar 
                        dense
                        flat
                    >
                        <v-spacer></v-spacer>

                        <v-btn 
                        outlined 
                        color="primary"
                        to="/channels-add"
                        link
                        >Group List</v-btn>
                    <!-- <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn> -->
                    </v-toolbar>

                    <v-row>
                        <v-col 
                            xs="12"
                            sm="12"
                            md="6"
                            lg="5"
                            xl="4"
                        >
                            <v-card >
                                <v-container>
                                    <!-- Leaflet Component Map -->
                                    <leaflet-map-component 
                                    @updateUserList="updateHistoryComponent"
                                    ></leaflet-map-component>
                                </v-container>
                            </v-card>
                        </v-col>
                        <!-- End Col Left -->

                        <v-col 
                            xs="12"
                            sm="12"
                            md="6"
                            lg="7"
                            xl="8"
                        >
                            <v-card class="list-scrollable-mid">
                                <v-subheader>History Notes</v-subheader>
                                <v-list :id="item.id"
                                    v-for="(item, i) in item_channel"
                                    :key="i"
                                    >
                                    <v-list-item-group color="primary">
                                    <v-list-item>
                                        <v-list-item-content>
                                            <!-- <LMap :id="index" :zoom="zoom" class="map-box">
                                                <LTileLayer :url="url" :attribution="attribution"></LTileLayer>
                                                <LMarker 
                                                    :lat="item.lat"
                                                    :lng="item.lng">
                                                </LMarker>
                                            </LMap> -->
                                            <v-list-item-title v-html="item.title"></v-list-item-title>
                                            <v-list-item-subtitle v-html="item.description"></v-list-item-subtitle>
                                            <!-- <v-list-item-subtitle v-html="item.lat"></v-list-item-subtitle>
                                            <v-list-item-subtitle v-html="item.lng"></v-list-item-subtitle>
                                            <v-list-item-subtitle v-html="item.sin_radians_lat"></v-list-item-subtitle>
                                            <v-list-item-subtitle v-html="item.radians_lng"></v-list-item-subtitle> -->
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <v-btn 
                                            :id="item.id" 
                                            color="primary" 
                                            @click="dialog = true">See Details</v-btn>
                                        </v-list-item-action>
                                    </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-card>
                        </v-col>
                        <!-- End Col -->
                    </v-row>
                    <!-- End Row -->

                    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                        <v-card class="message-chat-container">
                            <v-toolbar dark color="primary">
                                <v-btn icon dark @click="dialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                                <v-toolbar-title>Chat</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-toolbar-items>
                                    <!-- <v-btn dark text @click="dialog = false">Save</v-btn> -->
                                </v-toolbar-items>
                            </v-toolbar>
                            <!-- End Toolbar -->
                            <div>
                                <!-- <LMap :zoom="zoom" class="map-box">
                                    <LTileLayer :url="url" :attribution="attribution" height="300" ></LTileLayer>
                                    <LMarker 
                                        :lng="this.item_channel.lng"
                                        :lat="this.item_channel.lat">
                                    </LMarker>
                                </LMap> -->


                                    <LMap ref="map" v-resize="onResize">
                                        <LTileLayer :url="url" :attribution="attribution"></LTileLayer>
                                        <LMarker 
                                            v-for="(marker, index) in markers" 
                                            :key="'marker' + index" 
                                            :lat-lng="marker" 
                                            >
                                        </LMarker>
                                    </LMap>
                                <!-- <v-list 
                                v-for="(item,i) in users_chat"
                                    :key="i"
                                    class="single-message">
                                        <v-list-item
                                        v-bind:class="isSender(item.from_user_id, item.to_user_id)"
                                        v-text="item.message"
                                        >
                                            <v-list-item-avatar>
                                                <v-img :src="item.avatar"></v-img>
                                            </v-list-item-avatar>

                                            <v-list-item-content>
                                                <v-list-item-title v-html="item.message"></v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                </v-list> -->
                                <!-- End V List -->
                            </div>
                            <!-- End Message List -->
                            <div class="message-input-container">
                                <v-container fluid>
                                    <v-col xl="12">
                                        <v-btn x-large block
                                        color="primary">Save</v-btn>
                                    </v-col>
                                </v-container>
                            </div>
                            <!-- End Actions textarea -->


                        </v-card>
                         <!-- End Card -->
                    </v-dialog>
                     <!-- End Dialog -->

                </v-container>
                <!-- End Container -->
            </v-content>
            <!-- End Content -->
    </section>
    <!-- End Section -->
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

//import LeafletMapComponent from '@/components/widgets/LeafletMap.vue';
import LeafletMapComponent from '../components/widgets/MapLf';

export default {
    
    data() {
        return {
            markers: [
                L.latLng(47.412, -1.218),
                L.latLng(47.413220, -1.219482),
                L.latLng(47.414, -1.22),
            ],
            dialog: false,
            zoom: 14,
            center: L.latLng(47.413220, -1.219482),
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            
            // note_title : "",
            // note_address : "",
            // note_description : "",
            // note_map_lag : "",
            // note_map_lng : "",
            item_channel : [{
                title : 'test',
                description : 'test',
                lat : '47.413220',
                lng : '-1.219482',
            }]
        }
    },
    components : {
        //'leaflet-map-component': LeafletMapComponent,
        'leaflet-map-component': LeafletMapComponent,
        LMap,
        LTileLayer,
        LMarker
    },
    methods : {
           onResize() {
   this.$refs.map[0].mapObject._onResize();
   },
        getNotesHistory : function() {
            // Base Url of App
            const baseUrl = localStorage.getItem('appUrl');
            // Channel Id from Local
            const channelId = localStorage.getItem('current-channel-id');
            // Custom Url for Api Call
            const channelMsgUrl = baseUrl + '/api/channelmessanger/'+ channelId;
            //const channelMsgUrl = baseUrl + '/api/channelmessanger/46';

            //const token = this.$store.data.token;
            const token = localStorage.getItem('session_token');

            // Header to post Request 
            const headers = {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+ token,
            }

            this.$http.get(channelMsgUrl, {
                headers : headers
            })
            .then((result) => {
                this.item_channel = result.data.success
            })
        },
        updateHistoryComponent : function(data) {
            //console.log('parent'+opt);
            this.item_channel.unshift(data);
        },
    },
    mounted : function() {
        this.getNotesHistory()
    }
}
</script>

<style scoped>
.map-container {
    /* z-index:1; */
}

.map-box {
    /* width: 100%; */
    width:450px!important;
    height: 450px!important;
    /* overflow: hidden; */
    /* z-index:1; */
}
.address-list {
    padding: 0;
}
</style>