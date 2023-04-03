<template>
  <v-dialog v-model="qrModals" max-width="500px" content-class="nft-dialog" persistent>
    <v-btn icon class="close" @click="qrModals = false">
      <v-icon large>mdi-close</v-icon>
    </v-btn>

    <v-window touchless>
      <v-window-item>
        <v-card id="qr-modal" class="nft-dialog--content">
          <h2>qr code artist</h2>
          <vue-qr :text="url" :callback="onGenerate" qid="artist"></vue-qr>
        </v-card>
      </v-window-item>
    </v-window>
  </v-dialog>
</template>

<script>
import VueQr from 'vue-qr'
import computeds from '~/mixins/computeds'

export default {
  name: "QrModals",
  components: {VueQr},
  mixins: [computeds],
  props: {
    url: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      qrModals: false,
    };
  },
  methods: {
    onGenerate(dataUrl, id) {
      console.log(dataUrl, id)
    }
  }
};
</script>

<style src="~/assets/styles/components/modals.scss" lang="scss" />
