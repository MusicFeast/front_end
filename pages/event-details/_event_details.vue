<template>
  <div id="event" class="divcol">
    <section class="header grid">
      <div class="header-background divcol">
        <div class="center gap1 alignl">
          <v-avatar style="border: 2px solid #fff">
            <img src="@/assets/sources/images/avatar.png" alt="artist image" style="--w: 100%; --of: cover">
          </v-avatar>
          <span class="h9_em">Artist Name</span>
        </div>
      </div>

      <article class="card divcol" style="gap: 30px">
        <div class="divcol gap1">
          <div class="space gap1">
            <v-btn class="btn" style="--fs: 1.05em">sold out</v-btn>

            <div class="center eliminarmobile" style="gap: .2em">
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

        <div class="center vermobile" style="gap: .2em">
          <v-btn v-for="(item,i) in dataSocial" :key="i" icon :href="item.link">
            <v-icon>{{item.icon}}</v-icon>
          </v-btn>
        </div>
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
        <iframe
          id="gmap_canvas"
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?
            q=2880%20Broadway,%20New%20York
            &t=
            &z=13
            &ie=UTF8
            &iwloc=
            &output=embed
          "
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <v-btn
          :ripple="false"
          class="btn bold activeBtn"
          href="https://maps.google.com/maps?ll=40.827295,-74.019999&amp;z=13&amp;t=m&amp;hl=es-ES&amp;gl=US&amp;mapclient=embed&amp;q=2880%20Broadway%20New%20York%2C%20NY%2010025%20EE.%20UU."
          target="_blank"
        >open maps</v-btn>
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
                  class="card divcol custome"
                  :class="{
                    uranium: dataCarousel[+index + i].tier===6,
                    diamond: dataCarousel[+index + i].tier===5,
                    platinum: dataCarousel[+index + i].tier===4,
                    gold: dataCarousel[+index + i].tier===3,
                    silver: dataCarousel[+index + i].tier===2,
                    bronze: dataCarousel[+index + i].tier===1,
                  }">
                  <div
                    class="container-img"
                    :style="`
                      ${
                        dataCarousel[+index + i].tier ? `--tag-tier: '${
                          dataCarousel[+index + i].tier===1 ? 'bronze' :
                          dataCarousel[+index + i].tier===2 ? 'silver' :
                          dataCarousel[+index + i].tier===3 ? 'gold' :
                          dataCarousel[+index + i].tier===4 ? 'platinum' :
                          dataCarousel[+index + i].tier===5 ? 'diamond' :
                          dataCarousel[+index + i].tier===6 ? 'uranium' : 'user'
                        }'
                        `: ''
                      };
                      ${dataCarousel[+index + i].state ? `--tag-state: '${dataCarousel[+index + i].state}'` : ''}`
                    "
                  >
                    <img :src="dataCarousel[+index + i].img" :alt="`${dataCarousel[+index + i].name} image`">
                  </div>
                  
                  <div class="container-content tcenter">
                    <v-avatar style="border: 2px solid #fff">
                      <img :src="dataCarousel[+index + i].avatar" :alt="`${dataCarousel[+index + i].artist} image`" style="--w: 100%; --of: cover">
                    </v-avatar>
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

    <Pagination
      :total-pages="pagination_per_page"
      :current-page="modelCarousel+1"
      @pagechanged="(page) => modelCarousel = page-1"
    />
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
          avatar: require("~/assets/sources/images/avatar.png"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: 3,
          state: "sold out",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.png"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: 2,
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.png"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: 4,
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.png"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: 5,
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.png"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: 6,
          state: "sold out",
        },
        {
          img: require('~/assets/sources/images/img-listed-5.jpg'),
          avatar: require("~/assets/sources/images/avatar.png"),
          name: "Artist Name o Collection  n°5",
          desc: "Lorem ipsum dolor sit amet,",
          floor_price: "250.00",
          editions: "250.00",
          tier: 1,
        },
      ],
    }
  },
  head() {
    const title = "Event Details"
    return {
      title,
    }
  },
  computed: {
    event() {return JSON.parse(localStorage.getItem("event"))},
    pagination_per_page() {
      return Math.ceil(this.dataCarousel.length / this.columnsCarousel())
    }
  },
  created() {
    if (!this.event) {this.$router.push(this.localePath('/'))}
  },
  mounted() {
    const pageName = 'event';
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
        
        // listener reload columns in caraousel
        const reload = this.modelCarousel;
        this.modelCarousel = -1;
        this.modelCarousel = reload;
      };
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

<style src="~/assets/styles/pages/event-details.scss" lang="scss" />
