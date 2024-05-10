<template>
  <div id="event-ticket-desc">
    <div class="main-container">
      <div class="img-bg-container">
        <img src="~/assets/sources/images/bg-ticket.png" alt="BG" class="bg-img">

        <div class="gap1 center div-avatar divrow">
          <img src="~/assets/sources/avatars/avatar-ex.png" alt="Avatar" class="avatar">
          <h5 class="tnone p">Artist Name</h5>
        </div>
      </div>

      <div class="right-bg-container">
        <div class="divrow jspace mb-8">
          <v-sheet class="sheet-gradient">Sold out</v-sheet>

          <div class="divrow gap2 center">
            <img src="~/assets/sources/icons/instagram.svg" alt="Ig" class="icons-w">
            <img src="~/assets/sources/icons/twitter.svg" alt="Tw" class="icons-w">
            <img src="~/assets/sources/icons/facebook_white.svg" alt="Fc" class="icons-w">
            <img src="~/assets/sources/icons/discord_white.svg" alt="Ds" class="icons-w">
          </div>
        </div>

        <h2>Name or title of the event</h2>

        <p class="mt-6 mb-6">Name of the artist</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat qui deleniti doloremque, enim laborum nesciunt 
          obcaecati odit, beatae ut quisquam incidunt eligendi distinctio aliquam tempora voluptatem eos quasi. Dolorem veritatis 
          dolor quaerat quas ipsa dicta! Numquam voluptas fuga aliquam eligendi omnis excepturi sequi, iusto dolore nihil non? Deleniti 
          corrupti itaque inventore provident esse suscipit, sed dolore ex illo tempore qui, Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Blanditiis dignissimos impedit dicta vel pariatur voluptas accusamus ipsam ab explicabo nulla, provident 
          quam ducimus eaque similique magnam, corporis facere, modi eligendi aspernatur cumque. Animi minima eligendi eius beatae 
          molestias tempore autem.
        </p>

        <div class="center gap2 mt-16">
          <v-btn class="btn btn-w">Buy</v-btn>
          <v-btn class="btn btn-w" @click="openNft()">NFT</v-btn>
        </div>
      </div>
    </div>
    <div class="footer-main">
      <div class="divcol center gap1">
        <span>Total Tickets</span>
        <h5 class="yellow-m p">125</h5>
      </div>
      <v-divider vertical class="ml-3 mr-3" color="#F7931E"></v-divider>
      <div class="divcol center gap1">
        <span>Owners</span>
        <h5 class="yellow-m p">85</h5>
      </div>
      <v-divider vertical class="ml-3 mr-3" color="#F7931E"></v-divider>
      <div class="divcol center gap1">
        <span>Price</span>
        <h5 class="yellow-m p center">520.00 <img src="~/assets/sources/icons/near-yellow.svg" alt="Near" class="ml-1" style="width: 20px;"></h5>
      </div>
      <v-divider vertical class="ml-3 mr-3" color="#F7931E"></v-divider>
      <div class="divcol center gap1">
        <span>Tickets Sold</span>
        <h5 class="yellow-m p">100</h5>
      </div>
      <v-divider vertical class="ml-3 mr-3" color="#F7931E"></v-divider>
      <div class="divcol center gap1">
        <span>Lorem Ipsum</span>
        <h5 class="yellow-m p">100</h5>
      </div>
    </div>
    <section class="container-place mt-10 mb-10">
      <h3 class="tup p">26 / 09 /2022  -  Place of the event</h3>
    </section>
    <section class="section-map">
      <div class="left-map center divcol">
        <h3 class="tup">Description</h3>
        <p style="text-align: justify;">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat cumque beatae repellendus dicta modi dolor 
          inventore totam pariatur, obcaecati delectus amet soluta alias laudantium facere molestias fugiat deserunt aperiam, 
          exercitationem tenetur reiciendis qui nemo voluptas. A sunt magni nostrum voluptates maxime, est dolores commodi delectus 
          repellat, nesciunt natus iure, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat cumque beatae repellendus dicta modi dolor 
          inventore totam pariatur, obcaecati delectus amet soluta alias laudantium facere molestias fugiat deserunt aperiam, 
          exercitationem tenetur reiciendis qui nemo voluptas. A sunt magni nostrum voluptates maxime, est dolores commodi delectus 
          repellat, nesciunt natus iure
        </p>
      </div>
      <div class="rigth-map">
        <img src="~/assets/sources/images/map.png" alt="Map" class="img-map">
        <v-btn class="btn btn-map">OPEN MAPS</v-btn>
      </div>
    </section>
    <h2 class="tup Title">Ticket Available</h2>
    <section class="section-tickets-available pt-10 pb-8">
      <v-card v-for="(item,index) in dataTicketAvailable" :key="index" class="available-card">
        <img :src="require(`~/assets/sources/images/${item.img}.png`)" alt="Img Ticket" class="img-card">
        <img :src="require(`~/assets/sources/avatars/${item.avatar}.png`)" alt="Avatar" class="avatar-card">
        <span class="underline mb-1 mt-3">{{ item.name }}</span>
        <span class="mb-5">{{ item.desc }}</span>
        <span class="yellow-m center">Price: {{ item.price }} <img src="~/assets/sources/icons/near-yellow.svg" alt="Near" class="ml-2" style="width: 15px;"></span>
        <span class="yellow-m mt-2">Editions: {{ item.editions }}</span>
        <v-btn class="btn btn-buy">
          Buy
        </v-btn>
      </v-card>
    </section>

    <div class="center">
      <Pagination
      :total-pages="pagination_per_page > 50 ? 50 : pagination_per_page"
      :current-page="currentPage"
      @pagechanged="handlePageChange"
      />
    </div>

    <v-dialog v-model="dialogNft">
      <div v-if="ticketType == 1" class="container-ticket-img-1">
        <img src="~/assets/sources/images/ticket-model-1.png" alt="Ticket" class="ticket-for-img">
        <img src="~/assets/sources/images/fest-img-1.png" alt="Ticket-img" class="internal-img">
        <div class="black-circle"></div>
      </div>

      <div v-else-if="ticketType == 2" class="container-ticket-img-2">
        <img src="~/assets/sources/images/ticket-model-2.png" alt="Ticket" class="ticket-for-img">
        <img src="~/assets/sources/images/fest-img-1.png" alt="Ticket-img" class="internal-img">
      </div>

      <div v-else-if="ticketType == 3" class="container-ticket-img-3">
        <img src="~/assets/sources/images/ticket-model-3.png" alt="Ticket" class="ticket-for-img">
        <img src="~/assets/sources/images/fest-img-1.png" alt="Ticket-img" class="internal-img">
      </div>

      <div v-else-if="ticketType == 4" class="container-ticket-img-4">
        <img src="~/assets/sources/images/ticket-model-4.png" alt="Ticket" class="ticket-for-img">
        <img src="~/assets/sources/images/fest-img-1.png" alt="Ticket-img" class="internal-img">
      </div>

      <div v-else-if="ticketType == 5" class="container-ticket-img-5">
        <img src="~/assets/sources/images/ticket-model-5.png" alt="Ticket" class="ticket-for-img">
        <img src="~/assets/sources/images/fest-img-1.png" alt="Ticket-img" class="internal-img">
      </div>

      <div v-else-if="ticketType == 6" class="container-ticket-img-6">
        <img src="~/assets/sources/images/ticket-model-6.png" alt="Ticket" class="ticket-for-img">
        <img src="~/assets/sources/images/fest-img-1.png" alt="Ticket-img" class="internal-img">
        <div class="black-circle"></div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
  import computeds from '~/mixins/computeds'
  
  export default {
    name: "EventTicketDescriptionPage",
    mixins: [computeds],
    data() {
      return {
        ticketType: 1,
        dialogNft: false,
        dataTicketAvailable: [
          {
            img: "casette-img",
            avatar: "avatar-ex",
            name: "Name of the artist or collection",
            desc: "Lorem Ipsum is amet",
            price: "250.00",
            editions: "250",
          },
          {
            img: "casette-img",
            avatar: "avatar-ex",
            name: "Name of the artist or collection",
            desc: "Lorem Ipsum is amet",
            price: "250.00",
            editions: "250",
          },
          {
            img: "casette-img",
            avatar: "avatar-ex",
            name: "Name of the artist or collection",
            desc: "Lorem Ipsum is amet",
            price: "250.00",
            editions: "250",
          },
          {
            img: "casette-img",
            avatar: "avatar-ex",
            name: "Name of the artist or collection",
            desc: "Lorem Ipsum is amet",
            price: "250.00",
            editions: "250",
          },
        ],
      }
    },
    head() {
      const title = "Event Ticket Description"
      return {
        title,
      }
    },
    methods: {
      openNft(){
        this.dialogNft = true;
      }
    }
  };
</script>
  
<style src="~/assets/styles/pages/event-ticket-description.scss" lang="scss" />