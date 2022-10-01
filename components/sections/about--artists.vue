<template>
  <div id="about--artists" class="divcol center">
    <section id="about--home">
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
          <a class="eliminarmobile" @click="$router.push(localePath('/about'))">More</a>
        </div>

        <div class="content-bottom divcol">
          <h2>Everyone Eats Entertainment (EEE)</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nulla debitis, est modi eius cupiditate nesciunt mollitia dolorum! In, 
            at! Dolor quisquam dignissimos adipisci molestias debitis esse eos sequi nisi.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nulla debitis, est modi eius cupiditate nesciunt mollitia dolorum! In, 
            at! Dolor quisquam dignissimos adipisci molestias debitis esse eos sequi nisi.
          </p>
          <a class="eliminarmobile" @click="$router.push(localePath('/about'))">More</a>
        </div>
      </v-sheet>
    </section>

    <div v-for="n in 2" :key="n" class="separators" />

    <section id="artists--home">
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
          <v-card
            :class="{active: item.active}" :style="`--bg-image: url('${item.img}')`" :ripple="false"
            @click="goToArtistDetails(item)">
            <v-sheet>
              <div class="divcol">
                <h3>{{item.name}} n°{{i+1}}</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. sed diam nonummy nibh
                </p>
              </div>
            </v-sheet>
          </v-card>
        </v-slide-item>

        <template #prev="{ on, attrs}">
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
      </v-slide-group>

      <h1>ARTISTS</h1>
    </section>

    <v-btn class="btn h10_em view-all__btn" :to="localePath('/artists')">View All</v-btn>
  </div>
</template>

<script>
export default {
  name: "AboutXArtistsSection",
  data() {
    return {
      slider: null,
      dataSlider: [
        { img: require('~/assets/sources/images/img-slider-1.jpg'), name: "Artist Name or nickname", active: false },
        { img: require('~/assets/sources/images/img-slider-2.jpg'), name: "Artist Name or nickname", active: false },
        { img: require('~/assets/sources/images/img-slider-3.jpg'), name: "Artist Name or nickname", active: false },
        { img: require('~/assets/sources/images/img-slider-4.jpg'), name: "Artist Name or nickname", active: false },
        { img: require('~/assets/sources/images/img-slider-5.jpg'), name: "Artist Name or nickname", active: false },
        { img: require('~/assets/sources/images/img-slider-6.jpg'), name: "Artist Name or nickname", active: false },
      ],
    }
  },
  methods: {
    goToArtistDetails(item) {
      console.log(item)
      localStorage.setItem("artist", JSON.stringify(item))
      this.$router.push(this.localePath(`/artist-details/`))
    },
  },
};
</script>

<style src="~/assets/styles/components/sections/about--artists.scss" lang="scss" />
