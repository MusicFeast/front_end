<template>
  <div id="nft-details-modals">
    <v-dialog v-model="modalSell">
    </v-dialog>


    <v-dialog v-model="modalOffer">
    </v-dialog>


    <v-dialog v-model="modalRedemption">
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "NftDetailsModals",
  data() {
    return {
      modalSell: false,
      modalOffer: false,
      modalRedemption: false,
    };
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/components/modals/modals-nft-details.scss" lang="scss" />
