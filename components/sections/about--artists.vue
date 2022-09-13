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
          <a href="#" class="eliminarmobile">More</a>
        </div>

        <div class="content-bottom divcol">
          <h2>Everyone Eats Entertainment (EEE)</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nulla debitis, est modi eius cupiditate nesciunt mollitia dolorum! In, 
            at! Dolor quisquam dignissimos adipisci molestias debitis esse eos sequi nisi.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nulla debitis, est modi eius cupiditate nesciunt mollitia dolorum! In, 
            at! Dolor quisquam dignissimos adipisci molestias debitis esse eos sequi nisi.
          </p>
          <a href="#" class="eliminarmobile">More</a>
        </div>
      </v-sheet>
    </section>

    <div v-for="n in 2" :key="n" class="separators" />

    <section id="artists">
      <v-slide-group
        id="custome-slider"
        v-model="slider"
        mandatory
        show-arrows
      >
        <v-slide-item
          v-for="(item,i) in dataSlider"
          :key="i"
          v-slot="{ active, toggle }"
        >
          <v-card :class="{active: active}" :style="`--bg: url('${item.img}')`" :ripple="false" @click="toggle; slider = i">
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
            v-show="slider +1 === dataSlider.length || slider +1 === dataSlider.length-1"
            id="prev-button"
            icon
            class="reverse"
            @click="slider=0"
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
      </v-slide-group>

      <h1>ARTISTS</h1>
    </section>

    <v-btn class="btn" style="--bg: #000; --p: .5em clamp(1em, 3vw, 2.5em);--bs: 3px 3px 10px 6px rgba(0,0,0,.3)">View All</v-btn>
  </div>
</template>

<script>
export default {
  name: "AboutXArtists",
  data() {
    return {
      slider: null,
      dataSlider: [
        { img: require('~/assets/sources/images/img-slider-1.jpg') },
        { img: require('~/assets/sources/images/img-slider-2.jpg') },
        { img: require('~/assets/sources/images/img-slider-3.jpg') },
        { img: require('~/assets/sources/images/img-slider-4.jpg') },
        { img: require('~/assets/sources/images/img-slider-5.jpg') },
        { img: require('~/assets/sources/images/img-slider-6.jpg') },
      ],
    }
  },
  methods: {
  },
};
</script>

<style src="~/assets/styles/components/sections/about--artists.scss" lang="scss" />
