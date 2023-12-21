<template>
  <div id="comunity__chat" class="d-flex flex-column flex-grow-1">
    <v-menu
      activator="#emojiPickerBtn"
      :close-on-content-click="false"
      top
      left
    >
      <VEmojiPicker id="emojiPicker" @select="selectEmoji" />
    </v-menu>

    <!-- <aside id="comunity__chat-info">
      <span>More than 45 new messages since 13:30 on October 10, 2023</span>

      <v-btn text>
        <span>Mark as read</span>
        <v-icon size="20" class="ml-2">mdi-check</v-icon>
      </v-btn>
    </aside> -->

    <section id="comunity__chat-body" class="d-flex flex-grow-1">
      <!-- <ComunityMessage answered /> -->

      <!-- <ComunityMessageDivider date-time="05 / Nov / 2023" /> -->

      <ComunityMessage :messages="messages" @show-answered="answered = true" />
    </section>

    <aside id="comunity__chat-input">
      <div
        id="comunity__chat-input-answered"
        class="d-flex"
        :class="{ answer: answered }"
        style="gap: 10px"
      >
        <span class="text-labeled">answer to</span>

        <img
          src="@/assets/sources/icons/arrow-answered-simple.svg"
          alt="arrow icon"
        />

        <h6 v-show="search" class="mb-0">Artist name 🤘</h6>

        <v-icon size="18" @click="answered = false">mdi-close</v-icon>
      </div>

      <v-text-field
        :disabled="!getChatSelect || !$ramper.getAccountId()"
        v-model="messageContent"
        solo
        hide-details
        class="flex-grow-0"
        @keydown.enter="sendMessage"
      >
        <template #append>
          <v-icon :disabled="!messageContent" @click="sendMessage()"
            >mdi-send</v-icon
          >
          <v-icon id="emojiPickerBtn" class="pointer"
            >mdi-emoticon-outline</v-icon
          >
        </template>
      </v-text-field>
    </aside>
  </div>
</template>

<script>
import { VEmojiPicker } from 'v-emoji-picker'
import computeds from '~/mixins/computeds'

export default {
  name: 'ComunityChat',
  mixins: [computeds],
  components: {
    VEmojiPicker,
  },
  computed: {
    getChatSelect() {
      if (this.$store.getters.getChatSelect) {
        this.getMessages(this.$store.getters.getChatSelect)
      }
      return this.$store.getters.getChatSelect
    },
    artistSelect() {
      return this.$store.getters.getArtistSelect
    },
    search() {
      this.debounce(this.$store.getters.getSearch)
      return true
    },
  },
  data() {
    return {
      messageContent: '',
      answered: false,
      messages: [],
      messagesData: [],
      chatSelect: null,
      searchItem: '',
    }
  },
  // mounted() {
  // },
  methods: {
    debounce(item) {
      this.searchItem = item
      clearTimeout(this.timer)
      // this.auxDebounce = true
      this.timer = setTimeout(this.inputSearch, 500)
    },
    inputSearch() {
      this.messages = this.messagesData.filter((item) => {
        return item.content
          ?.toLowerCase()
          .includes(this.searchItem.toLowerCase())
      })
    },
    sendMessage() {
      if (this.messageContent) {
        const messageInfo = {
          wallet: this.$ramper.getAccountId(),
          username: this.user.username || this.$ramper.getAccountId(),
          avatar: this.user.avatar,
          content: this.messageContent,
          created: Date.now(),
        }

        this.$fire.firestore
          .collection('ARTISTS')
          .doc(this.artistSelect?.id)
          .collection('CHATS')
          .doc(this.chatSelect.id)
          .collection('MESSAGES')
          .add(messageInfo)

        this.messageContent = ''
      }
    },
    selectEmoji(event) {
      this.messageContent = this.messageContent + event.data
    },
    getMessages(item) {
      this.chatSelect = item
      this.$fire.firestore
        .collection('ARTISTS')
        .doc(this.artistSelect?.id)
        .collection('CHATS')
        .doc(item.id)
        .collection('MESSAGES')
        .orderBy('created')
        .onSnapshot((snapshot) => {
          const postData = []

          snapshot.forEach((doc) => {
            const item = { ...doc.data(), id: doc.id, active: false }
            postData.push(item)
          })
          this.messagesData = postData

          if (this.searchItem) {
            this.messages = this.messagesData.filter((item) => {
              return item.content
                ?.toLowerCase()
                .includes(this.searchItem.toLowerCase())
            })
          } else {
            this.messages = postData
          }
        })
    },
  },
}
</script>

<style lang="scss">
#comunity__chat {
  isolation: isolate;
  position: relative;
  overflow: hidden;

  &-info {
    position: absolute;
    top: 0;
    left: 0;
    right: 8px;
    min-height: 48px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: var(--secondary);
    mix-blend-mode: multiply;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 16px;
    z-index: 2;
    animation: moveBanishDown 0.2s ease;

    span {
      font-size: 15px !important;
      font-weight: 600 !important;
    }

    .v-btn {
      border-radius: 10px !important;
    }
  }

  &-body {
    flex-direction: column-reverse;
    height: calc(
      var(--chat-height) - (var(--header-height) + (52px + 24px))
    ); // <-- input height
    overflow-y: auto;
    scrollbar-gutter: stable;
  }

  &-input {
    position: relative;

    &-answered {
      top: -50px;
      position: absolute;
      margin-inline: 12px 24px;
      margin-top: 12px;
      padding-bottom: 12px;

      padding-inline: 16px;
      padding-top: 10px;
      background-color: hsl(222, 8%, 23%, 0.9);
      backdrop-filter: blur(5px);
      max-width: max-content;
      border-radius: 8px;
      opacity: 0;

      &.answer {
        opacity: 1;
        animation: moveBanishDown 0.2s ease;
      }

      h6 {
        font-size: 16px !important;
        font-weight: 700 !important;
        width: max-content;
      }
    }

    .v-input {
      margin-inline: 12px 24px;
      margin-block: 12px;

      &__slot {
        background-color: var(--input) !important;
        padding-inline: 16px !important;
        padding-block: 10px !important;
        border-radius: 8px !important;
      }

      input {
        font-size: 16px !important;
      }

      &__append-inner {
        gap: 8px;

        *,
        :before,
        ::after {
          color: var(--labeled) !important;
        }
      }
    }
  }
}
</style>
