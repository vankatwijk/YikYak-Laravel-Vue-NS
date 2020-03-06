<template>
    <Page class="page">


        <ActionBar title="" class="action-bar header"  style='background-color:black;'>
            <StackLayout orientation="horizontal" height="38" alignItems="left"
                class="actionBarContainer">
                <StackLayout class="HLeft" style="margin-top:10;" @tap="toggleDrawer()">
                    <Label :text="drawerToggle ? drawer2: drawer1" style="font-size:27;color:#fff;"
                        class="font-awesome" />
                </StackLayout>

                <StackLayout class="HMid" alignItems="left">
                </StackLayout>

                <StackLayout class="HRight">

                </StackLayout>
            </StackLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer" @drawerOpened="onDrawerOpened()"
            @drawerClosed="onDrawerClosed()">
            <StackLayout ~drawerContent backgroundColor="#eee">
                <StackLayout class="">
                    <Label :text="name" paddingLeft="30%" color="black"
                        class="drawerItemText font-awesome" margin="10"/>
                </StackLayout>
                <StackLayout height="80%"></StackLayout>
                <StackLayout class="">
                    <Label text="  Log out" paddingLeft="30%" color="black"
                        class="drawerItemText font-awesome" margin="10" @tap="logout"/>
                </StackLayout>
            </StackLayout>

            <StackLayout ~mainContent>

                <DockLayout>

                    <StackLayout dock="top" height="90%" width="100%" style="padding:30;">

                        <TextView v-model="noteTitle" :text="noteTitle" hint="Write a title" :editable="loginUserId==noteUserId"/>
                        <TextView v-model="noteBody" :text="noteBody" hint="Write a note" :editable="loginUserId==noteUserId" style="height:100;"/>
                        <Button v-if="loginUserId==noteUserId" text="Edit note" @tap="editPost()" class="btn btn-dark m-t-20"></Button>
                        <Button v-if="loginUserId==noteUserId" text="Delete note" @tap="deletePost()" class="btn btn-danger m-t-20"></Button>
                        
                        <Mapbox
                            accessToken="pk.eyJ1IjoidmFua2F0d2lqayIsImEiOiJjazZvNXZmbmswcmY5M25seWRnaWR3amRhIn0.2UyRhsFU7ZdNe1GZyBPzcQ"
                            mapStyle="traffic_night"
                            latitude="noteLat"
                            longitude="noteLng"
                            hideCompass="true"
                            zoomLevel="12"
                            showUserLocation="false"
                            disableZoom="false"
                            disableRotation="false"
                            disableScroll="false"
                            disableTilt="false"
                            @mapReady="onMapReady($event)">
                        </Mapbox>
                        
                    </StackLayout>



                    <StackLayout dock="bottom" height="10%" style="border-color:#E4E4E4;border-width:1;background:#fff;">
                          <GridLayout columns="*, *" verticalAlignment="top">
                            <StackLayout col="0" class="navItem" @tap="homeTap()">
                                <Label text="" android:class="notificationAndroid"
                                    ios:class="notification" opacity="0" />
                                <Label text=""
                                    android:style="font-size:18;margin-top:-15"
                                    ios:style="font-size:30;margin-top:-15"
                                    class="font-awesome" />
                                <Label text="Home" style="font-size:10;"/>
                            </StackLayout>
                            <StackLayout col="1" class="navItem" @tap="postTap()">
                                <Label text="df" android:class="notificationAndroid"
                                    ios:class="notification" opacity="0" />
                                <Label text="" :color="mainColor"
                                    android:style="font-size:18;margin-top:-15"
                                    ios:style="font-size:30;margin-top:-15"
                                    class="font-awesome" />
                                <Label text="Add Note" style="font-size:10;" :color="mainColor" />
                            </StackLayout>

                        </GridLayout>
                        
                    </StackLayout>

                </DockLayout>

            </StackLayout>
        </RadSideDrawer>

    </page>
