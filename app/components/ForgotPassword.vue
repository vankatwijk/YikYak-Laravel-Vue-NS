<template>
    <Page actionBarHidden="true">
        <FlexboxLayout class="page">
            <StackLayout class="form" >
                <Image class="logo" src="~/images/logo.png"></Image>

                <GridLayout rows="auto">

                    <StackLayout row="1" class="input-field">
                        <TextField class="input" hint="Email" :isEnabled="!processing"
                            keyboardType="email" autocorrect="false"
                            autocapitalizationType="none" v-model="user.email"
                            returnKeyType="next" @returnPress="focusPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>
                </GridLayout>

                <Button text="Reset" :isEnabled="!processing"
                    @tap="reset" class="btn btn-dark m-t-20"></Button>
                <Label *v-show="isLoggingIn" text="Go Back to Login"
                    class="login-label" @tap="backToLogin()"></Label>

            </StackLayout>

        </FlexboxLayout>
    </Page>
</template>

<script>
    import Login from "./Login";
    //import * as http from "http";

    const httpModule = require("http");
    const dialogs = require("tns-core-modules/ui/dialogs");
    const appSettings = require("tns-core-modules/application-settings");

    appSettings.setString('appURL',"http://192.168.0.112:8000"); //https://LoNote.tsertec.io , http://192.168.0.83:8000


    export default {
        data() {
            return {
                isLoggingIn: true,
                processing: false,
                user: {
                    email: "",
                },
                Token:""
            };
        },
        created() {
        },
        mounted() {

            setTimeout(() => {
                this.onStart();
            }, 1000);

        },
        methods: {
            onStart(){
            },


            reset() {
                    var appURL = appSettings.getString('appURL');

                    httpModule.request({
                        url: appURL+'/api/reset-password',//"http://192.168.0.83:8000/api/login",
                        method: "POST",
                        headers: { 
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        content: JSON.stringify({
                            email: this.user.email
                        })
                    })
                    .then(response => {

                        this.processing = false;

                        if(response.statusCode === 200){
                            //good login
                            alert('please check your email');
                            this.$navigateTo(Login, { clearHistory: true });
                        }else{
                            alert('Email does not exist');
                        }

                    }, (e) => {
                        this.processing = false;
                        alert(e.message)
                    });


            },
            backToLogin() {
                this.$navigateTo(Login);
            },


        }
    };
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        color: #D51A1A;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .input:disabled {
        background-color: white;
        opacity: 0.5;
    }

    .btn-primary {
        margin: 30 5 15 5;
    }

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }
</style>
