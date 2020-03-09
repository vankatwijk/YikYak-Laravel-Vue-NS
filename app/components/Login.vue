<template>
    <Page actionBarHidden="true">
        <FlexboxLayout class="page">
            <StackLayout class="form" >
                <Image class="logo" src="~/images/logo.png"></Image>

                <GridLayout rows="auto, auto, auto, auto, auto, auto">

                    <StackLayout row="0" v-show="!isLoggingIn"  class="input-field">
                        <TextField class="input" hint="Name" :isEnabled="!processing"
                            keyboardType="text" autocorrect="false"
                            autocapitalizationType="none" v-model="user.name"
                            returnKeyType="next"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="1" class="input-field">
                        <TextField class="input" hint="Email" :isEnabled="!processing"
                            keyboardType="email" autocorrect="false"
                            autocapitalizationType="none" v-model="user.email"
                            returnKeyType="next" @returnPress="focusPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="2" class="input-field">
                        <TextField class="input" ref="password" :isEnabled="!processing"
                            hint="Password" secure="true" v-model="user.password"
                            :returnKeyType="isLoggingIn ? 'done' : 'next'"
                            @returnPress="focusConfirmPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="3" v-show="!isLoggingIn" class="input-field">
                        <TextField class="input" ref="confirmPassword" :isEnabled="!processing"
                            hint="Confirm password" secure="true" v-model="user.confirmPassword"
                            returnKeyType="done"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>
                </GridLayout>
                <Button :text="isLoggingIn ? 'Log In' : 'Sign Up'" :isEnabled="!processing"
                    @tap="submit" class="btn btn-dark m-t-20"></Button>
                <Label *v-show="isLoggingIn" text="Forgot your password?"
                    class="login-label" @tap="forgotPassword()"></Label>
            </StackLayout>

            <Label class="login-label sign-up-label" @tap="toggleForm">
                <FormattedString>
                    <Span :text="isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'"></Span>
                    <Span :text="isLoggingIn ? 'Sign up' : ''" class="bold"></Span>
                </FormattedString>
            </Label>

            <Label class="login-label sign-up-label" @tap="changeAPI">
                <FormattedString>
                    <Span>Change the default API server </Span>
                    <Span class="bold">Change</Span>
                </FormattedString>
            </Label>
        </FlexboxLayout>
    </Page>
</template>

<script>
    //get external pages an plugins
    import Home from "./Home";
    import ForgotPassword from "./ForgotPassword";
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
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    forgotEmail: "",
                },
                Token:""
            };
        },
        created() {
        },
        mounted() {
            setTimeout(() => {
                // run the onstart method after the app is ready (nativescript bug)
                this.onStart();
            }, 1000);

        },
        methods: {
            onStart(){
                var token = appSettings.getString('userToken');
                if(token === undefined){
                }else{
                    if(token.length > 0){
                        this.$navigateTo(Home, { clearHistory: true });
                    }
                }
            },

            changeAPI(){
                //this method allows you to change the default api url from the app
                dialogs.prompt({
                    title:"API server URL",
                    message:"please provide the url to the api server",
                    inputType: "text",
                    defaultText: "",
                    okButtonText: "Ok",
                    defaultText: "",
                    cancelButtonText: "Cancel"
                }).then(data => {
                    appSettings.setString('appURL',data.text);forgotPassword
                });
            },
            toggleForm() {
                //switch between login forma nd signup forrm
                this.isLoggingIn = !this.isLoggingIn;
            },

            submit() {

                //then the submit button is click detect if its for the login or signup form
                if (!this.user.email || !this.user.password) {
                    alert(
                        "Please provide both an email address and password."
                    );
                    return;
                }

                //route to the appropriate method
                this.processing = true;
                if (this.isLoggingIn) {
                    this.login();
                } else {
                    this.register();
                }
                
            },

            login() {
                    //get the ap server url
                    var appURL = appSettings.getString('appURL');

                    //send a request to the api server with the login information
                    httpModule.request({
                        url: appURL+'/api/login',//"http://192.168.0.83:8000/api/login",
                        method: "POST",
                        headers: { 
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        content: JSON.stringify({
                            email: this.user.email,
                            password: this.user.password
                        })
                    })
                    .then(response => {
                        
                        this.processing = false;

                        if(response.statusCode === 200){
                            //good login, redirect to the home page after saving the app settings

                            var result = response.content.toJSON();
                            console.log(result);
                            appSettings.setString('userToken',result.success.token);
                            appSettings.setString('name',result.success.user.name);
                            appSettings.setNumber('userid',result.success.user.id);
                            appSettings.setString('email',result.success.user.email);
                            
                            this.$navigateTo(Home, { clearHistory: true });
                        }else if(response.statusCode === 401){
                            //failed logn
                            alert('The login details you have provided are not correct');
                        }else{
                            // unkown error
                            alert('Unexpected error');
                        }

                    }, (e) => {
                        this.processing = false;
                        alert(e.message)
                    });


            },

            register() {
                //check if all the validation rules are correct
                if (this.user.password != this.user.confirmPassword) {
                    //passwords do not match
                    alert("Your passwords do not match.");
                    this.processing = false;
                    return;
                }else if(this.user.password.length <=7 ){
                    //password less than 8 chars
                    alert("Your password must be atlease 8 characters");
                    this.processing = false;
                    return;
                }else if(!this.user.name){
                    //missing fiels
                    alert('all fields are required.');
                    this.processing = false;
                    return;
                }
                //get api server url
                var appURL = appSettings.getString('appURL');

                //make a request to the api server for registering the user
                httpModule.request({
                    url: appURL+'/api/register',//"http://192.168.0.83:8000/api/login",
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    content: JSON.stringify({
                        name: this.user.name,
                        email: this.user.email,
                        password: this.user.password,
                        c_password: this.user.confirmPassword
                    })
                })
                .then(response => {

                    this.processing = false;

                    console.log(response.content.toJSON());

                    if(response.statusCode === 200){
                        //good registration, alert the user to check there email

                        var result = response.content.toJSON();
                        console.log(result);
                        alert('Please verify your email to login');
                        this.isLoggingIn = true;

                    }else if(response.statusCode === 422){
                        //failed registration
                        alert('The following error happened Username or email already taken or password length is to short.');
                        console.log(response.content);
                        console.log('------------------------');
                        console.log(response);
                    }else{
                        alert('Unexpected error');
                    }

                }, (e) => {
                    this.processing = false;
                    alert(e.message)
                });
            },
            focusPassword() {
                //redirect the user to the forgot password screen
                this.$refs.password.nativeView.focus();
            },
            focusConfirmPassword() {
                //next button on keyboard clicked, focus on confirm password field
                if (!this.isLoggingIn) {
                    this.$refs.confirmPassword.nativeView.focus();
                }
            },
            forgotPassword() {
                //next button on keyboard clicked ,focus on password field
                this.$navigateTo(ForgotPassword);
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
