<template>
  <div id="app">
    <!-- <HelloWorld msg="Gerenciando Produtos"/> -->
    <hello-world msg="Gerenciando Produtos"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
