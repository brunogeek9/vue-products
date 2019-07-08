<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <!-- <div class="alert alert-success alert-dismissible fade show" role="alert">
      With Bootstrap!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div> -->
    <!-- adicionando o form de cadastro -->
    <form id="form" @submit.prevent="addProduct">
      <input type="text" class="form-control" placeholder="name" v-model="newProduct.name"> 
      <input type="text" class="form-control" placeholder="Quantity" v-model="newProduct.quantity"> 
      <input type="text" class="form-control" placeholder="Price" v-model="newProduct.price"> 
      <button type="submit" class="btn btn-primary" id="btn">Cadastrar</button>
    </form>
    {{newProduct}}
    <!-- finalizando form  -->
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
import axios from 'axios';

export default {
  name: 'manager-products',
  props: {
    title: String
  },
  data(){
    return{
      products: [
        // {id:1, name:"relogio analogico", quantity: 3, price: 35},
        // {id:2, name:"relogio digital", quantity: 3, price: 20},
        // {id:3, name:"dvd", quantity: 3, price: 3}
      ],
      newProduct:{ 
        type: Object 
      }

    }
  },
  // created(){
  //   axios.create({
  //     baseURL: 
  //   })
  // },
  mounted(){
    
    axios.get(`https://my-json-server.typicode.com/brunogeek9/fake-products-api/products`)
      .then(response => {
        this.products = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods:{
    addProduct(){
      
      axios.post(`https://my-json-server.typicode.com/brunogeek9/fake-products-api/products`, {
        name: this.newProduct.name,
        quantity: this.newProduct.quantity,
        price: this.newProduct.price
      })
      .then(function (response) {
        console.log(response);
        alert("cadastrou");
        
      })
      .catch(function (error) {
        console.log(error);
      });
      this.newProduct = {};
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
  #form{
    width: 30%;
    float: left;
  }
  #btn{
    float: right;
    margin-top: 5%;
    margin-bottom: 5%;

  }
  input{
    float: right;
    margin-top: 10%;
  }
</style>
