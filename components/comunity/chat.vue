<template>
  <div id="comunity__chat" class="d-flex flex-column flex-grow-1">
    <ComunityMenuChat />

    <aside id="comunity__chat-info">
      <span>More than 45 new messages since 13:30 on October 10, 2023</span>

      <v-btn text>
        <span>Mark as read</span>
        <v-icon size="20" class="ml-2">mdi-check</v-icon>
      </v-btn>
    </aside>


    <section id="comunity__chat-body" class="d-flex flex-grow-1">
      <ComunityMessage answered />

      <ComunityMessageDivider date-time="05 / Nov / 2023" />

      <ComunityMessage v-for="n in 3" :key="n" />
    </section>


    <aside id="comunity__chat-input">
      <div v-if="answered" id="comunity__chat-input-answered" class="d-flex" style="gap: 10px;">
        <span class="text-labeled">answer to</span>

        <img src="@/assets/sources/icons/arrow-answered-simple.svg" alt="arrow icon">

        <h6 class="mb-0">Artist name 🤘</h6>

        <v-icon size="18" @click="$emit('close-answered')">mdi-close</v-icon>
      </div>

      <v-text-field solo hide-details class="flex-grow-0">
        <template #append>
          <v-icon>mdi-send</v-icon>

          <v-icon>mdi-file</v-icon>

          <v-icon>mdi-emoticon-outline</v-icon>
        </template>
      </v-text-field>
    </aside>
  </div>
</template>

<script>
export default {
  name: "ComunityChat",
  props: {
    answered: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss">
#comunity__chat {
  isolation: isolate;
  position: relative;
  overflow: hidden;

  &-info {
    position: absolute;
    top: 0;
    left: 0;
    right: 8px;
    min-height: 48px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: var(--secondary);
    mix-blend-mode: multiply;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 16px;
    z-index: 2;
    animation: moveBanishDown .2s ease;

    span {
      font-size: 15px !important;
      font-weight: 600 !important;
    }

    .v-btn { border-radius: 10px !important }
  }


  &-body {
    flex-direction: column-reverse;
    height: calc(var(--chat-height) - (var(--header-height) + (52px + 24px))); // <-- input height
    overflow-y: auto;
    scrollbar-gutter: stable;
  }


  &-input {
    display: grid;
    grid-template-areas:
      "answered"
      "message";


    &-answered {
      position: relative;
      grid-area: answered;
      margin-inline: 12px 24px;
      margin-top: 12px;
      padding-bottom: 12px;
      
      padding-inline: 16px;
      padding-top: 10px;
      background-color: hsl(222, 8%, 23%, .6);
      max-width: max-content;
      border-radius: 8px;

      h6 {
        font-size: 16px !important;
        font-weight: 700 !important;
        width: max-content;
      }

      .v-icon {
        position: absolute;
        right: -30px;
        cursor: pointer;
      }
    }


    .v-input {
      grid-area: message;
      margin-inline: 12px 24px;
      margin-block: 12px;

      &__slot {
        background-color: var(--input) !important;
        padding-inline: 16px !important;
        padding-block: 10px !important;
        border-radius: 8px !important;
      }

      input { font-size: 16px !important }

      &__append-inner {
        gap: 8px;

        *, :before, ::after { color: var(--labeled) !important }
      }
    }
  }
}
</style>
