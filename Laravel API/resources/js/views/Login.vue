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
            md="5"
        >
            <v-card class="elevation-12 autentication-form">
                <v-toolbar
                flat
                >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                <v-form>
                    <v-text-field
                    label="Email"
                    name="email"
                    v-model="email"
                    prepend-icon="mdi-account-outline"
                    type="text"
                    ></v-text-field>

                    <v-text-field
                    id="password"
                    label="Password"
                    v-model="password"
                    name="password"
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
                        @click="loginUser"
                        >Login</v-btn>
                    <!-- </router-link> -->
                </v-card-actions>
                <v-divider></v-divider>
                <router-link to="/reset-password" class="link-url">
                    <p class="pass-forgot simple-text link-dialog">Forgot your Password ?</p>
                </router-link>
                <router-link to="/registration" class="link-url">
                    <p class="simple-text link-url">Create an Account</p>
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
        dialog: false,
        email : "",
        password : "",
      }
    },

    methods : {
        loginUser : function() {
            const baseUrl = localStorage.getItem('appUrl');
            const loginUrl = baseUrl + '/api/login';

            // let email = this.email;
            // let password = this.password;

            this.$http.post(loginUrl,{
                email: this.email,
                password : this.password
            })
            .then((result) => {
                console.log(result.data);
                let token = result.data.success.token;

                if(token) {
                    let entity = result.data.success.hasEntity;
                    let emailcnf = result.data.success.email_valid;
                    let username = result.data.success.user.name;
                    let userId = result.data.success.user.id;
                    let entityId = result.data.success.entity.entity_id;
                    let entityName = result.data.success.entity.entity_name;
                    let entityUsers = result.data.success.entity.entity_users;
                    let entityChannel = result.data.success.entity.entity_channel;
                    //console.log('we are in login '+ entity);

                    // this.$store.commit('auth_success',token, user,entity,emailcnf );
                    this.$store.dispatch('setSucccess',{ 
                        token : token,
                        user : username,
                        entity : entity,
                        email : emailcnf,
                        user_id : userId,
                        entity_id : entityId,
                        entity_name : entityName,
                        entity_users : entityUsers,
                        entity_channel : entityChannel
                    });

                    localStorage.setItem('session_token',token);
                    this.$router.push('/')
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