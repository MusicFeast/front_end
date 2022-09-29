<template>
  <div id="about" class="divcol">
    <div id="about--header" class="center">
      <h2 class="Title tup fill_w">about</h2>
    </div>

    <section class="divcol" style="margin-block: 2.5em; padding-inline: var(--margin-separator); gap: 3em">
      <div v-for="(item,i) in dataAbout" :key="i">
        <h2 class="tup">{{item.title}}</h2>
        <p class="p" style="font-size: 1.2em">{{item.desc}}</p>
      </div>
    </section>

    <h2 class="Title tup">core team</h2>

    <section v-for="(item,i) in dataTeam" :key="i" class="container-team">
      <aside class="container-team--photo">
        <v-sheet color="transparent">
          <div>
            <v-btn v-for="(item2,i2) in item.social" :key="i2" icon :href="item2.link" target="_blank">
              <v-icon color="var(--accent)">{{item2.icon}}</v-icon>
            </v-btn>
          </div>
        </v-sheet>
        <img :src="item.img" :alt="`${item.name}'s image`">
      </aside>

      <v-sheet class="container-team--content divcol gap1" color="transparent">
        <h3 class="p">{{item.name}}</h3>
        <span>{{item.position}}</span>
        <p class="p">{{item.desc}}</p>
      </v-sheet>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      dataAbout: [
        {
          title: "music feast",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        },
        {
          title: "everyone eats entertainment (eee)",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
        },
        {
          title: "everyone eats entertainment (eee)",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
        },
      ],
      dataTeam: [
        {
          img: require("~/assets/sources/team/team.jpg"),
          name: "herian palencia",
          position: "layout designer",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit",
          social: [
            { icon: "mdi-instagram", link: "" },
            { icon: "mdi-twitter", link: "" },
            { icon: "mdi-facebook", link: "" },
            { icon: "discord", link: "" },
          ],
        },
        {
          img: require("~/assets/sources/team/team.jpg"),
          name: "herian palencia",
          position: "layout designer",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit",
          social: [
            { icon: "mdi-instagram", link: "" },
            { icon: "mdi-twitter", link: "" },
            { icon: "mdi-facebook", link: "" },
            { icon: "discord", link: "" },
          ],
        },
        {
          img: require("~/assets/sources/team/team.jpg"),
          name: "herian palencia",
          position: "layout designer",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit",
          social: [
            { icon: "mdi-instagram", link: "" },
            { icon: "mdi-twitter", link: "" },
            { icon: "mdi-facebook", link: "" },
            { icon: "discord", link: "" },
          ],
        },
      ],
    }
  },
  mounted() {
    const pageName = 'about';
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
      if (this.$route.path===`/${pageName}`) {
        heightH2();
      };
    });
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/pages/about.scss" lang="scss" />
