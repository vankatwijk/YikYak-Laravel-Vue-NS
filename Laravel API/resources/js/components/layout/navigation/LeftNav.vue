<template>
  <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="blue darken-3"
        dark
    >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title
          style="width: 300px"
          class="ml-0 pl-4"
        >
          <span class="hidden-sm-and-down">YikYak</span>
        </v-toolbar-title>
        <!-- Logos -->
        <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="hidden-sm-and-down"
        ></v-text-field>
        <!-- End Search Field -->
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-message-text-outline</v-icon>
        </v-btn>
        <!-- Btn Msg -->
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
        <!-- Btn Bell -->
        <v-btn
          icon
          large
        >
          <v-avatar
            size="32px"
            item
          >
            <v-img
            src="https://avatars0.githubusercontent.com/u/9064067?v=22&s=60"
            alt="Mark"
            ></v-img></v-avatar>
        </v-btn>
      </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            drawer: true,
            items: [
                { title: 'Home', icon: 'mdi-web'},
                { title: 'About', icon: 'mdi_account-box-multiple-outline'}
            ],
            right : null
        }
    }
}
</script>