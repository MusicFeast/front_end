export default {
  computed: {
    baseUrl() {
      return this.$axios.defaults.baseURL
    },
    isLogged() {
      return this.$ramper.getUser()
    },
    user() {
      return this.$store.state.dataUser
    },
    news() {
      return JSON.parse(localStorage.getItem("news"))
    },
    event() {
      return JSON.parse(localStorage.getItem("event"))
    },
    offer() {
      const offer = JSON.parse(localStorage.getItem("offer"))
      if (offer) {
        return offer
      }
      return {token: null}
    },
    nft() {
      return JSON.parse(localStorage.getItem(
        this.$route.path.includes("/user-nft") ? "user-nft" : "nft"
      ))
    },
    nft_details() {
      return JSON.parse(localStorage.getItem(
        this.$route.path.includes("/user-nft") ? "user-nft" : "nft"
      ))
    },
    collection() {
      return JSON.parse(localStorage.getItem("collection"))
    },
  }
}
