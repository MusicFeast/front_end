<template>
  <v-app
    id="layout" class="relative" :style="$route.path==='/about'?'overflow:hidden':''"
    :class="{
      vip: $route.path.includes('-vip'),
      uranium: user.tier === 6,
      diamond: user.tier === 5,
      platinum: user.tier === 4,
      gold: user.tier === 3,
      silver: user.tier === 2,
      bronze: user.tier === 1,
      variant: $route.path === '/artist-details',
    }">

    <!-- just for testing tiers -->
    <v-btn
      plain rounded text style="position: fixed; top: clamp(80px, 6vw, 100px); right: 0; z-index: 10; background: var(--bg-tier)"
      title="just for testing tiers" @click="$store.commit('tierTest')">TIER</v-btn>
    <!-- just for testing tiers -->

    <Alerts ref="alerts"></Alerts>
    <Header ref="header" />
    <v-main :class="wrapperSpace?'with':'without'" class="parent">
      <nuxt-child />
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
  computed: {
    user() {return this.$store.state.dataUser},
  },
  created() {
    // get data profile
    this.$store.dispatch("getData")
  },
  mounted() {
    /* scroll horizontal (simple) */
    const scrollableDesktop = document.querySelectorAll('.scrollx');
    const scrollableMobile = document.querySelectorAll('.scrollxmobile');
    function scrollX(node) {
      node.forEach(el =>
        el.addEventListener("wheel", e => {
          if (node === scrollableDesktop) {
            e.preventDefault(); el.scrollLeft += e.deltaY
          } else if (node === scrollableMobile && window.innerWidth <= 880) {
            e.preventDefault(); el.scrollLeft += e.deltaY
          }
        })
      );
    }
    scrollX(scrollableDesktop);
    scrollX(scrollableMobile);
    
    // resize listener
    window.addEventListener("resize", () => this.footerHeightListener());
    this.footerHeightListener();
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => this.footerHeightListener());
  },
  methods: {
    footerHeightListener() {
      const footer = document.querySelector('#footer');
      setTimeout(() => {
        document.documentElement.style.setProperty(
          '--h-footer', `${footer.getBoundingClientRect().height}px`
        );
      }, 400);
    }
  }
}
</script>

<style src="~/assets/styles/layouts/default.scss" lang="scss" />
