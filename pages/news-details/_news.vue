<template>
  <div id="news-details">
    <h2 class="Title tup">press &amp; news</h2>

    <section class="container-press-and-news grid">
      <div class="container-press-and-news--background">
      </div>

      <article class="divcol gap1">
        <v-btn icon class="share">
          <v-icon size="clamp(2em, 2.4vw, 2.4em)">mdi-share-variant</v-icon>
        </v-btn>

        <h3 class="bold">news title 1</h3>
        <span class="tcap">title 2</span>
        <p class="p">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
          erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
          consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat 
          nulla facilisis at vero eros et accumsan et iusto odio
        </p>

        <div class="container-press-and-news--social center gap1">
          <v-btn v-for="(item,i) in dataSocial" :key="i" icon>
            <v-icon size="clamp(2em, 2.4vw, 2.4em)">{{item.icon}}</v-icon>
          </v-btn>
        </div>
      </article>
    </section>

    <blockquote class="divcol">
      <h2 class="tup" style="text-decoration: underline">lorem ipsum</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
        erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea 
        commodo consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
        erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea 
        commodo consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
        erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea 
        commodo consequat.
      </p>
      <span class="marginaleft bold">Lorem ipsum dolor sit amet, </span>
    </blockquote>

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
  name: "NewsDetailsPage",
  data() {
    return {
      dataSocial: [
        { icon: "mdi-instagram", link: "#" },
        { icon: "mdi-twitter", link: "#" },
        { icon: "mdi-facebook", link: "#" },
        { icon: "discord", link: "#" },
      ],
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
      const h2Rect = document.querySelector('h2.Title').getBoundingClientRect().height;
      page.style.setProperty('--h-title', `${h2Rect}px`)
    };
    heightH2();
    
    // resize listener
    window.addEventListener('resize', () => {
      heightH2();
    });
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/pages/news-details.scss" lang="scss" />
