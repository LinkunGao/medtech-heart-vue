(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{180:function(e,t,n){"use strict";n(11),n(17),n(7),n(20),n(14),n(21);var r=n(1),o=n(10),c=(n(22),n(64),n(15),n(181));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function f(e){return null==e.title||null==e.heading||null==e.icon||null==e.dataFile||null==e.category||null==e.ecg||null==e.lvp||null==e.model}t.a=function(e,t){t("getTopics",(function(){return c})),t("isTopicDisabled",(function(e){return function(e){if(null==e.title||null==e.heading||null==e.icon||null==e.subTopics)return!0;if(Object.keys(e.subTopics).length<1)return!0;var t=Object.keys(e.subTopics)[0];return f(e.subTopics[t])}(e)})),t("isSubTopicDisabled",(function(e){return f(e)})),t("getContentBySlug",(function(e){return function(e){var t=e.toLowerCase().split("-"),n=Object(o.a)(t,2),r=n[0],l=n[1],content=null;if(null!=r&&null!=l){var f=c[r];if(null!=f){var h=f.subTopics[l];null!=h&&(content=d(d({},h),{},{parentTopic:{slug:r,heading:f.heading,title:f.title}}))}}return content}(e)}))}},181:function(e){e.exports=JSON.parse('{"model":{"title":"Home","heading":"Te Manawa","icon":"mdi-home","subTopics":{"heart":{"title":"Heart","heading":"The Heart","icon":"mdi-home-heart","dataFile":"heart-main","category":"success","subTitle":"subSuccess","ecg":{"name":"Normal","path":"ECG/NormalECG.json","description":"electrical pulses make the heart muscle contract"},"lvp":{"name":"Normal","path":"LVP/NormalLVP.json","description":"muscle contraction generates pump pressure"},"model":{"name":"NoInfarct"}}}},"attack":{"title":"Attack","heading":"Heart Attack","icon":"mdi-heart-broken","subTopics":{"healthy":{"title":"Healthy","heading":"Coronary Arteries","icon":"img/a_h.png","dataFile":"attack-healthy","category":"success","subTitle":"subSuccess","ecg":{"name":"NoInfarct","path":"ECG/NormalECG.json","description":"electrical pulses make the heart muscle contract"},"lvp":{"name":"NoInfarct","path":"LVP/NormalLVP.json","description":"muscle contraction generates pump pressure"},"model":{"name":"NoInfarct"}},"minor":{"slug":"minor","title":"Minor","heading":"Minor","icon":"img/a_m.png","dataFile":"attack-minor","category":"warning","subTitle":"subWarning","ecg":{"name":"SmallInfarct","path":"ECG/MildInfarctECG_shifted.json","description":"minor heart tissue damage can show up as subtle changes to the ECG"},"lvp":{"name":"SmallInfarct","path":"LVP/smallInfarctLVP.json","description":"damaged tissue leads to less contraction force and less pressure"},"model":{"name":"SmallInfarct"}},"severe":{"slug":"severe","title":"Severe","heading":"Severe","icon":"img/a_s.png","dataFile":"attack-severe","category":"error","subTitle":"subError","ecg":{"name":"LargeInfarct","path":"ECG/LargeInfarctECG_shifted.json","description":"severe heart tissue damage can show up as large changes to the ECG"},"lvp":{"name":"LargeInfarct","path":"LVP/largeInfarctLVP_shifted.json","description":"damaged tissue leads to less contraction force and less pressure"},"model":{"name":"LargeInfarct"}}}},"electricity":{"title":"Electricity","heading":"Heart Electricity","icon":"mdi-lightning-bolt","subTopics":{"healthy":{"title":"Healthy","heading":"Electrocardiograms","icon":"img/e_h.png","dataFile":"electricity-healthy","category":"success","subTitle":"subSuccess","ecg":{"name":"NormalElectricity","path":"ECG/NormalECG.json","description":"electrical pulses make the heart muscle contract"},"lvp":{"name":"NormalElectricity","path":"LVP/NormalLVP.json","description":"muscle contraction generates pump pressure"},"model":{"name":"NormalElectricity"}},"fibrillation":{"slug":"fibrillation","title":"Fibrillation","heading":"Fibrillation","icon":"img/e_f.png","dataFile":"electricity-fibrillation","category":"error","subTitle":"subError","ecg":{"name":"Arrhythmia","path":"ECG/ArrhythmiaECG.json","description":"abnormal electricity"},"lvp":{"name":"Arrhythmia","path":"LVP/ArrhythmiaLVP.json","description":"poor pump pressure"},"model":{"name":"ArrythmiaElectricity"}}}},"failure":{"title":"Failure","heading":"Heart Failure","icon":"mdi-heart-off","subTopics":{"healthy":{"title":"Healthy","heading":"Chronic Problems","icon":"img/f_h.png","dataFile":"failure-healthy","category":"success","subTitle":"subSuccess","ecg":{"name":"NoFailure","path":"ECG/NormalECG.json","description":"electrical pulses make the heart muscle contract"},"lvp":{"name":"NoFailure","path":"LVP/NormalLVP.json","description":"muscle contraction generates pump pressure"},"model":{"name":"NoInfarct"}},"compensated":{"title":"Compensated","heading":"Compensated","icon":"img/f_c.png","dataFile":"failure-compensated","category":"warning","subTitle":"subWarning","ecg":{"name":"CompensatedFailure","path":"ECG/DiastolicECG_shifted.json","description":"electrical pulses make the heart muscle contract"},"lvp":{"name":"CompensatedFailure","path":"LVP/DiastolicLVP_shifted.json","description":"muscle contraction generates pump pressure"},"model":{"name":"CompensatedFailure"}},"decompensated":{"title":"Decompensated","heading":"Decompensated","icon":"img/f_d.png","dataFile":"failure-decompensated","category":"error","subTitle":"subError","ecg":{"name":"DecompensatedFailure","path":"ECG/SystolicECG_shifted.json","description":"electrical pulses make the heart muscle contract"},"lvp":{"name":"DecompensatedFailure","path":"LVP/SystolicLVP_shifted.json","description":"thin-walled hearts struggle to maintain pump pressure"},"model":{"name":"DecompensatedFailure"}}}}}')},182:function(e,t,n){"use strict";t.a=function(e,t){t("parentTopic",(function(){return e.store.getters.getCurrentContent.parentTopic})),t("heading",(function(){return e.store.getters.getCurrentContent.heading})),t("title",(function(){return e.store.getters.getCurrentContent.title})),t("category",(function(){return e.store.getters.getCurrentContent.category})),t("subTitle",(function(){return e.store.getters.getCurrentContent.subTitle})),t("dataFile",(function(){return e.store.getters.getCurrentContent.dataFile})),t("demoIcon",(function(){return e.store.getters.getCurrentContent.demoIcon})),t("ecg",(function(){return e.store.getters.getCurrentContent.ecg})),t("lvp",(function(){return e.store.getters.getCurrentContent.lvp})),t("model",(function(){return e.store.getters.getCurrentContent.model}))}},183:function(e,t,n){"use strict";t.a=function(e,t){t("currentRender",(function(){return e.store.getters.getZincRender})),t("modelToSceneArray",(function(){return e.store.getters.getModelToSceneArray})),t("perviousCamera",(function(){return e.store.getters.getPreviousCamera})),t("isHalfModel",(function(){return e.store.getters.getIsHalfModel})),t("heartBeat",(function(){return e.store.getters.getHeartBeat}))}},219:function(e,t,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("68472c7e",content,!0,{sourceMap:!1})},221:function(e,t,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("489e6020",content,!0,{sourceMap:!1})},225:function(e,t,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("ae7159e2",content,!0,{sourceMap:!1})},226:function(e,t,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("4119fb21",content,!0,{sourceMap:!1})},230:function(e,t,n){var content=n(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("012caae1",content,!0,{sourceMap:!1})},253:function(e,t,n){"use strict";var r={name:"DefaultLayout",data:function(){return{multiplier:1,panelHeight:0}},computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}},mounted:function(){this.panelHeight=this.$refs.panel.clientHeight},updated:function(){this.panelHeight=this.$refs.panel.clientHeight},created:function(){var e=this;this.$nuxt.$on("menu-height-changed",(function(t){e.multiplier=t})),this.$nuxt.$on("load-video-player",(function(){console.log("ddd"),e.$refs.leftPanel.style.zIndex=0})),this.$nuxt.$on("closedVideoByClick",(function(){e.$refs.leftPanel.style.zIndex=100}))},beforeDestroy:function(){this.$nuxt.$off("menu-height-changed"),this.$nuxt.$off("load-video-player"),this.$nuxt.$off("closedVideoByClick")}},o=(n(304),n(42)),c=n(59),l=n.n(c),d=n(370),f=n(362),h=n(371),m=n(375),v=n(372),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("div",{staticClass:"order-2"},[n("div",{staticClass:"w-full h-screen"},[n("v-main",[n("div",{staticClass:"pa-0 black overflow-y-auto",class:e.mdAndUp?"full-height":"auto-height"},[n("Nuxt")],1)])],1)]),e._v(" "),n("div",{ref:"leftPanel",staticClass:"firefox w-full lg:w-[450px] lg:fixed top-0 left-0"},[n("div",{staticClass:"pa-0"},[n("v-row",{staticClass:"d-flex",attrs:{"no-gutters":""}},[n("v-col",[n("div",{staticClass:"pa-0",class:e.mdAndUp?"full-height":"auto-height"},[n("v-row",{staticClass:"d-flex flex-column",attrs:{"no-gutters":""}},[n("v-col",{ref:"panel"},[n("v-card",{staticClass:"pa-0 overflow-y-auto transparent",class:e.mdAndUp?"panel-height"+e.multiplier:"",attrs:{outlined:"",tile:""}},[n("left-pane",{attrs:{"panel-height":e.panelHeight}})],1)],1),e._v(" "),n("v-col",{staticClass:"d-none d-md-block fix-it"},[n("navigation")],1)],1)],1)])],1),e._v(" "),n("div",{staticClass:"d-md-none fixed left-0 bottom-0"},[n("navigation")],1)],1)])])}),[],!1,null,"8309d4fc",null);t.a=component.exports;l()(component,{LeftPane:n(359).default,Navigation:n(360).default}),l()(component,{VApp:d.a,VCard:f.a,VCol:h.a,VMain:m.a,VRow:v.a})},254:function(e,t,n){"use strict";var r=n(42),component=Object(r.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("Nuxt")}),[],!1,null,null,null);t.a=component.exports},256:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:n(308)}})])}],o=(n(309),n(42)),component=Object(o.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),r,!1,null,"4cbf8af7",null);t.default=component.exports},259:function(e,t,n){n(260),e.exports=n(261)},294:function(e,t,n){"use strict";n(219)},295:function(e,t,n){var r=n(23)(!1);r.push([e.i,".show-error[data-v-0662bbe4]{margin:auto;text-align:center;width:80%}h1[data-v-0662bbe4]{font-size:1.5rem;padding-bottom:4px}",""]),e.exports=r},300:function(e,t,n){var content=n(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("70f48cac",content,!0,{sourceMap:!1})},301:function(e,t,n){var r=n(23)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),r.push([e.i,"canvas{width:100%;height:100%}.flexbox{display:flex}.flexbox.--vertical{flex-direction:column}.full-height{min-height:100vh;max-height:100vh}.auto-height{height:auto}.container-default{padding:1.5rem .5rem .2rem 1.5rem}@media only screen and (max-width:959.98px){.container-default{padding:.5rem}}.main-heading{margin:0;font-size:2rem}@media only screen and (max-width:599.98px){.main-heading{font-size:1.8rem}}@media only screen and (min-width:1904px){.main-heading{font-size:2.4rem}}.sub-heading{margin:0;font-size:1.2rem}@media only screen and (min-width:1904px){.sub-heading{font-size:1.6rem}}.error-message{font-size:1.5rem;font-weight:700;padding:3rem}::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:inherit}::-webkit-scrollbar-thumb{background-color:transparent;border-radius:20px;border:1px solid transparent}",""]),e.exports=r},302:function(e,t,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("7b1b6764",content,!0,{sourceMap:!1})},303:function(e,t,n){var r=n(23)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),r.push([e.i,"body{background-color:#000}@media only screen and (max-width:1903.98px){body{font-size:.9rem}}@media only screen and (min-width:1904px){body{font-size:1.3rem}}a{text-decoration:none;color:inherit}hr{margin-top:.2rem;margin-bottom:.2rem}",""]),e.exports=r},304:function(e,t,n){"use strict";n(221)},305:function(e,t,n){var r=n(23)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),r.push([e.i,".firefox[data-v-8309d4fc]{z-index:100}.fix-it[data-v-8309d4fc]{position:-webkit-sticky;position:sticky;bottom:0}.panel-height1[data-v-8309d4fc]{height:calc(100vh - 56px)}.panel-height2[data-v-8309d4fc]{height:calc(100vh - 112px)}.transparent[data-v-8309d4fc]{background-color:hsla(0,0%,100%,.1)!important;opacity:.8}",""]),e.exports=r},306:function(e,t,n){"use strict";n(225)},307:function(e,t,n){var r=n(23)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),r.push([e.i,".bg-success{background:linear-gradient(170deg,var(--v-success-base),#32cd32)}.bg-warning{background:linear-gradient(170deg,var(--v-warning-base),rgba(255,255,0,.9))}.bg-error{background:linear-gradient(170deg,var(--v-error-base),rgba(255,50,0,.9))}.bg-secondary{background:linear-gradient(170deg,rgba(150,30,150,0),var(--v-secondary-base))}.left-pane{position:relative}.topic-img,.topic-img-big,p{display:flex;flex-direction:row;align-items:center}.topic-img-big{justify-content:space-around}.topic-fibrillation-aed{display:flex;flex-direction:row;justify-content:center;align-items:center}.sm-logo{position:absolute;width:8rem;top:2px;right:6px;z-index:999;height:auto}@media only screen and (max-width:599.98px){.sm-logo{width:7rem}}.video-icon{height:75px;width:70px}@media only screen and (min-width:1904px){.video-icon{height:85px;width:80px}}.video-icon-tall{height:85px;width:70px}@media only screen and (min-width:1904px){.video-icon-tall{height:95px;width:80px}}img{margin:0}",""]),e.exports=r},308:function(e,t,n){e.exports=n.p+"img/medtechcore-abi-logo.30ec4c7.png"},309:function(e,t,n){"use strict";n(226)},310:function(e,t,n){var r=n(23)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),r.push([e.i,".logo img[data-v-4cbf8af7]{width:100%;height:auto}",""]),e.exports=r},338:function(e,t,n){"use strict";n(230)},339:function(e,t,n){var r=n(23)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),r.push([e.i,".navi[data-v-052c24c7]{position:relative}.sub-menu[data-v-052c24c7]{position:fixed;bottom:56px;width:100%}.v-btn.button-default[data-v-052c24c7]{height:56px!important;background:linear-gradient(#050505,#1e1e1e 4%,#050505);border-left:2px solid #050505}",""]),e.exports=r},358:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"getters",(function(){return o})),n.d(t,"mutations",(function(){return c}));n(33);var r=function(){return{currentContent:{},chartLoaded:"",previousCamera:{},zincRenderer:void 0,modelToSceneArray:[],isHalfmodel:!1,heartBeat:2500}},o={getCurrentContent:function(e){return e.currentContent},getChartLoaded:function(e){return e.chartLoaded},getZincRender:function(e){return e.zincRenderer},getModelToSceneArray:function(e){return e.modelToSceneArray},getPreviousCamera:function(e){return e.previousCamera},getIsHalfModel:function(e){return e.isHalfmodel},getHeartBeat:function(e){return e.heartBeat}},c={setCurrentContent:function(e,t){e.currentContent=t},setChartLoaded:function(e,t){e.chartLoaded=t},setZincRender:function(e,t){e.zincRenderer=t},setModelToSceneArray:function(e,t){e.modelToSceneArray[t.name]=t.sceneObj},setPreviousCamera:function(e,t){e.previousCamera=t},setIsHalfModel:function(e,t){e.isHalfmodel=t},setHeartBeat:function(e,t){e.heartBeat=t}}},359:function(e,t,n){"use strict";n.r(t);n(40);var r={name:"LeftPane",props:{panelHeight:{type:Number}},computed:{currentBg:function(){return this.$category()?"bg-"+this.$category():"bg-success"},panelHeightStyle:function(){return this.$vuetify.breakpoint.mdAndUp?{"min-height":this.panelHeight-2+"px"}:{height:"auto"}}}},o=(n(306),n(42)),c=n(59),l=n.n(c),d=n(362),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"left-pane"},[n("div",{staticClass:"sm-logo d-md-none"},[n("logo")],1),e._v(" "),"slug"==e.$route.name?n("div",[n("div",{staticClass:"pa-4",class:e.currentBg,style:e.panelHeightStyle,attrs:{tile:""}},[n("lazy-panel")],1)]):e._e(),e._v(" "),"about"==e.$route.name?n("div",[n("v-card",{staticClass:"pa-4 bg-secondary",style:e.panelHeightStyle},[n("lazy-about-us")],1)],1):e._e()])}),[],!1,null,null,null);t.default=component.exports;l()(component,{Logo:n(256).default}),l()(component,{VCard:d.a})},360:function(e,t,n){"use strict";n.r(t);n(184),n(15),n(33);var r={data:function(){return{selectedTopic:{},topics:{},subMenuActive:!1}},methods:{updateAbout:function(){this.subMenuActive=!1},getIconWidth:function(){return(100/(topics.length+1)).toFixed(2)},getDefaultSlug:function(e){return null!=e.subTopics?Object.keys(e.subTopics)[0]:""},handTopicClick:function(e){this.selectedTopic=e,"Home"!==e.title&&(this.subMenuActive=!0)}},computed:{activeColor:function(){return"about"===this.$route.name?this.$vuetify.theme.themes.dark.secondary:this.$subTitle()},menuCaption:function(){return"slug"===this.$route.name?this.$parentTopic().slug:"about"}},watch:{selectedTopic:function(e){this.subMenuActive=Object.keys(e.subTopics).length>1},subMenuActive:function(e){$nuxt.$emit("menu-height-changed",e?"2":"1")}},created:function(){if(this.topics=this.$getTopics(),"slug"===this.$route.name){var e=this.$parentTopic().slug.toLowerCase();this.selectedTopic=this.topics[e]}}},o=(n(338),n(42)),c=n(59),l=n.n(c),d=n(373),f=n(374),h=n(363),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navi"},[e.subMenuActive?n("div",{class:e.$vuetify.breakpoint.smAndDown?"sub-menu":""},[n("v-bottom-navigation",{attrs:{grow:"","input-value":e.subMenuActive,color:e.activeColor}},e._l(e.selectedTopic.subTopics,(function(t,r){return n("v-btn",{key:r,staticClass:"button-default",attrs:{disabled:e.$isSubTopicDisabled(t),to:{name:"slug",params:{slug:e.menuCaption+"-"+r}}}},[n("span",[e._v(e._s(t.title))]),e._v(" "),n("div",{staticClass:"flex justify-center",staticStyle:{width:"35px",height:"35px"}},[n("img",{attrs:{src:t.icon,alt:"",width:"100%",height:"100%"}})])])})),1)],1):e._e(),e._v(" "),n("v-bottom-navigation",{attrs:{grow:"",fixed:!!e.$vuetify.breakpoint.smAndDown,color:e.activeColor},model:{value:e.menuCaption,callback:function(t){e.menuCaption=t},expression:"menuCaption"}},[e._l(e.topics,(function(t,r){return n("v-btn",{key:r,staticClass:"button-default",attrs:{value:r,disabled:e.$isTopicDisabled(t),to:{name:"slug",params:{slug:r+"-"+e.getDefaultSlug(t)}}},on:{click:function(n){return e.handTopicClick(t)}}},[n("span",[e._v(e._s(t.title))]),e._v(" "),n("v-icon",[e._v(e._s(t.icon))])],1)})),e._v(" "),n("v-btn",{staticClass:"button-default",attrs:{to:{name:"about"},value:"about"},on:{click:function(t){return e.updateAbout()}}},[n("span",[e._v("About")]),e._v(" "),n("v-icon",[e._v("mdi-account-group")])],1)],2)],1)}),[],!1,null,"052c24c7",null);t.default=component.exports;l()(component,{VBottomNavigation:d.a,VBtn:f.a,VIcon:h.a})},78:function(e,t,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"Error 404 - Page not found",otherError:"An unexpected error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(294),n(42)),c=n(59),l=n.n(c),d=n(370),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[n("div",{staticClass:"show-error secondary pa-10"},[404===e.error.statusCode?n("h1",[e._v("\n      "+e._s(e.pageNotFound)+"\n    ")]):n("h1",[e._v("\n      "+e._s(e.otherError)+"\n    ")]),e._v(" "),n("span",[e._v("\n      Please visit \n      "),n("NuxtLink",{attrs:{to:"/"}},[e._v("Home page")])],1)])])}),[],!1,null,"0662bbe4",null);t.a=component.exports;l()(component,{VApp:d.a})}},[[259,13,3,14]]]);