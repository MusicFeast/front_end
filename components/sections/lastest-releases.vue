<template>
  <div id="lastest-releases">
    <h2>Lastest Releases</h2>
    <section class="wrapper">
      <v-card v-for="(item,i) in dataLastestReleases" :key="i">
        <div class="container-img" :style="`--tag: ${item.state?'Live':'Sold Out'}`">
          <img :src="item.img" :alt="`${item.title} image`">
        </div>
        
        <div class="container-content tcenter">
          <h4 class="p">{{item.title}}</h4>
          <p class="p">{{item.desc}}</p>
        </div>

        <div class="center gap1 marginaright">
          <v-avatar style="border: 2px solid #fff">
            <img :src="item.avatar" :alt="`${item.artist} image`" style="--o: cover">
          </v-avatar>
          <span>{{item.artist}}</span>
        </div>
      </v-card>
    </section>
  </div>
</template>

<script>
export default {
  name: "LastestReleases",
  data() {
    return {
      dataLastestReleases: [
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°1",
          img: require('~/assets/sources/images/img-listed-1.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: false,
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°1",
          img: require('~/assets/sources/images/img-listed-1.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: false,
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°1",
          img: require('~/assets/sources/images/img-listed-1.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: false,
        },
      ],
    }
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/components/sections/lastest-releases.scss" lang="scss" />
