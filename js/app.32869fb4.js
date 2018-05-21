(function(t){function e(e){for(var s,o,n=e[0],u=e[1],r=e[2],m=0,d=[];m<n.length;m++)o=n[m],a[o]&&d.push(a[o][0]),a[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);c&&c(e);while(d.length)d.shift()();return l.push.apply(l,r||[]),i()}function i(){for(var t,e=0;e<l.length;e++){for(var i=l[e],s=!0,n=1;n<i.length;n++){var u=i[n];0!==a[u]&&(s=!1)}s&&(l.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},a={1:0},l=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="./";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],u=n.push.bind(n);n.push=e,n=n.slice();for(var r=0;r<n.length;r++)e(n[r]);var c=u;l.push([6,0]),i()})({"00LD":function(t,e,i){},"4O59":function(t,e,i){"use strict";var s=i("ltl0"),a=i.n(s);a.a},6:function(t,e,i){t.exports=i("Vtdi")},FUkY:function(t,e,i){},Vtdi:function(t,e,i){"use strict";i.r(e);i("VRzm");var s=i("Kw5r"),a=i("zlta"),l=i.n(a),o=i("1h/u"),n=i.n(o),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"app"}},[i("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",[i("v-subheader",[t._v("Navigation")]),t._v(" "),i("v-list-tile",{attrs:{to:"/"}},[i("v-list-tile-action",[i("v-icon",[t._v("home")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Home")])],1)],1),t._v(" "),i("v-list-tile",{attrs:{to:"/about/"}},[i("v-list-tile-action",[i("v-icon",[t._v("info_outline")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("About")])],1)],1),t._v(" "),i("v-list-tile",{attrs:{href:"https://github.com/kjellmf/sidc-picker"}},[i("v-list-tile-action",[i("v-icon",[t._v("code")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("GitHub repo")])],1)],1),t._v(" "),i("v-subheader",[t._v("Settings")]),t._v(" "),i("v-list-tile",{on:{click:function(e){t.simpleStatusModifier=!t.simpleStatusModifier}}},[i("v-list-tile-action",[i("v-switch",{on:{click:function(t){t.stopPropagation()}},model:{value:t.simpleStatusModifier,callback:function(e){t.simpleStatusModifier=e},expression:"simpleStatusModifier"}})],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Use simple status modifier")])],1)],1),t._v(" "),i("v-list-tile",{on:{click:function(e){t.autocomplete=!t.autocomplete}}},[i("v-list-tile-action",[i("v-switch",{on:{click:function(t){t.stopPropagation()}},model:{value:t.autocomplete,callback:function(e){t.autocomplete=e},expression:"autocomplete"}})],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Autocomplete")])],1)],1)],1)],1),t._v(" "),i("v-toolbar",{attrs:{dense:"",fixed:"",app:""}},[i("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),i("v-toolbar-title",[t._v("SIDC picker")])],1),t._v(" "),i("v-content",[i("router-view",{key:t.autocomplete^t.simpleStatusModifier})],1)],1)},r=[],c={data:function(){return{drawer:null}},computed:{autocomplete:{get:function(){return this.$store.state.autocomplete},set:function(t){this.$store.commit("setAutocomplete",t)}},simpleStatusModifier:{get:function(){return this.$store.state.simpleStatusModifier},set:function(t){this.$store.commit("setSimpleStatusModifier",t)}}}},m=c,d=(i("ZL7j"),i("KHd+")),p=Object(d["a"])(m,u,r,!1,null,null,null),v=p.exports,f=i("jE9Z"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-flex",{staticClass:"pb-3",attrs:{xs12:""}},[i("span",{staticClass:"title"},[i("strong",{staticClass:"hidden-sm-and-down"},[t._v("SIDC")]),t._v(" "+t._s(t.sidc))])]),t._v(" "),i("v-layout",t._b({},"v-layout",t.binding,!1),[i("v-flex",{staticClass:"symbol-test",attrs:{"text-xs-center":"",xs12:"",md3:"","order-md2":""}},[i("mil-symbol",{staticClass:"symbol-test",attrs:{sidc:t.sidc,size:50,"simple-status-modifier":t.simpleStatusModifier}})],1),t._v(" "),i("v-flex",[i("search-symbols",{on:{input:t.updateFromSearch}}),t._v(" "),i("sidc-picker",{attrs:{autocomplete:t.autocomplete,"simple-status-modifier":t.simpleStatusModifier},model:{value:t.sidc,callback:function(e){t.sidc=e},expression:"sidc"}})],1)],1)],1)},y=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},x=[],S={name:"MilSymbol",props:{sidc:String,size:{type:Number,default:15},simpleStatusModifier:{type:Boolean,default:!1},modifiers:{type:Object}},mounted:function(){this.setSymbol()},methods:{setSymbol:function(){var t=new n.a.Symbol(this.sidc,{size:this.size,simpleStatusModifier:this.simpleStatusModifier},this.modifiers||{});this.$el.innerHTML=t.asSVG()}},watch:{sidc:function(t){this.setSymbol()},size:function(t){this.setSymbol()}},render:function(t){return t("span",{attrs:{class:"milsymbol"}})}},V=S,_=Object(d["a"])(V,b,x,!1,null,null,null),k=_.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("sidc-picker-select",{attrs:{items:t.contextValues,label:"Context",autocomplete:t.autocomplete},model:{value:t.contextValue,callback:function(e){t.contextValue=e},expression:"contextValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.sidValues,label:"Standard identity",autocomplete:t.autocomplete},model:{value:t.sidValue,callback:function(e){t.sidValue=e},expression:"sidValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.symbolSets,label:"Symbol set",autocomplete:t.autocomplete},model:{value:t.symbolSetValue,callback:function(e){t.symbolSetValue=e},expression:"symbolSetValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.statusValues,label:"Status",autocomplete:t.autocomplete,"simple-status-modifier":t.simpleStatusModifier},model:{value:t.statusValue,callback:function(e){t.statusValue=e},expression:"statusValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.hqTfDummy,label:"Headquarters/Task force/Dummy",autocomplete:t.autocomplete},model:{value:t.hqTfDummyValue,callback:function(e){t.hqTfDummyValue=e},expression:"hqTfDummyValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.emtValues,label:"Echelon/Mobility/Towed array",autocomplete:t.autocomplete},model:{value:t.emtValue,callback:function(e){t.emtValue=e},expression:"emtValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.icons,label:"Main icon",autocomplete:t.autocomplete},model:{value:t.iconValue,callback:function(e){t.iconValue=e},expression:"iconValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.modifierOne,label:"Modifier 1",autocomplete:t.autocomplete},model:{value:t.mod1,callback:function(e){t.mod1=e},expression:"mod1"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.modifierTwo,label:"Modifier 2",autocomplete:t.autocomplete},model:{value:t.mod2,callback:function(e){t.mod2=e},expression:"mod2"}})],1)},w=[],T=i("yT7P"),M=(i("Vd3H"),i("f3/d"),i("v5iE")),O=i("xmWZ"),j=i("qpph"),D=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"10000000000000000000";Object(O["a"])(this,t),this.sic=e,this.version=e.substr(0,2),this.context=e.substr(2,1),this.standardIdentity=e.substr(3,1),this.symbolSet=e.substr(4,2),this.status=e.substr(6,1),this.hqtfd=e.substr(7,1),this.amplifier=e.substr(8,1),this.amplifierDescriptor=e.substr(9,1),this.entity=e.substr(10,2),this.entityType=e.substr(12,2),this.entitySubType=e.substr(14,2),this.modifierOne=e.substr(16,2),this.modifierTwo=e.substr(18,2)}return Object(j["a"])(t,[{key:"toString",value:function(){return this.version+this.context+this.standardIdentity+this.symbolSet+this.status+this.hqtfd+this.amplifier+this.amplifierDescriptor+this.entity+this.entityType+this.entitySubType+this.modifierOne+this.modifierTwo}}]),t}(),P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-select",{attrs:{items:t.items,label:t.label,autocomplete:t.autocomplete},scopedSlots:t._u([{key:"item",fn:function(e){return[i("v-list-tile-avatar",[i("mil-symbol",{attrs:{size:20,sidc:e.item.sidc,"simple-status-modifier":t.simpleStatusModifier}})],1),t._v(" "),i("v-list-tile-content",{domProps:{textContent:t._s(e.item.text)}})]}}]),model:{value:t.myValue,callback:function(e){t.myValue=e},expression:"myValue"}})},q=[],C={name:"SidcPickerSelect",components:{MilSymbol:k},props:{items:{type:Array,required:!0},autocomplete:{type:Boolean,default:!1},label:String,value:String,simpleStatusModifier:null},data:function(){return{myValue:null}},created:function(){this.myValue=this.value},watch:{myValue:function(t){this.$emit("input",t)},value:function(t){this.myValue=t}}},$=C,F=(i("yEa6"),Object(d["a"])($,P,q,!1,null,"487d1f9d",null)),E=F.exports,A="10",I="27",B="30",H="35",U=[{value:"0",text:"Reality"},{value:"1",text:"Exercise"},{value:"2",text:"Simulation"}],z=[{value:"0",text:"Pending"},{value:"1",text:"Unknown"},{value:"2",text:"Assumed Friend"},{value:"3",text:"Friend"},{value:"4",text:"Neutral"},{value:"5",text:"Suspect/Joker"},{value:"6",text:"Hostile/Faker"}],L=[{value:"0",text:"Not Applicable"},{value:"1",text:"Feint/Dummy"},{value:"2",text:"Headquarters"},{value:"3",text:"Feint/Dummy Headquarters"},{value:"4",text:"Task Force"},{value:"5",text:"Feint/Dummy Task Force"},{value:"6",text:"Task Force Headquarters"},{value:"7",text:"Feint/Dummy Task Force Headquarters"}],J=[{value:"0",text:"Present"},{value:"1",text:"Planned/Anticipated/Suspect"},{value:"2",text:"Present/Fully capable"},{value:"3",text:"Present/Damaged"},{value:"4",text:"Present/Destroyed"},{value:"5",text:"Present/Full to capacity"}],R=[{value:"00",text:"Unspecified"},{value:"11",text:"Team/Crew"},{value:"12",text:"Squad"},{value:"13",text:"Section"},{value:"14",text:"Platoon/Detachment"},{value:"15",text:"Company/Battery/Troop"},{value:"16",text:"Battalion/Squadron"},{value:"17",text:"Regiment/Group"},{value:"18",text:"Brigade"},{value:"21",text:"Division"},{value:"22",text:"Corps/MEF"},{value:"23",text:"Army"},{value:"24",text:"Army Group/Front"},{value:"25",text:"Region/Theater"},{value:"26",text:"Command"}],G="15",N=[{value:"00",text:"Unspecified"},{value:"31",text:"Wheeled limited cross country"},{value:"32",text:"Wheeled cross country"},{value:"33",text:"Tracked"},{value:"34",text:"Wheeled and tracked combination"},{value:"35",text:"Towed"},{value:"36",text:"Railway"},{value:"37",text:"Pack animals"},{value:"41",text:"Over snow (prime mover)"},{value:"42",text:"Sled"},{value:"51",text:"Barge"},{value:"52",text:"Amphibious"}],W=[{value:"00",text:"Unspecified"},{value:"71",text:"Leader"}],Z=[{value:"00",text:"Unspecified"},{value:"61",text:"Short towed array"},{value:"62",text:"Long towed array"}],K={name:"SidcPicker",components:{MilSymbol:k,SidcPickerSelect:E},props:{value:String,required:{type:Boolean,default:!1},label:{type:String,default:"SIDC"},hint:{type:String,default:"Symbol identification code"},rules:{type:Array},autocomplete:{type:Boolean,default:!0},simpleStatusModifier:{type:Boolean,default:!1}},data:function(){return{myValue:null,isOpen:!1,contextValue:null,sidValue:null,symbolSetValue:null,statusValue:null,hqTfDummyValue:null,emtValue:null,iconValue:null,mod1:null,mod2:null}},created:function(){this.sidc=this.value},watch:{value:function(t){this.sidc=t},sidc:function(t){this.$emit("input",t)}},computed:{symbolSets:function(){var t=[];for(var e in M["a"])t.push({value:e,text:M["a"][e].name,sidc:"10"+this.contextValue+this.sidValue+e+"00000000000000"});return t.sort(function(t,e){return t.value-e.value}),t},contextValues:function(){var t=this;return U.map(function(e){return Object(T["a"])({},e,{sidc:"10"+e.value+t.sidValue+t.symbolSetValue+t.statusValue+"0000000000000"})})},sidValues:function(){var t=this;return z.map(function(e){return Object(T["a"])({},e,{sidc:"10"+t.contextValue+e.value+t.symbolSetValue+t.statusValue+"0000000000000"})})},symbolSet:function(){return M["a"][this.symbolSetValue]["main icon"]||[]},statusValues:function(){var t=this;return J.map(function(e){return Object(T["a"])({},e,{sidc:"10"+t.contextValue+t.sidValue+t.symbolSetValue+e.value+"0000000000000"})})},hqTfDummy:function(){var t=this;return L.map(function(e){return Object(T["a"])({},e,{sidc:"10"+t.contextValue+t.sidValue+t.symbolSetValue+"0"+e.value+"000000000000"})})},emtValues:function(){var t,e=this;switch(this.symbolSetValue){case A:t=R;break;case G:t=N;break;case I:t=W;break;case B:case H:t=Z;break;default:t=[{value:"00",text:"Unspecified"}]}return t.map(function(t){return Object(T["a"])({},t,{sidc:"10"+e.contextValue+e.sidValue+e.symbolSetValue+"00"+t.value+"0000000000"})})},icons:function(){var t=this,e=this.symbolSet;return e.map(function(e){var i=e.entity;return e["entity type"]&&(i+=" - "+e["entity type"]),e["entity subtype"]&&(i+=" - "+e["entity subtype"]),{value:e.code,text:i,sidc:"10"+t.contextValue+t.sidValue+t.symbolSetValue+"0000"+e.code+"0000"}})},modifierOne:function(){var t=this,e=M["a"][this.symbolSetValue]["modifier 1"]||[];return e.map(function(e){return{value:e.code,text:e.modifier,sidc:"10"+t.contextValue+t.sidValue+t.symbolSetValue+"0000000000"+e.code+"00"}})},modifierTwo:function(){var t=this,e=M["a"][this.symbolSetValue]["modifier 2"]||[];return e.map(function(e){return{value:e.code,text:e.modifier,sidc:"10"+t.contextValue+t.sidValue+t.symbolSetValue+"000000000000"+e.code}})},sidc:{get:function(){if(this.myValue){var t=new D(this.myValue);return t.context=this.contextValue,t.standardIdentity=this.sidValue,t.symbolSet=this.symbolSetValue,t.status=this.statusValue,t.hqtfd=this.hqTfDummyValue,t.amplifier=this.emtValue[0],t.amplifierDescriptor=this.emtValue[1],t.entity=this.iconValue.substr(0,2),t.entityType=this.iconValue.substr(2,2),t.entitySubType=this.iconValue.substr(4,2),t.modifierOne=this.mod1,t.modifierTwo=this.mod2,t.toString()}},set:function(t){this.myValue=t;var e=new D(t);this.contextValue=e.context,this.sidValue=e.standardIdentity,this.symbolSetValue=e.symbolSet,this.statusValue=e.status,this.hqTfDummyValue=e.hqtfd,this.emtValue=e.amplifier+e.amplifierDescriptor,this.iconValue=e.entity+e.entityType+e.entitySubType,this.mod1=e.modifierOne,this.mod2=e.modifierTwo}}},methods:{}},Y=K,Q=(i("pbEi"),Object(d["a"])(Y,g,w,!1,null,"d16536f6",null)),X=Q.exports,tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-select",{staticClass:"mb-3",attrs:{items:t.allIcons,label:"Search",autocomplete:"","prepend-icon":"search",solo:""},scopedSlots:t._u([{key:"item",fn:function(e){return[i("v-list-tile-avatar",[i("mil-symbol",{attrs:{size:20,sidc:e.item.value}})],1),t._v(" "),i("v-list-tile-content",{domProps:{textContent:t._s(e.item.text)}})]}}]),model:{value:t.myValue,callback:function(e){t.myValue=e},expression:"myValue"}})},et=[],it=i("iv4g"),st={name:"SearchSymbols",components:{MilSymbol:k},data:function(){return{myValue:null}},created:function(){this.ssv=Object.keys(M["a"]).sort()},computed:{allIcons:function(){var t=[];return this.ssv.forEach(function(e){var i=M["a"][e]["main icon"]||[],s=i.map(function(t){var i=t.entity;return t["entity type"]&&(i+=" - "+t["entity type"]),t["entity subtype"]&&(i+=" - "+t["entity subtype"]),{text:i,value:"1003"+e+"0000"+t.code+"0000"}});t.push.apply(t,Object(it["a"])(s))}),t}},watch:{myValue:function(t){this.$emit("input",t)},value:function(t){this.myValue=t}}},at=st,lt=(i("4O59"),Object(d["a"])(at,tt,et,!1,null,null,null)),ot=lt.exports,nt={name:"SymbolPicker",components:{MilSymbol:k,SidcPicker:X,SearchSymbols:ot},data:function(){return{searchSIDC:null}},props:{msg:String},computed:{autocomplete:function(){return this.$store.state.autocomplete},simpleStatusModifier:function(){return this.$store.state.simpleStatusModifier},sidc:{get:function(){return this.$store.state.sidc},set:function(t){this.$store.commit("setSidc",t)}},binding:function(){var t={};return this.$vuetify.breakpoint.smAndDown&&(t.column=!0),t}},methods:{updateFromSearch:function(t){if(t){var e=new D(this.sidc),i=new D(t);e.symbolSet=i.symbolSet,e.entity=i.entity,e.entityType=i.entityType,e.entitySubType=i.entitySubType,this.sidc=e.toString()}}}},ut=nt,rt=(i("v/xV"),Object(d["a"])(ut,h,y,!1,null,"34962093",null)),ct=rt.exports,mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",[i("v-flex",[i("h1",{staticClass:"display-2"},[t._v("SIDC picker")]),t._v(" "),i("v-divider",{staticClass:"my-3"}),t._v(" "),i("p",[t._v("A MILSTD 2525/APP6 symbol identification code picker experiment. Built upon the excellent "),i("a",{attrs:{href:"https://spatialillusions.com/milsymbol/index.html"}},[t._v("milsymbol")]),t._v(" and "),i("a",{attrs:{href:"https://github.com/spatialillusions/milstd"}},[t._v("milstd")]),t._v(" libraries.\n\n      ")]),i("p",[t._v("This project is similar to an earlier experiment, \n        "),i("a",{attrs:{href:"https://github.com/kjellmf/military-symbology-explorer"}},[t._v("Joint Military Symbology Explorer")]),t._v(".\n        \n\n      ")]),i("h2",[t._v("Credits")]),t._v(" "),i("p",[t._v("Thanks to "),i("a",{attrs:{href:"https://spatialillusions.com/"}},[t._v("Måns Beckman")]),t._v(" for publishing the\n      "),i("a",{attrs:{href:"https://spatialillusions.com/milsymbol/index.html"}},[t._v("milsymbol")]),t._v(" and "),i("a",{attrs:{href:"https://github.com/spatialillusions/milstd"}},[t._v("milstd")]),t._v(" libraries\n      as open source! \n\n      ")]),i("h2",[t._v("Technical details")]),t._v(" "),i("p",[t._v("Some of the tools, frameworks and libraries used:")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/spatialillusions/milsymbol"}},[t._v("milsymbol")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/spatialillusions/milstd"}},[t._v("milstd")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://vuetifyjs.com/en/"}},[t._v("Vuetify")])])])],1)],1)],1)},dt=[],pt={},vt=Object(d["a"])(pt,mt,dt,!1,null,null,null),ft=vt.exports;s["a"].use(f["a"]);var ht=new f["a"]({routes:[{path:"/",name:"home",component:ct},{path:"/about",name:"about",component:ft}]}),yt=i("L2JU");s["a"].use(yt["a"]);var bt=new yt["a"].Store({state:{autocomplete:!0,simpleStatusModifier:!1,sidc:"10031000001211000000"},mutations:{setAutocomplete:function(t,e){t.autocomplete=e},setSimpleStatusModifier:function(t,e){t.simpleStatusModifier=e},setSidc:function(t,e){t.sidc=e}},actions:{}});i("v0CA");s["a"].use(l.a),s["a"].config.productionTip=!1,o["setStandard"]("APP6"),new s["a"]({router:ht,store:bt,render:function(t){return t(v)}}).$mount("#app")},ZL7j:function(t,e,i){"use strict";var s=i("00LD"),a=i.n(s);a.a},"cP/q":function(t,e,i){},ltl0:function(t,e,i){},pbEi:function(t,e,i){"use strict";var s=i("s565"),a=i.n(s);a.a},s565:function(t,e,i){},"v/xV":function(t,e,i){"use strict";var s=i("FUkY"),a=i.n(s);a.a},yEa6:function(t,e,i){"use strict";var s=i("cP/q"),a=i.n(s);a.a}});
//# sourceMappingURL=app.32869fb4.js.map