<template>
  <div id="form">
    <template v-if="reviewState">
      <h2 id="block-artist" class="Title tup lines">ARTIST PROFILE</h2>
      <!-- <v-row style="margin-top: 40px">
        <v-col cols="12" class="jcenter">
          <div
            class="relative background-upload-div-banner"
          >
            <span class="absolute-font-banner">1180 x 401.5 pixels <br> .jpg or .png</span>

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

        <v-col cols="12" class="jcenter">
          <div
            class="relative background-upload-div-mobile"
            style="max-height: 250px; min-height: 250px"
          >
            <span class="absolute-font2">135.5 x 271 pixels <br>.jpg or .png</span>

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
              class="btn btn-input-file-banner-mobile"
              :disabled="formArtistItem || showItem"
              @click="openFileInputMobile"
              >Upload Banner</v-btn
            >

            <span
              class="divcol center span-image-mobile-banner"
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

      <section class="card" style="margin-top: 40px">
        <!-- <label for="nft-name"
          >Wallet Artist
          <label for="name-artist" style="color: red">*</label></label
        >
        <v-text-field
          id="description"
          v-model="formArtist.walletArtist"
          :disabled="formArtistItem || showItem"
          :error="errorWalletArtist"
          :error-messages="errorMessage"
          @input="validateWalletArtist(formArtist.walletArtist)"
          placeholder="artist.near"
        ></v-text-field> -->

        <label for="name-artist"
          >Artist / Band Name
          <label for="name-artist" style="color: red">*</label></label
        >
        <v-text-field
          id="name-artist"
          v-model="formArtist.username"
          disabled
          placeholder="Lorem Ipsum"
          @input="
            inputSave()
            inputName()
          "
        ></v-text-field>

        <!-- <label for="description-artist"
          >Description
          <label for="name-artist" style="color: red">*</label></label
        >
        <v-text-field
          id="description-artist"
          v-model="formArtist.description"
          :disabled="formArtistItem || showItem"
          placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, placeat"
          @input="inputSave()"
        ></v-text-field> -->

        <label for="about-artist"
          >Bio -
          <span class="underline" @click="textExampleDialog = true"
            >Text Example</span
          >
          <label for="name-artist" style="color: red">*</label>
        </label>
        <vue-editor
          disabled
          v-model="formArtist.description"
          class="mt-4 mb-4"
        ></vue-editor>

        <!-- <label for="about-artist"
          >About
          <label for="name-artist" style="color: red">*</label>
        </label>
        <vue-editor
          :disabled="formArtistItem || showItem"
          v-model="formArtist.about"
          class="mt-4 mb-4"
        ></vue-editor> -->

        <!-- <v-text-field
          id="about-artist"
          v-model="formArtist.about"
          :disabled="formArtistItem || showItem"
          placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, placeat"
          @input="inputSave()"
        ></v-text-field> -->

        <!-- <label for="discord-role">Discord Role ID</label>
          <v-text-field
            id="discord-role"
            placeholder="Username#123"
          ></v-text-field> -->

        <label for="instagram">Instagram</label>
        <v-text-field
          id="instagram"
          disabled
          v-model="formArtist.instagram"
          placeholder="@username"
        ></v-text-field>

        <label for="twitter">Twitter</label>
        <v-text-field
          id="twitter"
          disabled
          v-model="formArtist.twitter"
          placeholder="@username"
        ></v-text-field>

        <label for="facebook">Facebook</label>
        <v-text-field
          id="facebook"
          disabled
          v-model="formArtist.facebook"
          placeholder="@username"
        ></v-text-field>

        <!-- <label for="discord-user">Discord</label>
        <v-text-field
          id="discord-user"
          :disabled="formArtistItem || showItem"
          v-model="formArtist.discord"
          placeholder="Username#456"
        ></v-text-field> -->

        <!-- <div class="divrow mt-4" style="gap: 30px;">
            <div class="divrow acenter" style="gap: 5px;">
              <v-checkbox id="visible_artist" v-model="visible_artist"></v-checkbox>
              <label for="visible_artist" class="mb-2">Visible</label>
            </div>

            <div class="divrow acenter" style="gap: 5px;">
              <v-checkbox id="coming_artist" v-model="coming_artist"></v-checkbox>
              <label for="coming_artist" class="mb-2">Coming</label>
            </div>
          </div> -->
      </section>

      <v-row style="margin-top: 40px">
        <v-col
          xl="3"
          lg="3"
          md="3"
          sm="4"
          cols="12"
          class="center"
          style="position: relative !important"
        >
          <div class="nft-upload-div">
            <img :src="selectedImageNft" alt="" class="imgNft" />
          </div>
        </v-col>

        <v-col xl="9" lg="9" md="9" sm="8" cols="12">
          <section class="card">
            <label for="nft-name">Description</label>
            <v-text-field
              id="description"
              v-model="formTier.description"
              disabled
              placeholder="Tier 1 description"
            ></v-text-field>

            <label for="nft-name">Price (USD)</label>
            <v-text-field
              id="Price"
              v-model="formTier.price"
              disabled
              type="number"
              placeholder="Price"
            ></v-text-field>

            <label for="nft-name"
              >Track Audio
              <v-icon v-if="showItem && track" @click="trackSong()"
                >mdi-pause</v-icon
              ><v-icon v-if="showItem && !track" @click="trackSong()"
                >mdi-play</v-icon
              ></label
            >
            <v-file-input
              id="song"
              truncate-length="100"
              v-model="formTier.song"
              disabled
              accept="audio/*"
              placeholder="Only .WAV, .MP3 or .MP4 files"
            ></v-file-input>
          </section>
        </v-col>
      </v-row>
    </template>

    <v-window v-model="windowStep">
      <v-window-item :value="1">
        <h2 id="block-artist" class="Title tup lines">ARTIST PROFILE</h2>
        <!-- <v-row style="margin-top: 40px">
          <v-col cols="12" class="jcenter">
            <div
              class="relative background-upload-div-banner"
            >
              <span class="absolute-font-banner">1180 x 401.5 pixels <br> .jpg or .png</span>

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

          <v-col cols="12" class="jcenter">
            <div
              class="relative background-upload-div-mobile"
              style="max-height: 250px; min-height: 250px"
            >
              <span class="absolute-font2">135.5 x 271 pixels <br>.jpg or .png</span>

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
                class="btn btn-input-file-banner-mobile"
                :disabled="formArtistItem || showItem"
                @click="openFileInputMobile"
                >Upload Banner</v-btn
              >

              <span
                class="divcol center span-image-mobile-banner"
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

        <section class="card" style="margin-top: 40px">
          <!-- <label for="nft-name"
            >Wallet Artist
            <label for="name-artist" style="color: red">*</label></label
          >
          <v-text-field
            id="description"
            v-model="formArtist.walletArtist"
            :disabled="formArtistItem || showItem"
            :error="errorWalletArtist"
            :error-messages="errorMessage"
            @input="validateWalletArtist(formArtist.walletArtist)"
            placeholder="artist.near"
          ></v-text-field> -->

          <label for="name-artist"
            >Artist / Band Name
            <label for="name-artist" style="color: red">*</label></label
          >
          <v-text-field
            id="name-artist"
            v-model="formArtist.username"
            placeholder="Lorem Ipsum"
            @input="
              inputSave()
              inputName()
            "
          ></v-text-field>

          <!-- <label for="description-artist"
            >Description
            <label for="name-artist" style="color: red">*</label></label
          >
          <v-text-field
            id="description-artist"
            v-model="formArtist.description"
            :disabled="formArtistItem || showItem"
            placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, placeat"
            @input="inputSave()"
          ></v-text-field> -->

          <label for="about-artist"
            >Bio -
            <span class="underline" @click="textExampleDialog = true"
              >Text Example</span
            >
            <label for="name-artist" style="color: red">*</label>
          </label>
          <vue-editor
            v-model="formArtist.description"
            class="mt-4 mb-4"
          ></vue-editor>

          <!-- <label for="about-artist"
            >About
            <label for="name-artist" style="color: red">*</label>
          </label>
          <vue-editor
            :disabled="formArtistItem || showItem"
            v-model="formArtist.about"
            class="mt-4 mb-4"
          ></vue-editor> -->

          <!-- <v-text-field
            id="about-artist"
            v-model="formArtist.about"
            :disabled="formArtistItem || showItem"
            placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, placeat"
            @input="inputSave()"
          ></v-text-field> -->

          <!-- <label for="discord-role">Discord Role ID</label>
            <v-text-field
              id="discord-role"
              placeholder="Username#123"
            ></v-text-field> -->

          <label for="instagram">Instagram</label>
          <v-text-field
            id="instagram"
            v-model="formArtist.instagram"
            placeholder="@username"
          ></v-text-field>

          <label for="twitter">Twitter</label>
          <v-text-field
            id="twitter"
            v-model="formArtist.twitter"
            placeholder="@username"
          ></v-text-field>

          <label for="facebook">Facebook</label>
          <v-text-field
            id="facebook"
            v-model="formArtist.facebook"
            placeholder="@username"
          ></v-text-field>

          <!-- <label for="discord-user">Discord</label>
          <v-text-field
            id="discord-user"
            :disabled="formArtistItem || showItem"
            v-model="formArtist.discord"
            placeholder="Username#456"
          ></v-text-field> -->

          <!-- <div class="divrow mt-4" style="gap: 30px;">
              <div class="divrow acenter" style="gap: 5px;">
                <v-checkbox id="visible_artist" v-model="visible_artist"></v-checkbox>
                <label for="visible_artist" class="mb-2">Visible</label>
              </div>

              <div class="divrow acenter" style="gap: 5px;">
                <v-checkbox id="coming_artist" v-model="coming_artist"></v-checkbox>
                <label for="coming_artist" class="mb-2">Coming</label>
              </div>
            </div> -->
        </section>
      </v-window-item>

      <v-window-item :value="2">
        <h2 class="Title tup lines" id="section-form-nft">
          Community Access Pass
        </h2>

        <v-row style="margin-top: 40px">
          <v-col
            xl="3"
            lg="3"
            md="3"
            sm="4"
            cols="12"
            class="center"
            style="position: relative !important"
          >
            <div class="nft-upload-div">
              <span class="absolute-font" style="left: 20px"
                >255 x 255 pixels <br />.jpg or .png</span
              >

              <v-file-input
                ref="fileInputNft"
                v-model="imageNft"
                class="input-file"
                prepend-icon="none"
                style="display: none"
                accept="image/*"
                @change="onFileChangeNft"
              ></v-file-input>

              <img :src="selectedImageNft" alt="" class="imgNft" />

              <v-btn
                class="btn btn-input-file"
                :disabled="showItem"
                @click="openFileInputNft"
                >Upload Cover Art</v-btn
              >
            </div>
          </v-col>

          <v-col xl="9" lg="9" md="9" sm="8" cols="12">
            <section class="card">
              <!-- <label for="nft-name">Track Name</label>
              <v-text-field
                id="nft-name"
                disabled
                v-model="formTier.nft_name"
                @input="validateForm()"
                placeholder="Track name"
              ></v-text-field> -->

              <!-- <label for="tier">Tier 1</label> -->
              <!-- <v-select
                  id="tier"
                  v-model="selectedTier"
                  :disabled="showItem"
                  @change="inputSave()"
                  class="select tfirst"
                  :items="items_tier"
                  placeholder="Select Your Tier"
                ></v-select> -->

              <label for="description">Song Description</label>
              <vue-editor
                id="description"
                v-model="formTier.description"
                :disabled="showItem"
                class="mt-4 mb-4"
                placeholder="Tier 1 description"
                @input="validateForm()"
              ></vue-editor>

              <label for="nft-name">Price (USD)</label>
              <v-text-field
                id="Price"
                v-model="formTier.price"
                :disabled="showItem"
                type="number"
                @input="validateForm()"
                placeholder="Price"
              ></v-text-field>

              <label for="nft-name"
                >Song
                <v-icon v-if="showItem && track" @click="trackSong()"
                  >mdi-pause</v-icon
                ><v-icon v-if="showItem && !track" @click="trackSong()"
                  >mdi-play</v-icon
                ></label
              >
              <!-- <v-text-field
                      id="song"
                      v-model="formTier.song"
                      @input="inputSave()"
                      placeholder="Song"
                    ></v-text-field> -->
              <v-file-input
                id="song"
                truncate-length="100"
                v-model="formTier.song"
                :disabled="showItem"
                accept="audio/*"
                placeholder="Only Accept Wav, AIFF or FLAC files"
                @change="validateForm()"
              ></v-file-input>
            </section>
          </v-col>
        </v-row>
      </v-window-item>

      <v-window-item :value="3">
        <h2 class="Title tup lines" id="section-form-nft">Revenue</h2>

        <section class="card" style="margin-top: 40px">
          <v-form ref="form">
            <a href="/quick-tip-help-form#3" target="_blank">
              <v-badge
                class="mb-5"
                offset-x="-5px"
                @click="dialogHelpSplit = true"
              >
                <template #badge>
                  <v-icon color="var(--primary)" style="font-size: 25px"
                    >mdi-help-circle-outline</v-icon
                  >
                </template>
                <span class="span-badge">Split Revenue</span>
                <span style="margin-left: 10px; color: white"
                  >Available: ({{ splitAvailable }}%)</span
                >
              </v-badge>
            </a>
            <v-row class="aend" v-for="(item, i) in dataSplit" :key="i">
              <v-col xl="9" lg="9" md="9" sm="7" cols="7">
                <label for="near-account">Wallet Address</label>
                <v-text-field
                  id="near-account"
                  v-model="item.account"
                  :disabled="i == 0 ? true : showItem"
                  placeholder="nearaccount.testnet"
                  @input="inputAccount(item)"
                  :rules="rules.required"
                ></v-text-field>
              </v-col>
              <v-col xl="2" lg="2" md="2" sm="4" cols="4">
                <v-text-field
                  v-model="item.percentage"
                  type="number"
                  @input="inputPercentSplit()"
                  @change="inputPercentSplit()"
                  :disabled="showItem"
                  placeholder="%"
                  :rules="rulesSplit"
                ></v-text-field>
              </v-col>
              <v-col style="align-self: center !important">
                <v-icon
                  v-if="i != 0"
                  color="var(--primary)"
                  @click="remove1(i)"
                  :disabled="showItem"
                  class="mr-2"
                  style="font-size: 26px"
                  >mdi-delete</v-icon
                >
              </v-col>
            </v-row>
            <v-row class="aend">
              <v-btn
                class="btn ml-3"
                :disabled="showItem"
                @click="dataSplit.push({ account: '', percentage: null })"
                style="--fw: 700; --w: 150px; --br: 0px"
                >Add Collaborator</v-btn
              >
            </v-row>
            <a href="/quick-tip-help-form#3" target="_blank">
              <v-badge class="mb-8 mt-10" offset-x="-5px">
                <template #badge>
                  <v-icon color="var(--primary)" style="font-size: 25px"
                    >mdi-help-circle-outline</v-icon
                  >
                </template>
                <span class="span-badge">Resale Revenue</span>
                <span style="margin-left: 10px; color: white"
                  >Available: ({{ royalAvaibable }}%)</span
                >
              </v-badge>
            </a>
            <v-row class="aend" v-for="(item, i) in dataRoyalties" :key="i">
              <v-col xl="9" lg="9" md="9" sm="7" cols="7" class="pt-0">
                <label for="near-account">Wallet Address</label>
                <v-text-field
                  id="near-account"
                  v-model="item.account"
                  :disabled="i == 0 ? true : showItem"
                  :error="item.error"
                  :error-messages="item.errorMessage"
                  @input="inputAccount(item)"
                  placeholder="nearaccount.testnet"
                  :rules="rules.required"
                ></v-text-field>
              </v-col>
              <v-col xl="2" lg="2" md="2" sm="4" cols="4">
                <v-text-field
                  v-model="item.percentage"
                  type="number"
                  placeholder="%"
                  :disabled="showItem"
                  @input="inputPercentRoyalties()"
                  @change="inputPercentRoyalties()"
                  :rules="rulesRoyal"
                ></v-text-field>
              </v-col>
              <v-col style="align-self: center !important">
                <v-icon
                  v-if="i != 0"
                  color="var(--primary)"
                  class="mr-2"
                  :disabled="showItem"
                  @click="remove(i)"
                  style="font-size: 26px"
                  >mdi-delete</v-icon
                >
              </v-col>
            </v-row>

            <v-row class="aend">
              <v-btn
                class="btn ml-3"
                :disabled="showItem"
                @click="dataRoyalties.push({ account: '', percentage: null })"
                style="--fw: 700; --w: 150px; --br: 0px"
                >Add Royalties</v-btn
              >
            </v-row>
          </v-form>
        </section>
      </v-window-item>
    </v-window>

    <div class="center gap1 mt-6">
      <v-btn v-if="windowStep > 1" class="btn2" @click="windowBack()"
        ><v-icon class="mr-3">mdi-arrow-left</v-icon> Back</v-btn
      >

      <v-btn v-if="windowStep === 1" class="btn" @click="windowStep++"
        >Next <v-icon class="ml-3">mdi-arrow-right</v-icon></v-btn
      >

      <v-btn
        v-if="windowStep === 2"
        class="btn"
        @click="windowStep++"
        :disabled="!formInvalid"
        >Next <v-icon class="ml-3">mdi-arrow-right</v-icon></v-btn
      >

      <v-btn
        v-if="windowStep === 3 && reviewState === false"
        :disabled="previewInfo"
        class="btn"
        @click="scrollToTop()"
        >Preview info
        <v-icon class="ml-3">mdi-information-outline</v-icon></v-btn
      >

      <v-btn
        v-if="windowStep === 3 && reviewState === true"
        class="btn width100"
        :loading="btnSave"
        @click="dialogSure = true"
        >Save</v-btn
      >
    </div>

    <!-- <section class="card" style="margin-top: 40px">

      <div class="relative">
          <label for="nft-name">Number of copies</label>
          <v-text-field
            id="copies"
            v-model="formTier.copies"
            :disabled="showItem"
            type="number"
            @input="inputSave()"
            placeholder="20"
          ></v-text-field>
          <v-btn class="btn-plus-minus" style="top: 20px;right: 40px; position: absolute!important;"><v-icon>mdi-minus</v-icon></v-btn>
          <v-btn class="btn-plus-minus" style="top: 20px;right: 0; position: absolute!important;"><v-icon>mdi-plus</v-icon></v-btn>
        </div>

      <template>
        <div class="relative">
          

          <v-col xl="2" lg="2" md="2" sm="2" cols="4">
              <v-btn class="btn" style="--w: 100%;">Upload</v-btn>
            </v-col>
        </div>
      </template>

      <template v-if="selectedTier === 'Tier 2'">
        <div class="relative">
          <label for="nft-name">Video</label>
          <v-file-input
            id="video"
            class="no-icon"
            v-model="formTier.media"
            :disabled="showItem"
            accept="audio/*"
            placeholder="Video"
            @change="inputSave()"
          ></v-file-input>
        </div>
      </template>
    </section> -->
    <!-- 
    <template v-if="selectedTier === 'Tier 3' || selectedTier === 'Tier 4'">
      <h2 class="Title tup lines">Physical Merchandise</h2>

      <section class="card" style="margin-top: 40px">
        <v-badge class="mb-5" offset-x="-5px">
          <template #badge>
            <v-icon color="var(--primary)" style="font-size: 25px"
              >mdi-information-symbol</v-icon
            >
          </template>
          <span class="span-badge">Type of merchandise</span>
        </v-badge>

        <hr class="mb-4" style="border-color: var(--primary) !important" />

        <div class="pa-2 container-card-merchandise">
          <v-card
            v-for="(item, index) in dataMerchandise"
            :key="index"
            class="card pa-3 card-merchandise"
          >
            <img :src="item.img" alt="img" style="width: 200px" />
            <div class="div-card-hover">
              <span
                class="tcenter"
                style="text-decoration: underline; font-weight: 700 !important"
              >
                Merchandise <br />
                Title
              </span>

              <span class="tcenter" style="font-size: 13px">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit, eveniet!
              </span>

              <v-btn
                class="btn center"
                style="max-width: 70% !important; min-width: 70% !important"
              >
                Select
              </v-btn>
            </div>
          </v-card>
        </div>
      </section>
    </template> -->

    <!-- <section class="card divrow" style="margin-top: 40px; gap: 40px;">
        <div class="divrow acenter" style="gap: 5px;">
          <v-checkbox id="visible" v-model="visible"></v-checkbox>
          <label for="visible" class="mb-2">Visible</label>
        </div>

        <div class="divrow acenter" style="gap: 5px;">
          <v-checkbox id="coming" v-model="coming"></v-checkbox>
          <label for="coming" class="mb-2">Coming</label>
        </div>
      </section> -->
    <!-- Dialog Success -->
    <v-dialog
      v-model="dialogSure"
      max-width="500px"
      content-class="nft-dialog"
      persistent
    >
      <!-- <v-btn icon class="close" @click="dialogSuccess = false">
        <v-icon large>mdi-close</v-icon>
      </v-btn> -->

      <v-card id="modalBuy" class="nft-dialog--content quick-help-card">
        <h2 class="p tcenter" style="--fs: 1.8em; text-decoration: underline">
          Are you sure you want to save this information?
        </h2>
        <span class="tcenter">
          The following action cannot be undone once you have clicked the
          'Continue' button."</span
        >
        <div class="divrow gap1">
          <v-btn class="btn2" @click="dialogSure = false"> Cancel </v-btn>
          <v-btn class="btn" @click="saveForm()"> Continue </v-btn>
        </div>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialogSuccess"
      max-width="500px"
      content-class="nft-dialog"
      persistent
    >
      <!-- <v-btn icon class="close" @click="dialogSuccess = false">
        <v-icon large>mdi-close</v-icon>
      </v-btn> -->

      <v-card id="modalBuy" class="nft-dialog--content quick-help-card">
        <h2 class="p center" style="--fs: 1.8em; text-decoration: underline">
          SUCCESS!
        </h2>
        <span> Your operation was succesful. </span>
        <v-btn
          class="btn"
          style="min-width: 70% !important"
          @click="OkSuccess()"
        >
          Ok
        </v-btn>
      </v-card>
    </v-dialog>

    <div class="text-center">
      <v-overlay opacity="0.80" :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
        <!-- <span>hola como estas</span> -->
        <h3>Creating collection, this may take a few minutes...</h3>
      </v-overlay>
    </div>

    <!-- Dialog Text Example -->
    <v-dialog
      v-model="dialogHelpSplit"
      max-width="500px"
      content-class="nft-dialog"
      persistent
    >
      <v-btn icon class="close" @click="dialogHelpSplit = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-card id="modalBuy" class="nft-dialog--content quick-help-card">
        <h2 class="center" style="--fs: 1.6em">Example text</h2>

        <p>
          Name: ClassiQ <br />
          <br />Origin: Bauchi, Nigeria<br />
          <br />Genre: Hip Hop / Hausa Trap<br />
          <br />Ingredients: Witty Lyricism, Youth Consciousness, Groovy
          Vibes<br />
        </p>

        <a
          @click="goToArtistDetails()"
          target="_blank"
          style="text-decoration: underline"
          >Check the example description here</a
        >
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import computeds from '~/mixins/computeds'
//   import styles from '~/mixins/styles'

