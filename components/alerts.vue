<template>
  <div id="alerts">
    <v-snackbar
      v-for="(item,i) in dataAlerts" :key="i"
      v-model="item.model"
      centered
      top
      transition="slide-Y-reverse-transition"
      :style="`--color-snackbar: ${item.color}`"
    >
      <!-- <v-icon :color="item.color" size="3.5em">{{ item.icon }}</v-icon> -->
      <!-- <img :src="require(`~/assets/sources/icons/${item.icon}.svg`)" :alt="`${item.icon} Icon`"> -->
      <div class="center divcol">
        <h3 class="font1">{{item.title === item.key ? $t(item.title) : item.title}}</h3>
        <p class="font2 p">{{item.desc === `text${item.key.replace(/^\w/, (c) => c.toUpperCase())}` ? $t(item.desc) : item.desc}}</p>
        <template v-if="item.hash">
          <p>Transaction Hash: </p>
          <a :href="getHashTx(item.hash)" target="_blank">
            <p style="color:blue !important">{{limitStr(item.hash, 57)}}</p>
          </a>
        </template>
      </div>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "AlertsComponent",
  data() {
    return {
      dataAlerts: []
    };
  },
  methods: {
    GenerateAlert(
      key, title = key,
      desc = `text${key.replace(/^\w/, c => c.toUpperCase())}`,
      hash,
      color = key === 'success' ? '#A4FDDF' : 'rgb(200, 0, 0)'
    ) {
      if (hash === undefined) {
        hash = null
      }
      // if (hash) {
      //   hash = "https://explorer.testnet.near.org/transactions/" + hash
      // }
      // // create alert
      const alert = {
        key, title, desc, hash, color, model: true,
        icon: key // ---> if img tag
        // icon: key === 'success' ? 'mdi-check-circle' : 'mdi-close-circle', // ---> if mdi icon
      }
      if (alert.bottom) {alert.top = false}
      this.dataAlerts.push(alert)
      // clear alerts
      const num = alert.hash ? 10000 : 5000
      setTimeout(() => this.dataAlerts.shift(), num);
    },
    getHashTx(hash) {
      if (process.env.VUE_APP_NETWORK === "mainnet") {
        return "https://nearblocks.io/txns/" + hash
      } else {
        return "https://testnet.nearblocks.io/txns/" + hash
      }
    },
    limitStr(item, num) {
      if (item) {
        if (item.length > num) {
          return item.substring(0, num) + "..."
        }
      }
      return item
    },
  }
};
</script>

<style src="~/assets/styles/components/alerts.scss" lang="scss" />
