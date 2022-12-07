<template>
  <div id="contact" class="divcol center">
    <img src="~/assets/sources/images/img-parallax.jpg" alt="background">

    <h2>Contact us !</h2>

    <aside id="contact-socials-wrapper" class="center">
      <div class="center" style="gap:clamp(1em, 2.5vw, 2.5em)">
        <v-btn v-for="(item,i) in dataSocial" :key="i" icon :href="item.link" target="_blank">
          <v-icon size="clamp(2em, 2.8vw, 2.8em)">{{item.icon}}</v-icon>
        </v-btn>
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
        { icon: "mdi-instagram", link: "#" },
        { icon: "mdi-twitter", link: "#" },
        { icon: "mdi-facebook", link: "#" },
        { icon: "discord", link: "#" },
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
  }
};
</script>

<style src="~/assets/styles/pages/contact.scss" lang="scss" />
