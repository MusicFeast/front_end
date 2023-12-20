<template>
  <div id="edit-address">
    <h2 class="tup p mt-16 Title">Edit Address</h2>

    <v-form ref="form" class="grid">
      <h3 class="tup p">
        address (This is only to receive your physical merch)
      </h3>

      <section class="card">
        <label for="country">country</label>
        <v-select
          id="country"
          :items="dataCountries"
          solo
          item-text="name"
          item-value="name"
          placeholder="Select The Country"
          style="--fs-place: 16px"
          clearable
          clear-icon="mdi-close"
        ></v-select>

        <label for="street">street address</label>
        <v-text-field
          id="street"
          placeholder="Street Address, P.O, box, lorem ipsum"
        ></v-text-field>

        <label for="apartment">Apartment, Suite, Etc</label>
        <v-text-field
          id="apartment"
          placeholder="Street Address 2, P.O, box, lorem ipsum "
        ></v-text-field>

        <label for="city">city</label>
        <v-text-field
          id="city"
          placeholder="Lorem ipsum"
        ></v-text-field>

        <label for="state">State / Province / Region</label>
        <v-text-field
          id="state"
          placeholder="Lorem ipsum"
        ></v-text-field>

        <label for="postal">Postal / Zip Code</label>
        <v-text-field
          id="postal"
          placeholder="Lorem ipsum"
        ></v-text-field>

        <label for="postal">Phone Number</label>
        <v-text-field
          id="postal"
          placeholder="Lorem ipsum"
        ></v-text-field>
      </section>

      <div
        class="center fill_w wrap fwrapmobile bold"
        style="gap: 2em; --fb: 200px"
      >
        <v-btn
          :ripple="false"
          class="btn activeBtn"
          @click="$router.push(localePath('/edit-profile'))"
          ><v-icon class="mr-3">mdi-arrow-left</v-icon> Go Back</v-btn
        >
        <v-btn :ripple="false" class="btn activeBtn"
          >Save</v-btn
        >
      </div>
    </v-form>
  </div>
</template>

<script>
// import { VueEditor } from 'vue2-editor'
import computeds from '~/mixins/computeds'
const { getAllCountries } = require('countries-and-timezones')

export default {
  // components: {
  //   VueEditor,
  // },
  name: 'EditAddressPage',
  mixins: [computeds],
  data() {
    return {
      dataCountries: [],
    }
  },
  head() {
    const title = 'Edit Address'
    return {
      title,
    }
  },

  mounted(){
    const countries = getAllCountries()
    this.dataCountries = Object.values(countries)
  },  

  methods:{
  }
}
</script>

<style src="~/assets/styles/pages/edit-address.scss" lang="scss" />
