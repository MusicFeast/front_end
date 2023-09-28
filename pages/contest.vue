<template>
    <div id="contest">
      <div class="divrow mobile-height" style="height: 600px;">
        <div class="divcol astart mobile-align" style="gap: 35px; min-width: 30%!important;">
         <h2 class="delete-mobile tup" style="color: var(--primary); line-height: 60px;">Music <br> Production <br> Contest</h2>
         <h2 class="show-mobile p tup tcenter" style="color: var(--primary);">Music Production Contest</h2>
         <span class="tcenter" style="font-size: 16px!important;">We are Giving Away Thousands of Dollars in Prizes</span>
         <v-btn class="btn" style="--w: 180px;" @click="goForm()">Contest Form</v-btn>
       </div>
       <div class="divrow center margin-mobile-left" style="gap: 30px; min-width: 70%!important;">
         <div v-for="(item,index) in dataImg" :key="index" class="container-img">
           <img :src="item.img" alt="dj image">
         </div>
        </div>
      </div>

      <div class="divcol" style="margin-top: 100px;">
        <h2 class="tcenter mb-16">WELCOME TO THE MUSIC FEAST MUSIC PRODUCTION CONTEST 2023!</h2>
        <p class="p mb-6 mobile-span tcenter" style="margin-inline: 40px;">
            We are hosting a worldwide music production contest to find some of the dopest producers in the game! <br>
            <br>We are giving away Thousands of dollars in prizes, including a Grand Prize of $1000, a mix session with Grammy Award-winning engineer Blake Blizzy - whose credits include Kendrick Lamar, and Travis Scott - and a track produced by Nailz - whose credits include Eminem, Dr. Dre - and much more!<br>
            <br>From September 26th to October 26th, just fill out the SUBMIT FORM below and follow the prompts to sign up and enter the contest!<br>
            <br>In addition, the first 100 submissions will be getting a FREE NFT of ClassiQ - Generator! We can’t wait to hear what you turn in and keep it fresh!<br>
        </p>
        <div class="lowlines"></div>
        <div class="rightline"></div>
      </div>

      <div class="container-img-no-margin">
        <div class="img-text-container delete-mobile">
           <!-- <img src="~/assets/sources/images/desktop.svg" alt="desktop" class="img-desktop"> -->
           <div class="absolute-div">
             <h2 class="tleft" style="--fw: 500;">SUMBMISSIONS <br> DETAILS</h2>
           </div>
        </div>
        <div class="container-text">
           <span class="bold mobile-span" style="--c:var(--accent); --fw: 700;">
            THE DATES:
           </span>
           <span class="mobile-span" style="line-height: 20px; max-width: 60%;">
            From September 26th to October 26th (30 days) music producers can submit their music to the Music Feast Music Production Contest for a chance to win one of FOUR PRIZES!
           </span>

           <span class="bold mobile-span" style="--c:var(--accent); --fw: 700;">
            THE PRIZES:
           </span>
           <span class="mobile-span" style="line-height: 20px; max-width: 60%;">
            •1st Prize: $1000 USDc <br> 
            •2nd Prize: Track Mixed by Grammy Award-Winning Mix Engineer, Blake Harden<br>
            •3rd Prize: Track Produced by Nailz (Eminem, Dr. Dre, and More)<br>
            •4th Prize: 20,000 Feast Tokens for Music Feast Platform
           </span>

           <span class="bold mobile-span" style="--c:var(--accent);">
            TERMS & CONDITIONS: 
           </span>
           <span class="mobile-span" style="line-height: 20px; max-width: 60%;">
            •All music genres will be considered <br>
            •Open to participants worldwide. <br>
            •One track submission per participant. <br>
            •All submissions after the deadline will not be considered. <br>
            •Submitted music remains the property of the artist.
           </span>
        </div>
      </div>

      <div class="lowlines"></div>
      <div class="rightline"></div>

      <div class="divcol jstart center" style="gap: 25px;">
        <h2 style="--fw: 500;">HOW TO ENTER</h2>
        <p class="mobile-span tcenter">
          • Submit your music track demo on or before the deadline date of October 26th via the SUBMIT FORM below. <br>
          <br>• You will receive a confirmation email of your music submission. From this confirmation email, you will share this page and follow our socials. Make a social post about this contest and tag us.
        </p>

        <v-col cols="12">
          <section class="card card-icons">
            <v-btn v-for="(item,index) in dataSocial" :key="index" :href="item.link" target="_blank">
              <img :src=item.icon alt="icon" style="width: 25px!important; height: 25px!important;">
            </v-btn>
          </section>
        </v-col>
      </div>

      <div id="contest-form" class="form-div" style="margin-top: 40px;">
        <div class="max1770">
          <h2 style="--fw: 500;">CONTEST FORM</h2>
          <v-form ref="formContest">
            <label for="full-name">Full Name</label>
            <v-text-field
              id="full-name"
              v-model="full_name"
              placeholder="John Doe"
              :rules="rules.required"
              style="margin-bottom: 20px;"
              @input="inputValidate"
            ></v-text-field>

            <label for="country">Country</label>
            <v-text-field
              id="country"
              v-model="country"
              :rules="rules.required"
              placeholder="Write your country"
              style="margin-bottom: 20px;"
              @input="inputValidate"
            ></v-text-field>

            <label for="email">Email</label>
            <v-text-field
              id="email"
              v-model="email"
              :rules="rules.email"
              placeholder="example@gmail.com"
              style="margin-bottom: 20px;"
              @input="inputValidate"
            ></v-text-field>

            <label for="discord">Discord ID</label>
            <v-text-field
              id="discord"
              v-model="discord_id"
              :rules="rules.required"
              placeholder="Username#321"
              style="margin-bottom: 20px;"
              @input="inputValidate"
            ></v-text-field>

            <label for="twitter">Twitter Account</label>
            <v-text-field
              id="twitter"
              v-model="twitter"
              :rules="rules.required"
              placeholder="@username"
              style="margin-bottom: 20px;"
              @input="inputValidate"
            ></v-text-field>

            <label for="bio">Bio</label>
            <v-text-field
              id="bio"
              v-model="bio"
              :rules="rules.required"
              placeholder="Lorem Ipsum"
              style="margin-bottom: 20px;"
              @input="inputValidate"
            ></v-text-field>

  
     
                <label for="track-demo">Track Demo</label>
                <v-file-input
                  id="track-demo"
                  v-model="track_demo"
                  hide-details
                  placeholder="Audio track"
                  :rules="rules.required"
                  accept="audio/*"
                  class="no-icon"
                  style="margin-bottom: 20px; margin-left: -0px; border-bottom: 1px solid var(--primary)!important;"
                ></v-file-input>
          

              <!-- <v-col lg="2" sm="3">
                <v-btn class="btn" style="--w: 100%;" :disabled="disableUpload || validateFile" :loading="btnUploadTrack" @click="uploadFile()">Upload</v-btn>
              </v-col> -->


            <label for="track-desc">Track Description</label>
            <v-text-field
              id="track-desc"
              v-model="track_desc"
              :rules="rules.required"
              placeholder="Lorem Ipsum"
              style="margin-bottom: 20px;"
              @input="inputValidate"
            ></v-text-field>
          </v-form>

          <v-btn class="btn mt-4" style="--w: 180px; justify-self: center; align-self: center;" :disabled="disableUpload || validateFile" :loading="btnUploadForm" @click="uploadForm()">Upload</v-btn>
        </div>
      </div>
    </div>
