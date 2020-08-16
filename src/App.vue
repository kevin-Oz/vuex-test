<template>
  <div id="app" class="container" >
    <HelloWorld msg="Vuex Test" style="color: white"/>
    <Categoria/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Categoria from './components/Categoria.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Categoria
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
