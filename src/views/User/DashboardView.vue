<template>
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
      <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
        <v-list-item 
        link
        v-for="(item, id) in items" 
        :key="id"
        :to="item.to"
        exact
      >
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{item.title}}</v-list-item-title>
      </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app 
        color="success"
        dark
      >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Team 10 WasteApps</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <!--  -->
      </v-main>
    </v-app>
  </template>
  
  <script>

  export default {
    data: () => ({
      drawer: null,
      // items with random id, title, icon, to
      items: [
        { id: 1, title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/user/dashboard' },
        { id: 2, title: 'Data KK Kota Bandung', icon: 'mdi-account-multiple', to: '/user/data_kk' },
        { id: 3, title: 'Data Sampah Rumah Tangga', icon: 'mdi-home', to: '/user/data_srt' },
        { id: 4, title: 'Settings', icon: 'mdi-cog', to: '/user/setting' },
      ],
      foods: [
        // random food name, price, img,
        { id: 1, name: 'Nasi Padang', price: 10000, img: 'https://assets-pergikuliner.com/uploads/bootsy/image/18948/Nasi_Padang__pergikuliner.com_.jpeg' },
        { id: 2, name: 'Nasi Uduk', price: 15000, img: 'https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/2022/08/03/765351270.png' },
        { id: 3, name: 'Nasi Goreng', price: 14000, img: 'https://assets.pikiran-rakyat.com/crop/75x53:675x478/750x500/photo/2022/06/06/2861416974.jpg' },
        ],
    }),
  }
</script>