<template>
  <div id="contact" class="divcol center">
    <img src="~/assets/sources/images/img-parallax.jpg" alt="background" />

    <h2>Contact us!</h2>

    <aside id="contact-socials-wrapper" class="center">
      <div class="center" style="gap: clamp(1em, 2.5vw, 2.5em)">
        <span v-for="(item, i) in dataSocial" :key="i">
          <span v-if="item.icon === 'email'">
            <v-btn icon @click="goToMail()">
              <v-icon size="clamp(2em, 2.8vw, 2.8em)">{{ item.icon }}</v-icon>
            </v-btn>
          </span>
          <span v-else>
            <v-btn icon :href="item.to" target="_blank">
              <v-icon
                size="clamp(2em, 2.8vw, 2.8em)"
                :href="item.to"
                target="_blank"
                >{{ item.icon }}</v-icon
              >
            </v-btn>
          </span>
        </span>
      </div>
    </aside>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: 'ContactPage',
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
    const title = 'contact'
    return {
      title,
    }
  },
  mounted() {
    this.$gtag.pageview({ page_path: this.$route.path }) // Google Analytics
    this.getDataSocial()
  },
  methods: {
    goToMail() {
      window.location.href = 'mailto:info@musicfeast.io'
    },
    async getDataSocial() {
      await this.$axios
        .get(`${this.baseUrl}api/v1/get-info-mf`)
        .then((result) => {
          const data = result.data
          if (data[0]) {
            const datos = []
            if (data[0].instagram_icon && data[0].instagram_link) {
              datos.push({
                icon: data[0].instagram_icon,
                to: data[0].instagram_link,
              })
            }
            if (data[0].twitter_icon && data[0].twitter_link) {
              datos.push({
                icon: data[0].twitter_icon,
                to: data[0].twitter_link,
              })
            }
            if (data[0].facebook_icon && data[0].facebook_link) {
              datos.push({
                icon: data[0].facebook_icon,
                to: data[0].facebook_link,
              })
            }
            if (data[0].discord_icon && data[0].discord_link) {
              datos.push({
                icon: data[0].discord_icon,
                to: data[0].discord_link,
              })
            }
            datos.push({
              icon: 'email',
              to: 'musicfeast.io@gmail.com',
            })
            this.dataSocial = datos

          }
        })
        .catch((err) => {
          // this.$alert("cancel", {desc: err.message})
          console.error(err)
        })
    },
  },
}
</script>

<style src="~/assets/styles/pages/contact.scss" lang="scss" />
