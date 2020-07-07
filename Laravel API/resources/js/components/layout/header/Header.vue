<template>

  <header>
    <v-navigation-drawer
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
    >
    <v-list shaped dense>
      <v-subheader>Dashboard</v-subheader>
      <!-- <v-list-item-group v-model="items" color="primary" class="menu-item"> -->
        <v-list-item color="primary" class="menu-item"
          v-for="(item, i) in items"
          :key="i"
          :to="item.link" link
        >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
        </v-list-item>
    </v-list>

  </v-navigation-drawer>
  <!-- End Left Nav -->


  <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-1"
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


        <v-badge overlap left color="purple">
            <template v-slot:badge>
              <span>13</span>
            </template>
            <v-btn icon>
              <v-icon>mdi-bell</v-icon>
            </v-btn>
        </v-badge>

        <!-- Btn Bell -->

        <v-badge overlap left color="purple">
            <template v-slot:badge>
              <span>3</span>
            </template>
            <v-btn icon>
              <v-icon>mdi-message-text-outline</v-icon>
            </v-btn>
        </v-badge>

        <!-- Btn Msg -->

        <v-menu
          transition="slide-y-transition"
          bottom
        >
          <template v-slot:activator="{ on }">
            <span class="avatar-name">{{ username }}</span>
            <v-btn
              icon
              large
              v-on="on"
            >
              <v-avatar
                size="32px"
                item
              >
                <v-img
                src="https://avatars0.githubusercontent.com/u/9064067?v=22&s=60"
                :alt="username"
                ></v-img></v-avatar>
            </v-btn>
          </template>
          
          <v-list>
            
            <v-list-item
              v-for="(item_account, i) in account_menu"
              :key="i"
              :to="item_account.link"
            >
              <v-list-item-icon>
                <v-icon>{{ item_account.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item_account.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="Logout">
                <v-list-item-icon>
                  <v-icon>mdi-login-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <!-- End List Item -->
          </v-list>
          <!-- End List -->
        </v-menu>
        <!-- End Menu -->
      </v-app-bar>
      <!-- End App Bar -->
    </header>
    <!-- End Header -->

</template>

<script>
export default {
    data() { 
      return {
        // Vuetify
        drawer: true,
        right : null,
        username : this.$store.state.user,
        items: [
            { title: 'Dashboard', icon: 'mdi-chart-areaspline' ,link: '/'},
            // { title: 'Channels', icon: 'mdi-hexagon-slice-6', link: '/channels-notes'},
            { title: 'Groups', icon: 'mdi-plus-thick', link: '/channels-add'},
            { title: 'Users', icon: 'mdi-account',link: '/users'},
            // { title: 'Add User', icon: 'mdi-account-plus-outline',link: '/users'},
        ],
        account_menu : [
            { title: 'Profile', icon: 'mdi-account-circle-outline', link: '/user-account', action : ''},
            // { title: 'Settings', icon: 'mdi-cog-outline', link: '', action : ''},
            // { title: 'Activity Log', icon: 'mdi-card-text-outline', link: '', action : ''},
            // { title: 'Logout', icon: 'mdi-login-variant', link: '', action : 'Logout', },

        ],
    }
  },
  methods: {
      Logout : function() {
      // Base Url of App
      const baseUrl = localStorage.getItem('appUrl');
      // Custom Url for Api Call
      const logoutUrl = baseUrl + '/api/logout';

      // Session Token
      const token = localStorage.getItem('session_token');

      // Header
      const headers = {
          'Content-Type' : 'application/json',
          'Authorization' : 'Bearer '+ token,
      }

      this.$http.get(logoutUrl, {
          headers : headers
      })
      .then((result) => {
            console.log(result);
            // this.$store.state.status = '';
            // this.$store.state.token = '';
            localStorage.setItem('session_token','');
            this.$store.dispatch('setLogout');
            this.$router.push('/login');
      })

      //this.$router.push('/login');
      
  },
  }
}

</script>

<style scoped>
</style>