<template>
  <div id="artist-details" class="divcol">
    <section class="header" :style="`--bg-image: url(${artist.image})`">
      <aside class="header-title">
        <h2>{{artist.name}}</h2>
        <img src="@/assets/sources/images/avatar.jpg" alt="avatar image">
      </aside>

      <aside class="header-social">
        <div class="center" style="gap:clamp(1em, 2.5vw, 2.5em)">
          <v-btn v-for="(item,i) in dataSocial" :key="i" icon :href="item.link" target="_blank">
            <v-icon size="clamp(2em, 2.8vw, 2.8em)">{{item.icon}}</v-icon>
          </v-btn>
        </div>
      </aside>
    </section>
    
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
        <span>Total Events</span>
        <span>{{dataProfits.events}}</span>
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

    <v-expansion-panels id="artist-about" class="custome-expansion">
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down" class="bold">About Artist</v-expansion-panel-header>

        <v-expansion-panel-content>
          <p v-for="n in 3" :key="n">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip 
            ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu 
            feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit 
            augue duis dolore te feugait nulla facilisi.
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci 
            tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>



  <v-slide-group
    id="custome-slider"
    v-model="slider"
    mandatory
    show-arrows
    center-active
  >
    <v-slide-item v-for="(item,i) in dataSlider" :key="i" v-slot="{ active, toggle }">
      <v-sheet :key="i" color="rgba(0, 0, 0, .4)" class="divcol" @click="toggle">
        <v-card
          class="card divcol custome"
          :class="{
            uranium: item.tier===6,
            diamond: item.tier===5,
            platinum: item.tier===4,
            gold: item.tier===3,
            silver: item.tier===2,
            bronze: item.tier===1,
            active: active
          }"
          @click="$store.dispatch('goTo', {key: 'nft', item, event: $event, id: item.name})">
          <div
            class="container-img"
            :style="`--tag-tier: '${
              item.tier===1 ? 'bronze' :
              item.tier===2 ? 'silver' :
              item.tier===3 ? 'gold' :
              item.tier===4 ? 'platinum' :
              item.tier===5 ? 'diamond' :
              item.tier===6 ? 'uranium' : 'user'
            }'`"
          >
            <img :src="item.img" :alt="`${item.name} image`">
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

        <div class="tier-desc divcol">
          <a class="tup bold" style="cursor:default">{{item.name}} tier {{
            item.tier==='bronze' ? 1 :
            item.tier==='silver' ? 2 :
            item.tier==='gold' ? 3 :
            item.tier==='platinum' ? 4 :
            item.tier==='diamond' ? 5 :
            item.tier==='uranium' ? 6 : ''
          }} nft</a>
          <ul>
            <li v-show="item.tier">Access to artists community discord.</li>
            <li v-show="item.tier">Access to special membership perks.</li>
            <li v-show="item.tier">Access to more valuable NFT’s and collectables.</li>
          </ul>
        </div>

        <div class="container-actions divcol">
          <a @click="$router.push(localePath(`/nft-details/`))">More Details</a>
          <v-btn :ripple="false" class="btn activeBtn align" style="--w: calc(100% - 1em)">Buy</v-btn>
        </div>
      </v-sheet>
    </v-slide-item>
    
    <template #prev="{ on, attrs}">
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
  </v-slide-group>


    <h2 class="Title tup">events</h2>

    <v-expansion-panels class="custome-expansion">
      <v-expansion-panel v-for="(item,i) in dataEvents" :key="i">
        <v-expansion-panel-header
          expand-icon="mdi-menu-down" class="bold tcap"
          @click="$store.dispatch('goTo', {key: 'event', item, id: item.event})">
          {{item.event}}
        </v-expansion-panel-header>
      </v-expansion-panel>
    </v-expansion-panels>

    <h2 class="Title fwrap" style="--fb: 200px; gap: 5px clamp(1em, 2vw, 2em)">
      <span class="tup" style="--fb: max-content">nft &amp; collections</span>

      <v-text-field
        v-model="search"
        hide-details solo
        append-icon="mdi-magnify"
        label="Search for NFTs Name, Artist, Event &amp; Collections"
        style="--p: 0 1em 0 2em"
        class="search"
      ></v-text-field>

      <v-select
        v-model="filter.model"
        :items="filter.list"
        hide-details solo
        label="Sort by"
        style="--p: 0 1em 0 2em"
      ></v-select>
    </h2>

    <section class="container-collections grid" style="--gtc: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); gap:2em">
      <v-card
        v-for="(item,i) in dataCollections" :key="i"
        class="card divcol custome"
        :class="{
          uranium: item.tier===6,
          diamond: item.tier===5,
          platinum: item.tier===4,
          gold: item.tier===3,
          silver: item.tier===2,
          bronze: item.tier===1,
        }"
        @click="$store.dispatch('goTo', {key: 'nft', item, event: $event, id: item.name})">
        <div
          class="container-img"
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
          <img :src="item.img" :alt="`${item.name} image`">
        </div>
        
        <div class="container-content tcenter">
          <v-avatar style="border: 2px solid #fff">
            <img :src="item.avatar" :alt="`${item.artist} image`" style="--of: cover">
          </v-avatar>
          <a>{{item.name}}</a>
          <p>{{item.desc}}</p>

          <div class="center bold" style="gap: 6.4px">
            <span class="floor" style="--c: var(--accent)">Floor Price: 250.00</span>
            <img src="@/assets/sources/logos/near-orange.svg" alt="near" style="--w:15px">
          </div>
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

      <v-btn v-for="n in dataCollections.length" :key="n" text>{{n}}</v-btn>

      <button
        :style="pagination < dataCollections.length-1 ? 'opacity: 1' : 'opacity: .5'"
        @click="pagination < dataCollections.length-1 ? pagination++ : ''"
      >
        <v-icon size="2em">mdi-play</v-icon>
      </button>
    </v-btn-toggle>

    <h2 class="Title tup">chats</h2>

    <v-expansion-panels class="custome-expansion">
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
  name: "CollectionDetailsPage",
  data() {
    return {
      dataSocial: [
        { icon: "mdi-instagram", link: "#" },
        { icon: "mdi-twitter", link: "#" },
        { icon: "mdi-facebook", link: "#" },
        { icon: "discord", link: "#" },
      ],
      dataProfits: {
        nfts: 7659,
        owners: 1256,
        events: 1206,
        collections: 205,
        high: 120.45,
      },
      slider: 0,
      dataSlider: [
        {
          img: require('~/assets/sources/images/img-listed-1.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: 3,
          type: "nft",
        },
        {
          img: require('~/assets/sources/images/img-listed-2.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: 2,
          type: "nft",
        },
        {
          img: require('~/assets/sources/images/img-listed-3.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: 4,
          type: "nft",
        },
        {
          img: require('~/assets/sources/images/img-listed-4.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: 5,
          type: "nft",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: 6,
          type: "nft",
        },
        {
          img: require('~/assets/sources/images/img-listed-6.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: 1,
          type: "nft",
        },
      ],
      dataEvents: [
        { event: "toronto" },
        { event: "miami" },
        { event: "madrid" },
      ],
      search: "",
      filter: {
        model: "",
        list: ["Lastest Releases", "Newest", "Oldest", "Comming Soon", "Lorem ipsum", "Lorem ipsum"],
      },
      dataCollections: [
        {
          img: require('~/assets/sources/images/img-listed-1.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°1",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "live",
          type: "nft",
          tier: 3,
        },
        {
          img: require('~/assets/sources/images/img-listed-2.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°2",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "sold out",
          type: "collection",
        },
        {
          img: require('~/assets/sources/images/img-listed-3.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°3",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "comming soon",
          type: "nft",
          tier: 2,
        },
        {
          img: require('~/assets/sources/images/img-listed-4.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°4",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "live",
          type: "collection",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "sold out",
          type: "nft",
          tier: 4,
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "sold out",
          type: "nft",
          tier: 6,
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "sold out",
          type: "collection",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          state: "sold out",
          type: "collection",
        },
      ],
      pagination: 0,
      dataChats: [
        { icon: "discord", chat: "discord" },
      ],
    }
  },
  head() {
    const title = "Artist Details"
    return {
      title,
    }
  },
  computed: {
    user() {return this.$store.state.dataUser},
    artist() {return JSON.parse(localStorage.getItem("artist"))},
  },
  created() {
    if (!this.artist) {this.$router.push(this.localePath('/artists'))}
  },
  mounted() {
    const pageName = 'artist-details';
    const page = document.querySelector(`#${pageName}`);
    
    // listener title height
    const titleHeight = () => {
      const title = document.querySelector(".header-title");
      page.style.setProperty('--h-header-title', `${title.getBoundingClientRect().height}px`)
    }
    titleHeight();

    // listener social width
    const titleWidth = () => {
      const social = document.querySelector(".header-social div.center");
      page.style.setProperty('--w-header-social', `${social.getBoundingClientRect().width}px`)
    }
    titleWidth();

    // listener social height
    const socialHeight = () => {
      const social = document.querySelector(".header-social");
      page.style.setProperty('--h-header-social', `${social.getBoundingClientRect().height}px`)
    }
    socialHeight();
    
    // listener avatar width
    const avatarWidth = () => {
      const avatar = document.querySelector(".header-title img");
      page.style.setProperty('--w-avatar', `${avatar.getBoundingClientRect().width}px`)
    }
    avatarWidth();

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
      if (this.$route.path.includes(`/${pageName}`)) {
        titleHeight();
        titleWidth();
        socialHeight();
        avatarWidth();
        heightH2();

        // listener reload columns in caraousel
        const reload = this.modelCarousel;
        this.modelCarousel = -1;
        this.modelCarousel = reload;
      };
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

<style src="~/assets/styles/pages/artist-details.scss" lang="scss" />
