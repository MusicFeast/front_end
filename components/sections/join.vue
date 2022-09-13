<template>
  <div id="join" class="center">
    <article class="divcol center gap2">
      <h2>Join the community</h2>
      <p class="tcentermobile">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laborum aliquid aperiam minima nulla voluptatem sequi 
        perferendis doloribus molestias doloremque. Omnis dolorum recusandae unde rem eos quam minima vero nihil.
      </p>
      <div class="center wrap" style="gap: clamp(2em, 4vw, 4em)">
        <v-btn class="btn" style="--bg: #fff; --c: var(--primary); --w: 8.5em">Join</v-btn>
        <v-btn class="btn" style="--w: 8.5em">Marketplace</v-btn>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "JoinSection",
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/components/sections/join.scss" lang="scss" />
