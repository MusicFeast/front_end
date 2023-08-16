<template>
  <div id="form-mf" class="divcol">
    <v-form ref="form" class="grid" @submit.prevent="saveForm()">
      <h2 class="tup p">Artist Submission</h2>

      <section>
        <p>
          Everyone Eats Entertainment would like to first say thank you for your interest in the next step in the evolution of the music industry.
        </p>
        <p>
          Our company is a blend of traditional and non traditional music industry models.  With our technology, you can support your traditional 
          releases by building an exclusive, unlockable community that allows access to super rare verifiable content and experiences.
        </p>
      </section>

      <h2 class="tup p">Artist Submission Form
        <!-- <sup class="relative" style="top: calc(clamp(15px, 2vw, 30px) * -1)">
          <v-tooltip
            right color="rgba(0, 0, 0, .4)" transition="slide-x-transition"
            :open-delay="100" :close-delay="100">
            <template #activator="{ on, attrs}">
              <img src="~/assets/sources/icons/info.svg" alt="info" style="--w: clamp(12px, 1.5vw, 21px)" v-bind="attrs" v-on="on">
            </template>
            <span>Texto de ayuda</span>
          </v-tooltip>
        </sup> -->
      </h2>

      <section class="card">
        <label for="name">Name</label>
        <v-text-field
          id="name"
          v-model="form.full_name"
          placeholder="Mario Perez"
          :rules="rules.required"
        ></v-text-field>
        
        <label for="artistOrBandName">Artist or Band Name</label>
        <v-text-field
          id="artistOrBandName"
          v-model="form.name_artist"
          placeholder="artist or band name"
          :rules="rules.required"
        ></v-text-field>
        
        <label for="email">Genre</label>
        <v-text-field
          id="genre"
          v-model="form.genere"
          placeholder="genre"
          :rules="rules.required"
        ></v-text-field>

        <label for="email">Email</label>
        <v-text-field
          id="email"
          v-model="form.email"
          placeholder="email"
          :rules="rules.required"
        ></v-text-field>
        
        <label for="email">Website</label>
        <v-text-field
          id="website"
          v-model="form.website"
          placeholder="website"
        ></v-text-field>
        
        <label for="twitter">Twitter Account</label>
        <v-text-field
          id="twitter"
          v-model="form.twitter"
          placeholder="@username"
        ></v-text-field>
        
        <label for="instagram">Instagram Account</label>
        <v-text-field
          id="instagram"
          v-model="form.instagram"
          placeholder="@username"
        ></v-text-field>
        
        <label for="facebook">Facebook Account</label>
        <v-text-field
          id="facebook"
          v-model="form.facebook"
          placeholder="facebook"
        ></v-text-field>
      </section>

      <section class="terms-and-conditions">
        <v-checkbox
          label="By clicking here you acknowledge that building out your community involves your commitment and active participation."
          :rules="rules.required"
        />
        <v-checkbox
          label="By clicking here you agree to have a member of our team reach out for further discussions."
          :rules="rules.required"
        />
      </section>

      <div class="center fill_w wrap fwrapmobile bold" style="gap:2em; --fb: 200px">
        <v-btn :ripple="false" class="btn activeBtn" @click="$router.go(-1)">Cancel</v-btn>
        <v-btn :ripple="false" class="btn activeBtn" @click="saveForm()">Submit</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "FormMF",
  mixins: [computeds],
  data() {
    return {
      userExist: undefined,
      form: {
        full_name: null,
        name_artist: null,
        genere: null,
        website: null,
        twitter: null,
        instagram: null,
        facebook: null,
        email: null
      },
      djangoExistenceList: {
        username: undefined,
        email: undefined,
        discord: undefined,
        instagram: undefined,
        twitter: undefined,
        telegram: undefined,
      },
      rules: {
        required: [(v) => !!v || "Field required"],
        repeatedUsername: [
          (v) => !!v || "Field required",
          () => !(this.djangoExistenceList.username) || "Username is already taken"
        ],
        repeatedEmail: [
          (v) => !!v || "Field required",
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          () => !(this.djangoExistenceList.email) || "Email is already used"
        ],
        repeatedDiscord: [
          () => !(this.djangoExistenceList.discord) || "Discord account is already used"
        ],
        repeatedInstagram: [
          () => !(this.djangoExistenceList.instagram) || "Instagram account is already used"
        ],
        repeatedTwitter: [
          () => !(this.djangoExistenceList.twitter) || "Twitter account is already used"
        ],
        repeatedTelegram: [
          () => !(this.djangoExistenceList.telegram) || "Telegram account is already used"
        ],
      },
    }
  },
  head() {
    const title = "Form MF"
    return {
      title,
    }
  },
  // created() {
  //   this.getData();
  // },
  mounted() {
    this.EnterKeyboardListener();
  },
  methods: {
    async getData() {
      const accountId = this.$ramper.getAccountId()
      // get data user
      await this.$axios.post(`${this.baseUrl}api/v1/get-perfil-data/`, { "wallet": accountId })
      .then(result => {
        const data = result.data[0]
        if (result.data[0]) {
          this.$equalData(this.form, data)
          this.form.id = data.id
          this.imgBanner = data.banner ? this.baseUrl+data.banner : this.user.banner
          this.imgAvatar = data.avatar ? this.baseUrl+data.avatar : this.user.avatar
          this.userExist = true
        } else {
          this.form.wallet = accountId
          this.imgBanner = this.user.banner
          this.imgAvatar = this.user.avatar
          this.userExist = false
        }
      }).catch(err => {
        this.$alert("cancel", {desc: err.message})
        console.error(err);
      })
    },
    clearRepeted(key) {
      if (this.djangoExistenceList[key]) this.djangoExistenceList[key] = undefined
    },
    EnterKeyboardListener() {
      // keyboard enter listener
      this.$refs.form.$el.querySelectorAll("input").forEach(input => {
        input.addEventListener("keypress", event => {
          if (event.key === "Enter") { this.saveForm() }
        })
      })
    },
    saveForm() {
      console.log(this.form)
      if (!this.$refs.form.validate()) return console.log("validate failed")

      this.$axios.post(`${this.baseUrl}api/v1/artist-submission/`, this.form)
      .then(result => {
        this.$alert({title: "Success!", desc: "Your data has been saved successfully."})
        this.form = {
          full_name: "",
          name_artist: "",
          genere: "",
          website: null,
          twitter: null,
          instagram: null,
          facebook: null,
          email: ""
        }
      })
      .catch(err => {
        this.$alert({title: 'Error!', desc: `Data save failed. ${err.message}`, icon: "mdi-close-circle", color: "#CE3D3D"})
      })
    },
    // goBack() {
    //   this.$alert({title: "Success!", desc: 'Your data has been saved successfully.'})
    //   setTimeout(() => this.$router.go(0), 400);
    //   this.$router.go(-1)
      
    //   // this.$alert("success", {desc: "Your data has been saved successfully."})   
    //   // setTimeout(() => this.$alert({title: "Success!", desc: "Your data has been saved successfully."}), 500);
    // },
    showTag() {document.querySelector(".header").classList.add("hover")},
    hideTag() {document.querySelector(".header").classList.remove("hover")},
    previewFile(key, file) {
      this.form[key] = file;
      if (key === 'avatar') { this.imgAvatar = URL.createObjectURL(file) }
      else { this.imgBanner = URL.createObjectURL(file) }
    },
  }
};
</script>

<style src="~/assets/styles/pages/form-mf.scss" lang="scss" />
