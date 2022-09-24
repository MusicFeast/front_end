<template>
  <div id="event" class="divcol">
    <section class="header grid">
      <div class="header-background divcol">
        <div class="center gap1 marginaright">
          <v-avatar style="border: 2px solid #fff">
            <img src="@/assets/sources/images/avatar.jpg" alt="artist image" style="--of: cover">
          </v-avatar>
          <span>Artist Name</span>
        </div>
      </div>

      <article class="card divcol gap2">
        <div class="divcol gap1">
          <div class="space gap1">
            <v-btn class="btn" style="--fs: 1.05em">sold out</v-btn>

            <div class="center" style="gap: .2em">
              <v-btn v-for="(item,i) in dataSocial" :key="i" icon :href="item.link">
                <v-icon>{{item.icon}}</v-icon>
              </v-btn>
            </div>
          </div>

          <h2 class="p tup">Name or title of the event</h2>
        </div>

        <span>Name of the artist</span>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip 
          ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore 
          eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue 
          duis dolore te feugait nulla
        </p>

        <v-btn :ripple="false" class="btn activeBtn align" style="--w: min(100%, 10em); --fs: 12.8px">Buy</v-btn>
      </article>
    </section>

    <section class="container-profit bold fwrap">
      <v-sheet color="transparent" class="divcol center">
        <span>Total Tickets</span>
        <span>{{dataProfits.total_tickets}}</span>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>Owners</span>
        <span>{{dataProfits.owners}}</span>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>Price</span>
        <div class="acenter" style="gap: .5em">
          <span>{{dataProfits.price}}</span>
          <img src="@/assets/sources/logos/near-orange.svg" alt="near" style="--w: 1.833125em">
        </div>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>Tickets Sold</span>
        <span>{{dataProfits.tickets_sold}}</span>
      </v-sheet>
      <v-sheet color="transparent" class="divcol center">
        <span>Lorem Ipsum</span>
        <span>{{dataProfits.lorem_ipsum}}</span>
      </v-sheet>
    </section>

    <h2 id="title">26 / 09 /2022  -  Place of the event</h2>

    <section class="container-desc grid">
      <article class="card">
        <h3 class="tup">description</h3>
        <p class="p">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip 
          ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore 
          eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit 
          augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing
        </p>
      </article>

      <div class="map">
        <v-btn :ripple="false" class="btn bold activeBtn">open maps</v-btn>
      </div>
    </section>

    <h2 class="Title tup">tickets available</h2>

    <v-carousel
      id="custome-carousel"
      v-model="modelCarousel"
      height="max-content"
      hide-delimiters
      :show-arrows="false"
    >
      <template v-for="(item, index) in dataCarousel">
        <v-carousel-item v-if="(index + 1) % columnsCarousel() === 1 || columnsCarousel() === 1" :key="index">
          <template v-for="(n,i) in columnsCarousel()">
            <template v-if="(+index + i) < dataCarousel.length">
              <v-sheet :key="i" color="transparent" class="divcol gap1">
                <v-card
                  class="card divcol"
                  :class="{
                    uranium: dataCarousel[+index + i].tier==='uranium',
                    diamond: dataCarousel[+index + i].tier==='diamond',
                    platinum: dataCarousel[+index + i].tier==='platinum',
                    gold: dataCarousel[+index + i].tier==='gold',
                    silver: dataCarousel[+index + i].tier==='silver',
                    bronze: dataCarousel[+index + i].tier==='bronze',
                  }">
                  <div
                    class="container-img"
                    :style="
                      `--tag-tier: '${dataCarousel[+index + i].tier}';
                      ${dataCarousel[+index + i].state ? `--tag-state: '${dataCarousel[+index + i].state}'` : ''}`
                    "
                  >
                    <img :src="dataCarousel[+index + i].img" :alt="`${dataCarousel[+index + i].name} image`" style="--w: 100%; --br: 10px">
                    
                    <v-avatar style="border: 2px solid #fff">
                      <img :src="dataCarousel[+index + i].avatar" :alt="`${dataCarousel[+index + i].artist} image`" style="--of: cover">
                    </v-avatar>
                  </div>
                  
                  <div class="container-content tcenter">
                    <a>{{dataCarousel[+index + i].name}}</a>
                    <p>{{dataCarousel[+index + i].desc}}</p>

                    <div class="center" style="gap: 6.4px">
                      <span class="floor" style="--c: var(--accent)">Floor Price: {{dataCarousel[+index + i].floor_price}}</span>
                      <img src="@/assets/sources/logos/near-orange.svg" alt="near" style="--w:0.9375em">
                    </div>
                    <span class="floor" style="--c: var(--accent)">Editions: {{dataCarousel[+index + i].editions}}</span>
                  </div>
                </v-card>

                <v-btn :ripple="false" class="btn activeBtn align" style="--fs: 17.6px; --w: 85%" :disabled="dataCarousel[+index + i].state === 'sold out'">Buy</v-btn>
              </v-sheet>
            </template>
          </template>
        </v-carousel-item>
      </template>
    </v-carousel>

    <v-btn-toggle v-model="pagination" mandatory class="pagination align" background-color="rgba(0, 0, 0, .4)" active-class="activeClass">
      <button
        :style="pagination > 0 ? 'opacity: 1' : 'opacity: .5'"
        @click="pagination > 0 ? pagination-- : ''"
      >
        <v-icon size="2em" class="reverse">mdi-play</v-icon>
      </button>

      <v-btn v-for="n in 2" :key="n" text>{{n}}</v-btn>

      <button
        :style="pagination < 1 ? 'opacity: 1' : 'opacity: .5'"
        @click="pagination < 1 ? pagination++ : ''"
      >
        <v-icon size="2em">mdi-play</v-icon>
      </button>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  name: "EventPage",
  data() {
    return {
      dataSocial: [
        { icon: "mdi-instagram", link: "#" },
        { icon: "mdi-twitter", link: "#" },
        { icon: "mdi-facebook", link: "#" },
        { icon: "discord", link: "#" },
      ],
      dataProfits: {
        total_tickets: 125,
        owners: 85,
        price: 520.00 ,
        tickets_sold: 100,
        lorem_ipsum: 205,
      },
      modelCarousel: 0,
      dataCarousel: [
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: "gold",
          state: "sold out",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: "silver",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: "platinum",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: "diamond",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: "uranium",
          state: "sold out",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.jpg"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: "bronze",
        },
      ],
      pagination: 0,
    }
  },
  mounted() {
    const page = document.querySelector("#event");
    
    // listener to h2
    const heightH2 = () => {
      const h2Rect = document.querySelector('h2.Title').getBoundingClientRect().height;
      page.style.setProperty('--h-title', `${h2Rect}px`)
    };
    heightH2();
    
    // resize listener
    window.addEventListener('resize', () => {
      heightH2();
      
      // listener reload columns in caraousel
      const reload = this.modelCarousel;
      this.modelCarousel = -1;
      this.modelCarousel = reload;
    });
  },
  methods: {
    columnsCarousel() {
      if (window.innerWidth >= 1600) {
        return 5
      } else if (window.innerWidth >= 1345) {
        return 4
      } else if (window.innerWidth >= 1000) {
        return 3
      } else if (window.innerWidth >= 500) {
        return 2
      } else {
        return 1
      }
    },
  }
};
</script>

<style src="~/assets/styles/pages/event.scss" lang="scss" />
