(function(e){function t(t){for(var a,n,u=t[0],r=t[1],o=t[2],m=0,d=[];m<u.length;m++)n=u[m],s[n]&&d.push(s[n][0]),s[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);c&&c(t);while(d.length)d.shift()();return l.push.apply(l,o||[]),i()}function i(){for(var e,t=0;t<l.length;t++){for(var i=l[t],a=!0,u=1;u<i.length;u++){var r=i[u];0!==s[r]&&(a=!1)}a&&(l.splice(t--,1),e=n(n.s=i[0]))}return e}var a={},s={1:0},l=[];function n(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=a,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],r=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var c=r;l.push([4,0]),i()})({"/Yl2":function(e,t,i){},"00LD":function(e,t,i){},4:function(e,t,i){e.exports=i("Vtdi")},NBlO:function(e,t,i){},Vtdi:function(e,t,i){"use strict";i.r(t);i("VRzm");var a=i("Kw5r"),s=i("zlta"),l=i.n(s),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",{attrs:{id:"app"}},[i("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),e._v(" "),i("v-toolbar",{attrs:{dense:"",fixed:"",app:""}},[i("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),i("v-toolbar-title",[e._v("SIDC picker")])],1),e._v(" "),i("v-content",[i("v-container",[i("v-layout",[i("v-flex",[i("router-view")],1)],1)],1)],1)],1)},u=[],r={data:function(){return{drawer:null}}},o=r,c=(i("ZL7j"),i("KHd+")),m=Object(c["a"])(o,n,u,!1,null,null,null),d=m.exports,v=i("jE9Z"),p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("sidc-picker",{model:{value:e.sidc,callback:function(t){e.sidc=t},expression:"sidc"}})},f=[],h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div")},y=[],b=i("1h/u"),x=i.n(b),V={name:"MilSymbol",props:{sidc:String,size:{type:Number,default:15},modifiers:{type:Object}},mounted:function(){this.setSymbol()},methods:{setSymbol:function(){var e=new x.a.Symbol(this.sidc,{size:this.size,simpleStatusModifier:!0},this.modifiers||{});this.$el.innerHTML=e.asSVG()}},watch:{sidc:function(e){this.setSymbol()},size:function(e){this.setSymbol()}},render:function(e){return e("span",{attrs:{class:"milsymbol"}})}},S=V,_=Object(c["a"])(S,h,y,!1,null,null,null),k=_.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-text-field",{attrs:{label:e.label,mask:"##-##-##-#-#-##-##-##-##-##-##",hint:e.hint,required:e.required,"append-icon":"more_horiz","append-icon-cb":function(){e.isOpen=!0},editable:"",rules:e.rules},model:{value:e.myValue,callback:function(t){e.myValue=t},expression:"myValue"}}),e._v(" "),i("v-card",[i("v-toolbar",{attrs:{flat:"",color:"transparent"}},[i("v-toolbar-title",{staticClass:"title"},[i("span",[i("strong",[e._v("SIDC")]),e._v(" "+e._s(e.csidc))])]),e._v(" "),i("v-spacer"),e._v(" "),i("v-btn",{attrs:{icon:""},on:{click:e.close}},[i("v-icon",[e._v("close")])],1)],1),e._v(" "),i("v-card-text",[i("v-layout",[i("v-flex",[i("sidc-picker-select",{attrs:{items:e.symbolSets,label:"Symbol set"},model:{value:e.symbolSetValue,callback:function(t){e.symbolSetValue=t},expression:"symbolSetValue"}}),e._v(" "),i("sidc-picker-select",{attrs:{items:e.statusValues,label:"Status"},model:{value:e.statusValue,callback:function(t){e.statusValue=t},expression:"statusValue"}}),e._v(" "),i("sidc-picker-select",{attrs:{items:e.hqTfDummy,label:"Headquarters/Task force/Dummy",autocomplete:""},model:{value:e.hqTfDummyValue,callback:function(t){e.hqTfDummyValue=t},expression:"hqTfDummyValue"}}),e._v(" "),i("sidc-picker-select",{attrs:{items:e.emtValues,label:"Echelon/Mobility/Towed array",autocomplete:""},model:{value:e.emtValue,callback:function(t){e.emtValue=t},expression:"emtValue"}}),e._v(" "),i("sidc-picker-select",{attrs:{items:e.icons,label:"Main icon",autocomplete:""},model:{value:e.iconValue,callback:function(t){e.iconValue=t},expression:"iconValue"}}),e._v(" "),i("sidc-picker-select",{attrs:{items:e.modifierOne,label:"Modifier 1",autocomplete:""},model:{value:e.mod1,callback:function(t){e.mod1=t},expression:"mod1"}}),e._v(" "),i("sidc-picker-select",{attrs:{items:e.modifierTwo,label:"Modifier 2",autocomplete:""},model:{value:e.mod2,callback:function(t){e.mod2=t},expression:"mod2"}})],1),e._v(" "),i("v-flex",{attrs:{xs3:"","text-xs-center":""}},[i("mil-symbol",{staticClass:"pl-3",attrs:{sidc:e.csidc,size:50}})],1)],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"primary",type:"submit"},on:{click:e.submit}},[e._v("Save")]),e._v(" "),i("v-btn",{on:{click:e.reset}},[e._v("Reset")])],1)],1)],1)},T=[],g=i("yT7P"),O=(i("Vd3H"),i("f3/d"),i("v5iE")),D=i("xmWZ"),q=i("qpph"),j=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"10000000000000000000";Object(D["a"])(this,e),this.sic=t,this.version=t.substr(0,2),this.context=t.substr(2,1),this.standardIdentity=t.substr(3,1),this.symbolSet=t.substr(4,2),this.status=t.substr(6,1),this.hqtfd=t.substr(7,1),this.amplifier=t.substr(8,1),this.amplifierDescriptor=t.substr(9,1),this.entity=t.substr(10,2),this.entityType=t.substr(12,2),this.entitySubType=t.substr(14,2),this.modifierOne=t.substr(16,2),this.modifierTwo=t.substr(18,2)}return Object(q["a"])(e,[{key:"toString",value:function(){return this.version+this.context+this.standardIdentity+this.symbolSet+this.status+this.hqtfd+this.amplifier+this.amplifierDescriptor+this.entity+this.entityType+this.entitySubType+this.modifierOne+this.modifierTwo}}]),e}(),P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-select",{attrs:{items:e.items,label:e.label,autocomplete:""},scopedSlots:e._u([{key:"item",fn:function(t){return[i("v-list-tile-avatar",[i("mil-symbol",{attrs:{size:20,sidc:t.item.sidc}})],1),e._v(" "),i("v-list-tile-content",{domProps:{textContent:e._s(t.item.text)}})]}}]),model:{value:e.myValue,callback:function(t){e.myValue=t},expression:"myValue"}})},F=[],C={name:"SidcPickerSelect",components:{MilSymbol:k},props:{items:{type:Array,required:!0},label:String,value:String},data:function(){return{myValue:null}},created:function(){this.myValue=this.value},watch:{myValue:function(e){this.$emit("input",e)},value:function(e){this.myValue=e}}},M=C,$=(i("eCrN"),Object(c["a"])(M,P,F,!1,null,"f219fc40",null)),E=$.exports,z="10",H="27",A="30",L="35",N=[{value:"0",text:"Not Applicable"},{value:"1",text:"Feint/Dummy"},{value:"2",text:"Headquarters"},{value:"3",text:"Feint/Dummy Headquarters"},{value:"4",text:"Task Force"},{value:"5",text:"Feint/Dummy Task Force"},{value:"6",text:"Task Force Headquarters"},{value:"7",text:"Feint/Dummy Task Force Headquarters"}],B=[{value:"0",text:"Present"},{value:"1",text:"Planned/Anticipated/Suspect"},{value:"2",text:"Present/Fully capable"},{value:"3",text:"Present/Damaged"},{value:"4",text:"Present/Destroyed"},{value:"5",text:"Present/Full to capacity"}],I=[{value:"00",text:"Unspecified"},{value:"11",text:"Team/Crew"},{value:"12",text:"Squad"},{value:"13",text:"Section"},{value:"14",text:"Platoon/Detachment"},{value:"15",text:"Company/Battery/Troop"},{value:"16",text:"Battalion/Squadron"},{value:"17",text:"Regiment/Group"},{value:"18",text:"Brigade"},{value:"21",text:"Division"},{value:"22",text:"Corps/MEF"},{value:"23",text:"Army"},{value:"24",text:"Army Group/Front"},{value:"25",text:"Region/Theater"},{value:"26",text:"Command"}],U="15",R=[{value:"00",text:"Unspecified"},{value:"31",text:"Wheeled limited cross country"},{value:"32",text:"Wheeled cross country"},{value:"33",text:"Tracked"},{value:"34",text:"Wheeled and tracked combination"},{value:"35",text:"Towed"},{value:"36",text:"Railway"},{value:"37",text:"Pack animals"},{value:"41",text:"Over snow (prime mover)"},{value:"42",text:"Sled"},{value:"51",text:"Barge"},{value:"52",text:"Amphibious"}],W=[{value:"00",text:"Unspecified"},{value:"71",text:"Leader"}],Z=[{value:"00",text:"Unspecified"},{value:"61",text:"Short towed array"},{value:"62",text:"Long towed array"}],G=a["a"].extend({name:"SidcPicker",components:{MilSymbol:k,SidcPickerSelect:E},props:{value:String,required:{type:Boolean,default:!1},label:{type:String,default:"SIDC"},hint:{type:String,default:"Symbol identification code"},rules:{type:Array}},data:function(){return{myValue:null,isOpen:!1,sidValue:null,symbolSetValue:null,statusValue:null,hqTfDummyValue:null,emtValue:null,iconValue:null,mod1:null,mod2:null}},created:function(){this.myValue=this.value,this.oldValue=this.value,this.updateFromSidc(this.value)},watch:{myValue:function(e){this.$emit("input",e)},isOpen:function(e){e&&(this.oldValue=this.value,this.myValue=this.value,this.updateFromSidc(this.value))},value:function(e){this.myValue=e}},computed:{symbolSets:function(){var e=[];for(var t in O["a"])e.push({value:t,text:O["a"][t].name,sidc:"100"+this.sidValue+t+"00000000000000"});return e.sort(function(e,t){return e.value-t.value}),e},symbolSet:function(){return O["a"][this.symbolSetValue]["main icon"]||[]},statusValues:function(){var e=this;return B.map(function(t){return Object(g["a"])({},t,{sidc:"100"+e.sidValue+e.symbolSetValue+t.value+"0000000000000"})})},hqTfDummy:function(){var e=this;return N.map(function(t){return Object(g["a"])({},t,{sidc:"100"+e.sidValue+e.symbolSetValue+"0"+t.value+"000000000000"})})},emtValues:function(){var e,t=this;switch(this.symbolSetValue){case z:e=I;break;case U:e=R;break;case H:e=W;break;case A:case L:e=Z;break;default:e=[{value:"00",text:"Unspecified"}]}return e.map(function(e){return Object(g["a"])({},e,{sidc:"100"+t.sidValue+t.symbolSetValue+"00"+e.value+"0000000000"})})},icons:function(){var e=this,t=this.symbolSet;return t.map(function(t){var i=t.entity;return t["entity type"]&&(i+=" - "+t["entity type"]),t["entity subtype"]&&(i+=" - "+t["entity subtype"]),{value:t.code,text:i,sidc:"100"+e.sidValue+e.symbolSetValue+"0000"+t.code+"0000"}})},modifierOne:function(){var e=this,t=O["a"][this.symbolSetValue]["modifier 1"]||[];return t.map(function(t){return{value:t.code,text:t.modifier,sidc:"100"+e.sidValue+e.symbolSetValue+"0000000000"+t.code+"00"}})},modifierTwo:function(){var e=this,t=O["a"][this.symbolSetValue]["modifier 2"]||[];return t.map(function(t){return{value:t.code,text:t.modifier,sidc:"100"+e.sidValue+e.symbolSetValue+"000000000000"+t.code}})},csidc:function(){return this.setSidc(),this.sidc.toString()}},methods:{close:function(){this.isOpen=!1},reset:function(){this.updateFromSidc(this.oldValue)},updateFromSidc:function(e){var t=new j(e);this.sidc=t,this.sidValue=t.standardIdentity,this.symbolSetValue=t.symbolSet,this.statusValue=t.status,this.hqTfDummyValue=t.hqtfd,this.emtValue=t.amplifier+t.amplifierDescriptor,this.iconValue=t.entity+t.entityType+t.entitySubType,this.mod1=t.modifierOne,this.mod2=t.modifierTwo},setSidc:function(){var e=this.sidc;e.symbolSet=this.symbolSetValue,e.status=this.statusValue,e.hqtfd=this.hqTfDummyValue,e.amplifier=this.emtValue[0],e.amplifierDescriptor=this.emtValue[1],e.entity=this.iconValue.substr(0,2),e.entityType=this.iconValue.substr(2,2),e.entitySubType=this.iconValue.substr(4,2),e.modifierOne=this.mod1,e.modifierTwo=this.mod2},submit:function(){this.setSidc(),this.$emit("input",this.sidc.toString()),this.isOpen=!1}}}),J=G,K=(i("wngN"),Object(c["a"])(J,w,T,!1,null,"1b1cce64",null)),Y=K.exports,Q={name:"HelloWorld",components:{MilSymbol:k,SidcPicker:Y},data:function(){return{sidc:"10031004001211000000"}},props:{msg:String}},X=Q,ee=Object(c["a"])(X,p,f,!1,null,null,null),te=ee.exports,ie=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ae=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"about"},[i("h1",[e._v("This is an about page")])])}],se={},le=Object(c["a"])(se,ie,ae,!1,null,null,null),ne=le.exports;a["a"].use(v["a"]);var ue=new v["a"]({routes:[{path:"/",name:"home",component:te},{path:"/about",name:"about",component:ne}]}),re=i("L2JU");a["a"].use(re["a"]);var oe=new re["a"].Store({state:{},mutations:{},actions:{}});i("v0CA");a["a"].use(l.a),a["a"].config.productionTip=!1,new a["a"]({router:ue,store:oe,render:function(e){return e(d)}}).$mount("#app")},ZL7j:function(e,t,i){"use strict";var a=i("00LD"),s=i.n(a);s.a},eCrN:function(e,t,i){"use strict";var a=i("/Yl2"),s=i.n(a);s.a},wngN:function(e,t,i){"use strict";var a=i("NBlO"),s=i.n(a);s.a}});
//# sourceMappingURL=app.eef3d361.js.map