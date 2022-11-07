<template>
  <div id="profile" class="divcol">
    <v-img
      :src="user.banner" transition="fade-transition" class="header"
      :style="`
        --tag-tier: '${
          user.tier===1 ? 'bronze' :
          user.tier===2 ? 'silver' :
          user.tier===3 ? 'gold' :
          user.tier===4 ? 'platinum' :
          user.tier===5 ? 'diamond' :
          user.tier===6 ? 'uranium' : 'user'
        }'
      `">
      <template #default>
        <v-avatar
          width="var(--size)" height="var(--size)" style="--size: 13.954375em"
          @mouseenter="showTag()" @mouseleave="hideTag()">
          <v-img :src="user.avatar" alt="avatar image" transition="fade-transition">
            <template #placeholder>
              <v-skeleton-loader type="avatar" />
            </template>
          </v-img>
        </v-avatar>
        <v-btn :ripple="false" class="btn activeBtn" :to="localePath('/edit-profile')">Edit Profile</v-btn>
      </template>
      <template #placeholder>
        <v-skeleton-loader v-show="user.banner" type="card" />
      </template>
    </v-img>

    <section class="container-user">
      <aside class="container-user--social center gap1">
        <!-- <v-btn icon>
          <v-icon size="clamp(2em, 2.4vw, 2.4em)" style="transform: rotate(-50deg)">mdi-link</v-icon>
        </v-btn> -->
        
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

      <p v-show="user.bio" class="p tcenter">{{user.bio}}</p>
    </section>

    <h2 class="Title tup">my nfts</h2>

    <Filters
      :search="search"
      :filter-a="filterA.list"
      :filter-b="filterB.list"
      @search="(model) => search = model"
      @filterA="(model) => filterA.model = model"
      @filterB="(model) => filterB.model = model"
    />

    <section ref="container" class="container-nfts grid">
      <v-card
        v-for="(item,i) in dataNfts_pagination" :key="i"
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
        <v-img
          :src="item.img" :alt="`${item.name} image`" transition="fade-transition"
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
          ">
          <template #placeholder>
            <v-skeleton-loader type="card" />
          </template>
        </v-img>
        
        <div class="container-content tcenter">
          <v-avatar style="border: 2px solid #fff">
            <v-img :src="item.avatar" :alt="`${item.artist} image`" transition="fade-transition">
              <template #placeholder>
                <v-skeleton-loader type="avatar" />
              </template>
            </v-img>
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

    <Pagination
      :total-pages="pagination_per_page"
      :current-page="currentPage"
      @pagechanged="(page) => currentPage = page"
    />

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
import computeds from '~/mixins/computeds'
import styles from '~/mixins/styles'

export default {
  name: "ProfilePage",
  mixins: [computeds, styles],
  data() {
    return {
      pageName: 'profile',
      dataProfits: {
        nfts: 7659,
        chats: 3,
        high: 120.45,
      },
      search: "",
      filterA: {
        model: "",
        list: ["all tiers", 6, 5, 4, 3, 2, 1],
      },
      filterB: {
        model: "",
        list: ["lastest releases", "newest", "oldest", "comming soon", "lorem ipsum", "lorem ipsum"],
      },
      dataNfts: [
        {
          img: require('~/assets/sources/images/img-listed-1.jpg'),
          avatar: require("~/assets/sources/images/avatar.png"),
          name: "Artist Name o Collection  n°1",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          type: "nft",
          editions: "250.00",
          tier: 3,
          state: "sold out",
        },
        {
          img: require('~/assets/sources/images/img-listed-2.jpg'),
          avatar: require("~/assets/sources/images/avatar.png"),
          name: "Artist Name o Collection  n°2",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          type: "nft",
          editions: "250.00",
          tier: 2,
        },
        {
          img: require('~/assets/sources/images/img-listed-3.jpg'),
          avatar: require("~/assets/sources/images/avatar.png"),
          name: "Artist Name o Collection  n°3",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          type: "nft",
          editions: "250.00",
          tier: 4,
        },
        {
          img: require('~/assets/sources/images/img-listed-4.jpg'),
          avatar: require("~/assets/sources/images/avatar.png"),
          name: "Artist Name o Collection  n°4",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          type: "nft",
          editions: "250.00",
          tier: 5,
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.png"),
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
          avatar: require("~/assets/sources/images/avatar.png"),
          name: "Artist Name o Collection  n°6",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          type: "nft",
          editions: "250.00",
          tier: 1,
        },
      ],
      currentPage: 1,
      itemsPerPage: 10,
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
    dataNfts_pagination() {
      return this.$store.getters.pagination({
        items: this.dataNfts, currentPage: this.currentPage, itemsPerPage: this.itemsPerPage,
        search: this.search, filterA: this.filterA.model
      })
    },
    pagination_per_page() {
      return Math.ceil(this.dataNfts.length / this.itemsPerPage)
    },
  },
  mounted() {
    // this.setProfile();
  },
  methods: {
    // setProfile() {
    //   if (this.$route.path === '/profile') {
    //     this.$router.replace(`${this.$route.path}/:${this.user.username}`)
    //   }
    // },
    showTag() {document.querySelector(".header").classList.add("hover")},
    hideTag() {document.querySelector(".header").classList.remove("hover")},
  }
};
</script>

<style src="~/assets/styles/pages/profile.scss" lang="scss" />
