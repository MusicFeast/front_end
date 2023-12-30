<template>
  <v-form ref="form">
    <div id="form">
      <h2 class="Title tup lines">UPDATE NFT</h2>

      <v-row style="margin-top: 40px">
        <v-col
          xl="2"
          lg="3"
          md="3"
          sm="4"
          cols="12"
          class="center"
          style="position: relative !important"
        >
          <div class="nft-upload-div">
            <span class="absolute-font" style="left: 20px"
              >255 x 255 pixels <br />.jpg or .png</span
            >

            <v-file-input
              ref="fileInputNft"
              v-model="imageNft"
              class="input-file"
              prepend-icon="none"
              style="display: none"
              @change="onFileChangeNft"
            ></v-file-input>

            <img
              :src="selectedImageNft || tokenItem.media"
              alt=""
              class="imgNft"
            />

            <v-btn
              class="btn btn-input-file"
              :disabled="showItem"
              @click="openFileInputNft"
              >Upload Covert Art</v-btn
            >
          </div>
        </v-col>

        <v-col xl="10" lg="9" md="9" sm="8" cols="12">
          <section class="card">
            <label for="nft-name">NFT Name</label>
            <v-text-field
              id="nft-name"
              v-model="tokenItem.title"
              disabled
              :rules="rules.required"
              placeholder="NFT Name"
            ></v-text-field>

            <label for="tier">Tier {{ tokenItem.typetoken_id }}</label>
            <!-- <v-select
              id="tier"
              v-model="selectedTier"
              :disabled="showItem"
              @change="inputSave()"
              class="select tfirst"
              :items="items_tier"
              placeholder="Select Your Tier"
            ></v-select> -->
          </section>
        </v-col>
      </v-row>

      <section class="card" style="margin-top: 40px">
        <label for="description">Description</label>
        <vue-editor
          id="description"
          v-model="tokenItem.description"
          :disabled="showItem"
          :rules="rules.required"
          placeholder="Lorem Ipsum"
          @input="hasBeenTouched = true"
        ></vue-editor>
        <span
          v-if="!tokenItem.description && hasBeenTouched"
          class="mt-2"
          style="color: #dd2c00 !important; display: block; font-size: 13.5px"
          >field required</span
        >

        <div class="my-2" />

        <label for="nft-name">Price (USD)</label>
        <v-text-field
          id="Price"
          v-model="tokenItem.price"
          :disabled="showItem"
          type="number"
          :rules="rules.required"
          placeholder="Price"
        ></v-text-field>

        <!-- <div v-if="tokenItem.typetoken_id != '1'" class="relative">
          <label for="nft-name">Number of copies</label>
          <v-text-field
            id="copies"
            v-model="tokenItem.copies"
            :disabled="showItem"
            type="number"
            :rules="rules.required"
            placeholder="20"
          ></v-text-field>
          <v-btn class="btn-plus-minus" style="top: 20px;right: 40px; position: absolute!important;"><v-icon>mdi-minus</v-icon></v-btn>
          <v-btn class="btn-plus-minus" style="top: 20px;right: 0; position: absolute!important;"><v-icon>mdi-plus</v-icon></v-btn>
        </div> -->

        <!-- <template v-if="tokenItem.typetoken_id === '1'">
          <div class="relative">
              <label for="nft-name">Song audio</label>
              <v-file-input
                id="song"
                class="no-icon"
                v-model="tokenItem.song"
                accept="audio/*"
                placeholder="Song"
              ></v-file-input>
          </div>
        </template> -->

        <template v-if="tokenItem.typetoken_id === '2'">
          <div class="relative">
            <label for="nft-name">Video</label>
            <v-file-input
              id="video"
              class="no-icon"
              v-model="tokenItem.video"
              :disabled="showItem"
              accept="video/*"
              placeholder="Video"
              :rules="rules.required"
            ></v-file-input>
          </div>
        </template>
      </section>

      <h2 class="Title tup lines" id="section-form-nft">Revenue</h2>

      <section class="card" style="margin-top: 40px">
        <a href="/quick-tip-help-form#3" target="_blank">
          <v-badge class="mb-5" offset-x="-5px" @click="dialogHelpSplit = true">
            <template #badge>
              <v-icon color="var(--primary)" style="font-size: 25px"
                >mdi-help-circle-outline</v-icon
              >
            </template>
            <span class="span-badge">Split Revenue</span>
            <span style="margin-left: 10px; color: white"
              >Available: ({{ splitAvailable }}%)</span
            >
          </v-badge>
        </a>
        <v-row class="aend" v-for="(item, i) in dataSplit" :key="i">
          <v-col xl="9" lg="9" md="9" sm="7" cols="7">
            <label for="near-account">Wallet Address</label>
            <v-text-field
              id="near-account"
              v-model="item.account"
              :disabled="i == 0 ? true : showItem"
              :error="item.error"
              :error-messages="item.errorMessage"
              placeholder="nearaccount.testnet"
              @input="inputAccount(item)"
              :rules="rules.required"
            ></v-text-field>
          </v-col>
          <v-col xl="2" lg="2" md="2" sm="4" cols="4">
            <v-text-field
              v-model="item.percentage"
              type="number"
              @input="inputPercentSplit()"
              @change="inputPercentSplit()"
              :disabled="showItem"
              placeholder="%"
              :rules="rulesSplit"
            ></v-text-field>
          </v-col>
          <v-col style="align-self: center !important">
            <v-icon
              v-if="i != 0"
              color="var(--primary)"
              @click="remove1(i)"
              :disabled="showItem"
              class="mr-2"
              style="font-size: 26px"
              >mdi-delete</v-icon
            >
          </v-col>
        </v-row>
        <v-row class="aend">
          <v-btn
            class="btn ml-3"
            :disabled="showItem"
            @click="dataSplit.push({ account: '', percentage: null })"
            style="--fw: 700; --w: 150px; --br: 0px"
            >Add Collaborator</v-btn
          >
        </v-row>
        <a href="/quick-tip-help-form#3" target="_blank">
          <v-badge class="mb-8 mt-10" offset-x="-5px">
            <template #badge>
              <v-icon color="var(--primary)" style="font-size: 25px"
                >mdi-help-circle-outline</v-icon
              >
            </template>
            <span class="span-badge">Resale Revenue</span>
            <span style="margin-left: 10px; color: white"
              >Available: ({{ royalAvaibable }}%)</span
            >
          </v-badge>
        </a>
        <v-row class="aend" v-for="(item, i) in dataRoyalties" :key="i">
          <v-col xl="9" lg="9" md="9" sm="7" cols="7" class="pt-0">
            <label for="near-account">Wallet Address</label>
            <v-text-field
              id="near-account"
              v-model="item.account"
              :disabled="i == 0 ? true : showItem"
              :error="item.error"
              :error-messages="item.errorMessage"
              @input="inputAccount(item)"
              placeholder="nearaccount.testnet"
              :rules="rules.required"
            ></v-text-field>
          </v-col>
          <v-col xl="2" lg="2" md="2" sm="4" cols="4">
            <v-text-field
              v-model="item.percentage"
              type="number"
              placeholder="%"
              :disabled="showItem"
              @input="inputPercentRoyalties()"
              @change="inputPercentRoyalties()"
              :rules="rulesRoyal"
            ></v-text-field>
          </v-col>
          <v-col style="align-self: center !important">
            <v-icon
              v-if="i != 0"
              color="var(--primary)"
              class="mr-2"
              :disabled="showItem"
              @click="remove(i)"
              style="font-size: 26px"
              >mdi-delete</v-icon
            >
          </v-col>
        </v-row>

        <v-row class="aend">
          <v-btn
            class="btn ml-3"
            :disabled="showItem"
            @click="dataRoyalties.push({ account: '', percentage: null })"
            style="--fw: 700; --w: 150px; --br: 0px"
            >Add Royalties</v-btn
          >
        </v-row>
      </section>

      <template v-if="selectedTier === 'Tier 3' || selectedTier === 'Tier 4'">
        <h2 class="Title tup lines">Physical Merchandise</h2>

        <section class="card" style="margin-top: 40px">
          <v-badge class="mb-5" offset-x="-5px">
            <template #badge>
              <v-icon color="var(--primary)" style="font-size: 25px"
                >mdi-information-symbol</v-icon
              >
            </template>
            <span class="span-badge">Type of merchandise</span>
          </v-badge>

          <hr class="mb-4" style="border-color: var(--primary) !important" />

          <div class="pa-2 container-card-merchandise">
            <v-card
              v-for="(item, index) in dataMerchandise"
              :key="index"
              class="card pa-3 card-merchandise"
            >
              <img :src="item.img" alt="img" style="width: 200px" />
              <div class="div-card-hover">
                <span
                  class="tcenter"
                  style="
                    text-decoration: underline;
                    font-weight: 700 !important;
                  "
                >
                  Merchandise <br />
                  Title
                </span>

                <span class="tcenter" style="font-size: 13px">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit, eveniet!
                </span>

                <v-btn
                  class="btn center"
                  style="max-width: 70% !important; min-width: 70% !important"
                >
                  Select
                </v-btn>
              </div>
            </v-card>
          </div>
        </section>
      </template>

      <!-- <section class="card divrow" style="margin-top: 40px; gap: 40px;">
        <div class="divrow acenter" style="gap: 5px;">
          <v-checkbox id="visible" v-model="visible"></v-checkbox>
          <label for="visible" class="mb-2">Visible</label>
        </div>

        <div class="divrow acenter" style="gap: 5px;">
          <v-checkbox id="coming" v-model="coming"></v-checkbox>
          <label for="coming" class="mb-2">Coming</label>
        </div>
      </section> -->

      <div class="center" style="gap: 10px; margin-top: 40px">
        <v-btn
          class="btn"
          :disabled="previewInfo"
          style="--fw: 700; --w: 150px; --br: 0px"
          :loading="btnSave"
          @click="updateNft()"
          >Update</v-btn
        >
      </div>

      <!-- Dialog Success -->

      <v-dialog
        v-model="dialogSuccess"
        max-width="500px"
        content-class="nft-dialog"
        persistent
      >
        <!-- <v-btn icon class="close" @click="dialogSuccess = false">
        <v-icon large>mdi-close</v-icon>
      </v-btn> -->

        <v-card id="modalBuy" class="nft-dialog--content quick-help-card">
          <h2 class="p center" style="--fs: 1.8em; text-decoration: underline">
            SUCCESS!
          </h2>
          <span> Your operation was succesful. </span>
          <v-btn
            class="btn"
            style="min-width: 70% !important"
            @click="OkSuccess()"
          >
            Ok
          </v-btn>
        </v-card>
      </v-dialog>

      <div class="text-center">
        <v-overlay opacity="0.80" :value="overlay">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
          <!-- <span>hola como estas</span> -->
          <h3>Updating tier, this may take a few minutes...</h3>
        </v-overlay>
      </div>
    </div>
  </v-form>
