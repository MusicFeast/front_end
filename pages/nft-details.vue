<template>
  <div
    id="nft-details" class="divcol"
    :class="{
      uranium: nft_main.tier===6,
      diamond: nft_main.tier===5,
      platinum: nft_main.tier===4,
      gold: nft_main.tier===3,
      silver: nft_main.tier===2,
      bronze: nft_main.tier===1,
    }">
    <ModalsNftDetails ref="modal"></ModalsNftDetails>

    <section class="header grid">
      <v-img :src="nft_main.img" class="header-background" transition="fade-transition">
        <template #default>
          <div class="center gap1 alignl">
            <!-- <button @click="$router.push(this.localePath(`/artist-details`))">
              <v-avatar style="border: 2px solid #fff">
                <v-img :src="nft.avatar" alt="artist image" transition="fade-transition">
                  <template #placeholder>
                    <v-skeleton-loader type="avatar" />
                  </template>
                </v-img>
              </v-avatar>
            </button> -->
            <v-avatar style="border: 2px solid #fff">
              <v-img :src="nft_main.avatar" alt="artist image" transition="fade-transition">
                <template #placeholder>
                  <v-skeleton-loader type="avatar" />
                </template>
              </v-img>
            </v-avatar>
            <span class="h9_em">{{nft_main.artist.toUpperCase()}}</span>
          </div>
        </template>
        <template #placeholder>
          <v-skeleton-loader type="card" />
        </template>
      </v-img>

      <article class="card divcol" style="gap: 30px">
        <div class="divcol gap1">
          <v-btn class="tag btn" style="--fs: 1.05em">{{
            nft_main.tier===1 ? 'bronze' :
            nft_main.tier===2 ? 'silver' :
            nft_main.tier===3 ? 'gold' :
            nft_main.tier===4 ? 'platinum' :
            nft_main.tier===5 ? 'diamond' :
            nft_main.tier===6 ? 'uranium' : 'user'
          }}</v-btn>

          <h2 class="p tup">{{nft_main.name}}</h2>
        </div>

        <span>{{nft_main.desc}}</span>

        <p class="p">
          {{nft_main.description}}
        </p>

        <div class="spacea">
          <span class="bold" style="--c:var(--accent)">Price</span>
          <div class="divcol aend" style="gap: .5em">
            <span class="bold" style="--c: var(--accent)">{{nft_main.floor_price}}
              <img src="~/assets/sources/logos/near-orange.svg" alt="near" style="--w: .9em">
            </span>
            <span style="font-size: calc(var(--font-text) / 1.2)">$ {{dollarConversion(nft_main.floor_price)}}</span>
          </div>
        </div>

        <div class="center gap2 wrap bold">
          <v-btn
            :disabled="!ownedNft"
            :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 14px; --bg: #fff; --c: var(--primary)"
            @click="$refs.modal.modalSell = true">sell</v-btn>
          <v-btn
            v-if="!soldBtn"
            :disabled="btnBuy"
            :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 14px"
            @click="buyNftRamper()">Buy</v-btn>
            <v-btn
            v-if="soldBtn"
            :disabled="true"
            :ripple="false" class="btn activeBtn text-decoration-line-through" style="--w: min(100%, 12em); --fs: 14px">Sold Out</v-btn>
        </div>
      </article>
    </section>

    <section class="container-profit bold fwrap">
      <v-sheet color="transparent" class="divcol center">
        <span>Total Tickets</span>
        <span>{{dataProfits.total_tickets}}</span>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>Owners</span>
        <span>{{dataProfits.owners}}</span>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>Floor Price</span>
        <div class="acenter" style="gap: .5em">
          <span>{{dataProfits.price}}</span>
          <img src="@/assets/sources/logos/near-orange.svg" alt="near" style="--w: 1.833125em">
        </div>
      </v-sheet>
      <!-- <v-sheet color="transparent" class="divcol center">
        <span>Tickets Sold</span>
        <span>{{dataProfits.tickets_sold}}</span>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>Lorem Ipsum</span>
        <span>{{dataProfits.lorem_ipsum}}</span>
      </v-sheet> -->
    </section>

    <h2 id="buy">Buy NFT</h2>

    <v-data-table
      :headers="tableHeaders"
      :items="tableItems"
      :page.sync="currentPage"
      :items-per-page="itemsPerPage"
      hide-default-footer
      mobile-breakpoint="-1"
      :header-props="{sortIcon: 'mdi-menu-down'}"
    >
      <!-- <template #[`item.vault`]="{ item }">
        <span :style="`--c:${item.vault ? '#26A17B' : ''}`">{{item.vault ? 'Yes' : 'No'}}</span>
      </template> -->
      
      <template #[`item.seller`]="{ item }">
        <center class="center" style="gap:10px">
          <v-avatar style="border: 2px solid #fff">
            <v-img :src="item.seller_avatar" alt="artist avatar" transition="fade-transition">
              <template #placeholder>
                <v-skeleton-loader type="avatar" />
              </template>
            </v-img>
          </v-avatar>
          <span :title="item.seller">{{item.seller.limitString(25)}}</span>
        </center>
      </template>
      
      <template #[`item.price`]="{ item }">
        <center v-if="item.price" class="divcol" style="gap: 5px">
          <span>{{item.price}} N</span>
          <span class="normal">$ {{dollarConversion(item.price)}}</span>
        </center>

        <center v-else class="divcol" style="gap: 5px">
          <span>---</span>
          <span>---</span>
        </center>
      </template>
      
      <template #[`item.buy`]="{ item }">
        <v-btn
          v-if="!item.owned"
          :disabled="btnBuy"
          :ripple="false" class="btn activeBtn bold" style="--min-w: 112px; --w: min(100%, 8em); --fs: 14px"
          @click="buyMarketRamper(item)">Buy</v-btn>
          <v-btn
          v-if="item.owned"
          :disabled="btnBuy"
          :ripple="false" class="btn activeBtn bold" style="--min-w: 112px; --w: min(100%, 8em); --fs: 14px"
          @click="unlistNft(item)">Unlist</v-btn>
      </template>
      
      <template #[`item.offer`]="{ item }">
        <v-btn
          v-if="!item.owned"
          :disabled="btnBuy"
          :ripple="false" class="btn activeBtn bold" style="--min-w: 112px; --w: min(100%, 8em); --fs: 14px; --bg: #fff; --c: var(--primary)"
          @click="$refs.modal.modalOffer = true"
        >Make an Offer</v-btn>
      </template>

      <!-- <template #[`item.unlist`]="{ item }">
        <v-btn
          v-if="item.owned"
          :disabled="btnBuy"
          :ripple="false" class="btn activeBtn bold" style="--min-w: 112px; --w: min(100%, 8em); --fs: 14px"
          @click="unlistNft(item)">Unlist</v-btn>
      </template> -->
    </v-data-table>

    <Pagination
      :total-pages="pagination_per_page"
      :current-page="currentPage"
      @pagechanged="(page) => currentPage = page"
    />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import computeds from '~/mixins/computeds'

