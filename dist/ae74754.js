(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1073:function(r,t,c){"use strict";c(883)},1074:function(r,t,c){var n=c(23)((function(i){return i[1]}));n.push([r.i,':root{--primary:#ee3a3a;--secondary:#000;--accent:#f7931e;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to left top,var(--primary),var(--secondary));--c:var(--clr);--font1:"Bebas Neue",sans-serif;--font2:"Bebas Neue",sans-serif;--fw:initial;--margin-global:6em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,.3));--sombra-card:0px 4px 4px rgba(0,0,0,.25);--sombra-btn:0px 4px 4px rgba(0,0,0,.25)}:root.dark{--bg-ap:var(--clr-gradient);--clr:#fff;--clr-inv:#111011;--clr-hover:#fccfcf;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-card-inv:#fff;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,.5)}:root.light{--bg-ap:var(--clr-gradient);--clr:#000;--clr-inv:#fff;--clr-hover:#300303;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-card-inv:#191919;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:max(1em,min(5vw,4em))}}@media(max-width:880px){:root{--margin-global:max(1em,min(5vw,4em))}}@media(min-width:1920px)and (fixed-width:){:root{--parent:1900px}}@media(min-width:1920px){:root{--parent:1900px}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#ee3a3a!important;background-color:var(--primary)!important}.clr_secondary{background-color:#000!important;background-color:var(--secondary)!important}.clr{color:var(--clr)!important}.clr_inv{color:var(--clr-inv)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_card-inv{background-color:var(--clr-card-inv)!important}.clr_svg{fill:var(--clr)!important}.clr_svg_inv{fill:var(--clr-inv)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to left top,#ee3a3a,#000)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#contact{--width:100vw;height:43.75em;isolation:isolate;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);max-width:100vw!important;max-width:var(--width)!important;width:100vw!important;width:var(--width)!important}#contact img{--of:cover;height:100%;left:0;-webkit-mask-image:linear-gradient(#000,transparent);mask-image:linear-gradient(#000,transparent);position:fixed;top:0;width:100%;z-index:-1}#contact #contact-socials-wrapper{background-color:#000;background-color:var(--secondary);border-radius:0 50px 50px 0;height:6.25em;margin-right:auto;width:80vw}@media(max-width:400px)and (fixed-width:){#contact #contact-socials-wrapper{width:90vw}}@media(max-width:400px){#contact #contact-socials-wrapper{width:90vw}}#contact #contact-socials-wrapper>div{margin-left:20vw}@media(max-width:400px)and (fixed-width:){#contact #contact-socials-wrapper>div{margin-left:10vw}}@media(max-width:400px){#contact #contact-socials-wrapper>div{margin-left:10vw}}',""]),n.locals={},r.exports=n},1126:function(r,t,c){"use strict";c.r(t);var n=c(720),o=c(302),e=c(12),l=(c(57),{name:"ContactPage",mixins:[c(88).a],data:function(){return{dataSocial:[]}},head:function(){return{title:"contact"}},mounted:function(){this.getDataSocial()},methods:{goToMail:function(){window.location.href="mailto:musicfeast.io@gmail.com"},getDataSocial:function(){var r=this;return Object(e.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$axios.get("".concat(r.baseUrl,"api/v1/get-info-mf")).then((function(t){var data=t.data;if(data[0]){var c=[];data[0].instagram_icon&&data[0].instagram_link&&c.push({icon:data[0].instagram_icon,to:data[0].instagram_link}),data[0].twitter_icon&&data[0].twitter_link&&c.push({icon:data[0].twitter_icon,to:data[0].twitter_link}),data[0].facebook_icon&&data[0].facebook_link&&c.push({icon:data[0].facebook_icon,to:data[0].facebook_link}),data[0].discord_icon&&data[0].discord_link&&c.push({icon:data[0].discord_icon,to:data[0].discord_link}),c.push({icon:"email",to:"musicfeast.io@gmail.com"}),r.dataSocial=c}})).catch((function(r){console.error(r)}));case 2:case"end":return t.stop()}}),t)})))()}}}),d=(c(1073),c(26)),component=Object(d.a)(l,(function(){var r=this,t=r._self._c;return t("div",{staticClass:"divcol center",attrs:{id:"contact"}},[t("img",{attrs:{src:c(828),alt:"background"}}),r._v(" "),t("h2",[r._v("Contact us !")]),r._v(" "),t("aside",{staticClass:"center",attrs:{id:"contact-socials-wrapper"}},[t("div",{staticClass:"center",staticStyle:{gap:"clamp(1em, 2.5vw, 2.5em)"}},r._l(r.dataSocial,(function(c,i){return t("span",{key:i},["email"===c.icon?t("span",[t(n.a,{attrs:{icon:""},on:{click:function(t){return r.goToMail()}}},[t(o.a,{attrs:{size:"clamp(2em, 2.8vw, 2.8em)"}},[r._v(r._s(c.icon))])],1)],1):t("span",[t(n.a,{attrs:{icon:"",href:c.to,target:"_blank"}},[t(o.a,{attrs:{size:"clamp(2em, 2.8vw, 2.8em)",href:c.to,target:"_blank"}},[r._v(r._s(c.icon))])],1)],1)])})),0)])])}),[],!1,null,null,null);t.default=component.exports},828:function(r,t,c){r.exports=c.p+"img/img-parallax.6213aac.jpg"},883:function(r,t,c){var content=c(1074);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,c(24).default)("f60a27b4",content,!0,{sourceMap:!1})}}]);