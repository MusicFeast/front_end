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
    avatar: '',
    accountId: null,
    user: false,
    tier: 6,
    balance: 0,
  },
});

export const mutations = {
  // just for testing tiers
  tierTest(state) {state.dataUser.tier === 6 ? state.dataUser.tier = 1 : state.dataUser.tier++},
  // just for testing tiers

  cambiarTheme(state, theme) {state.theme = theme},
  overlayMethod(state, theme) {
    if (theme === "dark") {state.overlay.opacity = "0.5"; state.overlay.color = "black"}
    if (theme === "light") {state.overlay.opacity = "0.2"; state.overlay.color = "white"}
  },
  getData(state) {
    if (wallet.isSignedIn()) {
      state.dataUser.user = true;
      state.dataUser.accountId = wallet.getAccountId();
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
    this.$router.push(this.localePath({ path: '/' }));
  },
};

export const actions = {
  cambiarTheme({commit}, theme) {
    document.getElementById("theme").href = `/themes/${theme}/theme.css`;
    localStorage.setItem("theme", theme);
    commit( "cambiarTheme", theme)
  },
  async InicializeNear({commit}) {
    // connect to NEAR
    const near = await connect(config);
    // create wallet connection
    wallet = new WalletConnection(near);
    commit( "getData");
  },
  goTo({commit, dispatch}, {item, event}) {
    if (item.type === 'nft') {dispatch("goToNftDetails", {item, event})}
    else if (item.type === 'collection') {dispatch("goToCollectionDetails", {item})}
    else if (item.type === 'artist') {dispatch("goToArtistDetails", {item})}
  },
  goToNftDetails({state, commit}, {item, event}) {
    const target = event.target.parentNode.parentNode
    html2canvas(target, { allowTaint: true }).then((e) => {
      const canvas = e.toDataURL('image/png');
      item = {...item, canvas}
      localStorage.setItem("nft", JSON.stringify(item))
    }).then(() => {
      this.$router.push(
        this.localePath(state.dataUser.tier < 3
          ? `/user-nft-details/`
          : `/user-nft-details-vip/`
        )
      );
    })
  },
  goToCollectionDetails({commit}, {item}) {
    localStorage.setItem("collection", JSON.stringify(item))
    this.$router.push(this.localePath(`/collection-details/`));
  },
  goToArtistDetails({commit}, {item}) {
    localStorage.setItem("artist", JSON.stringify(item))
    this.$router.push(this.localePath(`/artist-details/`))
  },
};

export const getters = {
};
