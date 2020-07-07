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
            <v-card class="elevation-12 registration-form">
                <v-toolbar
                flat
                >
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                <v-form>
                    <v-text-field
                    label="Name"
                    name="name"
                    v-model="name"
                    prepend-icon="mdi-account-outline"
                    type="text"
                    ></v-text-field>

                    <v-text-field
                    id="email"
                    label="Email"
                    name="email"
                    v-model="email"
                    prepend-icon="mdi-email-outline"
                    type="email"
                    ></v-text-field>


                    <v-text-field
                    id="password"
                    label="Password"
                    v-model="password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    ></v-text-field>

                    <v-text-field
                    id="password-confirmation"
                    label="Confirm Password"
                    v-model="c_password"
                    name="confirm-password"
                    prepend-icon="mdi-lock"
                    type="password"
                    ></v-text-field>
                </v-form>
                </v-card-text>
                <v-card-actions>
                    <!-- <router-link to="/" class="link-url"> -->
                        <v-btn color="primary"
                        x-large
                        block
                        @click="registerAccount"
                        >Register</v-btn>
                    <!-- </router-link> -->
                </v-card-actions>
                <router-link to="/login" class="link-url">
                    <p class="simple-text link-url">Login to your Account</p>
                </router-link>
            </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
      return {
        name : "",
        email : "",
        password : "",
        c_password : "",
      }
    },
    methods : {
        registerAccount : function() {
            const baseUrl = localStorage.getItem('appUrl');
            const registerUrl = baseUrl + '/api/register';
            //const registerUrl = 'http://192.168.0.51:8000/api/register';

            this.$http.post(registerUrl,{
                name : this.name,
                email: this.email,
                password : this.password,
                c_password : this.c_password
            })
            .then((result) => {
                console.log(result.data.success);
                const result_name = result.data.success.name;

                if(result_name) {
                    this.$router.push('/login')
                }

            })
        }
    }
}
</script>

<style scoped>
.container-auth {
    background: url('../assets/img/login.jpg');
}
</style>