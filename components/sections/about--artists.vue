<template>
  <div id="about--artists" class="divcol center">
    <section id="about">
      <h1>ABOUT</h1>
      <v-sheet color="transparent" class="content divcol gap1 gap2mobile">
        <div class="content-top divcol">
          <h2>MUSIC FEAST</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nulla debitis, est modi eius cupiditate nesciunt mollitia dolorum! In, 
            at! Dolor quisquam dignissimos adipisci molestias debitis esse eos sequi nisi.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nulla debitis, est modi eius cupiditate nesciunt mollitia dolorum! In, 
            at! Dolor quisquam dignissimos adipisci molestias debitis esse eos sequi nisi.
          </p>
          <a class="eliminarmobile" @click="$scrollTo('home')">More</a>
        </div>

        <div class="content-bottom divcol">
          <h2>Everyone Eats Entertainment (EEE)</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nulla debitis, est modi eius cupiditate nesciunt mollitia dolorum! In, 
            at! Dolor quisquam dignissimos adipisci molestias debitis esse eos sequi nisi.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nulla debitis, est modi eius cupiditate nesciunt mollitia dolorum! In, 
            at! Dolor quisquam dignissimos adipisci molestias debitis esse eos sequi nisi.
          </p>
          <a class="eliminarmobile" @click="$scrollTo('home')">More</a>
        </div>
      </v-sheet>
    </section>

    <div v-for="n in 2" :key="n" class="separators" />

    <section id="artists">
      <v-slide-group
        id="custome-slider-artists"
        v-model="slider"
        mandatory
        show-arrows
        center-active
      >
        <v-slide-item
          v-for="(item,i) in dataSlider"
          :key="i"
        >
          <v-card :class="{active: item.active}" :style="`--bg-image: url('${item.img}')`" :ripple="false" @click="ArrowListener(item)">
            <v-sheet>
              <div class="divcol">
                <h3>Artists n°{{i+1}}</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. sed diam nonummy nibh
                </p>
              </div>
            </v-sheet>
          </v-card>
        </v-slide-item>

        <template #prev>
          <v-btn
            v-show="showArrow"
            id="prev-button"
            icon
            class="reverse"
            @click="slider=0; showArrow = false"
          >
            <v-icon x-large>mdi-play</v-icon>
          </v-btn>
        </template>

        <template #next="{on, attrs}">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            @click="ArrowListener"
          >
            <v-icon x-large>mdi-play</v-icon>
          </v-btn>
        </template>
      </v-slide-group>

      <h1>ARTISTS</h1>
    </section>

    <v-btn class="btn h10_em view-all__btn">View All</v-btn>
  </div>
</template>

<script>
export default {
  name: "AboutXArtistsSection",
  data() {
    return {
      slider: null,
      showArrow: false,
      dataSlider: [
        { img: require('~/assets/sources/images/img-slider-1.jpg'), active: false },
        { img: require('~/assets/sources/images/img-slider-2.jpg'), active: false },
        { img: require('~/assets/sources/images/img-slider-3.jpg'), active: false },
        { img: require('~/assets/sources/images/img-slider-4.jpg'), active: false },
        { img: require('~/assets/sources/images/img-slider-5.jpg'), active: false },
        { img: require('~/assets/sources/images/img-slider-6.jpg'), active: false },
      ],
    }
  },
  methods: {
    ArrowListener(item) {
      const el = document.querySelector("#custome-slider-artists .v-slide-group__next--disabled");
      el ? this.showArrow = true : this.showArrow = false
      if (item) {
        this.dataSlider.forEach(e => {e.active = false; item.active = true})
      } else {
        this.slider++
      }
    }
  },
};
</script>

<style src="~/assets/styles/components/sections/about--artists.scss" lang="scss" />
