<template>
  <div id="lastest-releases" class="divcol">
    <h2>Lastest Releases</h2>
    <section class="wrapper">
      <v-card v-for="(item,i) in dataLastestReleases" :key="i" color="#000">
        <div class="container-img" :style="`--tag: '${item.state}'`" :class="{live: item.state==='live'}">
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
  data() {
    return {
      dataLastestReleases: [
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°1",
          img: require('~/assets/sources/images/img-listed-1.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "live",
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°2",
          img: require('~/assets/sources/images/img-listed-2.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "live",
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°3",
          img: require('~/assets/sources/images/img-listed-3.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "sold out",
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°4",
          img: require('~/assets/sources/images/img-listed-4.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "live",
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°5",
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "sold out",
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°6",
          img: require('~/assets/sources/images/img-listed-6.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "live",
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°7",
          img: require('~/assets/sources/images/img-listed-7.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "sold out",
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°8",
          img: require('~/assets/sources/images/img-listed-8.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "sold out",
        },
      ],
    }
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/components/sections/lastest-releases.scss" lang="scss" />
