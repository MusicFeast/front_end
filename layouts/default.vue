<template>
  <v-app id="layout" class="relative">
    <Alerts ref="alerts"></Alerts>
    <Header ref="header" />
    <v-main :class="wrapperSpace?'with':'without'" class="parent">
      <nuxt />
    </v-main>
    <Footer ref="footer"></Footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  // middleware: ['authenticated'],
  data() {
    return {
      wrapperSpace: true,
    }
  },
  mounted() {
    const layout = document.querySelector("#layout");

    /* scroll horizontal (simple) */
    const scrollable = document.querySelectorAll('[class*="scrollx"]');
    scrollable.forEach((el) => {
      el.addEventListener("wheel", (e) => {
        e.preventDefault();
        el.scrollLeft += e.deltaY
      })
    });
    
    /* footer height listener */
    const footerHeightListener = () => {
      const footer = document.querySelector('#footer');
      setTimeout(() => {
        document.documentElement.style.setProperty(
          '--h-footer', `${footer.getBoundingClientRect().height}px`
        );
      }, 100);
    }
    footerHeightListener();



    // listener to h2
    const heightH2 = () => {
      document.querySelectorAll('h2.Title').forEach(h2 => {
        layout.style.setProperty('--h-title', `${h2.getBoundingClientRect().height}px`)
      });
    };
    heightH2();
    

    // resize listener
    window.onresize = () => {
      footerHeightListener();
      heightH2();
    };
  },
}
</script>

<style src="~/assets/styles/layouts/default.scss" lang="scss" />
