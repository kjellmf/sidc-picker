(function(t){function e(e){for(var a,o,u=e[0],n=e[1],r=e[2],m=0,d=[];m<u.length;m++)o=u[m],s[o]&&d.push(s[o][0]),s[o]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);c&&c(e);while(d.length)d.shift()();return l.push.apply(l,r||[]),i()}function i(){for(var t,e=0;e<l.length;e++){for(var i=l[e],a=!0,u=1;u<i.length;u++){var n=i[u];0!==s[n]&&(a=!1)}a&&(l.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},s={1:0},l=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="./";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],n=u.push.bind(u);u.push=e,u=u.slice();for(var r=0;r<u.length;r++)e(u[r]);var c=n;l.push([5,0]),i()})({"00LD":function(t,e,i){},5:function(t,e,i){t.exports=i("Vtdi")},JqrO:function(t,e,i){"use strict";var a=i("NEGn"),s=i.n(a);s.a},NEGn:function(t,e,i){},Vtdi:function(t,e,i){"use strict";i.r(e);i("VRzm");var a=i("Kw5r"),s=i("zlta"),l=i.n(s),o=i("1h/u"),u=i.n(o),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"app"}},[i("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",[i("v-subheader",[t._v("Navigation")]),t._v(" "),i("v-list-tile",{attrs:{to:"/"}},[i("v-list-tile-action",[i("v-icon",[t._v("home")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Home")])],1)],1),t._v(" "),i("v-list-tile",{attrs:{to:"/about/"}},[i("v-list-tile-action",[i("v-icon",[t._v("info_outline")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("About")])],1)],1),t._v(" "),i("v-list-tile",{attrs:{href:"https://github.com/kjellmf/sidc-picker"}},[i("v-list-tile-action",[i("v-icon",[t._v("code")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("GitHub repo")])],1)],1),t._v(" "),i("v-subheader",[t._v("Settings")]),t._v(" "),i("v-list-tile",{on:{click:function(e){t.simpleStatusModifier=!t.simpleStatusModifier}}},[i("v-list-tile-action",[i("v-switch",{on:{click:function(t){t.stopPropagation()}},model:{value:t.simpleStatusModifier,callback:function(e){t.simpleStatusModifier=e},expression:"simpleStatusModifier"}})],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Use simple status modifier")])],1)],1),t._v(" "),i("v-list-tile",{on:{click:function(e){t.autocomplete=!t.autocomplete}}},[i("v-list-tile-action",[i("v-switch",{on:{click:function(t){t.stopPropagation()}},model:{value:t.autocomplete,callback:function(e){t.autocomplete=e},expression:"autocomplete"}})],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Autocomplete")])],1)],1)],1)],1),t._v(" "),i("v-toolbar",{attrs:{dense:"",fixed:"",app:""}},[i("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),i("v-toolbar-title",[t._v("SIDC picker")])],1),t._v(" "),i("v-content",[i("v-container",[i("v-layout",[i("v-flex",[i("router-view",{key:t.autocomplete^t.simpleStatusModifier})],1)],1)],1)],1)],1)},r=[],c={data:function(){return{drawer:null}},computed:{autocomplete:{get:function(){return this.$store.state.autocomplete},set:function(t){this.$store.commit("setAutocomplete",t)}},simpleStatusModifier:{get:function(){return this.$store.state.simpleStatusModifier},set:function(t){this.$store.commit("setSimpleStatusModifier",t)}}}},m=c,d=(i("ZL7j"),i("KHd+")),v=Object(d["a"])(m,n,r,!1,null,null,null),p=v.exports,f=i("jE9Z"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-flex",{staticClass:"pb-3",attrs:{xs12:""}},[i("span",{staticClass:"title"},[i("strong",{staticClass:"hidden-sm-and-down"},[t._v("SIDC")]),t._v(" "+t._s(t.sidc))])]),t._v(" "),i("v-layout",t._b({},"v-layout",t.binding,!1),[i("v-flex",{staticClass:"symbol-test",attrs:{"text-xs-center":"",xs12:"",md3:"","order-md2":""}},[i("mil-symbol",{staticClass:"symbol-test",attrs:{sidc:t.sidc,size:50,"simple-status-modifier":t.simpleStatusModifier}})],1),t._v(" "),i("v-flex",[i("sidc-picker",{attrs:{autocomplete:t.autocomplete,"simple-status-modifier":t.simpleStatusModifier},model:{value:t.sidc,callback:function(e){t.sidc=e},expression:"sidc"}})],1)],1)],1)},y=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},x=[],S={name:"MilSymbol",props:{sidc:String,size:{type:Number,default:15},simpleStatusModifier:{type:Boolean,default:!1},modifiers:{type:Object}},mounted:function(){this.setSymbol()},methods:{setSymbol:function(){var t=new u.a.Symbol(this.sidc,{size:this.size,simpleStatusModifier:this.simpleStatusModifier},this.modifiers||{});this.$el.innerHTML=t.asSVG()}},watch:{sidc:function(t){this.setSymbol()},size:function(t){this.setSymbol()}},render:function(t){return t("span",{attrs:{class:"milsymbol"}})}},V=S,_=Object(d["a"])(V,b,x,!1,null,null,null),k=_.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("sidc-picker-select",{attrs:{items:t.contextValues,label:"Context",autocomplete:t.autocomplete},model:{value:t.contextValue,callback:function(e){t.contextValue=e},expression:"contextValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.sidValues,label:"Standard identity",autocomplete:t.autocomplete},model:{value:t.sidValue,callback:function(e){t.sidValue=e},expression:"sidValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.symbolSets,label:"Symbol set",autocomplete:t.autocomplete},model:{value:t.symbolSetValue,callback:function(e){t.symbolSetValue=e},expression:"symbolSetValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.statusValues,label:"Status",autocomplete:t.autocomplete,"simple-status-modifier":t.simpleStatusModifier},model:{value:t.statusValue,callback:function(e){t.statusValue=e},expression:"statusValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.hqTfDummy,label:"Headquarters/Task force/Dummy",autocomplete:t.autocomplete},model:{value:t.hqTfDummyValue,callback:function(e){t.hqTfDummyValue=e},expression:"hqTfDummyValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.emtValues,label:"Echelon/Mobility/Towed array",autocomplete:t.autocomplete},model:{value:t.emtValue,callback:function(e){t.emtValue=e},expression:"emtValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.icons,label:"Main icon",autocomplete:t.autocomplete},model:{value:t.iconValue,callback:function(e){t.iconValue=e},expression:"iconValue"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.modifierOne,label:"Modifier 1",autocomplete:t.autocomplete},model:{value:t.mod1,callback:function(e){t.mod1=e},expression:"mod1"}}),t._v(" "),i("sidc-picker-select",{attrs:{items:t.modifierTwo,label:"Modifier 2",autocomplete:t.autocomplete},model:{value:t.mod2,callback:function(e){t.mod2=e},expression:"mod2"}})],1)},g=[],T=i("yT7P"),M=(i("Vd3H"),i("f3/d"),i("v5iE")),O=i("xmWZ"),D=i("qpph"),P=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"10000000000000000000";Object(O["a"])(this,t),this.sic=e,this.version=e.substr(0,2),this.context=e.substr(2,1),this.standardIdentity=e.substr(3,1),this.symbolSet=e.substr(4,2),this.status=e.substr(6,1),this.hqtfd=e.substr(7,1),this.amplifier=e.substr(8,1),this.amplifierDescriptor=e.substr(9,1),this.entity=e.substr(10,2),this.entityType=e.substr(12,2),this.entitySubType=e.substr(14,2),this.modifierOne=e.substr(16,2),this.modifierTwo=e.substr(18,2)}return Object(D["a"])(t,[{key:"toString",value:function(){return this.version+this.context+this.standardIdentity+this.symbolSet+this.status+this.hqtfd+this.amplifier+this.amplifierDescriptor+this.entity+this.entityType+this.entitySubType+this.modifierOne+this.modifierTwo}}]),t}(),q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-select",{attrs:{items:t.items,label:t.label,autocomplete:t.autocomplete},scopedSlots:t._u([{key:"item",fn:function(e){return[i("v-list-tile-avatar",[i("mil-symbol",{attrs:{size:20,sidc:e.item.sidc,"simple-status-modifier":t.simpleStatusModifier}})],1),t._v(" "),i("v-list-tile-content",{domProps:{textContent:t._s(e.item.text)}})]}}]),model:{value:t.myValue,callback:function(e){t.myValue=e},expression:"myValue"}})},j=[],$={name:"SidcPickerSelect",components:{MilSymbol:k},props:{items:{type:Array,required:!0},autocomplete:{type:Boolean,default:!1},label:String,value:String,simpleStatusModifier:null},data:function(){return{myValue:null}},created:function(){this.myValue=this.value},watch:{myValue:function(t){this.$emit("input",t)},value:function(t){this.myValue=t}}},C=$,E=(i("yEa6"),Object(d["a"])(C,q,j,!1,null,"487d1f9d",null)),A=E.exports,F="10",H="27",B="30",L="35",z=[{value:"0",text:"Reality"},{value:"1",text:"Exercise"},{value:"2",text:"Simulation"}],I=[{value:"0",text:"Pending"},{value:"1",text:"Unknown"},{value:"2",text:"Assumed Friend"},{value:"3",text:"Friend"},{value:"4",text:"Neutral"},{value:"5",text:"Suspect/Joker"},{value:"6",text:"Hostile/Faker"}],U=[{value:"0",text:"Not Applicable"},{value:"1",text:"Feint/Dummy"},{value:"2",text:"Headquarters"},{value:"3",text:"Feint/Dummy Headquarters"},{value:"4",text:"Task Force"},{value:"5",text:"Feint/Dummy Task Force"},{value:"6",text:"Task Force Headquarters"},{value:"7",text:"Feint/Dummy Task Force Headquarters"}],G=[{value:"0",text:"Present"},{value:"1",text:"Planned/Anticipated/Suspect"},{value:"2",text:"Present/Fully capable"},{value:"3",text:"Present/Damaged"},{value:"4",text:"Present/Destroyed"},{value:"5",text:"Present/Full to capacity"}],J=[{value:"00",text:"Unspecified"},{value:"11",text:"Team/Crew"},{value:"12",text:"Squad"},{value:"13",text:"Section"},{value:"14",text:"Platoon/Detachment"},{value:"15",text:"Company/Battery/Troop"},{value:"16",text:"Battalion/Squadron"},{value:"17",text:"Regiment/Group"},{value:"18",text:"Brigade"},{value:"21",text:"Division"},{value:"22",text:"Corps/MEF"},{value:"23",text:"Army"},{value:"24",text:"Army Group/Front"},{value:"25",text:"Region/Theater"},{value:"26",text:"Command"}],N="15",R=[{value:"00",text:"Unspecified"},{value:"31",text:"Wheeled limited cross country"},{value:"32",text:"Wheeled cross country"},{value:"33",text:"Tracked"},{value:"34",text:"Wheeled and tracked combination"},{value:"35",text:"Towed"},{value:"36",text:"Railway"},{value:"37",text:"Pack animals"},{value:"41",text:"Over snow (prime mover)"},{value:"42",text:"Sled"},{value:"51",text:"Barge"},{value:"52",text:"Amphibious"}],W=[{value:"00",text:"Unspecified"},{value:"71",text:"Leader"}],Z=[{value:"00",text:"Unspecified"},{value:"61",text:"Short towed array"},{value:"62",text:"Long towed array"}],K={name:"SidcPicker",components:{MilSymbol:k,SidcPickerSelect:A},props:{value:String,required:{type:Boolean,default:!1},label:{type:String,default:"SIDC"},hint:{type:String,default:"Symbol identification code"},rules:{type:Array},autocomplete:{type:Boolean,default:!0},simpleStatusModifier:{type:Boolean,default:!1}},data:function(){return{myValue:null,isOpen:!1,contextValue:null,sidValue:null,symbolSetValue:null,statusValue:null,hqTfDummyValue:null,emtValue:null,iconValue:null,mod1:null,mod2:null}},created:function(){this.sidc=this.value},watch:{value:function(t){this.sidc=t},sidc:function(t){this.$emit("input",t)}},computed:{symbolSets:function(){var t=[];for(var e in M["a"])t.push({value:e,text:M["a"][e].name,sidc:"10"+this.contextValue+this.sidValue+e+"00000000000000"});return t.sort(function(t,e){return t.value-e.value}),t},contextValues:function(){var t=this;return z.map(function(e){return Object(T["a"])({},e,{sidc:"10"+e.value+t.sidValue+t.symbolSetValue+t.statusValue+"0000000000000"})})},sidValues:function(){var t=this;return I.map(function(e){return Object(T["a"])({},e,{sidc:"10"+t.contextValue+e.value+t.symbolSetValue+t.statusValue+"0000000000000"})})},symbolSet:function(){return M["a"][this.symbolSetValue]["main icon"]||[]},statusValues:function(){var t=this;return G.map(function(e){return Object(T["a"])({},e,{sidc:"10"+t.contextValue+t.sidValue+t.symbolSetValue+e.value+"0000000000000"})})},hqTfDummy:function(){var t=this;return U.map(function(e){return Object(T["a"])({},e,{sidc:"10"+t.contextValue+t.sidValue+t.symbolSetValue+"0"+e.value+"000000000000"})})},emtValues:function(){var t,e=this;switch(this.symbolSetValue){case F:t=J;break;case N:t=R;break;case H:t=W;break;case B:case L:t=Z;break;default:t=[{value:"00",text:"Unspecified"}]}return t.map(function(t){return Object(T["a"])({},t,{sidc:"10"+e.contextValue+e.sidValue+e.symbolSetValue+"00"+t.value+"0000000000"})})},icons:function(){var t=this,e=this.symbolSet;return e.map(function(e){var i=e.entity;return e["entity type"]&&(i+=" - "+e["entity type"]),e["entity subtype"]&&(i+=" - "+e["entity subtype"]),{value:e.code,text:i,sidc:"10"+t.contextValue+t.sidValue+t.symbolSetValue+"0000"+e.code+"0000"}})},modifierOne:function(){var t=this,e=M["a"][this.symbolSetValue]["modifier 1"]||[];return e.map(function(e){return{value:e.code,text:e.modifier,sidc:"10"+t.contextValue+t.sidValue+t.symbolSetValue+"0000000000"+e.code+"00"}})},modifierTwo:function(){var t=this,e=M["a"][this.symbolSetValue]["modifier 2"]||[];return e.map(function(e){return{value:e.code,text:e.modifier,sidc:"10"+t.contextValue+t.sidValue+t.symbolSetValue+"000000000000"+e.code}})},sidc:{get:function(){if(this.myValue){var t=new P(this.myValue);return t.context=this.contextValue,t.standardIdentity=this.sidValue,t.symbolSet=this.symbolSetValue,t.status=this.statusValue,t.hqtfd=this.hqTfDummyValue,t.amplifier=this.emtValue[0],t.amplifierDescriptor=this.emtValue[1],t.entity=this.iconValue.substr(0,2),t.entityType=this.iconValue.substr(2,2),t.entitySubType=this.iconValue.substr(4,2),t.modifierOne=this.mod1,t.modifierTwo=this.mod2,t.toString()}},set:function(t){this.myValue=t;var e=new P(t);this.contextValue=e.context,this.sidValue=e.standardIdentity,this.symbolSetValue=e.symbolSet,this.statusValue=e.status,this.hqTfDummyValue=e.hqtfd,this.emtValue=e.amplifier+e.amplifierDescriptor,this.iconValue=e.entity+e.entityType+e.entitySubType,this.mod1=e.modifierOne,this.mod2=e.modifierTwo}}},methods:{}},Q=K,X=(i("pbEi"),Object(d["a"])(Q,w,g,!1,null,"d16536f6",null)),Y=X.exports,tt={name:"SymbolPicker",components:{MilSymbol:k,SidcPicker:Y},data:function(){return{}},props:{msg:String},computed:{autocomplete:function(){return this.$store.state.autocomplete},simpleStatusModifier:function(){return this.$store.state.simpleStatusModifier},sidc:{get:function(){return this.$store.state.sidc},set:function(t){this.$store.commit("setSidc",t)}},binding:function(){var t={};return this.$vuetify.breakpoint.smAndDown&&(t.column=!0),t}}},et=tt,it=(i("JqrO"),Object(d["a"])(et,h,y,!1,null,"e41eb19c",null)),at=it.exports,st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{"max-height":"100vh",overflow:"auto"},attrs:{fluid:"","px-4":""}},[i("v-layout",{attrs:{"align-center":""}},[i("v-flex",[i("h1",{staticClass:"display-4"},[t._v("SIDC picker")]),t._v(" "),i("v-divider",{staticClass:"my-3"}),t._v(" "),i("h2",[t._v("About")]),t._v(" "),i("h2",[t._v("Licensing and copyright")]),t._v(" "),i("p"),t._v(" "),i("h2",[t._v("Technical details")]),t._v(" "),i("p",[t._v("Some of the tools, frameworks and libraries used:")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/spatialillusions/milsymbol"}},[t._v("milsymbol")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/spatialillusions/milstd"}},[t._v("milstd")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://vuetifyjs.com/en/"}},[t._v("Vuetify")])])])],1)],1)],1)},lt=[],ot={},ut=Object(d["a"])(ot,st,lt,!1,null,null,null),nt=ut.exports;a["a"].use(f["a"]);var rt=new f["a"]({routes:[{path:"/",name:"home",component:at},{path:"/about",name:"about",component:nt}]}),ct=i("L2JU");a["a"].use(ct["a"]);var mt=new ct["a"].Store({state:{autocomplete:!0,simpleStatusModifier:!1,sidc:"10031000001211000000"},mutations:{setAutocomplete:function(t,e){t.autocomplete=e},setSimpleStatusModifier:function(t,e){t.simpleStatusModifier=e},setSidc:function(t,e){t.sidc=e}},actions:{}});i("v0CA");a["a"].use(l.a),a["a"].config.productionTip=!1,o["setStandard"]("APP6"),new a["a"]({router:rt,store:mt,render:function(t){return t(p)}}).$mount("#app")},ZL7j:function(t,e,i){"use strict";var a=i("00LD"),s=i.n(a);s.a},"cP/q":function(t,e,i){},pbEi:function(t,e,i){"use strict";var a=i("s565"),s=i.n(a);s.a},s565:function(t,e,i){},yEa6:function(t,e,i){"use strict";var a=i("cP/q"),s=i.n(a);s.a}});
//# sourceMappingURL=app.2e91e54e.js.map