</template>
<script>
    import Home from "./Home";
    import Login from "./Login";
    import Post from "./Post";
    import * as Geolocation from 'nativescript-geolocation';

    const httpModule = require("http");
    const appSettings = require("tns-core-modules/application-settings");

    export default {
        watch: {},

        created() {

            setTimeout(() => {
                this.onStart();
            }, 500);
        },
        data() {
            return {
                noteTitle:"",
                noteBody:"",
                noteLat:0,
                noteLng:0,
                noteUserName:"",
                noteUserId:0,
                searchValue: '',
                drawerToggle: false,
                drawer1: "",
                drawer2: "",
                mainColor: "#1aa3ff",
                APIURL: "",
                homePosts: [],
                loginUserId:0,
            };
        },
        computed: {
        },
        methods: {
            onStart(){

                this.loginUserId = appSettings.getNumber('userid','')
                var selectedNote = appSettings.getNumber('selectedNote',0);

                console.log('getting note');
                var userToken = appSettings.getString('userToken',0);
                var appURL = appSettings.getString('appURL',0);
                this.APIURL = appURL;

                httpModule.request({
                    url: appURL+'/api/notes/'+selectedNote,
                    method: "Get",
                    headers: { 
                        "Accept": "application/json" ,
                        "Authorization": "Bearer "+userToken
                    }
                }).then(response => {
                    var result =response.content.toJSON();
                    this.noteTitle=result.title;
                    this.noteBody=result.description;
                    this.noteLat=result.lat;
                    this.noteLng=result.lng;
                    this.noteUserName=result.user.name;
                    this.noteUserId=result.user_id;
                }, error => {
                    console.error(error);
                });
            },
            deletePost() {
                console.log('delete note');
                var userToken = appSettings.getString('userToken',0);
                var appURL = appSettings.getString('appURL',0);
                var selectedNote = appSettings.getNumber('selectedNote',0);
                this.APIURL = appURL;

                httpModule.request({
                    url: appURL+'/api/notes/'+selectedNote,
                    method: "delete",
                    headers: { 
                        "Accept": "application/json" ,
                        "Authorization": "Bearer "+userToken
                    }
                }).then(response => {
                    this.$navigateTo(Home, {
                        animated: false,
                        clearHistory: true
                    });
                }, error => {
                    console.error(error);
                });
            },
            editPost(){
                var userToken = appSettings.getString('userToken',0);
                var appURL = appSettings.getString('appURL',0);
                this.APIURL = appURL;

                httpModule.request({
                    url: appURL+'/api/notes'+selectedNote,//"http://192.168.0.83:8000/api/home",
                    method: "put",
                    headers: { 
                        "Content-Type": "application/json",
                        "Accept": "application/json" ,
                        "Authorization": "Bearer "+userToken
                    },
                    content: JSON.stringify({
                        title:this.noteTitle,
                        description: this.noteBody,
                        lat:this.location.noteLat,
                        lng:this.location.notelng
                    })
                }).then(response => {
                    console.log(response);
                    if(response.statusCode === 200){
                        this.noteTitle = '';
                        this.noteBody = '';
                        alert('note has been updated');
                    }else{
                        alert('could not update');
                    }

                }, error => {
                    console.error(error);
                });

            },
            onMapReady(args) {
                args.map.addMarkers([
                    {
                        lat: this.noteLat,
                        lng: this.noteLng,
                        title: this.noteTitle,
                        subtitle: this.noteBody
                    }
                ]);
            },
            onDrawerClosed() {
                this.drawerToggle = false;
            },
            onDrawerOpened() {
                this.drawerToggle = true;
            },
            toggleDrawer() {
                this.$refs.drawer.nativeView.toggleDrawerState();
            },
            homeTap() {
                appSettings.setNumber('selectedNote',0);
                this.$navigateTo(Home, {
                    animated: false,
                    clearHistory: true
                });
            },
            postTap() {
                appSettings.setNumber('selectedNote',0);
                this.$navigateTo(Post, {
                    animated: false,
                    clearHistory: true
                });
            },
            logout() {
                appSettings.setNumber('selectedNote',0);
                this.$navigateTo(Login, {
                    clearHistory: true
                });
            },

            notificationsTap() {
                this.$navigateTo(Notification, {
                    clearHistory: true
                });
            },
            showDetails() {}
        }
    };
</script>

<style scoped>

</style>