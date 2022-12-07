<template>
  <div id="redirection" class="divcol tcenter center" style="gap:2.8em">
    <template v-if="transaction_data">
      <div class="divcol">
        <v-icon size="80px" :color="transaction_data.state === 'cancel' ? 'var(--error)' : 'var(--success)'">
          mdi-{{transaction_data.state === 'success' ? 'check' : 'close'}}-circle
        </v-icon>
        <h3>{{transaction_data.title}}</h3>
        <p class="p">{{transaction_data.desc}}</p>
      </div>

      <div class="space" style="gap: 20px">
        <v-btn class="btn activeBtn" :ripple="false">
          Mint NFT
        </v-btn>

        <v-btn class="btn activeBtn" :ripple="false">
          Storage Settings
        </v-btn>
      </div>

      <a class="center" style="gap: 5px; --c: #b9b9b9">
        See Transaction <v-icon size="1.1em">mdi-open-in-new</v-icon>
      </a>
    </template>


    <div v-else>
      <h3>No data Available</h3>
      <v-btn
        class="btn activeBtn" :ripple="false" style="--fs: 18px; --h: 46px; --w: 120px"
        @click="$router.go(-1)">
        Go back
      </v-btn>
    </div>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "RedirectionPage",
  mixins: [computeds],
  data() {
    return {
    }
  },
  head() {
    const title = this.transaction_data.state === 'success' ? 'success transaction' : 'error transaction';
    return {
      title,
    }
  },
  computed: {
    transaction_data() {
      return JSON.parse(localStorage.getItem("transaction_data"))
    }
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="scss">
#redirection {
  height: calc(100vh - var(--h-navbar));
}
</style>
