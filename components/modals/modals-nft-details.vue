<template>
  <div id="nft-details-modals">
    <!-- modal sell -->
    <v-dialog v-model="modalSell" max-width="500px" content-class="nft-dialog" persistent>
      <v-btn icon class="close" @click="clearSell()">
        <v-icon large>mdi-close</v-icon>
      </v-btn>

      <v-window v-model="windowSell" touchless>
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
                  v-model="form_sell.sellPrice"
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
                    <span>{{form_sell.sellPrice || '---'}}</span>
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
                v-model="form_sell.sellPrice"
                disabled solo
                filled
                hide-details
                style="--o-disabled: 1; --fs: 1.3em"
              >
                <template #append>
                  <img src="~/assets/sources/logos/near.svg" alt="near" style="--w: 1.3em">
                </template>
              </v-text-field>

              <v-sheet class="card bold">
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

      <v-window v-model="windowBuy" touchless>
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

      <v-window v-model="windowOffer" touchless>
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
                  v-model="form_offer.offerPrice"
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
                    <span>{{form_offer.offerPrice || '---'}}</span>
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
                v-model="form_offer.offerPrice"
                disabled solo
                filled
                hide-details
                style="--o-disabled: 1; --fs: 1.3em"
              >
                <template #append>
                  <img src="~/assets/sources/logos/near.svg" alt="near" style="--w: 1.3em">
                </template>
              </v-text-field>

              <v-sheet class="card bold">
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
    <v-dialog v-model="modalRedemption" width="800px" content-class="nft-dialog" persistent>
      <v-btn icon class="close" @click="clearRedemption()">
        <v-icon large>mdi-close</v-icon>
      </v-btn>

      <v-window v-model="windowRedemption" touchless>
        <v-window-item :value="1">
          <v-card id="modalRedemption" class="nft-dialog--content">
            <h3>redemption summary</h3>
            <v-form ref="formRedemption" class="divcol" style="gap: 2em" @submit.prevent="nextRedemption($refs.formRedemption)">
              <section class="fwrap jcenter" style="gap: 20px">
                <img :src="nft.canvas" alt="canvas nft" style="--br: 10px; --f: brightness(80%) contrast(145%); max-width: 12.5em !important">
                
                <div class="divcol jspace" style="flex: 1 1 200px">
                  <span
                    class="btn center tcenter bold mb-3"
                    style="--bs: none; --br: 2px; --bg: rgba(0,0,0,.4); --p: .7em 1em; font-size: calc(var(--font-size) / 3);"
                  >"{{nft.name}}"</span>

                  <label for="amount">Amount to Redeem</label>
                  <v-text-field
                    id="amount"
                    v-model="form_redemption.redeemPrice"
                    filled dense
                    placeholder="2"
                    :rules="[v => !!v || 'required field']"
                    background-color="rgba(0,0,0,.4)"
                    style="flex-grow: 0"
                  ></v-text-field>
                  <span class="mb-3">Quantity Available: 3</span>

                  <label for="country">Country</label>
                  <v-select
                    id="country"
                    v-model="form_redemption.country"
                    :items="dataCountries" solo
                    :rules="[v => !!v || 'required field']"
                    placeholder="Select The Country"
                    style="--fs-place: 16px; flex-grow: 0"
                  ></v-select>
                </div>
              </section>

              <section>
                <h6 class="space gap2">
                  <span class="bold">estimated ship date</span>
                  <span>december / 2022</span>
                </h6>
                <h6 class="space gap2">
                  <span class="bold">shipping method</span>
                  <span>delivery duty paid</span>
                </h6>
              </section>

              <section class="bold">
                <h6 class="space gap2">
                  <span>number of items</span>
                  <span>2</span>
                </h6>
                <h6 class="space gap2">
                  <span>shipping</span>
                  <span>$ 40</span>
                </h6>
                <h6 class="space gap2">
                  <span>discount</span>
                  <span>$ 10</span>
                </h6>
                <span
                  class="btn space gap2"
                  style="--bs: none; --br: 2px; --bg: rgba(0,0,0,.4); --p: .7em 1em; font-size: calc(var(--font-size) / 3);"
                >
                  <span class="tup">estimated total</span>
                  <span>$ 30</span>
                </span>
              </section>
            </v-form>

            <div class="fwrap gap2 bold" style="margin-top: 4em">
              <v-btn
                :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 16px; --bg: #fff; --c: var(--primary)"
                @click="clearRedemption()">Cancel</v-btn>
              <v-btn
                :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 16px"
                @click="nextRedemption($refs.formRedemption)">Add Address</v-btn>
            </div>
          </v-card>
        </v-window-item>


        <v-window-item :value="2">
          <v-card id="modalRedemption" class="nft-dialog--content">
            <h3>address form</h3>
            <v-form ref="formRedemptionAddress" class="divcol" style="gap: 2em" @submit.prevent="nextRedemption($refs.formRedemptionAddress)">
              <span
                class="btn center tcenter bold"
                style="--bs: none; --br: 2px; --bg: rgba(0,0,0,.4); --p: .7em 1em; font-size: calc(var(--font-size) / 3);"
              >"{{nft.name}}"</span>

              <section class="divcol">
                <v-checkbox
                  label="Use profile address"
                  class="align" dense
                  off-icon="mdi-checkbox-blank"
                ></v-checkbox>
                
                <label for="street">Street Address</label>
                <v-text-field
                  id="street"
                  v-model="form_redemption.address.street"
                  filled dense
                  background-color="transparent"
                  placeholder="Street Address, P.O, box, lorem ipsum"
                  :rules="[v => !!v || 'required field']"
                ></v-text-field>
                
                <label for="apartment">Apartment, Suite, Etc</label>
                <v-text-field
                  id="apartment"
                  v-model="form_redemption.address.apartment"
                  filled dense
                  background-color="transparent"
                  placeholder="Street Address 2, P.O, box, lorem ipsum"
                  :rules="[v => !!v || 'required field']"
                ></v-text-field>
                
                <label for="city">City</label>
                <v-text-field
                  id="city"
                  v-model="form_redemption.address.city"
                  filled dense
                  background-color="transparent"
                  placeholder="Lorem ipsum"
                  :rules="[v => !!v || 'required field']"
                ></v-text-field>
                
                <label for="state">State / Province / Region</label>
                <v-text-field
                  id="state"
                  v-model="form_redemption.address.state"
                  filled dense
                  background-color="transparent"
                  placeholder="Lorem ipsum"
                  :rules="[v => !!v || 'required field']"
                ></v-text-field>
                
                <label for="postal">Postal / Zip Code</label>
                <v-text-field
                  id="postal"
                  v-model="form_redemption.address.postal"
                  filled dense
                  background-color="transparent"
                  placeholder="Lorem ipsum"
                  :rules="[v => !!v || 'required field']"
                ></v-text-field>
              </section>

              <section class="divcol">
                <p class="tcenter p">
                  By proceeding you acknowledge that all Redemption Tokens used in this transaction will be destroyed on the blockchain. 
                  This transaction is Irreversible and non-refundable.
                </p>
                <v-checkbox
                  :rules="[v => !!v || 'required field']"
                  label="I acknowledge"
                  class="align" dense
                  off-icon="mdi-checkbox-blank"
                ></v-checkbox>
              </section>
            </v-form>

            <div class="fwrap gap2 bold" style="margin-top: 4em">
              <v-btn
                :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 16px; --bg: #fff; --c: var(--primary)"
                @click="clearRedemption()">Cancel</v-btn>
              <v-btn
                :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 16px"
                @click="nextRedemption($refs.formRedemptionAddress)">Confirm</v-btn>
            </div>
          </v-card>
        </v-window-item>


        <v-window-item :value="3">
          <v-card id="modalSell" class="nft-dialog--content divcol">
            <h3>Successful Redemption</h3>

            <section class="divcol" style="gap: 1.5em">
              <span
                class="btn center tcenter bold"
                style="--bs: none; --br: 2px; --bg: rgba(0,0,0,.4); --p: .7em 1em; font-size: calc(var(--font-size) / 3);"
              >"{{nft.name}}"</span>

              <p class="tcenter">Your redemption has been completed successfully. Soon you will have your order</p>

              <v-sheet class="card bold">
                <v-btn icon class="close" width="max-content" height="max-content">
                  <v-icon color="var(--accent)" size="1.2em">mdi-content-copy</v-icon>
                </v-btn>

                <span style="--c: var(--accent)">Transaction Hash</span>
                <span>{{hash_redemption}}</span>
              </v-sheet>
            </section>

            <v-btn
              :ripple="false" class="btn activeBtn align" style="--w: min(100%, 10em); --fs: 16px; margin-top: 4em"
              :to="localePath('/profile')" @click="clearRedemption()">Confirm</v-btn>
          </v-card>
        </v-window-item>
      </v-window>
    </v-dialog>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "NftDetailsModals",
  mixins: [computeds],
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
      form_sell: { sellPrice: null },
      hash_sell: "5xfi6WGSb6XTnjjd7686vIJP98ypPL988Nnmjiklh65GT54...",
      form_buy: {},
      hash_buy: "5xfi6WGSb6XTnjjd7686vIJP98ypPL988Nnmjiklh65GT54...",
      form_offer: { offerPrice: null },
      hash_offer: "5xfi6WGSb6XTnjjd7686vIJP98ypPL988Nnmjiklh65GT54...",
      form_redemption: {
        redeemPrice: null,
        country: null,
        address: {
          street: null,
          apartment: null,
          city: null,
          state: null,
          postal: null,
        }
      },
      hash_redemption: "5xfi6WGSb6XTnjjd7686vIJP98ypPL988Nnmjiklh65GT5GSb6XTnjjd7686vIJP98ypPL988Nnmjiklh65GT4",
      dataCountries: [ "Canada", "EEUU", "United Kingdom", "Spain", "Lorem ipsum", "Lorem ipsum" ],
    };
  },
  mounted() {
  },
  methods: {
    // sell
    clearSell() {
      Object.keys(this.form_sell).forEach(key => {this.form_sell[key] = null});
      this.modalSell = false; this.windowSell = 1;
    },
    putSale() {
      if (this.$refs.formSell.validate()) {this.windowSell++}
    },
    // buy
    clearBuy() {
      Object.keys(this.form_buy).forEach(key => {this.form_buy[key] = null});
      this.modalBuy = false; this.windowBuy = 1;
    },
    nextBuy() {
      if (this.$refs.formBuy.validate()) {this.windowBuy++}
    },
    // offer
    clearOffer() {
      Object.keys(this.form_offer).forEach(key => {this.form_offer[key] = null});
      this.modalOffer = false; this.windowOffer = 1;
    },
    submitOffer() {
      if (this.$refs.formOffer.validate()) {this.windowOffer++}
    },
    // redemption
    clearRedemption() {
      const form1 = this.form_redemption;
      const form2 = this.form_redemption.address;
      Object.keys(form1).forEach(key => {
        if (key !== 'address') {form1[key] = null}
        else {Object.keys(form2).forEach(key2 => {form2[key2] = null})}
      });
      this.modalRedemption = false; this.windowRedemption = 1;
    },
    nextRedemption(ref) {
      if (ref.validate()) {this.windowRedemption++}
    },
  }
};
</script>

<style src="~/assets/styles/components/modals/modals-nft-details.scss" lang="scss" />
