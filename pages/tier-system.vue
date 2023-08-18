<template>
    <div id="tier-system" class="divcol">
      <h2 class="tup tcenter" style="color: var(--primary);">Music Feast TIER System Quick Tip Help Guide</h2>
  
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
            The Music Feast TIER System works differently than the normal music distribution currently available. We allow users to purchase music to keep, transfer, or gain access to even more exclusive rights to limited-edition assets.<br>
          <br>All TIERS on the platform use a unique NFT-based system and smart contracts, we offer payments associated with all creator's wallets, and auto-swap to stablecoins in order to protect the artists from crypto volatility. Music Feast has a secondary market where all NFTs can be resold. Creators retain a 10% royalty on any secondary sales.<br>
          <br>This creates a one-of-a-kind music purchasing and rights access experience that allows users to PURCHASE and TRANSFER their music, and limited-edition assets. Below is an explanation of how the Music Feast TIER System works:
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
                <b>{{ item.title_main_desc }}</b> {{ item.main_desc }}
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>  
  </template>
  
  <script>
  import computeds from '~/mixins/computeds'
  
  export default {
    name: "TierSystemPage",
    mixins: [computeds],
    data() {
      return {
        panelsData: [
          {
            name:"Tier 1",
            title_main_desc: "TIER 1 (Low Cost, High Volume): ",
            main_desc: "This is an audio NFT that unlocks the community and TIER 2 to TIER 6. The audio that is used is also pushed to traditional platforms in order to generate revenue for TIER 5. When a person buys TIER 1, they will then sync their NFT with the platform and join our discord server. This will then unlock the artist's individual community. This will be uncapped so the artist can continue to grow his community.",
          },
          {
            name:"Tier 2",
            title_main_desc: "TIER 2 (Low Cost, High Volume):",
            main_desc: "Exclusive video content that is related to the TIER 1 audio. The artist will upload artwork and when purchased, it unlocks the video content.  Only holders of that particular TIER can access the video. We will only release a certain amount of videos per artist to promote internal trading.",
          },
          {
            name:"Tier 3",
            main_desc: "This is an NFT that represents a physical piece of merchandise. The TIER 3 merch could be a higher quantity, and a bit less expensive than TIER 4. An example could be a T-Shirt. The NFT is a redeemable ticket that when triggered starts the ordering and manufacturing process.",
          },
          {
            name: "Tier 4",
            main_desc: "This is also an NFT that represents physical merch. There is less quantity than TIER 3, and it could be of higher quality for more views. (i.e. hoodie, bag, etc.) The process is the same for redeeming.",
          },
          {
            name: "Tier 5",
            title_main_desc: "TIER 5 (40 Editions): ",
            main_desc: "Royalties, Distribution, and SYNC. Holders of these NFTs will have access to a DAO (Exaplation of DAO) treasury where they will be able to see the funds in a transparent way. Funds will be distributed on an annual basis. The revenue coming in would add value to any resale opportunities. Music Feast will work with our publishing and distribution partners to administer the deals.",
          },
          {
            name: "Tier 6",
            main_desc: "A one-of-one auction item. This will work similarly to TIER 3 and TIER 4, in terms of it being an NFT that represents the auction item.  When the ticket is redeemed, it will trigger a process order form which will grab all shipping details and it will be the artist's responsibility to fulfill the order.",
          }
        ],
      }
    },
    head() {
      const title = "Tier System"
      return {
        title,
      }
    },
   
    methods: {
     
    }
  };
  </script>
  
  <style src="~/assets/styles/pages/tier-system.scss" lang="scss" />