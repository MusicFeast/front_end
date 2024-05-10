<template>
  <div id="my-events">
    <h2 class="Title mb-16">My events</h2>
    
    <div class="fwrap gap1 mb-16">
      <Filters
        contents
        :hide="[3]"
        :filter-a="filterA.list"
        @search="(model) => (search = model)"
        @filterA="(model) => (filterA.model = model)"
        :search="search"
      />
    </div>

    <v-data-table
      :headers="headersEvents"
      :items="dataEvents"
      hide-default-footer
    >
      <template #[`item.name`] = "{ item }">
        <div class="divrow center gap1">
          <img :src="require(`~/assets/sources/images/${item.img}.png`)" alt="Img Table" class="img-table-circle">
          <span>{{ item.name }}</span>
        </div>
      </template>
      <template #[`item.tickets_minted`] = "{ item }">
        <div class="divrow center gap1">
          <span>{{ item.tickets_minted }} / {{ item.tickets_minted_available }}</span>
        </div>
      </template>
      <template #[`item.tickets_sold`] = "{ item }">
        <div class="divrow center gap1">
          <span>{{ item.tickets_sold }} / {{ item.tickets_sold_available }}</span>
        </div>
      </template>
      <template #[`item.tickets_listed`] = "{ item }">
        <div class="divrow center gap1">
          <span>{{ item.tickets_listed }} / {{ item.tickets_listed_available }}</span>
        </div>
      </template>
      <template #[`item.action`]="{ item }">
        <div class="divrow center gap1 btns-div">
          <v-btn class="btn btn-white" @click="$router.push('/setting-events')">
            {{ item.action }}
          </v-btn>
          <v-btn class="btn" @click="$router.push('/live-data')">
            Go to live data
          </v-btn>
        </div>
      </template>
    </v-data-table>

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
    name: "MyEventsPage",
    mixins: [computeds],
    data() {
      return {
        headersEvents:[
          { text: 'NFT NAME', align: 'center', sortable: false, value: 'name'},
          { text: 'DATE', align: 'center', sortable: false, value: 'date' },
          { text: 'TICKETS MINTED ', value: 'tickets_minted', align: 'center', sortable: false },
          { text: 'TICKETS SOLD', value: 'tickets_sold', align: 'center', sortable: false },
          { text: 'TICKETS LISTED', value: 'tickets_listed', align: 'center', sortable: false },
          { text: '', value: 'action', sortable: false },
        ],
        dataEvents:[
          {
            name: 'Name of the event',
            img: 'fest-img-1',
            date: '23 / 09 / 23',
            tickets_minted: 20,
            tickets_minted_available: 100,
            tickets_sold: 15,
            tickets_sold_available: 100,
            tickets_listed: 15,
            tickets_listed_available: 100, 
            action: "Setting"
          },
          {
            name: 'Name of the event',
            img: 'fest-img-1',
            date: '23 / 09 / 23',
            tickets_minted: 20,
            tickets_minted_available: 100,
            tickets_sold: 15,
            tickets_sold_available: 100,
            tickets_listed: 15,
            tickets_listed_available: 100, 
            action: "Setting"
          },
          {
            name: 'Name of the event',
            img: 'fest-img-1',
            date: '23 / 09 / 23',
            tickets_minted: 20,
            tickets_minted_available: 100,
            tickets_sold: 15,
            tickets_sold_available: 100,
            tickets_listed: 15,
            tickets_listed_available: 100, 
            action: "Setting"
          },
        ],

        search: '',
        filterA: {
          model: '',
          list: ['lastest releases', 'Newest', 'Oldest', 'Coming Soon', 'Lorem Ipsum', 'Lorem Impsum'],
        },
      }
    },
    head() {
      const title = "My Events"
      return {
        title,
      }
    },
    methods: {

    }
  };
</script>
  
<style src="~/assets/styles/pages/my-events.scss" lang="scss" />