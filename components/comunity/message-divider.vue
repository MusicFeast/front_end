<template>
  <div class="message-divider">
    <span class="message-divider-time">{{ dateTime }}</span>

    <v-divider />
  </div>
</template>

<script>
export default {
  name: "MessageDivider",
  props: {
    dateTime: {
      type: String,
      default: null,
    }
  }
}
</script>

<style lang="scss">
.message-divider {
  position: relative;
  margin-block: 30px;

  &-time {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(-.8ch);
    background-color: var(--body);

    max-width: max-content;
    padding-inline: 10px;
    font-size: 14px !important;
    font-weight: 700 !important;
    color: var(--title) !important;
  }
}
</style>
