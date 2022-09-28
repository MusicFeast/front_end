<template>
  <div id="about" class="divcol">
    <h2 class="utp">about</h2>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
    }
  },
  mounted() {
    const pageName = 'about';
    const page = document.querySelector(`#${pageName}`);
    
    // listener to h2
    const heightH2 = () => {
      document.querySelectorAll('h2.Title').forEach(e => {
        const h2Rect = e.getBoundingClientRect().height;
        page.style.setProperty('--h-title', `${h2Rect}px`)
      });
    };
    heightH2();

    // resize listener
    window.addEventListener('resize', () => {
      if (this.$route.path===`/${pageName}`) {
        heightH2();
      };
    });
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/pages/about.scss" lang="scss" />
