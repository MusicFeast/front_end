<template>
  <div id="contest-home" class="center">
    <div class="divrow mobile-height" style="height: 500px;">
      <div class="divcol astart mobile-align" style="gap: 35px; min-width: 40%!important;">
        <h2 class="delete-mobile tup" style="color: var(--primary); line-height: 60px;">Music <br> Production <br> Contest</h2>
        <h2 class="show-mobile p tup tcenter" style="color: var(--primary);">Music Production Contest</h2>
        <span class="tcenter" style="font-size: 16px!important;">We are Giving Away Thousands of Dollars in Prizes</span>
        <v-btn class="btn" style="--w: 180px;" @click="redirectToContest()">Contest Form</v-btn>
      </div>
      <div class="divrow center margin-mobile-left" style="gap: 30px; ">
        <div v-for="(item,index) in dataImg" :key="index" class="container-img">
          <img :src="item.img" alt="dj image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "ContestSection",
  mixins: [computeds],
  data() {
    return {
      dataImg:[
        {
          img: require("~/assets/sources/images/dj.svg")
        },
        {
          img: require("~/assets/sources/images/mixin.svg")
        },
        {
          img: require("~/assets/sources/images/edit.svg")
        },
      ],
    }
  },
  methods: {
    redirectToContest() {
      // Redirige a contest.vue con el anclaje contest-form
      this.$router.push({ path: 'contest', hash: 'contest-form' });
    },
  }
};
</script>

<style lang="scss">
#contest-home{
  position: relative;
  padding-block: 2em;
  padding-inline: 2em;
  .margin-mobile-left{
    margin-left: 20px;
    @include media(max, 1280px){
      margin-left: 20px;
    }

    @include media(max, 1280px){
      margin-left: 80px;
    }

    @include media(max, 960px){
      display: none;
    }
  }

  .mobile-height{
    @include media(max, 960px){
      height: max-content!important;
      justify-content: center;
      align-items: center;
      gap: 15px!important;
      margin-bottom: -20px;
    }
  }

  .show-mobile{
    display: none;
    @include media(max, 960px){
      display: inline;
    }
  }

  .delete-mobile{
    @include media(max, 960px){
      display: none;
    }
  }

  .mobile-align{
    @include media(max, 960px){
      justify-content: center;
      align-items: center;
      gap: 20px!important;
    }
  }

  .container-img{
  width: 250px; 
  height: 100%; 
  overflow: hidden;
  position: relative;
  transform: skewX(-10deg);
  transform-origin: top left;

  @include media(max, 1450px){width: 200px;}
  @include media(max, 1200px){width: 150px;}
  @include media(max, 1070px){width: 150px;}


    img{
       width: 90%; 
       height: 100%; 
       object-fit: cover;    
    }
  }

  .container-img:nth-child(2){
    margin-top: 50px;
  }

  .container-img:nth-child(3){
    margin-top: 100px;
  }
}

</style>
