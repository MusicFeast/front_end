<template>
  <div id="form">
    <h2 class="Title tup lines">FORM ARTIST</h2>
    <v-row style="margin-top: 40px">
      <v-col xl="10" lg="10" md="9" sm="8" cols="12">
        <div
          class="relative"
          style="background-color: #fff; max-height: 250px; min-height: 250px"
        >
          <v-file-input
            ref="fileInputBanner"
            v-model="imageBanner"
            class="input-file"
            prepend-icon="none"
            style="display: none"
            @change="onFileChange"
          ></v-file-input>

          <v-btn
            class="btn btn-input-file-banner"
            :disabled="formArtistItem || showItem"
            @click="openFileInputBanner"
            >Upload Banner</v-btn
          >

          <img :src="selectedImageBanner" alt="" class="imgBanner" />

          <v-sheet class="sheet-avatar">
            <img :src="selectedImageAvatar" alt="" class="imgAvatar" />

            <v-file-input
              ref="fileInputAvatar"
              v-model="imageAvatar"
              class="input-file"
              prepend-icon="none"
              style="display: none"
              @change="onFileChangeAvatar"
            ></v-file-input>
            <v-chip class="chip-pencil center">
              <v-icon
                small
                :disabled="formArtistItem || showItem"
                @click="openFileInputAvatar"
              >
                mdi-pencil
              </v-icon>
            </v-chip>
            <span
              class="divcol center span-image"
              style="color: #000; font-size: 12px"
            >
              <v-icon color="#000" style="margin-bottom: -10px"
                >mdi-image-outline</v-icon
              >
              <br />
              <div class="mt-3">Profile Picture</div>
            </span>
          </v-sheet>
        </div>
      </v-col>

      <v-col xl="2" lg="2" md="3" sm="4" cols="12">
        <div
          class="relative"
          style="background-color: #fff; max-height: 250px; min-height: 250px"
        >
          <v-file-input
            ref="fileInputMobile"
            v-model="imageMobile"
            class="input-file"
            prepend-icon="none"
            style="display: none"
            @change="onFileChangeMobile"
          ></v-file-input>

          <img :src="selectedImageMobile" alt="" class="imgMobile" />

          <v-btn
            class="btn btn-input-file"
            :disabled="formArtistItem || showItem"
            @click="openFileInputMobile"
            >Upload Banner</v-btn
          >

          <span
            class="divcol center span-image"
            style="color: #000; font-size: 12px"
          >
            <v-icon color="#000" style="margin-bottom: -10px"
              >mdi-image-outline</v-icon
            >
            <br />
            <div class="mt-3">Mobile Banner</div>
          </span>
        </div>
      </v-col>
    </v-row>

    <section class="card" style="margin-top: 40px">
      <label for="nft-name"
        >Wallet Artist
        <label for="name-artist" style="color: red">*</label></label
      >
      <v-text-field
        id="description"
        v-model="formArtist.walletArtist"
        :disabled="showItem"
        :error="errorWalletArtist"
        :error-messages="errorMessage"
        @input="validateWalletArtist(formArtist.walletArtist)"
        placeholder="artist.near"
      ></v-text-field>

      <label for="name-artist"
        >Name <label for="name-artist" style="color: red">*</label></label
      >
      <v-text-field
        id="name-artist"
        v-model="formArtist.name"
        :disabled="formArtistItem || showItem"
        placeholder="Lorem Ipsum"
        @input="
          inputSave()
          inputName()
        "
      ></v-text-field>

      <label for="description-artist"
        >Description
        <label for="name-artist" style="color: red">*</label></label
      >
      <v-text-field
        id="description-artist"
        v-model="formArtist.description"
        :disabled="formArtistItem || showItem"
        placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, placeat"
        @input="inputSave()"
      ></v-text-field>

      <label for="about-artist"
        >Nutritional fact
        <label for="name-artist" style="color: red">*</label></label
      >
      <v-text-field
        id="about-artist"
        v-model="formArtist.about"
        :disabled="formArtistItem || showItem"
        placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, placeat"
        @input="inputSave()"
      ></v-text-field>

      <!-- <label for="discord-role">Discord Role ID</label>
        <v-text-field
          id="discord-role"
          placeholder="Username#123"
        ></v-text-field> -->

      <label for="instagram">Instagram</label>
      <v-text-field
        id="instagram"
        :disabled="formArtistItem || showItem"
        v-model="formArtist.instagram"
        placeholder="@username"
      ></v-text-field>

      <label for="twitter">Twitter</label>
      <v-text-field
        id="twitter"
        :disabled="formArtistItem || showItem"
        v-model="formArtist.twitter"
        placeholder="@username"
      ></v-text-field>

      <label for="facebook">Facebook</label>
      <v-text-field
        id="facebook"
        :disabled="formArtistItem || showItem"
        v-model="formArtist.facebook"
        placeholder="@username"
      ></v-text-field>

      <label for="discord-user">Discord</label>
      <v-text-field
        id="discord-user"
        :disabled="formArtistItem || showItem"
        v-model="formArtist.discord"
        placeholder="Username#456"
      ></v-text-field>

      <!-- <div class="divrow mt-4" style="gap: 30px;">
          <div class="divrow acenter" style="gap: 5px;">
            <v-checkbox id="visible_artist" v-model="visible_artist"></v-checkbox>
            <label for="visible_artist" class="mb-2">Visible</label>
          </div>

          <div class="divrow acenter" style="gap: 5px;">
            <v-checkbox id="coming_artist" v-model="coming_artist"></v-checkbox>
            <label for="coming_artist" class="mb-2">Coming</label>
          </div>
        </div> -->
    </section>

    <h2 class="Title tup lines">FORM NFT</h2>

    <v-row style="margin-top: 40px">
      <v-col
        xl="2"
        lg="3"
        md="3"
        sm="4"
        cols="12"
        style="position: relative !important"
      >
        <div
          style="background-color: #fff; max-height: 270px; min-height: 270px"
        >
          <v-file-input
            ref="fileInputNft"
            v-model="imageNft"
            class="input-file"
            prepend-icon="none"
            style="display: none"
            @change="onFileChangeNft"
          ></v-file-input>

          <img :src="selectedImageNft" alt="" class="imgNft" />

          <v-btn
            class="btn btn-input-file"
            :disabled="showItem"
            @click="openFileInputNft"
            >Upload Image</v-btn
          >
        </div>
      </v-col>

      <v-col xl="10" lg="9" md="9" sm="8" cols="12">
        <section class="card">
          <label for="nft-name">NFT Name</label>
          <v-text-field
            id="nft-name"
            v-model="formTier.nft_name"
            disabled
            @input="inputSave()"
            placeholder="Mario Perez"
          ></v-text-field>

          <label for="tier">Tier 1</label>
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
      <label for="nft-name">Description</label>
      <v-text-field
        id="description"
        v-model="formTier.description"
        disabled
        @input="inputSave()"
        placeholder="Lorem Ipsum"
      ></v-text-field>

      <label for="nft-name">Price</label>
      <v-text-field
        id="Price"
        v-model="formTier.price"
        :disabled="showItem"
        type="number"
        @input="inputSave()"
        placeholder="Price"
      ></v-text-field>

      <!-- <div class="relative">
          <label for="nft-name">Number of copies</label>
          <v-text-field
            id="copies"
            v-model="formTier.copies"
            :disabled="showItem"
            type="number"
            @input="inputSave()"
            placeholder="20"
          ></v-text-field>
          <v-btn class="btn-plus-minus" style="top: 20px;right: 40px; position: absolute!important;"><v-icon>mdi-minus</v-icon></v-btn>
          <v-btn class="btn-plus-minus" style="top: 20px;right: 0; position: absolute!important;"><v-icon>mdi-plus</v-icon></v-btn>
        </div> -->

      <template v-if="selectedTier === 'Tier 1'">
        <div class="relative">
          <label for="nft-name">Song audio</label>
          <!-- <v-text-field
                id="song"
                v-model="formTier.song"
                @input="inputSave()"
                placeholder="Song"
              ></v-text-field> -->
          <v-file-input
            id="song"
            class="no-icon"
            v-model="formTier.song"
            :disabled="showItem"
            accept="audio/*"
            placeholder="Song"
            @change="inputSave()"
          ></v-file-input>

          <!-- <v-col xl="2" lg="2" md="2" sm="2" cols="4">
              <v-btn class="btn" style="--w: 100%;">Upload</v-btn>
            </v-col> -->
        </div>
      </template>

      <template v-if="selectedTier === 'Tier 2'">
        <div class="relative">
          <label for="nft-name">Video</label>
          <v-file-input
            id="video"
            class="no-icon"
            v-model="formTier.media"
            :disabled="showItem"
            accept="audio/*"
            placeholder="Video"
            @change="inputSave()"
          ></v-file-input>
        </div>
      </template>
    </section>

    <section class="card" style="margin-top: 40px">
      <v-form ref="form">
        <v-badge class="mb-5" offset-x="-5px">
          <template #badge>
            <v-icon color="var(--primary)" style="font-size: 25px"
              >mdi-information-symbol</v-icon
            >
          </template>
          <span class="span-badge">Royalties</span>
          <span style="margin-left: 10px; color: white"
            >Available: ({{ royalAvaibable }}%)</span
          >
        </v-badge>

        <v-row class="aend" v-for="(item, i) in dataRoyalties" :key="i">
          <v-col xl="9" lg="9" md="9" sm="7" cols="7">
            <label for="near-account">Near Account</label>
            <v-text-field
              id="near-account"
              v-model="item.account"
              :disabled="showItem"
              placeholder="nearaccount.testnet"
              :rules="rules.required"
            ></v-text-field>
          </v-col>
          <v-col xl="2" lg="2" md="2" sm="4" cols="4">
            <v-text-field
              v-model="item.percentage"
              type="number"
              placeholder="%"
              @input="inputPercentRoyalties()"
              @change="inputPercentRoyalties()"
              :rules="rulesRoyal"
            ></v-text-field>
          </v-col>
          <v-col style="align-self: center !important">
            <v-icon
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

        <v-badge class="mb-5 mt-14" offset-x="-5px">
          <template #badge>
            <v-icon color="var(--primary)" style="font-size: 25px"
              >mdi-information-symbol</v-icon
            >
          </template>
          <span class="span-badge">Split Revenue</span>
          <span style="margin-left: 10px; color: white"
            >Available: ({{ splitAvailable }}%)</span
          >
        </v-badge>

        <v-row class="aend" v-for="(item, i) in dataSplit" :key="i">
          <v-col xl="9" lg="9" md="9" sm="7" cols="7">
            <label for="near-account">Near Account</label>
            <v-text-field
              id="near-account"
              v-model="item.account"
              :disabled="i == 0 ? true : showItem"
              placeholder="nearaccount.testnet"
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
            >Add Split</v-btn
          >
        </v-row>
      </v-form>
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
                style="text-decoration: underline; font-weight: 700 !important"
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

    <v-expansion-panels
      class="custome-expansion not_padding"
      style="margin-top: 40px"
    >
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down" class="bold"
          >Artists to be approve</v-expansion-panel-header
        >

        <v-expansion-panel-content
          color="rgb(0, 0, 0, .4)"
          class="container-table--expansion mt-5"
        >
          <v-data-table
            :headers="tableHeadersArtists"
            :items="tableItemsArtists"
            :page.sync="currentPageArtists"
            :items-per-page="itemsPerPageArtists"
            hide-default-footer
            class="mb-4"
            mobile-breakpoint="-1"
            :header-props="{ sortIcon: 'mdi-menu-down' }"
            style="background: transparent"
          >
            <template v-if="isAdmin" #[`item.actions`]="{ item }">
              <v-btn class="btn" @click="showData(item)"> Show Data </v-btn>
            </template>
          </v-data-table>
          <Pagination
            :total-pages="pagination_per_page"
            :current-page="currentPageArtists"
            @pagechanged="(page) => (currentPageArtists = page)"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <div class="center" style="gap: 10px; margin-top: 40px">
      <v-btn
        v-if="isAdmin && showItem"
        class="btn"
        :disabled="disabledApprove"
        :loading="btnReject"
        style="--fw: 700; --w: 150px; --br: 0px"
        @click="responseProposal(2)"
        >Reject</v-btn
      >
      <v-btn
        v-if="isAdmin && showItem"
        class="btn"
        :disabled="disabledApprove"
        :loading="btnApprove"
        style="
          --bg: #fff;
          --c: var(--primary);
          --fw: 700;
          --w: 150px;
          --br: 0px;
        "
        @click="responseProposal(1)"
        >Approve</v-btn
      >
      <v-btn
        v-if="!showItem"
        class="btn"
        :disabled="disabledSave"
        style="--fw: 700; --w: 150px; --br: 0px"
        :loading="btnSave"
        @click="saveForm()"
        >Save</v-btn
      >
    </div>

    <!-- Dialog Success -->

    <v-dialog
      v-model="dialogSuccess"
      max-width="500px"
      content-class="nft-dialog"
      persistent
    >
      <v-btn icon class="close" @click="dialogSuccess = false">
        <v-icon large>mdi-close</v-icon>
      </v-btn>

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
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
//   import styles from '~/mixins/styles'

