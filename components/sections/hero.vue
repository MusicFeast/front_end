<template>
  <div id="hero" class="divcol center overflow">
    <v-carousel
      id="custome-carousel"
      height="max-content"
      cycle
    >
      <v-carousel-item
        v-for="(item,i) in dataCarousel"
        :key="i"
        :src="item.img"
      ></v-carousel-item>
      <template #prev="{on, attrs}">
        <v-btn
          icon
          class="reverse"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon large>mdi-play</v-icon>
        </v-btn>
      </template>
      <template #next="{on, attrs}">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon large>mdi-play</v-icon>
        </v-btn>
      </template>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      dataCarousel: [
        { img: require('~/assets/sources/images/img-carousel.jpg') },
        { img: require('~/assets/sources/images/img-carousel.jpg') },
      ],
    }
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/components/sections/hero.scss" lang="scss" />
