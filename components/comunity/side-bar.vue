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
      v-for="(item, i) in dataArtists" :key="i"
      class="container-image"
      :class="{ active: item.active }"
      @click="selectArtist(item)"
    >
      <avatar-tier
        :src="item.img"
        width="100%"
        :aspect-ratio="1/1"
        :tier="i==2 ? 4 : 0"
      />
    </div>
  </nav>
</template>

<script>
import gql from 'graphql-tag'
import computeds from '~/mixins/computeds'

export default {
  name: "ComunitySideBar",
  mixins: [computeds],
  data() {
    return {
      imgDefault: "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
      dataArtists: [],
      avatarIds: []
    }
  },
  mounted() {
    this.getArtists()
  },
  methods: {
    async validateTierFn(idCollection, tierId, collectionNow) {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($artist_id: String, $owner_id: String, $reference: String, $collection: String) {
          nfts(
            where: {owner_id: $owner_id, artist_id: $artist_id, metadata_: {reference: $reference}, collection: $collection}
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
      `;

      const res = await clientApollo.query({
        query: QUERY_APOLLO,
        variables: {artist_id: String(idCollection), owner_id: this.$ramper.getAccountId(), reference: String(tierId), collection: collectionNow},
      })

      const data = res.data.nfts

      if (data.length > 0) {
        return true
      } else {
        return false
      }
    },
    selectArtist(item) {
      this.dataArtists.forEach(e=>{e.active=false;item.active=true})
      this.$store.state.artistSelect = item
    },
    async getAvatarsFn(datos) {
      console.log("IDS CHATs", datos[0])
      await this.$axios.post(`${this.baseUrl}api/v1/get-avatars/`, { "artists": datos })
      .then(result => {
        const data = result.data
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < this.dataArtists.length; j++) {
            if (String(data[i].id_collection) === String(this.dataArtists[j].id_collection)) {
              this.dataArtists[j].img = this.baseUrl+data[i].image
            }
          }
        }
      }).catch(err => {
        // this.$alert("cancel", {desc: err.message})
        console.error(err);
      })
    },
    getArtists() {
      this.$fire.firestore.collection('ARTISTS').onSnapshot((snapshot) => {
        this.avatarIds = [];
        const postData = [];
        let i = 0
        snapshot.forEach(async (doc) => {
          const item = { ...doc.data(), id: doc.id, img: this.imgDefault, active: false }
          const artistId = this.$route.query.artist
          if (artistId) {
            if (String(item.id_collection) === String(artistId) && await this.validateTierFn(item.id_collection, "1", "1") || item.id_collection === 0) {
              if (i === 0) {
                item.active = false
              }
              postData.push(item)
              if (Number(item.id_collection) !== 0) {
                this.avatarIds.push(String(item.id_collection))
              } else {
                item.img = "https://nft-checkout-collection-images.s3.amazonaws.com/production/images/76/10f3fe3f-b892-4ac8-8f88-9c56bed24a29"
              }
            }
          } else if (await this.validateTierFn(item.id_collection, "1", "1") || item.id_collection === 0) {
            if (i === 0) {
              item.active = false
            }
            postData.push(item)
            if (Number(item.id_collection) !== 0) {
              this.avatarIds.push(String(item.id_collection))
            } else {
              item.img = "https://nft-checkout-collection-images.s3.amazonaws.com/production/images/76/10f3fe3f-b892-4ac8-8f88-9c56bed24a29"
            }
          }
          i++
        });
        this.dataArtists = postData
        console.log(this.avatarIds)
        this.getAvatarsFn(this.avatarIds)
      });
    }
  }
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

  &::-webkit-scrollbar { display: none }


  .container-image {
    isolation: isolate;
    position: relative;
    cursor: pointer;
    &.active:before{ height: 100% }

    &:before {
      content: "";
      background-color: var(--primary);
      position: absolute;
      top: 0;
      bottom: 0;
      left: -$line-width * 1.5;
      margin-block: auto;
      width: $line-width;
      height: 16px;
      border-radius: 10px;

      transition: .4s ease;
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