</template>

<script>
import computeds from '~/mixins/computeds'
//   import styles from '~/mixins/styles'

export default {
  name: "ContestPage",
  // mixins: [computeds, styles],
  mixins: [computeds],
  data() {
    return {
      disableUpload: false,
      snackError: false,
      dataImg:[
        {
          img: require("~/assets/sources/images/dj.svg")
        },
        {
          img: require("~/assets/sources/images/mixin.svg")
        },
        {
          img: require("~/assets/sources/images/edit.svg")
        },
      ],
      dataSocial:[
        {
          icon: require("~/assets/sources/icons/instagram_white.svg"),
          link: 'https://www.instagram.com/musicfeast.io/ ',
        },
        {
          icon: require("~/assets/sources/icons/twitter_white.svg"),
          link: 'https://twitter.com/musicfeast_io',
        },
        {
          icon: require("~/assets/sources/icons/facebook_white.svg"),
          link: 'https://www.facebook.com/musicfeast.io',
        },
        // {
        //   icon: require("~/assets/sources/icons/discord_white.svg"),
        //   link: '',
        // },
      ],
      items:["Canada", "EEUU", "Argentina", "Venezuela", "Mexico", "Ecuador"],
      rules: {
      required: [(v) => !!v || "Field required"],
      email: [
        (v) => !!v || "Field required",
        (v) => /.+@.+\..+/.test(v) || "Invalid email address",
      ],
    },

    fileRules: [
      value => !!value || 'File is required',
      value => {
        if (!value) return true;
        const allowedFormats = ['.wav', '.aiff'];
        const fileExtension = value.name.substring(value.name.lastIndexOf('.'));
        return allowedFormats.includes(fileExtension.toLowerCase()) || 'Invalid file format';
      },
    ],

    coming: false,
    visible: false,
    uploadedFileInfo: null,

    btnUploadTrack: false,
    btnUploadForm: false,

    full_name: '',
    country: '',
    email: '',
    discord_id: '',
    twitter: '',
    bio: '',
    track_demo: '',
    track_desc: '',

    fileUp: false,
    }
  },
  computed: {
    validateFile() {
      if (this.full_name && this.track_demo && this.country && this.email && this.discord_id && this.twitter && this.bio && this.track_desc) {
        return false
      } else {
        return true
      }
    }
  },
  head() {
    const title = "Contest"
    return {
      title,
      }
  },

  created(){
    localStorage.removeItem('cid')
  },

  // mounted(){
  //   this.$alert( {title: "ERROR", desc: "Information Sent", icon:"close", color:"hsl(0, 84%, 58%)"})
  // },

  methods: {
    inputValidate() {
      if (!this.$ramper.getAccountId()) {
        this.$parent.$parent.$parent.$refs.connect.modalConnect = true
      }
    },
    goForm() {
      const seccionFormularioConcurso = document.getElementById('contest-form')
      if (seccionFormularioConcurso) {
        seccionFormularioConcurso.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    },

    async uploadForm() {
      if (this.$ramper.getAccountId()) {
        console.log(this.$refs.formContest.validate())
        if (this.$refs.formContest.validate() && this.track_demo){
          this.btnUploadForm = true
          this.disableUpload = true

          const cid = await this.uploadIpfs(this.track_demo);

          if (!cid) return false;

          this.dataForm = {
            wallet: this.$ramper.getAccountId(),
            full_name: this.full_name,
            country: this.country,
            email: this.email,
            discord_id: this.discord_id,
            twitter: this.twitter,
            bio: this.bio,
            track_demo: "https://" + cid + ".ipfs.nftstorage.link",
            track_desc: this.track_desc
          }

          this.$axios.post(`${this.baseUrl}api/v1/contest-form/`, this.dataForm)
            .then(result => {
              console.log(result)
              this.btnUploadForm = false
              this.disableUpload = false
              this.$alert( {key:"success" ,title: "SUCCESS", desc: "Information Sent"})
              localStorage.removeItem('cid')
              this.fileUp = false
            }).catch(err => {
              console.log(err)
              this.btnUploadForm = false
              this.disableUpload = false
              this.$alert( {title: "ERROR", desc: err.response.data.email[0] ? err.response.data.email[0] : "SOMETHING GONE WRONG", icon:"close", color:"hsl(0, 84%, 58%)"})
            })
        }
      } else {
        this.$parent.$parent.$parent.$refs.connect.modalConnect = true
      }
    },

    async uploadIpfs(file) {
      try {
        const formData = new FormData();
        formData.append('file', file);

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
        );

        // this.uploadedFileInfo = resp.data.value
        // localStorage.setItem('cid', this.uploadedFileInfo.cid)
        return resp.data.value?.cid
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async uploadFile() {
      this.btnUploadTrack = true
      
      if (!this.track_demo) {
        this.btnUploadTrack = false
        return;
      }

      const result = await this.uploadIpfs(this.track_demo);

      if (result) {
        this.$alert( {key:"success" ,title: "SUCCESS", desc: "File Sent"})
        this.btnUploadTrack = false
        this.fileUp = true
      } else {
        this.btnUploadTrack = false
      }
    },
  },
};
</script>

<style src="~/assets/styles/pages/contest.scss" lang="scss" />
