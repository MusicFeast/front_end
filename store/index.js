import html2canvas from 'html2canvas';
import * as nearAPI from 'near-api-js'

const { connect, keyStores, WalletConnection } = nearAPI
const keyStore = new keyStores.BrowserLocalStorageKeyStore()
const config = {
  networkId: "testnet",
  keyStore, 
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};
let wallet = null

export const state = () => ({
  theme: "light",
  overlay: { opacity: 0.2, color: "black" },
  dataUser: {
    banner: undefined,
    avatar: undefined,
    accountId: undefined,
    user: false,
    tier: 2,
    balance: 0,
  },
});

export const mutations = {
  // just for testing tiers
  tierTest(state) {state.dataUser.tier === 6 ? state.dataUser.tier = 1 : state.dataUser.tier++},
  // just for testing tiers

  switchTheme(state, theme) {state.theme = theme},
  overlayMethod(state, theme) {
    if (theme === "dark") {state.overlay.opacity = "0.5"; state.overlay.color = "black"}
    if (theme === "light") {state.overlay.opacity = "0.2"; state.overlay.color = "white"}
  },
  setData(state, data) {
    if (wallet.isSignedIn() && typeof data === 'string') {
      state.dataUser.accountId = data;
      state.dataUser.user = true;
    } else if (wallet.isSignedIn() && typeof data === 'object') {
      state.dataUser.accountId = data.wallet;
      state.dataUser.banner = this.$axios.defaults.baseURL+data.banner;
      state.dataUser.avatar = this.$axios.defaults.baseURL+data.avatar;
      state.dataUser.user = true;
    };
  },
  signIn() {
    wallet.requestSignIn(
      'contract.nearbase.testnet'
    );
  },
  signOut(state) {
    wallet.signOut();
    state.dataUser.user = false;
    this.$router.push(this.localePath('/'));
  },
};

export const actions = {
  switchTheme({commit}, theme) {
    document.getElementById("theme").href = `/themes/${theme}/theme.css`;
    localStorage.setItem("theme", theme);
    commit("switchTheme", theme)
  },
  async getData({commit}, {fetch, get} = {}) {
    try {
      // connect to NEAR
      const near = await connect(config);
      // create wallet connection
      wallet = new WalletConnection(near);
      
      if (get === "wallet") {
        // return near wallet
        return wallet.getAccountId();
      } else {
        // set data profile
        fetch.data[0].wallet ? commit("setData", fetch.data[0]) : commit("setData", wallet.getAccountId());
      }
    } catch (error) {
      this.$alert("cancel", {desc: error.message})
      console.error(error.message);
    }
  },
  goTo({commit, state}, {key, item, event, id}) {
    if (key === 'nft' || key === 'user-nft') {
      const target = event.target.parentNode.parentNode
      this.$loadCursorStart(".v-card");
      html2canvas(target, { allowTaint: true, backgroundColor: "#000" }).then((data) => {
        const canvas = data.toDataURL('image/png')
        item.canvas = canvas
        localStorage.setItem(key, JSON.stringify(item))
        this.$loadCursorEnd(".v-card");
      }).then(() => {
        this.$router.push(
          this.localePath(key === 'nft'
            ? `/nft-details/${id?`:${id}`:''}`
            : state.dataUser.tier < 3
            ? `/user-nft-details/${id?`:${id}`:''}`
            : `/user-nft-details-vip/${id?`:${id}`:''}`
          )
        );
      }).catch((error) => {
        this.$alert("cancel", {desc: error.message})
        this.$loadCursorEnd(".v-card")
        console.error(error.message);
      })
    } else {
      localStorage.setItem(key, JSON.stringify(item))
      this.$router.push(this.localePath(`/${key}-details/${id?`:${id}`:''}`));
    }
  },
};

export const getters = {
};

export const modules = {
};
