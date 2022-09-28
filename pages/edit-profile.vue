<template>
  <div id="profile" class="divcol">
    <section
      class="header"
      :style="`--bg-image: url(${profileBanner})`">
      <img src="@/assets/sources/images/avatar.jpg" alt="avatar image">

      <label for="bannerBtn" class="btn activeBtn" style="--p: 0 2em">Upload</label>
      <v-file-input
        id="bannerBtn"
        v-model="bannerImage_model"
        style="display:none"
        @change="previewBanner()"
      ></v-file-input>
    </section>

    <v-form ref="form" v-model="valid" class="grid" @submit.prevent="saveForm()">
      <section class="card">
        <label for="name">full name</label>
        <v-text-field
          id="name"
          v-model="form.name"
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
          :rules="rules.required"
        ></v-text-field>
        
        <label for="twitter">twitter account</label>
        <v-text-field
          id="twitter"
          v-model="form.twitter"
          placeholder="@username"
          :rules="rules.required"
        ></v-text-field>

        <label for="bio">bio</label>
        <v-textarea
          id="bio"
          v-model="form.bio"
          placeholder="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."          height="70px"
          no-resize
        ></v-textarea>
      </section>

      <div class="center fill_w wrap fwrapmobile bold" style="gap:2em; --fb: 200px">
        <v-btn :ripple="false" class="btn activeBtn" @click="cancelForm()">Cancel</v-btn>
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
      bannerImage_model: [],
      profileBanner: require('~/assets/sources/images/img-header-profile.jpg'),
      form: {
        name: "",
        username: "",
        email: "",
        discord: "",
        twitter: "",
        bio: "",
      },
      valid: false,
      rules: {
        required: [(v) => !!v || "Field required"],
      },
    }
  },
  mounted() {
  },
  methods: {
    previewBanner() {
      this.profileBanner = URL.createObjectURL(this.bannerImage_model);
    },
    cancelForm() {
      Object.keys(this.form).forEach(key => {this.form[key] = ''});
      this.$alert('cancel', 'canceled', 'Data is aborted !')
    },
    saveForm() {
      if (this.$refs.form.validate()) {this.$alert('success')}
    },
  }
};
</script>

<style src="~/assets/styles/pages/profile.scss" lang="scss" />
