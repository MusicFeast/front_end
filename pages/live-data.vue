<template>
  <div id="live-data">
    <h2 class="Title mb-16">events name</h2>

    <v-row class="mb-6">
      <v-col xl="5" lg="5" md="5" cols="6" class="nop-mobile">
        <div class="divcol gap1">
          <h4>Last Updates</h4>
          <div class="divrow gap1">
            <v-card class="divcol center card-last-upt" :class="{'dynamicBorder' : activeCheckIns}" @click="activateCheck()">
              <span class="tcenter">Checks - ins</span>
              <h4 class="p mt-2 size-number-mobile tcenter">0 / 0</h4>
            </v-card>

            <v-card class="divcol center card-last-upt" :class="{'dynamicBorder' : activeGoodies}" @click="activateGoodies()">
              <span class="tcenter">Goodies redeemed</span>
              <h4 class="p mt-2 size-number-mobile tcenter">0 / 0</h4>
            </v-card>
          </div>
        </div>
      </v-col>
      <v-col cols="2" class="center delete-mobile">
        <v-divider inset vertical color="#990c0c"></v-divider>
      </v-col>
      <v-col xl="5" lg="5" md="5" cols="6" class="aend jend nop-mobile">
        <v-card class="card-rigth divrow center gap2">
          <div class="center divcol width100">
            <span class="tcenter">Tickets sold</span>
            <h4 class="p mt-2 accent-color size-number-mobile tcenter">2 / 6</h4>
          </div>
          <v-divider vertical color="#990c0c"></v-divider>
          <div class="center divcol width100">
            <span class="tcenter">Your incomes</span>
            <h4 class="p mt-2 accent-color size-number-mobile tcenter">23.12 FEAST</h4>
          </div>
          <span class="absolute-span">
            ~ 65.66 USD
          </span>
        </v-card>
      </v-col>
      <v-col cols="12" class="jend mt-10">
        <div class="jend jcentermobile">
          <v-text-field
          class="search"
          hide-details solo
          placeholder="Search a nickname or scan it"
          style="--p: 0 1em 0 2em"
          >
            <template #append>
              <img src="~/assets/sources/icons/icon-scan.svg" class="ml-2 icon-scan" alt="Share">
              <v-icon class="ml-1">mdi-magnify</v-icon>
            </template>
          </v-text-field>
        </div>
      </v-col>
    </v-row>

    <template v-if="checkState">
      <v-data-table
        :headers="headersCheck"
        :items="dataCheck"
        hide-default-footer
      >
        <template #[`item.transaction`] = "{ item }">
          <div class="divrow center gap1">
            <span class="center">
              {{ item.transaction }} 
              <img src="~/assets/sources/icons/icon-share.svg" class="ml-2 pointer" alt="Share" style="width: 15px; height: 15px;">
            </span>
          </div>
        </template>
        <template #[`item.action`]="{ item }">
          <div class="divrow center btns-div">
            <v-btn class="btn btn-checkbox">
              {{ item.action }} <v-checkbox class="checkbox-btn" color="white" dense hide-details v-model="item.checkbox"></v-checkbox>
            </v-btn>
          </div>
        </template>
      </v-data-table>

      <div class="center mt-10">
        <Pagination
        :total-pages="pagination_per_page > 50 ? 50 : pagination_per_page"
        :current-page="currentPage"
        @pagechanged="handlePageChange"
        />
      </div>
    </template>

    <template v-else-if="goodiesState">
      <v-data-table
        :headers="headersGoodies"
        :items="dataGoodies"
        hide-default-footer
      >
        <template #[`item.transaction`] = "{ item }">
          <div class="divrow center gap1">
            <span class="center">
              {{ item.transaction }} 
              <img src="~/assets/sources/icons/icon-share.svg" class="ml-2 pointer" alt="Share" style="width: 15px; height: 15px;">
            </span>
          </div>
        </template>
        <template #[`item.action`]="{ item }">
          <div class="divrow center btns-div">
            <v-btn class="btn btn-checkbox">
              {{ item.action }} <v-checkbox class="checkbox-btn" color="white" dense hide-details v-model="item.checkbox"></v-checkbox>
            </v-btn>
          </div>
        </template>
      </v-data-table>

      <div class="center mt-10">
        <Pagination
        :total-pages="pagination_per_page > 50 ? 50 : pagination_per_page"
        :current-page="currentPage"
        @pagechanged="handlePageChange"
        />
      </div>
    </template>
  </div>
</template>

<script>
  import computeds from '~/mixins/computeds'
  
  export default {
    name: "LiveDataPage",
    mixins: [computeds],
    data() {
      return {
        checkState: true,
        goodiesState: false,

        activeCheckIns: true,
        activeGoodies: false,

        headersCheck:[
          { text: 'NFT NAME', align: 'center', sortable: false, value: 'name'},
          { text: 'SIGNER', align: 'center', sortable: false, value: 'signer' },
          { text: 'QUANTITY', value: 'qty', align: 'center', sortable: false },
          { text: 'CREATED', value: 'created', align: 'center', sortable: false },
          { text: 'TRANSACTION', value: 'transaction', align: 'center', sortable: false },
          { text: 'ACTION', align: 'center', value: 'action', sortable: false },
        ],
        dataCheck:[
          {
            name: 'nameNFT',
            signer: 'walletpruebanft.archway',
            qty: 2,
            created: "30 min ago",
            transaction: "See transaction",
            action: "Approve",
            checkbox: false,
          },
          {
            name: 'nameNFT',
            signer: 'walletpruebanft.archway',
            qty: 2,
            created: "30 min ago",
            transaction: "See transaction",
            action: "Approve",
            checkbox: false,
          },
          {
            name: 'nameNFT',
            signer: 'walletpruebanft.archway',
            qty: 2,
            created: "30 min ago",
            transaction: "See transaction",
            action: "Approve",
            checkbox: false,
          },
        ],
        headersGoodies:[
          { text: 'NFT NAME', align: 'center', sortable: false, value: 'name'},
          { text: 'SIGNER', align: 'center', sortable: false, value: 'signer' },
          { text: 'QUANTITY', value: 'qty', align: 'center', sortable: false },
          { text: 'CREATED', value: 'created', align: 'center', sortable: false },
          { text: 'TRANSACTION', value: 'transaction', align: 'center', sortable: false },
          { text: 'ACTION', align: 'center', value: 'action', sortable: false },
        ],
        dataGoodies:[
          {
            name: 'nameNFT',
            signer: 'walletpruebanft.archway',
            qty: 3,
            created: "30 min ago",
            transaction: "See transaction",
            action: "Approve",
            checkbox: false,
          },
          {
            name: 'nameNFT',
            signer: 'walletpruebanft.archway',
            qty: 6,
            created: "45 min ago",
            transaction: "See transaction",
            action: "Approve",
            checkbox: false,
          },
          {
            name: 'nameNFT',
            signer: 'walletpruebanft.archway',
            qty: 9,
            created: "15 min ago",
            transaction: "See transaction",
            action: "Approve",
            checkbox: false,
          },
        ],
      }
    },
    head() {
      const title = "Live Data"
      return {
        title,
      }
    },
    methods: {
      activateGoodies(){
        this.activeCheckIns = false
        this.activeGoodies = true
        this.checkState = false
        this.goodiesState = true
      },

      activateCheck(){
        this.activeCheckIns = true
        this.activeGoodies = false
        this.checkState = true
        this.goodiesState = false
      }
    }
  };
</script>
  
<style src="~/assets/styles/pages/live-data.scss" lang="scss" />