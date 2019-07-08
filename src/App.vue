<template>
  <div id="app">
    <the-navbar></the-navbar>
    <hello-world msg="Gerenciando Produtos"/>

    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheNavbar from './components/TheNavbar.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
  name: 'app',
  components: {
    HelloWorld,
    TheNavbar
  }
}
</script>

<style>
</style>
