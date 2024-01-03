<template>
  <div id="hero" class="divcol center overflow">
    <!-- Dialogsss -->
    <v-dialog
      v-model="dialogNewCollection"
      max-width="500px"
      content-class="nft-dialog nft-dialog-profile"
      persistent
    >
      <v-btn icon class="close" @click="dialogNewCollection = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-card
        id="modalBuy"
        class="nft-dialog--content quick-help-card divcol pt-14 pb-4 pl-6 pr-6"
      >
        <!-- <h2 class="center" style="--fs: 1.6em">What do you want to do?</h2> -->

        <div class="card center divcol card-background-padding">
          <h4 class="center" style="--fs: 1.6em">Login</h4>
          <v-btn class="btn" @click="$parent.$parent.$parent.$parent.$refs.connect.modalConnect = true, dialogNewCollection = false">Login</v-btn>
        </div>

        <div class="card center divcol card-background-padding">
          <h4 class="tcenter">Explore Artists</h4>
          <v-btn class="btn" @click="$router.push('/artists'), dialogNewCollection = false"
            >Artists</v-btn
          >
        </div>

        <div class="card center divcol card-background-padding">
          <h4 class="tcenter">My Dashboard</h4>
          <v-btn class="btn" @click="$router.push('/edit-profile'), dialogNewCollection = false">Darboard</v-btn>
        </div>
      </v-card>
    </v-dialog>
    
    <v-carousel
      id="custome-carousel"
      height="max-content"
    >
      <v-carousel-item v-for="(item,i) in dataHero" :key="i">
        <v-img :src="isMobile ? item.image_mobile : item.image" alt="carousel image" transition="fade-transition">
          <template #placeholder>
            <v-skeleton-loader type="card" />
          </template>
        </v-img>
        <v-btn class="btn-carousel-absolute mt-5" @click="dialogNewCollection = true">
          Get started
        </v-btn>
      </v-carousel-item>

      <template #prev="{on, attrs}">
        <v-btn
          icon
          class="reverse"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon x-large>mdi-play</v-icon>
        </v-btn>
      </template>
      <template #next="{on, attrs}">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon x-large>mdi-play</v-icon>
        </v-btn>
      </template>
    </v-carousel>
  </div>
</template>

<script>
import isMobile from '~/mixins/isMobile'
export default {
  name: "HeroSection",
  mixins: [isMobile],
  props: {
    dataHero: {
      type: Array,
      default: null,
    }
  },
  data() {
    return {
      dialogNewCollection: false,
    }
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/components/sections/hero.scss" lang="scss" />
