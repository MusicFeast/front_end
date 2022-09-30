<template>
  <div
    id="nft-details" class="divcol"
    :class="{
      uranium: nft.tier===6,
      diamond: nft.tier===5,
      platinum: nft.tier===4,
      gold: nft.tier===3,
      silver: nft.tier===2,
      bronze: nft.tier===1,
    }">
    <ModalsNftDetails></ModalsNftDetails>

    <section class="header grid">
      <div class="header-background divcol">
        <div class="center gap1 marginaright">
          <v-avatar style="border: 2px solid #fff">
            <img src="@/assets/sources/images/avatar.jpg" alt="artist image" style="--of: cover">
          </v-avatar>
          <span>Artist Name</span>
        </div>
      </div>

      <article class="card divcol gap2">
        <div class="divcol gap1">
          <v-btn class="tag btn" style="--fs: 1.05em">{{
            nft.tier===1 ? 'bronze' :
            nft.tier===2 ? 'silver' :
            nft.tier===3 ? 'gold' :
            nft.tier===4 ? 'platinum' :
            nft.tier===5 ? 'diamond' :
            nft.tier===6 ? 'uranium' : 'user'
          }}</v-btn>

          <h2 class="p tup">Name of the NFT artist or collection</h2>
        </div>

        <span>Name of the artist</span>

        <p class="p">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip 
          ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore 
          eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue 
          duis dolore te feugait nulla
        </p>

        <div class="spacea">
          <span class="bold" style="--c:var(--accent)">Price</span>
          <div class="divcol aend" style="gap: .5em">
            <span class="bold" style="--c: var(--accent)">{{nft.price}}
              <img src="~/assets/sources/logos/near-orange.svg" alt="near">
            </span>
            <span style="font-size: calc(var(--font-text) / 1.5)">$ {{dollarConversion(nft.price)}}</span>
          </div>
        </div>

        <div class="center gap2 wrap bold">
          <v-btn :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 14px; --bg: #fff; --c: var(--primary)">sell</v-btn>
          <v-btn :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 14px">Redeem</v-btn>
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
        <span>Price</span>
        <div class="acenter" style="gap: .5em">
          <span>{{dataProfits.price}}</span>
          <img src="@/assets/sources/logos/near-orange.svg" alt="near" style="--w: 1.833125em">
        </div>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>Tickets Sold</span>
        <span>{{dataProfits.tickets_sold}}</span>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>Lorem Ipsum</span>
        <span>{{dataProfits.lorem_ipsum}}</span>
      </v-sheet>
    </section>

    <h2 id="buy">Buy NFT</h2>

    <v-data-table
      :headers="tableHeaders"
      :items="tableItems"
      hide-default-footer
      mobile-breakpoint="-1"
    >
      <template #[`header.number`]>
        <center class="center">
          <span>edition number</span>
          <v-icon :class="{reverse: false}" size="2.2em">mdi-menu-down</v-icon>
        </center>
      </template>
      
      <template #[`header.price`]>
        <center class="center">
          <span>price</span>
          <v-icon :class="{reverse: false}" size="2.2em">mdi-menu-down</v-icon>
        </center>
      </template>

      <template #[`item.vault`]="{ item }">
        <span :style="`--c:${item.vault ? '#26A17B' : ''}`">{{item.vault ? 'Yes' : 'No'}}</span>
      </template>
      
      <template #[`item.seller`]="{ item }">
        <center class="center" style="gap:10px">
          <v-avatar style="border: 2px solid #fff">
            <img :src="item.seller_avatar" alt="artist avatar" style="--of: cover">
          </v-avatar>
          <span>{{item.seller}}</span>
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
      
      <template #[`item.buy`]>
        <v-btn :ripple="false" class="btn activeBtn bold" style="--min-w: 112px; --w: min(100%, 8em); --fs: 14px">Buy</v-btn>
      </template>
      
      <template #[`item.offer`]>
        <v-btn :ripple="false" class="btn activeBtn bold" style="--min-w: 112px; --w: min(100%, 8em); --fs: 14px; --bg: #fff; --c: var(--primary)">Make an Offer</v-btn>
      </template>
    </v-data-table>

    <v-btn-toggle v-model="pagination" mandatory class="pagination align" background-color="rgba(0, 0, 0, .4)" active-class="activeClass">
      <button
        :style="pagination > 0 ? 'opacity: 1' : 'opacity: .5'"
        @click="pagination > 0 ? pagination-- : ''"
      >
        <v-icon size="2em" class="reverse">mdi-play</v-icon>
      </button>

      <v-btn v-for="n in 2" :key="n" text>{{n}}</v-btn>

      <button
        :style="pagination < 1 ? 'opacity: 1' : 'opacity: .5'"
        @click="pagination < 1 ? pagination++ : ''"
      >
        <v-icon size="2em">mdi-play</v-icon>
      </button>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  name: "CollectionDetailsPage",
  data() {
    return {
      nft: {
        tier: 3,
        price: 1239.63
      },
      dataSocial: [
        { icon: "mdi-instagram", link: "#" },
        { icon: "mdi-twitter", link: "#" },
        { icon: "mdi-facebook", link: "#" },
        { icon: "discord", link: "#" },
      ],
      dataProfits: {
        total_tickets: 125,
        owners: 85,
        price: 520.00 ,
        tickets_sold: 100,
        lorem_ipsum: 205,
      },
      tableHeaders: [
        { value: "number", text: "edition number", align: "start", sortable: false },
        { value: "vault", text: "vault item", align: "center", sortable: false },
        { value: "seller", text: "seller", align: "center", sortable: false },
        { value: "price", text: "price", align: "center", sortable: false },
        { value: "buy", align: "center", sortable: false },
        { value: "offer", align: "center", sortable: false },
      ],
      tableItems: [
        {
          number: "#1",
          vault: true,
          seller: "tonystark.near",
          seller_avatar: require("~/assets/sources/images/avatar.jpg"),
          price: "174",
        },
        {
          number: "#123",
          vault: false,
          seller: "tonystark.near",
          seller_avatar: require("~/assets/sources/images/avatar.jpg"),
          price: "174",
        },
        {
          number: "#123",
          vault: false,
          seller: "tonystark.near",
          seller_avatar: require("~/assets/sources/images/avatar.jpg"),
        },
      ],
      pagination: 0,
    }
  },
  mounted() {
  },
  methods: {
    dollarConversion(price) {
      return price / 2
    },
  }
};
</script>

<style src="~/assets/styles/pages/nft-details.scss" lang="scss" />
