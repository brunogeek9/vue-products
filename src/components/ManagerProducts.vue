<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      With Bootstrap!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <th scope="row">{{product.id}}</th>
        <td> {{product.name}} </td>
        <td> {{product.quantity}} </td>
        <td> {{product.price}} </td>
      </tr>
      
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: 'manager-products',
  props: {
    title: String
  },
  data(){
    return{
      products: [
        {id:1, name:"relogio analogico", quantity: 3, price: 35},
        {id:2, name:"relogio digital", quantity: 3, price: 20},
        {id:3, name:"dvd", quantity: 3, price: 3}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .container{
    margin: auto;
    padding-right: 5%;
    padding-top: 2%;
    width: 80%;
  }
</style>
