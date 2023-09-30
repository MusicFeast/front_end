import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: process.env.GTAG }, // Replace with your Google Analytics Measurement ID
})
