<template>
  <div id="profile" class="divcol">
    <h2 class="Title tup">chats</h2>
    <center>
      <p class="mb-8 mt-8 font20">
        Welcome to the Music Feast Chat! In order to participate in the chat and
        interact with the community, please make sure you are logged in to your
        account. Logging in allows us to provide you with a secure and
        personalized chat experience. If you don't have an account yet, you can
        easily create one by clicking on the 'Log In' button. Thank you for
        choosing Music Feast and we look forward to chatting with you!
      </p>
    </center>
    <center>
      <a href="quick-tip-help-chat" target="_blank"
        ><p class="mb-8 mt-8 font20">Learn here how the chat works</p></a
      >
    </center>
    <!-- <v-expansion-panels class="custome-expansion" style="margin-bottom: 6em">
      <v-expansion-panel v-for="(item,i) in dataChats" :key="i">
        <v-expansion-panel-header expand-icon="mdi-menu-down" class="bold" @click="toLink()">
          <div class="acenter" style="gap:.5em" href="https://discord.gg/9KB3gjJkWJ" target="_blank">
            <v-icon size="1.5em">{{item.icon}}</v-icon>
            <span class="tcap">{{item.chat}}</span>
          </div>
        </v-expansion-panel-header>
      </v-expansion-panel>
    </v-expansion-panels> -->
    <v-container v-if="server_dc">
      <v-row no-gutters>
        <v-col cols="12" sm="12" xs="4" md="12" lg="12" xl="12">
          <widgetbot
            :server="server_dc"
            :channel="channel_dc"
            width="100%"
            height="62.5em"
          ></widgetbot>
        </v-col>
      </v-row>
    </v-container>
    <ComunityLayout></ComunityLayout>
    <!-- <script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script> -->
  </div>
</template>

<script>
// import { query } from 'firebase/firestore'
import computeds from '~/mixins/computeds'
import styles from '~/mixins/styles'

export default {
  name: 'ProfilePage',
  mixins: [computeds, styles],
  data() {
    return {
      server_dc: null,
      channel_dc: null,
      offerBtn: false,
      pageName: 'profile',
      dataChats: [
        { icon: 'discord', chat: 'Chats Artists' },
        // { icon: "discord", chat: "discord artist name 2" },
        // { icon: "discord", chat: "discord artist name 3" },
      ],
      isAdmin: false,
    }
  },
  head() {
    const title = 'Profile'
    return {
      title,
    }
  },
  async mounted() {
    this.$gtag.pageview({ page_path: this.$route.path }) // Google Analytics

    this.server_dc = process.env.SERVER_DC
    this.channel_dc = process.env.CHANNEL_DC
    await this.getIsAdmin()
    this.getChats()
    // this.getChatArtist()
    // this.setProfile();
  },
  methods: {
    getChatArtist() {
      this.$fire.firestore.collection('ARTISTS').onSnapshot((snapshot) => {
        const postData = []
        snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }))
      })
    },
    async getChats2() {
      const accountId = this.$ramper.getAccountId()
      // get data user
      await this.$axios
        .post(`${this.baseUrl}api/v1/get-chats-enabled/`, { wallet: accountId })
        .then((result) => {
          this.dataProfits.chats = result.data.length
        })
        .catch((err) => {
          this.$alert('cancel', { desc: err.message })
          console.error(err)
        })
    },
    async getIsAdmin() {
      if (this.$ramper.getAccountId()) {
        await this.$axios
          .post(`${this.baseUrl}api/v1/is-admin/`, {
            admin: this.$ramper.getAccountId(),
          })
          .then((result) => {
            this.isAdmin = result.data
            // this.$store.commit("setIsAdmin", result.data);
          })
          .catch(() => {
            // this.$alert("cancel", {desc: err.message})
            // console.error(err);
            this.isAdmin = false
          })
      }
    },
    getChats() {
      this.$fire.firestore.collection('ARTISTS').onSnapshot((snapshot) => {
        snapshot.forEach(async (doc) => {
          const item = { ...doc.data(), id: doc.id }
          if (
            this.isAdmin &&
            (item.id_collection || item.id_collection === 0) &&
            this.$ramper.getAccountId()
          ) {
            this.dataProfits.chats = Number(this.dataProfits.chats) + 1
          } else if (
            (await this.validateTierFn(item.id_collection, '1', '1')) ||
            (item.id_collection === 0 &&
              (item.id_collection || item.id_collection === 0) &&
              this.$ramper.getAccountId())
          ) {
            this.dataProfits.chats = Number(this.dataProfits.chats) + 1
          }
        })
      })
    },
  },
}
</script>

<style src="~/assets/styles/pages/profile.scss" lang="scss" />
