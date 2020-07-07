<template>
    <v-container
        class="fill-height container-bk"
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
                <v-toolbar-title>Confirm Email</v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <p>Please confirm your email before continue to your account</p>
                </v-card-text>
                <v-card-actions>
                    <router-link to="/" class="link-url">
                        <v-btn color="primary"
                        x-large
                        block
                        >Continue</v-btn>
                    </router-link>
                </v-card-actions>

            </v-card>
            <!-- End V Card -->
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>