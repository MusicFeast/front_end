<template>
  <div id="lastest-releases" class="divcol">
    <h2>Lastest Releases</h2>
    <section class="wrapper">
      <v-card
        v-for="(item,i) in dataLastestReleases" :key="i" color="#000">
        <v-img :src="item.img" :alt="`${item.title} image`" transition="fade-transition" :style="`--tag: '${item.state}'; --br: 15px`">
          <template #placeholder>
            <v-skeleton-loader type="card" />
          </template>
        </v-img>
        
        <div class="container-content tcenter">
          <a>{{item.title}}</a>
          <p class="p">{{item.desc}}</p>
        </div>

        <div class="center gap1 alignl" style="margin-top: 1em !important">
          <v-avatar style="border: 2px solid #fff">
            <v-img :src="item.avatar" :alt="`${item.artist} image`" transition="fade-transition">
              <template #placeholder>
                <v-skeleton-loader type="avatar" />
              </template>
            </v-img>
          </v-avatar>
          <span style="font-size: 16px">{{item.artist}}</span>
        </div>
      </v-card>
    </section>

    <v-btn class="btn align h10_em view-all__btn" style="margin-top:2em">View All</v-btn>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: "LastestReleasesSection",
  props: {
    dataLastestReleases: {
      type: Array,
      default: null,
    }
  },
  mounted() {
    this.getLastestReleases()
  },
  methods: {
    async getLastestReleases() {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO {
          series(where: {typetoken_id: "1"}, orderBy: fecha, orderDirection: desc) {
            typetoken_id
            title
            supply
            reference
            price_near
            price
            media
            id
            fecha
            extra
            description
            desc_series
            creator_id
            copies
            artist_id
          }
        }
      `;

      const res = await clientApollo.query({
        query: QUERY_APOLLO,
      })

      const data = res.data.series

      for (let i = 0; i < data.length; i++) {
        console.log(data[i])
      }

      console.log("REALS", data)
    },
  }
};
</script>

<style src="~/assets/styles/components/sections/lastest-releases.scss" lang="scss" />
