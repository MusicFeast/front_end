(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1031:function(r,t,n){"use strict";n.r(t);var e=n(720),o=n(12),c=(n(57),{name:"JoinSection",mixins:[n(88).a],data:function(){return{linkDiscord:null,join_data:""}},mounted:function(){this.linkDiscord="https://discord.gg/Jw89Qth455",this.getDataSocial()},methods:{getDataSocial:function(){var r=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$axios.get("".concat(r.baseUrl,"api/v1/get-info-mf")).then((function(t){var data=t.data;data[0]&&data[0].join_community&&(r.join_data=data[0].join_community)})).catch((function(t){r.$alert("cancel",{desc:t.message}),console.error(t)}));case 2:case"end":return t.stop()}}),t)})))()}}}),l=(n(864),n(26)),component=Object(l.a)(c,(function(){var r=this,t=r._self._c;return t("div",{staticClass:"center",attrs:{id:"join"}},[t("div",{attrs:{id:"join-wrapper"}},[t("article",{staticClass:"divcol center gap2"},[t("h2",[r._v("Join the community")]),r._v(" "),t("p",{staticClass:"tcentermobile"},[r._v("\n        "+r._s(r.join_data)+"\n      ")]),r._v(" "),r.linkDiscord?t("div",{staticClass:"center wrap fill_w",staticStyle:{gap:"clamp(2em, 4vw, 4em)"}},[t(e.a,{staticClass:"btn",staticStyle:{"--w":"8.5em"},attrs:{href:r.linkDiscord,target:"_blank"}},[r._v("Join")])],1):r._e()])])])}),[],!1,null,null,null);t.default=component.exports},828:function(r,t,n){r.exports=n.p+"img/img-parallax.6213aac.jpg"},832:function(r,t,n){var content=n(865);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,n(24).default)("c8d696aa",content,!0,{sourceMap:!1})},864:function(r,t,n){"use strict";n(832)},865:function(r,t,n){var e=n(23),o=n(447),c=n(828),l=e((function(i){return i[1]})),d=o(c);l.push([r.i,':root{--primary:#ee3a3a;--secondary:#000;--accent:#f7931e;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to left top,var(--primary),var(--secondary));--c:var(--clr);--font1:"Bebas Neue",sans-serif;--font2:"Bebas Neue",sans-serif;--fw:initial;--margin-global:6em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,.3));--sombra-card:0px 4px 4px rgba(0,0,0,.25);--sombra-btn:0px 4px 4px rgba(0,0,0,.25)}:root.dark{--bg-ap:var(--clr-gradient);--clr:#fff;--clr-inv:#111011;--clr-hover:#fccfcf;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-card-inv:#fff;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,.5)}:root.light{--bg-ap:var(--clr-gradient);--clr:#000;--clr-inv:#fff;--clr-hover:#300303;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-card-inv:#191919;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:max(1em,min(5vw,4em))}}@media(max-width:880px){:root{--margin-global:max(1em,min(5vw,4em))}}@media(min-width:1920px)and (fixed-width:){:root{--parent:1900px}}@media(min-width:1920px){:root{--parent:1900px}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#ee3a3a!important;background-color:var(--primary)!important}.clr_secondary{background-color:#000!important;background-color:var(--secondary)!important}.clr{color:var(--clr)!important}.clr_inv{color:var(--clr-inv)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_card-inv{background-color:var(--clr-card-inv)!important}.clr_svg{fill:var(--clr)!important}.clr_svg_inv{fill:var(--clr-inv)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to left top,#ee3a3a,#000)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#join{background:50% no-repeat fixed url('+d+");background-size:cover;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);min-height:465px;padding-bottom:4em;padding-top:4em;position:relative;width:100vw}#join-wrapper{max-width:1600px;max-width:var(--parent);padding-left:6em;padding-left:var(--margin-global);padding-right:6em;padding-right:var(--margin-global);width:100%}#join-wrapper article{background-color:rgba(108,19,19,.4);border-radius:.2vmax;padding:2em}#join-wrapper article h2{text-align:center}@media(max-width:880px)and (fixed-width:){#join-wrapper article h2{-webkit-text-decoration:underline;text-decoration:underline}}@media(max-width:880px){#join-wrapper article h2{-webkit-text-decoration:underline;text-decoration:underline}}#join-wrapper article button,#join-wrapper article p{font-size:1.2em;line-height:1.2}@media(max-width:565px)and (fixed-width:){#join-wrapper article .v-btn{--w:100%!important}}@media(max-width:565px){#join-wrapper article .v-btn{--w:100%!important}}#join-wrapper article .v-btn span{font-size:16px!important}",""]),l.locals={},r.exports=l}}]);