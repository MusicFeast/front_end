<template>
  <v-dialog v-model="modalConnect" content-class="modal-connect divcol relative isolate">
    <aside class="space">
      <span class="h9_em">Connect Wallet</span>
      
      <v-btn icon @click="modalConnect = false">
        <v-icon size="1.5em">mdi-close</v-icon>
      </v-btn>
    </aside>

    <v-sheet class="grid" color="transparent">
      <v-btn plain @click="$store.commit('signIn', 'near')">
        <img src="~/assets/sources/logos/near-wallet-icon.svg" alt="near">
        
        <div class="divcol astart" style="gap: 5px">
          <span class="h12_em bold">NEAR</span>
          <span class="h13_em">wallet.near.org</span>
        </div>
      </v-btn>
      
      <v-btn plain color="hsl(0 0% 0% / .5)" @click="$store.commit('signIn', 'myNear')">
        <img src="~/assets/sources/logos/my-near-wallet-icon.svg" alt="near">
        
        <div class="divcol astart" style="gap: 5px">
          <span class="h12_em bold">MyNearWallet</span>
          <span class="h13_em">mynearwallet.com</span>
        </div>
      </v-btn>
      
      <v-btn plain color="hsl(0 0% 0% / .5)" @click="$store.commit('signIn', 'sender')">
        <img src="~/assets/sources/logos/sender-icon.svg" alt="near">
        
        <div class="divcol astart" style="gap: 5px">
          <span class="h12_em bold">Sender</span>
          <span class="h13_em">sender.org</span>
        </div>
      </v-btn>
    </v-sheet>
    <v-sheet class="grid" color="transparent">
      {{user}}

      <v-btn plain color="hsl(0 0% 0% / .5)" @click="loginRamper()">
        <div class="divcol astart" style="gap: 5px">
          <span class="h12_em bold">Login Ramper</span>
        </div>
      </v-btn>
      <v-btn plain color="hsl(0 0% 0% / .5)" @click="handleSignOut()">
        <div class="divcol astart" style="gap: 5px">
          <span class="h12_em bold">Logout Ramper</span>
        </div>
      </v-btn>
      <v-btn plain color="hsl(0 0% 0% / .5)" @click="openWalletView()">
        <div class="divcol astart" style="gap: 5px">
          <span class="h12_em bold">Open Wallet</span>
        </div>
      </v-btn>

      <v-btn plain color="hsl(0 0% 0% / .5)" @click="sendSampleTransaction()">
        <div class="divcol astart" style="gap: 5px">
          <span class="h12_em bold">Call</span>
        </div>
      </v-btn>
    </v-sheet>
  </v-dialog>
</template>

<script>
import { AUTH_PROVIDER, CHAIN,getUser, init, openWallet, sendTransaction, signIn, signOut, THEME, WALLET_PROVIDER } from "@ramper/near";
import { transactions } from 'near-api-js'
import BN from "bn.js";

init({
  appName: 'Near Test App',
  chainName: CHAIN.NEAR,
  walletProviders: [WALLET_PROVIDER.NEAR_WALLET],
  theme: THEME.LIGHT,
  network: 'testnet',
  authProviders: [
    AUTH_PROVIDER.GOOGLE,
    AUTH_PROVIDER.FACEBOOK,
    AUTH_PROVIDER.EMAIL
  ]
})

export default {
  name: "ConnectModal",
  data() {
    return {
      user: getUser(),
      modalConnect: false,
    };
  },
  mounted() {
    console.log("user",this.user)
  },
  methods: {
    async loginRamper() {
      const userData = await signIn()
      this.user = userData.user || null
    },
    handleSignOut() {
      signOut()
      this.user = null
    },
    openWalletView() {
      openWallet()
    },
    async sendSampleTransaction() {
      const actions2 = [transactions.transfer(new BN(10000000))]
      const res = await sendTransaction({
        transactionActions: [
          {
            receiverId: 'hrpalencia.testnet',
            actions: actions2,
          },
        ],
        network: 'testnet',
      })
      console.log("Transaction Result: ", res)
    }
  }
};
</script>

<style lang="scss">
.modal-connect {
  @include card;
  --min-w: 330px;
  --w: max-content;
  --br: 30px;
  --bg: #272727;
  --p: 30px;
  --tt: capitalize;
  gap: 20px;
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background-clip: content-box, border-box;
    background-image: linear-gradient(var(--bg),var(--bg)),
      linear-gradient(135deg, rgba($primary,.2), rgba($accent,.2));
    z-index: -1;
  }

  i {color: hsl(225 225% 225% / .5) !important}

  .v-sheet.grid {
    @include media(min, 500px) {--gtc: 1fr 1fr}
    gap: 20px;
    .v-btn {
      --fs: 20px;
      width: 100%;
      min-height: 70px;
      border-radius: 10px;
      background-color: hsl(0 0% 0% / .2);
      transition: .2s $ease-return;
      &:hover {
        background-color: hsl(0 0% 0% / .4);
        transform: translateY(-5px) !important;
      }
      &__content {
        justify-content: flex-start;
        gap: 10px;
        img {
          --w: 40px;
          --of: cover;
        }
        span + span {
          --c: hsl(225 225% 225% / .5);
        }
      }
    }
  }
}
</style>
