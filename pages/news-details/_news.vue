<template>
  <div id="news-details">
    <h2 class="Title tup">press &amp; news</h2>


    <h2 class="Title tup">other news</h2>

    <v-slide-group
      v-model="slider"
      mandatory
      show-arrows
      class="custome-slider"
      :style="`padding-inline: ${dataNews.length >= 4 ? '0' : 'var(--margin-separator)'}`"
    >
      <v-slide-item v-for="(item,i) in dataNews" :key="i" v-slot="{ toggle }">
        <v-card class="card tcentermobile" :ripple="false" @click="toggle">
          <img :src="item.img" :alt="`${item.name} image`" style="--w: 100%; --br: 5px">
          <h3 class="p">{{item.name}}</h3>
          <p class="p">{{item.desc}}</p>
        </v-card>
      </v-slide-item>
      
      <template #prev="{ on, attrs}">
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
  </div>
</template>

<script>
export default {
  name: "NewsDetailsPages",
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
          img: require("~/assets/sources/images/img-news-1.jpg"),
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
  mounted() {
    const page = document.querySelector("#news-details");

    // listener to h2
    const heightH2 = () => {
      document.querySelectorAll('h2.Title').forEach(h2 => {
        page.style.setProperty('--h-title', `${h2.getBoundingClientRect().height}px`)
      });
    };
    heightH2();
    
    window.addEventListener('resize', () => {
      heightH2();
    });
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/pages/news-details.scss" lang="scss" />
