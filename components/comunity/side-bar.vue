<template>
  <nav id="comunity__sider-bar">
    <!-- <div
      v-for="(item, i) in dataArtists" :key="i"
      class="container-image"
      :class="{ active: item.active }"
      :style="`--messages: '${22}'`"
      @click="selectArtist(item)"
    > -->
    <div
      v-for="(item, i) in dataArtists"
      :key="i"
      class="container-image"
      :class="{ active: item.active }"
      @click="selectArtist(item)"
    >
      <avatar-tier
        :title="item.artist"
        :src="item.img"
        width="100%"
        :aspect-ratio="1 / 1"
        :tier="i == 2 ? 4 : 0"
      />
    </div>
  </nav>
</template>

<script>
import gql from 'graphql-tag'
import computeds from '~/mixins/computeds'

export default {
  name: 'ComunitySideBar',
  mixins: [computeds],
  data() {
    return {
      artistId: null,
      isAdmin: false,
      imgDefault:
        'https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1',
      dataArtists: [],
      avatarIds: [],
    }
  },
  async mounted() {
    await this.getIsAdmin()
  },
  methods: {
    async getIsAdmin() {
      if (this.$ramper.getAccountId()) {
        await this.$axios
          .post(`${this.baseUrl}api/v1/is-admin/`, {
            admin: this.$ramper.getAccountId(),
          })
          .then((result) => {
            if (result.data?.admin) {
              this.isAdmin = true
            } else {
              this.isAdmin = false
            }
            this.artistId = result.data?.artist
            this.getArtists()
            // this.$store.commit("setIsAdmin", result.data);
          })
          .catch(() => {
            // this.$alert("cancel", {desc: err.message})
            // console.error(err);
            this.isAdmin = false
            this.getArtists()
          })
      }
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
    selectArtist(item) {
      this.dataArtists.forEach((e) => {
        e.active = false
        item.active = true
      })
      this.$store.state.artistSelect = item
      this.$store.state.chatSelect = null
    },
    getAvatar(id) {
      const resp = this.$axios
        .post(`${this.baseUrl}api/v1/get-avatar/`, { artist: id })
        .then((result) => {
          const data = result.data
          if (data.image) {
            return `${this.baseUrl}` + data.image
          } else {
            return this.imgDefault
          }
        })
        .catch((err) => {
          console.error(err)
          return this.imgDefault
        })
      return resp
    },
    getArtists() {
      // {
      //     "id_collection": 2,
      //     "artist": "ClassiQ",
      //     "id": "classiq",
      //     "img": "https://testnet.musicfeast.io/musicfeast_testnet//musicfeast_testnet/media_musicfeast/photo_2023-11-01_15-25-41_sffh3Xl.jpg",
      //     "active": false
      // }
      this.$axios
        .get(`${this.baseUrl}api/v1/get-artists`)
        .then(async (result) => {
          const postData = []

          result.data.push({
            id_collection: 0,
            id: 'musicfeast',
            name: 'MusicFeast',
            image: '',
          })

          for (let i = 0; i < result.data.length; i++) {
            const e = result.data[i]

            const item = {
              id_collection: e.id_collection,
              id: e.name,
              artist: e.name,
              img: e.image
                ? this.baseUrl + e.image
                : require('~/assets/sources/avatars/avatar.png'),
              active: false,
            }

            this.$fire.firestore
              .collection(process.env.CHAT_FIREBASE)
              .doc(String(e.id_collection))
              .set({ id_collection: e.id_collection, artist: e.name })

            this.$fire.firestore
              .collection(process.env.CHAT_FIREBASE)
              .doc(String(e.id_collection))
              .collection('CHATS')
              .doc('general-chat')
              .set({ chat: 'General Chat', order: 1 })

            this.$fire.firestore
              .collection(process.env.CHAT_FIREBASE)
              .doc(String(e.id_collection))
              .collection('CHATS')
              .doc('event-space')
              .set({ chat: 'Event Space', order: 2 })

            this.$fire.firestore
              .collection(process.env.CHAT_FIREBASE)
              .doc(String(e.id_collection))
              .collection('CHATS')
              .doc('resale-announcements ')
              .set({ chat: 'Resale Announcements', order: 3 })

            this.$fire.firestore
              .collection(process.env.CHAT_FIREBASE)
              .doc(String(e.id_collection))
              .collection('CHATS')
              .doc('secret-links')
              .set({ chat: 'Secret Links', order: 4 })

            this.$fire.firestore
              .collection(process.env.CHAT_FIREBASE)
              .doc(String(e.id_collection))
              .collection('CHATS')
              .doc('hear-it-here-first')
              .set({ chat: 'Hear It Here First', order: 5 })

            // this.$fire.firestore
            //   .collection(process.env.CHAT_FIREBASE)
            //   .doc(String(e.id_collection))
            //   .collection('CHATS')
            //   .doc('table-talk')
            //   .set({ chat: 'Table Talk', order: 1 })

            // this.$fire.firestore
            //   .collection(process.env.CHAT_FIREBASE)
            //   .doc(String(e.id_collection))
            //   .collection('CHATS')
            //   .doc('free-samples')
            //   .set({ chat: 'Free Samples', order: 2 })

            // this.$fire.firestore
            //   .collection(process.env.CHAT_FIREBASE)
            //   .doc(String(e.id_collection))
            //   .collection('CHATS')
            //   .doc('appetizer')
            //   .set({ chat: 'Appetizer', order: 3 })

            // this.$fire.firestore
            //   .collection(process.env.CHAT_FIREBASE)
            //   .doc(String(e.id_collection))
            //   .collection('CHATS')
            //   .doc('soup')
            //   .set({ chat: 'Soup', order: 4 })

            // this.$fire.firestore
            //   .collection(process.env.CHAT_FIREBASE)
            //   .doc(String(e.id_collection))
            //   .collection('CHATS')
            //   .doc('salad')
            //   .set({ chat: 'Salad', order: 5 })

            // this.$fire.firestore
            //   .collection(process.env.CHAT_FIREBASE)
            //   .doc(String(e.id_collection))
            //   .collection('CHATS')
            //   .doc('main-course')
            //   .set({ chat: 'Main Course', order: 6 })

            // this.$fire.firestore
            //   .collection(process.env.CHAT_FIREBASE)
            //   .doc(String(e.id_collection))
            //   .collection('CHATS')
            //   .doc('dessert')
            //   .set({ chat: 'Dessert', order: 7 })

            // this.$fire.firestore
            //   .collection(process.env.CHAT_FIREBASE)
            //   .doc(String(e.id_collection))
            //   .collection('CHATS')
            //   .doc('suggestions')
            //   .set({ chat: 'Suggestions', order: 8 })

            // this.$fire.firestore
            //   .collection(process.env.CHAT_FIREBASE)
            //   .doc(String(e.id_collection))
            //   .collection('CHATS')
            //   .doc('in-the-kitchen')
            //   .set({ chat: 'In the Kitchen', order: 9 })

            // this.$fire.firestore
            //   .collection(process.env.CHAT_FIREBASE)
            //   .doc(String(e.id_collection))
            //   .collection('CHATS')
            //   .doc('stay-connected')
            //   .set({ chat: 'Stay Connected', order: 10 })

            const artistId = this.artistId
            if (
              (this.isAdmin || artistId === item.id_collection) &&
              (item.id_collection || item.id_collection === 0) &&
              this.$ramper.getAccountId()
            ) {
              if (Number(item.id_collection) === 0) {
                item.img =
                  'https://nft-checkout-collection-images.s3.amazonaws.com/production/images/76/10f3fe3f-b892-4ac8-8f88-9c56bed24a29'
                item.active = true
                this.$store.state.artistSelect = item
              } else {
                item.img = await this.getAvatar(item.id_collection)
              }
              postData.push(item)
            } else if (
              (await this.validateTierFn(item.id_collection, '1', '1')) ||
              (item.id_collection === 0 &&
                (item.id_collection || item.id_collection === 0) &&
                this.$ramper.getAccountId())
            ) {
              if (Number(item.id_collection) === 0) {
                item.img =
                  'https://nft-checkout-collection-images.s3.amazonaws.com/production/images/76/10f3fe3f-b892-4ac8-8f88-9c56bed24a29'
                item.active = true
                this.$store.state.artistSelect = item
              } else {
                item.img = await this.getAvatar(item.id_collection)
              }

              postData.push(item)
            }
          }
          // console.log(postData)
          this.dataArtists = postData.sort(
            (a, b) => a.id_collection - b.id_collection
          )
          // console.log(this.dataArtists)
        })
        .catch((err) => {
          // this.$alert("cancel", {desc: err.message})
          console.error('ERRROR', err)
        })
    },
    getArtists2() {
      this.$fire.firestore
        .collection(process.env.CHAT_FIREBASE)
        .onSnapshot((snapshot) => {
          this.avatarIds = []
          const postData = []
          snapshot.forEach(async (doc) => {
            const item = {
              ...doc.data(),
              id: doc.id,
              img: this.imgDefault,
              active: false,
            }
            const artistId = this.$route.query.artist
            if (
              this.isAdmin &&
              (item.id_collection || item.id_collection === 0) &&
              this.$ramper.getAccountId()
            ) {
              if (Number(item.id_collection) === 0) {
                item.img =
                  'https://nft-checkout-collection-images.s3.amazonaws.com/production/images/76/10f3fe3f-b892-4ac8-8f88-9c56bed24a29'
                item.active = true
                this.$store.state.artistSelect = item
              } else {
                item.img = await this.getAvatar(item.id_collection)
              }
              postData.push(item)
            } else if (
              artistId &&
              (item.id_collection || item.id_collection === 0)
            ) {
              if (
                (String(item.id_collection) === String(artistId) &&
                  (await this.validateTierFn(item.id_collection, '1', '1'))) ||
                (item.id_collection === 0 && this.$ramper.getAccountId())
              ) {
                if (Number(item.id_collection) === 0) {
                  item.img =
                    'https://nft-checkout-collection-images.s3.amazonaws.com/production/images/76/10f3fe3f-b892-4ac8-8f88-9c56bed24a29'
                  item.active = true
                  this.$store.state.artistSelect = item
                } else {
                  item.img = await this.getAvatar(item.id_collection)
                }
                postData.push(item)
              }
            } else if (
              (await this.validateTierFn(item.id_collection, '1', '1')) ||
              (item.id_collection === 0 &&
                (item.id_collection || item.id_collection === 0) &&
                this.$ramper.getAccountId())
            ) {
              if (Number(item.id_collection) === 0) {
                item.img =
                  'https://nft-checkout-collection-images.s3.amazonaws.com/production/images/76/10f3fe3f-b892-4ac8-8f88-9c56bed24a29'
                item.active = true
                this.$store.state.artistSelect = item
              } else {
                item.img = await this.getAvatar(item.id_collection)
              }
              postData.push(item)
            }
          })

          // console.log('POST DATA', postData)
          this.dataArtists = postData.sort((p1, p2) =>
            p1.id_collection < p2.id_collection
              ? 1
              : p1.id_collection > p2.id_collection
              ? -1
              : 0
          )
        })
    },
  },
}
</script>

<style lang="scss">
$line-width: 8px;

#comunity__sider-bar {
  min-width: var(--side-bar-width);
  // position: absolute;
  // top: 0;
  // left: calc(var(--side-bar-width) * -1);
  // bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: $line-width;
  padding-right: $line-width + 1px;
  background-color: #2b2e33;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .container-image {
    isolation: isolate;
    position: relative;
    cursor: pointer;
    &.active:before {
      height: 100%;
    }

    &:before {
      content: '';
      background-color: var(--primary);
      position: absolute;
      top: 0;
      bottom: 0;
      left: -$line-width * 1.5;
      margin-block: auto;
      width: $line-width;
      height: 16px;
      border-radius: 10px;

      transition: 0.4s ease;
    }

    &::after {
      content: var(--messages);
      background-color: var(--primary);
      border: 2px solid #363940;
      border-radius: 30px;
      position: absolute;
      right: -5px;
      bottom: 0;
      font-size: 11px;
      font-weight: 500 !important;
      padding-inline: 5px;
    }
  }
}
</style>
