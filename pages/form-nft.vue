<template>
    <div id="form">
      <h2 class="Title tup lines">FORM ARTIST</h2>  

      <v-row style="margin-top: 40px;">
        <v-col xl="10" lg="10" md="9" sm="8" cols="12">
          <div class="relative" style="background-color: #fff;">
            <v-file-input class="input-file" prepend-icon="none">
            </v-file-input>

            <v-sheet class="sheet-avatar">
              <v-chip class="chip-pencil center">
                <v-icon small>
                  mdi-pencil
                </v-icon>
              </v-chip>
              <span class="divcol center span-image" style="color: #000; font-size: 12px;">
                <v-icon color="#000" style="margin-bottom: -10px;">mdi-image-outline</v-icon>
                <br>
                Profile Picture
              </span>
            </v-sheet>

            <v-btn class="btn btn-input-file-banner">Upload Banner</v-btn>
          </div>
        </v-col>

        <v-col xl="2" lg="2" md="3" sm="4" cols="12">
          <div class="relative" style="background-color: #fff;">
            <v-file-input class="input-file" prepend-icon="none">
            </v-file-input>

            <v-btn class="btn btn-input-file">Upload Banner</v-btn>

            <span class="divcol center span-image" style="color: #000; font-size: 12px;">
              <v-icon color="#000" style="margin-bottom: -10px;">mdi-image-outline</v-icon>
              <br>
              Mobile Banner
            </span>
          </div>
        </v-col>
      </v-row>

      <section class="card" style="margin-top: 40px;">
        <label for="name-artist">Name</label>
        <v-text-field
          id="name-artist"
          placeholder="Lorem Ipsum"
        ></v-text-field>

        <label for="description-artist">Description</label>
        <v-text-field
          id="description-artist"
          placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, placeat" 
        ></v-text-field>

        <label for="about-artist">About</label>
        <v-text-field
          id="about-artist"
          placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, placeat" 
        ></v-text-field>
        
        <label for="discord-role">Discord Role ID</label>
        <v-text-field
          id="discord-role"
          placeholder="Username#123"
        ></v-text-field>

        <label for="instagram">Instagram</label>
        <v-text-field
          id="instagram"
          placeholder="@username"
        ></v-text-field>

        <label for="twitter">Twitter</label>
        <v-text-field
          id="twitter"
          placeholder="@username"
        ></v-text-field>

        <label for="discord-user">Discord</label>
        <v-text-field
          id="discord-user"
          placeholder="Username#456"
        ></v-text-field>

        <div class="divrow mt-4" style="gap: 30px;">
          <div class="divrow acenter" style="gap: 5px;">
            <v-checkbox id="visible_artist" v-model="visible_artist"></v-checkbox>
            <label for="visible_artist" class="mb-2">Visible</label>
          </div>

          <div class="divrow acenter" style="gap: 5px;">
            <v-checkbox id="coming_artist" v-model="coming_artist"></v-checkbox>
            <label for="coming_artist" class="mb-2">Coming</label>
          </div>
        </div>
      </section>

      <h2 class="Title tup lines">FORM NFT</h2>  
      
      <v-row style="margin-top: 40px;">
        <v-col xl="2" lg="3" md="3" sm="4" cols="12" style="position: relative!important;">
          <div style="background-color: #fff;">
            <v-file-input class="input-file" prepend-icon="none">
            </v-file-input>

            <v-btn class="btn btn-input-file">Upload Image</v-btn>
          </div>
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
              v-model="selectedTier"
              class="select tfirst"
              :items="items_tier"
              placeholder="Select Your Tier"
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

        <template v-if="selectedTier === 'Tier 1'">
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
        </template>

        <template v-if="selectedTier === 'Tier 2'">
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
        </template>
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

      <template v-if="selectedTier === 'Tier 3' || selectedTier === 'Tier 4'">
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
      </template>

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

      <v-expansion-panels class="custome-expansion not_padding" style="margin-top: 40px;">
        <v-expansion-panel>
          <v-expansion-panel-header expand-icon="mdi-menu-down" class="bold">Artists to be approve</v-expansion-panel-header>

          <v-expansion-panel-content color="rgb(0, 0, 0, .4)" class="container-table--expansion mt-5">
            <v-data-table
              :headers="tableHeadersArtists"
              :items="tableItemsArtists"
              :page.sync="currentPageArtists"
              :items-per-page="itemsPerPageArtists"
              hide-default-footer
              class="mb-4"
              mobile-breakpoint="-1"
              :header-props="{sortIcon: 'mdi-menu-down'}"
              style="background: transparent"
            >
              <template #[`item.actions`]="{ item }">
                <v-btn class="btn" @click="showData(item)">
                  Show Data
                </v-btn>
              </template>
            </v-data-table>
            <Pagination
              :total-pages="pagination_per_page"
              :current-page="currentPageArtists"
              @pagechanged="(page) => currentPageArtists = page"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <div class="center" style="gap: 10px; margin-top: 40px;">
        <v-btn class="btn" style="--bg: #fff; --c: var(--primary); --fw:700; --w: 150px; --br: 0px;">Approve</v-btn>
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
        tableHeadersArtists: [
          {text: 'Artist Name', value: 'artist_name', sortable: false, align: 'center'},
          {text: 'Description', value: 'description', sortable: false, align: 'center'},
          {text: 'Tier', value: 'tier', sortable: false, align: 'center'},
          {value: 'actions', sortable: false, align: 'center'},
        ],
        tableItemsArtists: [
          {artist_name: 'DJ Khaled', description: 'The best DJ in LA', tier: 'Tier 1'},
          {artist_name: 'DJ Navas', description: 'The best DJ in Valencia', tier: 'Tier 2'},
          {artist_name: 'DJ Khaled', description: 'The best DJ in LA', tier: 'Tier 1'},
          {artist_name: 'DJ Navas', description: 'The best DJ in Valencia', tier: 'Tier 2'},
          {artist_name: 'DJ Khaled', description: 'The best DJ in LA', tier: 'Tier 1'},
          {artist_name: 'DJ Navas', description: 'The best DJ in Valencia', tier: 'Tier 2'}, 
        ],
        currentPageArtists: 1,
        itemsPerPageArtists: 10,
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
      ],

      items_tier:["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"],
      selectedTier: null,
      }
    },
    head() {
      const title = "Form"
      return {
        title,
        }
    },
    computed:{
      pagination_per_page() {
        return Math.ceil(this.tableItemsArtists.length / this.itemsPerPageArtists)
      }
    },
    methods() {
      
    }
  };
  </script>
  
  <style src="~/assets/styles/pages/form-nft.scss" lang="scss" />
  