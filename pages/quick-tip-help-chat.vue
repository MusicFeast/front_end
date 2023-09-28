<template>
  <div id="quick-tip-help-3-4" class="divcol">
    <h2 class="tup tcenter" style="color: var(--primary)">
      Music feast chat quick tip help guide
    </h2>

    <div
      class="divrow center delete-in-mobile"
      style="gap: 20px; margin-block: 100px"
    >
      <img
        src="~/assets/sources/images/person-cap.png"
        alt="cap"
        class="animated-img-up"
      />
      <img
        src="~/assets/sources/images/shirt.png"
        alt="cap"
        class="animated-img-down"
      />
      <img
        src="~/assets/sources/images/5-shirts.png"
        alt="cap"
        class="static-img"
      />
      <img
        src="~/assets/sources/images/cup.png"
        alt="cap"
        class="animated-img-down"
      />
      <img
        src="~/assets/sources/images/cap.png"
        alt="cap"
        class="animated-img-up"
      />
    </div>

    <div class="center divcol mt-16 mb-16 margin-block-mobile">
      <h2 class="tcenter mb-16 margin-block-mobile">
        Music Feast | Tier 1 Chat Instructions
      </h2>

      <p class="p mobile-text-align">
        Welcome to the community access chat on Music Feast! The chat
        functionality on the site works to keep you in touch with your favorite
        artists as you have subscribed for exclusive access to their community.
      </p>
    </div>

    <div class="mb-16 mt-16 margin-block-mobile">
      <h2 class="tup title-line p">Quick tip help</h2>
      <div class="lowline"></div>
    </div>

    <div
      v-for="(item, index) in panelsData"
      :key="index"
      :class="`container-expansion center panel-${index}`"
    >
      <v-expansion-panels flat style="max-width: 1440px">
        <v-expansion-panel>
          <v-expansion-panel-header class="h6" expand-icon="mdi-menu-down">{{
            item.name
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p class="mb-8 mt-8 font20">
              <b>{{ item.main_desc }}</b>
            </p>
            <!-- <ul class="mt-8 mb-8">
              <li class="mb-8 font18">
                <b>{{ item.title1 }}</b> {{ item.description1 }}
              </li>
              <li class="mt-8 font18">
                <b>{{ item.title2 }}</b> {{ item.description2 }}
              </li>
              <li class="mt-8 font18">
                <b>{{ item.title3 }}</b> {{ item.description3 }}
              </li>
              <li v-if="item.title4 && item.description4" class="mt-8 font18">
                <b>{{ item.title4 }}</b> {{ item.description4 }}
              </li>
              <li v-if="item.title5 && item.description5" class="mt-8 font18">
                <b>{{ item.title5 }}</b> {{ item.description5 }}
              </li>
              <li v-if="item.title6 && item.description6" class="mt-8 font18">
                <b>{{ item.title6 }}</b> {{ item.description6 }}
              </li>
              <li v-if="item.title7 && item.description7" class="mt-8 font18">
                <b>{{ item.title7 }}</b> {{ item.description7 }}
              </li>
            </ul> -->

            <!-- <div v-if="item.last_desc" class="card card-last-desc mt-8 mb-8">
              <p class="font18">
                <b>{{ item.last_desc }}</b>
              </p>
              <p v-if="item.last_desc2" class="font18">
                <b>{{ item.last_desc2 }}</b>
              </p>
            </div> -->
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: 'QuickTipHelp34Page',
  mixins: [computeds],
  data() {
    return {
      panelsData: [
        {
          name: 'Left scroll',
          main_desc:
            'In the most left vertical scroll, you will see all the artist community channels you have access to, starting with the default Music Feast channel at the top, followed by each descending community channel. Once you click on the artist image you will then be chatting in that channel. '
        },
        {
          name: 'Second',
          main_desc:
            'The second vertical scroll to the left will feature each channel’s conversational platform, segmented by a hashtag subject matter. Once you click on the hashtagged subject matter, you will then be chatting in that subject-specific channel of the artist’s community. '
        },
        {
          name: 'Promp',
          main_desc:
            'The horizontal prompt in the main chat window at the bottom is where you can enter the chat and either submit text or emoji messages into that subject-specific channel of the artist’s community.'
        },
        {
          name: 'Top Right',
          main_desc:
            'In the top right of the chat window, you have the option to “Search” the channel for word-specific queries as well as click on the square icon to expand the entire chat to full-screen.'
        }
      ]
    }
  },
  head() {
    const title = 'Quick Tip Help 3 4'
    return {
      title
    }
  },

  methods: {}
}
</script>

<style src="~/assets/styles/pages/quick-tip-help-3-4.scss" lang="scss" />
