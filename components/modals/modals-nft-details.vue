<template>
  <div id="nft-details-modals">
    <!-- modal sell -->
    <v-dialog v-model="modalSell" max-width="500px" content-class="nft-dialog" persistent>
      <v-btn icon class="close" @click="clearSell()">
        <v-icon large>mdi-close</v-icon>
      </v-btn>

      <v-window v-model="windowSell">
        <v-window-item :value="1">
          <v-card id="modalSell" class="nft-dialog--content">
            <h3>sell</h3>
            <v-form ref="formSell" class="divcol gap2" @submit.prevent="putSale()">
              <p class="p">You are about to sell "{{nft.name}}".</p>

              <v-sheet color="transparent">
                <label for="amount">Amount in
                  <img src="~/assets/sources/logos/near.svg" alt="near" style="--w: 1em">
                </label>
                <v-text-field
                  id="amount"
                  v-model="sellPrice"
                  filled dense
                  background-color="rgba(0, 0, 0, .2)"
                  placeholder="1,345.67"
                  type="number"
                  :rules="[v => !!v || 'required field']"
                ></v-text-field>

                <div class="divcol" style="gap: 4px; margin-bottom: 10px">
                  <div class="space gap2">
                    <span>Your Balance</span>
                    <span>{{user.balance ?? 0}}</span>
                  </div>
                  
                  <div class="space gap2">
                    <span>Sale Price</span>
                    <span>{{sellPrice || '---'}}</span>
                  </div>
                </div>
              </v-sheet>

              <p class="p tcenter">You will be redirected to your wallet to confirm your transaction.</p>
            </v-form>

            <div class="fwrap gap2 bold" style="margin-top: 4em">
              <v-btn
                :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 16px; --bg: #fff; --c: var(--primary)"
                @click="clearSell()">Cancel</v-btn>
              <v-btn
                :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 16px"
                @click="putSale()">Put On Sale</v-btn>
            </div>
          </v-card>
        </v-window-item>

        <v-window-item :value="2">
          <v-card id="modalSell" class="nft-dialog--content">
            <h3>Offer Success</h3>

            <section class="divcol" style="gap: 1.5em">
              <p class="p">Successfully offered sale "NFT Name #234" for</p>

              <v-text-field
                v-model="sellPrice"
                disabled solo
                hide-details
                style="--o-disabled: 1; --fs: 1.3em"
              >
                <template #append>
                  <img src="~/assets/sources/logos/near.svg" alt="near" style="--w: 1.3em">
                </template>
              </v-text-field>

              <v-sheet class="card bold relative" style="--bg: transparent; --br: 0; --bs: 0 0 2px 2px var(--accent)">
                <v-btn icon class="close" width="max-content" height="max-content">
                  <v-icon color="var(--accent)" size="1.2em">mdi-content-copy</v-icon>
                </v-btn>

                <span style="--c: var(--accent)">Transaction Hash</span>
                <span>{{hash_sell}}</span>
              </v-sheet>
            </section>

            <v-btn
              :ripple="false" class="btn activeBtn" style="--w: 100%; --fs: 16px; margin-top: 4em"
              :to="localePath('/profile')" @click="clearSell()">See NFT</v-btn>
          </v-card>
        </v-window-item>
      </v-window>
    </v-dialog>



    <!-- modal buy -->
    <v-dialog v-model="modalBuy" max-width="500px" content-class="nft-dialog" persistent>
      <v-btn icon class="close" @click="clearBuy()">
        <v-icon large>mdi-close</v-icon>
      </v-btn>

      <v-window v-model="windowBuy">
        <v-window-item :value="1">
          <v-card id="modalBuy" class="nft-dialog--content">
            <h3>comming soon</h3>
          </v-card>
        </v-window-item>
      </v-window>
    </v-dialog>



    <!-- modal offer -->
    <v-dialog v-model="modalOffer" max-width="500px" content-class="nft-dialog" persistent>
      <v-btn icon class="close" @click="clearOffer()">
        <v-icon large>mdi-close</v-icon>
      </v-btn>

      <v-window v-model="windowOffer">
        <v-window-item :value="1">
          <v-card id="modalOffer" class="nft-dialog--content">
            <h3>place an offer</h3>
            <v-form ref="formOffer" class="divcol gap2" @submit.prevent="submitOffer()">
              <p class="p">You are about to sell "{{nft.name}}".</p>

              <v-sheet color="transparent">
                <label for="amount">Amount in
                  <img src="~/assets/sources/logos/near.svg" alt="near" style="--w: 1em">
                </label>
                <v-text-field
                  id="amount"
                  v-model="offerPrice"
                  filled dense
                  background-color="rgba(0, 0, 0, .2)"
                  placeholder="1,345.67"
                  type="number"
                  :rules="[v => !!v || 'required field']"
                ></v-text-field>

                <div class="divcol" style="gap: 4px; margin-bottom: 10px">
                  <div class="space gap2">
                    <span>Your Balance</span>
                    <span>{{user.balance ?? 0}}</span>
                  </div>
                  
                  <div class="space gap2">
                    <span>Total Offer</span>
                    <span>{{offerPrice || '---'}}</span>
                  </div>
                </div>
              </v-sheet>

              <p class="p tcenter">You will be redirected to your wallet to confirm your transaction.</p>
            </v-form>

            <div class="fwrap gap2 bold" style="margin-top: 4em">
              <v-btn
                :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 16px; --bg: #fff; --c: var(--primary)"
                @click="clearOffer()">Cancel</v-btn>
              <v-btn
                :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 16px"
                @click="submitOffer()">Submit Offer</v-btn>
            </div>
          </v-card>
        </v-window-item>

        <v-window-item :value="2">
          <v-card id="modalSell" class="nft-dialog--content">
            <h3>Offer Success</h3>

            <section class="divcol" style="gap: 1.5em">
              <p class="p">Successfully offered sale "{{nft.name}}" for</p>

              <v-text-field
                v-model="offerPrice"
                disabled solo
                hide-details
                style="--o-disabled: 1; --fs: 1.3em"
              >
                <template #append>
                  <img src="~/assets/sources/logos/near.svg" alt="near" style="--w: 1.3em">
                </template>
              </v-text-field>

              <v-sheet class="card bold relative" style="--bg: transparent; --br: 0; --bs: 0 0 2px 2px var(--accent)">
                <v-btn icon class="close" width="max-content" height="max-content">
                  <v-icon color="var(--accent)" size="1.2em">mdi-content-copy</v-icon>
                </v-btn>

                <span style="--c: var(--accent)">Transaction Hash</span>
                <span>{{hash_offer}}</span>
              </v-sheet>
            </section>

            <v-btn
              :ripple="false" class="btn activeBtn" style="--w: 100%; --fs: 16px; margin-top: 4em"
              :to="localePath('/profile')" @click="clearOffer()">See NFT</v-btn>
          </v-card>
        </v-window-item>
      </v-window>
    </v-dialog>



    <!-- modal redemption -->
    <v-dialog v-model="modalRedemption" width="max-content" content-class="nft-dialog" persistent>
      <v-btn icon class="close" @click="clearRedemption()">
        <v-icon large>mdi-close</v-icon>
      </v-btn>

      <v-window v-model="windowRedemption">
        <v-window-item :value="1">
          <v-card id="modalRedemption" class="nft-dialog--content">
            <h3>redemption summary</h3>
            <v-form ref="formRedemption" @submit.prevent="nextRedemption()">
              <section class="fwrap">
                <img :src="nft.canvas" alt="canvas nft" style="--br: 10px; --f: brightness(70%); max-width: 200px !important">
              </section>

              <section></section>
              <section></section>
            </v-form>

            <div class="fwrap gap2 bold" style="margin-top: 4em">
              <v-btn
                :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 16px; --bg: #fff; --c: var(--primary)"
                @click="clearRedemption()">Cancel</v-btn>
              <v-btn
                :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 16px"
                @click="nextRedemption()">Add Address</v-btn>
            </div>
          </v-card>
        </v-window-item>
      </v-window>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "NftDetailsModals",
  data() {
    return {
      modalSell: false,
      modalBuy: false,
      modalOffer: false,
      modalRedemption: false,
      windowSell: 1,
      windowBuy: 1,
      windowOffer: 1,
      windowRedemption: 1,
      sellPrice: null,
      hash_sell: "5xfi6WGSb6XTnjjd7686vIJP98ypPL988Nnmjiklh65GT54...",
      offerPrice: null,
      hash_offer: "5xfi6WGSb6XTnjjd7686vIJP98ypPL988Nnmjiklh65GT54...",
    };
  },
  computed: {
    user() {return this.$store.state.dataUser},
    nft() {
      return JSON.parse(localStorage.getItem("nft"))
    },
  },
  mounted() {
  },
  methods: {
    // sell
    clearSell() {
      this.sellPrice = null;
      this.modalSell = false;
      this.windowSell = 1;
    },
    putSale() {
      if (this.$refs.formSell.validate()) {this.windowSell++}
    },
    // buy
    clearBuy() {
      this.modalBuy = false;
      this.windowBuy = 1;
    },
    nextBuy() {
      if (this.$refs.formBuy.validate()) {this.windowBuy++}
    },
    // offer
    clearOffer() {
      this.offerPrice = null;
      this.modalOffer = false;
      this.windowOffer = 1;
    },
    submitOffer() {
      if (this.$refs.formOffer.validate()) {this.windowOffer++}
    },
    // redemption
    clearRedemption() {
      this.modalRedemption = false;
      this.windowRedemption = 1;
    },
    nextRedemption() {
      if (this.$refs.formRedemption.validate()) {this.windowRedemption++}
    },
  }
};
</script>

<style src="~/assets/styles/components/modals/modals-nft-details.scss" lang="scss" />
