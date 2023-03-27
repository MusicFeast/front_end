<template>
  <div id="community-chat-modals">
    <v-dialog v-model="modalCommunityChat" max-width="500px" content-class="nft-dialog" persistent>
      <v-btn icon class="close" @click="modalCommunityChat = false">
        <v-icon large>mdi-close</v-icon>
      </v-btn>

      <v-window touchless>
        <v-window-item>
          <v-card id="modalCommunityChat" class="nft-dialog--content">
            <!-- <h3>Decline The offer?</h3> -->
            <p class="p">Return to the <span style="text-decoration: underline" @click="$router.push(localePath('/artists'))">artist</span> page to find the community chat.</p>

            <div class="fwrap gap2 bold" style="margin-top: 2em">
              <v-btn
                :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 16px; --bg: #fff; --c: var(--primary)"
              >Click to verify your membership pass</v-btn>
              <v-btn
                :ripple="false" class="btn activeBtn" style="--w: min(100%, 12em); --fs: 16px"
              >Create Discord account to interact with the platform</v-btn>
            </div>
          </v-card>
        </v-window-item>
      </v-window>
    </v-dialog>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "ProifleModals",
  mixins: [computeds],
  data() {
    return {
      modalCommunityChat: false,
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/components/modals.scss" lang="scss" />
