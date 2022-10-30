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
          <span class="h10_em">{{item.artist}}</span>
        </div>
      </v-card>
    </section>

    <v-btn class="btn align h10_em view-all__btn" style="margin-top:2em">View All</v-btn>
  </div>
</template>

<script>
export default {
  name: "LastestReleasesSection",
  props: {
    dataLastestReleases: {
      type: Array,
      default: null,
    }
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/components/sections/lastest-releases.scss" lang="scss" />
