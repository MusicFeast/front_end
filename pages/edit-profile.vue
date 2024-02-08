<template>
  <div id="profile" class="divcol">
    <ModalsPreviewImage
      ref="modalPreviewImage"
      :type="selectedPreview"
      @confirm="(event) => onPreview(event)"
      @close="selectedPreview = undefined"
    ></ModalsPreviewImage>

    <v-img :src="user.banner" transition="fade-transition" class="header">
      <template #default>
        <h4 v-if="disabledStart" class="Title" style="margin-bottom: -80px;" >Profile and Banner pictures must be added to continue.</h4>
        <v-avatar
          width="var(--size)"
          height="var(--size)"
          style="--size: 13.954375em"
          @mouseenter="showTag()"
          @mouseleave="hideTag()"
        >
          <v-img
            :src="user.avatar"
            alt="avatar image"
            transition="fade-transition"
          >
            <template #placeholder>
              <v-skeleton-loader type="avatar" />
            </template>
          </v-img>
        </v-avatar>
      </template>
      <template #placeholder>
        <v-skeleton-loader v-show="user.banner" type="card" />
      </template>
    </v-img>

    <v-row
      id="profile-banner"
      class="mt-6"
      justify="center"
      :style="`
        --tag-tier: '${
          user.tier === 1
            ? 'bronze'
            : user.tier === 2
            ? 'silver'
            : user.tier === 3
            ? 'gold'
            : user.tier === 4
            ? 'platinum'
            : user.tier === 5
            ? 'diamond'
            : user.tier === 6
            ? 'uranium'
            : 'user'
        }'
      `"
    >
      <v-col xl="4" lg="4" md="4" cols="12">
        <v-card class="card center divcol card-background-padding">
          <h4>Set Banner</h4>

          <v-img
            class="banner"
            :class="{ active: imgBanner }"
            :src="imgBanner"
            transition="fade-transition"
            @click="selectPreview('banner')"
          >
            <template #placeholder>
              <v-sheet class="placeholder">
                <span
                  >1180 x 401.5 pixels <br />
                  .jpg or .png</span
                >
              </v-sheet>
            </template>
          </v-img>
        </v-card>
      </v-col>

      <v-col xl="4" lg="4" md="4" cols="12">
        <v-card class="card center divcol card-background-padding">
          <h4>Set Profile Picture</h4>

          <v-avatar
            class="avatar"
            :class="{ active: imgAvatar }"
            @click="selectPreview('avatar')"
          >
            <v-img
              :src="imgAvatar"
              alt="avatar image"
              transition="fade-transition"
            >
              <template #placeholder>
                <v-sheet class="placeholder">
                  <span>307 x 307</span>
                </v-sheet>
              </template>
            </v-img>
          </v-avatar>
        </v-card>
      </v-col>

      <v-col xl="4" lg="4" md="4" cols="12">
        <v-card class="card center divcol card-background-padding">
          <h4>Set Banner Mobile</h4>

          <v-img
            class="bannerMobile"
            :class="{ active: imgBannerMobile }"
            :src="imgBannerMobile"
            transition="fade-transition"
            @click="selectPreview('bannerMobile')"
          >
            <template #placeholder>
              <v-sheet class="placeholder">
                <span>135.5 x 271 pixels <br />.jpg or .png</span>
              </v-sheet>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-6" justify="center">
      <!-- <v-col xl="4" lg="4" md="4" cols="12">
        <v-card class="card center divcol card-background-padding">
          <h4>Set Address</h4>
          <v-btn class="btn" @click="$router.push('edit-address')">Start</v-btn>
        </v-card>
      </v-col> -->

      <v-col xl="4" lg="4" md="4" cols="12">
        <v-card class="card center divcol card-background-padding">
          <h4>Add Track</h4>
          <v-btn
            class="btn"
            :disabled="disabledStart"
            @click="dialogNewCollection = true"
            >Start</v-btn
          >
          <span v-if="disabledStart" style="color: red" color="red" class="mt-2"q
            >The profile picture is required</span
          >
        </v-card>
      </v-col>
      <!-- 
      <v-col xl="4" lg="4" md="4" cols="12">
        <v-card class="card center divcol card-background-padding">
          <h4>Edit Collection</h4>
          <v-btn class="btn" @click="dialogEditTier = true">Start</v-btn>
        </v-card>
      </v-col> -->
    </v-row>

    <section class="container-profit bold fwrap">
      <v-sheet color="transparent" class="divcol center">
        <span>Total NFTs</span>
        <span>{{ dataProfits.nfts }}</span>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>Owners</span>
        <span>{{ dataProfits.owners }}</span>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>Total Events</span>
        <span>{{ dataProfits.events }}</span>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>All Collections</span>
        <span>{{ dataProfits.collections }}</span>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>All Time High</span>
        <span v-if="dataProfits.high === '---'">{{ dataProfits.high }}</span>
        <span v-else>$ {{ dataProfits.high }}</span>
      </v-sheet>
    </section>

    <v-expansion-panels id="artist-about" class="custome-expansion">
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down" class="bold"
          >Artist Bio</v-expansion-panel-header
        >

        <v-expansion-panel-content>
          <p v-html="artist.about" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- <v-btn
      v-if="isCreator"
      class="btn mb-14"
      style="max-width: 200px !important; align-self: flex-end !important"
      @click="$router.push('form-nft')"
      >Add New Collection</v-btn
    > -->
    <h4>Create The Next Tier In Your Collection (Click The Placeholder To The Right To Create The Next Tier)</h4>

    <v-slide-group
      id="custome-slider"
      v-model="slider"
      mandatory
      show-arrows
      center-active
    >
      <v-slide-item
        v-for="(item, i) in dataSlider"
        :key="i"
        v-slot="{ active, toggle }"
      >
        <v-sheet
          :key="i"
          color="rgba(0, 0, 0, .4)"
          class="divcol"
          @click="toggle"
        >
          <v-card
            v-if="!item.validate"
            class="card divcol custome"
            :disabled="item.tier !== 1 && item.tier !== 2"
            :class="{
              active: active,
            }"
            @click="goToForm(item)"
          >
            <!-- <v-img
              :src="item.img"
              :alt="`${item.name} image`"
              transition="fade-transition"
              :style="`${item.state ? `--tag-state: '${item.state}'` : ''}`"
            >
              <template #placeholder>
                <v-skeleton-loader type="card" />
              </template>
            </v-img> -->

            <v-img
              :src="item.img"
              :alt="`${item.name} image`"
              transition="fade-transition"
            >
              <template #placeholder>
                <v-skeleton-loader type="card" />
              </template>
              <!-- <v-btn
                :disabled="item.tier != 1 && item.tier != 2"
                class="btn"
                style="position: absolute !important; right: 5px; top: 5px"
                @click="goToForm(item)"
                >Edit this Tier</v-btn
              > -->
            </v-img>

            <div class="container-content tcenter">
              <v-avatar style="border: 2px solid #fff">
                <v-img
                  :src="item.avatar"
                  :alt="`${item.artist} image`"
                  transition="fade-transition"
                >
                  <template #placeholder>
                    <v-skeleton-loader type="avatar" />
                  </template>
                </v-img>
              </v-avatar>
              <a>{{ item.name }}</a>
              <p>{{ item.desc }}</p>

              <div class="center" style="gap: 6.4px">
                <span class="floor" style="--c: var(--accent)"
                  >Price: $ {{ Number(item.price)?.toFixed(2) }}</span
                >
                <!-- <img src="@/assets/sources/logos/near-orange.svg" alt="near" style="--w:0.9375em"> -->
              </div>
              <span class="floor" style="--c: var(--accent)"
                >Editions: {{ item.editions }}</span
              >
            </div>
          </v-card>

          <v-card
            v-else
            class="card divcol custome"
            :class="{
              active: active,
            }"
          >
            <!-- <v-img
              :src="item.img"
              :alt="`${item.name} image`"
              transition="fade-transition"
              :style="`${item.state ? `--tag-state: '${item.state}'` : ''}`"
            >
              <template #placeholder>
                <v-skeleton-loader type="card" />
              </template>
            </v-img> -->

            <v-img
              :src="item.img"
              :alt="`${item.name} image`"
              transition="fade-transition"
            >
              <template #placeholder>
                <v-skeleton-loader type="card" />
              </template>
              <!-- <v-btn
                :disabled="item.tier != 1 && item.tier != 2"
                class="btn"
                style="position: absolute !important; right: 5px; top: 5px"
                @click="goToForm(item)"
                >Edit this Tier</v-btn
              > -->
            </v-img>

            <div class="container-content tcenter">
              <v-avatar style="border: 2px solid #fff">
                <v-img
                  :src="item.avatar"
                  :alt="`${item.artist} image`"
                  transition="fade-transition"
                >
                  <template #placeholder>
                    <v-skeleton-loader type="avatar" />
                  </template>
                </v-img>
              </v-avatar>
              <a>{{ item.name }}</a>
              <p>{{ item.desc }}</p>

              <div class="center" style="gap: 6.4px">
                <span class="floor" style="--c: var(--accent)"
                  >Price: {{ item.price }} $</span
                >
                <!-- <img src="@/assets/sources/logos/near-orange.svg" alt="near" style="--w:0.9375em"> -->
              </div>
              <span class="floor" style="--c: var(--accent)"
                >Editions: {{ item.editions }}</span
              >
            </div>
          </v-card>

          <div class="tier-desc divcol">
            <a class="tup bold" style="cursor: default">{{ item.name }}</a>
            <ul>
              <li
                v-show="item.description"
                v-html="item.description.limitString(110)"
              ></li>
              <!-- <li v-show="item.tier">Access to special membership perks.</li>
            <li v-show="item.tier">Access to more valuable NFT’s and collectables.</li> -->
            </ul>
          </div>

          <div class="container-actions divcol">
            <!-- <v-tooltip
              v-if="isCreator"
              :disabled="item.tier != 1 && item.tier != 2"
              right
              color="rgba(0, 0, 0, .4)"
            >
              <template #activator="{ on, attrs }">
                <v-icon
                  :disabled="item.tier != 1 && item.tier != 2"
                  class="config"
                  v-bind="attrs"
                  v-on="on"
                  @click="goToForm(item)"
                  >mdi-cog</v-icon
                >
              </template>
              <span>Update Tier</span>
            </v-tooltip> -->
            <a
              v-if="item.tier === 1 || item.tier === 2"
              @click="
                $store.dispatch('goTo', { key: 'nft', item, event: $event })
              "
              >More Details</a
            >
            <a v-else>More Details</a>
            <v-btn
              v-if="!item.state"
              :disabled="item.tier !== 1 && item.tier !== 2"
              :ripple="false"
              class="btn activeBtn align"
              style="--w: calc(100% - 1em)"
              @click="
                $store.dispatch('goTo', {
                  key: 'nft',
                  item,
                  event: $event,
                  buyDirect: true,
                })
              "
              >Go to Buy Page</v-btn
            >
            <v-btn
              v-else-if="item.state === 'coming soon'"
              disabled
              :ripple="false"
              class="btn activeBtn align"
              style="--w: calc(100% - 1em)"
              >Go to Buy page</v-btn
            >
            <v-btn
              v-else
              :disabled="item.validate"
              :ripple="false"
              class="btn activeBtn align"
              style="--w: calc(100% - 1em)"
              @click="
                $store.dispatch('goTo', { key: 'nft', item, event: $event })
              "
              >Go to Buy Page</v-btn
            >
          </div>
        </v-sheet>
      </v-slide-item>

      <template #prev="{ on, attrs }">
        <v-btn icon class="reverse" v-bind="attrs" v-on="on">
          <v-icon x-large>mdi-play</v-icon>
        </v-btn>
      </template>

      <template #next="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon x-large>mdi-play</v-icon>
        </v-btn>
      </template>
    </v-slide-group>

    <template v-if="dataEvents.length > 0">
      <h2 class="Title tup">events</h2>

      <v-expansion-panels class="custome-expansion">
        <v-expansion-panel v-for="(item, i) in dataEvents" :key="i">
          <v-expansion-panel-header
            expand-icon="mdi-menu-down"
            class="bold tcap"
            @click="$store.dispatch('goTo', { key: 'event', item })"
          >
            {{ item.name }}
          </v-expansion-panel-header>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>

    <template v-if="dataCollections.length > 0">
      <h2
        class="Title fwrap mb-10"
        style="--fb: 200px; gap: 5px clamp(1em, 2vw, 2em)"
      >
        <span class="tup" style="--fb: max-content">lastest collections</span>

        <!-- <Filters
          contents
          :hide="[3]"
          :search="search"
          :filter-a="filterA.list"
          @search="(model) => (search = model)"
          @filterA="(model) => (filterA.model = model)"
        /> -->
      </h2>

      <section class="container-collections">
        <v-slide-group
          v-for="(element, e) in dataCollections_pagination"
          :key="e"
          v-model="slider"
          mandatory
          show-arrows
          center-active
          class="custome-slider"
        >
          <v-slide-item
            v-for="(item, i) in element"
            :key="i"
            v-slot="{ toggle }"
          >
            <v-sheet
              :key="i"
              color="rgba(0, 0, 0, .4)"
              class="divcol"
              @click="toggle"
            >
              <v-card
                v-if="!item.state"
                :disabled="item.tier !== 1 && item.tier !== 2"
                :key="i"
                class="card divcol custome"
                @click="goToForm(item)"
              >
                <!-- <v-img
                  :src="item.img"
                  :alt="`${item.name} image`"
                  transition="fade-transition"
                  :style="`${item.state ? `--tag-state: '${item.state}'` : ''}`"
                >
                  <template #placeholder>
                    <v-skeleton-loader type="card" />
                  </template>
                </v-img> -->

                <v-img
                  :src="item.img"
                  :alt="`${item.name} image`"
                  transition="fade-transition"
                >
                  <template #placeholder>
                    <v-skeleton-loader type="card" />
                  </template>
                  <!-- <v-btn
                    :disabled="item.tier != 1 && item.tier != 2"
                    class="btn"
                    style="position: absolute !important; right: 5px; top: 5px"
                    @click="goToForm(item)"
                    >Edit this Tier</v-btn
                  > -->
                </v-img>

                <!-- TODO put location to router or whatever logic needed here -->
                <!-- <v-btn :ripple="false" class="btn activeBtn editBtn"
                  >Edit Profile</v-btn
                > -->

                <div class="container-content tcenter">
                  <v-avatar style="border: 2px solid #fff">
                    <v-img
                      :src="item.avatar"
                      :alt="`${item.artist} image`"
                      transition="fade-transition"
                    >
                      <template #placeholder>
                        <v-skeleton-loader type="avatar" />
                      </template>
                    </v-img>
                  </v-avatar>
                  <a class="mb-4">{{ item.name }}</a>
                  <!-- <p v-html="item.desc"></p> -->

                  <div class="center bold" style="gap: 6.4px">
                    <span class="floor" style="--c: var(--accent)"
                      >Price: {{ item.price }} $</span
                    >
                    <!-- <img src="@/assets/sources/logos/near-orange.svg" alt="near" style="--w:15px"> -->
                  </div>
                  <span class="floor" style="--c: var(--accent)"
                    >Editions: {{ item.editions }}</span
                  >
                </div>
              </v-card>
              <v-card v-else :key="i" class="card divcol custome">
                <v-img
                  :src="item.img"
                  :alt="`${item.name} image`"
                  transition="fade-transition"
                  :style="`${item.state ? `--tag-state: '${item.state}'` : ''}`"
                >
                  <template #placeholder>
                    <v-skeleton-loader type="card" />
                  </template>
                </v-img>

                <!-- TODO put location to router or whatever logic needed here -->
                <v-btn :ripple="false" class="btn activeBtn editBtn">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <div class="container-content tcenter">
                  <v-avatar style="border: 2px solid #fff">
                    <v-img
                      :src="item.avatar"
                      :alt="`${item.artist} image`"
                      transition="fade-transition"
                    >
                      <template #placeholder>
                        <v-skeleton-loader type="avatar" />
                      </template>
                    </v-img>
                  </v-avatar>
                  <a class="mb-4">{{ item.name }}</a>
                  <!-- <p v-html="item.desc"></p> -->

                  <div class="center bold" style="gap: 6.4px">
                    <span class="floor" style="--c: var(--accent)"
                      >Price: {{ item.price }} $</span
                    >
                    <!-- <img src="@/assets/sources/logos/near-orange.svg" alt="near" style="--w:15px"> -->
                  </div>
                  <span class="floor" style="--c: var(--accent)"
                    >Editions: {{ item.editions }}</span
                  >
                </div>
              </v-card>

              <div class="tier-desc divcol">
                <a class="tup bold" style="cursor: default">{{ item.name }}</a>
                <ul>
                  <li
                    v-show="item.desc"
                    v-html="item.desc.limitString(110)"
                  ></li>
                </ul>
              </div>

              <div class="container-actions divcol">
                <a>More Details</a>
                <v-btn
                  :ripple="false"
                  class="btn activeBtn align"
                  style="--w: calc(100% - 1em)"
                  >Go to Buy page</v-btn
                >
              </div>
            </v-sheet>
          </v-slide-item>
        </v-slide-group>
      </section>
    </template>

    <template v-if="dataNfts.length > 0">
      <h2 class="Title tup">my collections</h2>

      <section
        class="container-profit bold fwrap align"
        style="max-width: 62.616875em"
      >
        <v-sheet color="transparent" class="divcol center">
          <span>Total NFTs</span>
          <span>{{ dataProfits.nfts }}</span>
        </v-sheet>
        <v-sheet color="transparent" class="divcol center">
          <span>Chats Enabled</span>
          <span style="cursor:pointer" @click="$router.push('/chat')">{{ dataProfits.chats }}</span>
        </v-sheet>
        <v-sheet color="transparent" class="divcol center">
          <span>All Time High</span>
          <span>$ {{ dataProfits.high }}</span>
        </v-sheet>
      </section>

      <Filters
        :search="searchNft"
        :filter-a="filterANft.list"
        :filter-b="filterBNft.list"
        :hide="[3]"
        @search="(model) => (searchNft = model)"
        @filterA="(model) => (filterANft.model = model)"
        @filterB="(model) => (filterBNft.model = model)"
      />

      <section ref="container" class="container-nfts grid">
        <v-card
          v-for="(item, i) in dataNfts_pagination"
          :key="i"
          class="card divcol custome"
          @click="
            $store.dispatch('goTo', { key: 'user-nft', item, event: $event })
          "
        >
          <v-img
            :src="item.img"
            :alt="`${item.name} image`"
            transition="fade-transition"
            :style="`
              ${item.state ? `--tag-state: '${item.state}'` : ''}`"
          >
            <template #placeholder>
              <v-skeleton-loader type="card" />
            </template>
          </v-img>

          <div class="container-content tcenter">
            <v-avatar style="border: 2px solid #fff">
              <v-img
                :src="item.avatar"
                :alt="`${item.artist} image`"
                transition="fade-transition"
              >
                <template #placeholder>
                  <v-skeleton-loader type="avatar" />
                </template>
              </v-img>
            </v-avatar>
            <a>{{ item.name }}</a>
            <!-- <a>{{item.artista.limitString(27)}}</a> -->
            <p v-html="item.desc.limitString(27)"></p>

            <div class="center" style="gap: 6.4px">
              <span class="floor" style="--c: var(--accent)"
                >Floor Price: $ {{ Number(item.floor_price)?.toFixed(2) }}</span
              >
              <!-- <img src="@/assets/sources/logos/near-orange.svg" alt="near" style="--w:0.9375em"> -->
            </div>
            <span class="floor" style="--c: var(--accent)"
              >Editions: {{ item.editions }}</span
            >
          </div>
        </v-card>
      </section>

      <Pagination
        :total-pages="pagination_per_pageNft"
        :current-page="currentPageNft"
        @pagechanged="(page) => (currentPageNft = page)"
      />
    </template>

    <template v-if="tableItemsOffersRe.length && tableItemsOffers.length">
      <h2 class="Title tup mb-16">Offers</h2>

      <v-expansion-panels class="custome-expansion not_padding">
        <v-expansion-panel>
          <v-expansion-panel-header expand-icon="mdi-menu-down" class="bold"
            >My offers</v-expansion-panel-header
          >

          <v-expansion-panel-content
            color="rgb(0, 0, 0, .4)"
            class="container-table--expansion mt-5"
          >
            <v-data-table
              :headers="tableHeadersOffers"
              :items="tableItemsOffersRe"
              :page.sync="currentPageOffers"
              :items-per-page="itemsPerPageOffers"
              hide-default-footer
              mobile-breakpoint="-1"
              :header-props="{ sortIcon: 'mdi-menu-down' }"
              style="background: transparent"
              bac
            >
              <template #[`item.nft_media`]="{ item }">
                <center class="center" style="gap: 10px">
                  <v-avatar style="border: 2px solid #fff">
                    <v-img
                      :src="item.nft_media"
                      alt="artist avatar"
                      transition="fade-transition"
                    >
                      <template #placeholder>
                        <v-skeleton-loader type="avatar" />
                      </template>
                    </v-img>
                  </v-avatar>
                </center>
              </template>

              <template #[`item.price_near`]="{ item }">
                <center v-if="item.price_near" class="divcol" style="gap: 5px">
                  <span>N{{ item.price_near }}</span>
                  <span class="normal"
                    >$ {{ dollarConversion(item.price) }}</span
                  >
                </center>

                <center v-else class="divcol" style="gap: 5px">
                  <span>---</span>
                  <span>---</span>
                </center>
              </template>

              <!-- <template #[`item.token_id`]="{ item }">
                <span class="tup" :style="`${item.vault ? '--c: #26A17B' : ''}`">{{item.vault ? "yes" : "no"}}</span>
              </template> -->

              <template #[`item.buyer_id`]="{ item }">
                <center class="center" style="gap: 10px">
                  <v-avatar style="border: 2px solid #fff">
                    <v-img
                      :src="require('~/assets/sources/avatars/avatar.png')"
                      alt="artist avatar"
                      transition="fade-transition"
                    >
                      <template #placeholder>
                        <v-skeleton-loader type="avatar" />
                      </template>
                    </v-img>
                  </v-avatar>
                  <span :title="item.buyer_id">{{
                    item.buyer_id.limitString(20)
                  }}</span>
                </center>
              </template>

              <template #[`item.actions`]="{ item }">
                <center class="center" style="gap: 30px">
                  <!-- <v-btn
                    :disabled="offerBtn"
                    :ripple="false" class="btn activeBtn bold"
                    style="--min-w: 112px; --w: min(100%, 9em); --fs: 16px"
                    @click="acceptOffer(item)"
                  >Accept</v-btn> -->
                  <v-btn
                    :disabled="offerBtn"
                    :ripple="false"
                    class="btn activeBtn bold"
                    style="
                      --min-w: 112px;
                      --w: min(100%, 9em);
                      --fs: 16px;
                      --bg: #fff;
                      --c: var(--primary);
                    "
                    @click="declineOffer(item)"
                    >Cancel Offer</v-btn
                  >
                </center>
              </template>
            </v-data-table>

            <Pagination
              :total-pages="pagination_per_page_offers"
              :current-page="currentPageOffers"
              @pagechanged="(page) => (currentPageOffers = page)"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header expand-icon="mdi-menu-down" class="bold"
            >Offers Received</v-expansion-panel-header
          >

          <v-expansion-panel-content
            color="rgb(0, 0, 0, .4)"
            class="container-table--expansion mt-5"
          >
            <v-data-table
              :headers="tableHeadersOffers"
              :items="tableItemsOffers"
              :page.sync="currentPageOffers"
              :items-per-page="itemsPerPageOffers"
              hide-default-footer
              mobile-breakpoint="-1"
              :header-props="{ sortIcon: 'mdi-menu-down' }"
              style="background: transparent"
              bac
            >
              <template #[`item.nft_media`]="{ item }">
                <center class="center" style="gap: 10px">
                  <v-avatar style="border: 2px solid #fff">
                    <v-img
                      :src="item.nft_media"
                      alt="artist avatar"
                      transition="fade-transition"
                    >
                      <template #placeholder>
                        <v-skeleton-loader type="avatar" />
                      </template>
                    </v-img>
                  </v-avatar>
                </center>
              </template>

              <template #[`item.price_near`]="{ item }">
                <center v-if="item.price_near" class="divcol" style="gap: 5px">
                  <span>{{ item.price_near }} N</span>
                  <span class="normal"
                    >$ {{ dollarConversion(item.price) }}</span
                  >
                </center>

                <center v-else class="divcol" style="gap: 5px">
                  <span>---</span>
                  <span>---</span>
                </center>
              </template>

              <!-- <template #[`item.token_id`]="{ item }">
                <span class="tup" :style="`${item.vault ? '--c: #26A17B' : ''}`">{{item.vault ? "yes" : "no"}}</span>
              </template> -->

              <template #[`item.buyer_id`]="{ item }">
                <center class="center" style="gap: 10px">
                  <v-avatar style="border: 2px solid #fff">
                    <v-img
                      :src="require('~/assets/sources/avatars/avatar.png')"
                      alt="artist avatar"
                      transition="fade-transition"
                    >
                      <template #placeholder>
                        <v-skeleton-loader type="avatar" />
                      </template>
                    </v-img>
                  </v-avatar>
                  <span :title="item.buyer_id">{{
                    item.buyer_id.limitString(20)
                  }}</span>
                </center>
              </template>

              <template #[`item.actions`]="{ item }">
                <center class="center" style="gap: 30px">
                  <v-btn
                    :disabled="offerBtn"
                    :ripple="false"
                    class="btn activeBtn bold"
                    style="--min-w: 112px; --w: min(100%, 9em); --fs: 16px"
                    @click="acceptOffer(item)"
                    >Accept</v-btn
                  >
                  <!-- <v-btn
                    :disabled="offerBtn"
                    :ripple="false" class="btn activeBtn bold"
                    style="--min-w: 112px; --w: min(100%, 9em); --fs: 16px; --bg: #fff; --c: var(--primary)"
                    @click="declineOffer(item)"
                  >Decline</v-btn> -->
                </center>
              </template>
            </v-data-table>

            <Pagination
              :total-pages="
                pagination_per_page_offers > 50
                  ? 50
                  : pagination_per_page_offers
              "
              :current-page="currentPageOffers"
              @pagechanged="(page) => (currentPageOffers = page)"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>

    <!-- <h2 class="tup p mt-16">Artist banner</h2>

    <v-row style="margin-top: 40px">
      <v-col xl="10" lg="10" md="9" sm="8" cols="12">
        <div
          class="relative"
          style="background-color: #fff; max-height: 250px; min-height: 250px"
        >
          <span class="absolute-font"
            ><div>1180 Width x 401.5 Height</div></span
          >

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

      <v-col xl="2" lg="2" md="3" sm="4" cols="12">
        <div
          class="relative"
          style="background-color: #fff; max-height: 250px; min-height: 250px"
        >
          <span class="absolute-font">135.5 Height x 271 Height</span>

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
            class="btn btn-input-file"
            :disabled="formArtistItem || showItem"
            @click="openFileInputMobile"
            >Upload Banner</v-btn
          >

          <span
            class="divcol center span-image"
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

    <v-form
      ref="form"
      class="grid"
      @submit.prevent="saveForm()"
      style="display: none"
    >
      <h2 class="tup p">Basic information</h2>

      <section class="card">
        <label for="name">full name</label>
        <v-text-field
          id="name"
          v-model="form.full_name"
          placeholder="Mario Perez"
        ></v-text-field>

        <label for="username">username</label>
        <v-text-field
          id="username"
          v-model="form.username"
          placeholder="username123"
          :rules="rules.repeatedUsername"
          @input="clearRepeted('username')"
        ></v-text-field>

        <label for="email">email</label>
        <v-text-field
          id="email"
          v-model="form.email"
          placeholder="example@domain.com"
          :rules="rules.required"
          @input="clearRepeted('email')"
        ></v-text-field>

        <label for="discord">discord</label>
        <v-text-field
          id="discord"
          v-model="form.discord"
          placeholder="username#321"
          :rules="rules.repeatedDiscord"
          @input="clearRepeted('discord')"
        ></v-text-field>

        <label for="instagram">instagram account</label>
        <v-text-field
          id="instagram"
          v-model="form.instagram"
          placeholder="@username#321"
          :rules="rules.repeatedInstagram"
          @input="clearRepeted('instagram')"
        ></v-text-field>

        <label for="twitter">twitter account</label>
        <v-text-field
          id="twitter"
          v-model="form.twitter"
          placeholder="@username"
          :rules="rules.repeatedTwitter"
          @input="clearRepeted('twitter')"
        ></v-text-field>

        <label for="telegram">telegram account</label>
        <v-text-field
          id="telegram"
          v-model="form.telegram"
          placeholder="@username45"
          :rules="rules.repeatedTelegram"
          @input="clearRepeted('telegram')"
        ></v-text-field>

        <label for="bio">Description</label>
        <!-- comentario zona vieja empieza aqui <v-textarea
          id="bio"
          v-model="form.bio"
          placeholder="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
          no-resize
        ></v-textarea> termina aqui comentario -->
        <vue-editor v-model="form.description" class="mt-4 mb-4"></vue-editor>

        <label for="bio">About</label>
        <vue-editor v-model="form.about" class="mt-4 mb-4"></vue-editor>
      </section>

      <h2 class="tup p">
        address (This is only to receive your physical merch)
      </h2>

      <section class="card">
        <label for="country">country</label>
        <v-select
          id="country"
          v-model="form.address.country"
          :items="dataCountries"
          solo
          item-text="name"
          item-value="name"
          placeholder="Select The Country"
          style="--fs-place: 16px"
          clearable
          clear-icon="mdi-close"
        ></v-select>

        <label for="street">street address</label>
        <v-text-field
          id="street"
          v-model="form.address.street_address"
          placeholder="Street Address, P.O, box, lorem ipsum"
        ></v-text-field>

        <label for="apartment">Apartment, Suite, Etc</label>
        <v-text-field
          id="apartment"
          v-model="form.address.street_address2"
          placeholder="Street Address 2, P.O, box, lorem ipsum "
        ></v-text-field>

        <label for="city">city</label>
        <v-text-field
          id="city"
          v-model="form.address.city"
          placeholder="Lorem ipsum"
        ></v-text-field>

        <label for="state">State / Province / Region</label>
        <v-text-field
          id="state"
          v-model="form.address.state"
          placeholder="Lorem ipsum"
        ></v-text-field>

        <label for="postal">Postal / Zip Code</label>
        <v-text-field
          id="postal"
          v-model="form.address.postal"
          placeholder="Lorem ipsum"
        ></v-text-field>

        <label for="postal">Phone Number</label>
        <v-text-field
          id="postal"
          v-model="form.address.phone_number"
          placeholder="Lorem ipsum"
        ></v-text-field>
      </section>

      <div
        class="center fill_w wrap fwrapmobile bold"
        style="gap: 2em; --fb: 200px"
      >
        <v-btn
          :ripple="false"
          class="btn activeBtn"
          @click="$router.push(localePath('/profile'))"
          >Cancel</v-btn
        >
        <v-btn :ripple="false" class="btn activeBtn" @click="saveForm()"
          >Save</v-btn
        >
      </div>
    </v-form>

    <!-- Dialogsss -->
    <v-dialog
      v-model="dialogNewCollection"
      max-width="500px"
      content-class="nft-dialog nft-dialog-profile"
      persistent
    >
      <v-btn icon class="close" @click="dialogNewCollection = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-card
        id="modalBuy"
        class="nft-dialog--content quick-help-card divcol pt-14 pb-4 pl-6 pr-6"
      >
        <!-- <h2 class="center" style="--fs: 1.6em">Example text</h2> -->

        <div class="card center divcol card-background-padding">
          <h4 class="tcenter">Quick Tip Help</h4>
          <v-btn class="btn" @click="$router.push('/quick-tip-help-form')"
            >Start</v-btn
          >
        </div>

        <div class="card center divcol card-background-padding">
          <h4 class="tcenter">Start</h4>
          <v-btn class="btn" @click="$router.push('/form-nft-tier1')">Go</v-btn>
        </div>
      </v-card>
    </v-dialog>

    <!-- Dialog edit tier -->
    <v-dialog
      v-model="dialogEditTier"
      max-width="500px"
      content-class="nft-dialog nft-dialog-profile"
      persistent
    >
      <v-btn icon class="close" @click="dialogEditTier = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-card
        id="modalBuy"
        class="nft-dialog--content quick-help-card divcol pt-14 pb-4 pl-6 pr-6"
      >
        <!-- <h2 class="center" style="--fs: 1.6em">Example text</h2> -->

        <div class="card center divcol card-background-padding">
          <h4 class="tcenter">Quick Tip Help</h4>
          <v-btn class="btn" @click="$router.push('/quick-tip-help-form')"
            >Start</v-btn
          >
        </div>

        <div class="card center divcol card-background-padding">
          <h4 class="tcenter">
            Upload Track <br />
            (Tier 1)
          </h4>
          <v-btn
            class="btn"
            @click="
              dialogEditTier = false
              dialogSelectYourNft = true
            "
            >Start</v-btn
          >
        </div>

        <div class="card center divcol card-background-padding">
          <h4 class="tcenter">
            Upload Video <br />
            (Tier 2)
          </h4>
          <v-btn
            class="btn"
            @click="
              dialogEditTier = false
              dialogSelectYourNft = true
            "
            >Start</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
    <!-- Dialog select your nft -->
    <v-dialog
      v-model="dialogSelectYourNft"
      max-width="500px"
      content-class="nft-dialog nft-dialog-profile"
      persistent
    >
      <v-btn icon class="close" @click="dialogSelectYourNft = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-card
        id="modalBuy"
        class="nft-dialog--content quick-help-card divcol pt-14 pb-4 pl-6 pr-6"
      >
        <h2 class="center" style="--fs: 1.6em">Select Your Collection</h2>

        <v-select
          id="country"
          v-model="valueNft"
          :items="dataNfts"
          item-text="title"
          item-value="id"
          solo
          :rules="[(v) => !!v || 'required field']"
          placeholder="Select one of your available token"
          style="--fs-place: 16px; flex-grow: 0"
        ></v-select>

        <v-btn class="btn" @click="$router.push('update-nft-form')"
          >Edit <v-icon class="ml-2">mdi-pencil-outline</v-icon></v-btn
        >
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { VueEditor } from 'vue2-editor'
import computeds from '~/mixins/computeds'
const { getAllCountries } = require('countries-and-timezones')

export default {
  components: {
    VueEditor,
  },
  name: 'EditProfilePage',
  mixins: [computeds],
  data() {
    return {
      tableHeadersOffers: [
        { value: 'nft_media', text: 'NFT', align: 'start', sortable: false },
        {
          value: 'nft_title',
          text: 'NFT NAME',
          align: 'start',
          sortable: false,
        },
        {
          value: 'token_id',
          text: 'TOKEN ID',
          align: 'center',
          sortable: false,
        },
        { value: 'buyer_id', text: 'BUYER', align: 'center', sortable: false },
        { value: 'price_near', text: 'PRICE', align: 'center' },
        { value: 'actions', align: 'center', sortable: false },
      ],
      tableItemsOffers: [],
      tableItemsOffersRe: [],
      currentPageOffers: 1,
      itemsPerPageOffers: 10,

      dataNfts: [],
      valueNft: null,
      userExist: undefined,
      imgBanner: undefined,
      imgBannerMobile: undefined,
      imgAvatar: undefined,
      dialogEditTier: false,
      dialogSelectYourNft: false,
      dialogNewCollection: false,
      avatar_model: [],
      banner_model: [],
      banner_mobile_model: [],
      form: {
        avatar: '',
        banner: '',
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
          phone_number: null,
          country: null,
          street_address: null,
          street_address2: null,
          city: null,
          state: null,
          postal: null,
        },
      },
      imageNft: undefined,
      selectedImageNft: '',

      imageMobile: undefined,
      selectedImageMobile: '',

      imageAvatar: undefined,
      selectedImageAvatar: '',

      imageBanner: undefined,
      selectedImageBanner: '',
      dataCountries: [],
      djangoExistenceList: {
        username: undefined,
        email: undefined,
        discord: undefined,
        instagram: undefined,
        twitter: undefined,
        telegram: undefined,
      },
      rules: {
        required: [(v) => !!v || 'Field required'],
        repeatedUsername: [
          () =>
            !this.djangoExistenceList.username || 'Username is already taken',
        ],
        repeatedEmail: [
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

      selectedPreview: undefined,
      isCreator: false,
      slider: 0,
      currentPage: 1,
      itemsPerPage: 6,
      currentPageNft: 1,
      itemsPerPageNft: 12,
      dataSlider: [
        // {
        //   img: require('~/assets/sources/images/img-listed-1.jpg'),
        //   avatar: require("~/assets/sources/avatars/avatar.png"),
        //   name: "Artistt Name o Collection  n°5",
        //   desc: "Lorem ipsum dolor sit amet,",
        //   floor_price: "250.00",
        //   editions: "250.00",
        //   tier: 1,
        //   type: "nft",
        // },
        // {
        //   img: require('~/assets/sources/images/img-listed-2.jpg'),
        //   avatar: require("~/assets/sources/avatars/avatar.png"),
        //   name: "Artist Name o Collection  n°5",
        //   desc: "Lorem ipsum dolor sit amet,",
        //   floor_price: "250.00",
        //   editions: "250.00",
        //   tier: 2,
        //   type: "nft",
        // },
      ],
      dataEvents: [
        // { event: "toronto" },
        // { event: "miami" },
        // { event: "madrid" },
      ],
      searchNft: '',
      filterANft: {
        model: '',
        list: [6, 5, 4, 3, 2, 1],
      },
      filterBNft: {
        model: '',
        list: [
          'lastest releases',
          'newest',
          'oldest',
          'coming soon',
          'lorem ipsum',
          'lorem ipsum',
        ],
      },
      disabledStart: true,
      search: '',
      filter: {
        model: '',
        list: [6, 5, 4, 3, 2, 1],
      },
      filterA: {
        model: '',
        list: [6, 5, 4, 3, 2],
      },
      filterB: {
        model: '',
        list: [
          'lastest releases',
          'newest',
          'oldest',
          'coming soon',
          'lorem ipsum',
          'lorem ipsum',
        ],
      },
      dataCollections: [
        // {
        //   img: require('~/assets/sources/images/img-listed-1.jpg'),
        //   avatar: require("~/assets/sources/avatars/avatar.png"),
        //   name: "Artist Name o Collection  n°1",
        //   desc: "Lorem ipsum dolor sit amet,",
        //   floor_price: "250.00",
        //   state: "live",
        //   type: "nft",
        //   tier: 3,
        // },
      ],
      artist: {},
      dataProfits: {
        nfts: null,
        owners: null,
        events: null,
        collections: null,
        high: null,
        chats: null,
        artist_id: null,
      },
    }
  },
  head() {
    const title = 'Edit Profile'
    return {
      title,
    }
  },
  computed: {
    dataCollections_pagination() {
      return Array.from(
        new Set(this.dataCollections.map((x) => x.collection))
      ).map((y) => this.dataCollections.filter((z) => z.collection === y))
    },
    pagination_per_page() {
      return Math.ceil(this.dataCollections.length / this.itemsPerPage)
    },
    dataNfts_pagination() {
      return this.$store.getters.pagination({
        items: this.dataNfts,
        currentPage: this.currentPageNft,
        itemsPerPage: this.itemsPerPageNft,
        search: this.searchNft,
        filterA: this.filterANft.model,
      })
    },
    pagination_per_pageNft() {
      return Math.ceil(this.dataNfts.length / this.itemsPerPageNft)
    },
    pagination_per_page_offers() {
      return Math.ceil(this.tableItemsOffers.length / this.itemsPerPageOffers)
    },
  },
  created() {
    this.getData()
  },
  async mounted() {
    this.$gtag.pageview({ page_path: this.$route.path }) // Google Analytics
    const countries = getAllCountries()
    this.dataCountries = Object.values(countries)
    this.EnterKeyboardListener()
    // TODO get artist here
    // this.artistId = 1
    await this.getCurrentArtist()
    this.getMyNfts()
  },
  methods: {
    async acceptOffer(item) {
      this.offerBtn = true
      if (this.$ramper.getUser()) {
        const action1 = [
          this.$ramper.functionCall(
            'storage_deposit',
            {
              account_id: this.$ramper.getAccountId(),
            },
            '50000000000000',
            this.$utils.format.parseNearAmount(this.minimumStorage)
          ),
        ]
        const msgs = {
          price: item.price,
          market_type: 'accept_offer',
          ft_token_id: 'near',
          buyer_id: item.buyer_id,
        }
        const action2 = [
          this.$ramper.functionCall(
            'nft_approve',
            {
              token_id: item.token_id,
              account_id: process.env.CONTRACT_MARKET,
              msg: JSON.stringify(msgs),
            },
            '200000000000000',
            '500000000000000000000'
          ),
        ]
        // const action3 = [
        //   this.$ramper.functionCall(
        //     "storage_withdraw",
        //     '30000000000000',
        //     '1'
        //   )
        // ]

        const res = await this.$ramper.sendTransaction({
          transactionActions: [
            {
              receiverId: process.env.CONTRACT_MARKET,
              actions: action1,
            },
            {
              receiverId: process.env.CONTRACT_NFT,
              actions: action2,
            },
            // {
            //   receiverId: process.env.CONTRACT_MARKET,
            //   actions: action3,
            // },
          ],
          network: process.env.NETWORK,
        })

        this.offerBtn = false

        if (
          res &&
          JSON.parse(localStorage.getItem('ramper_loggedInUser'))
            .signupSource === 'near_wallet'
        ) {
          localStorage.setItem(
            'transaction_data',
            JSON.stringify({
              state: 'success',
              title: 'Success',
              desc: 'Your nft has been successfully unlisted.',
              hash: res.txHashes[1],
            })
          )
          this.$router.push(this.localePath('/redirection'))
        } else if (res && res.result) {
          if (
            res.result[1].status.SuccessValue ||
            res.result[1].status.SuccessValue === ''
          ) {
            // this.$alert("success", {desc: "You have successfully accepted the offer.", hash: res.txHashes[1]})
            localStorage.setItem(
              'transaction_data',
              JSON.stringify({
                state: 'success',
                title: 'Success',
                desc: 'You have successfully accepted the offer.',
                hash: res.txHashes[1],
              })
            )
            this.$router.push(this.localePath('/redirection'))
          } else if (res.result[1].status.Failure) {
            // this.$alert("cancel", {desc: res.result[1].status.Failure.ActionError.kind.FunctionCallError.ExecutionError + ".", hash: res.txHashes[1]})
            localStorage.setItem(
              'transaction_data',
              JSON.stringify({
                state: 'cancel',
                title: 'Error',
                desc:
                  res.result[1].status.Failure.ActionError.kind
                    .FunctionCallError.ExecutionError + '.',
                hash: res.txHashes[1],
              })
            )
            this.$router.push(this.localePath('/redirection'))
          }
        }
      } else {
        await this.$ramper.signIn()
        location.reload()
      }
    },
    async declineOffer(item) {
      this.offerBtn = true
      if (this.$ramper.getUser()) {
        const action = [
          this.$ramper.functionCall(
            'delete_offer',
            {
              nft_contract_id: process.env.CONTRACT_NFT,
              token_id: item.token_id,
            },
            '200000000000000',
            '1'
          ),
        ]

        const res = await this.$ramper.sendTransaction({
          transactionActions: [
            {
              receiverId: process.env.CONTRACT_MARKET,
              actions: action,
            },
          ],
          network: process.env.NETWORK,
        })

        this.offerBtn = false

        if (
          res &&
          JSON.parse(localStorage.getItem('ramper_loggedInUser'))
            .signupSource === 'near_wallet'
        ) {
          localStorage.setItem(
            'transaction_data',
            JSON.stringify({
              state: 'success',
              title: 'Success',
              desc: 'Your nft has been successfully unlisted.',
              hash: res.txHashes[0],
            })
          )
          this.$router.push(this.localePath('/redirection'))
        } else if (res && res.result) {
          if (
            res.result[0].status.SuccessValue ||
            res.result[0].status.SuccessValue === ''
          ) {
            // this.$alert("success", {desc: "You have successfully canceled the offer.", hash: res.txHashes[0]})
            localStorage.setItem(
              'transaction_data',
              JSON.stringify({
                state: 'success',
                title: 'Success',
                desc: 'You have successfully canceled the offer.',
                hash: res.txHashes[0],
              })
            )
            this.$router.push(this.localePath('/redirection'))
          } else if (res.result[0].status.Failure) {
            // this.$alert("cancel", {desc: res.result[0].status.Failure.ActionError.kind.FunctionCallError.ExecutionError + ".", hash: res.txHashes[0]})
            localStorage.setItem(
              'transaction_data',
              JSON.stringify({
                state: 'cancel',
                title: 'Error',
                desc:
                  res.result[0].status.Failure.ActionError.kind
                    .FunctionCallError.ExecutionError + '.',
                hash: res.txHashes[0],
              })
            )
            this.$router.push(this.localePath('/redirection'))
          }
        }
      } else {
        await this.$ramper.signIn()
        location.reload()
      }
    },
    async getOffers() {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($owner: String) {
          offers(where: { data_nft_: { owner_id: $owner } }) {
            typetoken_id
            serie_id
            token_id
            price
            price_near
            nft_contract_id
            ft_token_id
            buyer_id
            artist_id
            id
            data_nft {
              owner_id
              serie_id
              id
              fecha
              artist_id
              metadata {
                extra
                id
                media
                title
                reference
                description
              }
            }
          }
        }
      `

      await clientApollo
        .watchQuery({
          query: QUERY_APOLLO,
          variables: { owner: this.$ramper.getAccountId() },
          pollInterval: 3000,
        })
        .subscribe((res) => {
          const data = res.data.offers

          this.tableItemsOffers = []

          for (let i = 0; i < data.length; i++) {
            const item = data[i]
            item.nft_title = item.data_nft.metadata.title
            item.nft_media = item.data_nft.metadata.media
            this.tableItemsOffers.push(item)
          }
        })
    },
    async getOffersReceived() {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($owner: String) {
          offers(where: { buyer_id: $owner }) {
            typetoken_id
            serie_id
            token_id
            price
            price_near
            nft_contract_id
            ft_token_id
            buyer_id
            artist_id
            id
            data_nft {
              owner_id
              serie_id
              id
              fecha
              artist_id
              metadata {
                extra
                id
                media
                title
                reference
                description
              }
            }
          }
        }
      `

      await clientApollo
        .watchQuery({
          query: QUERY_APOLLO,
          variables: { owner: this.$ramper.getAccountId() },
          pollInterval: 3000,
        })
        .subscribe((res) => {
          const data = res.data.offers

          this.tableItemsOffersRe = []

          for (let i = 0; i < data.length; i++) {
            const item = data[i]
            item.nft_title = item.data_nft.metadata.title
            item.nft_media = item.data_nft.metadata.media
            this.tableItemsOffersRe.push(item)
          }
        })
    },
    async getMyNfts() {
      const clientApollo = this.$apollo.provider.clients.defaultClient

      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($owner_id: String) {
          nfts(where: { owner_id: $owner_id }) {
            typetoken_id
            serie_id
            owner_id
            is_objects
            id
            fecha
            collection
            artist_id
            metadata {
              extra
              id
              media
              title
              reference
              description
            }
          }
        }
      `

      await clientApollo
        .watchQuery({
          query: QUERY_APOLLO,
          variables: { owner_id: this.$ramper.getAccountId() },
          pollInterval: 3000,
        })
        .subscribe(async (res) => {
          const data = res.data.nfts

          this.dataNfts = []

          this.dataProfits.nfts = data.length
          // chats enable
          const artistIds = data.map(item => item.artist_id);
          const uniqueArtistIds = [...new Set(artistIds)];
          this.dataProfits.chats = uniqueArtistIds.length

          // console.log(data)
          const arrayIds = []

          let maxPrice = 0

          for (let i = 0; i < data.length; i++) {
            const item = {
              collection: data[i].collection,
              floor_price: null,
              img: data[i].metadata.media,
              avatar: require('~/assets/sources/avatars/avatar.png'),
              name: data[i].metadata.title,
              name_sell: data[i].metadata.title.split('#').shift(),
              desc: data[i].metadata.description || '',
              editions: data[i].copies || 'Multi',
              tier: Number(data[i].typetoken_id),
              typetoken_id: data[i].metadata.reference,
              type: 'nft',
              extra: data[i].metadata.extra,
              token_id: data[i].id,
              supply: data[i].supply,
              state: null,
              type_id: data[i].serie_id,
              artista: '-',
              is_objects: data[i].is_objects,
            }

            if (item.is_objects) {
              item.state = 'redeemable'
            }

            const varSplit = item.token_id.split('|')
            const idArtist = varSplit[0]
            const typeToken = varSplit[1].split(':').shift()

            const serie = await this.getSerie(idArtist, typeToken)
            const floor = await this.getFloorPrice(serie.id)

            item.artist_id = serie.artist_id
            item.editions = serie.copies || 'Multi'
            item.id_artist = idArtist

            if (floor) {
              if (Number(floor) < Number(serie.price_near)) {
                item.floor_price = floor
              } else {
                item.floor_price = serie.price
              }
            } else {
              item.floor_price = serie.price
            }

            if (maxPrice < item.floor_price) {
              maxPrice = item.floor_price
            }

            arrayIds.push(idArtist)
            this.dataNfts.push(item)
          }
          this.dataProfits.high = Number(maxPrice).toFixed(2)
          const result = Array.from(new Set(arrayIds))

          this.getAvatars(result)
        })
    },
    async getFloorPrice(serieId) {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($serie_id: String) {
          markets(
            where: { serie_id: $serie_id }
            first: 1
            orderBy: price_near
          ) {
            id
            typetoken_id
            transaction_fee
            token_id
            started_at
            serie_id
            price_near
            price
            owner_id
            nft_contract_id
            is_auction
            ft_token_id
            ended_at
            end_price
            artist_id
            approval_id
          }
        }
      `

      const res = await clientApollo.query({
        query: QUERY_APOLLO,
        variables: { serie_id: serieId },
      })

      const data = res.data.markets

      if (data[0]) {
        return data[0].price
      } else {
        return false
      }
    },
    async getAvatars(datos) {
      await this.$axios
        .post(`${this.baseUrl}api/v1/get-avatars/`, { artists: datos })
        .then((result) => {
          const data = result.data
          if (data[0]) {
            for (let i = 0; i < data.length; i++) {
              for (let j = 0; j < this.dataNfts.length; j++) {
                if (
                  String(data[i].id_collection) ===
                  String(this.dataNfts[j].artist_id)
                ) {
                  this.dataNfts[j].avatar = this.baseUrl + data[i].image
                  this.dataNfts[j].artista = data[i].name
                }
              }
            }
          }
        })
        .catch((err) => {
          // this.$alert("cancel", {desc: err.message})
          console.error(err)
        })
    },
    async getSerie(idArtist, typeToken) {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($artist_id: String, $typetoken: String) {
          series(
            where: { artist_id: $artist_id, typetoken_id_in: [$typetoken] }
          ) {
            id
            media
            price
            reference
            title
            typetoken_id
            fecha
            extra
            description
            creator_id
            artist_id
            price_near
            supply
            copies
            desc_series
          }
        }
      `

      const res = await clientApollo.query({
        query: QUERY_APOLLO,
        variables: {
          artist_id: String(idArtist),
          typetoken: String(typeToken),
        },
      })

      return res.data.series[0]
    },
    selectPreview(value) {
      this.selectedPreview = value
      this.$refs.modalPreviewImage.model = true
    },
    onPreview({ type, file }) {
      if (type === 'banner') {
        this.form.banner = file
        this.form.banner_artist = file
      }

      if (type === 'bannerMobile') {
        this.form.banner_mobile = file
      }

      if (type === 'avatar') {
        this.form.avatar = file
      }

      // save form ✔️
      if (this.userExist) {
        this.$axios
          .put(
            `${this.baseUrl}api/v1/perfil/${this.form.id}/`,
            this.$formData(this.form)
          )
          .then(() => {
            this.selectedPreview = undefined
            this.getData()
            this.$alert({
              title: 'Profile updated successfully!',
              desc: 'Your information has been successfully modified.',
            })
          })
          .catch((err) => {
            // this.$alert("cancel", {desc: err.message})
            console.error(err)
          })
      } else {
        this.$axios
          .post(`${this.baseUrl}api/v1/perfil/`, this.$formData(this.form))
          .then(() => {
            this.selectedPreview = undefined
            this.getData()
            this.$alert({
              title: 'Profile updated successfully!',
              desc: 'Your information has been successfully modified.',
            })
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
            // this.$equalData(this.form, data)
            this.form = data
            this.imgBanner = data.banner
              ? this.baseUrl + data.banner
              : this.user.banner
            this.imgBannerMobile = data.banner_mobile
              ? this.baseUrl + data.banner_mobile
              : this.user.banner_mobile
            this.imgAvatar = data.avatar
              ? this.baseUrl + data.avatar
              : this.user.avatar
            this.userExist = true

            if (data.banner && data.banner_mobile && data.avatar) {
              this.disabledStart = false
            }

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
            this.imgBannerMobile = this.user.banner_mobile
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
          console.error('AQUI ERRRORRR', err)
        })
    },
    clearRepeted(key) {
      if (this.djangoExistenceList[key])
        this.djangoExistenceList[key] = undefined
    },
    EnterKeyboardListener() {
      // keyboard enter listener
      this.$refs.form.$el.querySelectorAll('input').forEach((input) => {
        input.addEventListener('keypress', (event) => {
          if (event.key === 'Enter') {
            this.saveForm()
          }
        })
      })
    },
    saveForm() {
      if (!this.$refs.form.validate()) return
      // verification ⭐
      const consult = {
        username: this.form.username,
        email: this.form.email,
        twitter: this.form.twitter,
        discord: this.form.discord,
        instagram: this.form.instagram,
        telegram: this.form.telegram,
        wallet: this.form.wallet,
      }
      // checkout no repeated info
      this.$axios
        .post(`${this.baseUrl}api/v1/validate-perfil/`, consult)
        .then((result) => {
          this.djangoExistenceList = result.data

          // if (!this.$refs.form.validate()) return this.$alert( {title: "Failed request", desc: "Need fill all required fields", icon:"close", color:"hsl(0, 84%, 58%)"})

          // if (this.imageBanner) {
          //   this.form.banner_artist = this.imageBanner
          // }

          // if (this.imageAvatar) {
          //   this.form.image = this.imageAvatar
          // }

          // if (this.imageMobile) {
          //   this.form.banner_mobile = this.imageMobile
          // }

          // save form ✔️
          if (this.userExist) {
            this.$axios
              .put(
                `${this.baseUrl}api/v1/perfil/${this.form.id}/`,
                this.$formData(this.form)
              )
              .then(() => this.goBack())
              .catch((err) => {
                // this.$alert("cancel", {desc: err.message})
                console.error(err)
              })
          } else {
            this.$axios
              .post(`${this.baseUrl}api/v1/perfil/`, this.$formData(this.form))
              .then(() => {
                this.goBack()
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
          }
          // catch error repeated values consult
        })
        .catch((err) => {
          // this.$alert("cancel", {desc: err.message})
          console.error(err)
        })
    },
    goBack() {
      this.$alert({
        title: 'Profile updated successfully!',
        desc: 'Your information has been successfully modified.',
      })
      setTimeout(() => this.$router.go(0), 400)
      this.$router.go(-1)

      // this.$alert("success", {desc: "Your data has been saved successfully."})
      // setTimeout(() => this.$alert({title: "Success!", desc: "Your data has been saved successfully."}), 500);
    },
    previewFile(key, file) {
      this.form[key] = file

      switch (key) {
        case 'avatar':
          this.imgAvatar = URL.createObjectURL(file)
          break
        case 'banner':
          this.imgBanner = URL.createObjectURL(file)
          break
        case 'bannerMobile':
          this.imgBannerMobile = URL.createObjectURL(file)
          break
      }
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
      if (!file) {
        return
      }
      this.createImageMobile(file)
    },
    goToForm(item) {
      // localStorage.setItem("tier-form", tier)
      this.$router.push('update-nft-form?token_id=' + item.token_id)
    },
    getTiersComing() {
      this.$axios
        .post(`${this.baseUrl}api/v1/get-tiers-coming/`, {
          id: Number(this.artistId),
        })
        .then((response) => {
          this.tiersComing = response.data
        })
        .catch((err) => {
          // this.$alert("cancel", {desc: err.message})
          console.error(err)
        })
    },
    getEventsArtist() {
      this.$axios
        .post(`${this.baseUrl}api/v1/get-events/`, {
          artist_id: Number(this.artist.id_collection),
        })
        .then((response) => {
          // this.dataEvents = response.data.reverse()

          if (response.data[0]) {
            const data = []
            for (let i = 0; i < response.data.length; i++) {
              const item = response.data[i]
              item.artist_data = this.artist
              item.img = this.baseUrl + item.img
              data.push(item)
            }
            this.dataEvents = data
          }
          this.dataProfits.events = this.dataEvents.length
        })
        .catch((err) => {
          this.$alert('cancel', { desc: err.message })
          console.error(err)
        })
    },
    getCurrentArtist() {
      this.$axios
        .post(`${this.baseUrl}api/v1/get-artist-by-wallet/`, {
          wallet: this.$ramper.getAccountId(),
        })
        .then(async (response) => {
          const data = response.data
          if (data) {
            this.isCreator = data.creator_id === this.$ramper.getAccountId()
            this.artist = data
            this.artist.banner = this.baseUrl + this.artist.banner
            this.artist.banner_mobile = this.baseUrl + this.artist.banner_mobile
            this.artist.image = this.artist.image
              ? this.baseUrl + this.artist.image
              : require('~/assets/sources/avatars/avatar.png')

            await this.getDataArtist()
            // // await this.validateTiers()
            // // await this.getTiersComing()
            // // await this.getOwners()

            // this.getEventsArtist()
          } else {
            // this.$alert("cancel", {desc: "The artist does not exist"})
            // this.$router.push(this.localePath("/artists"))
          }
        })
        .catch((err) => {
          // this.$alert("cancel", {desc: err.message})
          console.error(err)
        })
    },
    async getOwners() {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($artist_id: String) {
          nfts(where: { artist_id: $artist_id }) {
            typetoken_id
            serie_id
            owner_id
            is_objects
            id
            fecha
            collection
            artist_id
            metadata {
              extra
              id
              media
              title
              reference
              description
            }
          }
        }
      `

      await clientApollo
        .watchQuery({
          query: QUERY_APOLLO,
          variables: { artist_id: String(this.artist.id_collection) },
          pollInterval: 3000,
        })
        .subscribe((res) => {
          const data = res.data.nfts

          const ownersArray = []

          for (let i = 0; i < data.length; i++) {
            ownersArray.push(data[i].owner_id)
          }

          const owners = Array.from(new Set(ownersArray))

          this.dataProfits.owners = owners.length
        })
    },
    async validateTierOne() {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($artist_id: String, $owner_id: String) {
          nfts(
            where: {
              owner_id: $owner_id
              artist_id: $artist_id
              metadata_: { reference: "1" }
            }
          ) {
            typetoken_id
            serie_id
            owner_id
            is_objects
            id
            fecha
            collection
            artist_id
            metadata {
              extra
              id
              media
              title
              reference
              description
            }
          }
        }
      `

      await clientApollo
        .watchQuery({
          query: QUERY_APOLLO,
          variables: {
            artist_id: String(this.artist.id_collection),
            owner_id: this.$ramper.getAccountId(),
          },
          pollInterval: 3000,
        })
        .subscribe((res) => {
          const data = res.data.nfts

          if (data.length > 0) {
            this.validateTier = false
          } else {
            this.validateTier = true
          }
        })
    },
    async validateTiers() {
      for (let i = 0; i < this.tiers.length; i++) {
        if (this.tiers[i].tier === '1') {
          this.tiers[i].validate = await this.validateTierFn(i + 1, '1')
          if (this.tiers[i].validate) {
            this.ownerTiers.push(this.tiers[i].tier)
          }

          if (this.tiers[i].validate) {
            this.validateTier = false
          } else {
            this.validateTier = true
          }
        } else {
          this.tiers[i].validate = await this.validateTierFn(
            i + 1,
            this.collectionNow
          )
          if (this.tiers[i].validate) {
            this.ownerTiers.push(this.tiers[i].tier)
          }
        }
      }
      this.getDataNfts()
    },
    async getDataNfts() {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO(
          $artist_id: String
          $typetoken: [String]
          $collection: String
        ) {
          series(
            where: {
              artist_id: $artist_id
              typetoken_id_in: $typetoken
              is_objects_not: true
              collection_lt: $collection
            }
            orderBy: collection
            orderDirection: asc
          ) {
            title
            typetoken_id
            supply
            reference
            price_near
            price
            media
            is_objects
            id
            fecha
            extra
            description
            desc_series
            creator_id
            copies
            collection
            artist_id
          }
        }
      `

      await clientApollo
        .watchQuery({
          query: QUERY_APOLLO,
          variables: {
            artist_id: String(this.artist.id_collection),
            typetoken: ['1', '2', '3', '4', '5', '6'],
            collection: this.collectionNow,
          },
          pollInterval: 3000,
        })
        .subscribe((res) => {
          const data = res.data.series

          this.dataCollections = []

          for (let i = 0; i < data.length; i++) {
            const item = {
              token_id: data[i].id,
              artist: this.artist.name,
              img: data[i].media,
              collection: data[i].collection,
              avatar: this.artist.image,
              name: data[i].title,
              name_sell: data[i].title,
              desc: data[i].description,
              floor_price: data[i].price,
              price: data[i].price,
              copies: data[i].copies || 0,
              editions: data[i].copies || 'Multi',
              supply: data[i].supply,
              artist_id: data[i].artist_id,
              // state: "live",
              state: null,
              activate: false,
              type: 'nft',
              tier: Number(data[i].typetoken_id),
              type_id: data[i].id,
              validate: this.validateTier,
            }

            if (item.tier === 7) {
              item.tier = 3
            } else if (item.tier === 8) {
              item.tier = 4
            } else if (item.tier === 9) {
              item.tier = 5
            } else if (item.tier === 10) {
              item.tier = 2
            } else if (item.tier === 11) {
              item.tier = 2
            }

            if (item.validate && item.tier !== 1) {
              item.state = 'locked'
            }

            // if (item.tier === 2) {
            //   if (this.tiers[1].validate === false) {
            //     item.state = "locked"
            //     item.activate = true
            //   }
            // } else if (item.tier === 3) {
            //   if (this.tiers[2].validate === false) {
            //     item.state = "locked"
            //     item.activate = true
            //   }
            // } else if (item.tier === 4) {
            //   if (this.tiers[3].validate === false) {
            //     item.state = "locked"
            //     item.activate = true
            //   }
            // } else if (item.tier === 5) {
            //   if (this.tiers[4].validate === false) {
            //     item.state = "locked"
            //     item.activate = true
            //   }
            // }

            this.dataCollections.push(item)
          }
        })
    },
    async validateTierFn(tierId, collectionNow) {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO(
          $artist_id: String
          $owner_id: String
          $reference: String
          $collection: String
        ) {
          nfts(
            where: {
              owner_id: $owner_id
              artist_id: $artist_id
              metadata_: { reference: $reference }
              collection: $collection
            }
          ) {
            typetoken_id
            serie_id
            owner_id
            is_objects
            id
            fecha
            collection
            artist_id
            metadata {
              extra
              id
              media
              title
              reference
              description
            }
          }
        }
      `

      const res = await clientApollo.query({
        query: QUERY_APOLLO,
        variables: {
          artist_id: String(this.artist.id_collection),
          owner_id: this.$ramper.getAccountId(),
          reference: String(tierId),
          collection: collectionNow,
        },
      })

      const data = res.data.nfts

      if (data.length > 0) {
        return true
      } else {
        return false
      }
    },
    async getDataArtist() {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($artist_id: String) {
          artist(id: $artist_id) {
            total_nft
            total_event
            total_collection
            name
            id
            fecha
            collection
          }
        }
      `

      this.dataProfits.owners = '---'
      this.dataProfits.high = '---'

      await clientApollo
        .watchQuery({
          query: QUERY_APOLLO,
          variables: { artist_id: String(this.artist.id_collection) },
          pollInterval: 3000,
        })
        .subscribe(async (res) => {
          const data = res.data.artist

          this.collectionNow = data.collection

          await this.getTierOne()

          // this.dataProfits.nfts = data.total_nft
          this.dataProfits.collections = data.collection

          await this.getDataNfts()
        })
    },
    async getTierOne() {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($artist_id: String, $collection: String) {
          series(
            where: {
              artist_id: $artist_id
              typetoken_id: "1"
              collection: $collection
              is_objects: false
            }
          ) {
            id
            collection
            media
            price
            reference
            title
            typetoken_id
            fecha
            extra
            description
            creator_id
            artist_id
            price_near
            supply
            copies
            desc_series
          }
        }
      `

      await clientApollo
        .watchQuery({
          query: QUERY_APOLLO,
          variables: {
            artist_id: String(this.artist.id_collection),
            // !TODO [this.collectionNow] is undefined
            collection: String(this.collectionNow),
          },
          pollInterval: 3000,
        })
        .subscribe(async (res) => {
          this.dataSliderPreview = []
          const data = res.data.series

          for (let i = 0; i < data.length; i++) {
            const item = {
              collection: data[i].collection,
              img: data[i].media,
              avatar: this.artist.image,
              name: data[i].title.toUpperCase(),
              artist: this.artist.name,
              artist_id: data[i].artist_id,
              desc: this.artist.name,
              description: data[i].description,
              floor_price: data[i].price_near,
              price: data[i].price,
              editions: data[i].copies || 'Multi',
              tier: Number(data[i].reference),
              type_id: data[i].id,
              type: 'nft',
              token_id: data[i].id,
              supply: data[i].supply,
              copies: data[i].copies || 0,
              state: null,
              validate: this.validateTier,
            }

            // if (this.tiersComing.tierOne) {
            //   item.state = 'coming soon'
            //   item.validate = true
            // }

            // if (item.validate && item.tier !== 1) {
            //   item.state = 'locked'
            // }

            // if (item.tier === 1) {
            //   item.validate = false
            // }

            // if (item.tier === 1) {
            //   if (this.tiers[0].validate === true) {
            //     item.state = 'owned'
            //     item.activate = false
            //   }
            // }
            // if (
            //   item.copies !== 0 &&
            //   Number(item.supply) >= Number(item.copies)
            // ) {
            //   item.state = 'sold out'
            // }
            this.dataSliderPreview.push(item)

            await this.getTiers()
          }
        })
    },
    async getTiers() {
      const clientApollo = this.$apollo.provider.clients.defaultClient
      const QUERY_APOLLO = gql`
        query QUERY_APOLLO($artist_id: String, $collection: String) {
          series(
            where: {
              artist_id: $artist_id
              typetoken_id_in: ["2", "3", "4", "5", "6"]
              collection: $collection
              is_objects: false
            }
          ) {
            id
            collection
            media
            price
            reference
            title
            typetoken_id
            fecha
            extra
            description
            creator_id
            artist_id
            price_near
            supply
            copies
            desc_series
            is_objects
          }
        }
      `

      await clientApollo
        .watchQuery({
          query: QUERY_APOLLO,
          variables: {
            artist_id: String(this.artist.id_collection),
            collection: String(this.collectionNow),
          },
          pollInterval: 3000,
        })
        .subscribe((res) => {
          const data = res.data.series

          this.dataSlider = []

          for (let i = 0; i < data.length; i++) {
            const item = {
              collection: data[i].collection,
              img: data[i].media,
              avatar: this.artist.image,
              name: data[i].title.toUpperCase(),
              artist: this.artist.name,
              artist_id: data[i].artist_id,
              desc: this.artist.name,
              description: data[i].description,
              floor_price: data[i].price_near,
              price: data[i].price,
              editions: data[i].copies || 'Multi',
              tier: Number(data[i].reference),
              type_id: data[i].id,
              type: 'nft',
              token_id: data[i].id,
              supply: data[i].supply,
              copies: data[i].copies || 0,
              state: null,
              validate: this.validateTier,
            }

            // if (item.validate && item.tier !== 1) {
            //   item.state = 'locked'
            // }

            // if (item.tier === 2) {
            //   if (this.tiersComing.tierTwo) {
            //     item.state = 'coming soon'
            //     item.validate = true
            //   }
            //   if (this.tiers[1].validate === true) {
            //     item.state = 'owned'
            //     item.activate = false
            //   }
            // } else if (item.tier === 3) {
            //   if (this.tiersComing.tierThree) {
            //     item.state = 'coming soon'
            //     item.validate = true
            //   }
            //   if (this.tiers[2].validate === true) {
            //     item.state = 'owned'
            //     item.activate = false
            //   }
            // } else if (item.tier === 4) {
            //   if (this.tiersComing.tierFour) {
            //     item.state = 'coming soon'
            //     item.validate = true
            //   }
            //   if (this.tiers[3].validate === true) {
            //     item.state = 'owned'
            //     item.activate = false
            //   }
            // } else if (item.tier === 5) {
            //   if (this.tiersComing.tierFive) {
            //     item.state = 'coming soon'
            //     item.validate = true
            //   }
            //   if (this.tiers[4].validate === true) {
            //     item.state = 'owned'
            //     item.activate = false
            //   }
            // } else if (item.tier === 6) {
            //   if (this.tiersComing.tierSix) {
            //     item.state = 'coming soon'
            //     item.validate = true
            //   }
            //   if (this.tiers[5].validate === true) {
            //     item.state = 'owned'
            //     item.activate = false
            //   }
            // }
            // if (
            //   item.copies !== 0 &&
            //   Number(item.supply) >= Number(item.copies)
            // ) {
            //   item.state = 'sold out'
            // }
            this.dataSliderPreview.push(item)
          }
          this.dataSlider = this.dataSliderPreview
        })
    },
    showTag() {
      document.querySelector('.header').classList.add('hover')
    },
    hideTag() {
      document.querySelector('.header').classList.remove('hover')
    },
  },
}
</script>

<style src="~/assets/styles/pages/profile.scss" lang="scss" />
