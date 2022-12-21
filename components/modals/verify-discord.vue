<template>
  <v-dialog v-model="varDialog" content-class="modal-connect divcol relative isolate" persistent>
    <aside class="space">
      <span class="h9_em">Accept Synchronization</span>
      
      <v-btn icon @click="closeDialog()">
        <v-icon size="1.5em">mdi-close</v-icon>
      </v-btn>
    </aside>

    <v-sheet class="grid" color="transparent">
      <span class="h12_em bold">Email</span>
      <img :src="userAvatar" alt="near">
      <v-btn plain color="hsl(0 0% 0% / .5)" @click="connectDiscord()">
        <div class="divcol astart" style="gap: 5px">
          <span class="h12_em bold">Connect</span>
          <!-- <span class="h13_em">ramper.xyz</span> -->
        </div>
      </v-btn>
    </v-sheet>
  </v-dialog>
</template>

<script>
import computeds from '~/mixins/computeds'
export default {
  name: "VerifyModal",
  mixins: [computeds],
  data() {
    return {
      userDc: {},
      varDialog: false,
      userAvatar: null,
    };
  },
  mounted() {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    console.log("fragmen", fragment)
    const [accessToken] = [fragment.get('access_token'), fragment.get('token_type')];

    if (accessToken) {
      const item = {
        access_token: fragment.get('access_token'),
        token_type: fragment.get('token_type')
      }
      localStorage.setItem('discord_sinc', JSON.stringify(item))
    }

    if (JSON.parse(localStorage.getItem('discord_sinc'))) {
      if (this.$ramper.getUser()) {
        const itemDiscord = JSON.parse(localStorage.getItem('discord_sinc'))
        fetch('https://discord.com/api/users/@me', {
          headers: {
            authorization: `${itemDiscord.token_type} ${itemDiscord.access_token}`,
          },
        })
        .then(result => result.json())
        .then(response => {
          console.log(response)
          const avatar = `https://cdn.discordapp.com/avatars/${response.id}/${response.avatar}.png`

          this.userAvatar = avatar

          this.userDc = response

          this.varDialog = true
        })
        .catch(console.error);
      } else {
        this.$parent.$parent.$refs.connect.modalConnect = true
      }
    }
  },
  methods: {
    closeDialog() {
      this.varDialog = false
      if (JSON.parse(localStorage.getItem('discord_sinc'))) {
        localStorage.removeItem('discord_sinc')
      }
    },
    connectDiscord () {
      const accountId = this.$ramper.getAccountId()
      this.$axios.post(`${this.baseUrl}api/v1/save-user-discord/`, { "wallet": accountId, "discord_id": this.userDc.id })
        .then(result => {
          this.$axios.post("http://localhost:8000/music-feast/botdiscord/active-rol", { "wallet": accountId })
            .then(result => {
              console.log("SUCCESS")
              console.log(result)
            }).catch(err => {
              this.$alert("cancel", {desc: err.message})
              console.error(err);
            })
        }).catch(err => {
          this.$alert("cancel", {desc: err.message})
          console.error(err);
        })
    },
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
