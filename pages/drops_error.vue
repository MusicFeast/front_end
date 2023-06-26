<template>
  <div id="contact" class="divcol center">
    <img src="~/assets/sources/images/img-parallax.jpg" alt="background">
    <center>
    <h2>Sorry apparently you don't have the drop NFT</h2>
    </center>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "ContactPage",
  mixins: [computeds],
  data() {
    return {
      dataSocial: [
        // { icon: "mdi-instagram", link: "#" },
        // { icon: "mdi-twitter", link: "#" },
        // { icon: "mdi-facebook", link: "#" },
        // { icon: "discord", link: "#" },
      ],
    }
  },
  head() {
    const title = 'contact';
    return {
      title,
    }
  },
  mounted() {

  },
  methods: {
    goToMail() {
      window.location.href = "mailto:musicfeast.io@gmail.com";
    },
  }
};
</script>

<style src="~/assets/styles/pages/contact.scss" lang="scss" />
