<template>
    <div id="quick-tip-help" class="divcol">
      <h2 class="tup tcenter" style="color: var(--primary);">Music Feast Community Access Quick Tip Help Guide</h2>
  
      <div class="divrow center delete-in-mobile" style="gap: 20px; margin-block: 100px;">
        <img src="~/assets/sources/images/person-cap.png" alt="cap" class="animated-img-up">
        <img src="~/assets/sources/images/shirt.png" alt="cap" class="animated-img-down">
        <img src="~/assets/sources/images/5-shirts.png" alt="cap" class="static-img">
        <img src="~/assets/sources/images/cup.png" alt="cap" class="animated-img-down">
        <img src="~/assets/sources/images/cap.png" alt="cap" class="animated-img-up">
      </div>
  
      <div class="center divcol mt-16 mb-16 margin-block-mobile">
        <h2 class="tcenter mb-16 margin-block-mobile">
            Welcome to the Community!
        </h2>
  
        <p class="p mobile-text-align">
          The Music Feast works differently than the normal music distribution currently available. We allow users to purchase music to keep, transfer, or gain access to even more exclusive rights to limited-edition assets.<br>
          <br>Using a TIER System <a href="tier-system" target="_blank" style="text-decoration: underline;">Learn More About The TIER System</a>, Music Feast allows users to purchase, sell, and gain access to Artist’s Music and Exclusive Communities via the Community Access Pass. <br>
          <br><b>This creates a one-of-a-kind music purchasing and rights access experience that allows users to PURCHASE and TRANSFER their music, and limited-edition assets. Below is an explanation of how the Music Feast Community Access Pass works:</b>
        </p>
      </div>
  
      <div class="mb-16 mt-16 margin-block-mobile">
        <h2 class="tup title-line p">Quick tip help</h2>
        <div class="lowline"></div>
      </div>
  
      <div v-for="(item, index) in panelsData" :key="index" :class="`container-expansion center panel-${index}`">
        <v-expansion-panels flat style="max-width: 1440px;">
          <v-expansion-panel>
            <v-expansion-panel-header class="h6" expand-icon="mdi-menu-down">{{ item.name }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="mb-8 mt-8 font20">
                <b>{{ item.main_desc }}</b>
              </p>
              <ul class="mt-8 mb-8">
                <li v-if="item.title1 && item.description1" class="mb-8 font18">
                  <b>{{ item.title1 }}</b> {{ item.description1 }}
                </li>
                <li v-if="item.title2 && item.description2" class="mt-8 font18">
                  <b>{{ item.title2 }}</b> {{ item.description2 }}
                </li>
                <li v-if="item.title3 && item.description3" class="mt-8 font18">
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
              </ul>
  
              <div v-if="item.last_desc" class="card card-last-desc mt-8 mb-8">
                <p class="font18">
                  <b>{{ item.last_desc }}</b>
                </p>
                <p v-if="item.last_desc2" class="font18">
                  <b>{{ item.last_desc2 }}</b>
                </p>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>  
  </template>
  
  <script>
  import computeds from '~/mixins/computeds'
  
  export default {
    name: "QuickTipHelpPage",
    mixins: [computeds],
    data() {
      return {
        panelsData: [
          {
            name:"Currently",
            main_desc: "We use Discord to allow users to gain access to Artist Communities. Now that you have purchased your Community Access Pass, you will need to create or log in to your Discord account and follow the instructional steps on the Artist Page to gain access.",
          },
          {
            name:"All tiers",
            main_desc: "On the platform use a unique NFT-based system and smart contracts, we offer payments associated with all creator's wallets, and auto-swap to stablecoins in order to protect the artists from crypto volatility. Music Feast has a secondary market where all NFTs can be resold. Creators retain a 10% royalty on any secondary sales. ",
          },
          {
            name:"Important",
            main_desc: "It's important to note that during the transfer process, some NFTs may have additional conditions or limitations set by the creator or issuer. For example, there might be restrictions on subsequent transfers, commercial use, or other terms outlined in the smart contract associated with the NFT.",
          },
          {
            name: "Transfer",
            main_desc: "The transfer of NFTs is facilitated by the underlying blockchain technology, which ensures secure, transparent, and immutable record-keeping of ownership changes. By leveraging the decentralized nature of blockchains, NFT transfers provide a reliable and verifiable way to transfer digital assets from one party to another.",
          },
        ],
      }
    },
    head() {
      const title = "Quick Tip Help"
      return {
        title,
      }
    },
   
    methods: {
     
    }
  };
  </script>
  
  <style src="~/assets/styles/pages/quick-tip-help.scss" lang="scss" />