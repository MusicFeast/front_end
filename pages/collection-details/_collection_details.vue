<template>
  <div id="collection-details" class="divcol">
    <section
      class="header"
      :class="{
        uranium: collection.tier===6,
        diamond: collection.tier===5,
        platinum: collection.tier===4,
        gold: collection.tier===3,
        silver: collection.tier===2,
        bronze: collection.tier===1,
      }"
      :style="`
        --bg-image: url(${profileBanner});
        --tag-tier: '${
          collection.tier===1 ? 'bronze' :
          collection.tier===2 ? 'silver' :
          collection.tier===3 ? 'gold' :
          collection.tier===4 ? 'platinum' :
          collection.tier===5 ? 'diamond' :
          collection.tier===6 ? 'uranium' : 'user'
        }'
      `">
      <v-avatar
        width="var(--size)" height="var(--size)" style="--size: 13.954375em"
        @mouseenter="showTag()" @mouseleave="hideTag()">
        <img :src="collection.avatar" alt="avatar image">
      </v-avatar>
    </section>

    <section class="container-user">
      <aside class="container-user--social center gap1">
        <v-btn v-for="(item,i) in dataSocial" :key="i" icon :href="item.link">
          <v-icon size="clamp(2em, 2.4vw, 2.4em)">{{item.icon}}</v-icon>
        </v-btn>
      </aside>

      <h2 class="p">Name Collections #35461</h2>

      <p style="margin-block: 2em 2.5em">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
        erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
        consequat.
      </p>
      
      <section class="container-profit bold fwrap align" style="--margin-block: 0">
        <v-sheet color="transparent" class="divcol center">
          <span>Total NFTs</span>
          <span>{{dataProfits.editions}}</span>
        </v-sheet>
        <v-sheet color="transparent" class="divcol center">
          <span>Owners</span>
          <span>{{dataProfits.owners}}</span>
        </v-sheet>
        <v-sheet color="transparent" class="divcol center">
          <span>Floor Price</span>
          <span>$ {{dataProfits.floor_price}}</span>
        </v-sheet>
        <v-sheet color="transparent" class="divcol center">
          <span>Listing</span>
          <span>{{dataProfits.listing}}</span>
        </v-sheet>
        <v-sheet color="transparent" class="divcol center">
          <span>All Time High</span>
          <span>$ {{dataProfits.high}}K</span>
        </v-sheet>
      </section>
    </section>

    <h2 class="Title fwrap" style="--fb: 200px; gap: 5px clamp(1em, 2vw, 2em)">
      <v-text-field
        v-model="search"
        hide-details solo
        append-icon="mdi-magnify"
        label="Search for NFTs Name, Artist, Event &amp; Collections"
        style="--p: 0 1em 0 2em"
        class="search"
      ></v-text-field>

      <v-select
        v-for="(item,i) in dataFilters" :key="i"
        v-model="item.model"
        :items="item.list"
        hide-details solo
        :label="item.key==='filterA'?'by Tier:':'Sort by:'"
        style="--p: 0 1em 0 2em"
      ></v-select>
    </h2>

    <section class="container-nfts grid">
      <v-card
        v-for="(item,i) in dataNfts" :key="i"
        class="card divcol custome"
        :class="{
          uranium: item.tier===6,
          diamond: item.tier===5,
          platinum: item.tier===4,
          gold: item.tier===3,
          silver: item.tier===2,
          bronze: item.tier===1,
        }"
        @click="$store.dispatch('goTo', {item, event: $event})">
        <div
          class="container-img"
          :class="{live: item.state === 'live'}"
          :style="`
            ${
              item.tier ? `--tag-tier: '${
                item.tier===1 ? 'bronze' :
                item.tier===2 ? 'silver' :
                item.tier===3 ? 'gold' :
                item.tier===4 ? 'platinum' :
                item.tier===5 ? 'diamond' :
                item.tier===6 ? 'uranium' : 'user'
              }'
              `: ''
            };
            ${item.state ? `--tag-state: '${item.state}'` : ''}`
          "
        >
          <img :src="item.img" :alt="`${item.name} image`" style="--w: 100%; --br: 10px">
        </div>
        
        <div class="container-content tcenter">
          <v-avatar style="border: 2px solid #fff">
            <img :src="item.avatar" :alt="`${item.artist} image`" style="--of: cover">
          </v-avatar>
          <a>{{item.name}}</a>
          <p>{{item.desc}}</p>

          <div class="center" style="gap: 6.4px">
            <span class="floor" style="--c: var(--accent)">Floor Price: {{item.floor_price}}</span>
            <img src="@/assets/sources/logos/near-orange.svg" alt="near" style="--w:0.9375em">
          </div>
          <span class="floor" style="--c: var(--accent)">Editions: {{item.editions}}</span>
        </div>
      </v-card>
    </section>

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

    <h2 class="Title tup">chat</h2>

    <v-expansion-panels class="custome-expansion" style="margin-bottom: 6em">
      <v-expansion-panel v-for="(item,i) in dataChats" :key="i">
        <v-expansion-panel-header expand-icon="mdi-menu-down" class="bold">
          <div class="acenter" style="gap:.5em">
            <v-icon size="1.5em">{{item.icon}}</v-icon>
            <span class="tcap">{{item.chat}}</span>
          </div>
        </v-expansion-panel-header>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "CollectionPage",
  data() {
    return {
      profileBanner: require('~/assets/sources/images/img-header-profile.jpg'),
      dataSocial: [
        { icon: "mdi-share-variant" },
      ],
      dataProfits: {
        editions: 7659,
        owners: 1256,
        floor_price: 1206,
        listing: 205,
        high: 120.45,
      },
      search: "",
      dataFilters: [
        {
          key: "filterA",
          model: "",
          list: ["Uranium", "Diamond", "platinum", "gold", "silver", "bronze"],
        },
        {
          key: "filterB",
          model: "",
          list: ["Lastest Releases", "Newest", "Oldest", "Comming Soon", "Lorem ipsum", "Lorem ipsum"],
        },
      ],
      dataNfts: [
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          type: "nft",
          editions: "250.00",
          tier: 3,
          state: "sold out",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          type: "nft",
          editions: "250.00",
          tier: 2,
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          type: "nft",
          editions: "250.00",
          tier: 4,
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          type: "nft",
          editions: "250.00",
          tier: 5,
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          type: "nft",
          editions: "250.00",
          tier: 6,
          state: "sold out",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          type: "nft",
          editions: "250.00",
          tier: 1,
        },
      ],
      pagination: 0,
      dataChats: [
        { icon: "discord", chat: "discord artist name 1" },
        { icon: "discord", chat: "discord artist name 2" },
        { icon: "discord", chat: "discord artist name 3" },
      ],
    }
  },
  computed: {
    user() {return this.$store.state.dataUser},
    collection() {return JSON.parse(localStorage.getItem("collection"))}
  },
  mounted() {
    const pageName = 'collection-details';
    const page = document.querySelector(`#${pageName}`);
    
    // listener to h2
    const heightH2 = () => {
      document.querySelectorAll('h2.Title').forEach(e => {
        const h2Rect = e.getBoundingClientRect().height;
        page.style.setProperty('--h-title', `${h2Rect}px`)
      });
    };
    heightH2();
    
    // resize listener
    window.addEventListener('resize', () => {
      if (this.$route.path===`/${pageName}`) {
        heightH2()
      };
    });
  },
  methods: {
    showTag() {document.querySelector(".header").classList.add("hover")},
    hideTag() {document.querySelector(".header").classList.remove("hover")},
  }
};
</script>

<style src="~/assets/styles/pages/collection-details.scss" lang="scss" />
