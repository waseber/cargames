(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(t,e,n){"use strict";var r=n(265),o=n(163);n(389);e.a=function(t){var e=t.store;t.req;Object(r.a)({storage:{key:"car-games",paths:["index.selectedStates","index.countries"],getItem:function(t){return o.get(t)},setItem:function(t,e){return o.set(t,e,{expires:365,secure:!1})},removeItem:function(t){return o.remove(t)}}})(e)}},248:function(t,e,n){var content=n(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("0edae9fa",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";var r=n(398),o=n(404),c=n(399),l=n(268),d=n(405),f=n(402),v=n(187),h=n(185),m=n(124),_=n(186),w=n(74),k=n(401),x=n(403),S=n(400),N=n(263),y=(n(122),{name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"License Plate",to:"/"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Car Games"}}}),C=n(101),component=Object(C.a)(y,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{dark:""}},[e(x.a,{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(h.a,t._l(t.items,(function(n,i){return e(m.a,{key:i,attrs:{to:n.to,router:"",exact:""}},[e(_.a,[e(v.a,[t._v(t._s(n.icon))])],1),t._v(" "),e(w.a,[e(w.b,[t._v(t._s(n.title))])],1)],1)})),1)],1),t._v(" "),e(o.a,{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[e(c.a,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e(l.a,{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[e(v.a,[t._v("mdi-application")])],1),t._v(" "),e(N.a,[t._v(t._s(t.title))]),t._v(" "),e(S.a),t._v(" "),e(l.a,{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[e(v.a,[t._v("mdi-menu")])],1)],1),t._v(" "),e(k.a,[e(d.a,[e("Nuxt")],1)],1),t._v(" "),e(x.a,{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[e(h.a,[e(m.a,{nativeOn:{click:function(e){t.right=!t.right}}},[e(_.a,[e(v.a,{attrs:{light:""}},[t._v(" mdi-repeat ")])],1),t._v(" "),e(w.b,[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),e(f.a,{attrs:{absolute:!t.fixed,app:""}},[e("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports},275:function(t,e,n){n(276),t.exports=n(277)},325:function(t,e,n){"use strict";n(248)},326:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),r.locals={},t.exports=r},387:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return d}));var r=n(88),o=(n(51),n(59),function(){return{countries:[],selectedStates:[],usStates:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],usGovernment:["Diplomat","Military","US Government"],caProvinces:["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Northwest Territories","Nunavut","Nova Scotia","Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon"]}}),c={getStates:function(t){var e=[];return t.countries.includes("us")&&e.push({title:"United States",states:t.usStates}),t.countries.includes("ca")&&e.push({title:"Canada",states:t.caProvinces}),t.countries.includes("usg")&&e.push({title:"United States Government",states:t.usGovernment}),e}},l={setSelectedStates:function(t,e){t.selectedStates=Object(r.a)(e)},setCountries:function(t,e){t.countries=Object(r.a)(e)}},d={setSelectedStates:function(t,e){(0,t.commit)("setSelectedStates",e)},setCountries:function(t,e){(0,t.commit)("setCountries",e)}}},76:function(t,e,n){"use strict";var r=n(398),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(n(325),n(101)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);e.a=component.exports}},[[275,3,1,4]]]);