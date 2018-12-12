<template>
  <div id="app">
    <NavBar></NavBar>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'

export default Vue.extend({
  name: 'app',
  components: {
    HelloWorld,
    NavBar
  }
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
