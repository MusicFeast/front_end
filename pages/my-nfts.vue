<template>
  <div id="my-nft-ticket">
    <h2 class="Title">My nfts</h2>
    <div class="fwrap gap1 mt-16 mb-16">
      <Filters
        contents
        :hide="[2]"
        :filter-b="filterB.list"
        @search="(model) => (search = model)"
        @filterB="(model) => (filterB.model = model)"
        :search="search"
      />
    </div>

    <div class="container-nfts">
      <div v-for="(item, index) in dataNfts" :key="index" class="container-ticket-img" :class="'container-ticket-img-' + item.img_number">
        <img
        :src="require(`~/assets/sources/images/ticket-model-no-border-${item.img_number}.png`)" 
        alt="Ticket" 
        class="ticket-for-img no-border-img"
        >
        <img 
        :src="require(`~/assets/sources/images/ticket-model-${item.img_number}.png`)" 
        alt="Ticket" 
        class="ticket-for-img border-img"
        >
        <img :src="require(`~/assets/sources/images/${item.img_internal}`)" alt="Ticket-img" class="internal-img">
        <img :src="require(`~/assets/sources/images/${item.img_internal}`)" alt="Ticket-img" class="internal-img-no-border">
        <div class="black-circle"></div>
      </div>
    </div>

    <div class="center mt-10">
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
    name: "MyNftTicketPage",
    mixins: [computeds],
    data() {
      return {
        dataNfts: [
          {
            img_number: "1",
            img_internal: "fest-img-1.png",
          },
          {
            img_number: "2",
            img_internal: "fest-img-2.png",
          },
          {
            img_number: "3",
            img_internal: "img-event-1.png",
          },
          {
            img_number: "4",
            img_internal: "img-event-2.png",
          },
          {
            img_number: "5",
            img_internal: "img-parallax.jpg",
          },
          {
            img_number: "1",
            img_internal: "fest-img-1.png",
          },
          {
            img_number: "2",
            img_internal: "fest-img-2.png",
          },
          {
            img_number: "3",
            img_internal: "img-event-1.png",
          },
          {
            img_number: "4",
            img_internal: "img-event-2.png",
          },
          {
            img_number: "5",
            img_internal: "img-parallax.jpg",
          },
          {
            img_number: "1",
            img_internal: "fest-img-1.png",
          },
          {
            img_number: "2",
            img_internal: "fest-img-2.png",
          },
          {
            img_number: "3",
            img_internal: "img-event-1.png",
          },
          {
            img_number: "4",
            img_internal: "img-event-2.png",
          },
          {
            img_number: "5",
            img_internal: "img-parallax.jpg",
          },
          {
            img_number: "1",
            img_internal: "fest-img-1.png",
          },
          {
            img_number: "2",
            img_internal: "fest-img-2.png",
          },
          {
            img_number: "3",
            img_internal: "img-event-1.png",
          },
          {
            img_number: "4",
            img_internal: "img-event-2.png",
          },
          {
            img_number: "5",
            img_internal: "img-parallax.jpg",
          },
        ],
        search: '',
        filterB: {
          model: '',
          list: ['Date', 'Location', 'Price'],
        },
      }
    },
    head() {
      const title = "My NFT Ticket"
      return {
        title,
      }
    },
    methods: {
      
    }
  };
</script>
  
<style src="~/assets/styles/pages/my-nft-ticket.scss" lang="scss" />