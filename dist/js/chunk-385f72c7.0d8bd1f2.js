(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-385f72c7"],{"1d61":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},s=[function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"alt_bg"},[a("img",{staticClass:"alt-img",attrs:{src:e("12ae"),alt:""}})])}],r={},i=r,o=(e("8f72"),e("2877")),u=Object(o["a"])(i,a,s,!1,null,"51226226",null);t["a"]=u.exports},"5c9d":function(n,t,e){},"8de7":function(n,t,e){"use strict";var a=e("5c9d"),s=e.n(a);s.a},"8f72":function(n,t,e){"use strict";var a=e("c1a4"),s=e.n(a);s.a},c1a4:function(n,t,e){},d3a1:function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"user-info my-card"},[n.jujuInfo.info.avatar?e("div",{staticClass:"base-info"},[e("p",{staticClass:"avatar"},[e("img",{attrs:{src:n._f("picPathFormat")(n.jujuInfo.info.avatar),alt:""}})]),e("div",[e("p",{staticClass:"name"},[n._v("\n        "+n._s(n.jujuInfo.info.nickname)+"\n        "),e("el-tag",{attrs:{size:"mini"},domProps:{innerHTML:n._s("lv."+n.jujuInfo.info.level)}})],1),e("span",{domProps:{innerHTML:n._s("ID："+n.jujuInfo.info.userId)}}),e("span",{staticStyle:{"margin-left":"10px"},domProps:{innerHTML:n._s("关注："+n.jujuInfo.friendsNum)}})])]):e("alt-loading")],1)},s=[],r=(e("96cf"),e("3b8d")),i=e("1d61"),o={name:"userInfo",data:function(){return{id:this.$route.params.id,jujuInfo:{info:{},friendsNum:0,recommend:{}}}},components:{altLoading:i["a"]},methods:{getJuJuInfo:function(){var n=Object(r["a"])(regeneratorRuntime.mark(function n(){var t,e,a;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.ajax("/getUserInfo",{userId:this.id,token:this.$store.getters.getToken},"POST");case 2:t=n.sent,e=t.content.baseUserInfo,a=t.content.baseUserInfo.friends,this.jujuInfo={info:e,recommend:{},friendsNum:a};case 6:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}()},mounted:function(){this.getJuJuInfo()}},u=o,c=(e("8de7"),e("2877")),f=Object(c["a"])(u,a,s,!1,null,"bb663f16",null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-385f72c7.0d8bd1f2.js.map