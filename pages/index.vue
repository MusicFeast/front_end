<template>
  <div id="home" class="divcol" style="font-size: 16px; gap:4em">
    <SectionsHero :data-hero="dataHero"></SectionsHero>
    <SectionsAboutArtists :data-artists="dataArtists"></SectionsAboutArtists>
    <SectionsJoin></SectionsJoin>
    <SectionsLastestReleases :data-lastest-releases="dataLastestReleases"></SectionsLastestReleases>
    <SectionsNews :data-news="dataNews"></SectionsNews>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      dataHero: [],
      dataArtists: [],
      dataLastestReleases: [
        {
          avatar: require("~/assets/sources/images/avatar.png"),
          artist: "Artist n°1",
          img: require('~/assets/sources/images/img-listed-1.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "live",
          event: "toronto",
        },
        {
          avatar: require("~/assets/sources/images/avatar.png"),
          artist: "Artist n°2",
          img: require('~/assets/sources/images/img-listed-2.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "live",
          event: "miami",
        },
        {
          avatar: require("~/assets/sources/images/avatar.png"),
          artist: "Artist n°3",
          img: require('~/assets/sources/images/img-listed-3.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "sold out",
          event: "madrid",
        },
        {
          avatar: require("~/assets/sources/images/avatar.png"),
          artist: "Artist n°4",
          img: require('~/assets/sources/images/img-listed-4.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "live",
          event: "toronto",
        },
        {
          avatar: require("~/assets/sources/images/avatar.png"),
          artist: "Artist n°5",
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "sold out",
          event: "madrid",
        },
        {
          avatar: require("~/assets/sources/images/avatar.png"),
          artist: "Artist n°6",
          img: require('~/assets/sources/images/img-listed-6.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "live",
          event: "miami",
        },
        {
          avatar: require("~/assets/sources/images/avatar.png"),
          artist: "Artist n°7",
          img: require('~/assets/sources/images/img-listed-7.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "sold out",
          event: "madrid",
        },
        {
          avatar: require("~/assets/sources/images/avatar.png"),
          artist: "Artist n°8",
          img: require('~/assets/sources/images/img-listed-8.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "sold out",
          event: "toronto",
        },
      ],
      dataNews: [],
    }
  },
  head() {
    const title = 'Home';
    return {
      title,
    }
  },
  mounted() {
    const baseUrl = this.$axios.defaults.baseURL;
    
    // get carousel
    this.$axios.get(`${baseUrl}api/v1/get-carousel`)
      .then(fetch => {
        fetch.data.forEach(e => {e.image = baseUrl+e.image});
        this.dataHero = fetch.data
      }).catch(error => {
        this.$alert("cancel", {desc: error.message})
        console.error(error);
      }
    );
    
    // get artists
    this.$axios.get(`${baseUrl}api/v1/get-artists-home`)
      .then(fetch => {
        fetch.data.forEach(e => {e.image = baseUrl+e.image});
        this.dataArtists = fetch.data
      }).catch(error => {
        this.$alert("cancel", {desc: error.message})
        console.error(error);
      }
    );
    
    // get news
    this.$axios.get(`${baseUrl}api/v1/get-news`)
      .then(fetch => {
        fetch.data.forEach(e => {e.image = baseUrl+e.image});
        this.dataNews = fetch.data
      }).catch(error => {
        this.$alert("cancel", {desc: error.message})
        console.error(error);
      }
    );
  },
  methods: {
  }
};
</script>
