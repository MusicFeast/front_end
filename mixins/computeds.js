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
    artist() {
      return JSON.parse(localStorage.getItem("artist"))
    },
    event() {
      return JSON.parse(localStorage.getItem("event"))
    },
    nft() {
      return JSON.parse(localStorage.getItem(
        this.$route.path.includes("/user-nft") ? "user-nft" : "nft"
      ))
    },
    collection() {
      return JSON.parse(localStorage.getItem("collection"))
    },
  }
}
