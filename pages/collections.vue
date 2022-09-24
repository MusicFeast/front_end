<template>
  <div id="collections" class="divcol">
    <h2 class="Title tup">collections</h2>
    <v-carousel
      id="custome-carousel"
      v-model="modelCarousel"
      height="max-content"
      hide-delimiter-background
    >
      <template v-for="(item, index) in dataCarousel">
        <v-carousel-item v-if="(index + 1) % columnsCarousel() === 1 || columnsCarousel() === 1" :key="index">
          <template v-for="(n,i) in columnsCarousel()">
            <template v-if="(+index + i) < dataCarousel.length">
              <v-card :key="i" class="card divcol">
                <div
                  class="container-img"
                  :style="`--tag: '${dataCarousel[+index + i].state}'`"
                  :class="{live: dataCarousel[+index + i].state==='live'}"
                >
                  <img :src="dataCarousel[+index + i].img" :alt="`${dataCarousel[+index + i].name} image`" style="--w: 100%; --br: 10px">
                  
                  <v-avatar style="border: 2px solid #fff">
                    <img :src="dataCarousel[+index + i].avatar" :alt="`${dataCarousel[+index + i].artist} image`" style="--of: cover">
                  </v-avatar>
                </div>
                
                <div class="container-content tcenter">
                  <a>{{dataCarousel[+index + i].name}}</a>
                  <p>{{dataCarousel[+index + i].desc}}</p>

                  <div class="center bold" style="gap: 6.4px">
                    <span class="floor" style="--c: var(--accent)">Floor Price: 250.00</span>
                    <img src="@/assets/sources/logos/near-orange.svg" alt="near" style="--w:0.9375em">
                  </div>
                </div>
              </v-card>
            </template>
          </template>
        </v-carousel-item>
      </template>
      
      <template #prev="{on, attrs}">
        <v-btn
          icon
          class="reverse"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon x-large>mdi-play</v-icon>
        </v-btn>
      </template>
      
      <template #next="{on, attrs}">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon x-large>mdi-play</v-icon>
        </v-btn>
      </template>
    </v-carousel>

    <section class="container-profit bold fwrap">
      <v-sheet color="transparent" class="divcol center">
        <span>Total NFTs</span>
        <span>{{dataProfits.nfts}}</span>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>Owners</span>
        <span>{{dataProfits.owners}}</span>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>Total Artists</span>
        <span>{{dataProfits.artists}}</span>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>All Collections</span>
        <span>{{dataProfits.collections}}</span>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>All Time High</span>
        <span>$ {{dataProfits.high}}K</span>
      </v-sheet>
    </section>

    <section class="container-filters fwrap gap2" style="--fb: 200px">
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
        :label="item.key==='filterB'?'Sort by:':''"
        style="--p: 0 1em 0 2em"
      ></v-select>
    </section>

    <div class="separator" />

    <section class="container-listed grid" style="--gtc: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); gap: 2em">
      <v-card
        v-for="(item,i) in dataListed" :key="i" class="card divcol"
        :class="{
          uranium: item.tier==='uranium',
          diamond: item.tier==='diamond',
          platinum: item.tier==='platinum',
          gold: item.tier==='gold',
          silver: item.tier==='silver',
          bronze: item.tier==='bronze',
        }">
        <div
          class="container-img"
          :style="`--tag: '${item.tier}'`"
        >
          <img :src="item.img" :alt="`${item.name} image`" style="--w: 100%; --br: 10px">
          
          <v-avatar style="border: 2px solid #fff">
            <img :src="item.avatar" :alt="`${item.artist} image`" style="--of: cover">
          </v-avatar>
        </div>
        
        <div class="container-content tcenter">
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

      <v-btn v-for="n in dataListed.length" :key="n" text>{{n}}</v-btn>

      <button
        :style="pagination < dataListed.length-1 ? 'opacity: 1' : 'opacity: .5'"
        @click="pagination < dataListed.length-1 ? pagination++ : ''"
      >
        <v-icon size="2em">mdi-play</v-icon>
      </button>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  name: "CollectionsPage",
  data() {
    return {
      modelCarousel: 0,
      dataCarousel: [
        {
          img: require('~/assets/sources/images/img-listed-1.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°1",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "live",
        },
        {
          img: require('~/assets/sources/images/img-listed-2.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°2",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "sold out",
        },
        {
          img: require('~/assets/sources/images/img-listed-3.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°3",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "comming soon",
        },
        {
          img: require('~/assets/sources/images/img-listed-4.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°4",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "live",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "sold out",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "sold out",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "sold out",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "sold out",
        },
      ],
      dataProfits: {
        nfts: 7659,
        owners: 1256,
        artists: 1206,
        collections: 205,
        high: 120.45,
      },
      search: "",
      dataFilters: [
        {
          key: "filterA",
          model: "by Tier",
          list: ["by Tier", "algo"],
        },
        {
          key: "filterB",
          model: "",
          list: ["algo", "algo"],
        },
      ],
      dataListed: [
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: "gold",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: "silver",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: "platinum",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: "diamond",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: "uranium",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: "bronze",
        },
      ],
      pagination: 0,
    }
  },
  mounted() {
    // resize listener
    window.addEventListener('resize', () => {
      // listener reload columns in caraousel
      const reload = this.modelCarousel;
      this.modelCarousel = -1;
      this.modelCarousel = reload;
    });
  },
  methods: {
    columnsCarousel() {
      if (window.innerWidth >= 1600) {
        return 5
      } else if (window.innerWidth >= 1345) {
        return 4
      } else if (window.innerWidth >= 1000) {
        return 3
      } else if (window.innerWidth >= 500) {
        return 2
      } else {
        return 1
      }
    },
  }
};
</script>

<style src="~/assets/styles/pages/collections.scss" lang="scss" />
