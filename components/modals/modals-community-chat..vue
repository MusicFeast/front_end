<template>
  <v-dialog v-model="modalCommunityChat" max-width="500px" content-class="nft-dialog" persistent>
    <v-btn icon class="close" @click="modalCommunityChat = false">
      <v-icon large>mdi-close</v-icon>
    </v-btn>

    <v-window touchless>
      <v-window-item>
        <v-card id="modalCommunityChat" class="nft-dialog--content">
          <!-- <h3>Decline The offer?</h3> -->
          <p class="p">Congratulations on your purchase! 🎉 You can now go to your dashboard or artist page to explore more about your purchase. Additionally, remember that you can verify the artist chat in the <a href="/chat">Chat</a> section to further engage with them. Enjoy!</p>

          <div class="fwrap gap2 bold" style="margin-top: 2em">
              <v-btn
              class="btn activeBtn"
              :ripple="false"
              @click="$router.push(localePath('/edit-profile'))"
            >
              My Dashboard
            </v-btn>
            <v-btn
              class="btn activeBtn"
              :ripple="false"
              @click="
                $router.push(localePath('/artists'))
              "
            >
              Artist Page
            </v-btn>
          </div>
        </v-card>
      </v-window-item>
    </v-window>
  </v-dialog>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "ComunityChatModals",
  mixins: [computeds],
  data() {
    return {
      modalCommunityChat: true,
      verify_url:""
    };
  },
  mounted() {
    this.verify_url = process.env.VERIFY_URL
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/components/modals.scss" lang="scss" />
