(function(t){function e(e){for(var a,l,o=e[0],u=e[1],r=e[2],m=0,d=[];m<o.length;m++)l=o[m],s[l]&&d.push(s[l][0]),s[l]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(e);while(d.length)d.shift()();return n.push.apply(n,r||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,o=1;o<i.length;o++){var u=i[o];0!==s[u]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=i[0]))}return t}var a={},s={1:0},n=[];function l(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=a,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},l.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="./";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var r=0;r<o.length;r++)e(o[r]);var c=u;n.push([9,0]),i()})({"00LD":function(t,e,i){},"0a+P":function(t,e,i){},"4O59":function(t,e,i){"use strict";var a=i("ltl0"),s=i.n(a);s.a},9:function(t,e,i){t.exports=i("Vtdi")},CkAL:function(t,e,i){},QyVY:function(t,e,i){},Vtdi:function(t,e,i){"use strict";i.r(e);i("VRzm");var a=i("Kw5r"),s=i("zlta"),n=i.n(s),l=i("1h/u"),o=i.n(l),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"app"}},[i("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",[i("v-toolbar",{staticClass:"transparent",attrs:{prominent:"",flat:""}},[i("v-toolbar-title",[t._v("Military symbology picker")])],1),t._v(" "),i("v-subheader",[t._v("Navigation")]),t._v(" "),i("v-list-tile",{attrs:{to:"/"}},[i("v-list-tile-action",[i("v-icon",[t._v("home")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Home")])],1)],1),t._v(" "),i("v-list-tile",{attrs:{to:"/about/"}},[i("v-list-tile-action",[i("v-icon",[t._v("info_outline")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("About")])],1)],1),t._v(" "),i("v-list-tile",{attrs:{href:"https://github.com/kjellmf/sidc-picker"}},[i("v-list-tile-action",[i("v-icon",[t._v("code")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("GitHub repo")])],1)],1),t._v(" "),i("v-list-tile",{attrs:{to:{name:"keyboardShortcuts"}}},[i("v-list-tile-action",[i("v-icon",[t._v("help_outline")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Keyboard shortcuts")])],1)],1),t._v(" "),i("v-subheader",[t._v("Settings")]),t._v(" "),i("v-list-tile",{on:{click:function(e){t.simpleStatusModifier=!t.simpleStatusModifier}}},[i("v-list-tile-action",[i("v-switch",{on:{click:function(t){t.stopPropagation()}},model:{value:t.simpleStatusModifier,callback:function(e){t.simpleStatusModifier=e},expression:"simpleStatusModifier"}})],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Use simple status modifier")])],1)],1),t._v(" "),i("v-list-tile",{on:{click:function(e){t.autocomplete=!t.autocomplete}}},[i("v-list-tile-action",[i("v-switch",{on:{click:function(t){t.stopPropagation()}},model:{value:t.autocomplete,callback:function(e){t.autocomplete=e},expression:"autocomplete"}})],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Autocomplete")])],1)],1)],1)],1),t._v(" "),i("v-toolbar",{attrs:{dense:"",fixed:"",app:""}},[i("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),i("router-view",{attrs:{name:"toolbar"}})],1),t._v(" "),i("v-content",[i("router-view",{key:t.autocomplete^t.simpleStatusModifier}),t._v(" "),i("snack-message")],1),t._v(" "),i("div",{staticStyle:{display:"none"}},[i("a",{directives:[{name:"shortkey",rawName:"v-shortkey",value:{a:["shift","?"],b:["?"]},expression:"{a: ['shift', '?'], b: ['?']}"}],on:{shortkey:t.showHelp}})])],1)},r=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-snackbar",{attrs:{timeout:t.timeout,bottom:"",left:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.snackbarText)+"\n  "),i("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)},m=[],d={name:"SnackMessage",data:function(){return{}},props:{timeout:{type:Number,default:3e3}},computed:{snackbarText:function(){return this.$store.state.snackbarText},snackbar:{get:function(){return this.$store.state.snackbar},set:function(t){this.$store.commit("setSnackbar",t)}}}},v=d,p=(i("yWgw"),i("KHd+")),f=Object(p["a"])(v,c,m,!1,null,null,null),h=f.exports,b={components:{SnackMessage:h},data:function(){return{drawer:null}},computed:{autocomplete:{get:function(){return this.$store.state.autocomplete},set:function(t){this.$store.commit("setAutocomplete",t)}},simpleStatusModifier:{get:function(){return this.$store.state.simpleStatusModifier},set:function(t){this.$store.commit("setSimpleStatusModifier",t)}}},mounted:function(){this.$vuetify.breakpoint.smAndDown&&(this.autocomplete=!1)},methods:{showHelp:function(){this.$router.push({name:"keyboardShortcuts"})}}},y=b,x=(i("ZL7j"),Object(p["a"])(y,u,r,!1,null,null,null)),S=x.exports,_=i("jE9Z"),k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-flex",{attrs:{xs12:"",md9:""}},[i("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-text-field",{staticClass:"sidc-field",attrs:{label:"SIDC",mask:"##-#-#-##-#-#-##-######-##-##",permament:"",rules:t.sidcRules},model:{value:t.inputSidc,callback:function(e){t.inputSidc=e},expression:"inputSidc"}})],1)],1),t._v(" "),i("v-layout",t._b({},"v-layout",t.binding,!1),[i("v-flex",{staticClass:"symbol-test",attrs:{"text-xs-center":"",xs12:"",md3:"","order-md2":""}},[i("mil-symbol",{staticClass:"symbol-test",attrs:{sidc:t.sidc,size:50,"simple-status-modifier":t.simpleStatusModifier}})],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("search-symbols",{on:{input:t.updateFromSearch}}),t._v(" "),i("sidc-picker",{attrs:{autocomplete:t.autocomplete,"simple-status-modifier":t.simpleStatusModifier},model:{value:t.sidc,callback:function(e){t.sidc=e},expression:"sidc"}})],1)],1),t._v(" "),i("router-view",{attrs:{name:"dialogs"}})],1)},V=[],w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},g=[],T={name:"MilSymbol",props:{sidc:String,size:{type:Number,default:15},simpleStatusModifier:{type:Boolean,default:!1},modifiers:{type:Object}},mounted:function(){this.setSymbol()},methods:{setSymbol:function(){var t=new o.a.Symbol(this.sidc,{size:this.size,simpleStatusModifier:this.simpleStatusModifier},this.modifiers||{});this.$el.innerHTML=t.asSVG()}},watch:{sidc:function(t){this.setSymbol()},size:function(t){this.setSymbol()}},render:function(t){return t("span",{attrs:{class:"milsymbol"}})}},O=T,C=Object(p["a"])(O,w,g,!1,null,null,null),M=C.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("sidc-picker-select",{attrs:{items:t.contextValues,label:"Context",autocomplete:t.autocomplete},model:{value:t.contextValue,callback:function(e){t.contextValue=e},expression:"contextValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.sidValues,label:"Standard identity",autocomplete:t.autocomplete},model:{value:t.sidValue,callback:function(e){t.sidValue=e},expression:"sidValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.symbolSets,label:"Symbol set",autocomplete:t.autocomplete},model:{value:t.symbolSetValue,callback:function(e){t.symbolSetValue=e},expression:"symbolSetValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.statusValues,label:"Status",autocomplete:t.autocomplete,"simple-status-modifier":t.simpleStatusModifier},model:{value:t.statusValue,callback:function(e){t.statusValue=e},expression:"statusValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.hqTfDummy,label:"Headquarters/Task force/Dummy",autocomplete:t.autocomplete},model:{value:t.hqTfDummyValue,callback:function(e){t.hqTfDummyValue=e},expression:"hqTfDummyValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.emtValues,label:"Echelon/Mobility/Towed array",autocomplete:t.autocomplete},model:{value:t.emtValue,callback:function(e){t.emtValue=e},expression:"emtValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.icons,label:"Main icon",autocomplete:t.autocomplete},model:{value:t.iconValue,callback:function(e){t.iconValue=e},expression:"iconValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.modifierOne,label:"Modifier 1",autocomplete:t.autocomplete},model:{value:t.mod1,callback:function(e){t.mod1=e},expression:"mod1"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.modifierTwo,label:"Modifier 2",autocomplete:t.autocomplete},model:{value:t.mod2,callback:function(e){t.mod2=e},expression:"mod2"}})],1)},P=[],j=i("yT7P"),$=(i("Vd3H"),i("f3/d"),i("v5iE")),q=i("xmWZ"),A=i("qpph"),E=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"10000000000000000000";Object(q["a"])(this,t),this.sic=e,this.version=e.substr(0,2),this.context=e.substr(2,1),this.standardIdentity=e.substr(3,1),this.symbolSet=e.substr(4,2),this.status=e.substr(6,1),this.hqtfd=e.substr(7,1),this.amplifier=e.substr(8,1),this.amplifierDescriptor=e.substr(9,1),this.entity=e.substr(10,2),this.entityType=e.substr(12,2),this.entitySubType=e.substr(14,2),this.modifierOne=e.substr(16,2),this.modifierTwo=e.substr(18,2)}return Object(A["a"])(t,[{key:"toString",value:function(){return this.version+this.context+this.standardIdentity+this.symbolSet+this.status+this.hqtfd+this.amplifier+this.amplifierDescriptor+this.entity+this.entityType+this.entitySubType+this.modifierOne+this.modifierTwo}}]),t}(),F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-select",{attrs:{items:t.items,label:t.label,autocomplete:t.autocomplete},scopedSlots:t._u([{key:"item",fn:function(e){return[i("v-list-tile-avatar",[i("mil-symbol",{attrs:{size:20,sidc:e.item.sidc,"simple-status-modifier":t.simpleStatusModifier}})],1),t._v(" "),i("v-list-tile-content",{domProps:{textContent:t._s(e.item.text)}})]}}]),model:{value:t.myValue,callback:function(e){t.myValue=e},expression:"myValue"}})},I=[],N={name:"SidcPickerSelect",components:{MilSymbol:M},props:{items:{type:Array,required:!0},autocomplete:{type:Boolean,default:!1},label:String,value:String,simpleStatusModifier:null},data:function(){return{myValue:null}},created:function(){this.myValue=this.value},watch:{myValue:function(t){this.$emit("input",t)},value:function(t){this.myValue=t}}},B=N,H=(i("yEa6"),Object(p["a"])(B,F,I,!1,null,"487d1f9d",null)),G=H.exports,L="10",z="27",U="30",R="35",W=[{value:"0",text:"Reality"},{value:"1",text:"Exercise"},{value:"2",text:"Simulation"}],Z=[{value:"0",text:"Pending"},{value:"1",text:"Unknown"},{value:"2",text:"Assumed Friend"},{value:"3",text:"Friend"},{value:"4",text:"Neutral"},{value:"5",text:"Suspect/Joker"},{value:"6",text:"Hostile/Faker"}],J=[{value:"0",text:"Not Applicable"},{value:"1",text:"Feint/Dummy"},{value:"2",text:"Headquarters"},{value:"3",text:"Feint/Dummy Headquarters"},{value:"4",text:"Task Force"},{value:"5",text:"Feint/Dummy Task Force"},{value:"6",text:"Task Force Headquarters"},{value:"7",text:"Feint/Dummy Task Force Headquarters"}],K=[{value:"0",text:"Present"},{value:"1",text:"Planned/Anticipated/Suspect"},{value:"2",text:"Present/Fully capable"},{value:"3",text:"Present/Damaged"},{value:"4",text:"Present/Destroyed"},{value:"5",text:"Present/Full to capacity"}],Q=[{value:"00",text:"Unspecified"},{value:"11",text:"Team/Crew"},{value:"12",text:"Squad"},{value:"13",text:"Section"},{value:"14",text:"Platoon/Detachment"},{value:"15",text:"Company/Battery/Troop"},{value:"16",text:"Battalion/Squadron"},{value:"17",text:"Regiment/Group"},{value:"18",text:"Brigade"},{value:"21",text:"Division"},{value:"22",text:"Corps/MEF"},{value:"23",text:"Army"},{value:"24",text:"Army Group/Front"},{value:"25",text:"Region/Theater"},{value:"26",text:"Command"}],Y="15",X=[{value:"00",text:"Unspecified"},{value:"31",text:"Wheeled limited cross country"},{value:"32",text:"Wheeled cross country"},{value:"33",text:"Tracked"},{value:"34",text:"Wheeled and tracked combination"},{value:"35",text:"Towed"},{value:"36",text:"Railway"},{value:"37",text:"Pack animals"},{value:"41",text:"Over snow (prime mover)"},{value:"42",text:"Sled"},{value:"51",text:"Barge"},{value:"52",text:"Amphibious"}],tt=[{value:"00",text:"Unspecified"},{value:"71",text:"Leader"}],et=[{value:"00",text:"Unspecified"},{value:"61",text:"Short towed array"},{value:"62",text:"Long towed array"}],it={name:"SidcPicker",components:{MilSymbol:M,SidcPickerSelect:G},props:{value:String,required:{type:Boolean,default:!1},label:{type:String,default:"SIDC"},hint:{type:String,default:"Symbol identification code"},rules:{type:Array},autocomplete:{type:Boolean,default:!0},simpleStatusModifier:{type:Boolean,default:!1}},data:function(){return{myValue:null,isOpen:!1,contextValue:null,sidValue:null,symbolSetValue:null,statusValue:null,hqTfDummyValue:null,emtValue:null,iconValue:null,mod1:null,mod2:null}},created:function(){this.sidc=this.value},watch:{value:function(t){this.sidc=t},sidc:function(t){this.$emit("input",t)}},computed:{symbolSets:function(){var t=[];for(var e in $["a"])t.push({value:e,text:$["a"][e].name,sidc:"10"+this.contextValue+this.sidValue+e+"00000000000000"});return t.sort(function(t,e){return t.value-e.value}),t},contextValues:function(){var t=this;return W.map(function(e){return Object(j["a"])({},e,{sidc:"10"+e.value+t.sidValue+t.symbolSetValue+t.statusValue+"0000000000000"})})},sidValues:function(){var t=this;return Z.map(function(e){return Object(j["a"])({},e,{sidc:"10"+t.contextValue+e.value+t.symbolSetValue+t.statusValue+"0000000000000"})})},symbolSet:function(){return $["a"][this.symbolSetValue]["main icon"]||[]},statusValues:function(){var t=this;return K.map(function(e){return Object(j["a"])({},e,{sidc:"10"+t.contextValue+t.sidValue+t.symbolSetValue+e.value+"0000000000000"})})},hqTfDummy:function(){var t=this;return J.map(function(e){return Object(j["a"])({},e,{sidc:"10"+t.contextValue+t.sidValue+t.symbolSetValue+"0"+e.value+"000000000000"})})},emtValues:function(){var t,e=this;switch(this.symbolSetValue){case L:t=Q;break;case Y:t=X;break;case z:t=tt;break;case U:case R:t=et;break;default:t=[{value:"00",text:"Unspecified"}]}return t.map(function(t){return Object(j["a"])({},t,{sidc:"10"+e.contextValue+e.sidValue+e.symbolSetValue+"00"+t.value+"0000000000"})})},icons:function(){var t=this,e=this.symbolSet;return e.map(function(e){var i=e.entity;return e["entity type"]&&(i+=" - "+e["entity type"]),e["entity subtype"]&&(i+=" - "+e["entity subtype"]),{value:e.code,text:i,sidc:"10"+t.contextValue+t.sidValue+t.symbolSetValue+"0000"+e.code+"0000"}})},modifierOne:function(){var t=this,e=$["a"][this.symbolSetValue]["modifier 1"]||[];return e.map(function(e){return{value:e.code,text:e.modifier,sidc:"10"+t.contextValue+t.sidValue+t.symbolSetValue+"0000000000"+e.code+"00"}})},modifierTwo:function(){var t=this,e=$["a"][this.symbolSetValue]["modifier 2"]||[];return e.map(function(e){return{value:e.code,text:e.modifier,sidc:"10"+t.contextValue+t.sidValue+t.symbolSetValue+"000000000000"+e.code}})},sidc:{get:function(){if(this.myValue){var t=new E(this.myValue);return t.context=this.contextValue,t.standardIdentity=this.sidValue,t.symbolSet=this.symbolSetValue,t.status=this.statusValue,t.hqtfd=this.hqTfDummyValue,t.amplifier=this.emtValue[0],t.amplifierDescriptor=this.emtValue[1],t.entity=this.iconValue.substr(0,2),t.entityType=this.iconValue.substr(2,2),t.entitySubType=this.iconValue.substr(4,2),t.modifierOne=this.mod1,t.modifierTwo=this.mod2,t.toString()}},set:function(t){this.myValue=t;var e=new E(t);this.contextValue=e.context,this.sidValue=e.standardIdentity,this.symbolSetValue=e.symbolSet,this.statusValue=e.status,this.hqTfDummyValue=e.hqtfd,this.emtValue=e.amplifier+e.amplifierDescriptor,this.iconValue=e.entity+e.entityType+e.entitySubType,this.mod1=e.modifierOne,this.mod2=e.modifierTwo}}},methods:{}},at=it,st=(i("wZyT"),Object(p["a"])(at,D,P,!1,null,"32e93b86",null)),nt=st.exports,lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-select",{staticClass:"mb-3",attrs:{autofocus:"",accesskey:"s",items:t.allIcons,label:"Search",autocomplete:"","prepend-icon":"search",solo:""},scopedSlots:t._u([{key:"item",fn:function(e){return[i("v-list-tile-avatar",[i("mil-symbol",{attrs:{size:20,sidc:e.item.value}})],1),t._v(" "),i("v-list-tile-content",{domProps:{textContent:t._s(e.item.text)}})]}}]),model:{value:t.myValue,callback:function(e){t.myValue=e},expression:"myValue"}})},ot=[],ut=i("iv4g"),rt={name:"SearchSymbols",components:{MilSymbol:M},data:function(){return{myValue:null}},created:function(){this.ssv=Object.keys($["a"]).sort()},computed:{allIcons:function(){var t=[];return this.ssv.forEach(function(e){var i=$["a"][e]["main icon"]||[],a=i.map(function(t){var i=t.entity;return t["entity type"]&&(i+=" - "+t["entity type"]),t["entity subtype"]&&(i+=" - "+t["entity subtype"]),{text:i,value:"1003"+e+"0000"+t.code+"0000"}});t.push.apply(t,Object(ut["a"])(a))}),t}},watch:{myValue:function(t){this.$emit("input",t)},value:function(t){this.myValue=t}}},ct=rt,mt=(i("4O59"),Object(p["a"])(ct,lt,ot,!1,null,null,null)),dt=mt.exports,vt={name:"SymbolPicker",components:{MilSymbol:M,SidcPicker:nt,SearchSymbols:dt},data:function(){return{searchSIDC:null,editSIDC:!0,inputSidc:null,valid:!1,sidcRules:[function(t){return!!t||"Required"},function(t){return t&&t.length>10||"Invalid SIDC"}]}},computed:{autocomplete:function(){return this.$store.state.autocomplete},simpleStatusModifier:function(){return this.$store.state.simpleStatusModifier},sidc:{get:function(){return this.$store.state.sidc},set:function(t){this.$store.commit("setSidc",t),this.inputSidc=t}},binding:function(){var t={};return this.$vuetify.breakpoint.smAndDown&&(t.column=!0),t}},watch:{inputSidc:function(t,e){this.valid&&t&&(this.sidc=t)}},methods:{updateFromSearch:function(t){if(t){var e=new E(this.sidc),i=new E(t);e.symbolSet=i.symbolSet,e.entity=i.entity,e.entityType=i.entityType,e.entitySubType=i.entitySubType,this.sidc=e.toString()}}}},pt=vt,ft=(i("d8k4"),Object(p["a"])(pt,k,V,!1,null,"b318eb80",null)),ht=ft.exports,bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",[i("v-flex",[i("h1",{staticClass:"display-2"},[t._v("SIDC picker")]),t._v(" "),i("v-divider",{staticClass:"my-3"}),t._v(" "),i("p",[t._v("A MILSTD 2525/APP6 symbol identification code picker experiment. Built upon the excellent "),i("a",{attrs:{href:"https://spatialillusions.com/milsymbol/index.html"}},[t._v("milsymbol")]),t._v(" and "),i("a",{attrs:{href:"https://github.com/spatialillusions/milstd"}},[t._v("milstd")]),t._v(" libraries.\n\n      ")]),i("p",[t._v("This project is similar to an earlier experiment, \n        "),i("a",{attrs:{href:"https://github.com/kjellmf/military-symbology-explorer"}},[t._v("Joint Military Symbology Explorer")]),t._v(".\n        \n\n      ")]),i("h2",[t._v("Credits")]),t._v(" "),i("p",[t._v("Thanks to "),i("a",{attrs:{href:"https://spatialillusions.com/"}},[t._v("Måns Beckman")]),t._v(" for publishing the\n      "),i("a",{attrs:{href:"https://spatialillusions.com/milsymbol/index.html"}},[t._v("milsymbol")]),t._v(" and "),i("a",{attrs:{href:"https://github.com/spatialillusions/milstd"}},[t._v("milstd")]),t._v(" libraries\n      as open source! \n\n      ")]),i("h2",[t._v("Technical details")]),t._v(" "),i("p",[t._v("Some of the tools, frameworks and libraries used:")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/spatialillusions/milsymbol"}},[t._v("milsymbol")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/spatialillusions/milstd"}},[t._v("milstd")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://vuetifyjs.com/en/"}},[t._v("Vuetify")])])])],1)],1)],1)},yt=[],xt={},St=Object(p["a"])(xt,bt,yt,!1,null,null,null),_t=St.exports,kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{"max-width":"500px"},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,"Escape")?t.close(e):null}},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("Keyboard shortcuts")]),t._v(" "),i("v-card-text",[i("kbd",[t._v("Alt")]),t._v(" \n      "),i("kbd",[t._v("s")]),t._v(" Go to search box\n    ")]),t._v(" "),i("v-card-text",[i("kbd",[t._v("Alt")]),t._v(" \n      "),i("kbd",[t._v("c")]),t._v(" Copy SIDC to clipboard\n    ")]),t._v(" "),i("v-card-text",[i("kbd",[t._v("Alt")]),t._v(" \n      "),i("kbd",[t._v("x")]),t._v(" Clear\n    ")]),t._v(" "),i("v-card-text",[i("kbd",[t._v("?")]),t._v(" Show help\n    ")]),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"green darken-1",flat:""},nativeOn:{click:function(e){return t.close(e)}}},[t._v("Close")])],1)],1)],1)},Vt=[],wt={name:"help-dialog",data:function(){return{isOpen:!1}},mounted:function(){this.isOpen=!0},watch:{isOpen:function(t){var e=this;0==t&&setTimeout(function(){e.$router.go(-1)},300)}},methods:{close:function(){this.isOpen=!1}}},gt=wt,Tt=(i("tizk"),Object(p["a"])(gt,kt,Vt,!1,null,"31c850bd",null)),Ot=Tt.exports,Ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-btn",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["alt","c"],expression:"['alt', 'c']"}],staticClass:"mx-0",attrs:{icon:"",title:"Copy SIDC to clipboard"},on:{click:t.doCopy,shortkey:t.doCopy}},[i("v-icon",[t._v("assignment")])],1),t._v(" "),i("v-btn",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["alt","x"],expression:"['alt', 'x']"}],staticClass:"mx-0",attrs:{icon:"",title:"Clear"},on:{click:t.clear,shortkey:t.clear}},[i("v-icon",[t._v("clear")])],1),t._v(" "),i("v-btn",{staticClass:"mx-0 px-0",attrs:{flat:"",title:"Download symbol as PNG",href:"download",download:"nn.png"},on:{click:t.downloadPNG}},[i("v-icon",[t._v("save_alt")]),t._v("  PNG\n  ")],1),t._v(" "),i("v-btn",{staticClass:"mx-0 px-0",attrs:{flat:"",title:"Download symbol as SVG",href:"download",download:"nn.svg"},on:{click:t.downloadSVG}},[i("v-icon",[t._v("save_alt")]),t._v("  SVG\n  ")],1)],1)},Mt=[],Dt={name:"HomeToolbar",data:function(){return{}},computed:{sidc:{get:function(){return this.$store.state.sidc},set:function(t){this.$store.commit("setSidc",t)}}},methods:{doCopy:function(){var t=this;this.$copyText(this.sidc).then(function(e){console.log("Dispatch"),t.$store.dispatch("showMessage","SIDC copied to clipboard")}).catch(function(t){console.warning("Failed to copy SIDC to clipboard")})},clear:function(){var t=new E(this.sidc);t.hqtfd="0",t.amplifier="0",t.amplifierDescriptor="0",this.sidc=t.toString()},downloadPNG:function(t){var e=new l["Symbol"](this.sidc),i=t.currentTarget;i.setAttribute("href",e.asCanvas().toDataURL()),i.setAttribute("download",this.sidc+".png")},downloadSVG:function(t){var e=new l["Symbol"](this.sidc),i=t.currentTarget;i.setAttribute("href",e.toDataURL()),i.setAttribute("download",this.sidc+".svg")}}},Pt=Dt,jt=(i("qPBj"),Object(p["a"])(Pt,Ct,Mt,!1,null,null,null)),$t=jt.exports;a["a"].use(_["a"]);var qt=new _["a"]({routes:[{path:"/",name:"home",components:{default:ht,toolbar:$t},children:[{path:"help",name:"keyboardShortcuts",components:{dialogs:Ot}}]},{path:"/about",name:"about",component:_t}]}),At=i("L2JU");a["a"].use(At["a"]);var Et=new At["a"].Store({state:{autocomplete:!0,simpleStatusModifier:!1,sidc:"10031000001211000000",snackbarText:"",snackbar:!1},mutations:{setAutocomplete:function(t,e){t.autocomplete=e},setSimpleStatusModifier:function(t,e){t.simpleStatusModifier=e},setSidc:function(t,e){t.sidc=e},setSnackbarText:function(t,e){t.snackbarText=e},setSnackbar:function(t,e){t.snackbar=e}},actions:{showMessage:function(t,e){var i=t.commit;t.state;i("setSnackbarText",e),i("setSnackbar",!0)}}}),Ft=(i("v0CA"),i("TrUB")),It=i.n(Ft),Nt=i("Nxd3"),Bt=i.n(Nt);a["a"].use(It.a),a["a"].use(n.a),a["a"].use(Bt.a),a["a"].config.productionTip=!1,l["setStandard"]("APP6"),new a["a"]({router:qt,store:Et,render:function(t){return t(S)}}).$mount("#app")},ZL7j:function(t,e,i){"use strict";var a=i("00LD"),s=i.n(a);s.a},"cP/q":function(t,e,i){},d8k4:function(t,e,i){"use strict";var a=i("CkAL"),s=i.n(a);s.a},h46s:function(t,e,i){},jlN0:function(t,e,i){},ltl0:function(t,e,i){},qPBj:function(t,e,i){"use strict";var a=i("h46s"),s=i.n(a);s.a},tizk:function(t,e,i){"use strict";var a=i("0a+P"),s=i.n(a);s.a},wZyT:function(t,e,i){"use strict";var a=i("QyVY"),s=i.n(a);s.a},yEa6:function(t,e,i){"use strict";var a=i("cP/q"),s=i.n(a);s.a},yWgw:function(t,e,i){"use strict";var a=i("jlN0"),s=i.n(a);s.a}});
//# sourceMappingURL=app.2493a60d.js.map