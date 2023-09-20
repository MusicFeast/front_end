<template>
  <v-navigation-drawer
    id="comunity__drawer"
    v-model="model"
    :absolute="isMobile"
    :touchless="!isMobile"
  >
    <ComunitySideBar></ComunitySideBar>

    <section id="comunity__drawer-drawer" class="flex-grow-1">
      <div id="comunity__drawer-header" class="d-flex align-center" style="gap: 10px">
        <avatar-tier
          v-show="artistSelect?.img"
          :src="artistSelect?.img"
          sizes="40"
          tier="4"
          class="flex-grow-0"
        ></avatar-tier>

        <h6 v-show="artistSelect?.artist" class="text-labeled mb-0">
          {{ artistSelect?.artist }}
          <!-- <v-icon color="var(--labeled)">mdi-menu-down</v-icon> -->
        </h6>
      </div>


      <v-list expand nav>
        <v-list-item
          v-for="item in items" :key="item.chat"
          v-model="item.active"
          flat
          :class="{active: item.active}"
          @click="selectChat(item)"
        >
          <template>
            <v-list-item-content>
              <!-- <v-list-item-title v-text="item.title" /> -->
              <v-list-item-title>
                <span>#</span> {{ item.chat }}
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <!-- <v-list-item
            v-for="(child, i2) in item.items" :key="i2"
            dense
            flat
            :class="{active: child.active}"
            @click="items.forEach(e => e.items.forEach(e => e.active = false)); child.active = true"
          >
            <v-list-item-content>
              <v-list-item-title>
                <span>#</span> {{ child.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->
        </v-list-item>
      </v-list>


      <!-- <div id="comunity__drawer-footer" class="d-flex" style="gap: 10px">
        <v-badge
          bottom
          overlap
          color="green"
          offset-x="15"
          offset-y="15"
          class="not"
        >
          <v-img-load
            :src="testImage"
            alt="test image"
            sizes="50px"
            rounded="50%"
            border="1.5px solid #000"
          />
        </v-badge>

        <div class="d-flex flex-column justify-center" style="gap: 5px">
          <h6 class="mb-0">User name 🤑</h6>
          <span>Online</span>
        </div>
      </div> -->
    </section>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "ComunityDrawer",
  data() {
    return {
      model: true,
      items: [
        // {
        //   title: 'Grand Entrance',
        //   active: true
        // },
        // {
        //   title: 'Grand Entrance',
        //   active: false
        // },
        // {
        //   title: 'Grand Entrance',
        //   active: false
        // },
        // {
        //   title: 'Grand Entrance',
        //   active: false
        // },
        // {
        //   title: 'Grand Entrance',
        //   active: false
        // },
        // {
        //   title: 'Grand Entrance',
        //   active: false
        // },
      ],
      selectItem: null,
      testImage: 
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
    }
  },
  computed: {
    artistSelect() {
      if (this.$store.getters.getArtistSelect) {
        this.getChats(this.$store.getters.getArtistSelect)
      }
      return this.$store.getters.getArtistSelect;
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    }
  },
  watch: {
    isMobile(value) {
      if (value) this.model = false
      else this.model = true
    }
  },
  mounted() {
  },
  methods: {
    selectChat(item) {
      // item.active = true
      this.items.forEach(e=>{e.active=false;item.active=true})
      this.$store.state.chatSelect = item
      // this.$store.dispatch('updateArtistSelect', item);
      // this.$store.commit('updateArtistSelect', item)
      // this.$store.state.artistSelect = item
    },
    getChats(item) {
      this.$fire.firestore.collection('ARTISTS').doc(item.id).collection("CHATS").onSnapshot((snapshot) => {
        const postData = [];
        let i = 0
        snapshot.forEach((doc) => {
          const item = { ...doc.data(), id: doc.id, active: false }
          if (i === 0) {
            item.active = false
          }
          postData.push(item)
          i++
        });
        this.items = postData.sort((a, b) => {
          if (a.order < b.order) {
            return -1;
          }
          if (a.order > b.order) {
            return 1;
          }
          return 0;
        });
      });
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/main/main.scss';
$border-radius: 8px;

#comunity__drawer {
  min-width: var(--drawer-width);
  background: var(--drawer) !important;
  // left: var(--side-bar-width);

  &-drawer {
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar { display: none }
  }


  .v-navigation-drawer {
    &__content {
      display: flex;

      &::-webkit-scrollbar { display: none }
    }

    &__border {
      background-color: var(--secondary) !important;
    }
  }


  &-header {
    height: var(--header-height);
    padding: 6px 8px;
    background-color: var(--drawer);
    border-bottom: 1px solid;
    border-right: 1px solid;
    border-color: var(--secondary);
  }


  .v-list {
    flex-grow: 1;
    padding-right: 0;


    &-group {
      &__header {
        margin-bottom: 0;
        min-height: 40px;
        height: 40px;

        &::before {
          border-top-left-radius: $border-radius;
          border-bottom-left-radius: $border-radius;
        }

        * { color: var(--title) /* !important */ }

        .v-list-item {

          &__title { @extend .text-title }

          &__icon {
            margin-top: 7px;
            margin-right: 5px;
          }
        }
      }


      &__items {
        * { color: var(--label) }

        .v-list-item {
          padding-left: 30px;
          min-height: 27px;
          border-top-left-radius: $border-radius;
          border-bottom-left-radius: $border-radius;

          &__title { @extend .text-labeled }

          &__content { padding-block: 0 }

          span { color: var(--title) !important }

          &.active {
            background-color: var(--body);

            span { color: var(--label) !important }
          }
        }
      }

      &--active { margin-bottom: 10px }
    }
  }


  &-footer {
    padding: 10px 10px;
    background-color: var(--secondary);
    border-left: 1px solid var(--drawer);

    .v-badge__wrapper .v-badge__badge {
      $size: 15px;
      max-width: $size !important;
      min-width: $size !important;
      width: $size !important;
      height: $size !important;
      max-height: $size !important;
      min-height: $size !important;
    }

    h6 {
      font-size: 16px !important;
      font-weight: 600 !important;
    }

    h6 + span {
      font-size: 13px !important;
      font-weight: 400 !important;
    }
  }
}
</style>
