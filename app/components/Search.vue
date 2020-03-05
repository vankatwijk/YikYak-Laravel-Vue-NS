<template>
    <Page class="page">


        <ActionBar title="" class="action-bar header">
            <StackLayout orientation="horizontal" height="38" alignItems="left"
                class="actionBarContainer">
                <StackLayout class="HLeft" style="margin-top:10;" @tap="toggleDrawer()">
                    <Label :text="drawerToggle ? drawer2: drawer1" style="font-size:27;color:#fff;"
                        class="font-awesome" />
                </StackLayout>
                <StackLayout class="HMid" alignItems="left">
                    <TextField placeholderColor="white" id="searchField"
                        editable="true" hint="      Search" returnKeyType="search"
                        ios:height="30" ios:marginTop="3"
                        android:paddingBottom="5" class="searchField font-awesome"
                        v-model="searchValue"
                        @returnPress="searchSubmited"
                        color="#fff" />
                </StackLayout>
                <StackLayout class="HRight">

                </StackLayout>
            </StackLayout>
        </ActionBar>


        <RadSideDrawer ref="drawer" @drawerOpened="onDrawerOpened()"
            @drawerClosed="onDrawerClosed()">
            <StackLayout ~drawerContent backgroundColor="#eee">
                <StackLayout height="80%"></StackLayout>
                <StackLayout class="">
                    <Label text="  Settings" paddingLeft="30%" color="black"
                        class="drawerItemText font-awesome" margin="10" />
                    <Label text="  Log out" paddingLeft="30%" color="black"
                        class="drawerItemText font-awesome" margin="10" @tap="logout"/>
                </StackLayout>
            </StackLayout>

            <StackLayout ~mainContent>

                <DockLayout>
                    <StackLayout dock="top" height="90%" width="100%" style="">


                        <ListView for="item in results" :key="index"
                            height="100%" separatorColor="transparent" id="listView">
                            <v-template>

                                <StackLayout orientation="horizontal" style="border-bottom-width:1;border-bottom-color:#E4E4E4;"
                                    padding="10">
                                    <StackLayout width="20%">
                                        <Image :src="APIURL+'/uploads/avatars/'+item.avatar" stretch="aspectFill" class="conImg" />
                                    </StackLayout>

                                    <StackLayout marginLeft="10" paddingTop="3" width="50%">
                                        <Label :text="item.name" :class="'convFriendName '" />
                                        <Label :text="item.username" :class="'convTextOut '" />
                                    </StackLayout>
                                </StackLayout>

                            </v-template>
                        </ListView>

                    </StackLayout>

                    <StackLayout dock="bottom" height="10%" style="border-color:#E4E4E4;border-width:1;background:#fff;">
                        <StackLayout orientation="horizontal">
                            <StackLayout class="navItem" @tap="homeTap()">
                                <Label text="" android:class="notificationAndroid"
                                    ios:class="notification" opacity="0" />
                                <Label text="" android:style="font-size:25;margin-top:-15"
                                    ios:style="font-size:30;margin-top:-15"
                                    class="font-awesome" />
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>

                </DockLayout>

            </StackLayout>
        </RadSideDrawer>

    </Page>
</template>

<script>
    import Home from "./Home";
    import Login from "./Login";
    import Profile from "./Profile";
    import Convs from "./Convs";
    import Search from "./Search";
    import Post from "./Post";

    const httpModule = require("http");
    const appSettings = require("tns-core-modules/application-settings");

    export default {
        created() {},
        props :["searchValue"],
        mounted() {
            setTimeout(() => {
                this.getresults();
            }, 500);
        },
        data() {
            return {
                searchValue: '',
                drawerToggle: false,
                drawer1: "",
                drawer2: "",
                mainColor: "#1aa3ff",
                APIURL:'',
                results:[]
            };
        },

        methods: {

            getresults(){
                var userToken = appSettings.getString('userToken',0);
                var appURL = appSettings.getString('appURL',0);
                this.APIURL = appURL;

                httpModule.request({
                    url: appURL+'/api/search',//"http://192.168.0.83:8000/api/home",
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json" ,
                        "Authorization": "Bearer "+userToken
                    },
                    content: JSON.stringify({
                        s: this.searchValue
                    })
                }).then(response => {
                    var result =response.content.toJSON();
                    this.results = result.users;

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
                this.$navigateTo(Home, {
                    clearHistory: true,
                    animated: false
                });
            },
            profileTap() {
                this.$navigateTo(Profile, {
                    clearHistory: true,
                    animated: false
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
            conversationsTap() {},
            notificationsTap() {},
            showDetails() {}
        }
    };
</script>

<style scoped>
</style>