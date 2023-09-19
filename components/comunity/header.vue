<template>
  <div id="comunity__header" class="d-flex align-center">
    <aside id="comunity__header-title" class="d-flex align-center" style="gap: 10px;">
      <v-btn
        v-show="$vuetify.breakpoint.mobile"
        icon @click="$emit('toggle-drawer')"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <h6 class="text-labeled mb-0">{{ getChatSelect? "# " + getChatSelect?.chat : "" }}</h6>
    </aside>


    <aside class="d-flex align-center" style="gap: 10px;">
      <v-text-field
        v-model="search"
        placeholder="Search"
        solo hide-details
        append-icon="mdi-magnify"
        class="flex-grow-0"
        @input="inputSearch"
      ></v-text-field>
  
      <v-icon @click="$emit('fullscreen')">
        {{ fullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen' }}
      </v-icon>
    </aside>
  </div>
</template>

<script>
export default {
  name: "ComunityHeader",
  props: {
    fullscreen: Boolean
  },
  computed: {
    getChatSelect() {
      return this.$store.getters.getChatSelect;
    },
  },
  data() {
    return {
      search: "",
    }
  },
  methods: {
    inputSearch() {
      if (!this.search) {
        this.search = ""
      }
      this.$store.state.search = this.search
    },
  }
}
</script>

<style lang="scss">
#comunity__header {
  height: var(--header-height);
  padding-inline: 16px;
  justify-content: space-between;
  border-bottom: 1px solid var(--secondary);


  &-title {
    @media (min-width: 880px) { display: contents }
  }


  .v-input {
    font-size: 12px !important;

    &__slot {
      background-color: var(--input) !important;
      min-height: 26px !important;
    }

    &__append-inner {
      border-left: 1px solid #fff;
      transition: .2s ease;
    }

    &:has(input:focus) {
      .v-input__append-inner { border-color: var(--accent) !important }
    }
  }
}
</style>
