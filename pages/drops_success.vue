<template>
  <div id="contact" class="divcol center">
    <img src="~/assets/sources/images/img-parallax.jpg" alt="background">
    <center>
      <div ref="myDiv" class="button"><h3>Congratulations you now have access to your music link, click below</h3></div>
    </center>
    <aside id="contact-socials-wrapper" class="center">
      <div class="center" style="gap:clamp(1em, 2.5vw, 2.5em)">
          <span>
            <v-btn icon href="https://drive.google.com/drive/u/0/folders/1XVcnzQL6Y2p_Mg3tq4FoI4woN8xAmtO7" target="_blank" >
              <v-icon size="clamp(4em, 3vw, 3em)"  target="_blank">mdi-folder-google-drive</v-icon>
            </v-btn>
          </span>
      </div>
    </aside>
  </div>
</template>

<script>
import party from "party-js";
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
    this.party();
    this.$refs.myDiv.click();
    setTimeout(this.$refs.myDiv.click(), 2000);
    setTimeout(this.$refs.myDiv.click(), 3000);
  },
  methods: {
    goToMail() {
      window.location.href = "mailto:musicfeast.io@gmail.com";
    },
    party() {
      document.querySelector(".button").addEventListener("click", function (e) {
          party.confetti(this, {
              count: party.variation.range(80, 140),
          });
      });
    }
  }
};
</script>

<style src="~/assets/styles/pages/contact.scss" lang="scss" />
