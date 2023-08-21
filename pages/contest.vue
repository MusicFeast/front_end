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
            <br>From September 1st - September 30th, just fill out the SUBMIT FORM below and follow the prompts to sign up and enter the contest!<br>
            <br>In addition, the first 100 submissions will be getting a FREE NFT of my track, Whoo Kid & Ashlee Bankz - Mode Again! We can’t wait to hear what you turn in and keep it fresh!<br>
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
            From September 1st - September 30th (30 days) music producers can submit their music 
            to the Music Feast Music 
            Production Contest for a chance to win one of THREE PRIZES!
           </span>

           <span class="bold mobile-span" style="--c:var(--accent); --fw: 700;">
            THE PRIZES:
           </span>
           <span class="mobile-span" style="line-height: 20px; max-width: 60%;">
            •1st Prize: $1000 Near Coin <br> 
            •2nd Prize: Track Mixed by Grammy Award-Winning 
            Mix Engineer, Blake Harden <br>
            •3rd Prize: 20,000 Feast Tokens for Music Feast 
            Platform 
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
          • Submit your music track demo on or before the deadline date of September 30th via the SUBMIT FORM below. <br>
          <br>• You will receive a confirmation email of your music submission. From this confirmation email, you will share this page and follow our socials. Make a social post about this contest and tag us.
        </p>

        <v-col cols="12">
          <section class="card card-icons">
            <v-btn v-for="(item,index) in dataSocial" :key="index">
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
            ></v-text-field>

            <label for="country">Country</label>
            <v-text-field
              id="country"
              v-model="country"
              :rules="rules.required"
              placeholder="Write your country"
              style="margin-bottom: 20px;"
            ></v-text-field>

            <label for="email">Email</label>
            <v-text-field
              id="email"
              v-model="email"
              :rules="rules.email"
              placeholder="example@gmail.com"
              style="margin-bottom: 20px;"
            ></v-text-field>

            <label for="discord">Discord ID</label>
            <v-text-field
              id="discord"
              v-model="discord_id"
              :rules="rules.required"
              placeholder="Username#321"
              style="margin-bottom: 20px;"
            ></v-text-field>

            <label for="twitter">Twitter Account</label>
            <v-text-field
              id="twitter"
              v-model="twitter"
              :rules="rules.required"
              placeholder="@username"
              style="margin-bottom: 20px;"
            ></v-text-field>

            <label for="bio">Bio</label>
            <v-text-field
              id="bio"
              v-model="bio"
              :rules="rules.required"
              placeholder="Lorem Ipsum"
              style="margin-bottom: 20px;"
            ></v-text-field>

            <v-row class="aend jend" style="margin-bottom: 20px;">
              <v-col lg="10" sm="9">
                <label for="track-demo">Track Demo</label>
                <v-file-input
                  id="track-demo"
                  v-model="track_demo"
                  placeholder=".WAV or .AIFF"
                  hide-details
                  :rules="fileRules"
                  accept=".wav,.aiff"
                  class="no-icon"
                  style="margin-left: -0px; border-bottom: 1px solid var(--primary)!important;"
                ></v-file-input>
              </v-col>

              <v-col lg="2" sm="3">
                <v-btn class="btn" style="--w: 100%;" :loading="btnUploadTrack" @click="uploadFile()">Upload</v-btn>
              </v-col>
            </v-row>

            <label for="track-desc">Track Description</label>
            <v-text-field
              id="track-desc"
              v-model="track_desc"
              :rules="rules.required"
              placeholder="Lorem Ipsum"
              style="margin-bottom: 20px;"
            ></v-text-field>
          </v-form>

          <v-btn class="btn mt-4" style="--w: 180px; justify-self: center; align-self: center;" :loading="btnUploadForm" :disabled="fileUp == false" @click="uploadForm()">Upload</v-btn>
        </div>
      </div>

      <v-dialog v-model="snackError" content-class="snackError">
        <v-card class="card divrow center jspace pl-2 pr-2">
          <v-icon color="red">
            mdi-close
          </v-icon>
          <span>
            Something gone wrong, please try again
          </span>
        </v-card>
      </v-dialog>
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
          icon: require("~/assets/sources/icons/instagram_white.svg")
        },
        {
          icon: require("~/assets/sources/icons/twitter_white.svg")
        },
        {
          icon: require("~/assets/sources/icons/facebook_white.svg")
        },
        {
          icon: require("~/assets/sources/icons/discord_white.svg")
        },
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
  head() {
    const title = "Contest"
    return {
      title,
      }
  },

  created(){
    localStorage.removeItem('cid')
  },

  methods: {
    goForm() {
      const seccionFormularioConcurso = document.getElementById('contest-form')
      if (seccionFormularioConcurso) {
        seccionFormularioConcurso.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    },

    uploadForm() {
      if (this.$refs.formContest.validate() && this.fileUp){
      this.btnUploadForm = true
      this.dataForm = {
        wallet: "",
        full_name: this.full_name,
        country: this.country,
        email: this.email,
        discord_id: this.discord_id,
        twitter: this.twitter,
        bio: this.bio,
        track_demo: "https://" + localStorage.getItem('cid') + ".ipfs.nftstorage.link",
        track_desc: this.track_desc
      }

      this.$axios.post('https://testnet.musicfeast.io/musicfeast_testnet/api/v1/contest-form/', this.dataForm)
      .then(result => {
        console.log(result)
        this.btnUploadForm = false
        this.$alert( {key:"success" ,title: "SUCCESS", desc: "Information Sent"})
        localStorage.removeItem('cid')
        this.fileUp = false
      }).catch(err => {
        this.btnUploadForm = false
        this.$alert("cancel", {desc: err.message})
      })
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

        this.uploadedFileInfo = resp.data.value
        localStorage.setItem('cid', this.uploadedFileInfo.cid)
        return resp.data;
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
