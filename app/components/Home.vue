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

                    <StackLayout dock="top" height="90%" width="100%" style="">

                        <RadListView ref="listView"
                            for="note in notes"
                            pullToRefresh="true"
                            :key="index" height="100%"
                            backgroundColor="#E8E8E8" separatorColor="transparent"
                            id="listView"
                            @pullToRefreshInitiated="onPullToRefreshInitiated">

                            <v-template>

                                <StackLayout paddingTop="5" backgroundColor="#E8E8E8">
                                    <StackLayout class="noteContainer">
                                        <StackLayout orientation="horizontal"
                                            padding="10">
                                            <StackLayout>
                                                <Label :text="note.title"
                                                    class="postAuthotName" />
                                                <Label :text="(note.distance.toFixed(3) *100) +' meters away'"
                                                    class="postDateSmall" />
                                            </StackLayout>
                                        </StackLayout>
                                    </StackLayout>
                                </StackLayout>

                            </v-template>
                        </RadListView>

                    </StackLayout>


                    <StackLayout dock="bottom" height="10%" style="border-color:#E4E4E4;border-width:1;background:#fff;">
                          <GridLayout columns="*, *" verticalAlignment="top">
                            <StackLayout col="0" class="navItem" @tap="homeTap()">
                                <Label text="" android:class="notificationAndroid"
                                    ios:class="notification" opacity="0" />
                                <Label text="" :color="mainColor"
                                    android:style="font-size:18;margin-top:-15"
                                    ios:style="font-size:30;margin-top:-15"
                                    class="font-awesome" />
                                <Label text="Home" style="font-size:10;" :color="mainColor" />
                            </StackLayout>
                            <StackLayout col="1" class="navItem" @tap="postTap()">
                                <Label text="df" android:class="notificationAndroid"
                                    ios:class="notification" opacity="0" />
                                <Label text="" android:style="font-size:18;margin-top:-15"
                                    ios:style="font-size:30;margin-top:-15"
                                    class="font-awesome" />
                                <Label text="Add Note" style="font-size:10;" />
                            </StackLayout>

                        </GridLayout>
                    </StackLayout>

                </DockLayout>

            </StackLayout>
        </RadSideDrawer>

    </page>
</template>
<script>
    import Login from "./Login";
    import Post from "./Post";

    const httpModule = require("http");
    const appSettings = require("tns-core-modules/application-settings");
    import * as Geolocation from 'nativescript-geolocation';

    export default {
        computed: {
        },
        watch: {
            location() {
                console.log('----------------------');
                console.log(this.location.latitude);
                console.log(this.location.longitude);

                this.getNotes();
            }
        },
        created() {
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

            setTimeout(() => {
                this.onStart();
            }, 500);
        },
        data() {
            return {
                needLocation:true,
                locationFailure:false,
                location:null,
                drawerToggle: false,
                drawer1: "",
                drawer2: "",
                mainColor: "#1aa3ff",
                APIURL: "",
                name:"",
                notes: [],
            };
        },
        methods: {
            onStart(){
                this.name = appSettings.getString('name','');
            },
            getNotes(){
                console.log('getting notes');
                var userToken = appSettings.getString('userToken',0);
                var appURL = appSettings.getString('appURL',0);
                this.APIURL = appURL;

                httpModule.request({
                    url: appURL+'/api/notes?lat='+this.location.latitude+'&lng='+this.location.longitude,
                    method: "Get",
                    headers: { 
                        "Accept": "application/json" ,
                        "Authorization": "Bearer "+userToken
                    }
                }).then(response => {
                    var result =response.content.toJSON();
                    this.notes = result.notes;

                }, error => {
                    console.error(error);
                });

            },
            onPullToRefreshInitiated({ object }) {
                this.$nextTick(() => {

                    this.getNotes();

                    object.notifyPullToRefreshFinished();
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
            homeTap() {},
            profileTap() {
                this.$navigateTo(Profile, {
                    animated: false,
                    clearHistory: true
                });
            },
            postTap() {
                this.$navigateTo(Post, {
                    animated: false,
                    clearHistory: true
                });
            },
            conversationsTap() {
                this.$navigateTo(Convs, {
                    animated: false,
                    clearHistory: true
                });
            },
            logout() {
                this.$navigateTo(Login, {
                    clearHistory: true
                });
            },
            searchSubmited(){

                this.$navigateTo(Search, {
                    animated: {
                        name:'fade',
                        duration: 200
                    },
                    clearHistory: true,
                    props: {
                        searchValue: this.searchValue
                    }
                });

            },



            notificationsTap() {

                var userToken = appSettings.remove('userToken');
                var appURL = appSettings.remove('appURL');
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