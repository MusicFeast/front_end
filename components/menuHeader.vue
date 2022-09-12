<template>
  <div id="menuHeader">
    <!-- drawer -->
    <v-navigation-drawer
      id="toggleBar"
      v-model="drawer"
      height="100%"
      fixed left
      temporary
      :overlay-opacity="$store.state.overlay.opacity"
      :overlay-color="$store.state.overlay.color"
      color="var(--secondary)"
      class="font2"
    >
      <section class="container-header end">
        <v-btn icon @click="drawer=false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </section>

      <section class="container-content divcol jspace gap2">
        <!-- <v-expansion-panels focusable accordion class="anim_moveleft">
          <template v-if="dataDrawer.expansion">
            <v-expansion-panel v-for="(item, index) in dataDrawer.expansion" :key="index">
              <v-expansion-panel-header hide-actions @click="ActiveClass('expansion', item);">
                <v-col class="conttitle acenter gap1 h10_em">
                  <span class="normal" style="max-width: max-content">{{ item.name }}</span>
                  <v-icon small color="#ffffff" :class="{active_rotate: item.active}">mdi-menu-down</v-icon>
                </v-col>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-list>
                  <v-list-item-group active-class="activeText">
                    <v-list-item v-for="(item2,i) in item.selection" :key="i" :ripple="false" :to="item2.to">
                      <v-list-item-title class="center h10_em">
                        <span class="normal">{{ item2.name}}</span>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </template> -->


          <template v-if="dataDrawer.list">
            <v-list class="fill_w">
              <!-- ciclo for items -->
              <v-list-item v-for="(item,i) in dataDrawer.list" :key="i" link :href="`${$i18n.locale}/${item.to}`">
                <v-list-item-title class="conttitle acenter gap1 h10_em">
                  <!-- <img :src="require(`~/assets/sources/icons/${item.key}${item.active?'-active':''}.svg`)" class="icon" :alt="item.alt" :class="{active: item.active}"> -->
                  <span style="max-width: max-content">
                    {{ item.name }}
                  </span>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </template>
        <!-- </v-expansion-panels> -->

        <section class="container-footer divcol center gap2">
          <v-btn class="btn" style="--max-w:9.1875em;--p: .5em 2em" @click="$parent.signIn()">Connect</v-btn>
        </section>
      </section>
    </v-navigation-drawer>

    <!-- menu market -->
    <!-- <v-menu activator=".openMenuMarket" right offset-x>
      <v-list id="menuMarket" class="font2">
        <v-list-item-group active-class="activeClass">
          <v-list-item disabled>
            <v-list-item-title>MARKETPLACE</v-list-item-title>
          </v-list-item>

          <v-list-item v-for="(item,i) in dataDrawer.expansion[0].selection" :key="i" :to="`/${item.key}`">
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu> -->

    <!-- menu login -->
    <v-menu activator=".openMenuLogin" right offset-x>
      <v-list id="menuLogin" class="font2">
        <v-list-item-group active-class="activeClass">
          <v-list-item v-for="(item,i) in dataMenuLogin" :key="i" :to="item.to" @click="Logout(item.key)">
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "HeaderMenuComponent",
  data() {
    return {
      messages: 1,
      drawer: false,
      dataDrawer: {
        list: [
          {
            key: "home",
            name: "Home",
            to: "#",
          },
          {
            key: "about",
            name: "About",
            to: "#about",
          },
          {
            key: "artists",
            name: "Artists",
            to: "#artists",
          },
          {
            key: "news",
            name: "News",
            to: "#news",
          },
          {
            key: "lastest-releases",
            name: "Lastest Releases",
            to: "#lastest-releases",
          },
          {
            key: "contact",
            name: "Contact",
            to: "#contact",
          },
        ],
        // expansion: [
        //   {
        //     key: "market",
        //     name: "MARKETPLACE",
        //     selection: [
        //       {name: "Buy", key: "buy", to: "/buy"},
        //       {name: "Sell", key: "sell", to: "/sell"},
        //     ],
        //   },
        // ],
      },
      // dataSocial: [
      //   { icon:"twitter", url:"#" },
      //   { icon:"instagram", url:"#" },
      //   { icon:"twitch", url:"#" }
      // ],
      dataMenuLogin: [
        { key:"profile", name:"Profile", to:"/profile" },
        { key:"library", name:"Library", to:"/library" },
        { key:"logout", name:"Log out" },
      ],
    };
  },
  // created() {
  //   const theme = localStorage.getItem("theme");
  //   this.OverlayMethod(theme);
  // },
  methods: {
    ActiveClass(key, item) {
      // mejorar hace falta
      if (key === 'expansion') {
        if (item.active) {
          item.active=!item.active
        } else {
          this.dataDrawer.list.forEach(e=>{e.active=false})
          this.dataDrawer.expansion.forEach(e=>{e.active=false})
          item.active=true
        }
      } else if (key === 'list') {
        this.dataDrawer.expansion.forEach(e=>{e.active=false})
        this.dataDrawer.list.forEach(e=>{e.active=false})
        item.active=true
      }
    },
    Logout(key) {
      if (key === 'logout') {localStorage.setItem('auth', false);this.$router.push(this.localePath('/'));this.$router.go()}
    },
  },
};
</script>

<style src="~/assets/styles/components/header.scss" lang="scss" />
