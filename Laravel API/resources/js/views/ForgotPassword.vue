<template>
    <v-container
        class="fill-height container-auth"
        fluid
    >
        <v-row
        align="center"
        justify="center"
        >
            <v-col
                cols="12"
                sm="8"
                md="4"
            >
                <v-card class="elevation-12 autentication-form">
                    <v-toolbar
                    flat
                    >
                    <v-toolbar-title>Forgot Password</v-toolbar-title>
                    <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                    <v-form>
                        <v-text-field
                        id="email"
                        label="Email"
                        v-model="email_reset"
                        name="email"
                        prepend-icon="mdi-email-outline"
                        type="email"
                        ></v-text-field>
                    </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <!-- <router-link to="/" class="link-url"> -->
                            <v-btn color="primary"
                            x-large
                            block
                            @click="resetPassword"
                            >Reset Password</v-btn>
                        <!-- </router-link> -->
                    </v-card-actions>
                    <v-divider></v-divider>
                    <router-link to="/login" class="link-url">
                        <p class="pass-forgot simple-text link-dialog">Return to Login page</p>
                    </router-link>
                </v-card>
                <!-- End V Card -->
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email_reset: "",
        }
    },
    methods: {
        resetPassword : function() {
            // Base Url of App
            const baseUrl = localStorage.getItem('appUrl');
            // Custom Url for Api Call
            const resetPwdUrl = baseUrl + '/api/reset-password';

            // Data to send
            const data = {
                email: this.email_reset
            }
            console.log(this.email_reset);
            this.$http.post(resetPwdUrl, data)
            .then(() => {
                // console.log(result);
                // console.log('email reset');
            })

            this.$router.push('/login');
            
        },
    }
}
</script>

<style scoped>
.container-auth {
    background: url('../assets/img/login.jpg');
}
</style>