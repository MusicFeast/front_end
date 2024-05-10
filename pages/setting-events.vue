<template>
  <div id="setting-events">
    <h2 class="Title mb-16">Setting - Name event</h2>
    
    <div class="card">
      <h4 class="p">Burn a ticket</h4>
    </div>
    <v-data-table
      :headers="headersBurn"
      :items="dataBurn"
      hide-default-footer
      hide-default-header
      class="mb-16"
    >
      <template #[`item.name`] = "{ item }">
        <div class="divrow jstart acenter gap1">
          <img :src="require(`~/assets/sources/images/${item.img}.png`)" alt="Img Table" class="img-table-circle">
          <span>{{ item.name }}</span>
        </div>
      </template>
      <template #[`item.action`]="{ item }">
        <div class="divrow jend gap1 btns-div">
          <v-btn class="btn btn-white" @click="modalQrGenerator = true">
            <v-icon class="mr-1">mdi-qrcode</v-icon> Show QR
          </v-btn>
          <v-btn class="btn">
            {{ item.action }}
          </v-btn>
        </div>
      </template>
    </v-data-table>

    <div class="card">
      <h4 class="p">Burn a goodie</h4>
    </div>
    <v-data-table
      :headers="headersGoodie"
      :items="dataGoodie"
      hide-default-footer
      hide-default-header
      class="mb-16"
    >
      <template #[`item.name`] = "{ item }">
        <div class="divrow jstart acenter gap1">
          <img :src="require(`~/assets/sources/images/${item.img}.png`)" alt="Img Table" class="img-table-circle">
          <span>{{ item.name }}</span>
        </div>
      </template>
      <template #[`item.action`]="{ item }">
        <div class="divrow jend gap1 btns-div">
          <v-btn class="btn btn-white" @click="modalQrGenerator = true">
            <v-icon class="mr-1">mdi-qrcode</v-icon> Show QR
          </v-btn>
          <v-btn class="btn">
            {{ item.action }}
          </v-btn>
        </div>
      </template>
    </v-data-table>

    <div class="card">
      <h4 class="p">Tickets</h4>
    </div>
    <v-data-table
      :headers="headersTicket"
      :items="dataTicket"
      hide-default-footer
      class="mb-16"
    >
      <template #[`item.tickets_minted`] = "{ item }">
        <div class="divrow center gap1">
          <span>{{ item.tickets_minted }} / {{ item.tickets_minted_available }}</span>
        </div>
      </template> 
      <template #[`item.tickets_listed`] = "{ item }">
        <div class="divrow center gap1">
          <span>{{ item.tickets_listed }}</span>
        </div>
      </template>
      <template #[`item.action`]="{ item }">
        <div class="divrow jend gap1 btns-div">
          <v-btn class="btn btn-yellow" @click="modalMoreMint = true">
            Mint more
          </v-btn>
          <v-btn class="btn">
            {{ item.action }}
          </v-btn>
        </div>
      </template>
    </v-data-table>

    <!-- Dialog Mint More -->
    <v-dialog
      v-model="modalMoreMint"
      max-width="500px"
      content-class="nft-dialog"
      persistent
    >
      <v-btn icon class="close" @click="modalMoreMint = false">
        <v-icon large>mdi-close</v-icon>
      </v-btn>

      <v-card id="modalBuy" class="nft-dialog--content divcol gap1">
        <h3 class="p">Amount</h3>
        <p class="tcenter">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <v-text-field
          v-model="mintValue"
          class="search"
          hide-details solo
          style="--p: 0 1em 0 1em"
          >
          <template #append>
            <div class="minus-plus-div divrow center">
              <v-btn :disabled="equalCero" class="btn btn-plus-minus" @click="lessMint()">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <v-btn class="btn btn-plus-minus ml-1" @click="moreMint()">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
          </template>
        </v-text-field>
        <v-btn class="btn" @click="modalMoreMint = false">Mint more</v-btn>
      </v-card>
    </v-dialog>

    <!-- Dialog QR Generator -->
    <v-dialog
      v-model="modalQrGenerator"
      max-width="500px"
      content-class="nft-dialog"
      persistent
    >
      <v-btn icon class="close" @click="modalQrGenerator = false">
        <v-icon large>mdi-close</v-icon>
      </v-btn>

      <v-card id="modalBuy" class="nft-dialog--content divcol gap1">
        <h3 class="p" style="font-size: 1.5em!important;">Terminator (Let me in)</h3>
        <p class="tcenter" style="font-size: 1em!important;">Royalties are perpetual. You can add royalties up to 50% across 25 accounts.</p>

        <v-card class="pa-6 card-qr center">
          <img src="~/assets/sources/images/qr-test.png" alt="Qr" class="img-qr">
        </v-card>
        
        <v-btn class="btn" @click="modalQrGenerator = false">Burn it</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import computeds from '~/mixins/computeds'
  
  export default {
    name: "SettingEventPage",
    mixins: [computeds],
    data() {
      return {
        equalCero: true,

        mintValue: 1,

        modalQrGenerator: false,
        modalMoreMint: false,

        headersBurn: [
          { text: '', align: 'start', sortable: false, value: 'name'},
          { text: '', value: 'action', sortable: false },
        ],
        dataBurn:[
          {
            name: 'Name of the event (Access Control)',
            img: 'fest-img-1',
            action: 'Copy URL'
          }
        ],

        headersGoodie: [
          { text: '', align: 'start', sortable: false, value: 'name'},
          { text: '', value: 'action', sortable: false },
        ],
        dataGoodie:[
          {
            name: 'Name of the event (Access Control)',
            img: 'fest-img-1',
            action: 'Copy URL'
          }
        ],

        headersTicket: [
          { text: 'TICKETS MINTED ', value: 'tickets_minted', align: 'center', sortable: false },
          { text: 'TICKETS LISTED', value: 'tickets_listed', align: 'center', sortable: false },
          { text: '', value: 'action', sortable: false },
        ],
        dataTicket: [
          {
            tickets_minted: 7,
            tickets_minted_available: 20,
            tickets_listed: 15,
            action: "List more"
          },
        ]
      }
    },
    head() {
      const title = "Setting Events"
      return {
        title,
      }
    },
    methods: {
      lessMint(){
        this.mintValue--

        if(this.mintValue < 1){
          this.equalCero = true
        }
      },
      moreMint(){
        this.mintValue++

        if(this.mintValue > 1){
          this.equalCero = false
        }
      },
    }
  };
</script>
  
<style src="~/assets/styles/pages/setting-events.scss" lang="scss" />