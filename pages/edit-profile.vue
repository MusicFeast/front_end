<template>
  <div id="profile" class="divcol">
    <v-img
      :src="imgBanner"
      transition="fade-transition"
      class="header"
      :style="`
        --tag-tier: '${
          user.tier === 1
            ? 'bronze'
            : user.tier === 2
            ? 'silver'
            : user.tier === 3
            ? 'gold'
            : user.tier === 4
            ? 'platinum'
            : user.tier === 5
            ? 'diamond'
            : user.tier === 6
            ? 'uranium'
            : 'user'
        }'
      `"
    >
      <template #default>
        <v-avatar
          width="var(--size)"
          height="var(--size)"
          style="--size: 13.954375em"
          @mouseenter="showTag()"
          @mouseleave="hideTag()"
        >
          <label for="avatar" title="change avatar">
            <v-img
              :src="imgAvatar"
              alt="avatar image"
              transition="fade-transition"
            >
              <template #placeholder>
                <v-skeleton-loader type="avatar" />
              </template>
            </v-img>
          </label>
        </v-avatar>
        <v-file-input
          id="avatar"
          v-model="avatar_model"
          style="display: none"
          accept="image/png, image/jpeg"
          @change="previewFile('avatar', avatar_model)"
        ></v-file-input>

        <label for="bannerBtn" class="btn activeBtn" style="--p: 0 2em"
          >Upload</label
        >
        <v-file-input
          id="bannerBtn"
          v-model="banner_model"
          style="display: none"
          accept="image/png, image/jpeg"
          @change="previewFile('banner', banner_model)"
        ></v-file-input>
      </template>
      <template #placeholder>
        <v-skeleton-loader v-show="imgBanner" type="card" />
      </template>
    </v-img>

    <v-row class="mt-6">
      <v-col xl="4" lg="4" md="4" cols="12">
        <v-card class="card center divcol card-background-padding">
          <h4>Set Address</h4>
          <v-btn class="btn" @click="$router.push('edit-address')">Start</v-btn>
        </v-card>
      </v-col>

      <v-col xl="4" lg="4" md="4" cols="12">
        <v-card class="card center divcol card-background-padding">
          <h4>New Collection</h4>
          <v-btn class="btn" @click="dialogNewCollection = true">Start</v-btn>
        </v-card>
      </v-col>

      <v-col xl="4" lg="4" md="4" cols="12">
        <v-card class="card center divcol card-background-padding">
          <h4>Edit Collection</h4>
          <v-btn class="btn" @click="dialogEditTier = true">Start</v-btn>
        </v-card>
      </v-col>
    </v-row>

    <!-- <h2 class="tup p mt-16">Artist banner</h2>

    <v-row style="margin-top: 40px">
      <v-col xl="10" lg="10" md="9" sm="8" cols="12">
        <div
          class="relative"
          style="background-color: #fff; max-height: 250px; min-height: 250px"
        >
          <span class="absolute-font"
            ><div>1180 Width x 401.5 Height</div></span
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
              <span style="color: rgba(0, 0, 0, 0.6); font-size: 12px"
                >307 x 307</span
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
          <span class="absolute-font">135.5 Height x 271 Height</span>

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
    </v-row> -->

    <v-form ref="form" class="grid" @submit.prevent="saveForm()" style="display: none;">
      <h2 class="tup p">Basic information</h2>

      <section class="card">
        <label for="name">full name</label>
        <v-text-field
          id="name"
          v-model="form.full_name"
          placeholder="Mario Perez"
        ></v-text-field>

        <label for="username">username</label>
        <v-text-field
          id="username"
          v-model="form.username"
          placeholder="username123"
          :rules="rules.repeatedUsername"
          @input="clearRepeted('username')"
        ></v-text-field>

        <label for="email">email</label>
        <v-text-field
          id="email"
          v-model="form.email"
          placeholder="example@domain.com"
          :rules="rules.required"
          @input="clearRepeted('email')"
        ></v-text-field>

        <label for="discord">discord</label>
        <v-text-field
          id="discord"
          v-model="form.discord"
          placeholder="username#321"
          :rules="rules.repeatedDiscord"
          @input="clearRepeted('discord')"
        ></v-text-field>

        <label for="instagram">instagram account</label>
        <v-text-field
          id="instagram"
          v-model="form.instagram"
          placeholder="@username#321"
          :rules="rules.repeatedInstagram"
          @input="clearRepeted('instagram')"
        ></v-text-field>

        <label for="twitter">twitter account</label>
        <v-text-field
          id="twitter"
          v-model="form.twitter"
          placeholder="@username"
          :rules="rules.repeatedTwitter"
          @input="clearRepeted('twitter')"
        ></v-text-field>

        <label for="telegram">telegram account</label>
        <v-text-field
          id="telegram"
          v-model="form.telegram"
          placeholder="@username45"
          :rules="rules.repeatedTelegram"
          @input="clearRepeted('telegram')"
        ></v-text-field>

        <label for="bio">Description</label>
        <!-- <v-textarea
          id="bio"
          v-model="form.bio"
          placeholder="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
          no-resize
        ></v-textarea> -->
        <vue-editor v-model="form.description" class="mt-4 mb-4"></vue-editor>

        <label for="bio">About</label>
        <vue-editor v-model="form.about" class="mt-4 mb-4"></vue-editor>
      </section>

      <h2 class="tup p">
        address (This is only to receive your physical merch)
      </h2>

      <section class="card">
        <label for="country">country</label>
        <v-select
          id="country"
          v-model="form.address.country"
          :items="dataCountries"
          solo
          item-text="name"
          item-value="name"
          placeholder="Select The Country"
          style="--fs-place: 16px"
          clearable
          clear-icon="mdi-close"
        ></v-select>

        <label for="street">street address</label>
        <v-text-field
          id="street"
          v-model="form.address.street_address"
          placeholder="Street Address, P.O, box, lorem ipsum"
        ></v-text-field>

        <label for="apartment">Apartment, Suite, Etc</label>
        <v-text-field
          id="apartment"
          v-model="form.address.street_address2"
          placeholder="Street Address 2, P.O, box, lorem ipsum "
        ></v-text-field>

        <label for="city">city</label>
        <v-text-field
          id="city"
          v-model="form.address.city"
          placeholder="Lorem ipsum"
        ></v-text-field>

        <label for="state">State / Province / Region</label>
        <v-text-field
          id="state"
          v-model="form.address.state"
          placeholder="Lorem ipsum"
        ></v-text-field>

        <label for="postal">Postal / Zip Code</label>
        <v-text-field
          id="postal"
          v-model="form.address.postal"
          placeholder="Lorem ipsum"
        ></v-text-field>

        <label for="postal">Phone Number</label>
        <v-text-field
          id="postal"
          v-model="form.address.phone_number"
          placeholder="Lorem ipsum"
        ></v-text-field>
      </section>

      <div
        class="center fill_w wrap fwrapmobile bold"
        style="gap: 2em; --fb: 200px"
      >
        <v-btn
          :ripple="false"
          class="btn activeBtn"
          @click="$router.push(localePath('/profile'))"
          >Cancel</v-btn
        >
        <v-btn :ripple="false" class="btn activeBtn" @click="saveForm()"
          >Save</v-btn
        >
      </div>
    </v-form>

    <!-- Dialogsss -->
    <v-dialog
      v-model="dialogNewCollection"
      max-width="500px"
      content-class="nft-dialog"
      persistent
    >
      <v-btn icon class="close" @click="dialogNewCollection = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-card id="modalBuy" class="nft-dialog--content quick-help-card divcol pt-14 pb-4 pl-6 pr-6">
        <!-- <h2 class="center" style="--fs: 1.6em">Example text</h2> -->

        <div class="card center divcol card-background-padding">
          <h4 class="tcenter">Quick Tip Help</h4>
          <v-btn class="btn" @click="$router.push('quick-tip-help-form')">Start</v-btn>
        </div>

        <div class="card center divcol card-background-padding">
          <h4 class="tcenter">Start</h4>
          <v-btn class="btn" @click="$router.push('form-nft-tier1')">Go</v-btn>
        </div>
      </v-card>
    </v-dialog>

    <!-- Dialog edit tier -->
    <v-dialog
      v-model="dialogEditTier"
      max-width="500px"
      content-class="nft-dialog"
      persistent
    >
      <v-btn icon class="close" @click="dialogEditTier = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-card id="modalBuy" class="nft-dialog--content quick-help-card divcol pt-14 pb-4 pl-6 pr-6">
        <!-- <h2 class="center" style="--fs: 1.6em">Example text</h2> -->

        <div class="card center divcol card-background-padding">
          <h4 class="tcenter">Quick Tip Help</h4>
          <v-btn class="btn" @click="$router.push('quick-tip-help-form')">Start</v-btn>
        </div>

        <div class="card center divcol card-background-padding">
          <h4 class="tcenter">Upload Track <br> (Tier 1)</h4>
          <v-btn class="btn" @click="dialogEditTier = false;dialogSelectYourNft = true">Start</v-btn>
        </div>

        <div class="card center divcol card-background-padding">
          <h4 class="tcenter">Upload Video <br> (Tier 2)</h4>
          <v-btn class="btn">Start</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <!-- Dialog select your nft -->
    <v-dialog
      v-model="dialogSelectYourNft"
      max-width="500px"
      content-class="nft-dialog"
      persistent
    >
      <v-btn icon class="close" @click="dialogSelectYourNft = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-card id="modalBuy" class="nft-dialog--content quick-help-card divcol pt-14 pb-4 pl-6 pr-6">
        <h2 class="center" style="--fs: 1.6em">Select Your Collection</h2>

        <v-select
          id="country"
          v-model="valueNft"
          :items="dataNfts" 
          item-text="title"
          item-value="id"
          solo
          :rules="[v => !!v || 'required field']"
          placeholder="Select one of your available token"
          style="--fs-place: 16px; flex-grow: 0"
        ></v-select>

        <v-btn class="btn" @click="$router.push('update-nft-form')">Edit <v-icon class="ml-2">mdi-pencil-outline</v-icon></v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { VueEditor } from 'vue2-editor'
import computeds from '~/mixins/computeds'
const { getAllCountries } = require('countries-and-timezones')

export default {
  components: {
    VueEditor,
  },
  name: 'EditProfilePage',
  mixins: [computeds],
  data() {
    return {
      dataNfts: [],
      valueNft: null,
      userExist: undefined,
      imgBanner: undefined,
      imgAvatar: undefined,
      dialogEditTier: false,
      dialogSelectYourNft: false,
      dialogNewCollection: false,
      avatar_model: [],
      banner_model: [],
      form: {
        avatar: '',
        banner: '',
        wallet: null,
        full_name: null,
        username: null,
        email: null,
        discord: null,
        instagram: null,
        twitter: null,
        telegram: null,
        bio: null,
        address: {
          phone_number: null,
          country: null,
          street_address: null,
          street_address2: null,
          city: null,
          state: null,
          postal: null,
        },
      },
      imageNft: undefined,
      selectedImageNft: '',

      imageMobile: undefined,
      selectedImageMobile: '',

      imageAvatar: undefined,
      selectedImageAvatar: '',

      imageBanner: undefined,
      selectedImageBanner: '',
      dataCountries: [],
      djangoExistenceList: {
        username: undefined,
        email: undefined,
        discord: undefined,
        instagram: undefined,
        twitter: undefined,
        telegram: undefined,
      },
      rules: {
        required: [(v) => !!v || 'Field required'],
        repeatedUsername: [
          () =>
            !this.djangoExistenceList.username || 'Username is already taken',
        ],
        repeatedEmail: [
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
    }
  },
  head() {
    const title = 'Edit Profile'
    return {
      title,
    }
  },
  created() {
    this.getData()
  },
  mounted() {
    this.$gtag.pageview({ page_path: this.$route.path }) // Google Analytics
    const countries = getAllCountries()
    this.dataCountries = Object.values(countries)
    this.EnterKeyboardListener()
    this.getDataNfts()
  },
  methods: {
    async getDataNfts() {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($artist_id: String, $owner_id: String, $serie_id: String) {
          nfts(
            where: {owner_id: $owner_id, artist_id: $artist_id, serie_id: $serie_id}
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
        variables: {artist_id: String(this.nft.artist_id), owner_id: this.$ramper.getAccountId(), serie_id: String(this.nft.type_id)},
      })

      console.log(String(this.nft.artist_id))
      console.log(this.$ramper.getAccountId())
      console.log(String(this.nft.type_id))

      const data = res.data.nfts

      for (let i = 0; i < data.length; i++) {
        data[i].extra = data[i].metadata.extra
        data[i].media = data[i].metadata.media
        data[i].reference = data[i].metadata.reference
        data[i].description = data[i].metadata.description
        data[i].title = data[i].metadata.title
      }

      this.dataNfts = data
      console.log(this.dataNfts, 'Dataaaaa array')
    },
    async getData() {
      const accountId = this.$ramper.getAccountId()
      // get data user
      await this.$axios
        .post(`${this.baseUrl}api/v1/get-perfil-data/`, { wallet: accountId })
        .then((result) => {
          const data = result.data[0]
          console.log(data)
          if (result.data[0]) {
            this.$equalData(this.form, data)
            this.form.id = data.id
            this.imgBanner = data.banner
              ? this.baseUrl + data.banner
              : this.user.banner
            this.imgAvatar = data.avatar
              ? this.baseUrl + data.avatar
              : this.user.avatar
            this.userExist = true

            this.selectedImageAvatar = data.image
              ? this.baseUrl + data.image
              : null
            this.selectedImageBanner = data.banner_artist
              ? this.baseUrl + data.banner_artist
              : null
            this.selectedImageMobile = data.banner_mobile
              ? this.baseUrl + data.banner_mobile
              : null
          } else {
            this.form.wallet = accountId
            this.imgBanner = this.user.banner
            this.imgAvatar = this.user.avatar
            this.userExist = false
          }
        })
        .catch((err) => {
          this.$alert({
            title: 'ERROR',
            desc: 'SOMETHING GONE WRONG',
            icon: 'close',
            color: 'hsl(0, 84%, 58%)',
          })
          // this.$alert("cancel", {desc: err.message})
          console.error(err)
        })
    },
    clearRepeted(key) {
      if (this.djangoExistenceList[key])
        this.djangoExistenceList[key] = undefined
    },
    EnterKeyboardListener() {
      // keyboard enter listener
      this.$refs.form.$el.querySelectorAll('input').forEach((input) => {
        input.addEventListener('keypress', (event) => {
          if (event.key === 'Enter') {
            this.saveForm()
          }
        })
      })
    },
    saveForm() {
      console.log(this.$refs.form.validate())
      if (!this.$refs.form.validate()) return
      // verification ⭐
      const consult = {
        username: this.form.username,
        email: this.form.email,
        twitter: this.form.twitter,
        discord: this.form.discord,
        instagram: this.form.instagram,
        telegram: this.form.telegram,
        wallet: this.form.wallet,
      }
      // checkout no repeated info
      this.$axios
        .post(`${this.baseUrl}api/v1/validate-perfil/`, consult)
        .then((result) => {
          this.djangoExistenceList = result.data

          // if (!this.$refs.form.validate()) return this.$alert( {title: "Failed request", desc: "Need fill all required fields", icon:"close", color:"hsl(0, 84%, 58%)"})

          if (this.imageBanner) {
            this.form.banner_artist = this.imageBanner
          }

          if (this.imageAvatar) {
            this.form.image = this.imageAvatar
          }

          if (this.imageMobile) {
            this.form.banner_mobile = this.imageMobile
          }

          // save form ✔️
          if (this.userExist) {
            this.$axios
              .put(
                `${this.baseUrl}api/v1/perfil/${this.form.id}/`,
                this.$formData(this.form)
              )
              .then(() => this.goBack())
              .catch((err) => {
                // this.$alert("cancel", {desc: err.message})
                console.error(err)
              })
          } else {
            this.$axios
              .post(`${this.baseUrl}api/v1/perfil/`, this.$formData(this.form))
              .then(() => this.goBack())
              .catch((err) => {
                this.$alert({
                  title: 'ERROR',
                  desc: 'SOMETHING GONE WRONG',
                  icon: 'close',
                  color: 'hsl(0, 84%, 58%)',
                })
                // this.$alert("cancel", {desc: err.message})
                console.error(err)
              })
          }
          // catch error repeated values consult
        })
        .catch((err) => {
          // this.$alert("cancel", {desc: err.message})
          console.error(err)
        })
    },
    goBack() {
      this.$alert({
        title: 'Profile updated successfully!',
        desc: 'Your information has been successfully modified.',
      })
      setTimeout(() => this.$router.go(0), 400)
      this.$router.go(-1)

      // this.$alert("success", {desc: "Your data has been saved successfully."})
      // setTimeout(() => this.$alert({title: "Success!", desc: "Your data has been saved successfully."}), 500);
    },
    showTag() {
      document.querySelector('.header').classList.add('hover')
    },
    hideTag() {
      document.querySelector('.header').classList.remove('hover')
    },
    previewFile(key, file) {
      this.form[key] = file
      if (key === 'avatar') {
        this.imgAvatar = URL.createObjectURL(file)
      } else {
        this.imgBanner = URL.createObjectURL(file)
      }
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
      this.validateForm()
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
      if (!file) {
        return
      }
      this.createImageMobile(file)
    },
  },
}
</script>

<style src="~/assets/styles/pages/profile.scss" lang="scss" />
