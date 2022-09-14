<template>
  <v-app id="layout" class="relative">
    <Alerts ref="alerts"></Alerts>
    <Header ref="header" />
    <v-main :class="wrapperSpace?'with':'without'" class="parent">
      <nuxt @RouteValidator="RouteValidator()" />
    </v-main>
    <Footer ref="footer" :footer-style="footerStyle"></Footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  // middleware: 'authenticated',
  data() {
    return {
      wrapperSpace: true,
      footerStyle: false
    }
  },
  mounted() {
    this.RouteValidator();
    
    /* scroll horizontal (simple) */
    const el = document.querySelectorAll('[class*="scrollx"]');
    el.forEach((el) => {
      el.addEventListener("wheel", (e) => {
        e.preventDefault();
        el.scrollLeft += e.deltaY
      })
    });
  },
  methods: {
    RouteValidator() {
      const route = this.$router.currentRoute.name
      switch (route) {
        case "LandingPage":
          this.wrapperSpace = false;
          this.footerStyle = false;
        break;
        default:
          this.wrapperSpace = true;
          this.footerStyle = true;
        break;
      }
    },
  }
}
</script>

<style src="~/assets/styles/layouts/default.scss" lang="scss" />
