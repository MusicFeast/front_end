<template>
  <nav id="comunity__sider-bar">
    <div
      v-for="(item, i) in dataArtists" :key="i"
      class="container-image"
      :class="{ active: item.active }"
      :style="`--messages: '${22}'`"
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
import computeds from '~/mixins/computeds'

export default {
  name: "ComunitySideBar",
  mixins: [computeds],
  data() {
    return {
      imgDefault: "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
      dataArtists: []
    }
  },
  mounted() {
    this.getArtists()
  },
  methods: {
    selectArtist(item) {
      this.dataArtists.forEach(e=>{e.active=false;item.active=true})
      this.$store.state.artistSelect = item
    },
    async getAvatars(datos) {
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
        const avatarIds = []
        const postData = [];
        let i = 0
        snapshot.forEach((doc) => {
          const item = { ...doc.data(), id: doc.id, img: this.imgDefault, active: false }
          if (i === 0) {
            item.active = false
          }
          postData.push(item)
          avatarIds.push(item.id_collection)
          i++
        });
        this.dataArtists = postData
        this.getAvatars(avatarIds)
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