export default {
  name: 'FormPage',
  components: {
    VueEditor,
  },
  // mixins: [computeds, styles],
  mixins: [computeds],
  data() {
    return {
      dialogSure: false,

      formInvalid: false,

      reviewState: false,

      windowStep: 1,

      dialogHelpSplit: false,

      dataRoyalties: [{ account: this.$ramper.getAccountId(), percentage: 10 }],
      dataSplit: [{ account: this.$ramper.getAccountId(), percentage: 70 }],
      imageNft: undefined,
      selectedImageNft: '',

      imageMobile: undefined,
      selectedImageMobile: '',

      imageAvatar: undefined,
      selectedImageAvatar: '',

      imageBanner: undefined,
      selectedImageBanner: '',

      formArtist: {},
      formTier: {
        nft_name: 'Enter The Feast with Chef',
      },

      tableHeadersArtists: [
        {
          text: 'Artist Name',
          value: 'name',
          sortable: false,
          align: 'center',
        },
        {
          text: 'Description',
          value: 'description',
          sortable: false,
          align: 'center',
        },
        { text: 'Tier', value: 'tier', sortable: false, align: 'center' },
        {
          text: 'Status',
          value: 'statusText',
          sortable: false,
          align: 'center',
        },
        { value: 'actions', sortable: false, align: 'center' },
      ],
      tableItemsArtists: [
        // {artist_name: 'DJ Khaled', description: 'The best DJ in LA', tier: 'Tier 1'},
        // {artist_name: 'DJ Navas', description: 'The best DJ in Valencia', tier: 'Tier 2'},
        // {artist_name: 'DJ Khaled', description: 'The best DJ in LA', tier: 'Tier 1'},
        // {artist_name: 'DJ Navas', description: 'The best DJ in Valencia', tier: 'Tier 2'},
        // {artist_name: 'DJ Khaled', description: 'The best DJ in LA', tier: 'Tier 1'},
        // {artist_name: 'DJ Navas', description: 'The best DJ in Valencia', tier: 'Tier 2'},
      ],
      currentPageArtists: 1,
      itemsPerPageArtists: 10,
      previewInfo: true,
      dialogSuccess: false,
      rules: {
        validate: [
          (v) => !!v || 'Field required',
          (v) => this.validateNear(v) || 'Invalid account',
        ],
        required: [(v) => !!v || 'Field required'],
        repeatedUsername: [
          (v) => !!v || 'Field required',
          () =>
            !this.djangoExistenceList.username || 'Username is already taken',
        ],
        repeatedEmail: [
          (v) => !!v || 'Field required',
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

      coming: false,
      visible: false,

      dataMerchandise: [
        {
          img: require('~/assets/sources/images/shirt.png'),
        },
        {
          img: require('~/assets/sources/images/sweatter.png'),
        },
        {
          img: require('~/assets/sources/images/cap.png'),
        },
        {
          img: require('~/assets/sources/images/cup.png'),
        },
      ],

      // items_tier:["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"],
      items_tier: ['Tier 1'],
      selectedTier: null,
      isAdmin: false,
      formArtistItem: null,
      disabledSave: true,
      btnSave: false,
      isArtist: null,
      approveTier: false,
      btnApprove: false,
      btnReject: false,
      disabledApprove: false,
      showItem: null,
      splitAvailable: 70,
      royalAvaibable: 10,
      royalBool: false,
      splitBool: false,
      errorWalletArtist: false,
      errorMessage: '',
      track: false,
      created: false,
      artistAboutValue: 'artist-about',
      rulesRoyal: [
        (v) => !!v || 'required',
        (v) => Number.isInteger(Number(v)) || 'Integer is required',
        (v) => v >= 1 || 'required',
        (v) => v <= 10 || 'Royalties available: 10%',
      ],
      rulesSplit: [
        (v) => !!v || 'required',
        (v) => Number.isInteger(Number(v)) || 'Integer is required',
        (v) => v >= 1 || 'required',
        (v) => v <= 70 || 'Royalties available: 70%',
      ],
      overlay: false,
    }
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 3000)
    },
  },
  head() {
    const title = 'Form'
    return {
      title,
    }
  },
  computed: {
    pagination_per_page() {
      return Math.ceil(this.tableItemsArtists.length / this.itemsPerPageArtists)
    },
  },
  async mounted() {
    this.isAdmin = await this.getIsAdmin()

    this.getDataPerfil()
    this.inputPercentRoyalties()
    this.inputPercentSplit()
    // this.getDataArtist()

    // this.formArtistItem = await this.getFormArtistMain()

    // if (this.formArtistItem) {
    //   this.created = true
    // } else {
    //   this.formArtistItem = await this.getFormArtist()
    // }

    this.inputName()
  },
  methods: {
    async getDataPerfil() {
      const accountId = this.$ramper.getAccountId()
      // get data user
      await this.$axios
        .post(`${this.baseUrl}api/v1/get-perfil-data/`, { wallet: accountId })
        .then((result) => {
          if (result.data[0]) {
            this.userExist = true
            this.formArtist = result.data[0]
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
    getDataArtist() {
      if (this.$ramper.getAccountId()) {
        this.$axios
          .post(`${this.baseUrl}api/v1/get-artist-by-wallet/`, {
            wallet: this.$ramper.getAccountId(),
          })
          .then((result) => {
            if (result.data) {
              this.isArtist = true
            } else {
              this.isArtist = null
            }
          })
          .catch((err) => {
            console.error(err)
          })
      }
    },
    scrollToTop() {
      if (this.$refs.form.validate()) {
        this.reviewState = true

        setTimeout(() => {
          const section = document.getElementById('block-artist')
          if (section) {
            section.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        }, 0)
      }
    },
    windowBack() {
      if (this.reviewState === true) {
        this.reviewState = false
      } else if (this.reviewState === false) {
        this.windowStep--
      }
    },
    validateForm() {
      this.formInvalid =
        // !!this.formTier.nft_name &&
        !!this.formTier.description &&
        !!this.formTier.price &&
        !!this.formTier.song &&
        !!this.imageNft
    },
    goToArtistDetails() {
      localStorage.setItem('artist-about', this.artistAboutValue)
      this.$router.push({ path: 'artist-details?artist=2' })
    },
    trackSong() {
      this.track = !this.track

      if (this.track) {
        this.showItem.track.play()
      } else {
        this.showItem.track.pause()
      }
    },
    async validateWalletArtist(item) {
      this.inputArtist(item)

      const validate = await this.validateNear(item)

      if (validate) {
        this.errorWalletArtist = false
        this.errorMessage = ''
      } else {
        this.errorWalletArtist = true
        this.errorMessage = 'Invalid account'
      }
    },
    async inputAccount(item) {
      const validate = await this.validateNear(item.account)

      if (validate) {
        item.error = false
        item.errorMessage = null
      } else {
        item.error = true
        item.errorMessage = 'Invalid account'
      }
    },
    async validateNear(wallet) {
      const account = await this.$near.account(wallet)
      const res = account
        .state()
        .then(() => {
          return true
        })
        .catch(() => {
          return false
        })
      return res
    },
    inputName() {
      const nftName = 'Enter The Feast with Chef'
      this.formTier.nft_name = nftName + ' ' + this.formArtist.name + '!'
    },
    OkSuccess() {
      this.dialogSuccess = false
      location.reload()
    },
    responseProposal(status) {
      this.disabledApprove = true
      if (status === 1) {
        this.btnApprove = true
      } else if (status === 2) {
        this.btnReject = true
      }
      const item = {
        wallet: this.$ramper.getAccountId(),
        artist_id: String(this.showItem.id),
        tier_id: String(this.showItem.tierItem.id),
        status,
      }
      this.$axios
        .post(`${this.baseUrl}api/v1/response-proposal/`, item)
        .then(() => {
          this.dialogSuccess = true
          this.btnReject = false
          this.btnApprove = false
        })
        .catch((err) => {
          this.btnReject = false
          this.btnApprove = false
          console.error(err)
        })
    },
    inputArtist(item) {
      this.dataSplit[0].account = item
      this.inputSave()
    },
    inputPercentRoyalties() {
      const limitRoyal = 10
      let total = 0
      this.dataRoyalties.forEach((item) => {
        total += parseInt(item.percentage) || 0
      })

      if (total === 10) {
        this.royalAvaibable = 0
        this.royalBool = true
      } else {
        this.royalAvaibable = limitRoyal - total
        this.royalBool = false
      }

      if (this.splitBool && this.royalBool) {
        this.previewInfo = false
      } else {
        this.previewInfo = true
      }
    },
    inputPercentSplit() {
      const limitSplit = 70
      let total = 0
      this.dataSplit.forEach((item) => {
        total += parseInt(item.percentage) || 0
      })

      if (total === 70) {
        this.splitAvailable = 0
        this.splitBool = true
      } else {
        this.splitAvailable = limitSplit - total
        this.splitBool = false
      }

      if (this.splitBool && this.royalBool) {
        this.previewInfo = false
      } else {
        this.previewInfo = true
      }
    },
    showData(item) {
      this.items_tier = ['Tier 1']
      this.showItem = item
      const srcAudio = this.baseUrlSlash + this.showItem.tierItem.audio

      const sonido = document.createElement('audio')
      sonido.src = srcAudio
      sonido.setAttribute('preload', 'auto')
      sonido.setAttribute('controls', 'none')
      sonido.style.display = 'none' // <-- oculto
      document.body.appendChild(sonido)

      this.showItem.track = sonido

      this.formArtist.name = item.name
      this.formArtist.walletArtist = item.wallet_artist
      this.formArtist.description = item.description
      this.formArtist.about = item.about
      this.formArtist.instagram = item.instagram || null
      this.formArtist.twitter = item.twitter || null
      this.formArtist.facebook = item.facebook || null
      this.formArtist.discord = item.discord || null
      this.selectedImageAvatar = this.baseUrl + item.image
      this.selectedImageBanner = this.baseUrl + item.banner_artist
      this.selectedImageMobile = this.baseUrl + item.banner_mobile

      this.selectedTier = item.tier
      this.formTier.nft_name = item.tierItem.nft_name
      this.formTier.description = item.tierItem.description
      this.formTier.price = item.tierItem.price
      this.selectedImageNft = item.tierItem.image
      this.dataRoyalties = JSON.parse(item.tierItem.royalties)
      this.dataSplit = JSON.parse(item.tierItem.royalties_split)

      if (item.tier === 'Tier 1') {
        this.formTier.song = item.tierItem.media
      } else if (item.tier === 'Tier 2') {
        this.formTier.media = item.tierItem.media
      }
    },
    //       {
    //     "tier": "Tier 1",
    //     "tierItem": {
    //         "id": 3,
    //         "tierNumber": 1,
    //         "nft_name": "test",
    //         "description": "test",
    //         "price": "2.00",
    //         "image": "https://bafybeic7e37ccdzslm6jbre57mltnndp5dpfn7c6xhotxri77hddkyzere.ipfs.nftstorage.link",
    //         "copies": 4,
    //         "status": 3,
    //         "media": "https://bafybeiemlc6ltbrimjhemlu4qy4okngaacujahvm6ebk6f6biozru3skzq.ipfs.nftstorage.link",
    //         "royalties": "[]",
    //         "artist_proposal": 7
    //     },
    //     "id": 7,
    //     "wallet": "049df53399cc4c22e077cf9460e13b18ba5cfa501e56fec37f481e50abe32734",
    //     "name": "test",
    //     "description": "test",
    //     "about": "test",
    //     "image": "/musicfeast_testnet/media_musicfeast/1366_2000_OC00O5o.jpeg",
    //     "banner": "/musicfeast_testnet/media_musicfeast/1081267_RsPc5fg.jpeg",
    //     "banner_mobile": "/musicfeast_testnet/media_musicfeast/1081267_dAWKBNr.jpeg",
    //     "instagram": "",
    //     "twitter": "",
    //     "facebook": "",
    //     "discord": "",
    //     "status": 3,
    //     "created": "2023-10-10T16:50:18.852087Z",
    //     "updated": "2023-10-10T16:50:18.852121Z",
    //     "tiers": [
    //         {
    //             "id": 3,
    //             "tierNumber": 1,
    //             "nft_name": "test",
    //             "description": "test",
    //             "price": "2.00",
    //             "image": "https://bafybeic7e37ccdzslm6jbre57mltnndp5dpfn7c6xhotxri77hddkyzere.ipfs.nftstorage.link",
    //             "copies": 4,
    //             "status": 3,
    //             "media": "https://bafybeiemlc6ltbrimjhemlu4qy4okngaacujahvm6ebk6f6biozru3skzq.ipfs.nftstorage.link",
    //             "royalties": "[]",
    //             "artist_proposal": 7
    //         }
    //     ],
    //     "statusText": "Pending"
    // }
    remove(pos) {
      this.dataRoyalties.splice(pos, 1)
      this.inputPercentRoyalties()
    },
    remove1(pos) {
      this.dataSplit.splice(pos, 1)
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
      this.inputSave()
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
      this.inputSave()
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
      this.inputSave()
      if (!file) {
        return
      }
      this.createImageMobile(file)
    },
    inputSave() {
      // this.disabledSave = false
      if (this.formArtistItem) {
        if (this.validateFormTier() && this.royalBool && this.splitBool) {
          this.disabledSave = false
        } else {
          this.disabledSave = true
        }
      } else if (!this.formArtistItem) {
        if (
          this.validateFormArtist() &&
          this.validateFormTier() &&
          this.royalBool &&
          this.splitBool
        ) {
          this.disabledSave = false
        } else {
          this.disabledSave = true
        }
      }
    },
    validateFormArtist() {
      if (
        this.imageMobile &&
        this.imageAvatar &&
        this.imageBanner &&
        this.formArtist.name &&
        this.formArtist.description &&
        this.formArtist.about &&
        this.formArtist.walletArtist
      ) {
        return true
      } else {
        return false
      }
    },
    validateFormTier() {
      if (
        this.imageNft &&
        this.formTier.nft_name &&
        this.formTier.description &&
        this.formTier.price
      ) {
        if (this.formTier.song) {
          return true
        } else {
          return false
        }
        // if (this.selectedTier === 'Tier 1') {
        //   if (this.formTier.song) {
        //     return true
        //   } else {
        //     return false
        //   }
        // } else if (this.selectedTier === 'Tier 2') {
        //   if (this.formTier.media) {
        //     return true
        //   } else {
        //     return false
        //   }
        // } else if (
        //   this.selectedTier === 'Tier 3' ||
        //   this.selectedTier === 'Tier 4' ||
        //   this.selectedTier === 'Tier 5' ||
        //   this.selectedTier === 'Tier 6'
        // ) {
        //   return true
        // } else {
        //   return false
        // }
      } else {
        return false
      }
    },
    async saveNewCollection() {
      this.btnSave = true
      if (this.$refs.form.validate() && this.isApprove) {
        const itemIpfs = await this.uploadIpfs(this.imageNft)

        const formDataNft = new FormData()
        formDataNft.append('wallet', this.$ramper.getAccountId())
        formDataNft.append('tierNumber', 1)
        formDataNft.append('nft_name', this.formTier.nft_name)
        formDataNft.append('description', this.formTier.description)
        formDataNft.append('price', this.formTier.price)
        formDataNft.append(
          'image',
          'https://' + itemIpfs.cid + '.ipfs.nftstorage.link/' + itemIpfs.name
        )
        formDataNft.append('royalties', JSON.stringify(this.dataRoyalties))
        formDataNft.append('royalties_split', JSON.stringify(this.dataSplit))

        formDataNft.append('audio', this.formTier.song)

        this.$axios
          .post(`${this.baseUrl}api/v1/new-collection/`, formDataNft)
          .then(() => {
            this.dialogSuccess = true
            this.btnSave = false
          })
          .catch((err) => {
            this.btnSave = false
            console.error(err)
          })
      }
    },
    async saveForm() {
      this.overlay = true
      this.btnSave = true
      this.dialogSure = false
      const formData = new FormData()
      // PERFIL
      formData.append('wallet', this.$ramper.getAccountId())
      formData.append('username', this.formArtist.username)
      formData.append('description', this.formArtist.description)
      formData.append('about', this.formArtist.description)
      formData.append('instagram', this.formArtist.instagram || '')
      formData.append('twitter', this.formArtist.twitter || '')
      formData.append('facebook', this.formArtist.facebook || '')
      formData.append('discord', this.formArtist.discord || '')
      formData.append('email', this.formArtist.email || '')

      const itemIpfs = await this.uploadIpfs(this.imageNft)

      // TIERS
      formData.append('tierNumber', 1)
      const nftName = 'Enter The Feast with Chef'
      formData.append(
        'nft_name',
        nftName + ' ' + this.formArtist.username + '!'
      )
      formData.append('description', this.formTier.description)
      formData.append('price', this.formTier.price)
      formData.append(
        'image',
        'https://' + itemIpfs.cid + '.ipfs.nftstorage.link/' + itemIpfs.name
      )
      formData.append('royalty', JSON.stringify(this.dataRoyalties))
      formData.append('royaltyBuy', JSON.stringify(this.dataSplit))
      formData.append('audio', this.formTier.song)

      this.$axios
        .post(`${this.baseUrl}api/v1/save-form/`, formData)
        .then((result) => {
          console.log('SUCESSSSSS', result)
          this.btnSave = false

          localStorage.setItem(
            'transaction_data',
            JSON.stringify({
              state: 'success',
              title: 'Success',
              desc: 'Your process has been executed successfully.',
            })
          )
          localStorage.setItem('artist', result.data.id_collection)
          this.overlay = false
          this.$router.push(this.localePath('/redirection'))
        })
        .catch((err) => {
          this.overlay = false
          this.btnSave = false
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
    async getIsAdmin() {
      if (this.$ramper.getAccountId()) {
        return await this.$axios
          .post(`${this.baseUrl}api/v1/is-admin/`, {
            admin: this.$ramper.getAccountId(),
          })
          .then((result) => {
            return result.data
            // this.$store.commit("setIsAdmin", result.data);
          })
          .catch(() => {
            // this.$alert("cancel", {desc: err.message})
            // console.error(err);
            return false
          })
      }
    },
    async uploadIpfs(file) {
      try {
        const formData = new FormData()
        formData.append('file', file)

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
        )

        // this.uploadedFileInfo = resp.data.value
        // localStorage.setItem('cid', this.uploadedFileInfo.cid)
        if (resp.data.value?.cid && resp.data.value?.files[0]?.name) {
          return {
            cid: resp.data.value.cid,
            name: resp.data.value.files[0].name,
          }
        } else {
          return false
        }
      } catch (error) {
        console.error(error)
        return false
      }
    },
    async getFormArtist() {
      if (this.$ramper.getAccountId()) {
        const accountId = this.$ramper.getAccountId()
        return await this.$axios
          .post(`${this.baseUrl}api/v1/get-perfil-data/`, { wallet: accountId })
          .then((result) => {
            if (result.data.length === 0) {
              this.items_tier = ['Tier 1']
              this.selectedTier = 'Tier 1'
              return false
            } else {
              this.items_tier = ['Tier 2']
              this.selectedTier = null
              const item = result.data[0]
              item.walletArtist = item.wallet
              // item.description = item.description
              // item.about = item.about
              item.name = item.username
              this.formArtist = item
              this.selectedImageAvatar = this.baseUrl + item.image
              this.selectedImageBanner = this.baseUrl + item.banner_artist
              this.selectedImageMobile = this.baseUrl + item.banner_mobile

              return result.data[0]
            }
            // this.$store.commit("setIsAdmin", result.data);
          })
          .catch((err) => {
            // this.$alert("cancel", {desc: err.message})
            console.error(err)
          })
      }
    },
    async getData() {
      const accountId = this.$ramper.getAccountId()
      // get data user
      await this.$axios
        .post(`${this.baseUrl}api/v1/get-perfil-data/`, { wallet: accountId })
        .then((result) => {
          const data = result.data[0]

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
    async getFormArtistMain() {
      if (this.$ramper.getAccountId()) {
        return await this.$axios
          .post(`${this.baseUrl}api/v1/get-artist-proposal/`, {
            wallet: this.$ramper.getAccountId(),
          })
          .then((result) => {
            if (result.data.length === 0) {
              this.items_tier = ['Tier 1']
              this.selectedTier = 'Tier 1'
              return false
            } else {
              this.items_tier = ['Tier 2']
              this.selectedTier = null
              const item = result.data[0]
              item.walletArtist = item.wallet_artist
              this.formArtist = item
              this.selectedImageAvatar = this.baseUrl + item.image
              this.selectedImageBanner = this.baseUrl + item.banner
              this.selectedImageMobile = this.baseUrl + item.banner_mobile

              return result.data[0]
            }
            // this.$store.commit("setIsAdmin", result.data);
          })
          .catch((err) => {
            // this.$alert("cancel", {desc: err.message})
            console.error(err)
          })
      }
    },
    getArtistProposals() {
      if (this.$ramper.getAccountId()) {
        this.$axios
          .post(`${this.baseUrl}api/v1/get-artist-proposals/`, {
            wallet: this.$ramper.getAccountId(),
          })
          .then((result) => {
            this.tableItemsArtists = []
            const data = []
            // for (let i = 0; i < result.data.length; i++) {
            for (const item of result.data) {
              for (const tier of item.tiers) {
                const dataItem = {
                  tier: 'Tier ' + tier.tierNumber,
                  tierItem: tier,
                  ...item,
                }

                if (tier.status === 1) {
                  dataItem.statusText = 'Approved'
                } else if (tier.status === 2) {
                  dataItem.statusText = 'Rejected'
                } else if (tier.status === 3) {
                  dataItem.statusText = 'Pending'
                }

                data.push(dataItem)
              }
            }
            this.tableItemsArtists = data
          })
          .catch((err) => {
            console.error(err)
          })
      }
    },
  },
}
</script>

<style src="~/assets/styles/pages/form-nft.scss" lang="scss" />
