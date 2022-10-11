<template>
  <div id="lastest-releases" class="divcol">
    <h2>Lastest Releases</h2>
    <section class="wrapper">
      <v-card
        v-for="(item,i) in dataLastestReleases" :key="i" color="#000"
        @click="$store.dispatch('goTo', {key: 'collection', item, id: item.title})">
        <div class="container-img" :style="`--tag: '${item.state}'`">
          <img :src="item.img" :alt="`${item.title} image`" style="--w: 100%; --br: 15px">
        </div>
        
        <div class="container-content tcenter">
          <a>{{item.title}}</a>
          <p class="p">{{item.desc}}</p>
        </div>

        <div class="center gap1 alignl">
          <v-avatar style="border: 2px solid #fff">
            <img :src="item.avatar" :alt="`${item.artist} image`" style="--of: cover">
          </v-avatar>
          <span>{{item.artist}}</span>
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
