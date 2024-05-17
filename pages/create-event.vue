<template>
  <div id="create-event">
    <v-window v-model="ticketModelWindow">
      <v-window-item :value="1">
        <h2 class="Title">Choose your ticket</h2>

        <!-- <v-slide-group v-model="carouselTickets" class="mt-10 mb-10" prev-icon="mdi-menu-left" next-icon="mdi-menu-right">
          <v-slide-item v-for="(item, index) in dataTickets" :key="index">
            <div class="container-ticket-img" @click="openDialogTicket(item)">
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
            </div>
          </v-slide-item>
        </v-slide-group> -->

        <!-- <div class="btns-div center divrow gap2">
          <v-btn class="btn btn-white">Upload my own ticket</v-btn>
          <v-btn class="btn">Choose this one</v-btn>
        </div> -->

        <div class="center divcol mt-10">
          <div class="container-ticket-img-5" @click="openFileInputNft" style="cursor: pointer;">
            <img src="~/assets/sources/images/ticket-model-5.png" alt="Ticket" class="ticket-for-img">
            <img :src="selectedImageNft" class="internal-img">
            <v-file-input
              ref="fileInputNft"
              v-model="imageNft"
              class="input-file"
              prepend-icon="none"
              style="display: none"
              accept="image/*"
              @change="onFileChangeNft"
            ></v-file-input>
          </div>

          <div v-if="imageTicketStep == 1" class="btns-div center divrow gap2">
            <v-btn class="btn btn-white" @click="dialogTicket = false">Back</v-btn>
            <v-btn class="btn" @click="openFileInputNft">Choose this one</v-btn>
          </div>
          <div v-else-if="imageTicketStep == 2" class="btns-div center divrow gap2">
            <v-btn class="btn btn-white" @click="openFileInputNft">Upload my ticket Image</v-btn>
            <v-btn class="btn" @click="ticketModelWindow = 2">Next</v-btn>
          </div>
        </div>

        <!-- <v-dialog v-model="dialogTicket">
          <div v-if="ticketType == 1" class="container-ticket-img-1">
            <img src="~/assets/sources/images/ticket-model-1.png" alt="Ticket" class="ticket-for-img">
            <img :src="selectedImageNft" alt="" class="internal-img">
            <div class="black-circle"></div>

            <v-file-input
              ref="fileInputNft"
              v-model="imageNft"
              class="input-file"
              prepend-icon="none"
              style="display: none"
              accept="image/*"
              @change="onFileChangeNft"
            ></v-file-input>
          </div>

          <div v-else-if="ticketType == 2" class="container-ticket-img-2">
            <img src="~/assets/sources/images/ticket-model-2.png" alt="Ticket" class="ticket-for-img">
            <img :src="selectedImageNft" alt="" class="internal-img">
            <v-file-input
              ref="fileInputNft"
              v-model="imageNft"
              class="input-file"
              prepend-icon="none"
              style="display: none"
              accept="image/*"
              @change="onFileChangeNft"
            ></v-file-input>
          </div>

          <div v-else-if="ticketType == 3" class="container-ticket-img-3">
            <img src="~/assets/sources/images/ticket-model-3.png" alt="Ticket" class="ticket-for-img">
            <img :src="selectedImageNft" alt="" class="internal-img">
            <v-file-input
              ref="fileInputNft"
              v-model="imageNft"
              class="input-file"
              prepend-icon="none"
              style="display: none"
              accept="image/*"
              @change="onFileChangeNft"
            ></v-file-input>
          </div>

          <div v-else-if="ticketType == 4" class="container-ticket-img-4">
            <img src="~/assets/sources/images/ticket-model-4.png" alt="Ticket" class="ticket-for-img">
            <img :src="selectedImageNft" alt="" class="internal-img">
            <v-file-input
              ref="fileInputNft"
              v-model="imageNft"
              class="input-file"
              prepend-icon="none"
              style="display: none"
              accept="image/*"
              @change="onFileChangeNft"
            ></v-file-input>
          </div>

          <div v-else-if="ticketType == 5" class="container-ticket-img-5">
            <img src="~/assets/sources/images/ticket-model-5.png" alt="Ticket" class="ticket-for-img">
            <img :src="selectedImageNft" alt="" class="internal-img">
            <v-file-input
              ref="fileInputNft"
              v-model="imageNft"
              class="input-file"
              prepend-icon="none"
              style="display: none"
              accept="image/*"
              @change="onFileChangeNft"
            ></v-file-input>
          </div>

          <div v-else-if="ticketType == 6" class="container-ticket-img-6">
            <img src="~/assets/sources/images/ticket-model-6.png" alt="Ticket" class="ticket-for-img">
            <img :src="selectedImageNft" alt="" class="internal-img">
            <div class="black-circle"></div>
            <v-file-input
              ref="fileInputNft"
              v-model="imageNft"
              class="input-file"
              prepend-icon="none"
              style="display: none"
              accept="image/*"
              @change="onFileChangeNft"
            ></v-file-input>
          </div>

          <div v-if="imageTicketStep == 1" class="btns-div center divrow gap2">
            <v-btn class="btn btn-white" @click="dialogTicket = false">Back</v-btn>
            <v-btn class="btn" @click="openFileInputNft">Choose this one</v-btn>
          </div>
          <div v-else-if="imageTicketStep == 2" class="btns-div center divrow gap2">
            <v-btn class="btn btn-white" @click="openFileInputNft">Upload my ticket Image</v-btn>
            <v-btn class="btn" @click="dialogTicket = false; ticketModelWindow = 2">Next</v-btn>
          </div>
        </v-dialog> -->
      </v-window-item>

      <v-window-item :value="2" class="window-2">
        <h2 class="Title">Create Event - Basic Information</h2>
        <p class="mt-10 mb-10">
          Choose a name for your event and tell attendees why you think they will have a great time. Add details that 
          highlight why your event is unique.
        </p>
        <section class="card">
          <label for="event_name">Event name</label>
          <v-text-field
            id="event_name"
            placeholder="Event name 1234"
          ></v-text-field>

          <label for="promoter_organizer">Promoter / Organizer</label>
          <v-text-field
            id="promoter_organizer"
            placeholder="Username#123"
          ></v-text-field>
        </section>

        <h2 class="Title">Description</h2>
        <p class="mt-10 mb-10">
          Add more details of your event, such as program, sponsors or featured guests.
        </p>
        <section class="card">
          <label for="description">Description</label>
          <v-text-field
            id="description"
            placeholder="Lorem Ipsum"
          ></v-text-field>
        </section>

        <h2 class="Title">Location</h2>
        <p class="mt-10 mb-10">
          Help people in the area find out about the event and make sure your attendees know where to go.
        </p>
        <section class="card">
          <label for="search_location">Search your location</label>
          <v-text-field
            id="search_location"
            placeholder="Event name 1234"
          ></v-text-field>

          <label for="search_location">Search your location</label>
          <v-text-field
            id="search_location"
            placeholder="Username#123"
          ></v-text-field>
        </section>

        <h2 class="Title">Date and time</h2>
        <p class="mt-10 mb-10">
          Inform attendees when the event starts and ends so they can get organized.
        </p>
        <section class="card">
          <label for="start_date">Start date</label>
          <v-menu
            ref="menu1"
            v-model="menu1"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                id="start_date"
                v-model="start_date"
                placeholder="02-09-23"
                prepend-inner-icon="mdi-calendar-blank-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="start_date"
              no-title
              color="red"
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>

          <label for="end_date">End date</label>
          <v-menu
            ref="menu2"
            v-model="menu2"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                id="end_date"
                v-model="end_date"
                placeholder="05-09-23"
                prepend-inner-icon="mdi-calendar-blank-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="end_date"
              no-title
              color="red"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
          
          <label for="start_time">Start Time</label>
          <v-menu
            ref="menu_start_time"
            v-model="menu_start_time"
            :close-on-content-click="false"
            :return-value.sync="start_time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                id="start_time"
                v-model="start_time"
                prepend-inner-icon="mdi-clock-time-four-outline"
                placeholder="5:40 pm"
                suffix="GMT - 6"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu_start_time"
              v-model="start_time"
              color="white"
              header-color="#390e0e"
              full-width
              @click:minute="$refs.menu_start_time.save(start_time)"
            ></v-time-picker>
          </v-menu>

          <label for="end_time">End Time</label>
          <v-menu
            ref="menu_end_time"
            v-model="menu_end_time"
            :close-on-content-click="false"
            :return-value.sync="end_time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                id="end_time"
                v-model="end_time"
                prepend-inner-icon="mdi-clock-time-four-outline"
                placeholder="7:40 pm"
                suffix="GMT - 6"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu_end_time"
              v-model="end_time"
              color="white"
              header-color="#390e0e"
              full-width
              @click:minute="$refs.menu_end_time.save(end_time)"
            ></v-time-picker>
          </v-menu>
        </section>

        <h2 class="Title">Social Networks</h2>
        <p class="mt-10 mb-10">
          Inform people on social media of the event (Optional)
        </p>
        <section class="card">
          <label for="instagram">Instagram</label>
          <v-text-field
            id="instagram"
            placeholder="@event987"
          ></v-text-field>

          <label for="twitter">Twitter</label>
          <v-text-field
            id="twitter"
            placeholder="@event123456"
          ></v-text-field>

          <label for="facebook">Facebook</label>
          <v-text-field
            id="facebook"
            placeholder="@event456"
          ></v-text-field>

          <label for="discord">Discord</label>
          <v-text-field
            id="discord"
            placeholder="username#345"
          ></v-text-field>
        </section>

        <div class="btns-div center divrow gap2">
          <v-btn class="btn btn-white" @click="ticketModelWindow = 1">Back</v-btn>
          <v-btn class="btn" @click="ticketModelWindow = 3">Next</v-btn>
        </div>
      </v-window-item>
      <v-window-item :value="3" class="window-3">
        <v-row class="mb-10">
          <v-col xl="5" lg="5" md="5" cols="12">
            <div class="nft-upload-div">
              <span class="absolute-font" style="left: 20px">
                <v-icon color="#cbcaca">mdi-image-outline</v-icon>
                <br><br>
                Press the button to upload your <br> main event image
              </span>

              <v-file-input
                ref="fileInputMainBanner"
                v-model="imageMainBanner"
                class="input-file"
                prepend-icon="none"
                style="display: none"
                accept="image/*"
                @change="onFileChangeMainBanner"
              ></v-file-input>

              <img :src="selectedImageMainBanner" alt="" class="imgMainBanner" />

              <v-btn
                class="btn btn-input-file"
                :disabled="showItem"
                @click="openFileInputMainBanner"
                >Upload banner</v-btn
              >
            </div>
          </v-col>
          <v-col xl="7" lg="7" md="7" cols="12">
            <div>
              <h2 class="Title h2-title">Create event - main event</h2>

              <p class="mt-10 mb-10">
                Choose a name for your event and tell attendees why you think they will have a great time. 
                Add details that highlight why your event is unique.
              </p>

              <section class="card">
                <label for="event_name_main">Event name</label>
                <v-text-field
                  id="event_name_main"
                  placeholder="Event name 1234"
                ></v-text-field>

                <label for="promoter_organizer_main">Promoter / Organizer</label>
                <v-text-field
                  id="promoter_organizer_main"
                  placeholder="Username#123"
                ></v-text-field>
              </section>
            </div>
          </v-col>
        </v-row>

        <h2 class="Title h2-title">
          How many tickets you would like have for your event?
        </h2>

        <p class="mt-10 mb-10">
          Add more details of your event, such as program, sponsors or featured guests.
        </p>

        <section class="card">
          <label for="how_many_tickets">How many tickets?</label>
          <div class="div-for-plus-minus">
            <v-text-field
              id="how_many_tickets"
              v-model="ticketNumber"
            ></v-text-field>
            <div class="minus-plus-div divrow center">
              <v-btn :disabled="equalCero" class="btn btn-plus-minus" @click="lessTickets()">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <v-btn class="btn btn-plus-minus ml-1" @click="moreTickets()">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
        </section>

        <div class="btns-div center divrow gap2">
          <v-btn class="btn btn-white" @click="ticketModelWindow = 2">Back</v-btn>
          <v-btn class="btn" @click="ticketModelWindow = 4">Next</v-btn>
        </div>
      </v-window-item>
      <v-window-item :value="4" class="window-4">
        <h2 class="Title h2-title">Create Event - Royalties</h2>
        <p class="mt-10 mb-10">
          Royalties are perpetual. You can add royalties up to 50% across 25 accounts.
        </p>

        <section class="card">
          <h5 class="bold">Royalties</h5>
          <v-row v-for="(item, index) in dataRoyalties" :key="index" class="mt-6">
            <v-col xl="9" lg="9" md="7" cols="12">
              <label for="near_account">{{item.name}}</label>
              <v-text-field
                id="near_account"
                placeholder="test_account.near"
              ></v-text-field>
            </v-col>
            <v-col xl="2" lg="2" md="4" cols="6" class="aend">
              <v-text-field
                id="percent"
                prepend-inner-icon = "mdi-percent"
              ></v-text-field>
            </v-col>
            <v-col xl="1" lg="1" md="1" cols="6" class="acenter divrow gap1">
              <v-icon color="red" class="pointer" @click="deleteRoyalties()">mdi-delete</v-icon>
              <v-btn class="btn-add">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-btn v-if="dataRoyalties.length > 0" class="btn" style="padding-inline: 50px!important;" @click="deleteRoyalties()">Cancel</v-btn>
          <v-btn v-else-if="dataRoyalties.length == 0" class="btn" style="padding-inline: 60px!important;" @click="addRoyalties()">Add</v-btn>
        </section>

        <h2 class="Title h2-title mt-16">Split Revenue</h2>
        <p class="mt-10 mb-10">
          Split revenue clears after each sale. Needs at least two wallet addresses. The minter will receive 100% of 
          split revenue unless splits are added.
        </p>

        <section class="card">
          <h5 class="bold">Split Revenue</h5>
          <v-row v-for="(item, index) in dataRevenue" :key="index" class="mt-6">
            <v-col xl="9" lg="9" md="7" cols="12">
              <label for="near_account">{{item.name}}</label>
              <v-text-field
                id="near_account"
                placeholder="test_account.near"
              ></v-text-field>
            </v-col>
            <v-col xl="2" lg="2" md="4" cols="6" class="aend">
              <v-text-field
                id="percent"
                prepend-inner-icon = "mdi-percent"
              ></v-text-field>
            </v-col>
            <v-col xl="1" lg="1" md="1" cols="6" class="acenter divrow gap1">
              <v-icon color="red" class="pointer" @click="deleteRevenue()">mdi-delete</v-icon>
              <v-btn class="btn-add">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-btn v-if="dataRevenue.length > 0" class="btn" style="padding-inline: 50px!important;" @click="deleteRevenue()">Cancel</v-btn>
          <v-btn v-else-if="dataRevenue.length == 0" class="btn" style="padding-inline: 60px!important;" @click="addRevenue()">Add</v-btn>
        </section>

        <div class="btns-div center divrow gap2">
          <v-btn class="btn btn-white" @click="ticketModelWindow = 3">Back</v-btn>
          <v-btn class="btn" @click="modalConfirm = true">Next</v-btn>
        </div>
      </v-window-item>
      <!-- <v-window-item :value="5" class="window-5">
        <h2 class="Title h2-title">
          Would you like to give a physical goodie with your ticket? (Drink, popcorn...)
        </h2>
        <p class="mt-10 mb-10">
          We will transfer this NFT once your attendes get inside the venue so they can redeem it to get a real good.
        </p>

        <section class="card">
          <div class="pt-5 pb-5 center gap1">
            <v-btn class="btn btn-yellow" @click="goodiesAdd = true">Yes</v-btn>
            <v-btn class="btn btn-white" @click="modalConfirm = true">No</v-btn>
          </div>
        </section>

        <template v-if="goodiesAdd">
          <section class="card mt-16">
            <label>What are attendees going to receive with the NFT ticket?</label>
            <v-text-field
              placeholder="Lorem Ipsum"
            ></v-text-field>
            <label for="how_many_goodies">How much goodies for each attendee per ticket?</label>
            <div class="div-for-plus-minus">
              <v-text-field
                id="how_many_goodies"
                v-model="goodiesNumber"
              ></v-text-field>
              <div class="minus-plus-div divrow center">
                <v-btn :disabled="equalCeroGoodies" class="btn btn-plus-minus" @click="lessGoodies()">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <v-btn class="btn btn-plus-minus ml-1" @click="moreGoodies()">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
          </section>

          <div class="btns-div center divrow gap2 mt-10 mb-0">
            <v-btn class="btn btn-white" @click="ticketModelWindow = 4">Back</v-btn>
            <v-btn class="btn" @click="modalConfirm = true">Next</v-btn>
          </div>
        </template>
      </v-window-item> -->
    </v-window>

    <v-dialog
      v-model="modalConfirm"
      max-width="500px"
      content-class="nft-dialog"
      persistent
    >
      <v-btn icon class="close" @click="modalConfirm = false">
        <v-icon large>mdi-close</v-icon>
      </v-btn>

      <v-card id="modalBuy" class="nft-dialog--content divcol gap1">
        <h3>SUCCESS!</h3>
        <p class="tcenter">Your transaction was succesful.</p>
        <v-btn class="btn btn-modal" @click="modalConfirm = false">Ok</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import computeds from '~/mixins/computeds'
  
  export default {
    name: "CreateEventPage",
    mixins: [computeds],
    data() {
      return {
        end_time: null,
        menu_end_time: false,

        start_time: null,
        menu_start_time: false,

        menu1: false, 
        start_date: null,

        menu2: false, 
        end_date: null,

        modalConfirm: false,

        equalCeroGoodies: true,

        goodiesNumber: 1,

        goodiesAdd: false,

        dataRevenue:[
          {
            name: "Near account"
          }
        ],

        dataRoyalties: [
          {
            name: "Near account"
          }
        ],

        imageMainBanner: undefined,
        selectedImageMainBanner: '',

        equalCero: true,

        ticketNumber: 1,

        imageTicketStep: 1,

        imageNft: undefined,
        selectedImageNft: '',

        ticketType: null,
        dialogTicket: false,
        ticketModelWindow: 1,
        carouselTickets: 0,
        dataTickets: [
          {
            img_number: "1",
          },
          {
            img_number: "2",
          },
          {
            img_number: "3",
          },
          {
            img_number: "4",
          },
          {
            img_number: "5",
          },
          {
            img_number: "6",
          },
          {
            img_number: "1",
          },
          {
            img_number: "2",
          },
          {
            img_number: "3",
          },
          {
            img_number: "4",
          },
          {
            img_number: "5",
          },
          {
            img_number: "6",
          },
        ]
      }
    },
    head() {
      const title = "Create Event"
      return {
        title,
      }
    },
    computed: {
      formattedStartTime() {
        return this.start_time ? this.start_time + " GMT-6" : "";
      },
    },
    methods: {
      openDialogTicket(item){
        this.ticketType = item.img_number;
        this.dialogTicket = true;
      },
      openFileInputNft() {
        this.$refs.fileInputNft.$el.querySelector('input[type="file"]').click()
      },
      createImageNft(file) {
        const reader = new FileReader()

        reader.onload = (e) => {
          this.selectedImageNft = e.target.result
        }
        reader.readAsDataURL(file)
      },
      onFileChangeNft(file) {
        if (!file) {
          return
        }
        this.createImageNft(file)
        this.imageTicketStep = 2;
      },

      openFileInputMainBanner() {
        this.$refs.fileInputMainBanner.$el.querySelector('input[type="file"]').click()
      },
      createImageMainBanner(file) {
        const reader = new FileReader()

        reader.onload = (e) => {
          this.selectedImageMainBanner = e.target.result
        }
        reader.readAsDataURL(file)
      },
      onFileChangeMainBanner(file) {
        if (!file) {
          return
        }
        this.createImageMainBanner(file)
      },
      lessTickets(){
        this.ticketNumber--

        if(this.ticketNumber < 1){
          this.equalCero = true
        }
      },
      moreTickets(){
        this.ticketNumber++

        if(this.ticketNumber > 1){
          this.equalCero = false
        }
      },

      deleteRoyalties(){
        this.dataRoyalties.pop()
      },
      addRoyalties(){
        this.dataRoyalties.push({name: "Near Account"})
      },

      deleteRevenue(){
        this.dataRevenue.pop()
      },
      addRevenue(){
        this.dataRevenue.push({name: "Near Account"})
      },

      lessGoodies(){
        this.goodiesNumber--

        if(this.goodiesNumber < 1){
          this.equalCeroGoodies = true
        }
      },
      moreGoodies(){
        this.goodiesNumber++

        if(this.goodiesNumber > 1){
          this.equalCeroGoodies = false
        }
      },
    }
  };
</script>
  
<style src="~/assets/styles/pages/create-event.scss" lang="scss" />