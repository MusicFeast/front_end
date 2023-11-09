<template>
  <div id="quick-tip-help" class="divcol">
    <h2 class="tup tcenter" style="color: var(--primary);">Music Feast Track Upload Guide</h2>

    <div class="divrow center delete-in-mobile" style="gap: 20px; margin-block: 100px;">
      <img src="~/assets/sources/images/person-cap.png" alt="cap" class="animated-img-up">
      <img src="~/assets/sources/images/shirt.png" alt="cap" class="animated-img-down">
      <img src="~/assets/sources/images/5-shirts.png" alt="cap" class="static-img">
      <img src="~/assets/sources/images/cup.png" alt="cap" class="animated-img-down">
      <img src="~/assets/sources/images/cap.png" alt="cap" class="animated-img-up">
    </div>

    <div class="center divcol mt-16 mb-16 margin-block-mobile">
      <h2 class="tcenter mb-10 margin-block-mobile">
          Welcome to the Community!
      </h2>

      <p class="p mobile-text-align">
        The Music Feast works differently than the normal music distribution currently available. We allow users to purchase music to keep, transfer, or gain access to even more exclusive rights to limited-edition assets.<br>
        <br>Using a TIER System <a href="tier-system" target="_blank" style="text-decoration: underline;">Learn More About The TIER System</a>, Music Feast allows users to purchase, sell, and gain access to Artist’s Music and Exclusive Communities via the Community Access Pass. <br>
        <br><b>This creates a one-of-a-kind music purchasing and rights access experience that allows users to PURCHASE and TRANSFER their music, and limited-edition assets. Below is an explanation of how to upload the Tier1 system:</b>
      </p>
    </div>

    <div class="center mb-6">
        <v-btn x-large class="btn" @click="$router.push('form-nft-tier1')">Skip the Guide and Start Now</v-btn>
    </div>

    <div class="mb-16 mt-16 margin-block-mobile">
      <h2 class="tup title-line p">How to upload the Tier1</h2>
      <div class="lowline"></div>
    </div>

    <div v-for="(item, index) in panelsData" :key="index" :class="`container-expansion center panel-${index}`">
        <div class="pt-4 pb-4 pl-6 pr-6 wrap-expansion">
          <span class="h6">{{ item.name }}</span>
            <p class="mb-8 mt-8 font20">
              <b>{{ item.main_desc }}</b>
            </p>
            <p class="mb-8 mt-8 font20">
              <b>{{ item.main_desc1 }}</b>
            </p>
            <p class="mb-8 mt-8 font20">
              <b>{{ item.main_desc2 }}</b>
            </p>
            <p class="mb-8 mt-8 font20">
              <b>{{ item.main_desc3 }}</b>
            </p>
            <p class="mb-8 mt-8 font20">
              <b>{{ item.main_desc4 }}</b>
            </p>
            <p class="mb-8 mt-8 font20">
              <b>{{ item.main_desc5 }}</b>
            </p>
            <div v-if="item.display" class="center mb-6" >
              <v-btn large class="btn" @click="$router.push(item.btn_action)">{{ item.btn_text }}</v-btn>
          </div>
        </div>
    </div>
  </div>  
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "QuickTipHelpFormPage",
  mixins: [computeds],
  data() {
    return {
      panelsData: [
        {
          name:"Complete Your Profile and Showcase Your Artistry",
          main_desc: "Welcome to Music Feast! We're excited to have you join our creative community. To make the most of your experience and connect with fellow artists and enthusiasts, we encourage you to complete your profile with essential information and stunning banner pictures. Here's why it matters:",
          main_desc1: "Your name is your identity on Music Feast. It helps others recognize and remember you. When you participate in discussions, share your work, or engage with the community, having your name displayed makes your interactions more personal and meaningful. It's the first step to building your artistic presence.",
          main_desc2: "Connecting your social network profiles, such as Instagram, Twitter, or Facebook, can help you expand your reach. By linking your accounts, you allow fellow users to explore more of your creative journey and follow you on other platforms. It's a fantastic way to promote your work and grow your audience.",
          main_desc3: "Banner pictures are a canvas for you to express yourself and showcase your artistry. These large, eye-catching images at the top of your profile tell a story about who you are as an artist. Consider using your banner to feature your latest project, a personal statement, or a collage of your best works. A well-designed banner not only captivates visitors but also provides a glimpse into your artistic world.",
          main_desc4: "By completing your profile and utilizing banner pictures effectively, you're not just sharing your name; you're sharing your story, passion, and vision as an artist. Your profile is your digital canvas, and it's how you make a lasting impression on Music Feast.",
          main_desc5: "So, let's get started! Go to your profile settings and fill in your name, connect your social networks, and design a banner picture that speaks volumes about your art. Embrace the opportunity to connect, inspire, and be inspired by the vibrant creative community here at Music Feast.",
          btn_text: "Edit My Profile",
          btn_action: "edit-profile",
          display: true
        },
        {
          name:"Fill Out the NFT Form",
          main_desc: "Click the 'Upload Images' or similar button to select your NFT images. Ensure your images meet the required size of 255x255 pixels",
          main_desc1: "Track Name: Enter the name of your track",
          main_desc2: "Description: Provide a description of your NFT, including any relevant details, inspiration, or information about the track.",
          main_desc3: "Price in USD: Specify the price of your NFT in US dollars.",
          main_desc4: "You can upload your audio track in one of the following formats: .wav, .mp3, or .mp4.",
          main_desc5: "Click next",
          btn_text: "Upload Track",
          btn_action: "form-nft-tier1",
          display: true
        },
        {
          name:"Setting Royalties and Splits for Your NFT",
          main_desc: "Set Revenue Splits: You can also configure revenue splits with collaborators or partners. Many platforms allow you to split the revenue up to a certain percentage (usually up to 70%) with other users.",
          main_desc1: "Enter the collaborators' or partners' wallet addresses and specify the percentage of the revenue they will receive. For example, if you want to split the revenue 50-50 with a collaborator, you can enter their wallet address and set a 50% split.",
          main_desc2: "Configure Royalties: ypically, you can set royalties for your NFT. The maximum royalty percentage is usually around 10%. This means that every time your NFT is resold on the platform, a percentage (up to 10%) of the sale price goes to you, the original creator.",
          main_desc3: "Enter the desired royalty percentage in the appropriate field (e.g., 5% for a 5% royalty).",
          btn_text: "Upload Track",
          btn_action: "form-nft-tier1",
          display: true
        },
        {
          name: "Final Steps: Verify, Approve, and Deploy Your NFT",
          main_desc: "The last step in the NFT creation process is to thoroughly verify all the information you've entered. This includes your NFT images, track details, pricing, royalties, and any revenue splits with collaborators.",
          main_desc1: "Keep in mind that blockchain technology is immutable, meaning once the information is recorded on the blockchain, it cannot be changed. It's essential to ensure the accuracy of your listing at this stage.",
          main_desc2: "Keep in mind that blockchain technology is immutable, meaning once the information is recorded on the blockchain, it cannot be changed. It's essential to ensure the accuracy of your listing at this stage.",
          main_desc3: "After you've verified all the information and are satisfied with your NFT listing, it's time to submit your NFT for approval. The platform administrator or moderator will review your listing to ensure it complies with the platform's guidelines and policies.",
          main_desc4: "The administrator may check for any violations, including copyright infringement or inappropriate content. They will also confirm that the royalties and revenue splits are correctly configured.",
          btn_text: "Upload Track",
          btn_action: "form-nft-tier1",
          display: true
        },
        {
          name: "What next",
          main_desc: "Locate the minted NFT within your artist profile. This is usually in a section that displays all the NFTs associated with your account.",
          main_desc1: "Find the section that displays the tiers associated with your NFT. Each tier may be represented by a square or icon.",
          main_desc2: "Click on the cog (settings) icon inside the square representing the tier you want to update. This will open a menu or form where you can input information for that specific tier. Fill in the relevant details such as additional content, perks, or exclusives associated with that particular tier. Repeat this process for each tier you want to update.",
          main_desc3: "Once you've provided the desired information for each tier, make sure to save your changes. This ensures that the updated tier details are associated with your minted NFT.",
          main_desc4: "Creating a New Collection: In addition to updating tier information, you may want to organize your NFTs into collections. Find the 'New Collection' Button. Click on the 'New Collection' button, and you will be prompted to name your collection. Enter a name that represents the theme or concept of the collection.",
          display: false
        },
      ],
    }
  },
  head() {
    const title = "Quick Tip Help Form"
    return {
      title,
    }
  },
  mounted() {
  this.$gtag.pageview({ page_path: this.$route.path }); // Google Analytics
  },
  methods: {
   
  }
};
</script>

<style src="~/assets/styles/pages/quick-tip-help.scss" lang="scss" />