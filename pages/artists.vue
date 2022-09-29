<template>
  <div id="artists" class="divcol">
    <v-carousel
      id="custome-carousel"
      v-model="modelCarousel"
      height="700px"
      hide-delimiter-background
      :show-arrows="false"
    >
      <template v-for="(item, index) in dataCarousel">
        <v-carousel-item v-if="(index + 1) % columnsCarousel() === 1 || columnsCarousel() === 1" :key="index">
          <template v-for="(n,i) in columnsCarousel()">
            <template v-if="(+index + i) < dataCarousel.length">
              <v-card
                :key="i" :class="{active: dataCarousel[+index + i].active}" :style="`--bg-image: url('${dataCarousel[+index + i].img}')`" :ripple="false"
                @click="$router.push(localePath(`/artist-details`))">
                <v-sheet>
                  <div class="divcol">
                    <h3>{{dataCarousel[+index + i].name}} n°{{i+1}}</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. sed diam nonummy nibh
                    </p>
                  </div>
                </v-sheet>
              </v-card>
            </template>
          </template>
        </v-carousel-item>
      </template>
    </v-carousel>

    <h2 class="Title fwrap" style="--fb: 200px; gap: .3em clamp(1em, 2vw, 2em)">
      <span class="tup">artists</span>

      <v-text-field
        v-model="search"
        hide-details solo
        append-icon="mdi-magnify"
        label="Search for NFTs Name, Artist, Event &amp; Collections"
        style="--p: 0 1em 0 2em"
        class="search"
      ></v-text-field>

      <v-select
        v-model="filter.model"
        :items="filter.list"
        hide-details solo
        label="Sort by"
        style="--p: 0 1em 0 2em"
      ></v-select>
    </h2>

    <section class="container-listed grid" style="--gtc: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); gap: 2em">
      <v-card v-for="(item,i) in dataListed" :key="i" class="card divcol" :to="localePath('/artist-details')">
        <div class="container-img" :style="`${item.state ? `--tag-state: '${item.state}'` : ''}`" :class="{live: item.state==='live'}">
          <img :src="item.img" :alt="`${item.name} image`" style="--w: 100%; --br: 10px">
        </div>
        
        <div class="container-content tcenter">
          <h5>{{item.name}}</h5>
          <p>{{item.desc}}</p>
        </div>
      </v-card>
    </section>

    <v-btn-toggle v-model="pagination" mandatory class="pagination align" background-color="rgba(0, 0, 0, .4)" active-class="activeClass">
      <button
        :style="pagination > 0 ? 'opacity: 1' : 'opacity: .5'"
        @click="pagination > 0 ? pagination-- : ''"
      >
        <v-icon size="2em" class="reverse">mdi-play</v-icon>
      </button>

      <v-btn v-for="n in 4" :key="n" text>{{n}}</v-btn>

      <button
        :style="pagination < 3 ? 'opacity: 1' : 'opacity: .5'"
        @click="pagination < 3 ? pagination++ : ''"
      >
        <v-icon size="2em">mdi-play</v-icon>
      </button>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  name: "CollectionsPage",
  data() {
    return {
      modelCarousel: 0,
      dataCarousel: [
        { img: require('~/assets/sources/images/img-slider-1.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-2.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-3.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-4.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-5.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-6.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-1.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-2.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-3.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-4.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-5.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-6.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-1.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-2.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-3.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-4.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-5.jpg'), name: "Artists", active: false },
        { img: require('~/assets/sources/images/img-slider-6.jpg'), name: "Artists", active: false },
      ],
      search: "",
      filter: {
        model: "",
        list: ["Lastest Releases", "Newest", "Oldest", "Comming Soon", "Lorem ipsum", "Lorem ipsum"],
      },
      dataListed: [
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
          state: "comming soon"
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
          state: "comming soon"
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
          state: "comming soon"
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
          state: "comming soon"
        },
      ],
      pagination: 0,
    }
  },
  mounted() {
    const pageName = 'artists';
    const page = document.querySelector(`#${pageName}`);
    
    // listener to h2
    const heightH2 = () => {
      document.querySelectorAll('h2.Title').forEach(e => {
        const h2Rect = e.getBoundingClientRect().height;
        page.style.setProperty('--h-title', `${h2Rect}px`)
      });
    };
    heightH2();
    
    // resize listener
    window.addEventListener('resize', () => {
      if (this.$route.path===`/${pageName}`) {
        heightH2();

        // listener reload columns in caraousel
        const reload = this.modelCarousel;
        this.modelCarousel = -1;
        this.modelCarousel = reload;
      };
    });
  },
  methods: {
    columnsCarousel() {
      if (window.innerWidth >= 1600) {
        return 7
      } else if (window.innerWidth >= 1345) {
        return 6
      } else if (window.innerWidth >= 1000) {
        return 5
      } else if (window.innerWidth >= 500) {
        return 4
      } else if (window.innerWidth >= 320) {
        return 3
      } else {
        return 2
      }
    },
  }
};
</script>

<style src="~/assets/styles/pages/artists.scss" lang="scss" />
