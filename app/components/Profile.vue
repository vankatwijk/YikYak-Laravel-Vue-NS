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
                        <ScrollView>

                            <StackLayout style="font-size:18;">
                                <StackLayout alignItems="center">
                                    <Image :src="APIURL+'/uploads/avatars/'+user.avatar"
                                        stretch="aspectFill" class="profilePic">
                                    </Image>
                                    <Label :text="user.name" color="#000"
                                        fontSize="19" fontWeight="bold"
                                        textAlignment="center" />
                                    <StackLayout class="aboutContainer">
                                        <StackLayout orientation="horizontal">
                                            <Label text="" style="font-size:18;color:#557AAD;"
                                                class="font-awesome" />
                                            <Label :text="'@'+user.username" style="font-size:16;color:#000;margin-left:9;margin-top:1;"
                                                class="font-awesome" />
                                        </StackLayout>

                                        <StackLayout orientation="horizontal">
                                            <Label text="" style="font-size:18;color:#557AAD;"
                                                class="font-awesome" />
                                            <Label :text="user.location" style="font-size:16;color:#000;margin-left:9;margin-top:1;"
                                                class="font-awesome" />
                                        </StackLayout>

                                        <StackLayout orientation="horizontal">
                                            <Label text="" style="font-size:18;color:#557AAD;"
                                                class="font-awesome" />
                                            <Label :text="user.bio" style="font-size:16;color:#000;margin-left:9;margin-top:1;"
                                                class="font-awesome" />
                                        </StackLayout>

                                        <StackLayout orientation="horizontal"
                                            class="aboutRow">
                                            <Label text="" style="font-size:16;color:#557AAD;"
                                                class="font-awesome" />
                                            <Label :text="APIURL" style="font-size:16;color:#000;margin-left:6;"
                                                class="font-awesome" />
                                        </StackLayout>

                                    </StackLayout>

                                </StackLayout>

                                <WrapLayout alignItems="left" backgroundColor="#eeeeee"
                                    marginTop="10">
                                </WrapLayout>

                            </StackLayout>


                        </ScrollView>
                    </StackLayout>


                    <StackLayout dock="bottom" height="10%" style="border-color:#E4E4E4;border-width:1;background:#fff;">
                          <GridLayout columns="*, *, *,* ,*" verticalAlignment="top">
                            <StackLayout col="0" class="navItem" @tap="homeTap()">
                                <Label text="" android:class="notificationAndroid"
                                    ios:class="notification" opacity="0" />
                                <Label text=""
                                    android:style="font-size:18;margin-top:-15"
                                    ios:style="font-size:30;margin-top:-15"
                                    class="font-awesome" />
                                <Label text="Home" style="font-size:10;"/>
                            </StackLayout>

                            <StackLayout col="1" class="navItem" @tap="profileTap()">
                                <Label text="" android:class="notificationAndroid"
                                    ios:class="notification" opacity="0" />
                                <Label text="" 
                                    android:style="font-size:18;margin-top:-15"
                                    ios:style="font-size:30;margin-top:-15"
                                    class="font-awesome"  :color="mainColor"/>
                                <Label text="Profile" style="font-size:10;"  :color="mainColor"/>
                            </StackLayout>

                            <StackLayout col="2" class="navItem" @tap="postTap()">
                                <Label text="df" android:class="notificationAndroid"
                                    ios:class="notification" opacity="0" />
                                <Label text="" android:style="font-size:18;margin-top:-15"
                                    ios:style="font-size:30;margin-top:-15"
                                    class="font-awesome" />
                                <Label text="Posts" style="font-size:10;" />
                            </StackLayout>
                            <StackLayout col="3" class="navItem" @tap="conversationsTap()">
                                <Label text="" android:class="notificationAndroid"
                                    ios:class="notification" opacity="0" />
                                <Label text="" android:style="font-size:18;margin-top:-15"
                                    ios:style="font-size:30;margin-top:-15"
                                    class="font-awesome" />

                                <Label text="Messages"  style="font-size:10;"/>
                            </StackLayout>
                            <StackLayout col="4" class="navItem" @tap="notificationsTap()">
                                <Label text="0" android:class="notificationAndroid"
                                    ios:class="notification" opacity="0" />
                                <Label text="" android:style="font-size:18;margin-top:-15"
                                    ios:style="font-size:29;margin-top:-15"
                                    class="font-awesome" />

                                <Label text="Notifications" style="font-size:10;"/>
                            </StackLayout>


                        </GridLayout>
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
    import Notification from "./Notification";

    const httpModule = require("http");
    const appSettings = require("tns-core-modules/application-settings");

    export default {
        created() {
            setTimeout(() => {
                this.getUser();
            }, 500);
        },
        data() {
            return {
                drawerToggle: false,
                drawer1: "",
                drawer2: "",
                mainColor: "#1aa3ff",
                APIURL: "",
                user: ''
            };
        },
        methods: {

            getUser(){
                var userToken = appSettings.getString('userToken',0);
                var appURL = appSettings.getString('appURL',0);
                this.APIURL = appURL;



                httpModule.request({
                    url: appURL+'/api/home',//"http://192.168.0.83:8000/api/home",
                    method: "Get",
                    headers: { 
                        "Content-Type": "application/json" ,
                        "Authorization": "Bearer "+userToken
                    }
                }).then(response => {
                    var result =response.content.toJSON();
                    this.user = result.user;
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
                    animated: false,
                    clearHistory: true
                });
            },
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