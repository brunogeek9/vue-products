<template>
  
  <v-app>
    <navbar />    
    <!-- <v-app-bar color="deep-purple accent-4" dense dark>  -->
     
    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app absolute class="font-weight-medium">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>criado por bruno jamelli</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import navbar from './components/Navbar';
  
export default {
  components:{
    navbar
  }
}
</script>