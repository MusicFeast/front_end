<template>
  <div id="artists" class="divcol">
    <Alerts ref="alert"></Alerts>
    <ModalsQr
      ref="modalQr"
      :url="`${ioBaseUrl}/artist-details/?artist=${artistIdClicked}`"
    ></ModalsQr>

    <!-- original height 720px -->
    <v-carousel
      id="custome-carousel"
      v-model="modelCarousel"
      height="calc(var(--height) + 90px)"
      hide-delimiter-background
      :show-arrows="false"
    >
      <template v-for="(item, index) in dataArtists_carousel">
        <v-carousel-item
          v-if="
            (index + 1) % columnsCarousel() === 1 || columnsCarousel() === 1
          "
          :key="index"
        >
          <template v-for="(n, i) in columnsCarousel()">
            <template v-if="+index + i < dataArtists_carousel.length">
              <v-img
                :key="i"
                :src="dataArtists_carousel[+index + i].image"
                :alt="`${dataArtists_carousel[+index + i].name} image`"
                transition="fade-transition"
                @click="
                  $store.dispatch('goTo', {
                    key: 'artist',
                    item: dataArtists_carousel[+index + i],
                  })
                "
              >
                <template #default>
                  <v-sheet>
                    <div class="divcol">
                      <h3>{{ dataArtists_carousel[+index + i].name }}</h3>
                      <p
                        v-html="dataArtists_carousel[+index + i].description"
                      ></p>
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

    <h2
      class="Title fwrap"
      style="--fb: 200px; gap: 0.3em clamp(1em, 2vw, 2em)"
    >
      <span class="tup">artists</span>

      <Filters
        contents
        :hide="[3]"
        :search="search"
        :filter-a="filterA.list"
        @search="(model) => (search = model)"
        @filterA="(model) => (filterA.model = model)"
      />
    </h2>

    <section class="container-listed grid">
      <v-card
        v-for="(item, i) in dataArtists_pagination"
        :key="i"
        class="card divcol custome"
        :class="{ comming: item.comming }"
        @click="$store.dispatch('goTo', { key: 'artist', item })"
      >
        <v-img
          :src="item.image"
          :alt="`${item.name} image`"
          :style="item.comming ? `--tag-state: 'Coming soon` : ''"
          transition="fade-transition"
        >
          <template #placeholder>
            <v-skeleton-loader type="card" />
          </template>
        </v-img>

        <div class="container-content tcenter">
          <h5>{{ item.name }}</h5>
          <p class="p" v-html="item.description.limitString(50)"></p>
          <div class="end" style="gap: 15px">
            <v-btn class="btn" @click.stop="showQr(item)"> Show qr </v-btn>
            <v-btn
              class="btn"
              style="--bg: #fff; --c: var(--primary)"
              @click.stop="copyArtistUrl(item)"
            >
              Copy url
            </v-btn>
          </div>
        </div>
      </v-card>
    </section>

    <Pagination
      :total-pages="pagination_per_page > 50 ? 50 : pagination_per_page"
      :current-page="currentPage"
      @pagechanged="handlePageChange"
    />
  </div>
</template>

<script>
import modalsQr from '~/components/modals/modals-qr.vue'
import computeds from '~/mixins/computeds'
const pageName = 'artists'

