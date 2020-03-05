<template>
    <Page>
        <ActionBar title="YOUR APP"></ActionBar>

        <StackLayout>
            <Label class="body m-20" :text="message" textWrap="true"></Label>
            <Button class="btn btn-primary" text="Log out" @tap="logout"></Button>
            <Button class="btn btn-primary" text="alert" @tap="displayData"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    import Login from "./Login";

    export default {
        data() {
            return {
                message: "You have successfully authenticated. This is where you build your core application functionality."
            };
        },
        methods: {
            logout() {
                this.$backendService.logout();
                this.$navigateTo(Login, {
                    clearHistory: true
                });
            },

            displayData(){

                const appSettings = require("application-settings");

                var userData = appSettings.getString('userToken',0);
                alert(userData);
            }
        }
    };
</script>

<style>
</style>
