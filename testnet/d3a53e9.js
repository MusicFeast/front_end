(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1012:function(r,t,n){"use strict";n.r(t);var e=n(720),c=n(19),o=(n(66),{name:"JoinSection",mixins:[n(102).a],data:function(){return{join_data:""}},mounted:function(){this.getDataSocial()},methods:{getDataSocial:function(){var r=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$axios.get("".concat(r.baseUrl,"api/v1/get-info-mf")).then((function(t){var data=t.data;data[0]&&data[0].join_community&&(r.join_data=data[0].join_community)})).catch((function(t){r.$alert("cancel",{desc:t.message}),console.error(t)}));case 2:case"end":return t.stop()}}),t)})))()}}}),l=(n(850),n(31)),component=Object(l.a)(o,(function(){var r=this,t=r._self._c;return t("div",{staticClass:"center",attrs:{id:"join"}},[t("article",{staticClass:"divcol center gap2"},[t("h2",[r._v("Join the community")]),r._v(" "),t("p",{staticClass:"tcentermobile"},[r._v("\n      "+r._s(r.join_data)+"\n    ")]),r._v(" "),t("div",{staticClass:"center wrap fill_w",staticStyle:{gap:"clamp(2em, 4vw, 4em)"}},[t(e.a,{staticClass:"btn",staticStyle:{"--w":"8.5em"},attrs:{href:"https://discord.com/invite/N7agx9n5",target:"_blank"}},[r._v("Join")])],1)])])}),[],!1,null,null,null);t.default=component.exports},817:function(r,t,n){"use strict";r.exports=function(r,t){return t||(t={}),"string"!=typeof(r=r&&r.__esModule?r.default:r)?r:(/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),t.hash&&(r+=t.hash),/["'() \t\n]/.test(r)||t.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r)}},820:function(r,t,n){r.exports=n.p+"img/img-parallax.6213aac.jpg"},828:function(r,t,n){var content=n(851);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,n(24).default)("b29a7e52",content,!0,{sourceMap:!1})},850:function(r,t,n){"use strict";n(828)},851:function(r,t,n){var e=n(23),c=n(817),o=n(820),l=e(!1),d=c(o);l.push([r.i,':root{--primary:#ee3a3a;--secondary:#000;--accent:#f7931e;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to left top,var(--primary),var(--secondary));--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--margin-global:6em;--parent:1800px;--subparent:1900px;--h-navbar:100px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.dark{--clr:#fff;--clr-inv:#111011;--clr-hover:#fccfcf;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-card-inv:#fff;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}:root.dark,:root.light{--bg-ap:var(--clr-gradient)}:root.light{--clr:#000;--clr-inv:#fff;--clr-hover:#300303;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-card-inv:#191919;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#ee3a3a!important;background-color:var(--primary)!important}.clr_secondary{background-color:#000!important;background-color:var(--secondary)!important}.clr{color:var(--clr)!important}.clr_inv{color:var(--clr-inv)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_card-inv{background-color:var(--clr-card-inv)!important}.clr_svg{fill:var(--clr)!important}.clr_svg_inv{fill:var(--clr-inv)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to left top,#ee3a3a,#000)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#join{position:relative;padding-left:6em;padding-right:6em;padding-left:var(--margin-global);padding-right:var(--margin-global);width:100vw;min-height:465px;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);padding-top:4em;padding-bottom:4em;background:50% no-repeat fixed url('+d+");background-size:cover}#join article{width:min(90%,100em);background-color:rgba(108,19,19,.4);padding:1em 2em;border-radius:.2vmax}#join article h2{text-align:center}@media(max-width:880px)and (fixed-width:){#join article h2{text-decoration:underline}}@media(max-width:880px){#join article h2{text-decoration:underline}}#join article button,#join article p{font-size:1.2em;line-height:1.2}@media(max-width:565px)and (fixed-width:){#join article .v-btn{--w:100%!important}}@media(max-width:565px){#join article .v-btn{--w:100%!important}}",""]),r.exports=l}}]);