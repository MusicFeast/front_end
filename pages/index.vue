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
      dataHero: [
        { img: require('~/assets/sources/images/img-carousel.png') },
        { img: require('~/assets/sources/images/img-carousel.png') },
        { img: require('~/assets/sources/images/img-carousel.png') },
        { img: require('~/assets/sources/images/img-carousel.png') },
        { img: require('~/assets/sources/images/img-carousel.png') },
      ],
      dataArtists: [
        {
          img: require('~/assets/sources/images/img-slider-1.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. sed diam nonummy nibh",
          active: false,
        },
        {
          img: require('~/assets/sources/images/img-slider-2.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. sed diam nonummy nibh",
          active: false,
        },
        {
          img: require('~/assets/sources/images/img-slider-3.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. sed diam nonummy nibh",
          active: false,
        },
        {
          img: require('~/assets/sources/images/img-slider-4.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. sed diam nonummy nibh",
          active: false,
        },
        {
          img: require('~/assets/sources/images/img-slider-5.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. sed diam nonummy nibh",
          active: false,
        },
        {
          img: require('~/assets/sources/images/img-slider-6.jpg'),
          name: "Artist Name or nickname",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. sed diam nonummy nibh",
          active: false,
        },
      ],
      dataLastestReleases: [
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°1",
          img: require('~/assets/sources/images/img-listed-1.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "live",
          event: "toronto",
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°2",
          img: require('~/assets/sources/images/img-listed-2.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "live",
          event: "miami",
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°3",
          img: require('~/assets/sources/images/img-listed-3.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "sold out",
          event: "madrid",
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°4",
          img: require('~/assets/sources/images/img-listed-4.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "live",
          event: "toronto",
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°5",
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "sold out",
          event: "madrid",
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°6",
          img: require('~/assets/sources/images/img-listed-6.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "live",
          event: "miami",
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°7",
          img: require('~/assets/sources/images/img-listed-7.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "sold out",
          event: "madrid",
        },
        {
          avatar: require("~/assets/sources/images/avatar.jpg"),
          artist: "Artist n°8",
          img: require('~/assets/sources/images/img-listed-8.jpg'),
          title: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet,",
          state: "sold out",
          event: "toronto",
        },
      ],
      dataNews: [
        {
          img: require("~/assets/sources/images/img-news-1.jpg"),
          name: "Lorem ipsum dolor sit amet,",
          title2: "title 2",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat atque, possimus fugiat iste unde? Dolorum iusto nihil, officia ipsam quasi voluptas unde, neque, quam veritatis animi dolores rem recusandae."
        },
        {
          img: require("~/assets/sources/images/img-news-2.jpg"),
          name: "Lorem ipsum dolor sit amet,",
          title2: "title 2",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat atque, possimus fugiat iste unde? Dolorum iusto nihil, officia ipsam quasi voluptas unde, neque, quam veritatis animi dolores rem recusandae."
        },
        {
          img: require("~/assets/sources/images/img-news-2.jpg"),
          name: "Lorem ipsum dolor sit amet,",
          title2: "title 2",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat atque, possimus fugiat iste unde? Dolorum iusto nihil, officia ipsam quasi voluptas unde, neque, quam veritatis animi dolores rem recusandae."
        },
      ],
    }
  },
  head() {
    const title = 'Home';
    return {
      title,
    }
  },
  mounted() {
    // this.$axios.post("")
    //   .then((data) => {
    //     console.log(data)
    //   }).catch((error) => console.error(error)
    // )
  },
  methods: {
  }
};
</script>
