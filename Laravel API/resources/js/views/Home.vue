<template>
    <section class="page-container page-start page-full-height">
      <template>
        <notifications-box></notifications-box>
      </template>
      <!-- If User don't add Entity name to acount and email is confirmed -->
      <template v-if="!entity_name && email_confirmed">
        <entity-name @EntityCreated="EntityCreated"></entity-name>
        <!-- Add Entity Name Components -->
      </template>

      <!-- If Entity name is setted and email is not confirmed -->
      <template v-if="!email_confirmed">
        <confirm-email></confirm-email>
        <!-- Confirm Email -->
      </template>


      <!-- If User was confirmed Email and Entity name is added -->
      <template v-if="entity_name && email_confirmed">
        <header-global></header-global>
        <!-- Header Components -->
        <dashboard-grid-page></dashboard-grid-page>
        <!-- Dashboard Components -->
      </template>


      <!-- <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div> --> 
    </section>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import DashboardGridPage from '../components/dashboard/Dashboard'
import EntityName from '../components/dashboard/EntityName'
import ConfirmEmail from '../components/auth/ConfirmEmail'
import Notification from '../components/widgets/Notifications'

export default {
  name: 'Home',
  data() {
    return {
        entity_name: null,
        email_confirmed: null,
        token: null,
    }
  },
  components: {
    //'header-global' : HeaderGlobal,
    'dashboard-grid-page': DashboardGridPage,
    'entity-name': EntityName,
    'confirm-email' : ConfirmEmail,
    'notifications-box' : Notification,
    //HelloWorld
  },
  created() {
    let success = this.$store.getters.getLoginData;
    console.log(success);
    this.email_confirmed = success.email_conf;
    this.entity_name = success.entity;
  },
  computed: {
  },
  methods: {
    EntityCreated() {
      this.entity_name = true
    },
    checkToken() {
      if(this.token == false) {
        this.$router.push('/login')
      } else {
        this.$router.push('/')
      }
    },
  },
  beforeMount() {
    //this.checkToken();
  },

  watch: {
    // entity_name: (newTitle, oldTitle) => {
    //   console.log("Status changed from " + oldTitle + " to " + newTitle)
    // },
    // email_confirmed : (newTitle, oldTitle) => {
    //   console.log("Status changed from " + oldTitle + " to " + newTitle)
    // },
  },

}
</script>