export default {
  name: "CollectionDetailsPage",
  mixins: [computeds],
  data() {
    return {
      disabled: true,
      soldBtn: false,
      ownedNft: true,
      btnBuy: false,
      nft_main: {},
      dataSocial: [
        { icon: "mdi-instagram", link: "#" },
        { icon: "mdi-twitter", link: "#" },
        { icon: "mdi-facebook", link: "#" },
        { icon: "discord", link: "#" },
      ],
      dataProfits: {
        total_tickets: null,
        owners: null,
        price: null,
        tickets_sold: null,
        lorem_ipsum: null,
      },
      tableHeaders: [
        { value: "number", text: "edition number", align: "center" },
        { value: "token", text: "token id", align: "center", sortable: false },
        { value: "seller", text: "seller", align: "center", sortable: false },
        { value: "price", text: "price", align: "center" },
        { value: "buy", align: "center", sortable: false },
        { value: "offer", align: "center", sortable: false },
        // { value: "unlist", align: "center", sortable: false },
      ],
      tableItems: [
        // {
        //   number: "#1",
        //   vault: true,
        //   seller: "tonystark.near",
        //   seller_avatar: require("~/assets/sources/avatars/avatar.png"),
        //   price: "174",
        // },
        // {
        //   number: "#123",
        //   vault: false,
        //   seller: "tonystark.near",
        //   seller_avatar: require("~/assets/sources/avatars/avatar.png"),
        //   price: "174",
        // },
        // {
        //   number: "#123",
        //   vault: false,
        //   seller: "tonystark.near",
        //   seller_avatar: require("~/assets/sources/avatars/avatar.png"),
        // },
      ],
      currentPage: 1,
      itemsPerPage: 10,
    }
  },
  head() {
    const title = "Nft Details"
    return {
      title,
    }
  },
  computed: {
    pagination_per_page() {
      return Math.ceil(this.tableItems.length / this.itemsPerPage)
    }
  },
  created() {
    if (!this.nft) {this.$router.push(this.localePath('/artists'))}
    this.nft_main = this.nft
  },
  async mounted() {
    if (localStorage.getItem("buyDirect") === true || localStorage.getItem("buyDirect") === "true") {
      setTimeout(this.buyNftRamper, 400)
      localStorage.removeItem('buyDirect')
    }

    this.nft_main = this.nft
    this.getSerie()
    this.getDataNft()

    this.ownedNft = await this.validateTierFn(this.nft_main.tier)
  
  },
  methods: {
    async unlistNft(item) {
      this.btnBuy = true
      if (this.$ramper.getUser()) {
        const action1 = [
          this.$ramper.functionCall(
            "delete_market_data",       
            {
              nft_contract_id: "nft4.musicfeast.testnet",
              token_id: item.token
            }, 
            '100000000000000', 
            '1'
          )
        ]
        const action2 = [
          this.$ramper.functionCall(
            "nft_revoke",       
            {
              token_id: item.token, 
              account_id: "market.musicfeast.testnet",
            }, 
            '100000000000000', 
            '1'
          )
        ]

        const res = await this.$ramper.sendTransaction({
          transactionActions: [
            {
              receiverId: 'market.musicfeast.testnet',
              actions: action1,
            },
            {
              receiverId: 'nft4.musicfeast.testnet',
              actions: action2,
            },
          ],
          network: 'testnet',
        })
        console.log("Transaction Result: ", res)

        this.btnBuy = false

        if (res && res.result) {
          if (res.result[0].status.SuccessValue || res.result[0].status.SuccessValue === "" && res.result[1].status.SuccessValue || res.result[1].status.SuccessValue === "") {
            this.getNftsMarket()
            this.$alert("success", {desc: "Your nft has been successfully purchased, in a few minutes you will be able to see it on your profile.", hash: res.txHashes[0]})   
          } else if (res.result[0].status.Failure) {
            this.$alert("cancel", {desc: res.result[1].status.Failure.ActionError.kind.FunctionCallError.ExecutionError + ".", hash: res.txHashes[0]})
          }
        }
      } else {
        await this.$ramper.signIn()
        location.reload();
      }
    },
    async validateTierFn(tierId) {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($artist_id: String, $owner_id: String, $reference: String) {
          nfts(
            where: {owner_id: $owner_id, artist_id: $artist_id, reference: $reference}
          ) {
            artist_id
            description
            extra
            fecha
            id
            media
            owner_id
            reference
            serie_id
            title
          }
        }
      `;

      const res = await clientApollo.query({
        query: QUERY_APOLLO,
        variables: {artist_id: String(this.nft_main.artist_id), owner_id: this.$ramper.getAccountId(), reference: String(tierId)},
      })

      const data = res.data.nfts


      if (data.length > 0) {
        return true
      } else {
        return false
      }
    },
    async getSerie() {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($serie_id: String) {
          series(where: {id: $serie_id}) {
            artist_id
            copies
            creator_id
            desc_series
            description
            extra
            fecha
            id
            media
            price
            price_near
            reference
            supply
            title
            typetoken_id
          }
        }
      `;

      const res = await clientApollo.query({
        query: QUERY_APOLLO,
        variables: {serie_id: String(this.nft_main.type_id)},
      })

      if (res.data.series[0]) {
        const data = res.data.series[0]
        if (data.copies && Number(data.copies) !== 0 && Number(data.supply) >= Number(data.copies)) {
          this.soldBtn = true
        }     
      }
    },
    async getDataNft() {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($serie_id: String) {
          nfts(where: {serie_id: $serie_id}) {
            description
            extra
            fecha
            id
            media
            owner_id
            reference
            serie_id
            title
            artist_id
          }
        }
      `;

      const res = await clientApollo.query({
        query: QUERY_APOLLO,
        variables: {serie_id: String(this.nft_main.token_id)},
      })

      const data = res.data.nfts

      const ownersArray = []

      for (let i = 0; i < data.length; i++) {
        ownersArray.push(data[i].owner_id)
      }

      const owners = Array.from(new Set(ownersArray));

      this.dataProfits.total_tickets = data.length
      this.dataProfits.owners = owners.length
      // this.dataProfits.price = this.nft_main.floor_price

      const floor = await this.getFloorPrice()
      
      if (floor) {
        if (Number(floor) < Number(this.nft_main.floor_price)) {
          this.dataProfits.price = floor
        } else {
          this.dataProfits.price = this.nft_main.floor_price
        }
      } else {
        this.dataProfits.price = this.nft_main.floor_price
      }

      this.getNftsMarket()
    },
    async getFloorPrice () {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($serie_id: String) {
          markets(where: {serie_id: $serie_id}, first: 1, orderBy: price_near) {
            id
            typetoken_id
            transaction_fee
            token_id
            started_at
            serie_id
            price_near
            price
            owner_id
            nft_contract_id
            is_auction
            ft_token_id
            ended_at
            end_price
            artist_id
            approval_id
          }
        }
      `;

      const res = await clientApollo.query({
        query: QUERY_APOLLO,
        variables: {serie_id: String(this.nft.type_id)},
      })

      const data = res.data.markets

      if (data[0]) {
        return data[0].price_near
      } else {
        return false
      }
    },
    async getNftsMarket () {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($serie_id: String) {
          markets(where: {serie_id: $serie_id}) {
            id
            typetoken_id
            transaction_fee
            token_id
            started_at
            serie_id
            price_near
            price
            owner_id
            nft_contract_id
            is_auction
            ft_token_id
            ended_at
            end_price
            artist_id
            approval_id
          }
        }
      `;

      const res = await clientApollo.query({
        query: QUERY_APOLLO,
        variables: {serie_id: String(this.nft.type_id)},
      })

      const data = res.data.markets

      const accountId = this.$ramper.getAccountId()

      this.tableItems = []

      for (let i = 0; i < data.length; i++) {
        const edition = data[i].token_id.split(":")
        const item = {
          number: "#" + edition[1],
          token: data[i].token_id,
          seller: data[i].owner_id,
          seller_avatar: require("~/assets/sources/avatars/avatar.png"),
          price: data[i].price_near,
          price_yocto: data[i].price,
          owned: false
        }

        if (accountId === item.seller) {
          item.owned = true
        }

        this.tableItems.push(item)
      }
    },
    async buyNftRamper() {
      this.btnBuy = true
      if (this.$ramper.getUser()) {
        const price = Number(this.nft_main.floor_price) + 0.3
        const action = [this.$ramper.functionCall(
          "nft_buy",       
          {
            token_series_id: this.nft_main.token_id, 
            receiver_id: this.$ramper.getAccountId(),
          }, 
          '300000000000000', 
          this.$utils.format.parseNearAmount(String(price))
        )]
        const res = await this.$ramper.sendTransaction({
          transactionActions: [
            {
              receiverId: 'nft4.musicfeast.testnet',
              actions: action,
            },
          ],
          network: 'testnet',
        })
        console.log("Transaction Result: ", res)

        this.btnBuy = false

        if (res && res.result) {
          if (res.result[0].status.SuccessValue || res.result[0].status.SuccessValue === '') {
            this.$alert("success", {desc: "Your nft has been successfully purchased, in a few minutes you will be able to see it on your profile.", hash: res.txHashes[0]})
          } else if (res.result[0].status.Failure) {
            this.$alert("cancel", {desc: res.result[0].status.Failure.ActionError.kind.FunctionCallError.ExecutionError + ".", hash: res.txHashes[0]})
          }
        }
      } else {
        await this.$ramper.signIn()
        location.reload();
      }
    },
    async buyMarketRamper(item) {
      this.btnBuy = true
      if (this.$ramper.getUser()) {
        const price = Number(item.price)
        const action = [this.$ramper.functionCall(
          "buy",       
          {
            nft_contract_id: "nft4.musicfeast.testnet", 
            token_id: item.token,
          }, 
          '300000000000000', 
          this.$utils.format.parseNearAmount(String(price))
        )]
        const res = await this.$ramper.sendTransaction({
          transactionActions: [
            {
              receiverId: 'market.musicfeast.testnet',
              actions: action,
            },
          ],
          network: 'testnet',
        })
        console.log("Transaction Result: ", res)

        this.btnBuy = false

        if (res && res.result) {
          if (res.result[0].status.SuccessValue || res.result[0].status.SuccessValue === '') {
            this.$alert("success", {desc: "Your nft has been successfully purchased, in a few minutes you will be able to see it on your profile.", hash: res.txHashes[0]})
          } else if (res.result[0].status.Failure) {
            this.$alert("cancel", {desc: res.result[0].status.Failure.ActionError.kind.FunctionCallError.ExecutionError + ".", hash: res.txHashes[0]})
          }
        }
      } else {
        await this.$ramper.signIn()
        location.reload();
      }
    },
    dollarConversion(price) {
      return price / 2
    },
  }
};
</script>

<style src="~/assets/styles/pages/nft-details.scss" lang="scss" />
