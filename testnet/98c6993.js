(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1068:function(r,t,c){"use strict";c(999)},1069:function(r,t,c){var n=c(23)(!1);n.push([r.i,':root{--primary:#ee3a3a;--secondary:#000;--accent:#f7931e;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to left top,var(--primary),var(--secondary));--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--margin-global:6em;--parent:1800px;--subparent:1900px;--h-navbar:100px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.dark{--clr:#fff;--clr-inv:#111011;--clr-hover:#fccfcf;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-card-inv:#fff;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}:root.dark,:root.light{--bg-ap:var(--clr-gradient)}:root.light{--clr:#000;--clr-inv:#fff;--clr-hover:#300303;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-card-inv:#191919;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#ee3a3a!important;background-color:var(--primary)!important}.clr_secondary{background-color:#000!important;background-color:var(--secondary)!important}.clr{color:var(--clr)!important}.clr_inv{color:var(--clr-inv)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_card-inv{background-color:var(--clr-card-inv)!important}.clr_svg{fill:var(--clr)!important}.clr_svg_inv{fill:var(--clr-inv)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to left top,#ee3a3a,#000)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#redirection{height:calc(100vh - 100px);height:calc(100vh - var(--h-navbar))}',""]),r.exports=n},1098:function(r,t,c){"use strict";c.r(t);var n=c(716),o=c(290),e={name:"RedirectionPage",mixins:[c(121).a],data:function(){return{}},head:function(){return{title:"success"===this.transaction_data.state?"success transaction":"error transaction"}},computed:{transaction_data:function(){return JSON.parse(localStorage.getItem("transaction_data"))}},mounted:function(){},methods:{}},l=(c(1068),c(31)),component=Object(l.a)(e,(function(){var r=this,t=r._self._c;return t("div",{staticClass:"divcol tcenter center",staticStyle:{gap:"2.8em"},attrs:{id:"redirection"}},[r.transaction_data?[t("div",{staticClass:"divcol"},[t(o.a,{attrs:{size:"80px",color:"cancel"===r.transaction_data.state?"var(--error)":"var(--success)"}},[r._v("\n        mdi-"+r._s("success"===r.transaction_data.state?"check":"close")+"-circle\n      ")]),r._v(" "),t("h3",[r._v(r._s(r.transaction_data.title))]),r._v(" "),t("p",{staticClass:"p"},[r._v(r._s(r.transaction_data.desc))])],1),r._v(" "),t("div",{staticClass:"space",staticStyle:{gap:"20px"}},[t(n.a,{staticClass:"btn activeBtn",attrs:{ripple:!1}},[r._v("\n        Mint NFT\n      ")]),r._v(" "),t(n.a,{staticClass:"btn activeBtn",attrs:{ripple:!1}},[r._v("\n        Storage Settings\n      ")])],1),r._v(" "),t("a",{staticClass:"center",staticStyle:{gap:"5px","--c":"#b9b9b9"}},[r._v("\n      See Transaction "),t(o.a,{attrs:{size:"1.1em"}},[r._v("mdi-open-in-new")])],1)]:t("div",[t("h3",[r._v("No data Available")]),r._v(" "),t(n.a,{staticClass:"btn activeBtn",staticStyle:{"--fs":"18px","--h":"46px","--w":"120px"},attrs:{ripple:!1},on:{click:function(t){return r.$router.go(-1)}}},[r._v("\n      Go back\n    ")])],1)],2)}),[],!1,null,null,null);t.default=component.exports},999:function(r,t,c){var content=c(1069);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,c(24).default)("d855f370",content,!0,{sourceMap:!1})}}]);