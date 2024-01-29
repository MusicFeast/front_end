<template>
  <div id="quick-tip-help-3-4" class="divcol">
    <h2 class="tup tcenter" style="color: var(--primary);">Music feast merchandise quick tip help guide</h2>

    <!-- <div class="divrow center delete-in-mobile" style="gap: 20px; margin-block: 100px;">
      <img src="~/assets/sources/images/person-cap.png" alt="cap" class="animated-img-up">
      <img src="~/assets/sources/images/shirt.png" alt="cap" class="animated-img-down">
      <img src="~/assets/sources/images/5-shirts.png" alt="cap" class="static-img">
      <img src="~/assets/sources/images/cup.png" alt="cap" class="animated-img-down">
      <img src="~/assets/sources/images/cap.png" alt="cap" class="animated-img-up">
    </div> -->

    <div class="center divcol mt-16 mb-16 margin-block-mobile">
      <h2 class="tcenter mb-16 margin-block-mobile">
        Music Feast merchandise works differently than normal merchandise manufacturers
      </h2>

      <p class="p mobile-text-align">
        We allow users to purchase limited-edition artist merch for manufacturing or for transferring. When you purchase merchandise on Music Feast you are purchasing the right to manufacture the merch item or to hold on to it.<br>
        <br>Using a unique NFT-based system, we allow users to reserve the right to order the merch and/or to transfer it. This creates a one-of-a-kind ownership experience that allows users to PURCHASE, REDEEM, HOLD, and TRANSFER their merchandise orders.<br>
        <br><b>Below is an explanation of how Music Feast Merchandise works:</b>
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
  name: "QuickTipHelp34Page",
  mixins: [computeds],
  data() {
    return {
      panelsData: [
        {
          name:"Purchase",
          main_desc: "Non-Fungible Tokens (NFTs) are digital assets that represent ownership or proof of authenticity of a unique item or piece of content, such as digital artwork, collectibles, or even physical merchandise. When it comes to purchasing an NFT that represents physical merch, here's how it typically works:",
          title1:"Authenticity and Ownership Proof:", 
          description1: "By associating an NFT with physical merchandise, the token serves as a digital certificate of authenticity and proof of ownership. It verifies the item's uniqueness and establishes a digital record of its origin.",
          title2: "Creation and Minting:",
          description2:"The creator or issuer of the physical merchandise decides to create an NFT to accompany it. This creates a digital representation of the item, often including details like images, descriptions, and other relevant information. This digital representation is then minted as an NFT on a specific blockchain network.",
          title3: "Purchase and Ownership Transfer:",
          description3: "Buyers interested in owning the physical merchandise can purchase the corresponding NFT representing it. This transaction typically takes place on an NFT marketplace or platform. Upon purchasing the NFT, ownership of the physical merchandise is transferred to the buyer.",
          title4: "Transfer of Physical Merchandise: ",
          description4: "After the NFT is purchased, the seller arranges the physical delivery of the merchandise to the buyer. This may involve shipping the item directly or arranging for pickup, depending on the logistics and agreements between the parties involved.",
          title5: "NFT as Proof of Ownership:",
          description5: "The buyer now owns both the physical merchandise and the associated NFT. The NFT serves as a digital proof of ownership, providing transparency and ensuring the item's authenticity and provenance. The buyer can showcase or display the NFT in digital collections, verifying their ownership and potentially gaining additional benefits tied to the NFT, such as exclusive content, access, or experiences.",
          last_desc:"By purchasing an NFT that represents physical merchandise, buyers can benefit from the added layer of trust, authenticity, and verifiability provided by blockchain technology. The NFT acts as a bridge between the digital and physical worlds, offering a unique and traceable ownership experience for tangible items.",
        },
        {
          name:"Redeem",
          main_desc: "The term REDEEM typically refers to the process of exchanging or converting something, such as a voucher, coupon, or token, for a specific value, product, or service. In various contexts, the act of redeeming involves utilizing or claiming something that has been previously acquired or obtained. Here are a few common scenarios where the term REDEEM is often used:",
          title1:"Redeeming a Voucher or Coupon:", 
          description1: "When you have a voucher or coupon, you can redeem it by presenting it to the appropriate vendor or retailer to receive the specified discount, free item, or other benefits associated with it. The vendor will then verify the voucher's validity and provide the corresponding goods or services.",
          title2: "Redeeming Points or Rewards:",
          description2: "Many loyalty programs or credit card schemes offer points or rewards that can be redeemed for various benefits. This could include redeeming points for merchandise, flights, hotel stays, gift cards, or other perks, depending on the program's offerings. The accumulated points are exchanged for the chosen reward.",
          title3: "Redeeming Gift Cards or Gift Certificates:",
          description3: "If you have received a gift card or gift certificate, you can redeem it by presenting it at the designated store or online platform. The value of the card or certificate will be subtracted from the total purchase amount, allowing you to obtain goods or services up to the card's value.",
          title4: "Redeeming Digital Assets: ",
          description4: "In the context of NFTs (Non-Fungible Tokens), some platforms or projects allow users to redeem their NFTs for specific physical or digital items. For example, an NFT representing a concert ticket may be redeemable for entry to a live event or a digital NFT artwork could be redeemed for a physical print.",
          last_desc:"In general, the act of redeeming involves exchanging or utilizing a specific item or entitlement to access the associated value, product, or service. The exact process and requirements for redemption can vary depending on the context and the specific terms and conditions set by the issuer or provider of the item being redeemed.",
        },
        {
          name:"Hold",
          main_desc: "When you HOLD an NFT (Non-Fungible Token), it means that you possess ownership or control over a specific digital asset represented by the NFT. Holding an NFT typically involves acquiring it and keeping it in your digital wallet or associated account. Here's how holding an NFT generally works:",
          title1:"Acquiring an NFT:", 
          description1: "To hold an NFT, you need to acquire it first. NFTs are typically obtained by purchasing them from NFT marketplaces such as Music Feast or participating in auctions or sales events. Each NFT represents a unique digital item, such as artwork, collectibles, virtual real estate, or even representations of physical merchandise.",
          title2: "Digital Wallet:",
          description2: "Once you own an NFT, you need a digital wallet that supports the specific blockchain on which the NFT is minted. Common blockchain networks for NFTs include Ethereum, Binance Smart Chain, Flow, and others. Your digital wallet functions as a secure storage space for your NFTs and interacts with the blockchain to manage your holdings. [Learn More About Digital Wallets]",
          title3: "NFT Transfer:",
          description3: "When you acquire an NFT, the ownership rights associated with the digital asset are transferred to your wallet address on the blockchain. This transfer is recorded on the blockchain's decentralized ledger, providing proof of ownership and transaction history.",
          title4: "Display and Management:",
          description4: "Within your digital wallet or associated account, you can view and manage your NFT holdings. Depending on the wallet or platform you use, you may have options to organize, categorize, or display your NFT collection. Some platforms also provide additional features, such as the ability to showcase your NFTs in virtual galleries or social environments, like Music Feast.",
          title5: "Interacting with NFTs:",
          description5: "Holding an NFT grants you certain rights and privileges associated with the specific digital asset. For example, if you hold an NFT representing digital artwork, you may have the ability to display or exhibit it in virtual spaces, sell or trade it on NFT marketplaces, such as Music Feast, or access exclusive content or experiences tied to the artwork.",
          title6: "Transferring or Selling NFTs:",
          description6: "If you decide to sell or transfer your NFT, you can initiate a transaction through your digital wallet or a compatible NFT marketplace, like Music Feast. This transfer involves changing ownership on the blockchain, and once completed, the recipient will become the new holder of the NFT.",
          title7: "Holding an NFT:",
          description7: "This allows you to retain ownership of a unique digital asset and exercise control over its use and distribution. The decentralized nature of blockchain technology ensures transparency, security, and verifiability of ownership for NFT holders.",
        },
        {
          name: "Transfer",
          main_desc: "Transferring an NFT (Non-Fungible Token) involves moving the ownership rights of the digital asset from one party to another. Here's how the process of transferring an NFT generally works:",
          title1: "Initiating the Transfer:",
          description1: "To begin the transfer process, the current owner of the NFT needs to initiate the transfer from their digital wallet or associated platform. This usually involves specifying the recipient's wallet address to whom the NFT will be transferred.",
          title2:"Confirmation and Approval:",
          description2: "After initiating the transfer, the blockchain network on which the NFT is hosted requires confirmation of the transaction. Depending on the blockchain's consensus mechanism, this confirmation may involve verification by network validators or miners. The process typically requires a certain number of confirmations to ensure the transaction's validity and security.",
          title3: "Updating Ownership on the Blockchain:",
          description3: "Once the transfer is confirmed, the ownership rights of the NFT are updated on the blockchain's decentralized ledger. The transfer transaction is recorded and becomes part of the permanent transaction history, providing a transparent record of the ownership change.",
          title4: "Verification of Transfer:",
          description4: "Both the sender and the recipient can verify the transfer by checking the blockchain's transaction details. They can review the transaction hash (a unique identifier) to confirm that the transfer has taken place successfully and that the recipient now holds the NFT.",
          title5: "Receiving the NFT:",
          description5: "The recipient of the NFT receives ownership rights and control over the digital asset once the transfer is completed. The NFT appears in their digital wallet or associated account, and they can manage, display, or interact with the NFT as desired.",
          last_desc: "It's important to note that during the transfer process, some NFTs may have additional conditions or limitations set by the creator or issuer. For example, there might be restrictions on subsequent transfers, commercial use, or other terms outlined in the smart contract associated with the NFT.",
          last_desc2: "The transfer of NFTs is facilitated by the underlying blockchain technology, which ensures secure, transparent, and immutable record-keeping of ownership changes. By leveraging the decentralized nature of blockchains, NFT transfers provide a reliable and verifiable way to transfer digital assets from one party to another.",
        },
      ],
    }
  },
  head() {
    const title = "Quick Tip Help 3 4"
    return {
      title,
    }
  },
  mounted() {
    this.$gtag.pageview({ page_path: this.$route.path }); // Google Analytics
  },
 
  methods: {
   
  },
};

</script>

<style src="~/assets/styles/pages/quick-tip-help-3-4.scss" lang="scss" />
