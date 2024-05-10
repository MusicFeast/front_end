<template>
  <div id="ticket-events">
    <div class="banner-cotainer">
      <img src="~/assets/sources/images/banner-tickets.png" alt="Banner" class="banner-img">

      <div class="text-banner-container divcol gap1">
        <h2 class="tnone" style="color: var(--primary);">Create your event with us</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur libero labore similique fugit, 
          deleniti recusandae! Veniam minus quod praesentium quaerat.
        </span>
        <v-btn class="btn" @click="$router.push('/create-event')">
          Create Event
        </v-btn>

        <h3 class="mt-16">01 / <sup>6</sup></h3>
      </div>
    </div>

    <div class="container-slide">
      <v-slide-group v-model="carouselTickets">
        <v-slide-item v-for="(item, index) in dataTickets" :key="index">
          <v-card class="card-slider">
            <img :src="require(`~/assets/sources/images/${item.img}.png`)" alt="Fest" class="img-carousel">
            <div class="div-text-carousel">
              <h5 class="bold">{{ item.title }}</h5>
              <span>{{ item.desc }}</span>
              <v-icon class="triangle-right" color="#fff">mdi-triangle</v-icon>
            </div>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>

    <h2
      class="Title fwrap mt-mb3"
      style="--fb: 200px; gap: 0.3em clamp(1em, 2vw, 2em)"
    >
      <span class="tup">Events</span>

      <Filters
        contents
        :hide="[3]"
        :search="search"
        :filter-a="filterA.list"
        @search="(model) => (search = model)"
        @filterA="(model) => (filterA.model = model)"
      />
    </h2>

    <section class="section-cards mt-10">
      <v-card v-for="(item, index) in dataEvents" :key="index" class="card card-event" @click="$router.push('/event-ticket-description')">
        <div class="internal-card">
          <img :src="require(`~/assets/sources/images/${item.img}.png`)" alt="Img" class="img-banner-event">

          <h4 class="tup bold mt-3 mb-3">{{ item.name_event }}</h4>

          <div class="separator mb-3"></div>

          <div class="div-location">
            <h5 class="tup bold p">{{ item.location }}</h5>
          </div>

          <div class="mt-10 divcol center pl-10 pr-10 mb-6">
            <h6 class="bold">
              {{ item.type_event }} - {{ item.date }}
            </h6>
            <span class="tcenter">{{ item.desc }}</span>
          </div>

          <div class="divrow jspace gap2">
            <img src="~/assets/sources/icons/instagram-yellow.svg" alt="Instagram" class="icon-yellow">
            <img src="~/assets/sources/icons/twitter-yellow.svg" alt="Twitter" class="icon-yellow">
            <img src="~/assets/sources/icons/facebook-yellow.svg" alt="Facebook" class="icon-yellow">
            <img src="~/assets/sources/icons/discord-yellow.svg" alt="Discord" class="icon-yellow">
          </div>

          <v-divider class="divider mt-8 mb-6"></v-divider>

          <v-btn class="btn btn-card">More Details</v-btn>
        </div>
      </v-card>
    </section>

    <v-divider class="mt-10 mb-10" style="background-color: #EE3938;"></v-divider>

    <div class="center">
      <Pagination
      :total-pages="pagination_per_page > 50 ? 50 : pagination_per_page"
      :current-page="currentPage"
      @pagechanged="handlePageChange"
      />
    </div>
  </div>
</template>

<script>
  import computeds from '~/mixins/computeds'
  
  export default {
    name: "TicketEventsPage",
    mixins: [computeds],
    data() {
      return {
        carouselTickets: 0,
        dataTickets: [
          {
            title: "Event Title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, autem necessitatibus iusto quaerat, sint eius minima odit nobis adipisci, illum voluptas.",
            img: "fest-img-1",
          },
          {
            title: "Event Title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, autem necessitatibus iusto quaerat, sint eius minima odit nobis adipisci, illum voluptas.",
            img: "fest-img-2",
          },
          {
            title: "Event Title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, autem necessitatibus iusto quaerat, sint eius minima odit nobis adipisci, illum voluptas.",
            img: "fest-img-1",
          },
          {
            title: "Event Title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, autem necessitatibus iusto quaerat, sint eius minima odit nobis adipisci, illum voluptas.",
            img: "fest-img-2",
          },
          {
            title: "Event Title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, autem necessitatibus iusto quaerat, sint eius minima odit nobis adipisci, illum voluptas.",
            img: "fest-img-1",
          },
          {
            title: "Event Title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, autem necessitatibus iusto quaerat, sint eius minima odit nobis adipisci, illum voluptas.",
            img: "fest-img-2",
          },
          {
            title: "Event Title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, autem necessitatibus iusto quaerat, sint eius minima odit nobis adipisci, illum voluptas.",
            img: "fest-img-1",
          },
          {
            title: "Event Title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, autem necessitatibus iusto quaerat, sint eius minima odit nobis adipisci, illum voluptas.",
            img: "fest-img-2",
          },
        ],
        search: '',
        filterA: {
          model: '',
          list: ['lastest releases', 'Newest', 'Oldest', 'Coming Soon', 'Lorem Ipsum', 'Lorem Impsum'],
        },
        dataEvents:[
          {
            img: "img-event-1",
            name_event: "name of the event",
            location: "calgary - canada",
            type_event: "Concert",
            date: "23/09/23",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus corporis harum perspiciatis placeat velit enim ad? Accusamus voluptate, fugiat voluptatum culpa consectetur ea quod laudantium harum deserunt esse. Libero!"
          },
          {
            img: "img-event-2",
            name_event: "name of the event",
            location: "calgary - canada",
            type_event: "Concert",
            date: "23/09/23",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus corporis harum perspiciatis placeat velit enim ad? Accusamus voluptate, fugiat voluptatum culpa consectetur ea quod laudantium harum deserunt esse. Libero!"
          },
          {
            img: "img-event-1",
            name_event: "name of the event",
            location: "calgary - canada",
            type_event: "Concert",
            date: "23/09/23",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus corporis harum perspiciatis placeat velit enim ad? Accusamus voluptate, fugiat voluptatum culpa consectetur ea quod laudantium harum deserunt esse. Libero!"
          },
          {
            img: "img-event-2",
            name_event: "name of the event",
            location: "calgary - canada",
            type_event: "Concert",
            date: "23/09/23",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus corporis harum perspiciatis placeat velit enim ad? Accusamus voluptate, fugiat voluptatum culpa consectetur ea quod laudantium harum deserunt esse. Libero!"
          },
          {
            img: "img-event-1",
            name_event: "name of the event",
            location: "calgary - canada",
            type_event: "Concert",
            date: "23/09/23",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus corporis harum perspiciatis placeat velit enim ad? Accusamus voluptate, fugiat voluptatum culpa consectetur ea quod laudantium harum deserunt esse. Libero!"
          },
          {
            img: "img-event-2",
            name_event: "name of the event",
            location: "calgary - canada",
            type_event: "Concert",
            date: "23/09/23",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus corporis harum perspiciatis placeat velit enim ad? Accusamus voluptate, fugiat voluptatum culpa consectetur ea quod laudantium harum deserunt esse. Libero!"
          },
        ]
      }
    },
    head() {
      const title = "Ticket Events"
      return {
        title,
      }
    },
    methods: {
     
    }
  };
</script>
  
<style src="~/assets/styles/pages/ticket-events.scss" lang="scss" />