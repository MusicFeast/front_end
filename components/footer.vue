<template>
  <v-footer id="footer" absolute class="font2">
    <v-row no-gutters class="align">
      <!-- content -->
      <section class="fill_w space gap2 divcolmobile">
        <aside class="left divcol gap1" style="width: min(100%, 12em)">
          <img src="~/assets/sources/logos/logo-footer.jpg" alt="Logo" class="alignmobile" style="--w:100%">

          <div class="gap1 space eliminarmobile">
            <v-btn
              v-for="(item,i) in dataRedes" :key="i" icon :href="item.to" target="_blank">
              <v-icon size="2em">{{item.icon}}</v-icon>
            </v-btn>
          </div>
        </aside>

        <aside class="right">
          <v-card v-for="(item,i) in dataFooter" :key="i" color="transparent">
            <label class="h11_em">{{ item.title }}</label>

            <a v-for="(item2, i2) in item.links" :key="i2" class="h11_em hover_line" @click="$scrollTo(item2.to)">
              {{ item2.link }}
            </a>
          </v-card>
        </aside>
      </section>

      <section id="container-copyright" class="fill_w space tcenter divcol_invmobile gap2">
        <span class="h11_em">&copy; 2022 Music Feast. All Rights Reserved.</span>
        <span class="h11_em">Cookie statement Terms &amp; Conditions Privacy Policy</span>
      </section>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      dataRedes: [
        { icon: "mdi-instagram", to: "home" },
        { icon: "mdi-twitter", to: "home" },
        { icon: "mdi-facebook", to: "home" },
        { icon: "discord", to: "home" },
      ],
      dataFooter: [
        {
          title: "Explore",
          links: [
            { link: "Help", to: "home" },
            { link: "Terms", to: "home" },
            { link: "Guildlines", to: "home" },
            { link: "White Paper", to: "home" },
          ]
        },
        {
          title: "Explore",
          links: [
            { link: "Lorem", to: "home" },
            { link: "Lorem Ipsum", to: "home" },
            { link: "Lorem ips", to: "home" },
            { link: "Lorem ipsum", to: "home" },
          ]
        },
        {
          title: "More",
          links: [
            { link: "Advertise", to: "home" },
            { link: "Integrations", to: "home" },
            { link: "Careers", to: "home" },
          ]
        },
      ],
    }
  },
}
</script>

<style src="~/assets/styles/components/footer.scss" lang="scss" />
