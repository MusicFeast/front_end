<template>
  <v-img-load
    :src="src"
    :alt="alt"
    :aspect-ratio="aspectRatio"
    :content-class="contentClass"
    :cover="cover"
    :eager="eager"
    :height="sizes ?? height"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :min-height="minHeight"
    :min-width="minWidth"
    :width="sizes ?? width"
    rounded="50%"
    box-shadow="-1px 3px 5px 2px rgba(0, 0, 0, .3)"
    class="avatar-tier"
    :class="{tier: !!tier}"
    :style="`--tier-color: ${
      tier == 1 ? 'linear-gradient(to top right, #7D3716, #D57535, #5E170B)'
      : tier == 2 ? 'linear-gradient(to top right, #D1D1D1, #000000)'
      : tier == 3 ? 'linear-gradient(to top right, #EE9938, #672F04)'
      : tier == 4 ? 'linear-gradient(to top right, #DBD9D7, #D27073, #503367, #000000)'
      : tier == 5 ? 'linear-gradient(to top right, #DBDBDB, #AC38EE, #45348E, #B49176)'
      : tier == 6 ? 'linear-gradient(to top right, #87B95C, #9F9B1B, #0C4020)'
      : ''
    }`"
  ></v-img-load>
</template>

<script>
export default {
  name: "AvatarTier",
  props: {
    tier: {
      type: [String, Number],
      default: 0,
    },
    src: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
    aspectRatio: {
      type: Number,
      default: null,
    },
    cover: {
      type: Boolean,
      default: false,
    },
    contentClass: {
      type: String,
      default: null,
    },
    eager: {
      type: Boolean,
      default: null,
    },
    height: {
      type: [String, Number],
      default: null,
    },
    maxHeight: {
      type: [String, Number],
      default: null,
    },
    maxWidth: {
      type: [String, Number],
      default: null,
    },
    minHeight: {
      type: [String, Number],
      default: null,
    },
    minWidth: {
      type: [String, Number],
      default: null,
    },
    sizes: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: null,
    },
  }
}
</script>

<style lang="scss">
.avatar-tier {
  isolation: isolate;
  position: relative;
  overflow: visible !important;

  &.tier {
    border: 2px solid transparent !important;

    &::before {
      content: "";
      position: absolute;
      inset: -2px;
      background: center no-repeat var(--tier-color);
      background-size: cover;
      border-radius: 50%;
      z-index: -1;
    }
  }
}
</style>
