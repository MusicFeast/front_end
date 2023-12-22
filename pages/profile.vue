<template>
  <div id="profile" class="divcol">
    <ModalsProfile ref="modal"></ModalsProfile>
    <ModalsCommunityChat ref="modal"></ModalsCommunityChat>

    <v-img :src="user.banner" transition="fade-transition" class="header">
      <template #default>
        <v-avatar
          width="var(--size)"
          height="var(--size)"
          style="--size: 13.954375em"
          @mouseenter="showTag()"
          @mouseleave="hideTag()"
        >
          <v-img
            :src="user.avatar"
            alt="avatar image"
            transition="fade-transition"
          >
            <template #placeholder>
              <v-skeleton-loader type="avatar" />
            </template>
          </v-img>
        </v-avatar>
        <v-btn
          :ripple="false"
          class="btn activeBtn"
          :to="localePath('/edit-profile')"
          >Edit Profile</v-btn
        >
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

        <v-btn
          v-for="(item, i) in user.dataSocial"
          :key="i"
          icon
          :href="item.link"
          target="_blank"
        >
          <v-icon size="clamp(2em, 2.4vw, 2.4em)">{{ item.icon }}</v-icon>
        </v-btn>
      </aside>

      <h2 class="p">{{ user.username }}</h2>

      <section
        class="container-profit bold fwrap align"
        style="max-width: 62.616875em"
      >
        <v-sheet color="transparent" class="divcol center">
          <span>Total NFTs</span>
          <span>{{ dataProfits.nfts }}</span>
        </v-sheet>
        <v-sheet color="transparent" class="divcol center">
          <span>Chats Enabled</span>
          <span>{{ dataProfits.chats }}</span>
        </v-sheet>
        <v-sheet color="transparent" class="divcol center">
          <span>All Time High</span>
          <span>$ {{ dataProfits.high }}</span>
        </v-sheet>
      </section>

      <p v-show="user.description" class="p tcenter">{{ user.description }}</p>
    </section>

    <h2 class="Title tup">my nfts</h2>

    <Filters
      :search="search"
      :filter-a="filterA.list"
      :filter-b="filterB.list"
      @search="(model) => (search = model)"
      @filterA="(model) => (filterA.model = model)"
      @filterB="(model) => (filterB.model = model)"
      :hide="[3]"
    />

    <section ref="container" class="container-nfts grid">
      <v-card
        v-for="(item, i) in dataNfts_pagination"
        :key="i"
        class="card divcol custome"
        @click="
          $store.dispatch('goTo', { key: 'user-nft', item, event: $event })
        "
      >
        <v-img
          :src="item.img"
          :alt="`${item.name} image`"
          transition="fade-transition"
          :style="`
            ${item.state ? `--tag-state: '${item.state}'` : ''}`"
        >
          <template #placeholder>
            <v-skeleton-loader type="card" />
          </template>
        </v-img>

        <div class="container-content tcenter">
          <v-avatar style="border: 2px solid #fff">
            <v-img
              :src="item.avatar"
              :alt="`${item.artist} image`"
              transition="fade-transition"
            >
              <template #placeholder>
                <v-skeleton-loader type="avatar" />
              </template>
            </v-img>
          </v-avatar>
          <a>{{ item.name }}</a>
          <!-- <a>{{item.artista.limitString(27)}}</a> -->
          <p v-html="item.desc.limitString(27)"></p>

          <div class="center" style="gap: 6.4px">
            <span class="floor" style="--c: var(--accent)"
              >Floor Price: $ {{ Number(item.floor_price)?.toFixed(2) }}</span
            >
            <!-- <img src="@/assets/sources/logos/near-orange.svg" alt="near" style="--w:0.9375em"> -->
          </div>
          <span class="floor" style="--c: var(--accent)"
            >Editions: {{ item.editions }}</span
          >
        </div>
      </v-card>
    </section>

    <Pagination
      :total-pages="pagination_per_page"
      :current-page="currentPage"
      @pagechanged="(page) => (currentPage = page)"
    />

    <h2 class="Title tup">Offers</h2>

    <v-expansion-panels class="custome-expansion not_padding">
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down" class="bold"
          >My offers</v-expansion-panel-header
        >

        <v-expansion-panel-content
          color="rgb(0, 0, 0, .4)"
          class="container-table--expansion mt-5"
        >
          <v-data-table
            :headers="tableHeadersOffers"
            :items="tableItemsOffersRe"
            :page.sync="currentPageOffers"
            :items-per-page="itemsPerPageOffers"
            hide-default-footer
            mobile-breakpoint="-1"
            :header-props="{ sortIcon: 'mdi-menu-down' }"
            style="background: transparent"
            bac
          >
            <template #[`item.nft_media`]="{ item }">
              <center class="center" style="gap: 10px">
                <v-avatar style="border: 2px solid #fff">
                  <v-img
                    :src="item.nft_media"
                    alt="artist avatar"
                    transition="fade-transition"
                  >
                    <template #placeholder>
                      <v-skeleton-loader type="avatar" />
                    </template>
                  </v-img>
                </v-avatar>
              </center>
            </template>

            <template #[`item.price_near`]="{ item }">
              <center v-if="item.price_near" class="divcol" style="gap: 5px">
                <span>N{{ item.price_near }}</span>
                <span class="normal">$ {{ dollarConversion(item.price) }}</span>
              </center>

              <center v-else class="divcol" style="gap: 5px">
                <span>---</span>
                <span>---</span>
              </center>
            </template>

            <!-- <template #[`item.token_id`]="{ item }">
              <span class="tup" :style="`${item.vault ? '--c: #26A17B' : ''}`">{{item.vault ? "yes" : "no"}}</span>
            </template> -->

            <template #[`item.buyer_id`]="{ item }">
              <center class="center" style="gap: 10px">
                <v-avatar style="border: 2px solid #fff">
                  <v-img
                    :src="require('~/assets/sources/avatars/avatar.png')"
                    alt="artist avatar"
                    transition="fade-transition"
                  >
                    <template #placeholder>
                      <v-skeleton-loader type="avatar" />
                    </template>
                  </v-img>
                </v-avatar>
                <span :title="item.buyer_id">{{
                  item.buyer_id.limitString(20)
                }}</span>
              </center>
            </template>

            <template #[`item.actions`]="{ item }">
              <center class="center" style="gap: 30px">
                <!-- <v-btn
                  :disabled="offerBtn"
                  :ripple="false" class="btn activeBtn bold"
                  style="--min-w: 112px; --w: min(100%, 9em); --fs: 16px"
                  @click="acceptOffer(item)"
                >Accept</v-btn> -->
                <v-btn
                  :disabled="offerBtn"
                  :ripple="false"
                  class="btn activeBtn bold"
                  style="
                    --min-w: 112px;
                    --w: min(100%, 9em);
                    --fs: 16px;
                    --bg: #fff;
                    --c: var(--primary);
                  "
                  @click="declineOffer(item)"
                  >Cancel Offer</v-btn
                >
              </center>
            </template>
          </v-data-table>

          <Pagination
            :total-pages="pagination_per_page_offers"
            :current-page="currentPageOffers"
            @pagechanged="(page) => (currentPageOffers = page)"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down" class="bold"
          >Offers Received</v-expansion-panel-header
        >

        <v-expansion-panel-content
          color="rgb(0, 0, 0, .4)"
          class="container-table--expansion mt-5"
        >
          <v-data-table
            :headers="tableHeadersOffers"
            :items="tableItemsOffers"
            :page.sync="currentPageOffers"
            :items-per-page="itemsPerPageOffers"
            hide-default-footer
            mobile-breakpoint="-1"
            :header-props="{ sortIcon: 'mdi-menu-down' }"
            style="background: transparent"
            bac
          >
            <template #[`item.nft_media`]="{ item }">
              <center class="center" style="gap: 10px">
                <v-avatar style="border: 2px solid #fff">
                  <v-img
                    :src="item.nft_media"
                    alt="artist avatar"
                    transition="fade-transition"
                  >
                    <template #placeholder>
                      <v-skeleton-loader type="avatar" />
                    </template>
                  </v-img>
                </v-avatar>
              </center>
            </template>

            <template #[`item.price_near`]="{ item }">
              <center v-if="item.price_near" class="divcol" style="gap: 5px">
                <span>{{ item.price_near }} N</span>
                <span class="normal">$ {{ dollarConversion(item.price) }}</span>
              </center>

              <center v-else class="divcol" style="gap: 5px">
                <span>---</span>
                <span>---</span>
              </center>
            </template>

            <!-- <template #[`item.token_id`]="{ item }">
              <span class="tup" :style="`${item.vault ? '--c: #26A17B' : ''}`">{{item.vault ? "yes" : "no"}}</span>
            </template> -->

            <template #[`item.buyer_id`]="{ item }">
              <center class="center" style="gap: 10px">
                <v-avatar style="border: 2px solid #fff">
                  <v-img
                    :src="require('~/assets/sources/avatars/avatar.png')"
                    alt="artist avatar"
                    transition="fade-transition"
                  >
                    <template #placeholder>
                      <v-skeleton-loader type="avatar" />
                    </template>
                  </v-img>
                </v-avatar>
                <span :title="item.buyer_id">{{
                  item.buyer_id.limitString(20)
                }}</span>
              </center>
            </template>

            <template #[`item.actions`]="{ item }">
              <center class="center" style="gap: 30px">
                <v-btn
                  :disabled="offerBtn"
                  :ripple="false"
                  class="btn activeBtn bold"
                  style="--min-w: 112px; --w: min(100%, 9em); --fs: 16px"
                  @click="acceptOffer(item)"
                  >Accept</v-btn
                >
                <!-- <v-btn
                  :disabled="offerBtn"
                  :ripple="false" class="btn activeBtn bold"
                  style="--min-w: 112px; --w: min(100%, 9em); --fs: 16px; --bg: #fff; --c: var(--primary)"
                  @click="declineOffer(item)"
                >Decline</v-btn> -->
              </center>
            </template>
          </v-data-table>

          <Pagination
            :total-pages="
              pagination_per_page_offers > 50 ? 50 : pagination_per_page_offers
            "
            :current-page="currentPageOffers"
            @pagechanged="(page) => (currentPageOffers = page)"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- <h2 class="Title tup">chats</h2>
    <center><p class="mb-8 mt-8 font20">Welcome to the Music Feast Chat! In order to participate in the chat and interact with the community, please make sure you are logged in to your account. Logging in allows us to provide you with a secure and personalized chat experience. If you don't have an account yet, you can easily create one by clicking on the 'Log In' button. Thank you for choosing Music Feast and we look forward to chatting with you!</p></center>
    <center><a href="quick-tip-help-chat" target="_blank"><p class="mb-8 mt-8 font20">Learn here how the chat works</p></a></center>
   <v-container v-if="server_dc">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="12"
        xs="4"
        md="12"
        lg="12"
        xl="12"
      >
      <widgetbot
      :server="server_dc"
      :channel="channel_dc"
      width="100%"
      height="62.5em"
    ></widgetbot>
   </v-col>
    </v-row>
    </v-container>
    <ComunityLayout></ComunityLayout> -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script> -->
  </div>
</template>

<script>
import gql from 'graphql-tag'
// import { query } from 'firebase/firestore'
import computeds from '~/mixins/computeds'
import styles from '~/mixins/styles'

export default {
  name: 'ProfilePage',
  mixins: [computeds, styles],
  data() {
    return {
      server_dc: null,
      channel_dc: null,
      offerBtn: false,
      pageName: 'profile',
      dataProfits: {
        nfts: null,
        chats: '0',
        high: '---',
      },
      search: '',
      filterA: {
        model: '',
        list: [6, 5, 4, 3, 2, 1],
      },
      filterB: {
        model: '',
        list: [
          'lastest releases',
          'newest',
          'oldest',
          'coming soon',
          'lorem ipsum',
          'lorem ipsum',
        ],
      },
      dataNfts: [
        // {
        //   img: require('~/assets/sources/images/img-listed-1.jpg'),
        //   avatar: require("~/assets/sources/avatars/avatar.png"),
        //   name: "Artist Name o Collection  n°1",
        //   desc: "Lorem ipsum dolor sit amet,",
        //   floor_price: "250.00",
        //   type: "nft",
        //   editions: "250.00",
        //   tier: 3,
        //   state: "sold out",
        // },
        // {
        //   img: require('~/assets/sources/images/img-listed-2.jpg'),
        //   avatar: require("~/assets/sources/avatars/avatar.png"),
        //   name: "Artist Name o Collection  n°2",
        //   desc: "Lorem ipsum dolor sit amet,",
        //   floor_price: "250.00",
        //   type: "nft",
        //   editions: "250.00",
        //   tier: 2,
        // },
        // {
        //   img: require('~/assets/sources/images/img-listed-3.jpg'),
        //   avatar: require("~/assets/sources/avatars/avatar.png"),
        //   name: "Artist Name o Collection  n°3",
        //   desc: "Lorem ipsum dolor sit amet,",
        //   floor_price: "250.00",
        //   type: "nft",
        //   editions: "250.00",
        //   tier: 4,
        // },
        // {
        //   img: require('~/assets/sources/images/img-listed-4.jpg'),
        //   avatar: require("~/assets/sources/avatars/avatar.png"),
        //   name: "Artist Name o Collection  n°4",
        //   desc: "Lorem ipsum dolor sit amet,",
        //   floor_price: "250.00",
        //   type: "nft",
        //   editions: "250.00",
        //   tier: 5,
        // },
        // {
        //   img: require('~/assets/sources/images/img-listed-5.jpg'),
        //   avatar: require("~/assets/sources/avatars/avatar.png"),
        //   name: "Artist Name o Collection  n°5",
        //   desc: "Lorem ipsum dolor sit amet,",
        //   floor_price: "250.00",
        //   type: "nft",
        //   editions: "250.00",
        //   tier: 6,
        //   state: "sold out",
        // },
        // {
        //   img: require('~/assets/sources/images/img-listed-6.jpg'),
        //   avatar: require("~/assets/sources/avatars/avatar.png"),
        //   name: "Artist Name o Collection  n°6",
        //   desc: "Lorem ipsum dolor sit amet,",
        //   floor_price: "250.00",
        //   type: "nft",
        //   editions: "250.00",
        //   tier: 1,
        // },
      ],
      currentPage: 1,
      itemsPerPage: 10,
      // dataChats: [
      //   { icon: "discord", chat: "Chats Artists" },
      // ],
      tableHeadersOffers: [
        { value: 'nft_media', text: 'NFT', align: 'start', sortable: false },
        {
          value: 'nft_title',
          text: 'NFT NAME',
          align: 'start',
          sortable: false,
        },
        {
          value: 'token_id',
          text: 'TOKEN ID',
          align: 'center',
          sortable: false,
        },
        { value: 'buyer_id', text: 'BUYER', align: 'center', sortable: false },
        { value: 'price_near', text: 'PRICE', align: 'center' },
        { value: 'actions', align: 'center', sortable: false },
      ],
      tableItemsOffers: [
        // {
        //   name: "Name of NFT",
        //   vault: true,
        //   buyer: "tonystart.near",
        //   buyer_img: require("~/assets/sources/avatars/avatar.png"),
        //   price: 174
        // },
        // {
        //   name: "Name of NFT",
        //   vault: false,
        //   buyer: "tonystart.near",
        //   buyer_img: require("~/assets/sources/avatars/avatar.png"),
        //   price: 174
        // },
      ],
      tableItemsOffersRe: [],
      currentPageOffers: 1,
      itemsPerPageOffers: 10,
      minimumStorage: null,
      messages: null,
      isAdmin: false,
    }
  },
  head() {
    const title = 'Profile'
    return {
      title,
    }
  },
  computed: {
    dataNfts_pagination() {
      return this.$store.getters.pagination({
        items: this.dataNfts,
        currentPage: this.currentPage,
        itemsPerPage: this.itemsPerPage,
        search: this.search,
        filterA: this.filterA.model,
      })
    },
    pagination_per_page() {
      return Math.ceil(this.dataNfts.length / this.itemsPerPage)
    },
    pagination_per_page_offers() {
      return Math.ceil(this.tableItemsOffers.length / this.itemsPerPageOffers)
    },
  },
  async mounted() {
    this.$gtag.pageview({ page_path: this.$route.path }) // Google Analytics
    // const messageInfo = {
    //   userUID: "123",
    //   text: "hola osy juan",
    //   created: Date.now(),
    //   room: "CLASSIQ"
    // };

    // this.$fire.firestore
    // .collection("ARTISTS")
    // .doc("LORDE SANCTUS")
    // .collection("appetizer")
    // .add(messageInfo)
    // .then((docRef) => {
    // })

    // const refCollection = this.$fire.firestore.collection("ARTISTS").doc("CLASSIQ").collection("appetizer")

    // this.$fire.firestore
    //   .collection(process.env.CHAT_FIREBASE)
    //   .get()
    //   .then((querySnapShot) => {
    //     querySnapShot.forEach((doc) => {
    //     })
    //   })

    // Obtener todos los documentos de la colección
    // refCollection.get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       // Accede a los datos de cada documento
    //       const data = doc.data();
    //     });
    //   })
    //   .catch((error) => {
    //     console.error("Error al obtener documentos:", error);
    //   });

    this.server_dc = process.env.SERVER_DC
    this.channel_dc = process.env.CHANNEL_DC
    const queryString = window.location.search // tomo mi url
    const urlParams = new URLSearchParams(queryString) // tomo los paramtros de url

    if (urlParams.get('buy_ramper') !== null) {
      if (urlParams.get('buy_ramper') === 'success') {
        this.$refs.modal.modalCommunityChat = true
        history.replaceState(
          null,
          location.href.split('?')[0],
          window.location.pathname
        )
      }
    }

    this.getMyNfts()
    this.getOffers()
    this.getOffersReceived()
    this.storageMini()
    await this.getIsAdmin()
    this.getChats()
    // this.getChatArtist()
    // this.setProfile();
  },
  methods: {
    getChatArtist() {
      this.$fire.firestore
        .collection(process.env.CHAT_FIREBASE)
        .onSnapshot((snapshot) => {
          const postData = []
          snapshot.forEach((doc) =>
            postData.push({ ...doc.data(), id: doc.id })
          )
        })
    },
    async getChats2() {
      const accountId = this.$ramper.getAccountId()
      // get data user
      await this.$axios
        .post(`${this.baseUrl}api/v1/get-chats-enabled/`, { wallet: accountId })
        .then((result) => {
          this.dataProfits.chats = result.data.length
        })
        .catch((err) => {
          this.$alert('cancel', { desc: err.message })
          console.error(err)
        })
    },
    async validateTierFn(idCollection, tierId, collectionNow) {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO(
          $artist_id: String
          $owner_id: String
          $reference: String
          $collection: String
        ) {
          nfts(
            where: {
              owner_id: $owner_id
              artist_id: $artist_id
              metadata_: { reference: $reference }
              collection: $collection
            }
          ) {
            typetoken_id
            serie_id
            owner_id
            is_objects
            id
            fecha
            collection
            artist_id
            metadata {
              extra
              id
              media
              title
              reference
              description
            }
          }
        }
      `

      const res = await clientApollo.query({
        query: QUERY_APOLLO,
        variables: {
          artist_id: String(idCollection),
          owner_id: this.$ramper.getAccountId(),
          reference: String(tierId),
          collection: collectionNow,
        },
      })

      const data = res.data.nfts

      if (data.length > 0) {
        return true
      } else {
        return false
      }
    },
    async getIsAdmin() {
      if (this.$ramper.getAccountId()) {
        await this.$axios
          .post(`${this.baseUrl}api/v1/is-admin/`, {
            admin: this.$ramper.getAccountId(),
          })
          .then((result) => {
            this.isAdmin = result.data
            // this.$store.commit("setIsAdmin", result.data);
          })
          .catch(() => {
            // this.$alert("cancel", {desc: err.message})
            // console.error(err);
            this.isAdmin = false
          })
      }
    },
    getChats() {
      this.$fire.firestore
        .collection(process.env.CHAT_FIREBASE)
        .onSnapshot((snapshot) => {
          snapshot.forEach(async (doc) => {
            const item = { ...doc.data(), id: doc.id }
            if (
              this.isAdmin &&
              (item.id_collection || item.id_collection === 0) &&
              this.$ramper.getAccountId()
            ) {
              this.dataProfits.chats = Number(this.dataProfits.chats) + 1
            } else if (
              (await this.validateTierFn(item.id_collection, '1', '1')) ||
              (item.id_collection === 0 &&
                (item.id_collection || item.id_collection === 0) &&
                this.$ramper.getAccountId())
            ) {
              this.dataProfits.chats = Number(this.dataProfits.chats) + 1
            }
          })
        })
    },
    toLink() {
      window.open('https://discord.gg/9KB3gjJkWJ')
    },
    async storageMini() {
      const account = await this.$near.account(this.$ramper.getAccountId())

      const contract = new this.$contract(
        account,
        process.env.CONTRACT_MARKET,
        {
          viewMethods: ['storage_minimum_balance'],
          sender: account,
        }
      )
      await contract
        .storage_minimum_balance()
        .then((response) => {
          this.minimumStorage = this.$utils.format.formatNearAmount(response)
        })
        .catch((err) => {
          console.error(err)
        })
    },
    async acceptOffer(item) {
      this.offerBtn = true
      if (this.$ramper.getUser()) {
        const action1 = [
          this.$ramper.functionCall(
            'storage_deposit',
            {
              account_id: this.$ramper.getAccountId(),
            },
            '50000000000000',
            this.$utils.format.parseNearAmount(this.minimumStorage)
          ),
        ]
        const msgs = {
          price: item.price,
          market_type: 'accept_offer',
          ft_token_id: 'near',
          buyer_id: item.buyer_id,
        }
        const action2 = [
          this.$ramper.functionCall(
            'nft_approve',
            {
              token_id: item.token_id,
              account_id: process.env.CONTRACT_MARKET,
              msg: JSON.stringify(msgs),
            },
            '200000000000000',
            '500000000000000000000'
          ),
        ]
        // const action3 = [
        //   this.$ramper.functionCall(
        //     "storage_withdraw",
        //     '30000000000000',
        //     '1'
        //   )
        // ]

        const res = await this.$ramper.sendTransaction({
          transactionActions: [
            {
              receiverId: process.env.CONTRACT_MARKET,
              actions: action1,
            },
            {
              receiverId: process.env.CONTRACT_NFT,
              actions: action2,
            },
            // {
            //   receiverId: process.env.CONTRACT_MARKET,
            //   actions: action3,
            // },
          ],
          network: process.env.NETWORK,
        })

        this.offerBtn = false

        if (
          res &&
          JSON.parse(localStorage.getItem('ramper_loggedInUser'))
            .signupSource === 'near_wallet'
        ) {
          localStorage.setItem(
            'transaction_data',
            JSON.stringify({
              state: 'success',
              title: 'Success',
              desc: 'Your nft has been successfully unlisted.',
              hash: res.txHashes[1],
            })
          )
          this.$router.push(this.localePath('/redirection'))
        } else if (res && res.result) {
          if (
            res.result[1].status.SuccessValue ||
            res.result[1].status.SuccessValue === ''
          ) {
            // this.$alert("success", {desc: "You have successfully accepted the offer.", hash: res.txHashes[1]})
            localStorage.setItem(
              'transaction_data',
              JSON.stringify({
                state: 'success',
                title: 'Success',
                desc: 'You have successfully accepted the offer.',
                hash: res.txHashes[1],
              })
            )
            this.$router.push(this.localePath('/redirection'))
          } else if (res.result[1].status.Failure) {
            // this.$alert("cancel", {desc: res.result[1].status.Failure.ActionError.kind.FunctionCallError.ExecutionError + ".", hash: res.txHashes[1]})
            localStorage.setItem(
              'transaction_data',
              JSON.stringify({
                state: 'cancel',
                title: 'Error',
                desc:
                  res.result[1].status.Failure.ActionError.kind
                    .FunctionCallError.ExecutionError + '.',
                hash: res.txHashes[1],
              })
            )
            this.$router.push(this.localePath('/redirection'))
          }
        }
      } else {
        await this.$ramper.signIn()
        location.reload()
      }
    },
    async declineOffer(item) {
      this.offerBtn = true
      if (this.$ramper.getUser()) {
        const action = [
          this.$ramper.functionCall(
            'delete_offer',
            {
              nft_contract_id: process.env.CONTRACT_NFT,
              token_id: item.token_id,
            },
            '200000000000000',
            '1'
          ),
        ]

        const res = await this.$ramper.sendTransaction({
          transactionActions: [
            {
              receiverId: process.env.CONTRACT_MARKET,
              actions: action,
            },
          ],
          network: process.env.NETWORK,
        })

        this.offerBtn = false

        if (
          res &&
          JSON.parse(localStorage.getItem('ramper_loggedInUser'))
            .signupSource === 'near_wallet'
        ) {
          localStorage.setItem(
            'transaction_data',
            JSON.stringify({
              state: 'success',
              title: 'Success',
              desc: 'Your nft has been successfully unlisted.',
              hash: res.txHashes[0],
            })
          )
          this.$router.push(this.localePath('/redirection'))
        } else if (res && res.result) {
          if (
            res.result[0].status.SuccessValue ||
            res.result[0].status.SuccessValue === ''
          ) {
            // this.$alert("success", {desc: "You have successfully canceled the offer.", hash: res.txHashes[0]})
            localStorage.setItem(
              'transaction_data',
              JSON.stringify({
                state: 'success',
                title: 'Success',
                desc: 'You have successfully canceled the offer.',
                hash: res.txHashes[0],
              })
            )
            this.$router.push(this.localePath('/redirection'))
          } else if (res.result[0].status.Failure) {
            // this.$alert("cancel", {desc: res.result[0].status.Failure.ActionError.kind.FunctionCallError.ExecutionError + ".", hash: res.txHashes[0]})
            localStorage.setItem(
              'transaction_data',
              JSON.stringify({
                state: 'cancel',
                title: 'Error',
                desc:
                  res.result[0].status.Failure.ActionError.kind
                    .FunctionCallError.ExecutionError + '.',
                hash: res.txHashes[0],
              })
            )
            this.$router.push(this.localePath('/redirection'))
          }
        }
      } else {
        await this.$ramper.signIn()
        location.reload()
      }
    },
    async getOffers() {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($owner: String) {
          offers(where: { data_nft_: { owner_id: $owner } }) {
            typetoken_id
            serie_id
            token_id
            price
            price_near
            nft_contract_id
            ft_token_id
            buyer_id
            artist_id
            id
            data_nft {
              owner_id
              serie_id
              id
              fecha
              artist_id
              metadata {
                extra
                id
                media
                title
                reference
                description
              }
            }
          }
        }
      `

      await clientApollo
        .watchQuery({
          query: QUERY_APOLLO,
          variables: { owner: this.$ramper.getAccountId() },
          pollInterval: 3000,
        })
        .subscribe((res) => {
          const data = res.data.offers

          this.tableItemsOffers = []

          for (let i = 0; i < data.length; i++) {
            const item = data[i]
            item.nft_title = item.data_nft.metadata.title
            item.nft_media = item.data_nft.metadata.media
            this.tableItemsOffers.push(item)
          }
        })
    },
    async getOffersReceived() {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($owner: String) {
          offers(where: { buyer_id: $owner }) {
            typetoken_id
            serie_id
            token_id
            price
            price_near
            nft_contract_id
            ft_token_id
            buyer_id
            artist_id
            id
            data_nft {
              owner_id
              serie_id
              id
              fecha
              artist_id
              metadata {
                extra
                id
                media
                title
                reference
                description
              }
            }
          }
        }
      `

      await clientApollo
        .watchQuery({
          query: QUERY_APOLLO,
          variables: { owner: this.$ramper.getAccountId() },
          pollInterval: 3000,
        })
        .subscribe((res) => {
          const data = res.data.offers

          this.tableItemsOffersRe = []

          for (let i = 0; i < data.length; i++) {
            const item = data[i]
            item.nft_title = item.data_nft.metadata.title
            item.nft_media = item.data_nft.metadata.media
            this.tableItemsOffersRe.push(item)
          }
        })
    },
    async getMyNfts() {
      const clientApollo = this.$apollo.provider.clients.defaultClient

      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($owner_id: String) {
          nfts(where: { owner_id: $owner_id }) {
            typetoken_id
            serie_id
            owner_id
            is_objects
            id
            fecha
            collection
            artist_id
            metadata {
              extra
              id
              media
              title
              reference
              description
            }
          }
        }
      `

      await clientApollo
        .watchQuery({
          query: QUERY_APOLLO,
          variables: { owner_id: this.$ramper.getAccountId() },
          pollInterval: 3000,
        })
        .subscribe(async (res) => {
          const data = res.data.nfts

          this.dataNfts = []

          this.dataProfits.nfts = data.length

          const arrayIds = []

          let maxPrice = 0

          for (let i = 0; i < data.length; i++) {
            const item = {
              collection: data[i].collection,
              floor_price: null,
              img: data[i].metadata.media,
              avatar: require('~/assets/sources/avatars/avatar.png'),
              name: data[i].metadata.title,
              name_sell: data[i].metadata.title.split('#').shift(),
              desc: data[i].metadata.description || '',
              editions: data[i].copies || 'Multi',
              tier: Number(data[i].typetoken_id),
              typetoken_id: data[i].metadata.reference,
              type: 'nft',
              extra: data[i].metadata.extra,
              token_id: data[i].id,
              supply: data[i].supply,
              state: null,
              type_id: data[i].serie_id,
              artista: '-',
              is_objects: data[i].is_objects,
            }

            if (item.is_objects) {
              item.state = 'redeemable'
            }

            const varSplit = item.token_id.split('|')
            const idArtist = varSplit[0]
            const typeToken = varSplit[1].split(':').shift()

            const serie = await this.getSerie(idArtist, typeToken)
            const floor = await this.getFloorPrice(serie.id)

            item.artist_id = serie.artist_id
            item.editions = serie.copies || 'Multi'
            item.id_artist = idArtist

            if (floor) {
              if (Number(floor) < Number(serie.price_near)) {
                item.floor_price = floor
              } else {
                item.floor_price = serie.price
              }
            } else {
              item.floor_price = serie.price
            }

            if (maxPrice < item.floor_price) {
              maxPrice = item.floor_price
            }

            arrayIds.push(idArtist)
            this.dataNfts.push(item)
          }
          this.dataProfits.high = Number(maxPrice).toFixed(2)
          const result = Array.from(new Set(arrayIds))

          this.getAvatars(result)
        })
    },
    async getFloorPrice(serieId) {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($serie_id: String) {
          markets(
            where: { serie_id: $serie_id }
            first: 1
            orderBy: price_near
          ) {
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
      `

      const res = await clientApollo.query({
        query: QUERY_APOLLO,
        variables: { serie_id: serieId },
      })

      const data = res.data.markets

      if (data[0]) {
        return data[0].price
      } else {
        return false
      }
    },
    async getAvatars(datos) {
      await this.$axios
        .post(`${this.baseUrl}api/v1/get-avatars/`, { artists: datos })
        .then((result) => {
          const data = result.data
          if (data[0]) {
            for (let i = 0; i < data.length; i++) {
              for (let j = 0; j < this.dataNfts.length; j++) {
                if (
                  String(data[i].id_collection) ===
                  String(this.dataNfts[j].artist_id)
                ) {
                  this.dataNfts[j].avatar = this.baseUrl + data[i].image
                  this.dataNfts[j].artista = data[i].name
                }
              }
            }
          }
        })
        .catch((err) => {
          // this.$alert("cancel", {desc: err.message})
          console.error(err)
        })
    },
    async getSerie(idArtist, typeToken) {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($artist_id: String, $typetoken: String) {
          series(
            where: { artist_id: $artist_id, typetoken_id_in: [$typetoken] }
          ) {
            id
            media
            price
            reference
            title
            typetoken_id
            fecha
            extra
            description
            creator_id
            artist_id
            price_near
            supply
            copies
            desc_series
          }
        }
      `

      const res = await clientApollo.query({
        query: QUERY_APOLLO,
        variables: {
          artist_id: String(idArtist),
          typetoken: String(typeToken),
        },
      })

      return res.data.series[0]
    },
    // setProfile() {
    //   if (this.$route.path === '/profile') {
    //     this.$router.replace(`${this.$route.path}/:${this.user.username}`)
    //   }
    // },
    showTag() {
      document.querySelector('.header').classList.add('hover')
    },
    hideTag() {
      document.querySelector('.header').classList.remove('hover')
    },
    dollarConversion(price) {
      return (Number(price) * this.priceNear).toFixed(2)
    },
  },
}
</script>

<style src="~/assets/styles/pages/profile.scss" lang="scss" />
