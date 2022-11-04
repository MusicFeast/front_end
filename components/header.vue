<template>
  <div>
    <MenuHeader ref="menu"></MenuHeader>
    <v-app-bar id="header" fixed class="font2 isolate" color="transparent">
      <a id="logoApp" class="center" @click="$router.push(localePath('/')); $scrollTo('home')">
        <img src="~/assets/sources/logos/logo.svg" alt="logo" class="eliminarmobile" style="--w: 100%">
        <img src="~/assets/sources/logos/logo-mobile.svg" alt="logo" class="vermobile" style="--w: 100%">
      </a>

      <section class="center gap2 eliminarmobile">
        <a
          v-for="(item,i) in dataNavbar" :key="i" class="tcap"
          @click="goTo(item.to)"
          >{{item.name}}</a>
      </section>

      <section class="center">
        <!-- button connect -->
        <v-btn
          v-if="!user.user"
          :ripple="false"
          class="btn activeBtn eliminarmobile"
          style="--p: .5em clamp(1em, 3vw, 2.5em)"
          @click="$store.commit('signIn')">Connect</v-btn>
          
        <v-menu v-else v-model="menuProfile" bottom offset-y :close-on-content-click="false">
          <template #activator="{ on, attrs }">
            <!-- button profile -->
            <v-btn
              :ripple="false"
              class="btn activeBtn eliminarmobile"
              style="--p: .5em" v-bind="attrs" v-on="on">
              <span>{{user.accountId}}</span>
              <v-icon size="2em">mdi-menu-down</v-icon>
            </v-btn>
          </template>

          <!-- menu profile -->
          <v-list id="menuProfile" class="divcol" color="hsl(0, 84%, 60%)">
            <!-- info profile content -->
            <v-list-item disabled class="divcol" style="gap:3px">
              <div class="space gap1 fill_w">
                <span class="bold">NEAR</span>
                <span class="semibold" style="--c:var(--accent)">478.5 N</span>
              </div>
              
              <div class="space gap1 fill_w">
                <span class="bold">MF</span>
                <span class="semibold" style="--c:var(--accent)">234.72 MF</span>
              </div>
            </v-list-item>
            
            <v-list-item
              v-for="(item,i) in dataMenuProfile" :key="i" :disabled="item.to === '/marketplace-vip' && user.tier < 3 ? true : false"
              :ripple="false" :class="{active: item.active}" @click="item.active?'':dataMenuProfile.forEach(e=>{e.active=false;
              item.active=true});menuProfile = false; drawer = false; $router.push(localePath(item.to))">
              <v-list-item-title class="tcap" :class="{not_transform: item.to === '/marketplace-vip'}">
                {{item.title}}
                <v-chip
                  v-show="item.to === '/marketplace-vip'" style="margin-left: 5px; border-radius: 5px"
                  :color="user.tier >= 3 ? '#26A17B' : 'var(--error)'">{{user.tier >= 3 ? 'Activated' : 'disabled'}}</v-chip>
              </v-list-item-title>
            </v-list-item>

            <!-- button logout -->
            <v-btn
              :ripple="false"
              class="btn activeBtn bold"
              style="--fs: 15px;--w:calc(100% - (1em * 2)); margin: 1em"
              @click="$store.commit('signOut'); menuProfile = false">Log out</v-btn>

            <span v-show="user.tier !== 0" class="tag">{{
              user.tier===1 ? 'bronze' :
              user.tier===2 ? 'silver' :
              user.tier===3 ? 'gold' :
              user.tier===4 ? 'platinum' :
              user.tier===5 ? 'diamond' :
              user.tier===6 ? 'uranium' : 'user'
            }}</span>
          </v-list>
        </v-menu>

        <v-btn icon class="vermobile" @click="$refs.menu.drawer = true">
          <v-icon large>mdi-menu</v-icon>
        </v-btn>
      </section>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      menuProfile: false,
      dataMenuProfile: [
        {
          title: "my profile",
          to: "/profile",
          active: false,
        },
        {
          title: "special marketplace",
          to: "/marketplace-vip",
          active: false,
        },
      ],
      dataNavbar: [
        { name: "home", to: "/", active: false },
        { name: "about", to: "/about", active: false },
        { name: "artists", to: "/artists", active: false },
        { name: "news", to: "/news-details", active: false },
        { name: "marketplace", to: "", active: false },
        { name: "contact", to: "/", active: false },
      ],
    };
  },
  computed: {
    user() {return this.$store.state.dataUser},
  },
  mounted() {
    const header = document.querySelector("#header");
    
    // tier loading data
    this.user.tier < 3 
    ? this.dataNavbar.find(data=>data.name==='marketplace').to = '/marketplace'
    : this.dataNavbar.find(data=>data.name==='marketplace').to = '/marketplace-vip'

    // mobile listener scroll
    window.onscroll = () => {
      if (document.documentElement.scrollTop >= 80) {header.classList.add("header-transparent")}
      else {header.classList.remove("header-transparent")}
    }
  },
  // created() {
  //   const theme = localStorage.getItem("theme");
  //   if (theme) {
  //     setTimeout(() => {
  //       this.$store.commit("switchTheme", theme);
  //     }, 100);
  //   }
  //   if (theme === "light") {this.themeButton = true}
  //   else {this.themeButton = false}
  // },
  methods: {
    goTo(to) {
      this.$router.push(this.localePath(to))
      if (to === '/news-details') { localStorage.setItem("validator-news", "header") }
    }
    // changeTheme(theme) {
    //   this.$store.commit("switchTheme", theme);
    //   this.themeButton = !this.themeButton;
    // },
  },
};
</script>

<style src="~/assets/styles/components/header.scss" lang="scss" />
