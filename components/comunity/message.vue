<template>
  <div class="message-chat">
    <img
      v-if="answered"
      src="@/assets/sources/icons/arrow-answered.svg" alt="arrow icon"
      class="arrow-answered"
    >

    <avatar-tier
      :src="testImage"
      sizes="55"
      class="user-avatar"
    />

    <aside
      v-if="answered"
      class="answered-message d-flex align-center"
      style="gap: var(--gap-names);"
    >
      <div class="d-flex align-center" style="gap: var(--gap-spacing)">
        <avatar-tier
          :src="testImage"
          sizes="32"
        />

        <h6 class="answered-message-name mb-0">Artist name 🤘</h6>
      </div>

      <p
        class="answered-message-text mb-0"
        title="Donec hendrerit ex augue, ut suscipit libero ornare eget. Nulla quis sem nulla. Morbi molestie fringilla mi nec pulvinar. Morbi commodo fringilla ligula ut hendrerit. Morbi lacinia dictum sapien quis vulputate. Quisque ullamcorper diam non ipsum viverra, eget euismod est venenatis. Aliquam quis leo vel nunc porttitor rhoncus."
      >
        Donec hendrerit ex augue, ut suscipit libero ornare eget. Nulla quis sem nulla. Morbi molestie fringilla mi nec pulvinar. Morbi commodo fringilla ligula ut hendrerit. Morbi lacinia dictum sapien quis vulputate. Quisque ullamcorper diam non ipsum viverra, eget euismod est venenatis. Aliquam quis leo vel nunc porttitor rhoncus.
      </p>
    </aside>

    <aside class="message d-flex flex-column" style="gap: var(--gap-spacing);">
      <div class="d-flex" style="gap: var(--gap-names);">
        <h6 class="message-name mb-0">User name 🤑</h6>

        <span class="text-date">03 / 10 /2023</span>
      </div>

      <p class="message-text mb-0">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tincidunt lacus nec fermentum semper. Donec nec tempor mauris. Curabitur suscipit, enim at condimentum pharetra, nisi urna blandit sem, non ullamcorper arcu leo ut ligula. Pellentesque molestie sapien iaculis lectus bibendum blandit. Integer ultricies enim quam, mattis pharetra nisl dignissim a.
      </p>
    </aside>
  </div>
</template>

<script>
export default {
  name: "MessageComponent",
  props: {
    answered: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      testImage: 
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
    }
  },
}
</script>

<style lang="scss">
.message-chat {  
  --gap-names: 20px;
  --gap-spacing: 10px;

  margin-top: 40px;
  margin-inline: 16px;
  display: grid;
  grid-template-areas:
    "arrow answered"
    "img message";
  grid-template-columns: max-content 1fr;
  grid-gap: 5px 10px;


  .arrow-answered {
    grid-area: arrow;
    margin-left: auto;
    margin-right: -4px;
    animation: showArrow .2s ease;
  }
  

  .user-avatar {
    grid-area: img;
  }


  [class*="name"] {
    font-size: 16px !important;
    font-weight: 700 !important;
    width: max-content;
  }


  .answered-message {
    grid-area: answered;
    transform: translateY(calc(var(--gap-spacing) * -1));
    animation: showArrow .2s ease;

    &-text {
      font-size: 14px !important;
      color: var(--responded) !important;

      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }


  .message {
    grid-area: message;

    &-text {
      font-size: 16px !important;
    }
  }

  
  @keyframes showArrow {
    0% { opacity: 50%; transform: translateY(95%) }
    100% { opacity: 100%; transform: translateY(0) }
  }
}
</style>
