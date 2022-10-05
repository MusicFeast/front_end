<template>
  <div id="news-details">
    <h2 class="Title tup">press &amp; news</h2>

    <section class="container-press-and-news grid">
      <div class="container-press-and-news--background" :style="`--bg-image: url(${dataNews.img})`">
      </div>

      <article class="divcol gap1">
        <v-btn icon class="share">
          <v-icon size="clamp(2em, 2.4vw, 2.4em)">mdi-share-variant</v-icon>
        </v-btn>

        <h3 class="bold">{{dataNews.name}}</h3>
        <span class="tcap">{{dataNews.title2}}</span>
        <p class="p">{{dataNews.desc}}</p>

        <div class="container-press-and-news--social center gap1">
          <v-btn v-for="(item,i) in dataSocial" :key="i" icon>
            <v-icon size="clamp(2em, 2.4vw, 2.4em)">{{item.icon}}</v-icon>
          </v-btn>
        </div>
      </article>
    </section>

    <blockquote class="divcol" style="margin-block: 3em; padding-inline: var(--margin-separator)">
      <h2 class="tup" style="text-decoration: underline">lorem ipsum</h2>
      <p v-for="n in 3" :key="n">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
        aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip 
        ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu 
        feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit 
        augue duis dolore te feugait nulla facilisi.
        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
        magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci 
        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
      </p>
      <span class="alignr bold">Lorem ipsum dolow sit amet,</span>
    </blockquote>

    <h2 class="Title tup">other news</h2>

    <v-slide-group
      v-model="slider"
      mandatory
      show-arrows
      class="custome-slider"
      :style="`padding-inline: ${dataOtherNews.length >= 4 ? '0' : 'var(--margin-separator)'}`"
    >
      <v-slide-item v-for="(item,i) in dataOtherNews" :key="i" v-slot="{ toggle }">
        <v-card class="card tcentermobile" :ripple="false" @click="toggle; selectNews(item)">
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
  middleware: "news-details",
  data() {
    return {
      dataSocial: [
        { icon: "mdi-instagram", link: "#" },
        { icon: "mdi-twitter", link: "#" },
        { icon: "mdi-facebook", link: "#" },
        { icon: "discord", link: "#" },
      ],
      slider: null,
      dataNews: {},
      dataOtherNews: [
        {
          img: require("~/assets/sources/images/img-news-1.jpg"),
          name: "Lorem ipsum dolor sit amet,",
          title2: "title 2",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat atque, possimus fugiat iste unde? Dolorum iusto nihil, officia ipsam quasi voluptas unde, neque, quam veritatis animi dolores rem recusandae."
        },
        {
          img: require("~/assets/sources/images/img-news-2.jpg"),
          name: "Lorem ipsum dolor sit amet,",
          title2: "title 2",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat atque, possimus fugiat iste unde? Dolorum iusto nihil, officia ipsam quasi voluptas unde, neque, quam veritatis animi dolores rem recusandae."
        },
        {
          img: require("~/assets/sources/images/img-news-1.jpg"),
          name: "Lorem ipsum dolor sit amet,",
          title2: "title 2",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat atque, possimus fugiat iste unde? Dolorum iusto nihil, officia ipsam quasi voluptas unde, neque, quam veritatis animi dolores rem recusandae."
        },
        {
          img: require("~/assets/sources/images/img-news-2.jpg"),
          name: "Lorem ipsum dolor sit amet,",
          title2: "title 2",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat atque, possimus fugiat iste unde? Dolorum iusto nihil, officia ipsam quasi voluptas unde, neque, quam veritatis animi dolores rem recusandae."
        },
      ],
    }
  },
  head() {
    const title = "News Details"
    return {
      title,
    }
  },
  computed: {
    news() {return JSON.parse(localStorage.getItem("news"))}
  },
  mounted() {
    const pageName = 'news-details';
    const page = document.querySelector(`#${pageName}`);
    
    // listener to h2
    const heightH2 = () => {
      document.querySelectorAll('h2.Title').forEach(e => {
        const h2Rect = e.getBoundingClientRect().height;
        page.style.setProperty('--h-title', `${h2Rect}px`)
      });
    };
    heightH2();
    
    // resize listener
    window.addEventListener('resize', () => {
      if (this.$route.path.includes(`/${pageName}`)) {
        heightH2();
      };
    });
  },
  methods: {
    mountData() {
      // mount data
      if (this.$route.path === this.localePath('/news-details')) {this.dataNews = this.dataOtherNews.at(-1)}
      else {this.dataNews = this.news}
    },
    selectNews(item) {
      this.dataNews = item;
      this.$scrollTo('top');
    }
  }
};
</script>

<style src="~/assets/styles/pages/news-details.scss" lang="scss" />