export default {
  name: 'FormPage',
  // mixins: [computeds, styles],
  mixins: [computeds],
  data() {
    return {
      dataRoyalties: [],
      dataSplit: [{ account: '', percentage: null }],
      imageNft: undefined,
      selectedImageNft: '',

      imageMobile: undefined,
      selectedImageMobile: '',

      imageAvatar: undefined,
      selectedImageAvatar: '',

      imageBanner: undefined,
      selectedImageBanner: '',

      formArtist: {},
      formTier: {
        nft_name: 'Enter The Feast with Chef',
        description:
          '<p>UNLOVE you” by AST£R is a rendition of deep emotions clustered inside the mind of the artiste,caused by series of events and factors that arouse this carthasis from the artiste through to the listener via the music.</p>',
      },

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
      rules: {
        validate: [
          (v) => !!v || 'Field required',
          (v) => this.validateNear(v) || 'Wallet invalidate',
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
      errorWalletArtist: false,
      errorMessage: "",
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
    this.isAdmin = await this.getIsAdmin()

    this.formArtistItem = await this.getFormArtist()

    this.getArtistProposals()

    console.log(this.isAdmin)
  },
  methods: {
    async validateWalletArtist(item) {
      this.inputArtist(item)

      const validate = await this.validateNear(item)

      if (validate) {
        this.errorWalletArtist = false
        this.errorMessage = ""
      } else {
        this.errorWalletArtist = true
        this.errorMessage = "Account invalidate"
      }
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
    inputName() {
      const nftName = 'Enter The Feast with Chef'
      this.formTier.nft_name = nftName + ' ' + this.formArtist.name + '!'
    },
    OkSuccess() {
      this.dialogSuccess = false
      location.reload()
    },
    responseProposal(status) {
      this.disabledApprove = true
      if (status === 1) {
        this.btnApprove = true
      } else if (status === 2) {
        this.btnReject = true
      }
      const item = {
        wallet: this.$ramper.getAccountId(),
        artist_id: String(this.showItem.id),
        tier_id: String(this.showItem.tierItem.id),
        status,
      }
      this.$axios
        .post(`${this.baseUrl}api/v1/response-proposal/`, item)
        .then(() => {
          this.dialogSuccess = true
          this.btnReject = false
          this.btnApprove = false
        })
        .catch((err) => {
          this.btnReject = false
          this.btnApprove = false
          console.log(err)
        })
    },
    inputArtist(item) {
      this.dataSplit[0].account = item
      this.inputSave()
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
      this.inputSave()
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
      this.inputSave()
    },
    showData(item) {
      this.items_tier = ['Tier 1']
      console.log(item)
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
    remove(pos) {
      this.dataRoyalties.splice(pos, 1)
      console.log('HOLAAA!')
      this.inputPercentRoyalties()
    },
    remove1(pos) {
      this.dataSplit.splice(pos, 1)
    },
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
        console.log(
          this.validateFormArtist(),
          this.validateFormTier(),
          this.royalBool,
          this.splitBool
        )
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
        this.formTier.price
      ) {
        console.log(this.selectedTier)
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
              console.log(result.data)
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
                  console.log(err)
                })
            })
            .catch((err) => {
              this.btnSave = false
              console.log(err)
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
              console.log(err)
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
            // console.log(result.data)
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
        return resp.data.value?.cid || false
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
            console.log(result.data)
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
            console.log(result.data)
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

                console.log(dataItem)

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
