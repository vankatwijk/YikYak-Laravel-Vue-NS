<template>
    <footer>
        <v-footer
        absolute
        class="font-weight-medium"
        >
            <v-col
                class="text-center"
                cols="12"
            >
                <div id="nav">
                    <router-link to="/">Home</router-link> |
                    <router-link to="/login">Login</router-link> |
                    <router-link to="/registration">Registration</router-link> |
                    <router-link to="/reset-password">Forgot Password</router-link> |
                    <router-link to="/channels-notes">Channels Notes</router-link> |
                    <router-link to="/channels-add">Channels Notes</router-link> |
                    <router-link to="/users">Users</router-link> |
                </div>
            </v-col>
        </v-footer>
    </footer>
</template>