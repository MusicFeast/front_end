<template>
  <div id="artists" class="divcol">
    <v-carousel
      id="custome-carousel"
      v-model="modelCarousel"
      height="720px"
      hide-delimiter-background
      :show-arrows="false"
    >
      <template v-for="(item, index) in dataArtists">
        <v-carousel-item v-if="(index + 1) % columnsCarousel() === 1 || columnsCarousel() === 1" :key="index">
          <template v-for="(n,i) in columnsCarousel()">
            <template v-if="(+index + i) < dataArtists.length">
              <v-card
                :key="i" :class="{active: dataArtists[+index + i].active}" :style="`--bg-image: url('${dataArtists[+index + i].image}')`" :ripple="false"
                @click="$store.dispatch('goTo', {key: 'artist', item: dataArtists[+index + i]})">
                <v-sheet>
                  <div class="divcol">
                    <h3>{{dataArtists[+index + i].name}}</h3>
                    <p>
                      {{dataArtists[+index + i].description}}
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
      <v-card
        v-for="(item,i) in dataArtists_pagination" :key="i" class="card divcol custome" :class="{comming: item.comming}"
        @click="$store.dispatch('goTo', {key: 'artist', item})">
        <div class="container-img" :style="item.comming ? `--tag-state: 'Comming soon` : ''">
          <img :src="item.image" :alt="`${item.name} image`">
        </div>
        
        <div class="container-content tcenter">
          <h5>{{item.name}}</h5>
          <p class="p">
            {{item.description}}
          </p>
        </div>
      </v-card>
    </section>

    <pagination
      :total-pages="pagination_per_page"
      :per-page="pagination_per_page"
      :current-page="current_page"
      @pagechanged="(page) => current_page = page"
    />
  </div>
</template>

<script>
export default {
  name: "CollectionsPage",
  data() {
    return {
      modelCarousel: 0,
      dataArtists: [],
      search: "",
      filter: {
        model: "",
        list: ["Lastest Releases", "Newest", "Oldest", "Comming Soon", "Lorem ipsum", "Lorem ipsum"],
      },
      current_page: 1,
      items_per_page: 10,
    }
  },
  head() {
    const title = "Artists"
    return {
      title,
    }
  },
  computed: {
    dataArtists_pagination() {
      return this.dataArtists.slice((this.current_page - 1) * this.items_per_page, this.current_page * this.items_per_page)
    },
    pagination_per_page() {
      return Math.ceil(this.dataArtists.length / this.items_per_page)
    }
  },
  mounted() {
    const baseUrl = this.$axios.defaults.baseURL;
    
    // get artists
    this.$axios.get(`${baseUrl}api/v1/get-artists`)
      .then(fetch => {
        fetch.data.forEach(e => {e.image = baseUrl+e.image});
        this.dataArtists = fetch.data
      }).catch(error => {
        this.$alert("cancel", {desc: error.message})
        console.error(error);
      }
    );

    // styles //
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
      if (this.$route.path.includes(`/${pageName}`)) {
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
