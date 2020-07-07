<template>
  <v-app>
    <router-view/><!-- Router View -->
    <!-- <footer-component></footer-component> -->
    <!-- Footer Component %temp -->
  </v-app>
</template>

<script>
export default {
  created() {
    // Set App url Globally on Localstorage
    localStorage.setItem('appUrl','https://cockpit.resttech.io/lo-notes-api');

  }
}
</script>

<style>

::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
    background-color: #ffffff;
}

::-webkit-scrollbar
{
    width: 6px;
    background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
    background-color: #1662a5;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.v-input.hidden-field {
  display: none;
  height: 0;
  width: 0;
  padding: 0;
  visibility: hidden;
  margin: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.link-url {
  display: block;
  width: 100%;
}

p.simple-text {
  padding: .5rem;
  margin: 0;
}

.simple-text.link-dialog {
  cursor: pointer;
}

.container-bk,
.container-auth {
  background: url('./assets/img/login.jpg');
}

.page-full-height {
  height: 100%;
}

.list-scrollable {
    height: calc(100vh - 120px);
    overflow-y: scroll;
    overflow-x: hidden;
}

.list-scrollable-mid {
    height: calc(100vh - 170px);
    overflow-y: scroll;
    overflow-x: hidden;
}

</style>
