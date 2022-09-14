<template>
  <div id="header">
    <MenuHeader ref="menu"></MenuHeader>
    <v-app-bar id="headerApp" height="100px" fixed class="font2 isolate">
      <a id="logoApp" class="center" :href="`${$i18n.locale}/#`">
        <img src="~/assets/sources/logos/logo.svg" alt="logo" class="eliminarmobile" style="--w: 100%">
        <img src="~/assets/sources/logos/logo-mobile.svg" alt="logo" class="vermobile" style="--w: 100%">
      </a>

      <section class="center gap2 eliminarmobile">
        <a v-for="(item,i) in dataLinks" :key="i" @click="$scrollTo(item.name.toLowerCase())">{{item.name}}</a>
      </section>

      <section class="center">
        <v-btn class="btn eliminarmobile" style="--p: .5em clamp(1em, 3vw, 2.5em);" @click="signIn()">Connect</v-btn>

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
      dataLinks: [
        { name: "Home", to: "#" },
        { name: "About", to: "#about" },
        { name: "Artists", to: "#artists" },
        { name: "News", to: "#news" },
        { name: "Lastest Releases", to: "#lastest-releases" },
        { name: "Contact", to: "#contact" },
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
