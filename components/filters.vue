<template>
  <section class="container-filters fwrap gap2" style="--fb: 200px" :class="{contents: contents}">
    <v-text-field
      v-if="!hide.includes(1)"
      v-model="search_model"
      hide-details solo
      append-icon="mdi-magnify"
      :label="searchLabel"
      style="--p: 0 1em 0 2em"
      class="search"
      @keyup="$emit('search', search_model)"
    ></v-text-field>

    <v-select
      v-if="!hide.includes(2)"
      v-model="filterA_model"
      :items="filterA"
      hide-details solo
      label="By Tier:"
      style="--p: 0 1em 0 2em"
      clearable clear-icon="mdi-close"
      @change="$emit('filterA', filterA_model)"
    >
      <template #selection="{ item }">
        <div class="v-select__selection v-select__selection--comma">
          {{
            item === 1 ? "Tier 1" :
            item === 2 ? "Tier 2" :
            item === 3 ? "Tier 3" :
            item === 4 ? "Tier 4" :
            item === 5 ? "Tier 5" :
            item === 6 ? "Tier 6" : item
          }}
        </div>
      </template>
      <template #item="{ item }">
        <v-list-item-title>
          {{
            item === 1 ? "Tier 1" :
            item === 2 ? "Tier 2" :
            item === 3 ? "Tier 3" :
            item === 4 ? "Tier 4" :
            item === 5 ? "Tier 5" :
            item === 6 ? "Tier 6" : item
          }}
        </v-list-item-title>
      </template>
    </v-select>

    <v-select
      v-if="!hide.includes(3)"
      v-model="filterB_model"
      :items="filterB"
      hide-details solo
      label="Sort by:"
      style="--p: 0 1em 0 2em"
      clearable clear-icon="mdi-close"
      @change="$emit('filterB', filterB_model)"
    ></v-select>
  </section>
</template>

<script>
export default {
  name: "FiltersComponent",
  props: {
    contents: {
      type: Boolean,
      default: false,
    },
    hide: {
      type: Array,
      default: () => [],
    },
    search: {
      type: String,
      default: undefined,
    },
    filterA: {
      type: Array,
      default: undefined
    },
    searchLabel: {
      type: String,
      default: "Search for NFTs Name, Artist, Event &amp; Collections"
    },
    filterB: {
      type: Array,
      default: undefined
    },
  },
  data() {
    return {
      search_model: "",
      filterA_model: "",
      filterB_model: "",
    }
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/components/filters.scss" lang="scss" />
