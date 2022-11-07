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
              <v-img
                :key="i" :src="dataArtists[+index + i].image" :alt="`${dataArtists[+index + i].name} image`" transition="fade-transition"
                @click="$store.dispatch('goTo', {key: 'artist', item: dataArtists[+index + i]})"
              >
                <template #default>
                  <v-sheet>
                    <div class="divcol">
                      <h3>{{dataArtists[+index + i].name}}</h3>
                      <p>
                        {{dataArtists[+index + i].description}}
                      </p>
                    </div>
                  </v-sheet>
                </template>
                <template #placeholder>
                  <v-skeleton-loader width="100%" height="100%" type="card" />
                </template>
              </v-img>
            </template>
          </template>
        </v-carousel-item>
      </template>
    </v-carousel>

    <h2 class="Title fwrap" style="--fb: 200px; gap: .3em clamp(1em, 2vw, 2em)">
      <span class="tup">artists</span>

      <Filters
        contents
        :hide="[2]"
        :search="search"
        :filter-b="filter.list"
        @search="(model) => search = model"
        @filterB="(model) => filter.model = model"
      />
    </h2>

    <section class="container-listed grid">
      <v-card
        v-for="(item,i) in dataArtists_pagination" :key="i" class="card divcol custome" :class="{comming: item.comming}"
        @click="$store.dispatch('goTo', {key: 'artist', item})">
        <v-img
          :src="item.image" :alt="`${item.name} image`" :style="item.comming ? `--tag-state: 'Comming soon` : ''"
          transition="fade-transition">
          <template #placeholder>
            <v-skeleton-loader type="card" />
          </template>
        </v-img>
        
        <div class="container-content tcenter">
          <h5>{{item.name}}</h5>
          <p class="p">
            {{item.description}}
          </p>
        </div>
      </v-card>
    </section>

    <Pagination
      :total-pages="pagination_per_page"
      :current-page="currentPage"
      @pagechanged="(page) => currentPage = page"
    />
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
const pageName = 'artists';

export default {
  name: "CollectionsPage",
  mixins: [computeds],
  data() {
    return {
      modelCarousel: 0,
      dataArtists: [],
      search: "",
      filter: {
        model: "",
        list: ["lastest releases", "newest", "oldest", "comming soon", "lorem ipsum", "lorem ipsum"],
      },
      currentPage: 1,
      itemsPerPage: 10,
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
      return this.$store.getters.pagination({
        items: this.dataArtists, currentPage: this.currentPage, itemsPerPage: this.itemsPerPage,
        search: this.search, filterB: this.filter.model
      })
    },
    pagination_per_page() {
      return Math.ceil(this.dataArtists.length / this.itemsPerPage)
    },
  },
  mounted() {
    this.styles();
    this.getData();

    // resize listener
    window.addEventListener('resize', this.styles);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.styles);
  },
  methods: {
    styles() {
      const page = document.querySelector(`#${pageName}`);
      // height h2
      document.querySelectorAll('h2.Title').forEach(h2 => {
        page.style.setProperty('--h-title', `${h2.getBoundingClientRect().height}px`)
      });
      // reload carousel
      const reload = this.modelCarousel;
      this.modelCarousel = -1;
      this.modelCarousel = reload;
    },
    getData() {
      this.$axios.get(`${this.baseUrl}api/v1/get-artists`)
        .then(fetch => {
          fetch.data.forEach(e => {
            e.banner = this.baseUrl+e.banner;
            e.image = e.image ? this.baseUrl+e.image : require('~/assets/sources/images/avatar.png');
          });
          this.dataArtists = fetch.data
        }).catch(error => {
          this.$alert("cancel", {desc: error.message})
          console.error(error);
        }
      );
    },
    columnsCarousel() {
      if (window.innerWidth >= 1600) {
        return 7
      } else if (window.innerWidth >= 1345) {
        return 6
      } else if (window.innerWidth >= 1000) {
        return 5
      } else if (window.innerWidth >= 800) {
        return 4
      } else if (window.innerWidth >= 550) {
        return 3
      } else if (window.innerWidth >= 370) {
        return 2
      } else {
        return 1
      }
    },
  }
};
</script>

<style src="~/assets/styles/pages/artists.scss" lang="scss" />
