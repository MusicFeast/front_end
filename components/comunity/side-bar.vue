<template>
  <nav id="comunity__sider-bar">
    <div
      v-for="(item, i) in data" :key="i"
      class="container-image"
      :class="{ active: i==2 }"
      :style="`--messages: '${22}'`"
    >
      <avatar-tier
        :src="item"
        width="100%"
        :aspect-ratio="1/1"
        :tier="i==2 ? 4 : 0"
      />
    </div>
  </nav>
</template>

<script>
export default {
  name: "ComunitySideBar",
  data() {
    return {
      data: [
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
      ]
    }
  }
}
</script>

<style lang="scss">
$line-width: 8px;

#comunity__sider-bar {
  min-width: var(--side-bar-width);
  // position: absolute;
  // top: 0;
  // left: calc(var(--side-bar-width) * -1);
  // bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: $line-width;
  padding-right: $line-width + 1px;
  background-color: #2b2e33;
  overflow-y: auto;

  &::-webkit-scrollbar { display: none }


  .container-image {
    isolation: isolate;
    position: relative;
    cursor: pointer;
    &.active:before{ height: 100% }

    &:before {
      content: "";
      background-color: var(--primary);
      position: absolute;
      top: 0;
      bottom: 0;
      left: -$line-width * 1.5;
      margin-block: auto;
      width: $line-width;
      height: 16px;
      border-radius: 10px;

      transition: .4s ease;
    }

    &::after {
      content: var(--messages);
      background-color: var(--primary);
      border: 2px solid #363940;
      border-radius: 30px;
      position: absolute;
      right: -5px;
      bottom: 0;
      font-size: 11px;
      font-weight: 500 !important;
      padding-inline: 5px;
    }
  }
}
</style>
