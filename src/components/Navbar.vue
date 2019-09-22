<template>
    <nav>
        <v-app-bar app color="deep-purple accent-4" dense dark> 
        <v-app-bar-nav-icon color="pink"
          dark
          @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>

        <v-toolbar-title>Hamburgers</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
        <v-list-item>
            <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>

            <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>      
    </nav>
    
</template>

<script>
export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Homeaaa', icon: 'dashboard', link: '/' },
          { title: 'About', icon: 'question_answer', link: '/about' },
        ],
      }
    },
  }
</script>