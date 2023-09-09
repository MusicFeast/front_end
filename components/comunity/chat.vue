<template>
  <div id="comunity__chat" class="d-flex flex-column flex-grow-1">
    <aside id="comunity__chat-info">
      <span>More than 45 new messages since 13:30 on October 10, 2023</span>

      <v-btn text>
        <span>Mark as read</span>
        <v-icon size="20" class="ml-2">mdi-check</v-icon>
      </v-btn>
    </aside>

    <section id="comunity__chat-body" class="flex-grow-1">
      <h2>body</h2>
    </section>

    <v-text-field solo hide-details class="flex-grow-0">
      <template #append>
        <v-icon>mdi-send</v-icon>

        <v-icon>mdi-file</v-icon>

        <v-icon>mdi-emoticon-outline</v-icon>
      </template>
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: "ComunityChat"
}
</script>

<style lang="scss">
#comunity__chat {
  isolation: isolate;
  position: relative;

  &-info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 48px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: var(--secondary);
    mix-blend-mode: multiply;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 16px;
    transition: .3s $ease-return;

    span {
      font-size: 15px !important;
      font-weight: 600 !important;
    }

    .v-btn { border-radius: 10px !important }
  }


  &-body {
    
  }


  .v-input {
    margin-inline: 12px 24px;
    margin-bottom: 12px;

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
</style>
