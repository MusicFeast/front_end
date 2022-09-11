<template>
  <div id="alerts">
    <v-snackbar
      v-for="(item,i) in dataAlerts" :key="i"
      v-model="item.model"
      centered top
      transition="slide-Y-reverse-transition"
      :style="`--color-snackbar: ${item.color}`"
    >
      <!-- <v-icon :style="`color: ${item.color} !important`" size="2.5rem">{{ item.icon }}</v-icon> -->
      <img :src="require(`~/assets/sources/icons/${item.icon}.svg`)" :alt="`${item.key} Icon`">
      <div class="divcol">
        <h3 class="font1">{{$t(item.title)}}</h3>
        <p class="font2 p">{{$t(item.desc)}}</p>
      </div>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "AlertsComponent",
  data() {
    return {
      alert: true,
      dataAlerts: []
    };
  },
  methods: {
    ClearAlerts() {this.dataAlerts=[]},
    Alerts(key, title, desc) {

      // clear alerts
      setTimeout(() => {
        this.ClearAlerts()
      }, 5000);

      // create alert
      let alert = {};
      if (title&&desc) {
        alert = {
          key,
          title,
          desc,
          // icon: key === 'success' ? 'mdi-check-circle' : key === 'cancel' ? 'mdi-close-circle' : null,
          icon: key === 'success' ? 'success' : key === 'cancel' ? 'cancel' : null,
          color: key === 'success' ? '#A4FDDF' : key === 'cancel' ? 'rgb(200, 0, 0)' : null,
          model: true,
        }
      } else if (title) {
        alert = {
          key,
          title,
          desc: `text${key.replace(/^\w/, (c) => c.toUpperCase())}`,
          // icon: key === 'success' ? 'mdi-check-circle' : key === 'cancel' ? 'mdi-close-circle' : null,
          icon: key === 'success' ? 'success' : key === 'cancel' ? 'cancel' : null,
          color: key === 'success' ? '#A4FDDF' : key === 'cancel' ? 'rgb(200, 0, 0)' : null,
          model: true,
        }
      } else if (desc) {
        alert = {
          key,
          title: key,
          desc,
          // icon: key === 'success' ? 'mdi-check-circle' : key === 'cancel' ? 'mdi-close-circle' : null,
          icon: key === 'success' ? 'success' : key === 'cancel' ? 'cancel' : null,
          color: key === 'success' ? '#A4FDDF' : key === 'cancel' ? 'rgb(200, 0, 0)' : null,
          model: true,
        }
      } else {
        alert = {
          key,
          title: key,
          desc: `text${key.replace(/^\w/, (c) => c.toUpperCase())}`,
          // icon: key === 'success' ? 'mdi-check-circle' : key === 'cancel' ? 'mdi-close-circle' : null,
          icon: key === 'success' ? 'success' : key === 'cancel' ? 'cancel' : null,
          color: key === 'success' ? '#A4FDDF' : key === 'cancel' ? 'rgb(200, 0, 0)' : null,
          model: true,
        }
      }
      this.dataAlerts.push(alert)
    },
  }
};
</script>

<style src="~/assets/styles/components/alerts.scss" lang="scss" />
