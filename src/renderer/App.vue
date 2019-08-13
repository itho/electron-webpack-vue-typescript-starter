<template>
  <div id="app">
    <app-toolbar />
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'home' }">home</router-link>
    <router-link :to="{ name: 'settings' }">settings</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { createComponent, value } from 'vue-function-api'
import AppToolbar from "./components/AppToolbar.vue";

export default createComponent({
  name: "App",
  components: {
    AppToolbar
  },
  setup() {
    const msg = value('welcome to the app')

    return { msg }
  }
});
</script>