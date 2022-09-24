<template>
  <div id="profile" class="divcol">
    <section
      class="header"
      :style="`--bg-image: url(${profileBanner})`">
      <img src="@/assets/sources/images/avatar.jpg" alt="avatar image">
      <v-btn :ripple="false" class="btn activeBtn" :to="localePath('/edit-profile')">Edit Profile</v-btn>
    </section>

    <section class="container-user">
      <aside class="container-user--social center gap1">
        <v-btn v-for="(item,i) in dataSocial" :key="i" icon :href="item.link">
          <v-icon size="clamp(2em, 2.4vw, 2.4em)" :style="i===0 ? 'transform: rotate(-50deg)' : ''">{{item.icon}}</v-icon>
        </v-btn>
      </aside>

      <h2 class="p">Username #35461</h2>

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
          <span>{{dataProfits.high}}</span>
        </v-sheet>
      </section>

      <p class="p">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
        erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
        consequat.
      </p>
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
        :label="item.key==='filterB'?'Sort by:':''"
        style="--p: 0 1em 0 2em"
      ></v-select>
    </section>

    <section class="container-nfts grid">
      <v-card
        v-for="(item,i) in dataNfts" :key="i"
        class="card divcol"
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
          :style="
            `--tag-tier: '${item.tier}';
            ${item.state ? `--tag-state: '${item.state}'` : ''}`
          "
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
      profileBanner: require('~/assets/sources/images/img-header-profile.jpg'),
      dataSocial: [
        { icon: "mdi-link" },
        { icon: "mdi-twitter", link: "#" },
        { icon: "discord", link: "#" },
        { icon: "telegram", link: "#" },
      ],
      dataProfits: {
        nfts: 7659,
        chats: 3,
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
      dataNfts: [
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: "gold",
          state: "sold out",
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
          state: "sold out",
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
      dataChats: [
        { icon: "discord", chat: "discord artist name 1" },
        { icon: "discord", chat: "discord artist name 2" },
        { icon: "discord", chat: "discord artist name 3" },
      ],
    }
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/pages/profile.scss" lang="scss" />
