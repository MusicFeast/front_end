<template>
  <div id="news">
    <h2 class="p tcenter">Press &amp; News</h2>

    <v-slide-group
      id="slider-news"
      v-model="slider"
      mandatory
      show-arrows
    >
      <v-slide-item v-for="(item,i) in dataNews" :key="i" v-slot="{ toggle }">
        <v-card color="transparent" class="tcentermobile" :ripple="false" @click="toggle">
          <img :src="item.img" :alt="`${item.name} image`" style="--w: 100%; --br: 15px">
          <h3 class="p">{{item.name}}</h3>
          <p class="p">{{item.desc}}</p>
        </v-card>
      </v-slide-item>
      
      <template #prev>
        <v-btn icon class="reverse" v-bind="attrs" v-on="on">
          <v-icon x-large>mdi-play</v-icon>
        </v-btn>
      </template>
      <template #next="{on, attrs}">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon x-large>mdi-play</v-icon>
        </v-btn>
      </template>
    </v-slide-group>
      
    <!-- <section class="wrapper scrollx">
      <v-sheet v-for="(item,i) in dataNews" :key="i" color="transparent">
        <img :src="item.img" :alt="`${item.name} image`" style="--w: 100%; --br: 15px">
        <h3 class="p tcentermobile">{{item.name}}</h3>
        <p class="p">{{item.desc}}</p>
      </v-sheet>
    </section> -->
  </div>
</template>

<script>
export default {
  name: "NewsSection",
  data() {
    return {
      slider: null,
      dataNews: [
        {
          img: require("~/assets/sources/images/img-news-1.jpg"),
          name: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat atque, possimus fugiat iste unde? Dolorum iusto nihil, officia ipsam quasi voluptas unde, neque, quam veritatis animi dolores rem recusandae."
        },
        {
          img: require("~/assets/sources/images/img-news-2.jpg"),
          name: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat atque, possimus fugiat iste unde? Dolorum iusto nihil, officia ipsam quasi voluptas unde, neque, quam veritatis animi dolores rem recusandae."
        },
        {
          img: require("~/assets/sources/images/img-news-2.jpg"),
          name: "Lorem ipsum dolor sit amet,",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat atque, possimus fugiat iste unde? Dolorum iusto nihil, officia ipsam quasi voluptas unde, neque, quam veritatis animi dolores rem recusandae."
        },
      ],
    }
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/components/sections/news.scss" lang="scss" />
