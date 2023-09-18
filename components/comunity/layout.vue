<template>
  <div style="display: contents">
    <v-main
      id="comunity-layout"
      :class="{ fullscreen: fullscreen }"
      :style="`--chat-height: ${height}; --layout-width: ${width}`"
    >
      <ComunityDrawer ref="drawer" />
  
      <section>
        <ComunityHeader
          :fullscreen="fullscreen"
          @fullscreen="toggleFullscreen"
          @toggle-drawer="$refs.drawer.model = !$refs.drawer.model"
        />
        <ComunityChat />
      </section>
    </v-main>

    <div :style="fullscreen ? `height: ${height}; max-width: ${width}` : ''" />
  </div>
</template>

<script>
export default {
  name: "ComunityLayout",
  props: {
    width: {
      type: String,
      default: "auto"
    },
    height: {
      type: String,
      default: "800px"
    }
  },
  data() {
    return {
      fullscreen: false,
    }
  },
  methods: {
    toggleFullscreen() {
      this.fullscreen = !this.fullscreen
      document.documentElement.style.overflow = this.fullscreen ? 'hidden' : 'visible'
    }
  }
}
</script>

<style lang="scss">
#comunity-layout {
  --side-bar-width: 70px;
  --drawer-width: 313px;
  --header-height: 56px;
  --primary: #ff462e;
  --secondary: #2B2D33;
  --body: #4B4F59;
  --drawer: #46484F;
  --title: #7B7C81;
  --label: #C5C7CF;
  --responded: #C3C3C7;
  --input: #363940;
  

  isolation: isolate;
  position: relative;
  overflow: hidden;
  background-color: var(--body);
  // padding-left: var(--side-bar-width) !important;
  max-width: var(--layout-width);
  height: var(--chat-height);
  overscroll-behavior: contain;


  &.fullscreen {
    position: fixed;
    max-width: auto;
    height: auto;
    inset: 0;
    z-index: 999;
  }

  
  ::-webkit-scrollbar { background-color: var(--drawer) }
  ::-webkit-scrollbar-thumb { background-color: var(--secondary) }
  
  .v-main__wrap {
    display: flex;


    > section {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }


  @keyframes moveBanishDown {
    0% { opacity: 50%; transform: translateY(-95%) }
    100% { opacity: 100%; transform: translateY(0) }
  }

  @keyframes moveBanishUp {
    0% { opacity: 50%; transform: translateY(95%) }
    100% { opacity: 100%; transform: translateY(0) }
  }
}


#emojiPicker.emoji-picker {
  --ep-color-bg: #4B4F59;
  --ep-color-sbg: #363940;
  --ep-color-border: #2B2D33;
  --ep-color-text: #7B7C81;
  --ep-color-active: #ff462e;
  border-radius: 10px !important;

  .container-emoji { margin-bottom: 5px }
}
</style>
