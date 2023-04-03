<template>
  <div id="artist-details" class="divcol">
  </div>
</template>

<script>
export default {
  name: "CollectionDetailsPage",
  head() {
    const title = "Artist Details"
    return {
      title,
    }
  },
  created() {
    localStorage.setItem("artist", this.$route.params.id.split(':')[1].split("=")[1])
    this.$router.push(this.localePath('/artists-details'))
  },
};
</script>
