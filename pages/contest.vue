<template>
    <div id="contest">
      <div class="divrow mobile-height" style="height: 600px;">
        <div class="divcol astart mobile-align" style="gap: 35px; min-width: 30%!important;">
         <h2 class="delete-mobile tup" style="color: var(--primary); line-height: 60px;">Music <br> Production <br> Contest</h2>
         <h2 class="show-mobile p tup tcenter" style="color: var(--primary);">Music Production Contest</h2>
         <span style="font-size: 16px!important;">We are Giving Away Thousands of Dollars in Prizes</span>
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
          <v-form ref="form-contest">
            <v-row class="aend jend" style="margin-bottom: 20px;">
              <v-col lg="10" sm="9">
                <label for="photo">Upload Photo</label>
                <v-file-input
                  id="photo"
                  placeholder=".JPG or .PNG"
                  hide-details
                  accept=".jpg,.png"
                  class="no-icon"
                  style="margin-left: -0px; border-bottom: 1px solid var(--primary)!important;"
                ></v-file-input>
              </v-col>

              <v-col lg="2" sm="3">
                <v-btn class="btn" style="--w: 100%;">Upload</v-btn>
              </v-col>
            </v-row>

            <label for="full-name">Full Name</label>
            <v-text-field
              id="full-name"
              placeholder="John Doe"
              style="margin-bottom: 20px;"
            ></v-text-field>

            <label for="country">Country</label>
            <v-select
              id="country"
              class="select"
              solo
              :items="items"
              hide-details
              placeholder="Artist or band name"
              style="margin-bottom: 20px;"
            ></v-select>

            <label for="email">Email</label>
            <v-text-field
              id="email"
              placeholder="example@gmail.com"
              style="margin-bottom: 20px;"
            ></v-text-field>

            <label for="discord">Discord ID</label>
            <v-text-field
              id="discord"
              placeholder="Username#321"
              style="margin-bottom: 20px;"
            ></v-text-field>

            <label for="twitter">Twitter Account</label>
            <v-text-field
              id="twitter"
              placeholder="@username"
              style="margin-bottom: 20px;"
            ></v-text-field>

            <label for="bio">Bio</label>
            <v-text-field
              id="bio"
              placeholder="Lorem Ipsum"
              style="margin-bottom: 20px;"
            ></v-text-field>

            <v-row class="aend jend" style="margin-bottom: 20px;">
              <v-col lg="10" sm="9">
                <label for="track-demo">Track Demo</label>
                <v-file-input
                  id="track-demo"
                  placeholder=".WAV or .AIFF"
                  hide-details
                  :rules="fileRules"
                  accept=".wav,.aiff"
                  class="no-icon"
                  style="margin-left: -0px; border-bottom: 1px solid var(--primary)!important;"
                ></v-file-input>
              </v-col>

              <v-col lg="2" sm="3">
                <v-btn class="btn" style="--w: 100%;">Upload</v-btn>
              </v-col>
            </v-row>

            <label for="track-desc">Track Description</label>
            <v-text-field
              id="track-desc"
              placeholder="Lorem Ipsum"
              style="margin-bottom: 20px;"
            ></v-text-field>
          </v-form>

          <v-btn class="btn mt-4" style="--w: 180px; justify-self: center; align-self: center;">Upload</v-btn>
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
      items:["Canada", "EEUU", "Lorem Ipsum", "Lorem Ipsum"],
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
    }
  },
  head() {
    const title = "Contest"
    return {
      title,
      }
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
    }
  },
};
</script>

<style src="~/assets/styles/pages/contest.scss" lang="scss" />
