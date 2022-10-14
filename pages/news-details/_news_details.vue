<template>
  <div id="news-details">
    <h2 class="Title tup">press &amp; news</h2>

    <section class="container-press-and-news grid">
      <div class="container-press-and-news--background" :style="`--bg-image: url(${dataNews.image})`">
      </div>

      <article class="divcol gap1">
        <v-btn icon class="share">
          <v-icon size="clamp(2em, 2.4vw, 2.4em)">mdi-share-variant</v-icon>
        </v-btn>

        <h3 class="bold">{{dataNews.title}}</h3>
        <span class="tcap">{{dataNews.title2}}</span>
        <p class="p">{{dataNews.description}}</p>

        <div class="container-press-and-news--social center gap1">
          <v-btn v-for="(item,i) in dataSocial" :key="i" icon>
            <v-icon size="clamp(2em, 2.4vw, 2.4em)">{{item.icon}}</v-icon>
          </v-btn>
        </div>
      </article>
    </section>

    <blockquote class="divcol" style="margin-block: 3em; padding-inline: var(--margin-separator)">
      <h2 class="tup" style="text-decoration: underline">{{dataNews.title2}}</h2>
      <p>{{dataNews.desc_long}}</p>
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
          <img :src="item.image" :alt="`${item.title} image`" style="--w: 100%; --h: 23em; --br: 5px; --of: cover">
          <h3 class="p">{{item.title}}</h3>
          <p class="p">
            {{
              item.description.length >= 500
              ? `${item.description.substring(0, 500)}...`
              : item.description
            }}
          </p>
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
      dataOtherNews: [],
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
    async getData() {
      const baseUrl = this.$axios.defaults.baseURL;
      // get news
      await this.$axios.get(`${baseUrl}api/v1/get-news`)
        .then(fetch => {
          fetch.data.forEach(e => {e.image = baseUrl+e.image});
          this.dataOtherNews = fetch.data
          console.log(fetch.data)
        }).catch(error => {
          this.$alert("cancel", {desc: error.message})
          console.error(error.message);
        }
      );
    },
    async mountData() {
      // mount data
      await this.getData();
      if (this.$route.path === this.localePath('/news-details')) {this.dataNews = await this.dataOtherNews.at(-1)}
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
