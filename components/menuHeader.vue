<template>
  <div id="menuHeader">
    <!-- drawer -->
    <v-navigation-drawer
      id="drawer-toggle"
      v-model="drawer"
      height="100%"
      fixed left
      temporary
      :overlay-opacity="$store.state.overlay.opacity"
      :overlay-color="$store.state.overlay.color"
      class="font2"
    >
      <section class="v-navigation-drawer__content--header divcol center gap2">
        <v-btn icon class="close" style="--top: 8px; --right: 8px" @click="drawer=false">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <a class="center" @click="$router.push(localePath('/')); $scrollTo('home')">
          <img src="~/assets/sources/logos/logo.svg" alt="logo" style="--w: 8em">
        </a>
        <v-btn class="btn" style="--w:75%; --min-h: 30px; --p: .5em 2em" :ripple="false">Connect</v-btn>
      </section>

      <section class="v-navigation-drawer__content--content divcol jspace gap2">
        <v-list class="fill_w">
          <v-list-item
            v-for="(item,i) in dataDrawer" :key="i" v-ripple="{class: 'activeRipple'}" link :class="{active: item.active}"
            @click="$scrollTo(item.key); dataDrawer.forEach(e=>e.active=false); item.active=true; drawer = false">
            <v-list-item-title class="conttitle acenter gap1 h10_em">
              <span style="max-width: max-content">
                {{ item.name }}
              </span>
            </v-list-item-title>
          </v-list-item>
        </v-list>

        <section class="v-navigation-drawer__content--footer divcol center gap1">
          <span class="h10_em">Join us on:</span>

          <div class="center gap2">
            <v-btn v-for="(item,i) in dataSocial" :key="i" icon :href="item.url" target="_blank">
              <v-icon>{{item.icon}}</v-icon>
            </v-btn>
          </div>
        </section>
      </section>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "HeaderMenuComponent",
  data() {
    return {
      messages: 1,
      drawer: false,
      dataDrawer: [
        {
          key: "home",
          name: "Home",
          active: false,
        },
        {
          key: "about",
          name: "About",
          active: false,
        },
        {
          key: "artists",
          name: "Artists",
          active: false,
        },
        {
          key: "news",
          name: "News",
          active: false,
        },
        {
          key: "lastest-releases",
          name: "Lastest Releases",
          active: false,
        },
        {
          key: "contact",
          name: "Contact",
          active: false,
        },
      ],
      dataSocial: [
        { icon:"mdi-instagram", url:"#" },
        { icon:"mdi-twitter", url:"#" },
        { icon:"mdi-facebook", url:"#" },
        { icon:"discord", url:"#" }
      ],
      dataMenuLogin: [
        { key:"profile", name:"Profile", to:"/profile" },
        { key:"library", name:"Library", to:"/library" },
        { key:"logout", name:"Log out" },
      ],
    };
  },
  // created() {
  //   const theme = localStorage.getItem("theme");
  //   this.OverlayMethod(theme);
  // },
  mounted() {
    this.isScrollTop();
    window.onscroll = () => this.isScrollTop();
  },
  methods: {
    ActiveClass(key, item) {
      // mejorar hace falta
      if (key === 'expansion') {
        if (item.active) {
          item.active=!item.active
        } else {
          this.dataDrawer.list.forEach(e=>{e.active=false})
          this.dataDrawer.expansion.forEach(e=>{e.active=false})
          item.active=true
        }
      } else if (key === 'list') {
        this.dataDrawer.expansion.forEach(e=>{e.active=false})
        this.dataDrawer.list.forEach(e=>{e.active=false})
        item.active=true
      }
    },
    Logout(key) {
      if (key === 'logout') {localStorage.setItem('auth', false);this.$router.push(this.localePath('/'));this.$router.go()}
    },
    isScrollTop() {
      this.dataDrawer.forEach(e => {
        const sections = document.getElementById(e.key);
        if (sections) {
          const positions = sections.getBoundingClientRect().top + window.scrollY;
          const scroll = document.documentElement.scrollTop;
          if (positions >= scroll + 50 && positions <= scroll + 100) {
            const index = this.dataDrawer.findIndex(data => data.key === e.key);
            this.dataDrawer.forEach(e => {e.active = false})
            this.dataDrawer[index].active = true
          }
        }
      });
    },
  },
};
</script>

<style src="~/assets/styles/components/header.scss" lang="scss" />
