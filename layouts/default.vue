<template>
  <v-app id="layout" class="relative">
    <Alerts ref="alerts"></Alerts>
    <Header ref="header" />
    <v-main :class="wrapperSpace?'with':'without'" class="parent">
      <nuxt @RouteValidator="routeValidator()" />
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
      footerStyle: false,
    }
  },
  mounted() {
    this.routeValidator();
    
    /* scroll horizontal (simple) */
    const scrollable = document.querySelectorAll('[class*="scrollx"]');
    scrollable.forEach((el) => {
      el.addEventListener("wheel", (e) => {
        e.preventDefault();
        el.scrollLeft += e.deltaY
      })
    });

    /* footer height listener */
    function footerHeightListener() {
      const footer = document.querySelector('#footer');
      setTimeout(() => {
        document.documentElement.style.setProperty(
          '--h-footer', `${footer.getBoundingClientRect().height}px`
        );
      }, 100);
    }
    footerHeightListener();
    window.onresize = () => footerHeightListener();
  },
  methods: {
    routeValidator() {
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
