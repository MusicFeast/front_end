(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{688:function(t,r){},689:function(t,r){},690:function(t,r,e){var content=e(693);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("7e7e75e4",content,!0,{sourceMap:!1})},692:function(t,r,e){"use strict";e(690)},693:function(t,r,e){var n=e(18)(!1);n.push([t.i,':root{--primary:#ee3a3a;--secondary:#000;--accent:#f7931e;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to left top,var(--primary),var(--secondary));--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--margin-global:6em;--parent:1800px;--subparent:1900px;--h-navbar:100px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.dark{--clr:#fff;--clr-inv:#111011;--clr-hover:#fccfcf;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-card-inv:#fff;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}:root.dark,:root.light{--bg-ap:var(--clr-gradient)}:root.light{--clr:#000;--clr-inv:#fff;--clr-hover:#300303;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-card-inv:#191919;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#ee3a3a!important;background-color:var(--primary)!important}.clr_secondary{background-color:#000!important;background-color:var(--secondary)!important}.clr{color:var(--clr)!important}.clr_inv{color:var(--clr-inv)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_card-inv{background-color:var(--clr-card-inv)!important}.clr_svg{fill:var(--clr)!important}.clr_svg_inv{fill:var(--clr-inv)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to left top,#ee3a3a,#000)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.pagination{font-size:clamp(14px,2vw,16px)}.pagination .v-btn{min-width:-webkit-max-content!important;min-width:-moz-max-content!important;min-width:max-content!important;border:none!important}.pagination .v-btn:before{display:none!important}.pagination .v-btn.active{background-color:rgba(238,58,58,.6)!important}.pagination .v-btn.active,.pagination .v-btn.active *{color:var(--clr-text-btn)!important}.vip .pagination{background-color:#f7931e!important;background-color:var(--accent)!important}.vip .pagination .v-btn.active{background-color:rgba(0,0,0,.2)!important}',""]),t.exports=n},694:function(t,r,e){"use strict";var n=e(688),o=e.n(n);r.default=o.a},695:function(t,r,e){"use strict";var n=e(689),o=e.n(n);r.default=o.a},697:function(t,r,e){var content=e(705);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("1758ec20",content,!0,{sourceMap:!1})},698:function(t,r,e){"use strict";e.r(r);var n=e(664),o=e(778),c=e(269),l=(e(40),e(27),e(23),{name:"PaginationComponent",props:{totalPages:{type:Number,required:!0},perPage:{type:Number,default:3},currentPage:{type:Number,default:1,required:!0}},computed:{startPage:function(){return 1===this.currentPage?1:this.currentPage===this.totalPages?this.totalPages-this.perPage+1:this.currentPage-1},pages:function(){for(var t=[],i=this.startPage;i<=Math.min(this.startPage+this.perPage-1,this.totalPages);i++)t.push({name:i,isDisabled:i===this.currentPage});return t},isInFirstPage:function(){return 1===this.currentPage},isInLastPage:function(){return this.currentPage===this.totalPages}},methods:{onClickFirstPage:function(){this.$emit("pagechanged",1)},onClickPreviousPage:function(){this.$emit("pagechanged",this.currentPage-1)},onClickPage:function(t){this.$emit("pagechanged",t)},onClickNextPage:function(){this.$emit("pagechanged",this.currentPage+1)},onClickLastPage:function(){this.$emit("pagechanged",this.totalPages)},isPageActive:function(t){return this.currentPage===t}}}),d=(e(692),e(28)),m=e(694),v=e(695),component=Object(d.a)(l,(function(){var t=this,r=t._self._c;return r(o.a,{staticClass:"pagination align",attrs:{"background-color":"rgba(0, 0, 0, .4)"}},[r("button",{style:t.isInFirstPage?"opacity: .5":"opacity: 1",attrs:{disabled:t.isInFirstPage},on:{click:t.onClickPreviousPage}},[r(c.a,{staticClass:"reverse",attrs:{size:"2em"}},[t._v("mdi-play")])],1),t._v(" "),r(n.a,{class:{active:t.isInFirstPage},attrs:{disabled:t.isInFirstPage,text:""},on:{click:t.onClickFirstPage}},[t._v("1")]),t._v(" "),t._l(t.pages.slice(1,t.totalPages-1),(function(e,i){return r(n.a,{key:i,class:{active:t.isPageActive(e.name)},attrs:{disabled:e.isDisabled,text:""},on:{click:function(r){return t.onClickPage(e.name)}}},[t._v("\n    "+t._s(e.name)+"\n  ")])})),t._v(" "),t.totalPages>1?r(n.a,{class:{active:t.isInLastPage},attrs:{disabled:t.isInLastPage,text:""},on:{click:t.onClickLastPage}},[t._v(t._s(t.totalPages))]):t._e(),t._v(" "),r("button",{style:t.isInLastPage?"opacity: .5":"opacity: 1",attrs:{disabled:t.isInLastPage},on:{click:t.onClickNextPage}},[r(c.a,{attrs:{size:"2em"}},[t._v("mdi-play")])],1)],2)}),[],!1,null,null,null);"function"==typeof m.default&&Object(m.default)(component),"function"==typeof v.default&&Object(v.default)(component);r.default=component.exports},704:function(t,r,e){"use strict";e(697)},705:function(t,r,e){var n=e(18)(!1);n.push([t.i,':root{--primary:#ee3a3a;--secondary:#000;--accent:#f7931e;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to left top,var(--primary),var(--secondary));--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--margin-global:6em;--parent:1800px;--subparent:1900px;--h-navbar:100px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.dark{--clr:#fff;--clr-inv:#111011;--clr-hover:#fccfcf;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-card-inv:#fff;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}:root.dark,:root.light{--bg-ap:var(--clr-gradient)}:root.light{--clr:#000;--clr-inv:#fff;--clr-hover:#300303;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-card-inv:#191919;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#ee3a3a!important;background-color:var(--primary)!important}.clr_secondary{background-color:#000!important;background-color:var(--secondary)!important}.clr{color:var(--clr)!important}.clr_inv{color:var(--clr-inv)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_card-inv{background-color:var(--clr-card-inv)!important}.clr_svg{fill:var(--clr)!important}.clr_svg_inv{fill:var(--clr-inv)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to left top,#ee3a3a,#000)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.container-filters{padding-left:var(--margin-separator);padding-right:var(--margin-separator)}.container-filters .v-select__selection:first-letter{text-transform:capitalize!important}',""]),t.exports=n},707:function(t,r,e){"use strict";e.r(r);var n=e(83),o=e(786),c=e(747),l=(e(32),e(41),{name:"FiltersComponent",props:{contents:{type:Boolean,default:!1},hide:{type:Array,default:function(){return[]}},search:{type:String,default:void 0},filterA:{type:Array,default:void 0},filterB:{type:Array,default:void 0}},data:function(){return{search_model:"",filterA_model:"",filterB_model:""}},methods:{}}),d=(e(704),e(28)),component=Object(d.a)(l,(function(){var t=this,r=t._self._c;return r("section",{staticClass:"container-filters fwrap gap2",class:{contents:t.contents},staticStyle:{"--fb":"200px"}},[t.hide.includes(1)?t._e():r(c.a,{staticClass:"search",staticStyle:{"--p":"0 1em 0 2em"},attrs:{"hide-details":"",solo:"","append-icon":"mdi-magnify",label:"Search for NFTs Name, Artist, Event & Collections"},on:{keyup:function(r){return t.$emit("search",t.search_model)}},model:{value:t.search_model,callback:function(r){t.search_model=r},expression:"search_model"}}),t._v(" "),t.hide.includes(2)?t._e():r(o.a,{staticStyle:{"--p":"0 1em 0 2em"},attrs:{items:t.filterA,"hide-details":"",solo:"",label:"By Tier:",clearable:"","clear-icon":"mdi-close"},on:{change:function(r){return t.$emit("filterA",t.filterA_model)}},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.item;return[r("div",{staticClass:"v-select__selection v-select__selection--comma"},[t._v("\n        "+t._s(1===n?"Bronze":2===n?"Silver":3===n?"Gold":4===n?"platinum":5===n?"Diamond":6===n?"Uranium":n)+"\n      ")])]}},{key:"item",fn:function(e){var o=e.item;return[r(n.b,[t._v("\n        "+t._s(1===o?"Bronze":2===o?"Silver":3===o?"Gold":4===o?"platinum":5===o?"Diamond":6===o?"Uranium":o)+"\n      ")])]}}],null,!1,3058041344),model:{value:t.filterA_model,callback:function(r){t.filterA_model=r},expression:"filterA_model"}}),t._v(" "),t.hide.includes(3)?t._e():r(o.a,{staticStyle:{"--p":"0 1em 0 2em"},attrs:{items:t.filterB,"hide-details":"",solo:"",label:"Sort by:",clearable:"","clear-icon":"mdi-close"},on:{change:function(r){return t.$emit("filterB",t.filterB_model)}},model:{value:t.filterB_model,callback:function(r){t.filterB_model=r},expression:"filterB_model"}})],1)}),[],!1,null,null,null);r.default=component.exports},781:function(t,r,e){var content=e(819);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("7f4a76f0",content,!0,{sourceMap:!1})},818:function(t,r,e){"use strict";e(781)},819:function(t,r,e){var n=e(18)(!1);n.push([t.i,':root{--primary:#ee3a3a;--secondary:#000;--accent:#f7931e;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to left top,var(--primary),var(--secondary));--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--margin-global:6em;--parent:1800px;--subparent:1900px;--h-navbar:100px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.dark{--clr:#fff;--clr-inv:#111011;--clr-hover:#fccfcf;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-card-inv:#fff;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}:root.dark,:root.light{--bg-ap:var(--clr-gradient)}:root.light{--clr:#000;--clr-inv:#fff;--clr-hover:#300303;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-card-inv:#191919;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#ee3a3a!important;background-color:var(--primary)!important}.clr_secondary{background-color:#000!important;background-color:var(--secondary)!important}.clr{color:var(--clr)!important}.clr_inv{color:var(--clr-inv)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_card-inv{background-color:var(--clr-card-inv)!important}.clr_svg{fill:var(--clr)!important}.clr_svg_inv{fill:var(--clr-inv)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to left top,#ee3a3a,#000)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#artists{position:relative;padding-left:6em;padding-right:6em;padding-left:var(--margin-global);padding-right:var(--margin-global);padding-bottom:4em}#artists #custome-carousel{min-width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw)}#artists #custome-carousel .v-responsive__content{display:flex;justify-content:space-evenly;grid-gap:1em;gap:1em;padding-top:20px;padding-bottom:90px}#artists #custome-carousel .v-responsive__content>*{flex-basis:260px}@media(max-width:370px)and (fixed-width:){#artists #custome-carousel .v-responsive__content{padding-top:0}}@media(max-width:370px){#artists #custome-carousel .v-responsive__content{padding-top:0}}#artists #custome-carousel .v-responsive__content .v-image{cursor:pointer;box-shadow:8px 14px 5px 2px rgba(0,0,0,.4)!important;max-width:320px;border-radius:.2vmax;transform:skew(-7deg);transition:.2s cubic-bezier(.445,.05,.55,.95);position:relative}@media(max-width:880px)and (fixed-width:){#artists #custome-carousel .v-responsive__content .v-image{aspect-ratio:1/2}}@media(max-width:880px){#artists #custome-carousel .v-responsive__content .v-image{aspect-ratio:1/2}}@media(max-width:370px)and (fixed-width:){#artists #custome-carousel .v-responsive__content .v-image{min-width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);transform:skew(0deg)}}@media(max-width:370px){#artists #custome-carousel .v-responsive__content .v-image{min-width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);transform:skew(0deg)}}#artists #custome-carousel .v-responsive__content .v-image:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transition:all .5s cubic-bezier(.445,.05,.55,.95)}#artists #custome-carousel .v-responsive__content .v-image .v-sheet{position:absolute;top:0;right:0;bottom:0;left:0;padding:2em;display:grid;align-items:center;justify-items:center;place-items:center;background-color:rgba(238,58,58,.12)}#artists #custome-carousel .v-responsive__content .v-image .v-sheet:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.7);transform-origin:left;transform:scaleX(0);transition:all .5s cubic-bezier(.445,.05,.55,.95)}#artists #custome-carousel .v-responsive__content .v-image .v-sheet div *{opacity:0;transform:translateY(-50%);transition:.5s cubic-bezier(.445,.05,.55,.95)}#artists #custome-carousel .v-responsive__content .v-image .v-sheet div h3{font-size:clamp(1.5em,2vw,2em);font-weight:600;color:#f7931e}#artists #custome-carousel .v-responsive__content .v-image .v-sheet div p{font-size:clamp(1em,1.2vw,1.2em);font-weight:300;display:-webkit-box;-webkit-line-clamp:12;-webkit-box-orient:vertical;overflow:hidden}@media(max-width:880px)and (fixed-width:){#artists #custome-carousel .v-responsive__content .v-image .v-sheet div{font-size:14px}}@media(max-width:880px){#artists #custome-carousel .v-responsive__content .v-image .v-sheet div{font-size:14px}}@media(min-width:370px)and (fixed-width:){#artists #custome-carousel .v-responsive__content .v-image:hover{transform:skew(-7deg) scale(1.05)}}@media(min-width:370px){#artists #custome-carousel .v-responsive__content .v-image:hover{transform:skew(-7deg) scale(1.05)}}#artists #custome-carousel .v-responsive__content .v-image:hover:after{box-shadow:inset 0 0 0 .5em #fff!important}#artists #custome-carousel .v-responsive__content .v-image:hover .v-sheet:before{transform:scaleX(1)}#artists #custome-carousel .v-responsive__content .v-image:hover .v-sheet div *{opacity:1;transform:translateY(90px)}@media(max-width:880px)and (fixed-width:){#artists #custome-carousel .v-responsive__content .v-image:hover .v-sheet div *{transform:translateY(0)}}@media(max-width:880px){#artists #custome-carousel .v-responsive__content .v-image:hover .v-sheet div *{transform:translateY(0)}}#artists #custome-carousel .v-carousel__controls .v-item-group{display:flex;flex-wrap:wrap;grid-gap:10px 0;gap:10px 0}#artists #custome-carousel .v-carousel__controls button{background-color:#fff;border-radius:0;width:21.2px;height:21.2px}#artists #custome-carousel .v-carousel__controls button i{display:none}#artists #custome-carousel .v-carousel__controls .v-btn--active{background-color:#ee3a3a;background-color:var(--active)}#artists .container-listed{--gtc:repeat(auto-fit,minmax(min(100%,260px),1fr));--margin-bottom:4em;grid-gap:2em;gap:2em;padding-left:var(--margin-separator);padding-right:var(--margin-separator);padding-bottom:var(--margin-bottom);margin-bottom:var(--margin-bottom);position:relative}#artists .container-listed:after{content:"";position:absolute;margin:auto;left:0;top:auto;right:0;bottom:0;width:100%;height:1px;background-color:#ee3a3a;background-color:var(--primary)}',""]),t.exports=n},869:function(t,r,e){"use strict";e.r(r);var n=e(684),o=e(859),c=e(860),l=e(207),d=e(48),m=e(728),v=(e(27),e(8),e(49),e(20),e(211),e(12),e(3),e(11),e(110)),f={name:"CollectionsPage",mixins:[v.a],data:function(){return{modelCarousel:0,dataArtists:[],search:"",filter:{model:"",list:["lastest releases","newest","oldest","comming soon","lorem ipsum","lorem ipsum"]},currentPage:1,itemsPerPage:10}},head:function(){return{title:"Artists"}},computed:{dataArtists_carousel:function(){return this.dataArtists.filter((function(data){return!data.comming}))},dataArtists_pagination:function(){return this.$store.getters.pagination({items:this.dataArtists,currentPage:this.currentPage,itemsPerPage:this.itemsPerPage,search:this.search,filterB:this.filter.model})},pagination_per_page:function(){return Math.ceil(this.dataArtists.length/this.itemsPerPage)}},mounted:function(){this.styles(),this.getData(),window.addEventListener("resize",this.styles)},beforeDestroy:function(){window.removeEventListener("resize",this.styles)},methods:{styles:function(){var t=document.querySelector("#".concat("artists"));document.querySelectorAll("h2.Title").forEach((function(h2){t.style.setProperty("--h-title","".concat(h2.getBoundingClientRect().height,"px"))}));var r=this.modelCarousel;this.modelCarousel=-1,this.modelCarousel=r},getData:function(){var t=this;this.$axios.get("".concat(this.baseUrl,"api/v1/get-artists")).then((function(r){r.data.forEach((function(r){r.banner=t.baseUrl+r.banner,r.image=r.image?t.baseUrl+r.image:e(289)})),t.dataArtists=r.data})).catch((function(r){t.$alert("cancel",{desc:r.message}),console.error(r)}))},columnsCarousel:function(){return window.innerWidth>=1600?7:window.innerWidth>=1345?6:window.innerWidth>=1e3?5:window.innerWidth>=800?4:window.innerWidth>=550?3:window.innerWidth>=370?2:1}}},h=(e(818),e(28)),component=Object(h.a)(f,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"divcol",attrs:{id:"artists"}},[r(o.a,{attrs:{id:"custome-carousel",height:"720px","hide-delimiter-background":"","show-arrows":!1},model:{value:t.modelCarousel,callback:function(r){t.modelCarousel=r},expression:"modelCarousel"}},[t._l(t.dataArtists_carousel,(function(e,n){return[(n+1)%t.columnsCarousel()==1||1===t.columnsCarousel()?r(c.a,{key:n},[t._l(t.columnsCarousel(),(function(e,i){return[+n+i<t.dataArtists_carousel.length?[r(l.a,{key:i,attrs:{src:t.dataArtists_carousel[+n+i].image,alt:"".concat(t.dataArtists_carousel[+n+i].name," image"),transition:"fade-transition"},on:{click:function(r){return t.$store.dispatch("goTo",{key:"artist",item:t.dataArtists_carousel[+n+i]})}},scopedSlots:t._u([{key:"default",fn:function(){return[r(d.a,[r("div",{staticClass:"divcol"},[r("h3",[t._v(t._s(t.dataArtists_carousel[+n+i].name))]),t._v(" "),r("p",[t._v("\n                      "+t._s(t.dataArtists_carousel[+n+i].description)+"\n                    ")])])])]},proxy:!0},{key:"placeholder",fn:function(){return[r(m.a,{attrs:{width:"100%",height:"100%",type:"card"}})]},proxy:!0}],null,!0)})]:t._e()]}))],2):t._e()]}))],2),t._v(" "),r("h2",{staticClass:"Title fwrap",staticStyle:{"--fb":"200px",gap:".3em clamp(1em, 2vw, 2em)"}},[r("span",{staticClass:"tup"},[t._v("artists")]),t._v(" "),r("Filters",{attrs:{contents:"",hide:[2],search:t.search,"filter-b":t.filter.list},on:{search:function(r){return t.search=r},filterB:function(r){return t.filter.model=r}}})],1),t._v(" "),r("section",{staticClass:"container-listed grid"},t._l(t.dataArtists_pagination,(function(e,i){return r(n.a,{key:i,staticClass:"card divcol custome",class:{comming:e.comming},on:{click:function(r){return t.$store.dispatch("goTo",{key:"artist",item:e})}}},[r(l.a,{style:e.comming?"--tag-state: 'Comming soon":"",attrs:{src:e.image,alt:"".concat(e.name," image"),transition:"fade-transition"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r(m.a,{attrs:{type:"card"}})]},proxy:!0}],null,!0)}),t._v(" "),r("div",{staticClass:"container-content tcenter"},[r("h5",[t._v(t._s(e.name))]),t._v(" "),r("p",{staticClass:"p"},[t._v("\n          "+t._s(e.description)+"\n        ")])])],1)})),1),t._v(" "),r("Pagination",{attrs:{"total-pages":t.pagination_per_page,"current-page":t.currentPage},on:{pagechanged:function(r){return t.currentPage=r}}})],1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{Filters:e(707).default,Pagination:e(698).default})}}]);