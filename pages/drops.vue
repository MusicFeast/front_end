<template>
  <div id="contact" class="divcol center">
    <img src="~/assets/sources/images/img-parallax.jpg" alt="background">

    <h2>Click here to sync your NFT</h2>

    <aside id="contact-socials-wrapper" class="center">
      <div class="center" style="gap:clamp(1em, 2.5vw, 2.5em)">
          <span>
            <v-btn icon to="/drops_confirm" >
              <v-icon size="clamp(4em, 3vw, 3em)"  target="_blank">mdi-cloud-sync</v-icon>
            </v-btn>
          </span>
      </div>
    </aside>
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
