<template>
  <div>
    <MenuHeader ref="menu"></MenuHeader>
    <v-app-bar id="header" fixed class="font2 isolate">
      <a id="logoApp" class="center" @click="$router.push(localePath('/')); $scrollTo('home')">
        <img src="~/assets/sources/logos/logo.svg" alt="logo" class="eliminarmobile" style="--w: 100%">
        <img src="~/assets/sources/logos/logo-mobile.svg" alt="logo" class="vermobile" style="--w: 100%">
      </a>

      <section class="center gap2 eliminarmobile">
        <a
          v-for="(item,i) in dataLinks" :key="i"
          @click="$router.push(localePath(`/${item.to}`))"
          >{{item.name}}</a>
      </section>

      <section class="center">
        <!-- button connect -->
        <v-btn
          v-if="!user"
          :ripple="false"
          class="btn activeBtn eliminarmobile"
          style="--p: .5em clamp(1em, 3vw, 2.5em)"
          @click="signIn()">Connect</v-btn>
          
        <v-menu v-else v-model="menuProfile" bottom offset-y :close-on-content-click="false">
          <template #activator="{ on, attrs }">
            <!-- button profile -->
            <v-btn
              :ripple="false"
              class="btn activeBtn eliminarmobile"
              style="--p: .5em" v-bind="attrs" v-on="on">
              <span>{{accountId}}</span>
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
              v-for="(item,i) in dataMenuProfile" :key="i"
              :ripple="false" :class="{active: item.active}" :to="localePath(item.to)"
              @click="item.active?'':dataMenuProfile.forEach(e=>{e.active=false; item.active=true});menuProfile = false; drawer = false">
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>

            <!-- button logout -->
            <v-btn
              :ripple="false"
              class="btn activeBtn bold"
              style="--fs: 15px;--w:calc(100% - (1em * 2)); margin: 1em"
              @click="signOut(); menuProfile = false">Log out</v-btn>
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
import * as nearAPI from 'near-api-js'

const { connect, keyStores, WalletConnection } = nearAPI

const keyStore = new keyStores.BrowserLocalStorageKeyStore()
const config = {
  networkId: "testnet",
  keyStore, 
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

export default {
  name: "HeaderComponent",
  data() {
    return {
      accountId: null,
      user: false,
      menuProfile: false,
      dataMenuProfile: [
        {
          title: "My Profile",
          to: "/profile",
          active: false,
        },
      ],
      dataLinks: [
        { name: "Home", to: "" },
        { name: "About", to: "about" },
        { name: "Artists", to: "artists" },
        { name: "News", to: "news" },
        { name: "Marketplace", to: "marketplace" },
        { name: "Contact", to: "" },
      ],
    };
  },
  computed: {
    perfil() {return this.$store.state.user.perfil},
  },
  // created() {
  //   const theme = localStorage.getItem("theme");
  //   if (theme) {
  //     setTimeout(() => {
  //       this.$store.dispatch("CambiarTheme", theme);
  //       this.$store.commit('OverlayMethod', theme)
  //     }, 100);
  //   }
  //   if (theme === "light") {this.themeButton = true}
  //   if (theme === "dark") {this.themeButton = false}
  // },
  mounted() {
    this.isSigned()
    this.getData()
    this.LogState();
  },
  methods: {
    // CambiarTheme(theme) {
    //   this.$store.dispatch("CambiarTheme", theme);
    //   this.themeButton = !this.themeButton;
    // },
    async getData () {
      this.account = {}
      // connect to NEAR
      const near = await connect(config);
      // create wallet connection
      const wallet = new WalletConnection(near)
      this.accountId= wallet.getAccountId()

      if (wallet.isSignedIn()) {
        const url = "api/v1/profile/?wallet=" + this.accountId
        this.axios.defaults.headers.common.Authorization='token'
        this.axios.get(url)
          .then((response) => {
            if (response.data[0]){
              this.avatar = response.data[0].avatar
              this.$store.commit("Avatar", this.avatar)
            }
        }).catch((error) => {
          alert(error)
        })
      }
    },
    // use for update account log states
    LogState() {
      if (JSON.parse(localStorage.getItem('auth')) === true) {this.user = true}
      else {this.user = false}
    },
    async signIn () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      wallet.requestSignIn(
        'contract.nearbase.testnet'
      )
    },
    async isSigned () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        localStorage.setItem('auth', true)
        this.user = true
      }
    },
    async signOut () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      wallet.signOut()
      localStorage.setItem('auth', false)
      this.user = false
      this.$router.push(this.localePath({ path: '/' }))
    },
  },
};
</script>

<style src="~/assets/styles/components/header.scss" lang="scss" />
