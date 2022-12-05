(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1079:function(e,r,t){"use strict";t.r(r);var o=t(294),n=t(715),l=t(1069),c=t(1032),d=t(225),m=t(993),f=t(778),v=t(819),h=t(1070),x=t(1071),_=(t(81),t(5),t(13),t(22)),w=(t(73),t(25),t(14),t(34),t(50),t(39),t(41),t(1037),t(321),{name:"EditProfilePage",mixins:[t(121).a],data:function(){var e=this;return{userExist:void 0,imgBanner:void 0,imgAvatar:void 0,avatar_model:[],banner_model:[],form:{avatar:"",banner:"",wallet:null,full_name:null,username:null,email:null,discord:null,instagram:null,twitter:null,telegram:null,bio:null,address:{country:null,street_address:null,street_address2:null,city:null,state:null,postal:null}},dataCountries:["canada","EEUU","united kingdom","spain","lorem ipsum","lorem ipsum"],djangoExistenceList:{username:void 0,email:void 0,discord:void 0,instagram:void 0,twitter:void 0,telegram:void 0},rules:{required:[function(e){return!!e||"Field required"}],repeatedUsername:[function(e){return!!e||"Field required"},function(){return!e.djangoExistenceList.username||"Username is already taken"}],repeatedEmail:[function(e){return!!e||"Field required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"},function(){return!e.djangoExistenceList.email||"Email is already used"}],repeatedDiscord:[function(){return!e.djangoExistenceList.discord||"Discord account is already used"}],repeatedInstagram:[function(){return!e.djangoExistenceList.instagram||"Instagram account is already used"}],repeatedTwitter:[function(){return!e.djangoExistenceList.twitter||"Twitter account is already used"}],repeatedTelegram:[function(){return!e.djangoExistenceList.telegram||"Telegram account is already used"}]}}},head:function(){return{title:"Edit Profile"}},created:function(){this.getData()},mounted:function(){this.EnterKeyboardListener()},methods:{getData:function(){var e=this;return Object(_.a)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.$ramper.getAccountId(),r.next=3,e.$axios.post("".concat(e.baseUrl,"api/v1/get-perfil-data/"),{wallet:t}).then((function(r){var data=r.data[0];r.data[0]?(e.$equalData(e.form,data),e.form.id=data.id,e.imgBanner=data.banner?e.baseUrl+data.banner:e.user.banner,e.imgAvatar=data.avatar?e.baseUrl+data.avatar:e.user.avatar,e.userExist=!0):(e.form.wallet=t,e.imgBanner=e.user.banner,e.imgAvatar=e.user.avatar,e.userExist=!1)})).catch((function(r){e.$alert("cancel",{desc:r.message}),console.error(r)}));case 3:case"end":return r.stop()}}),r)})))()},clearRepeted:function(e){this.djangoExistenceList[e]&&(this.djangoExistenceList[e]=void 0)},EnterKeyboardListener:function(){var e=this;this.$refs.form.$el.querySelectorAll("input").forEach((function(input){input.addEventListener("keypress",(function(r){"Enter"===r.key&&e.saveForm()}))}))},saveForm:function(){var e=this,r={username:this.form.username,email:this.form.email,twitter:this.form.twitter,discord:this.form.discord,instagram:this.form.instagram,telegram:this.form.telegram,wallet:this.form.wallet};this.$axios.post("".concat(this.baseUrl,"api/v1/validate-perfil/"),r).then((function(r){if(e.djangoExistenceList=r.data,!e.$refs.form.validate())return e.$alert("cancel",{title:"Failed request",desc:"Need fill all required fields"});e.userExist?e.$axios.put("".concat(e.baseUrl,"api/v1/perfil/").concat(e.form.id,"/"),e.$formData(e.form)).then((function(){return e.goBack()})).catch((function(r){e.$alert("cancel",{desc:r.message}),console.error(r)})):e.$axios.post("".concat(e.baseUrl,"api/v1/perfil/"),e.$formData(e.form)).then((function(){return e.goBack()})).catch((function(r){e.$alert("cancel",{desc:r.message}),console.error(r)}))})).catch((function(r){e.$alert("cancel",{desc:r.message}),console.error(r)}))},goBack:function(){var e=this;setTimeout((function(){return e.$router.go(0)}),100),this.$router.go(-1),this.$alert("success")},showTag:function(){document.querySelector(".header").classList.add("hover")},hideTag:function(){document.querySelector(".header").classList.remove("hover")},previewFile:function(e,r){this.form[e]=r,"avatar"===e?this.imgAvatar=URL.createObjectURL(r):this.imgBanner=URL.createObjectURL(r)}}}),y=(t(826),t(31)),component=Object(y.a)(w,(function(){var e=this,r=e._self._c;return r("div",{staticClass:"divcol",attrs:{id:"profile"}},[r(d.a,{staticClass:"header",style:"\n      --tag-tier: '".concat(1===e.user.tier?"bronze":2===e.user.tier?"silver":3===e.user.tier?"gold":4===e.user.tier?"platinum":5===e.user.tier?"diamond":6===e.user.tier?"uranium":"user","'\n    "),attrs:{src:e.imgBanner,transition:"fade-transition"},scopedSlots:e._u([{key:"default",fn:function(){return[r(o.a,{staticStyle:{"--size":"13.954375em"},attrs:{width:"var(--size)",height:"var(--size)"},on:{mouseenter:function(r){return e.showTag()},mouseleave:function(r){return e.hideTag()}}},[r("label",{attrs:{for:"avatar",title:"change avatar"}},[r(d.a,{attrs:{src:e.imgAvatar,alt:"avatar image",transition:"fade-transition"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r(f.a,{attrs:{type:"avatar"}})]},proxy:!0}])})],1)]),e._v(" "),r(l.a,{staticStyle:{display:"none"},attrs:{id:"avatar",accept:"image/png, image/jpeg"},on:{change:function(r){return e.previewFile("avatar",e.avatar_model)}},model:{value:e.avatar_model,callback:function(r){e.avatar_model=r},expression:"avatar_model"}}),e._v(" "),r("label",{staticClass:"btn activeBtn",staticStyle:{"--p":"0 2em"},attrs:{for:"bannerBtn"}},[e._v("Upload")]),e._v(" "),r(l.a,{staticStyle:{display:"none"},attrs:{id:"bannerBtn",accept:"image/png, image/jpeg"},on:{change:function(r){return e.previewFile("banner",e.banner_model)}},model:{value:e.banner_model,callback:function(r){e.banner_model=r},expression:"banner_model"}})]},proxy:!0},{key:"placeholder",fn:function(){return[r(f.a,{directives:[{name:"show",rawName:"v-show",value:e.imgBanner,expression:"imgBanner"}],attrs:{type:"card"}})]},proxy:!0}])}),e._v(" "),r(c.a,{ref:"form",staticClass:"grid",on:{submit:function(r){return r.preventDefault(),e.saveForm()}}},[r("section",{staticClass:"card"},[r("label",{attrs:{for:"name"}},[e._v("full name")]),e._v(" "),r(v.a,{attrs:{id:"name",placeholder:"Mario Perez",rules:e.rules.required},model:{value:e.form.full_name,callback:function(r){e.$set(e.form,"full_name",r)},expression:"form.full_name"}}),e._v(" "),r("label",{attrs:{for:"username"}},[e._v("username")]),e._v(" "),r(v.a,{attrs:{id:"username",placeholder:"username123",rules:e.rules.repeatedUsername},on:{input:function(r){return e.clearRepeted("username")}},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}}),e._v(" "),r("label",{attrs:{for:"email"}},[e._v("email")]),e._v(" "),r(v.a,{attrs:{id:"email",placeholder:"example@domain.com",rules:e.rules.repeatedEmail},on:{input:function(r){return e.clearRepeted("email")}},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}}),e._v(" "),r("label",{attrs:{for:"discord"}},[e._v("discord")]),e._v(" "),r(v.a,{attrs:{id:"discord",placeholder:"username#321",rules:e.rules.repeatedDiscord},on:{input:function(r){return e.clearRepeted("discord")}},model:{value:e.form.discord,callback:function(r){e.$set(e.form,"discord",r)},expression:"form.discord"}}),e._v(" "),r("label",{attrs:{for:"instagram"}},[e._v("instagram account")]),e._v(" "),r(v.a,{attrs:{id:"instagram",placeholder:"@username#321",rules:e.rules.repeatedInstagram},on:{input:function(r){return e.clearRepeted("instagram")}},model:{value:e.form.instagram,callback:function(r){e.$set(e.form,"instagram",r)},expression:"form.instagram"}}),e._v(" "),r("label",{attrs:{for:"twitter"}},[e._v("twitter account")]),e._v(" "),r(v.a,{attrs:{id:"twitter",placeholder:"@username",rules:e.rules.repeatedTwitter},on:{input:function(r){return e.clearRepeted("twitter")}},model:{value:e.form.twitter,callback:function(r){e.$set(e.form,"twitter",r)},expression:"form.twitter"}}),e._v(" "),r("label",{attrs:{for:"telegram"}},[e._v("telegram account")]),e._v(" "),r(v.a,{attrs:{id:"telegram",placeholder:"@username45",rules:e.rules.repeatedTelegram},on:{input:function(r){return e.clearRepeted("telegram")}},model:{value:e.form.telegram,callback:function(r){e.$set(e.form,"telegram",r)},expression:"form.telegram"}}),e._v(" "),r("label",{attrs:{for:"bio"}},[e._v("bio")]),e._v(" "),r(h.a,{attrs:{id:"bio",placeholder:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.","no-resize":""},model:{value:e.form.bio,callback:function(r){e.$set(e.form,"bio",r)},expression:"form.bio"}})],1),e._v(" "),r("h2",{staticClass:"tup p"},[e._v("address"),r("sup",{staticClass:"relative",staticStyle:{top:"calc(clamp(15px, 2vw, 30px) * -1)"}},[r(x.a,{attrs:{right:"",color:"rgba(0, 0, 0, .4)",transition:"slide-x-transition","open-delay":100,"close-delay":100},scopedSlots:e._u([{key:"activator",fn:function(o){var n=o.on,l=o.attrs;return[r("img",e._g(e._b({staticStyle:{"--w":"clamp(12px, 1.5vw, 21px)"},attrs:{src:t(432),alt:"info"}},"img",l,!1),n))]}}])},[e._v(" "),r("span",[e._v("(optional) Apply to redeem physical products")])])],1)]),e._v(" "),r("section",{staticClass:"card"},[r("label",{attrs:{for:"country"}},[e._v("country")]),e._v(" "),r(m.a,{staticStyle:{"--fs-place":"16px"},attrs:{id:"country",items:e.dataCountries,solo:"",rules:Object.keys(e.form.address).find((function(r){return e.form.address[r]}))?e.rules.required:void 0,placeholder:"Select The Country",clearable:"","clear-icon":"mdi-close"},model:{value:e.form.address.country,callback:function(r){e.$set(e.form.address,"country",r)},expression:"form.address.country"}}),e._v(" "),r("label",{attrs:{for:"street"}},[e._v("street address")]),e._v(" "),r(v.a,{attrs:{id:"street",placeholder:"Street Address, P.O, box, lorem ipsum",rules:Object.keys(e.form.address).find((function(r){return e.form.address[r]}))?e.rules.required:void 0},model:{value:e.form.address.street_address,callback:function(r){e.$set(e.form.address,"street_address",r)},expression:"form.address.street_address"}}),e._v(" "),r("label",{attrs:{for:"apartment"}},[e._v("Apartment, Suite, Etc")]),e._v(" "),r(v.a,{attrs:{id:"apartment",placeholder:"Street Address 2, P.O, box, lorem ipsum ",rules:Object.keys(e.form.address).find((function(r){return e.form.address[r]}))?e.rules.required:void 0},model:{value:e.form.address.street_address2,callback:function(r){e.$set(e.form.address,"street_address2",r)},expression:"form.address.street_address2"}}),e._v(" "),r("label",{attrs:{for:"city"}},[e._v("city")]),e._v(" "),r(v.a,{attrs:{id:"city",placeholder:"Lorem ipsum",rules:Object.keys(e.form.address).find((function(r){return e.form.address[r]}))?e.rules.required:void 0},model:{value:e.form.address.city,callback:function(r){e.$set(e.form.address,"city",r)},expression:"form.address.city"}}),e._v(" "),r("label",{attrs:{for:"state"}},[e._v("State / Province / Region")]),e._v(" "),r(v.a,{attrs:{id:"state",placeholder:"Lorem ipsum",rules:Object.keys(e.form.address).find((function(r){return e.form.address[r]}))?e.rules.required:void 0},model:{value:e.form.address.state,callback:function(r){e.$set(e.form.address,"state",r)},expression:"form.address.state"}}),e._v(" "),r("label",{attrs:{for:"postal"}},[e._v("Postal / Zip Code")]),e._v(" "),r(v.a,{attrs:{id:"postal",placeholder:"Lorem ipsum",rules:Object.keys(e.form.address).find((function(r){return e.form.address[r]}))?e.rules.required:void 0},model:{value:e.form.address.postal,callback:function(r){e.$set(e.form.address,"postal",r)},expression:"form.address.postal"}})],1),e._v(" "),r("div",{staticClass:"center fill_w wrap fwrapmobile bold",staticStyle:{gap:"2em","--fb":"200px"}},[r(n.a,{staticClass:"btn activeBtn",attrs:{ripple:!1},on:{click:function(r){e.$router.push(e.localePath("/profile"))}}},[e._v("Cancel")]),e._v(" "),r(n.a,{staticClass:"btn activeBtn",attrs:{ripple:!1},on:{click:function(r){return e.saveForm()}}},[e._v("Save")])],1)])],1)}),[],!1,null,null,null);r.default=component.exports},805:function(e,r,t){var content=t(827);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(24).default)("e882ff64",content,!0,{sourceMap:!1})},826:function(e,r,t){"use strict";t(805)},827:function(e,r,t){var o=t(23)(!1);o.push([e.i,':root{--primary:#ee3a3a;--secondary:#000;--accent:#f7931e;--active:var(--primary);--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to left top,var(--primary),var(--secondary));--c:var(--clr);--font1:"Inter",sans-serif;--font2:"Inter",sans-serif;--fw:initial;--margin-global:6em;--parent:1800px;--subparent:1900px;--h-navbar:100px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.dark{--clr:#fff;--clr-inv:#111011;--clr-hover:#fccfcf;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-card-inv:#fff;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}:root.dark,:root.light{--bg-ap:var(--clr-gradient)}:root.light{--clr:#000;--clr-inv:#fff;--clr-hover:#300303;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-card-inv:#191919;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,36,36,0.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#ee3a3a!important;background-color:var(--primary)!important}.clr_secondary{background-color:#000!important;background-color:var(--secondary)!important}.clr{color:var(--clr)!important}.clr_inv{color:var(--clr-inv)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_card-inv{background-color:var(--clr-card-inv)!important}.clr_svg{fill:var(--clr)!important}.clr_svg_inv{fill:var(--clr-inv)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to left top,#ee3a3a,#000)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#profile{position:relative;padding-left:6em;padding-right:6em;padding-left:var(--margin-global);padding-right:var(--margin-global);padding-bottom:4em}#profile .header{--bg:hsla(0,0%,62%,0.4);--w:100vw;--h:500px;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw)}#profile .header .v-responsive__content{position:relative;display:grid;align-items:center;justify-items:center;place-items:center}#profile .header:before{content:var(--tag-tier);position:absolute;margin:auto;left:0;top:5px;right:0;bottom:fixed;--bg:var(--primary);--c:#fff;--b:initial;--p:.5em 1em;--w:initial;--max-w:none;--min-w:none;--h:initial;--max-h:none;--min-h:36px;--ml:none;--mr:none;--br:.2vmax;--bs:0px 4px 4px rgba(0,0,0,0.25);--fs:1em;--fw:initial;--ls:-0.005em;--lh:1;--f:initial;--t:initial;background:var(--bg)!important;color:var(--clr)!important;color:var(--c)!important;box-shadow:var(--bs)!important;border-radius:var(--br)!important;font-size:var(--fs);padding:var(--p)!important;width:var(--w)!important;max-width:var(--max-w)!important;min-width:var(--min-w)!important;height:var(--h)!important;max-height:var(--max-h)!important;min-height:var(--min-h)!important;border:var(--b);transform:var(--t);filter:var(--f);--bg:var(--bg-tier);--min-w:clamp(5em,8vw,8em);--w:max-content;--br:0;--fs:1.5em;--p:8px 1em;font-weight:700;text-transform:capitalize;text-align:center;transform:translateY(-100px);transition:.3s cubic-bezier(.445,.05,.55,.95)}#profile .header:before :is(span,img,i){color:var(--clr);color:var(--c);font-size:1em;font-weight:400;font-weight:var(--fw);text-transform:var(--tt);letter-spacing:var(--ls);line-height:var(--lh)}#profile .header:before :is(img,i){margin-left:var(--ml);margin-right:var(--mr)}#profile .header.hover:before{transform:translateY(0)}#profile .header .v-avatar{isolation:isolate;position:relative;overflow:visible}#profile .header .v-avatar:before{content:"";position:absolute;top:-20px;right:-20px;bottom:-20px;left:-20px;border-radius:50%;background:var(--bg-tier);z-index:-1}#profile .header .v-avatar label{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}#profile .header .v-avatar img{position:absolute;margin:auto;left:0;top:0;right:0;bottom:0;--w:100%;--h:100%;--br:50%;--of:cover}#profile .header .v-btn,#profile .header label{--fs:16px;--h:28px;--br:4px;--bg:#280909;--p:0 clamp(1em,2vw,2em);font-weight:600;position:absolute;left:calc(6em + var(--margin-separator));left:calc(var(--margin-global) + var(--margin-separator));bottom:1.5em}#profile .header label{cursor:pointer;display:grid;align-items:center;justify-items:center;place-items:center}#profile .container-user{--padding:2em;position:relative;padding:var(--padding)}#profile .container-user--social{position:absolute;top:calc(var(--padding)/1.5);right:0}#profile .container-user h2{font-size:2.5em;text-align:center}@media(max-width:1000px)and (fixed-width:){#profile .container-user h2{margin-top:1.5em}}@media(max-width:1000px){#profile .container-user h2{margin-top:1.5em}}#profile .container-user p{font-size:1.3em;line-height:1.2}#profile .container-nfts{--gtc:repeat(auto-fit,minmax(min(100%,260px),1fr));grid-gap:2em;gap:2em;margin-top:4em;margin-bottom:4em;margin-left:var(--margin-separator);margin-right:var(--margin-separator);min-height:900px}#profile .container-nfts .v-card{aspect-ratio:1/1.5!important}#profile .v-form{margin-top:6em;margin-bottom:6em;grid-gap:3em;gap:3em}#profile .v-form h2{padding-left:30px;padding-right:30px;padding-bottom:.5em;position:relative}#profile .v-form h2:after{content:"";position:absolute;margin:auto;left:0;top:auto;right:0;bottom:0;width:100%;height:1px;background-color:#ee3a3a;background-color:var(--primary)}#profile .v-form section.card{--bg:rgba(0,0,0,0.4);--p:3em}#profile .v-form section.card label{font-weight:700;font-size:1.3em;text-transform:capitalize}#profile .v-form section.card .v-input{overflow:hidden;padding-top:0}#profile .v-form section.card .v-input *{text-transform:lowercase}#profile .v-form section.card .v-input__slot:before{background-color:#6e6e6e;border-color:#6e6e6e}#profile .v-form>div.center>.v-btn{--fs:16px;--br:4px}#profile .v-form>div.center>.v-btn:first-of-type{--bg:#fff;--c:var(--primary)}',""]),e.exports=o}}]);