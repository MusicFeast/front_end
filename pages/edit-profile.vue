<template>
  <div id="profile" class="divcol">
    <section
      class="header"
      :style="`
        --bg-image: url(${imgBanner});
        --tag-tier: '${
          user.tier===1 ? 'bronze' :
          user.tier===2 ? 'silver' :
          user.tier===3 ? 'gold' :
          user.tier===4 ? 'platinum' :
          user.tier===5 ? 'diamond' :
          user.tier===6 ? 'uranium' : 'user'
        }'
      `"
    >
      <v-avatar
        width="var(--size)" height="var(--size)" style="--size: 13.954375em"
        @mouseenter="showTag()" @mouseleave="hideTag()">
        <label for="avatar" title="change avatar">
          <img :src="imgAvatar" alt="avatar image">
        </label>
      </v-avatar>
      <v-file-input
        id="avatar"
        v-model="avatar_model"
        style="display:none"
        accept="image/png, image/jpeg"
        @change="previewFile('avatar', avatar_model)"
      ></v-file-input>

      <label for="bannerBtn" class="btn activeBtn" style="--p: 0 2em">Upload</label>
      <v-file-input
        id="bannerBtn"
        v-model="banner_model"
        style="display:none"
        accept="image/png, image/jpeg"
        @change="previewFile('banner', banner_model)"
      ></v-file-input>
    </section>

    <v-form ref="form" class="grid" @submit.prevent="saveForm()">
      <section class="card">
        <label for="name">full name</label>
        <v-text-field
          id="name"
          v-model="form.full_name"
          placeholder="Mario Perez"
          :rules="rules.required"
        ></v-text-field>
        
        <label for="username">username</label>
        <v-text-field
          id="username"
          v-model="form.username"
          placeholder="username123"
          :rules="rules.required"
        ></v-text-field>
        
        <label for="email">email</label>
        <v-text-field
          id="email"
          v-model="form.email"
          placeholder="example@domain.com"
          :rules="rules.required"
        ></v-text-field>
        
        <label for="discord">discord</label>
        <v-text-field
          id="discord"
          v-model="form.discord"
          placeholder="username#321"
        ></v-text-field>
        
        <label for="instagram">instagram account</label>
        <v-text-field
          id="instagram"
          v-model="form.instagram"
          placeholder="@username#321"
        ></v-text-field>
        
        <label for="twitter">twitter account</label>
        <v-text-field
          id="twitter"
          v-model="form.twitter"
          placeholder="@username"
        ></v-text-field>
        
        <label for="telegram">telegram account</label>
        <v-text-field
          id="telegram"
          v-model="form.telegram"
          placeholder="@username45"
        ></v-text-field>
        
        <label for="bio">bio</label>
        <v-textarea
          id="bio"
          v-model="form.bio"
          placeholder="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
          height="70px"
          no-resize
        ></v-textarea>
      </section>

      <h2 class="tup p">address<sup class="relative" style="top: calc(clamp(15px, 2vw, 30px) * -1)">
          <v-tooltip
            right color="rgba(0, 0, 0, .4)" transition="slide-x-transition"
            :open-delay="100" :close-delay="100">
            <template #activator="{ on, attrs}">
              <img src="~/assets/sources/icons/info.svg" alt="info" style="--w: clamp(12px, 1.5vw, 21px)" v-bind="attrs" v-on="on">
            </template>
            <span>(optional) Apply to redeem physical products</span>
          </v-tooltip>
        </sup>
      </h2>

      <section class="card">
        <label for="country">country</label>
        <v-select
          id="country"
          v-model="form.address.country"
          :items="dataCountries" solo
          :rules="rules.required"
          placeholder="Select The Country"
          style="--fs-place: 16px"
        ></v-select>
        
        <label for="street">street address</label>
        <v-text-field
          id="street"
          v-model="form.address.street_address"
          placeholder="Street Address, P.O, box, lorem ipsum"
          :rules="Object.keys(form.address).find(e => 
              e !== 'country' ? form.address[e] : undefined
            ) || Object.keys(form.address).find(e => e) && userExist
            ? rules.required : undefined
          "
        ></v-text-field>
        
        <label for="apartment">Apartment, Suite, Etc</label>
        <v-text-field
          id="apartment"
          v-model="form.address.street_address2"
          placeholder="Street Address 2, P.O, box, lorem ipsum "
          :rules="Object.keys(form.address).find(e => 
              e !== 'country' ? form.address[e] : undefined
            ) || Object.keys(form.address).find(e => e) && userExist
            ? rules.required : undefined
          "
        ></v-text-field>
        
        <label for="city">city</label>
        <v-text-field
          id="city"
          v-model="form.address.city"
          placeholder="Lorem ipsum"
          :rules="Object.keys(form.address).find(e => 
              e !== 'country' ? form.address[e] : undefined
            ) || Object.keys(form.address).find(e => e) && userExist
            ? rules.required : undefined
          "
        ></v-text-field>
        
        <label for="state">State / Province / Region</label>
        <v-text-field
          id="state"
          v-model="form.address.state"
          placeholder="Lorem ipsum"
          :rules="Object.keys(form.address).find(e => 
              e !== 'country' ? form.address[e] : undefined
            ) || Object.keys(form.address).find(e => e) && userExist
            ? rules.required : undefined
          "
        ></v-text-field>

        <label for="postal">Postal / Zip Code</label>
        <v-text-field
          id="postal"
          v-model="form.address.postal"
          placeholder="Lorem ipsum"
          :rules="Object.keys(form.address).find(e => 
              e !== 'country' ? form.address[e] : undefined
            ) || Object.keys(form.address).find(e => e) && userExist
            ? rules.required : undefined
          "
        ></v-text-field>
      </section>

      <div class="center fill_w wrap fwrapmobile bold" style="gap:2em; --fb: 200px">
        <v-btn :ripple="false" class="btn activeBtn" @click="$router.push(localePath('/profile'))">Cancel</v-btn>
        <v-btn :ripple="false" class="btn activeBtn" @click="saveForm()">Save</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "EditProfilePage",
  data() {
    return {
      userExist: undefined,
      imgBanner: require('~/assets/sources/images/img-header-profile.jpg'),
      imgAvatar: require('~/assets/sources/images/avatar.jpg'),
      avatar_model: [],
      banner_model: [],
      form: {
        avatar: "",
        banner: "",
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
          country: null,
          street_address: null,
          street_address2: null,
          city: null,
          state: null,
          postal: null,
        }
      },
      dataCountries: [ "Canada", "EEUU", "United Kingdom", "Spain", "Lorem ipsum", "Lorem ipsum" ],
      rules: {
        required: [(v) => !!v || "Field required"],
      },
    }
  },
  head() {
    const title = "Edit Profile"
    return {
      title,
    }
  },
  computed: {
    user() {return this.$store.state.dataUser},
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const baseUrl = this.$axios.defaults.baseURL;
      const accountId = await this.$store.dispatch("getData", {get: "wallet"})
      // get data user
      await this.$axios.post(`${baseUrl}api/v1/get-perfil-data/`, { "wallet": accountId })
      .then(fetch => {
        const data = fetch.data[0]
        if (data) {
          Object.entries(this.form).forEach(arr => {
            const dataValues = data[arr[0]]
            if (typeof dataValues !== "object") {
              this.form[arr[0]] = dataValues
            }
            else {
              Object.keys(arr[1]).forEach(key => { arr[1][key] = dataValues[key] })
            }
          })
          this.form.id = data.id
          this.imgBanner = baseUrl+data.banner
          this.imgAvatar = baseUrl+data.avatar
          this.userExist = true
        } else {
          this.form.wallet = accountId
          this.userExist = false
        }
      }).catch(error => {
        this.$alert("cancel", {desc: error.message})
        console.error(error);
      })
    },
    saveForm() {
      if (this.$refs.form.validate()) {
          const formData = new FormData();
          Object.entries(this.form).forEach(arr => {
            const excludeUrl = !(/\.(gif|jpg|jpeg|tiff|png)$/i).test(arr[1])

            // if object only
            if (typeof arr[1] === 'object' && !arr[1].type) { formData.append(arr[0], JSON.stringify(arr[1])) }
            // if file object
            else if (arr[1].type) { formData.append(arr[0], arr[1]) }
            // else
            else if (excludeUrl) { formData.append(arr[0], arr[1] || "") }
          })

        if (this.userExist) {
          this.$axios.put(`https://testnet.musicfeast.io/musicfeast/api/v1/perfil/${this.form.id}/`, formData)
          .then(() => this.goBack()).catch(error => {
            this.$alert("cancel", {desc: error.message})
            console.error(error);
          })
        } else {
          this.$axios.post('https://testnet.musicfeast.io/musicfeast/api/v1/perfil/', formData)
          .then(() => this.goBack()).catch(error => {
            this.$alert("cancel", {desc: error.message})
            console.error(error);
          })
        }
      }
      else {this.$alert('cancel', {title: 'Failed request', desc: 'Need fill all required fields'})}
    },
    goBack() {
      // setTimeout(() => this.$router.go(0), 100);
      this.$router.go(-1)
      this.$alert('success')
    },
    showTag() {document.querySelector(".header").classList.add("hover")},
    hideTag() {document.querySelector(".header").classList.remove("hover")},
    previewFile(key, file) {
      if (key === 'avatar') {
        this.imgAvatar = URL.createObjectURL(file);
        this.form.avatar = file;
      } else {
        this.imgBanner = URL.createObjectURL(file);
        this.form.banner = file;
      }
    },
  }
};
</script>

<style src="~/assets/styles/pages/profile.scss" lang="scss" />
