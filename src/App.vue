<template>
  <div id="app">
    <the-navbar></the-navbar>
    
    <manager-products title="Gerenciando Produtos"></manager-products>
    
  </div>
</template>

<script>
import ManagerProducts from './components/ManagerProducts.vue'
import TheNavbar from './components/TheNavbar.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
  name: 'app',
  components: {
    TheNavbar,
    ManagerProducts
  }
}
</script>

<style>
</style>
