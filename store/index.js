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
  theme: "dark",
  overlay: { opacity: 0.2, color: "black" },
  dataUser: {
    banner: undefined,
    avatar: require('~/assets/sources/images/avatar.png'),
    accountId: undefined,
    username: undefined,
    email: undefined,
    discord: undefined,
    instagram: undefined,
    twitter: undefined,
    telegram: undefined,
    user: false,
    tier: 4,
    balance: 0,
    dataSocial: [],
  },
});

export const mutations = {
  // just for testing tiers
  tierTest(state) {state.dataUser.tier === 6 ? state.dataUser.tier = 1 : state.dataUser.tier++},
  // just for testing tiers

  switchTheme(state, theme) {
    // theme
    state.theme = theme
    localStorage.setItem("theme", theme)
    document.documentElement.className = theme;
    // overlay
    if (theme === "light") { state.overlay.opacity = 0.2; state.overlay.color = "white" }
    else { state.overlay.opacity = 0.5; state.overlay.color = "black" }
  },
  setData(state, data) {
    if (wallet.isSignedIn() && typeof data === 'string') {
      state.dataUser.accountId = data;
      state.dataUser.user = true;
    } else if (wallet.isSignedIn() && typeof data === 'object') {
      state.dataUser.accountId = data.wallet;
      state.dataUser.banner = data.banner ? this.$axios.defaults.baseURL+data.banner : undefined;
      state.dataUser.avatar = data.avatar ? this.$axios.defaults.baseURL+data.avatar : require('~/assets/sources/images/avatar.png');
      state.dataUser.username = data.username || data.wallet;
      state.dataUser.email = data.email;
      state.dataUser.bio = data.bio;
      // find socials
      const [...arrSocials] = Object.entries(data)
      .filter(arr =>
        arr[0] === 'telegram' && arr[1] || arr[0] === 'discord' && arr[1]
        || arr[0] === 'instagram' && arr[1] || arr[0] === 'twitter' && arr[1])
      // set data socials
      arrSocials.forEach(arr => {
        let [keys, values] = arr
        state.dataUser[keys] = values

        if (keys === "telegram") {
          // telegram
          values = `https://t.me/${values}`
        } else if (keys === "discord") {
          // discord
          values = `https://discord.com/channels/${values}`
        } else if (keys === "instagram") {
          // instagram
          keys = 'mdi-instagram'
          values = `https://instagram.com/${values}`
        } else if (keys === "twitter") {
          // twitter
          keys = 'mdi-twitter'
          values = `https://twitter.com/${values}`
        }
        // push data socials
        state.dataUser.dataSocial.push({ icon: keys, link: values })
      })
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
  async getData({commit}) {
    try {
      // connect to NEAR
      const near = await connect(config);
      // create wallet connection
      wallet = new WalletConnection(near);
      // get data user
      this.$axios.post(`${this.$axios.defaults.baseURL}api/v1/get-perfil-data/`, { "wallet": wallet.getAccountId() })
      .then(fetch => {
        // set data profile
        fetch.data[0] ? commit("setData", fetch.data[0]) : commit("setData", wallet.getAccountId());
      // catch error django
      }).catch(error => {
        this.$alert("cancel", {desc: error.message})
        console.error(error);
      })
    // catch error near
    } catch (error) {
      this.$alert("cancel", {desc: error.message})
      console.error(error);
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
            ? `/nft-details`
            : state.dataUser.tier < 3
            ? `/user-nft-details`
            : `/user-nft-details-vip`
          )
        );
      }).catch((error) => {
        this.$alert("cancel", {desc: error.message})
        this.$loadCursorEnd(".v-card")
        console.error(error);
      })
    } else {
      localStorage.setItem(key, JSON.stringify(item))
      this.$router.push(this.localePath(`/${key}-details`));
    }
  },
};

export const getters = {
  pagination: () => ({items, currentPage, itemsPerPage, search, filterA, filterB}) => {
    // filters
    let filters = items;
    // search
    if (search) filters = filters.filter(data => data.name.includes(search))
    // filter A (tier)
    if (filterA) filters = filters.filter(data => data.tier === filterA)
    // filter B (comming)
    if (filterB === 'comming soon') filters = filters.filter(data => data.comming)
    // if mobile
    if (window.innerWidth <= 880) itemsPerPage = itemsPerPage / 2;

    return filters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  }
};

export const modules = {
};
