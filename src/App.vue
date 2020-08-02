<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Lista></Lista>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Lista from './components/Lista.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Lista
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
