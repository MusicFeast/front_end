<template>
  <div id="home" class="divcol" style="font-size: 16px; gap:4em">
    <SectionsHero></SectionsHero>
    <SectionsAboutArtists></SectionsAboutArtists>
    <SectionsJoin></SectionsJoin>
    <SectionsLastestReleases></SectionsLastestReleases>
    <SectionsNews></SectionsNews>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      dataHero: [],
      dataArtists: [],
      dataLastestReleases: [],
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
  },
  methods: {
  }
};
</script>
