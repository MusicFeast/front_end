<template>
  <div id="profile" class="divcol">
    <section
      class="header"
      :style="`
        --bg-image: url(${user.banner});
        --tag-tier: '${
          user.tier===1 ? 'bronze' :
          user.tier===2 ? 'silver' :
          user.tier===3 ? 'gold' :
          user.tier===4 ? 'platinum' :
          user.tier===5 ? 'diamond' :
          user.tier===6 ? 'uranium' : 'user'
        }'
      `">
      <v-avatar
        width="var(--size)" height="var(--size)" style="--size: 13.954375em"
        @mouseenter="showTag()" @mouseleave="hideTag()">
        <img :src="user.avatar" alt="avatar image">
      </v-avatar>
      <v-btn :ripple="false" class="btn activeBtn" :to="localePath('/edit-profile')">Edit Profile</v-btn>
    </section>

    <section class="container-user">
      <aside class="container-user--social center gap1">
        <v-btn icon>
          <v-icon size="clamp(2em, 2.4vw, 2.4em)" style="transform: rotate(-50deg)">mdi-link</v-icon>
        </v-btn>
        
        <v-btn v-for="(item,i) in user.dataSocial" :key="i" icon :href="item.link" target="_blank">
          <v-icon size="clamp(2em, 2.4vw, 2.4em)">{{item.icon}}</v-icon>
        </v-btn>
      </aside>

      <h2 class="p">{{user.username}}</h2>

      <section class="container-profit bold fwrap align" style="max-width: 62.616875em">
        <v-sheet color="transparent" class="divcol center">
          <span>Total NFTs</span>
          <span>{{dataProfits.nfts}}</span>
        </v-sheet>
        <v-sheet color="transparent" class="divcol center">
          <span>Chat Enabled</span>
          <span>{{dataProfits.chats}}</span>
        </v-sheet>
        <v-sheet color="transparent" class="divcol center">
          <span>All Time High</span>
          <span>$ {{dataProfits.high}}K</span>
        </v-sheet>
      </section>

      <p class="p">{{user.bio}}</p>
    </section>

    <h2 class="Title tup">my nfts</h2>

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
        :label="item.key==='filterA'?'by Tier:':'Sort by:'"
        style="--p: 0 1em 0 2em"
      ></v-select>
    </section>

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
        @click="$store.dispatch('goTo', {key: 'user-nft', item, event: $event})">
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
  name: "ProfilePage",
  data() {
    return {
      dataProfits: {
        nfts: 7659,
        chats: 3,
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
          img: require('~/assets/sources/images/img-listed-1.jpg'),
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
          img: require('~/assets/sources/images/img-listed-2.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          type: "nft",
          editions: "250.00",
          tier: 2,
        },
        {
          img: require('~/assets/sources/images/img-listed-3.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          type: "nft",
          editions: "250.00",
          tier: 4,
        },
        {
          img: require('~/assets/sources/images/img-listed-4.jpg'),
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
          img: require('~/assets/sources/images/img-listed-6.jpg'),
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
  head() {
    const title = "Profile"
    return {
      title,
    }
  },
  computed: {
    user() {return this.$store.state.dataUser},
  },
  mounted() {
    const pageName = 'profile';
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
      if (this.$route.path.includes(`/${pageName}`)) {
        heightH2()
      };
    });

    this.setProfile();
  },
  methods: {
    async setProfile() {
      const baseUrl = this.$axios.defaults.baseURL;
      const accountId = await this.$store.dispatch("getData", {get: "wallet"})
      // get data user
      await this.$axios.post(`${baseUrl}api/v1/get-perfil-data/`, { "wallet": accountId })
      .then(fetch => {
        if (fetch.data[0].username && this.$route.path === '/profile') {
          this.$router.replace(`${this.$route.path}/:${this.user.username}`)
        }
      }).catch(error => {
        this.$alert("cancel", {desc: error.message})
        console.error(error);
      })
    },
    showTag() {document.querySelector(".header").classList.add("hover")},
    hideTag() {document.querySelector(".header").classList.remove("hover")},
  }
};
</script>

<style src="~/assets/styles/pages/profile.scss" lang="scss" />