export default {
  name: 'CollectionsPage',
  components: { modalsQr },
  mixins: [computeds],
  data() {
    return {
      modelCarousel: 0,
      dataArtists: [],
      search: '',
      filterA: {
        model: '',
        list: [6, 5, 4, 3, 2, 1],
      },
      filter: {
        model: '',
        list: ['lastest releases', 'oldest', 'coming soon'],
      },
      currentPage: localStorage.getItem('paginationPage') || 1,
      itemsPerPage: 50,
      artistIdClicked: undefined,
    }
  },
  head() {
    const title = 'Artists'
    return {
      title,
    }
  },
  computed: {
    dataArtists_carousel() {
      return this.dataArtists.filter((data) => !data.comming)
    },
    dataArtists_pagination() {
      return this.$store.getters.pagination({
        items: this.dataArtists,
        currentPage: this.currentPage,
        itemsPerPage: this.itemsPerPage,
        search: this.search,
        filterB: this.filter.model,
      })
    },
    pagination_per_page() {
      return Math.ceil(this.dataArtists.length / this.itemsPerPage)
    },
  },
  watch: {
    dataArtists_carousel(curr, old) {
      curr.length = curr.length > 50 ? 50 : curr.length
    },
  },
  mounted() {
    this.$gtag.pageview({ page_path: this.$route.path }) // Google Analytics
    this.styles()
    this.getData()

    // resize listener
    window.addEventListener('resize', this.styles)

    const storedPage = localStorage.getItem('paginationPage')
    if (storedPage) {
      this.currentPage = storedPage
    }

    window.addEventListener('beforeunload', this.clearLocalStorage)
  },
  beforeUnmount() {
    // Eliminar el evento beforeunload
    window.removeEventListener('beforeunload', this.clearLocalStorage)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.styles)
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page
      localStorage.setItem('paginationPage', page)
    },
    clearLocalStorage() {
      localStorage.removeItem('paginationPage')
    },
    changeFilter(item) {
      // console.log(item)
    },
    styles() {
      const page = document.querySelector(`#${pageName}`)
      // height h2
      document.querySelectorAll('h2.Title').forEach((h2) => {
        page.style.setProperty(
          '--h-title',
          `${h2.getBoundingClientRect().height}px`
        )
      })
      // reload carousel
      const reload = this.modelCarousel
      this.modelCarousel = -1
      this.modelCarousel = reload
    },
    getData() {
      this.$axios
        .get(`${this.baseUrl}api/v1/get-artists`)
        .then((result) => {
          result.data.forEach((e) => {
            e.banner = this.baseUrl + e.banner
            e.id = e.id_collection
            e.image = e.image
              ? this.baseUrl + e.image
              : require('~/assets/sources/avatars/avatar.png')
          })
          console.log('ARTISTAS', result.data)
          result.data.sort((p1, p2) =>
            p1.order_list > p2.order_list
              ? 1
              : p1.order_list < p2.order_list
              ? -1
              : 0
          )
          result.data.sort((a, b) => {
            if (a.comming === b.comming) {
              return 0
            } else if (a.comming) {
              return 1
            } else {
              return -1
            }
          })

          this.dataArtists = result.data
          this.itemsPerPage = Math.min(50, this.dataArtists.length)
          // console.log(this.dataArtists)
        })
        .catch((err) => {
          // this.$alert("cancel", {desc: err.message})
          console.error(err)
        })
    },

    columnsCarousel() {
      if (window.innerWidth >= 1800) {
        return 6
      } else if (window.innerWidth >= 1545) {
        return 5
      } else if (window.innerWidth >= 1300) {
        return 4
      } else if (window.innerWidth >= 1000) {
        return 3
      } else if (window.innerWidth >= 880) {
        return 2
      } else if (window.innerWidth >= 850) {
        return 6
      } else if (window.innerWidth >= 730) {
        return 5
      } else if (window.innerWidth >= 580) {
        return 4
      } else if (window.innerWidth >= 430) {
        return 3
      } else if (window.innerWidth >= 370) {
        return 2
      } else {
        return 1
      }
    },
    showQr(item) {
      this.artistIdClicked = item.id
      this.$refs.modalQr.qrModals = true
    },
    copyArtistUrl(item) {
      ;`${this.ioBaseUrl}/artist-details?artist=${item.id}`.copyToClipboard()
      this.$refs.alert.GenerateAlert(
        'success',
        'copied',
        'you have copied to clipboard'
      )
    },
  },
}
</script>

<style src="~/assets/styles/pages/artists.scss" lang="scss" />
