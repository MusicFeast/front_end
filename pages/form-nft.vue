<template>
    <div id="form">
      <h2 class="Title tup lines">FORM NFT</h2>  
      
      <v-row style="margin-top: 40px;">
        <v-col xl="2" lg="3" md="3" sm="4" cols="12" style="position: relative!important;">
          <v-file-input class="input-file" prepend-icon="none">
          </v-file-input>

          <v-btn class="btn btn-input-file">Upload Image</v-btn>
        </v-col>

        <v-col xl="10" lg="9" md="9" sm="8" cols="12">
          <section class="card">
            <label for="nft-name">NFT Name</label>
            <v-text-field
              id="nft-name"
              placeholder="Mario Perez"
            ></v-text-field>
            
            <label for="tier">Tier</label>
            <v-select
              id="tier"
              class="select"
              placeholder="Artist or band name"
            ></v-select>
          </section>
        </v-col>
      </v-row>

      <section class="card" style="margin-top: 40px;">
        <label for="nft-name">Description</label>
        <v-text-field
          id="description"
          placeholder="Lorem Ipsum"
        ></v-text-field>
        
        <label for="nft-name">Price</label>
        <v-text-field
          id="Price"
          placeholder="Price"
        ></v-text-field>

        <div class="relative">
          <label for="nft-name">Number of copies</label>
          <v-text-field
            id="copies"
            placeholder="20"
          ></v-text-field>
          <v-btn class="btn-plus-minus" style="top: 20px;right: 40px; position: absolute!important;"><v-icon>mdi-minus</v-icon></v-btn>
          <v-btn class="btn-plus-minus" style="top: 20px;right: 0; position: absolute!important;"><v-icon>mdi-plus</v-icon></v-btn>
        </div>

        <v-row class="center">
          <v-col  xl="10" lg="10" md="10" sm="10" cols="8">
            <label for="nft-name">Song audio</label>
            <v-text-field
              id="song"
              placeholder="Song"
            ></v-text-field>
          </v-col>

          <v-col xl="2" lg="2" md="2" sm="2" cols="4">
            <v-btn class="btn" style="--w: 100%;">Upload</v-btn>
          </v-col>
        </v-row>

        <v-row class="center">
          <v-col  xl="10" lg="10" md="10" sm="10" cols="8">
            <label for="nft-name">Video</label>
            <v-text-field
              id="video"
              placeholder="Video"
            ></v-text-field>
          </v-col>

          <v-col xl="2" lg="2" md="2" sm="2" cols="4">
            <v-btn class="btn" style="--w: 100%;">Upload</v-btn>
          </v-col>
        </v-row>
      </section>

      <section class="card" style="margin-top: 40px;">
        <v-badge
          class="mb-5"
          offset-x="-5px"
          >
          <template #badge>
            <v-icon color="var(--primary)" style="font-size: 25px;">mdi-information-symbol</v-icon>
          </template>
          <span class="span-badge">Royalties</span>
        </v-badge>

        <v-row class="aend">
          <v-col xl="9" lg="9" md="9" sm="7" cols="7">
            <label for="near-account">Near Account</label>
            <v-text-field
              id="near-account"
              placeholder="nearaccount.testnet"
            ></v-text-field>
          </v-col>
          <v-col xl="2" lg="2" md="2" sm="4" cols="4">
            <v-text-field
              placeholder="%"
            ></v-text-field>
          </v-col>
          <v-col style="align-self: center!important;">
            <v-icon color="var(--primary)" class="mr-2" style="font-size: 26px;">mdi-delete</v-icon>
            <v-btn class="btn-plus-minus" style="background-color: var(--accent)!important;"><v-icon>mdi-plus</v-icon></v-btn>
          </v-col>

          <v-btn class="btn ml-3" style="--fw:700; --w: 150px; --br: 0px;">Cancel</v-btn>
        </v-row>

        <v-badge
          class="mb-5 mt-14"
          offset-x="-5px"
          >
          <template #badge>
            <v-icon color="var(--primary)" style="font-size: 25px;">mdi-information-symbol</v-icon>
          </template>
          <span class="span-badge">Split Revenue</span>
        </v-badge>

        <v-row class="aend">
          <v-col xl="9" lg="9" md="9" sm="7" cols="7">
            <label for="near-account">Near Account</label>
            <v-text-field
              id="near-account"
              placeholder="nearaccount.testnet"
            ></v-text-field>
          </v-col>
          <v-col xl="2" lg="2" md="2" sm="4" cols="4">
            <v-text-field
              placeholder="%"
            ></v-text-field>
          </v-col>
          <v-col style="align-self: center!important;">
            <v-icon color="var(--primary)" class="mr-2" style="font-size: 26px;">mdi-delete</v-icon>
            <v-btn class="btn-plus-minus" style="background-color: var(--accent)!important;"><v-icon>mdi-plus</v-icon></v-btn>
          </v-col>

          <v-btn class="btn ml-3" style="--fw:700; --w: 150px; --br: 0px;">Cancel</v-btn>
        </v-row>
      </section>

      <h2 class="Title tup lines">Physical Merchandise</h2>  

      <section class="card" style="margin-top: 40px;">
        <v-badge
          class="mb-5"
          offset-x="-5px"
          >
          <template #badge>
            <v-icon color="var(--primary)" style="font-size: 25px;">mdi-information-symbol</v-icon>
          </template>
          <span class="span-badge">Type of merchandise</span>
        </v-badge>

        <hr class="mb-4" style="border-color: var(--primary)!important;">

        <div class="pa-2 container-card-merchandise">
          <v-card v-for="(item,index) in dataMerchandise" :key="index" class="card pa-3 card-merchandise">
            <img :src=item.img alt="img" style="width: 200px;">
            <div class="div-card-hover">
              <span class="tcenter" style="text-decoration: underline; font-weight: 700!important;">
                Merchandise <br> Title
              </span>

              <span class="tcenter" style="font-size: 13px;">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, eveniet!
              </span>

              <v-btn class="btn center" style="max-width: 70%!important; min-width: 70%!important;">
                Select
              </v-btn>
            </div>
          </v-card>
        </div>
      </section>

      <section class="card divrow" style="margin-top: 40px; gap: 40px;">
        <div class="divrow acenter" style="gap: 5px;">
          <v-checkbox id="visible" v-model="visible"></v-checkbox>
          <label for="visible" class="mb-2">Visible</label>
        </div>

        <div class="divrow acenter" style="gap: 5px;">
          <v-checkbox id="coming" v-model="coming"></v-checkbox>
          <label for="coming" class="mb-2">Coming</label>
        </div>
      </section>

      <div class="center" style="gap: 10px; margin-top: 40px;">
        <v-btn class="btn" style="--bg: #fff; --c: var(--primary); --fw:700; --w: 150px; --br: 0px;">Cancel</v-btn>
        <v-btn class="btn" style="--fw:700; --w: 150px; --br: 0px;" @click="dialogSuccess = true">Save</v-btn>
      </div>

      <!-- Dialog Success -->

      <v-dialog v-model="dialogSuccess" max-width="500px" content-class="nft-dialog" persistent>
      <v-btn icon class="close" @click="dialogSuccess = false">
        <v-icon large>mdi-close</v-icon>
      </v-btn>

      <v-card id="modalBuy" class="nft-dialog--content quick-help-card">
        <h2 class="p center" style="--fs: 1.8em; text-decoration: underline;">
          SUCCESS!
        </h2>
        <span>
          Your transaction was succesful.
        </span>
        <v-btn class="btn" style="min-width: 70%!important;" @click="dialogSuccess = false">
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
    name: "FormPage",
    // mixins: [computeds, styles],
    mixins: [computeds],
    data() {
      return {
        dialogSuccess: false,
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

      coming: false,
      visible: false,

      dataMerchandise:[
        {
          img: require("~/assets/sources/images/shirt.png")
        },
        {
          img: require("~/assets/sources/images/sweatter.png")
        },
        {
          img: require("~/assets/sources/images/cap.png")
        },
        {
          img: require("~/assets/sources/images/cup.png")
        },
      ]
      }
    },
    head() {
      const title = "Form"
      return {
        title,
        }
    },
    methods() {
      
    }
  };
  </script>
  
  <style src="~/assets/styles/pages/form-nft.scss" lang="scss" />
  