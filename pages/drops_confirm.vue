<template>
  <div id="profile" class="divcol">

    <v-form ref="form" class="grid" @submit.prevent="saveForm()">
      <section class="card">
        <label for="email">Add your email account to have access</label>
        <v-text-field
          :disabled="disableBtn"
          id="email"
          v-model="form.email"
          placeholder="example@domain.com"
          :rules="rules.repeatedEmail"
          @input="clearRepeted('email')"
        ></v-text-field>
      </section>
  
      <div class="center fill_w wrap fwrapmobile bold" style="gap:2em; --fb: 200px">
        <v-btn :disabled="disableBtn" :ripple="false" class="btn activeBtn" @click="$router.push(localePath('/drops'))">Cancel</v-btn>
        <v-btn :disabled="disableBtn" :ripple="false" class="btn activeBtn" @click="saveForm()">Save
          <v-progress-circular 
            style="margin-left: 6px;"
            v-show="disableBtn"
            :size="21"
            indeterminate
          ></v-progress-circular>
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "EditProfilePage",
  mixins: [computeds],
  data() {
    return {
      disableBtn: false,
      form: {
        email: null,
      },
      djangoExistenceList: {
        discord: undefined,
      },
      rules: {
        required: [(v) => !!v || "Field required"],
        repeatedEmail: [
          (v) => !!v || "Field required",
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          () => !(this.djangoExistenceList.email) || "Email is already used"
        ],
      },
    }
  },
  head() {
    const title = "Edit Profile"
    return {
      title,
    }
  },
  created() {
    this.getData();
  },
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
        console.log(data)
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
      this.disableBtn = true
      this.$axios.post(`${process.env.NODE_URL}/drive-service/`, {wallet: this.$ramper.getAccountId(), email: this.form.email})
      .then(response => {
        console.log(response.data)
        this.$router.push(this.localePath('/drops_success'))
        this.disableBtn = false
      }).catch(err => {
        // this.$alert("cancel", {desc: err.message})
        console.error(err);
        this.$router.push(this.localePath('/drops_error'))
        this.disableBtn = false
      })
      
    },
    goBack() {
      this.$alert({title: "Success!", desc: "Your data has been saved successfully."})
      setTimeout(() => this.$router.go(0), 400);
      this.$router.go(-1)
      
      // this.$alert("success", {desc: "Your data has been saved successfully."})   
      // setTimeout(() => this.$alert({title: "Success!", desc: "Your data has been saved successfully."}), 500);
    },
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

<style src="~/assets/styles/pages/profile.scss" lang="scss" />