</template>

<script>
import gql from 'graphql-tag'
import { VueEditor } from 'vue2-editor'
import computeds from '~/mixins/computeds'

//   import styles from '~/mixins/styles'

export default {
  name: 'FormPage',
  // mixins: [computeds, styles],
  components: {
    VueEditor,
  },
  mixins: [computeds],
  data() {
    return {
      dataRoyalties: [{ account: this.$ramper.getAccountId(), percentage: 10 }],
      dataSplit: [{ account: this.$ramper.getAccountId(), percentage: 70 }],
      hasBeenTouched: false,
      imageNft: undefined,
      selectedImageNft: '',

      imageMobile: undefined,
      selectedImageMobile: '',

      imageAvatar: undefined,
      selectedImageAvatar: '',

      imageBanner: undefined,
      selectedImageBanner: '',

      formArtist: {},
      formTier: {},

      tableHeadersArtists: [
        {
          text: 'Artist Name',
          value: 'name',
          sortable: false,
          align: 'center',
        },
        {
          text: 'Description',
          value: 'description',
          sortable: false,
          align: 'center',
        },
        { text: 'Tier', value: 'tier', sortable: false, align: 'center' },
        {
          text: 'Status',
          value: 'statusText',
          sortable: false,
          align: 'center',
        },
        { value: 'actions', sortable: false, align: 'center' },
      ],
      tableItemsArtists: [
        // {artist_name: 'DJ Khaled', description: 'The best DJ in LA', tier: 'Tier 1'},
        // {artist_name: 'DJ Navas', description: 'The best DJ in Valencia', tier: 'Tier 2'},
        // {artist_name: 'DJ Khaled', description: 'The best DJ in LA', tier: 'Tier 1'},
        // {artist_name: 'DJ Navas', description: 'The best DJ in Valencia', tier: 'Tier 2'},
        // {artist_name: 'DJ Khaled', description: 'The best DJ in LA', tier: 'Tier 1'},
        // {artist_name: 'DJ Navas', description: 'The best DJ in Valencia', tier: 'Tier 2'},
      ],
      currentPageArtists: 1,
      itemsPerPageArtists: 10,
      dialogSuccess: false,
      overlay: false,
      rules: {
        validate: [
          (v) => !!v || 'Field required',
          (v) => this.validateNear(v) || 'Invalid account',
        ],
        required: [(v) => !!v || 'Field required'],
        repeatedUsername: [
          (v) => !!v || 'Field required',
          () =>
            !this.djangoExistenceList.username || 'Username is already taken',
        ],
        repeatedEmail: [
          (v) => !!v || 'Field required',
          (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          () => !this.djangoExistenceList.email || 'Email is already used',
        ],
        repeatedDiscord: [
          () =>
            !this.djangoExistenceList.discord ||
            'Discord account is already used',
        ],
        repeatedInstagram: [
          () =>
            !this.djangoExistenceList.instagram ||
            'Instagram account is already used',
        ],
        repeatedTwitter: [
          () =>
            !this.djangoExistenceList.twitter ||
            'Twitter account is already used',
        ],
        repeatedTelegram: [
          () =>
            !this.djangoExistenceList.telegram ||
            'Telegram account is already used',
        ],
      },

      coming: false,
      visible: false,

      dataMerchandise: [
        {
          img: require('~/assets/sources/images/shirt.png'),
        },
        {
          img: require('~/assets/sources/images/sweatter.png'),
        },
        {
          img: require('~/assets/sources/images/cap.png'),
        },
        {
          img: require('~/assets/sources/images/cup.png'),
        },
      ],

      // items_tier:["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"],
      items_tier: ['Tier 1'],
      selectedTier: null,
      isAdmin: false,
      previewInfo: true,
      formArtistItem: null,
      disabledSave: true,
      btnSave: false,
      btnApprove: false,
      btnReject: false,
      disabledApprove: false,
      showItem: null,
      splitAvailable: 70,
      royalAvaibable: 10,
      royalBool: false,
      splitBool: false,
      isCreator: false,
      tokenItem: {},
      tokenAux: {},
      rulesRoyal: [
        (v) => !!v || 'required',
        (v) => !!Number(v) || 'Number is required',
        (v) => v >= 1 || 'required',
        (v) => v <= 10 || 'Royalties available: 10%',
      ],
      rulesSplit: [
        (v) => !!v || 'required',
        (v) => !!Number(v) || 'Number is required',
        (v) => v >= 1 || 'required',
        (v) => v <= 70 || 'Royalties available: 70%',
      ],
    }
  },
  head() {
    const title = 'Form'
    return {
      title,
    }
  },
  computed: {
    pagination_per_page() {
      return Math.ceil(this.tableItemsArtists.length / this.itemsPerPageArtists)
    },
  },
  async mounted() {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const token = urlParams.get('token_id')

    this.inputPercentRoyalties()
    this.inputPercentSplit()

    if (token) {
      await this.getDataToken(token)
    } else {
      this.$router.push('/artists')
    }
  },
  methods: {
    async inputAccount(item) {
      const validate = await this.validateNear(item.account)

      if (validate) {
        item.error = false
        item.errorMessage = null
      } else {
        item.error = true
        item.errorMessage = 'Invalid account'
      }
    },
    inputPercentRoyalties() {
      const limitRoyal = 10
      let total = 0
      this.dataRoyalties.forEach((item) => {
        total += parseInt(item.percentage) || 0
      })

      if (total === 10) {
        this.royalAvaibable = 0
        this.royalBool = true
      } else {
        this.royalAvaibable = limitRoyal - total
        this.royalBool = false
      }

      if (this.splitBool && this.royalBool) {
        this.previewInfo = false
      } else {
        this.previewInfo = true
      }
    },
    inputPercentSplit() {
      const limitSplit = 70
      let total = 0
      this.dataSplit.forEach((item) => {
        total += parseInt(item.percentage) || 0
      })

      if (total === 70) {
        this.splitAvailable = 0
        this.splitBool = true
      } else {
        this.splitAvailable = limitSplit - total
        this.splitBool = false
      }

      if (this.splitBool && this.royalBool) {
        this.previewInfo = false
      } else {
        this.previewInfo = true
      }
    },
    OkSuccess() {
      this.dialogSuccess = false
      location.reload()
    },
    getCurrentArtist(tokenItem) {
      this.$axios
        .post(`${this.baseUrl}api/v1/get-artist/`, {
          id: Number(tokenItem.artist_id),
        })
        .then((response) => {
          const data = response.data[0]
          if (data?.creator_id === this.$ramper.getAccountId()) {
            this.isCreator = true
            this.tokenItem = tokenItem
            this.tokenAux = JSON.parse(JSON.stringify(tokenItem))
          } else {
            this.$router.push('/artists')
          }
        })
        .catch((err) => {
          // this.$alert("cancel", {desc: err.message})
          console.error(err)
        })
    },
    async getDataToken(token) {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($token_id: String) {
          serie(id: $token_id) {
            artist_id
            collection
            copies
            creator_id
            desc_series
            description
            media
            price
            price_near
            reference
            title
            typetoken_id
            supply
            fecha
            id
            is_objects
            extra
          }
        }
      `

      await clientApollo
        .query({
          query: QUERY_APOLLO,
          variables: { token_id: String(token) },
        })
        .then(async (res) => {
          const data = res.data.serie

          if (!data) return this.$router.push('/artists')

          await this.getCurrentArtist(data)
        })
    },
    async validateNear(wallet) {
      const account = await this.$near.account(wallet)
      const res = account
        .state()
        .then(() => {
          return true
        })
        .catch(() => {
          return false
        })
      return res
    },
    showData(item) {
      this.items_tier = ['Tier 1', 'Tier 2']
      this.showItem = item

      this.formArtist.name = item.name
      this.formArtist.walletArtist = item.wallet_artist
      this.formArtist.description = item.description
      this.formArtist.about = item.about
      this.formArtist.instagram = item.instagram || null
      this.formArtist.twitter = item.twitter || null
      this.formArtist.facebook = item.facebook || null
      this.formArtist.discord = item.discord || null
      this.selectedImageAvatar = this.baseUrl + item.image
      this.selectedImageBanner = this.baseUrl + item.banner
      this.selectedImageMobile = this.baseUrl + item.banner_mobile

      this.selectedTier = item.tier
      this.formTier.nft_name = item.tierItem.nft_name
      this.formTier.description = item.tierItem.description
      this.formTier.price = item.tierItem.price
      this.formTier.copies = item.tierItem.copies
      this.selectedImageNft = item.tierItem.image
      this.dataRoyalties = JSON.parse(item.tierItem.royalties)
      this.dataSplit = JSON.parse(item.tierItem.royalties_split)

      if (item.tier === 'Tier 1') {
        this.formTier.song = item.tierItem.media
      } else if (item.tier === 'Tier 2') {
        this.formTier.media = item.tierItem.media
      }
    },
    //       {
    //     "tier": "Tier 1",
    //     "tierItem": {
    //         "id": 3,
    //         "tierNumber": 1,
    //         "nft_name": "test",
    //         "description": "test",
    //         "price": "2.00",
    //         "image": "https://bafybeic7e37ccdzslm6jbre57mltnndp5dpfn7c6xhotxri77hddkyzere.ipfs.nftstorage.link",
    //         "copies": 4,
    //         "status": 3,
    //         "media": "https://bafybeiemlc6ltbrimjhemlu4qy4okngaacujahvm6ebk6f6biozru3skzq.ipfs.nftstorage.link",
    //         "royalties": "[]",
    //         "artist_proposal": 7
    //     },
    //     "id": 7,
    //     "wallet": "049df53399cc4c22e077cf9460e13b18ba5cfa501e56fec37f481e50abe32734",
    //     "name": "test",
    //     "description": "test",
    //     "about": "test",
    //     "image": "/musicfeast_testnet/media_musicfeast/1366_2000_OC00O5o.jpeg",
    //     "banner": "/musicfeast_testnet/media_musicfeast/1081267_RsPc5fg.jpeg",
    //     "banner_mobile": "/musicfeast_testnet/media_musicfeast/1081267_dAWKBNr.jpeg",
    //     "instagram": "",
    //     "twitter": "",
    //     "facebook": "",
    //     "discord": "",
    //     "status": 3,
    //     "created": "2023-10-10T16:50:18.852087Z",
    //     "updated": "2023-10-10T16:50:18.852121Z",
    //     "tiers": [
    //         {
    //             "id": 3,
    //             "tierNumber": 1,
    //             "nft_name": "test",
    //             "description": "test",
    //             "price": "2.00",
    //             "image": "https://bafybeic7e37ccdzslm6jbre57mltnndp5dpfn7c6xhotxri77hddkyzere.ipfs.nftstorage.link",
    //             "copies": 4,
    //             "status": 3,
    //             "media": "https://bafybeiemlc6ltbrimjhemlu4qy4okngaacujahvm6ebk6f6biozru3skzq.ipfs.nftstorage.link",
    //             "royalties": "[]",
    //             "artist_proposal": 7
    //         }
    //     ],
    //     "statusText": "Pending"
    // }
    openFileInputNft() {
      this.$refs.fileInputNft.$el.querySelector('input[type="file"]').click()
    },
    createImageNft(file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        this.selectedImageNft = e.target.result
      }
      reader.readAsDataURL(file)
    },
    onFileChangeNft(file) {
      this.inputSave()
      if (!file) {
        return
      }
      this.createImageNft(file)
    },

    openFileInputBanner() {
      this.$refs.fileInputBanner.$el.querySelector('input[type="file"]').click()
    },
    createImageBanner(file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        this.selectedImageBanner = e.target.result
      }
      reader.readAsDataURL(file)
    },
    onFileChange(file) {
      this.inputSave()
      if (!file) {
        return
      }
      this.createImageBanner(file)
    },

    openFileInputAvatar() {
      this.$refs.fileInputAvatar.$el.querySelector('input[type="file"]').click()
    },
    createImageAvatar(file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        this.selectedImageAvatar = e.target.result
      }
      reader.readAsDataURL(file)
    },
    onFileChangeAvatar(file) {
      this.inputSave()
      if (!file) {
        return
      }
      this.createImageAvatar(file)
    },

    openFileInputMobile() {
      this.$refs.fileInputMobile.$el.querySelector('input[type="file"]').click()
    },
    createImageMobile(file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        this.selectedImageMobile = e.target.result
      }
      reader.readAsDataURL(file)
    },
    onFileChangeMobile(file) {
      this.inputSave()
      if (!file) {
        return
      }
      this.createImageMobile(file)
    },
    inputSave() {
      // this.disabledSave = false
      if (this.formArtistItem) {
        if (this.validateFormTier() && this.royalBool && this.splitBool) {
          this.disabledSave = false
        } else {
          this.disabledSave = true
        }
      } else if (!this.formArtistItem) {
        if (
          this.validateFormArtist() &&
          this.validateFormTier() &&
          this.royalBool &&
          this.splitBool
        ) {
          this.disabledSave = false
        } else {
          this.disabledSave = true
        }
      }
    },
    validateFormArtist() {
      if (
        this.imageMobile &&
        this.imageAvatar &&
        this.imageBanner &&
        this.formArtist.name &&
        this.formArtist.description &&
        this.formArtist.about &&
        this.formArtist.walletArtist
      ) {
        return true
      } else {
        return false
      }
    },
    validateFormTier() {
      if (
        this.imageNft &&
        this.formTier.nft_name &&
        this.formTier.description &&
        this.formTier.price &&
        this.formTier.copies
      ) {
        if (this.selectedTier === 'Tier 1') {
          if (this.formTier.song) {
            return true
          } else {
            return false
          }
        } else if (this.selectedTier === 'Tier 2') {
          if (this.formTier.media) {
            return true
          } else {
            return false
          }
        } else if (
          this.selectedTier === 'Tier 3' ||
          this.selectedTier === 'Tier 4' ||
          this.selectedTier === 'Tier 5' ||
          this.selectedTier === 'Tier 6'
        ) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
    async updateNft() {
      this.overlay = true
      this.btnSave = true
      if (this.$refs.form.validate()) {
        if (this.selectedImageNft) {
          const itemIpfs = await this.uploadIpfs(this.imageNft)
          if (itemIpfs) {
            this.tokenItem.media =
              'https://' +
              itemIpfs.cid +
              '.ipfs.nftstorage.link/' +
              itemIpfs.name
          }
        }

        const formDataNft = new FormData()
        formDataNft.append('id', this.tokenItem.id)
        formDataNft.append('wallet', this.$ramper.getAccountId())
        formDataNft.append('tier', String(this.tokenAux.typetoken_id))
        formDataNft.append('id_collection', this.tokenAux.artist_id)
        formDataNft.append('number_collection', this.tokenAux.collection)

        if (this.tokenAux.title !== this.tokenItem.title) {
          formDataNft.append('title', this.tokenItem.title)
        }
        if (this.tokenAux.description !== this.tokenItem.description) {
          formDataNft.append('description', this.tokenItem.description)
        }
        if (this.tokenAux.price !== this.tokenItem.price) {
          formDataNft.append('price', this.tokenItem.price)
        }
        if (
          this.tokenAux.copies &&
          this.tokenAux.copies !== this.tokenItem.copies
        ) {
          formDataNft.append('copies', this.tokenItem.copies)
        }
        if (this.tokenAux.media !== this.tokenItem.media) {
          formDataNft.append('media', this.tokenItem.media)
        }

        if (this.tokenItem.video) {
          formDataNft.append('video', this.tokenItem.video)
        }

        formDataNft.append('royalty', JSON.stringify(this.dataRoyalties))
        formDataNft.append('royaltyBuy', JSON.stringify(this.dataSplit))

        this.$axios
          .post(`${process.env.NODE_URL}/update-nft/`, formDataNft)
          .then((res) => {
            this.overlay = false
            this.btnSave = false
            this.dialogSuccess = true
          })
          .catch((err) => {
            this.overlay = false
            console.error(err)
            this.btnSave = false
          })
      } else {
        this.overlay = false
        this.btnSave = false
      }
    },
    async saveForm() {
      this.btnSave = true
      if (this.$refs.form.validate()) {
        if (!this.formArtistItem) {
          const cidNft = await this.uploadIpfs(this.imageNft)
          // const cidSong = await this.uploadIpfs(this.formTier.song)

          const formDataArtist = new FormData()
          formDataArtist.append('wallet', this.$ramper.getAccountId())
          formDataArtist.append('wallet_artist', this.formArtist.walletArtist)
          formDataArtist.append('name', this.formArtist.name)
          formDataArtist.append('description', this.formArtist.description)
          formDataArtist.append('about', this.formArtist.about)

          formDataArtist.append('instagram', this.formArtist.instagram || '')
          formDataArtist.append('twitter', this.formArtist.twitter || '')
          formDataArtist.append('facebook', this.formArtist.facebook || '')
          formDataArtist.append('discord', this.formArtist.discord || '')
          formDataArtist.append('image', this.imageAvatar)
          formDataArtist.append('banner', this.imageBanner)
          formDataArtist.append('banner_mobile', this.imageMobile)

          this.$axios
            .post(`${this.baseUrl}api/v1/artist-proposal/`, formDataArtist)
            .then((result) => {
              const formDataNft = new FormData()
              formDataNft.append('artist_proposal', result.data.id)
              formDataNft.append(
                'tierNumber',
                Number(this.selectedTier.replace('Tier ', ''))
              )
              formDataNft.append('nft_name', this.formTier.nft_name)
              formDataNft.append('description', this.formTier.description)
              formDataNft.append('price', this.formTier.price)
              formDataNft.append(
                'image',
                'https://' + cidNft + '.ipfs.nftstorage.link'
              )
              formDataNft.append('copies', this.formTier.copies)
              formDataNft.append(
                'royalties',
                JSON.stringify(this.dataRoyalties)
              )
              formDataNft.append(
                'royalties_split',
                JSON.stringify(this.dataSplit)
              )

              if (this.selectedTier === 'Tier 2') {
                formDataNft.append('video', this.formTier.media)
              } else if (this.selectedTier === 'Tier 1') {
                formDataNft.append('audio', this.formTier.song)
              }

              this.$axios
                .post(`${this.baseUrl}api/v1/tier-proposal/`, formDataNft)
                .then(async () => {
                  this.formArtistItem = await this.getFormArtist()
                  this.getArtistProposals()
                  this.dialogSuccess = true
                  this.btnSave = false
                })
                .catch((err) => {
                  this.btnSave = false
                  console.error(err)
                })
            })
            .catch((err) => {
              this.btnSave = false
              console.error(err)
            })
        } else {
          const cidNft = await this.uploadIpfs(this.imageNft)
          // let cidMedia
          // if (this.selectedTier === "Tier 2") {
          //   cidMedia = await this.uploadIpfs(this.formTier.song)
          // }

          const formDataNft = new FormData()
          formDataNft.append('artist_proposal', this.formArtistItem.id)
          formDataNft.append(
            'tierNumber',
            Number(this.selectedTier.replace('Tier ', ''))
          )
          formDataNft.append('nft_name', this.formTier.nft_name)
          formDataNft.append('description', this.formTier.description)
          formDataNft.append('price', this.formTier.price)
          formDataNft.append(
            'image',
            'https://' + cidNft + '.ipfs.nftstorage.link'
          )
          formDataNft.append('copies', this.formTier.copies)
          formDataNft.append('royalties', JSON.stringify(this.dataRoyalties))
          formDataNft.append('royalties_split', JSON.stringify(this.dataSplit))

          if (this.selectedTier === 'Tier 2') {
            formDataNft.append('video', this.formTier.media)
          } else if (this.selectedTier === 'Tier 1') {
            formDataNft.append('audio', this.formTier.song)
          }

          this.$axios
            .post(`${this.baseUrl}api/v1/tier-proposal/`, formDataNft)
            .then(() => {
              this.dialogSuccess = true
              this.btnSave = false
              this.getArtistProposals()
            })
            .catch((err) => {
              this.btnSave = false
              console.error(err)
            })
        }
      }
    },
    async getIsAdmin() {
      if (this.$ramper.getAccountId()) {
        return await this.$axios
          .post(`${this.baseUrl}api/v1/is-admin/`, {
            admin: this.$ramper.getAccountId(),
          })
          .then((result) => {
            return result.data
            // this.$store.commit("setIsAdmin", result.data);
          })
          .catch(() => {
            // this.$alert("cancel", {desc: err.message})
            // console.error(err);
            return false
          })
      }
    },
    async uploadIpfs(file) {
      try {
        const formData = new FormData()
        formData.append('file', file)

        const resp = await this.$axios.post(
          'https://api.nft.storage/upload',
          formData,
          {
            headers: {
              'Content-Type': file.type,
              Authorization: 'Bearer ' + process.env.VUE_APP_IPFS_KEY,
            },
            maxContentLength: 100 * 1024 * 1024, // 100 MB
            maxBodyLength: 100 * 1024 * 1024, // 100 MB
          }
        )

        // this.uploadedFileInfo = resp.data.value
        // localStorage.setItem('cid', this.uploadedFileInfo.cid)
        if (resp.data.value?.cid && resp.data.value?.files[0]?.name) {
          return {
            cid: resp.data.value.cid,
            name: resp.data.value.files[0].name,
          }
        } else {
          return false
        }
      } catch (error) {
        console.error(error)
        return false
      }
    },
    async getFormArtist() {
      if (this.$ramper.getAccountId()) {
        return await this.$axios
          .post(`${this.baseUrl}api/v1/get-artist-proposal/`, {
            wallet: this.$ramper.getAccountId(),
          })
          .then((result) => {
            if (result.data.length === 0) {
              this.items_tier = ['Tier 1']
              this.selectedTier = 'Tier 1'
              return false
            } else {
              this.items_tier = ['Tier 2']
              this.selectedTier = null
              const item = result.data[0]
              item.walletArtist = item.wallet_artist
              this.formArtist = item
              this.selectedImageAvatar = this.baseUrl + item.image
              this.selectedImageBanner = this.baseUrl + item.banner
              this.selectedImageMobile = this.baseUrl + item.banner_mobile

              return result.data[0]
            }
            // this.$store.commit("setIsAdmin", result.data);
          })
          .catch((err) => {
            // this.$alert("cancel", {desc: err.message})
            console.error(err)
          })
      }
    },
    getArtistProposals() {
      if (this.$ramper.getAccountId()) {
        this.$axios
          .post(`${this.baseUrl}api/v1/get-artist-proposals/`, {
            wallet: this.$ramper.getAccountId(),
          })
          .then((result) => {
            this.tableItemsArtists = []
            const data = []
            // for (let i = 0; i < result.data.length; i++) {
            for (const item of result.data) {
              for (const tier of item.tiers) {
                const dataItem = {
                  tier: 'Tier ' + tier.tierNumber,
                  tierItem: tier,
                  ...item,
                }

                if (tier.status === 1) {
                  dataItem.statusText = 'Approved'
                } else if (tier.status === 2) {
                  dataItem.statusText = 'Rejected'
                } else if (tier.status === 3) {
                  dataItem.statusText = 'Pending'
                }

                data.push(dataItem)
              }
            }
            this.tableItemsArtists = data
          })
          .catch((err) => {
            console.error(err)
          })
      }
    },
  },
}
</script>

<style src="~/assets/styles/pages/form-nft.scss" lang="scss" />
