<template>
  <v-footer id="footer" absolute class="font2">
    <v-row no-gutters class="align">
      <!-- content -->
      <section class="fill_w space gap2 divcolmobile">
        <aside class="left divcol gap1" style="width: min(100%, 12em)">
          <img src="~/assets/sources/logos/logo-footer.jpg" alt="Logo" class="alignmobile" style="--w:100%">

          <div class="gap1 space deletemobile">
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
        <span class="h11_em">&copy; 2022 Music Feast. Everyone Eats Entertainment LP.</span>
        <span class="h11_em">Cookie statement <span class="pointer semibold" @click="$router.push(localePath('/terms-and-conditions'))">Terms &amp; Conditions</span> Privacy Policy</span>
      </section>

      <a class="h11_em alignr mt-3 pr-8" href="https://www.dvconsultores.com/#/" target="_blank">Powered by GlobalDv</a>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      dataRedes: [
        { icon: "mdi-instagram", to: "#" },
        { icon: "mdi-twitter", to: "#" },
        { icon: "mdi-facebook", to: "#" },
        { icon: "discord", to: "#" },
      ],
      dataFooter: [
        {
          title: "Explore",
          links: [
            { link: "Help", to: "/" },
            { link: "Terms", to: "/" },
            { link: "Guildlines", to: "/" },
            { link: "White Paper", to: "/" },
          ]
        },
        {
          title: "Explore",
          links: [
            { link: "Lorem", to: "/" },
            { link: "Lorem Ipsum", to: "/" },
            { link: "Lorem ips", to: "/" },
            { link: "Lorem ipsum", to: "/" },
          ]
        },
        {
          title: "More",
          links: [
            { link: "Advertise", to: "/" },
            { link: "Integrations", to: "/" },
            { link: "Careers", to: "/" },
          ]
        },
      ],
    }
  },
}
</script>

<style src="~/assets/styles/components/footer.scss" lang="scss" />
