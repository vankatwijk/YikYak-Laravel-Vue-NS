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

                        <TextField v-model="noteTitle" hint="Write a title" />
                        <TextField v-model="noteBody" hint="Write a note" style="height:100;"/>
                        <Button text="Submit Post" @tap="submitPost()"></Button>
                        
                        <Label v-if="needLocation" text="Looking up your location..." />
                        <Label v-if="locationFailure" text="Can't find current location" />
                        <Label v-if="location" :text="locationDescription" textWrap="true" />
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
            //check if gps is enabled on the phone
            Geolocation.enableLocationRequest(true)
            .then(() => {
                Geolocation.isEnabled().then(isLocationEnabled => {
                    console.log('result is '+isLocationEnabled);
                    if(!isLocationEnabled) {
                        this.needLocation = false;
                        this.locationFailure = true;
                        // potentially do more then just end here...
                        return;
                    }

                    // MUST pass empty object!!
                    Geolocation.getCurrentLocation({})
                    .then(result => {
                        console.log('loc result', result);
                        this.needLocation = false;
                        this.location = result;
                    })
                    .catch(e => {
                        console.log('loc error', e);
                    });
                });
            });
        },
        data() {
            return {
                needLocation:true,
                locationFailure:false,
                location:null,
                noteTitle:"",
                noteBody:"",
                searchValue: '',
                drawerToggle: false,
                drawer1: "",
                drawer2: "",
                mainColor: "#1aa3ff",
                APIURL: "",
                homePosts: []
            };
        },
        computed: {
            locationDescription() {
                //display current location
                return `You are at ${this.location.latitude}, ${this.location.longitude}. Your altitude is ${this.location.altitude}.`;
            },
            name(){
                //get the name of the current login user to display in the side drawer
                return appSettings.getString('name','');
            }
        },
        methods: {
            onStart(){

            },
            submitPost(){
                //get all stored variables from the login session
                var userToken = appSettings.getString('userToken',0);
                var appURL = appSettings.getString('appURL',0);
                this.APIURL = appURL;

                httpModule.request({
                    url: appURL+'/api/notes',//"http://192.168.0.83:8000/api/home",
                    method: "Post",
                    headers: { 
                        "Content-Type": "application/json",
                        "Accept": "application/json" ,
                        "Authorization": "Bearer "+userToken
                    },
                    content: JSON.stringify({
                        title:this.noteTitle,
                        description: this.noteBody,
                        lat:this.location.latitude,
                        lng:this.location.longitude
                    })
                }).then(response => {
                    // the post was saved successfully
                    console.log(response);
                    if(response.statusCode === 200){
                        this.noteTitle = '';
                        this.noteBody = '';
                        alert('note added to location');
                    }else{
                        alert('Something has gone wrong'+ response.statusCode);
                    }

                }, error => {
                    console.error(error);
                });

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
                // navigate home
                this.$navigateTo(Home, {
                    animated: false,
                    clearHistory: true
                });
            },
            postTap() {
                // navigate to the new post screen
                this.$navigateTo(Post, {
                    animated: false,
                    clearHistory: true
                });
            },
            logout() {
                appSettings.remove('userToken');
                // logout of the current user
                this.$navigateTo(Login, {
                    clearHistory: true
                });
            },
            showDetails() {}
        }
    };
</script>

<style scoped>

</style>