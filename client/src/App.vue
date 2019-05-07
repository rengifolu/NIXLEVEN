<template>
  <div id="app">
    <navbar/>
    <main>
      <router-view/>
      <!-- <imagen-responsive></imagen-responsive> -->
      <!-- <img src="./assets/foto2.png"> -->
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

img {
  width: 25%;
  height: 100%;
}
</style>
