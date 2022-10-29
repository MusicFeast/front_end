<template>
  <div id="hero" class="divcol center overflow">
    <v-carousel
      id="custome-carousel"
      height="max-content"
    >
      <template v-for="(item,i) in dataHero">
        <v-carousel-item
          v-if="item.image" :key="i"
          :src="item.image"
        ></v-carousel-item>
        <!-- <v-skeleton-loader
          v-else :key="item.image"
          type="card"
        ></v-skeleton-loader> -->
      </template>

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
export default {
  name: "HeroSection",
  props: {
    dataHero: {
      type: Array,
      default: null,
    }
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/components/sections/hero.scss" lang="scss" />
