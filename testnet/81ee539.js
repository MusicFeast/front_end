(window.webpackJsonp=window.webpackJsonp||[]).push([[27,14,16],{1010:function(t,r,e){"use strict";e.r(r);var o=e(720),n=e(1086),l=e(1087),c=e(290),d=e(225),m=e(814),v={name:"HeroSection",mixins:[e(816).a],props:{dataHero:{type:Array,default:null}},methods:{}},h=(e(846),e(31)),component=Object(h.a)(v,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"divcol center overflow",attrs:{id:"hero"}},[r(n.a,{attrs:{id:"custome-carousel",height:"max-content"},scopedSlots:t._u([{key:"prev",fn:function(e){var n=e.on,l=e.attrs;return[r(o.a,t._g(t._b({staticClass:"reverse",attrs:{icon:""}},"v-btn",l,!1),n),[r(c.a,{attrs:{"x-large":""}},[t._v("mdi-play")])],1)]}},{key:"next",fn:function(e){var n=e.on,l=e.attrs;return[r(o.a,t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),n),[r(c.a,{attrs:{"x-large":""}},[t._v("mdi-play")])],1)]}}])},t._l(t.dataHero,(function(e,i){return r(l.a,{key:i},[r(d.a,{attrs:{src:t.isMobile?e.image_mobile:e.image,alt:"carousel image",transition:"fade-transition"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r(m.a,{attrs:{type:"card"}})]},proxy:!0}],null,!0)})],1)})),1)],1)}),[],!1,null,null,null);r.default=component.exports},1011:function(t,r,e){"use strict";e.r(r);var o=e(720),n=e(290),l=e(225),c=e(54),d=e(814),m=e(841),v=e(859),h=(e(12),e(57),e(33),{name:"AboutXArtistsSection",props:{dataAbout:{type:Array,default:void 0},dataArtists:{type:Array,default:void 0}},data:function(){return{slider:void 0}},methods:{}}),f=(e(848),e(31)),component=Object(f.a)(h,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"divcol center",attrs:{id:"about--artists"}},[r("section",{attrs:{id:"about--home"}},[r("h1",[t._v("ABOUT")]),t._v(" "),r(c.a,{staticClass:"content divcol gap1 gap2mobile",attrs:{color:"transparent"}},t._l(t.dataAbout,(function(e,i){return r("div",{key:i,staticClass:"content-top divcol"},[r("h2",{staticClass:"tup"},[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"p",domProps:{innerHTML:t._s(e.description)}}),t._v(" "),r("a",{staticClass:"deletemobile",on:{click:function(r){t.$router.push(t.localePath("/about"))}}},[t._v("More")])])})),0)],1),t._v(" "),t._l(2,(function(t){return r("div",{key:t,staticClass:"separators"})})),t._v(" "),r("section",{attrs:{id:"artists--home"}},[r(m.a,{attrs:{id:"custome-slider-artists",mandatory:"","show-arrows":"","center-active":""},scopedSlots:t._u([{key:"prev",fn:function(e){var l=e.on,c=e.attrs;return[r(o.a,t._g(t._b({staticClass:"reverse",attrs:{icon:""}},"v-btn",c,!1),l),[r(n.a,{attrs:{"x-large":""}},[t._v("mdi-play")])],1)]}},{key:"next",fn:function(e){var l=e.on,c=e.attrs;return[r(o.a,t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),l),[r(n.a,{attrs:{"x-large":""}},[t._v("mdi-play")])],1)]}}]),model:{value:t.slider,callback:function(r){t.slider=r},expression:"slider"}},t._l(t.dataArtists,(function(e,i){return r(v.a,{key:i},[r(l.a,{attrs:{src:e.image,alt:"".concat(e.name," image"),transition:"fade-transition"},on:{click:function(r){return t.$store.dispatch("goTo",{key:"artist",item:e})}},scopedSlots:t._u([{key:"default",fn:function(){return[r(c.a,[r("div",{staticClass:"divcol"},[r("h3",[t._v(t._s(e.name))]),t._v(" "),r("p",[t._v(t._s(e.description))])])])]},proxy:!0},{key:"placeholder",fn:function(){return[r(d.a,{attrs:{width:"100%",height:"100%",type:"card"}})]},proxy:!0}],null,!0)})],1)})),1),t._v(" "),r("h1",[t._v("ARTISTS")])],1),t._v(" "),r(o.a,{staticClass:"btn h10_em view-all__btn",attrs:{to:t.localePath("/artists")}},[t._v("View All")])],2)}),[],!1,null,null,null);r.default=component.exports},1012:function(t,r,e){"use strict";e.r(r);var o=e(720),n={name:"JoinSection",mixins:[e(121).a],data:function(){return{}},methods:{}},l=(e(850),e(31)),component=Object(l.a)(n,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"center",attrs:{id:"join"}},[r("article",{staticClass:"divcol center gap2"},[r("h2",[t._v("Join the community")]),t._v(" "),r("p",{staticClass:"tcentermobile"},[t._v("\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laborum aliquid aperiam minima nulla voluptatem sequi \n      perferendis doloribus molestias doloremque. Omnis dolorum recusandae unde rem eos quam minima vero nihil.\n    ")]),t._v(" "),r("div",{staticClass:"center wrap fill_w",staticStyle:{gap:"clamp(2em, 4vw, 4em)"}},[r(o.a,{staticClass:"btn",staticStyle:{"--w":"8.5em"},attrs:{href:"https://discord.com/invite/N7agx9n5",target:"_blank"}},[t._v("Join")])],1)])])}),[],!1,null,null,null);r.default=component.exports},1013:function(t,r,e){"use strict";e.r(r);var o=e(720),n=e(742),l=e(290),c=e(225),d=e(841),m=e(859),v=(e(12),e(57),{name:"NewsSection",props:{dataNews:{type:Array,default:null}},data:function(){return{slider:null}},methods:{goTo:function(t){this.$store.dispatch("goTo",{key:"news",item:t}),localStorage.setItem("validator-news","pages")}}}),h=(e(852),e(31)),component=Object(h.a)(v,(function(){var t=this,r=t._self._c;return r("div",{attrs:{id:"news"}},[r("h2",{staticClass:"p tcenter"},[t._v("Press & News")]),t._v(" "),r(d.a,{attrs:{id:"slider-news",mandatory:"","show-arrows":""},scopedSlots:t._u([{key:"prev",fn:function(e){var n=e.on,c=e.attrs;return[r(o.a,t._g(t._b({staticClass:"reverse",attrs:{icon:""}},"v-btn",c,!1),n),[r(l.a,{attrs:{"x-large":""}},[t._v("mdi-play")])],1)]}},{key:"next",fn:function(e){var n=e.on,c=e.attrs;return[r(o.a,t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),n),[r(l.a,{attrs:{"x-large":""}},[t._v("mdi-play")])],1)]}}]),model:{value:t.slider,callback:function(r){t.slider=r},expression:"slider"}},t._l(t.dataNews,(function(e,i){return r(m.a,{key:i,scopedSlots:t._u([{key:"default",fn:function(o){o.toggle;return[r(n.a,{staticClass:"tcentermobile",attrs:{color:"transparent",ripple:!1},on:{click:function(r){t.goTo(e)}}},[r(c.a,{staticStyle:{"--w":"100%","--h":"23em","--br":"5px"},attrs:{src:e.image,alt:"".concat(e.title," image"),transition:"fade-transition"}}),t._v(" "),r("h3",{staticClass:"p"},[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"p",domProps:{innerHTML:t._s(e.description)}})],1)]}}],null,!0)})})),1)],1)}),[],!1,null,null,null);r.default=component.exports},1058:function(t,r,e){t.exports=e.p+"img/img-listed-6.380686d.jpg"},1059:function(t,r,e){t.exports=e.p+"img/img-listed-7.8d1fb1a.jpg"},1060:function(t,r,e){t.exports=e.p+"img/img-listed-8.018e5da.jpg"},1100:function(t,r,e){"use strict";e.r(r);e(5),e(14),e(45),e(33),e(52),e(39),e(25),e(12),e(57),e(64),e(41);function o(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return n(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,d=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){d=!0,l=t},f:function(){try{c||null==e.return||e.return()}finally{if(d)throw l}}}}function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,e=new Array(r);i<r;i++)e[i]=t[i];return e}var l={name:"HomePage",mixins:[e(121).a],data:function(){return{dataHero:[],dataAbout:[],dataArtists:[],dataLastestReleases:[{avatar:e(315),artist:"Artist n°1",img:e(822),title:"Lorem ipsum dolor sit amet,",desc:"Lorem ipsum dolor sit amet,",state:"live",event:"toronto"},{avatar:e(315),artist:"Artist n°2",img:e(823),title:"Lorem ipsum dolor sit amet,",desc:"Lorem ipsum dolor sit amet,",state:"live",event:"miami"},{avatar:e(315),artist:"Artist n°3",img:e(824),title:"Lorem ipsum dolor sit amet,",desc:"Lorem ipsum dolor sit amet,",state:"sold out",event:"madrid"},{avatar:e(315),artist:"Artist n°4",img:e(825),title:"Lorem ipsum dolor sit amet,",desc:"Lorem ipsum dolor sit amet,",state:"live",event:"toronto"},{avatar:e(315),artist:"Artist n°5",img:e(750),title:"Lorem ipsum dolor sit amet,",desc:"Lorem ipsum dolor sit amet,",state:"sold out",event:"madrid"},{avatar:e(315),artist:"Artist n°6",img:e(1058),title:"Lorem ipsum dolor sit amet,",desc:"Lorem ipsum dolor sit amet,",state:"live",event:"miami"},{avatar:e(315),artist:"Artist n°7",img:e(1059),title:"Lorem ipsum dolor sit amet,",desc:"Lorem ipsum dolor sit amet,",state:"sold out",event:"madrid"},{avatar:e(315),artist:"Artist n°8",img:e(1060),title:"Lorem ipsum dolor sit amet,",desc:"Lorem ipsum dolor sit amet,",state:"sold out",event:"toronto"}],dataNews:[]}},head:function(){return{title:"Home"}},mounted:function(){var t=this;this.$axios.get("".concat(this.baseUrl,"api/v1/get-carousel")).then((function(r){r.data.forEach((function(r){r.image=t.baseUrl+r.image,r.image_mobile=t.baseUrl+r.image_mobile})),t.dataHero=r.data})).catch((function(r){t.$alert("cancel",{desc:r.message}),console.error(r)})),this.$axios.get("".concat(this.baseUrl,"api/v1/get-about")).then((function(r){var e,n=o(r.data);try{for(n.s();!(e=n.n()).done;){var l=e.value;t.dataAbout.push(l)}}catch(t){n.e(t)}finally{n.f()}})).catch((function(t){console.error(t)})),this.$axios.get("".concat(this.baseUrl,"api/v1/get-artists-home")).then((function(r){r.data.forEach((function(r){r.banner=t.baseUrl+r.banner,r.image=r.image?t.baseUrl+r.image:e(315)})),t.dataArtists=r.data})).catch((function(r){t.$alert("cancel",{desc:r.message}),console.error(r)})),this.$axios.get("".concat(this.baseUrl,"api/v1/get-news")).then((function(r){r.data.forEach((function(r){r.image=t.baseUrl+r.image})),t.dataNews=r.data})).catch((function(r){t.$alert("cancel",{desc:r.message}),console.error(r)}))},methods:{}},c=e(31),component=Object(c.a)(l,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"divcol",staticStyle:{gap:"4em"},attrs:{id:"home"}},[r("SectionsHero",{attrs:{"data-hero":t.dataHero}}),t._v(" "),r("SectionsAboutArtists",{attrs:{"data-about":t.dataAbout,"data-artists":t.dataArtists}}),t._v(" "),r("SectionsJoin"),t._v(" "),r("SectionsLastestReleases",{attrs:{"data-lastest-releases":t.dataLastestReleases}}),t._v(" "),r("SectionsNews",{attrs:{"data-news":t.dataNews}})],1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{SectionsHero:e(1010).default,SectionsAboutArtists:e(1011).default,SectionsJoin:e(1012).default,SectionsLastestReleases:e(1081).default,SectionsNews:e(1013).default})},750:function(t,r,e){t.exports=e.p+"img/img-listed-5.04949aa.jpg"},801:function(t,r,e){"use strict";var o=e(186);r.a=o.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return o.a.options.computed.classes.call(this)}},methods:{genData:o.a.options.methods.genData}})},816:function(t,r,e){"use strict";r.a={data:function(){return{isMobile:void 0}},mounted:function(){this.IsMobile(),window.addEventListener("resize",this.IsMobile)},beforeDestroy:function(){window.removeEventListener("resize",this.IsMobile)},methods:{IsMobile:function(){window.innerWidth<=880?this.isMobile=!0:this.isMobile=!1}}}},817:function(t,r,e){"use strict";t.exports=function(t,r){return r||(r={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),r.hash&&(t+=r.hash),/["'() \t\n]/.test(t)||r.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},820:function(t,r,e){t.exports=e.p+"img/img-parallax.6213aac.jpg"},822:function(t,r,e){t.exports=e.p+"img/img-listed-1.e921144.jpg"},823:function(t,r,e){t.exports=e.p+"img/img-listed-2.e6f8a62.jpg"},824:function(t,r,e){t.exports=e.p+"img/img-listed-3.e679d54.jpg"},825:function(t,r,e){t.exports=e.p+"img/img-listed-4.9baf1aa.jpg"},826:function(t,r,e){var content=e(847);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(23).default)("230a9252",content,!0,{sourceMap:!1})},827:function(t,r,e){var content=e(849);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(23).default)("017eadb7",content,!0,{sourceMap:!1})},828:function(t,r,e){var content=e(851);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(23).default)("b29a7e52",content,!0,{sourceMap:!1})},829:function(t,r,e){var content=e(853);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(23).default)("26258cb7",content,!0,{sourceMap:!1})},846:function(t,r,e){"use strict";e(826)},847:function(t,r,e){var o=e(22)(!1);o.push([t.i,':root{--primary:#ee3a3a;--secondary:#000;--accent:#f7931e;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to left top,var(--primary),var(--secondary));--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--margin-global:6em;--parent:1800px;--subparent:1900px;--h-navbar:100px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.dark{--clr:#fff;--clr-inv:#111011;--clr-hover:#fccfcf;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-card-inv:#fff;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}:root.dark,:root.light{--bg-ap:var(--clr-gradient)}:root.light{--clr:#000;--clr-inv:#fff;--clr-hover:#300303;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-card-inv:#191919;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#ee3a3a!important;background-color:var(--primary)!important}.clr_secondary{background-color:#000!important;background-color:var(--secondary)!important}.clr{color:var(--clr)!important}.clr_inv{color:var(--clr-inv)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_card-inv{background-color:var(--clr-card-inv)!important}.clr_svg{fill:var(--clr)!important}.clr_svg_inv{fill:var(--clr-inv)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to left top,#ee3a3a,#000)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#hero{position:relative;width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw)}#hero #custome-carousel{max-height:750px}#hero #custome-carousel .v-skeleton-loader{height:750px}@media(max-width:880px)and (fixed-width:){#hero #custome-carousel .v-skeleton-loader{height:450px}}@media(max-width:880px){#hero #custome-carousel .v-skeleton-loader{height:450px}}@media(max-width:880px)and (fixed-width:){#hero #custome-carousel .v-responsive__content{min-height:450px}}@media(max-width:880px){#hero #custome-carousel .v-responsive__content{min-height:450px}}#hero #custome-carousel .v-image__image{background-size:100%!important}@media(max-width:880px)and (fixed-width:){#hero #custome-carousel .v-image__image{background-size:cover!important}}@media(max-width:880px){#hero #custome-carousel .v-image__image{background-size:cover!important}}#hero #custome-carousel .v-window__next,#hero #custome-carousel .v-window__prev{top:calc(clamp(30em, 46vw, 46.875em)/2)}#hero #custome-carousel .v-carousel__controls button{background-color:#fff;border-radius:0}#hero #custome-carousel .v-carousel__controls button i{display:none}#hero #custome-carousel .v-carousel__controls .v-btn--active{background-color:#ee3a3a;background-color:var(--active)}',""]),t.exports=o},848:function(t,r,e){"use strict";e(827)},849:function(t,r,e){var o=e(22)(!1);o.push([t.i,':root{--primary:#ee3a3a;--secondary:#000;--accent:#f7931e;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to left top,var(--primary),var(--secondary));--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--margin-global:6em;--parent:1800px;--subparent:1900px;--h-navbar:100px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.dark{--clr:#fff;--clr-inv:#111011;--clr-hover:#fccfcf;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-card-inv:#fff;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}:root.dark,:root.light{--bg-ap:var(--clr-gradient)}:root.light{--clr:#000;--clr-inv:#fff;--clr-hover:#300303;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-card-inv:#191919;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#ee3a3a!important;background-color:var(--primary)!important}.clr_secondary{background-color:#000!important;background-color:var(--secondary)!important}.clr{color:var(--clr)!important}.clr_inv{color:var(--clr-inv)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_card-inv{background-color:var(--clr-card-inv)!important}.clr_svg{fill:var(--clr)!important}.clr_svg_inv{fill:var(--clr-inv)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to left top,#ee3a3a,#000)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#about--artists{position:relative;padding-left:6em;padding-right:6em;padding-left:var(--margin-global);padding-right:var(--margin-global)}@media(max-width:880px)and (fixed-width:){#about--artists h1{text-align:center}}@media(max-width:880px){#about--artists h1{text-align:center}}@media(min-width:880px)and (fixed-width:){#about--artists h1{letter-spacing:-.18em;writing-mode:vertical-lr;text-orientation:upright}}@media(min-width:880px){#about--artists h1{letter-spacing:-.18em;writing-mode:vertical-lr;text-orientation:upright}}#about--artists #about--home{display:flex;grid-gap:clamp(2em,3vw,3em);gap:clamp(2em,3vw,3em)}@media(max-width:880px)and (fixed-width:){#about--artists #about--home{flex-direction:column}}@media(max-width:880px){#about--artists #about--home{flex-direction:column}}#about--artists #about--home p{font-size:20.8px;font-weight:300;line-height:1.2;margin-left:.5em}#about--artists #about--home a{font-size:19.2px;font-weight:500;margin-left:auto;text-decoration:underline}#about--artists .separators{--size-margin:6em;width:93%;height:var(--size-margin);border:0 solid #ee3a3a;border:0 solid var(--primary)}@media(max-width:880px)and (fixed-width:){#about--artists .separators{--size-margin:2em}}@media(max-width:880px){#about--artists .separators{--size-margin:2em}}#about--artists .separators:not(:last-of-type){border-left-width:1px;border-bottom-width:1px}#about--artists .separators:last-of-type{border-right-width:1px}#about--artists #artists--home{width:100%;display:flex;grid-gap:clamp(2em,3vw,3em);gap:clamp(2em,3vw,3em);position:relative}@media(max-width:880px)and (fixed-width:){#about--artists #artists--home{flex-direction:column-reverse}}@media(max-width:880px){#about--artists #artists--home{flex-direction:column-reverse}}@media(min-width:880px)and (fixed-width:){#about--artists #artists--home h1{position:absolute;top:0;right:0}}@media(min-width:880px){#about--artists #artists--home h1{position:absolute;top:0;right:0}}#about--artists #artists--home .v-item-group#custome-slider-artists{min-width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw)}@media(min-width:880px)and (fixed-width:){#about--artists #artists--home .v-item-group#custome-slider-artists{min-width:calc(100vw - 6em - 88px - clamp(2em, 3vw, 3em));min-width:calc(100vw - var(--margin-global) - 88px - clamp(2em, 3vw, 3em));margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw)}}@media(min-width:880px)and (fixed-width:)and (min-width:1700px)and (fixed-width:){#about--artists #artists--home .v-item-group#custome-slider-artists{min-width:calc(95vw - 6em - 88px - clamp(2em, 3vw, 3em));min-width:calc(95vw - var(--margin-global) - 88px - clamp(2em, 3vw, 3em))}}@media(min-width:880px)and (fixed-width:)and (min-width:1700px){#about--artists #artists--home .v-item-group#custome-slider-artists{min-width:calc(95vw - 6em - 88px - clamp(2em, 3vw, 3em));min-width:calc(95vw - var(--margin-global) - 88px - clamp(2em, 3vw, 3em))}}@media(min-width:880px)and (fixed-width:)and (min-width:1900px)and (fixed-width:){#about--artists #artists--home .v-item-group#custome-slider-artists{min-width:calc(90vw - 6em - 88px - clamp(2em, 3vw, 3em));min-width:calc(90vw - var(--margin-global) - 88px - clamp(2em, 3vw, 3em))}}@media(min-width:880px)and (fixed-width:)and (min-width:1900px){#about--artists #artists--home .v-item-group#custome-slider-artists{min-width:calc(90vw - 6em - 88px - clamp(2em, 3vw, 3em));min-width:calc(90vw - var(--margin-global) - 88px - clamp(2em, 3vw, 3em))}}@media(min-width:880px)and (fixed-width:)and (min-width:2100px)and (fixed-width:){#about--artists #artists--home .v-item-group#custome-slider-artists{min-width:calc(85vw - 6em - 88px - clamp(2em, 3vw, 3em));min-width:calc(85vw - var(--margin-global) - 88px - clamp(2em, 3vw, 3em))}}@media(min-width:880px)and (fixed-width:)and (min-width:2100px){#about--artists #artists--home .v-item-group#custome-slider-artists{min-width:calc(85vw - 6em - 88px - clamp(2em, 3vw, 3em));min-width:calc(85vw - var(--margin-global) - 88px - clamp(2em, 3vw, 3em))}}@media(min-width:880px){#about--artists #artists--home .v-item-group#custome-slider-artists{min-width:calc(100vw - 6em - 88px - clamp(2em, 3vw, 3em));min-width:calc(100vw - var(--margin-global) - 88px - clamp(2em, 3vw, 3em));margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw)}}@media(min-width:880px)and (min-width:1700px)and (fixed-width:){#about--artists #artists--home .v-item-group#custome-slider-artists{min-width:calc(95vw - 6em - 88px - clamp(2em, 3vw, 3em));min-width:calc(95vw - var(--margin-global) - 88px - clamp(2em, 3vw, 3em))}}@media(min-width:880px)and (min-width:1700px){#about--artists #artists--home .v-item-group#custome-slider-artists{min-width:calc(95vw - 6em - 88px - clamp(2em, 3vw, 3em));min-width:calc(95vw - var(--margin-global) - 88px - clamp(2em, 3vw, 3em))}}@media(min-width:880px)and (min-width:1900px)and (fixed-width:){#about--artists #artists--home .v-item-group#custome-slider-artists{min-width:calc(90vw - 6em - 88px - clamp(2em, 3vw, 3em));min-width:calc(90vw - var(--margin-global) - 88px - clamp(2em, 3vw, 3em))}}@media(min-width:880px)and (min-width:1900px){#about--artists #artists--home .v-item-group#custome-slider-artists{min-width:calc(90vw - 6em - 88px - clamp(2em, 3vw, 3em));min-width:calc(90vw - var(--margin-global) - 88px - clamp(2em, 3vw, 3em))}}@media(min-width:880px)and (min-width:2100px)and (fixed-width:){#about--artists #artists--home .v-item-group#custome-slider-artists{min-width:calc(85vw - 6em - 88px - clamp(2em, 3vw, 3em));min-width:calc(85vw - var(--margin-global) - 88px - clamp(2em, 3vw, 3em))}}@media(min-width:880px)and (min-width:2100px){#about--artists #artists--home .v-item-group#custome-slider-artists{min-width:calc(85vw - 6em - 88px - clamp(2em, 3vw, 3em));min-width:calc(85vw - var(--margin-global) - 88px - clamp(2em, 3vw, 3em))}}#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__next--disabled i,#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__prev--disabled i{filter:invert(77%)}#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__prev{z-index:1;position:absolute;margin:auto;left:20px;top:10px;right:auto;bottom:0}#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content{grid-gap:1em;gap:1em;padding:16px 70px 40px}#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image{cursor:pointer;box-shadow:8px 14px 5px 2px rgba(0,0,0,.4)!important;max-width:20em;white-space:normal;aspect-ratio:1/2.3;border-radius:.2vmax;transform:skew(-7deg);transition:.2s cubic-bezier(.445,.05,.55,.95);position:relative}#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transition:all .5s cubic-bezier(.445,.05,.55,.95)}#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image .v-sheet{position:absolute;top:0;right:0;bottom:0;left:0;padding:2em;display:grid;align-items:center;justify-items:center;place-items:center;background-color:rgba(238,58,58,.12)}#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image .v-sheet:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.7);transform-origin:left;transform:scaleX(0);transition:all .5s cubic-bezier(.445,.05,.55,.95)}#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image .v-sheet div *{opacity:0;transform:translateY(-50%);transition:.5s cubic-bezier(.445,.05,.55,.95)}#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image .v-sheet div h3{font-weight:600;color:#f7931e}@media(max-width:880px)and (fixed-width:){#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image .v-sheet div h3{font-size:1.4em}}@media(max-width:880px){#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image .v-sheet div h3{font-size:1.4em}}#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image .v-sheet div p{font-size:clamp(1em,1.2vw,1.2em);font-weight:300;display:-webkit-box;-webkit-line-clamp:10;-webkit-box-orient:vertical;overflow:hidden}@media(max-width:880px)and (fixed-width:){#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image .v-sheet div p{-webkit-line-clamp:7}}@media(max-width:880px){#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image .v-sheet div p{-webkit-line-clamp:7}}@media(max-width:880px)and (fixed-width:){#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image .v-sheet div{font-size:14px}}@media(max-width:880px){#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image .v-sheet div{font-size:14px}}#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image:hover{transform:skew(-7deg) scale(1.05)}#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image:hover:after{box-shadow:inset 0 0 0 .5em #fff!important}#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image:hover .v-sheet:before{transform:scaleX(1)}#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image:hover .v-sheet div *{opacity:1;transform:translateY(90px)}@media(max-width:880px)and (fixed-width:){#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image:hover .v-sheet div *{transform:translateY(0)}}@media(max-width:880px){#about--artists #artists--home .v-item-group#custome-slider-artists .v-slide-group__content .v-image:hover .v-sheet div *{transform:translateY(0)}}',""]),t.exports=o},850:function(t,r,e){"use strict";e(828)},851:function(t,r,e){var o=e(22),n=e(817),l=e(820),c=o(!1),d=n(l);c.push([t.i,':root{--primary:#ee3a3a;--secondary:#000;--accent:#f7931e;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to left top,var(--primary),var(--secondary));--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--margin-global:6em;--parent:1800px;--subparent:1900px;--h-navbar:100px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.dark{--clr:#fff;--clr-inv:#111011;--clr-hover:#fccfcf;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-card-inv:#fff;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}:root.dark,:root.light{--bg-ap:var(--clr-gradient)}:root.light{--clr:#000;--clr-inv:#fff;--clr-hover:#300303;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-card-inv:#191919;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#ee3a3a!important;background-color:var(--primary)!important}.clr_secondary{background-color:#000!important;background-color:var(--secondary)!important}.clr{color:var(--clr)!important}.clr_inv{color:var(--clr-inv)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_card-inv{background-color:var(--clr-card-inv)!important}.clr_svg{fill:var(--clr)!important}.clr_svg_inv{fill:var(--clr-inv)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to left top,#ee3a3a,#000)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#join{position:relative;padding-left:6em;padding-right:6em;padding-left:var(--margin-global);padding-right:var(--margin-global);width:100vw;min-height:465px;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);padding-top:4em;padding-bottom:4em;background:50% no-repeat fixed url('+d+");background-size:cover}#join article{width:min(90%,100em);background-color:rgba(108,19,19,.4);padding:1em 2em;border-radius:.2vmax}#join article h2{text-align:center}@media(max-width:880px)and (fixed-width:){#join article h2{text-decoration:underline}}@media(max-width:880px){#join article h2{text-decoration:underline}}#join article button,#join article p{font-size:1.2em;line-height:1.2}@media(max-width:565px)and (fixed-width:){#join article .v-btn{--w:100%!important}}@media(max-width:565px){#join article .v-btn{--w:100%!important}}",""]),t.exports=c},852:function(t,r,e){"use strict";e(829)},853:function(t,r,e){var o=e(22)(!1);o.push([t.i,':root{--primary:#ee3a3a;--secondary:#000;--accent:#f7931e;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to left top,var(--primary),var(--secondary));--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--margin-global:6em;--parent:1800px;--subparent:1900px;--h-navbar:100px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.dark{--clr:#fff;--clr-inv:#111011;--clr-hover:#fccfcf;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-card-inv:#fff;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}:root.dark,:root.light{--bg-ap:var(--clr-gradient)}:root.light{--clr:#000;--clr-inv:#fff;--clr-hover:#300303;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-card-inv:#191919;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#ee3a3a!important;background-color:var(--primary)!important}.clr_secondary{background-color:#000!important;background-color:var(--secondary)!important}.clr{color:var(--clr)!important}.clr_inv{color:var(--clr-inv)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_card-inv{background-color:var(--clr-card-inv)!important}.clr_svg{fill:var(--clr)!important}.clr_svg_inv{fill:var(--clr-inv)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to left top,#ee3a3a,#000)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#news{position:relative;padding-left:6em;padding-left:var(--margin-global);padding-bottom:8em;background-color:#000;width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw)}@media(max-width:1300px)and (fixed-width:){#news{padding-top:3em;padding-left:0;padding-right:0}}@media(max-width:1300px){#news{padding-top:3em;padding-left:0;padding-right:0}}@media(min-width:1300px)and (fixed-width:){#news{display:grid;grid-template-columns:1fr -webkit-max-content;grid-template-columns:1fr max-content;align-items:center;justify-items:center;place-items:center;grid-gap:2em;gap:2em}}@media(min-width:1300px){#news{display:grid;grid-template-columns:1fr -webkit-max-content;grid-template-columns:1fr max-content;align-items:center;justify-items:center;place-items:center;grid-gap:2em;gap:2em}}#news h2{font-size:clamp(2em,3.5vw,3.5em)}@media(max-width:1300px)and (fixed-width:){#news h2{font-size:clamp(2.5em,4vw,3.5em);padding-bottom:1em}}@media(max-width:1300px){#news h2{font-size:clamp(2.5em,4vw,3.5em);padding-bottom:1em}}@media(max-width:880px)and (fixed-width:){#news h2{text-decoration:underline;text-align:center}}@media(max-width:880px){#news h2{text-decoration:underline;text-align:center}}@media(min-width:1300px)and (fixed-width:){#news #slider-news{transform:translateY(-70px);max-width:60em}}@media(min-width:1300px){#news #slider-news{transform:translateY(-70px);max-width:60em}}@media(max-width:880px)and (fixed-width:){#news #slider-news{font-size:12px;width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw)}}@media(max-width:880px){#news #slider-news{font-size:12px;width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw)}}#news #slider-news .v-slide-group__next--disabled i,#news #slider-news .v-slide-group__prev--disabled i{filter:invert(77%)}@media(max-width:880px)and (fixed-width:){#news #slider-news .v-slide-group__next,#news #slider-news .v-slide-group__prev{display:none!important}}@media(max-width:880px){#news #slider-news .v-slide-group__next,#news #slider-news .v-slide-group__prev{display:none!important}}#news #slider-news .v-slide-group__content{grid-gap:1.5em;gap:1.5em}@media(max-width:880px)and (fixed-width:){#news #slider-news .v-slide-group__content{grid-gap:3em;gap:3em;padding-left:16px;padding-right:16px}}@media(max-width:880px){#news #slider-news .v-slide-group__content{grid-gap:3em;gap:3em;padding-left:16px;padding-right:16px}}#news #slider-news .v-slide-group__content .v-sheet{display:flex;flex-direction:column;width:clamp(23em,25vw,25em);grid-gap:1em;gap:1em;border-radius:15px;white-space:normal}#news #slider-news .v-slide-group__content .v-sheet h3{font-size:2em;font-weight:500}#news #slider-news .v-slide-group__content .v-sheet p{font-size:19.2px;font-weight:300;line-height:1.25;display:-webkit-box;-webkit-line-clamp:11;-webkit-box-orient:vertical;overflow:hidden}',""]),t.exports=o}}]);