(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36fd444c"],{"543b":function(t,e,s){},"68ff":function(t,e,s){"use strict";var n=s("ba61"),i=s.n(n);i.a},"785b":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"bgPic",staticClass:"msg-container"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.scrollTop,expression:"$store.state.scrollTop"}],staticClass:"top",on:{click:t.toTop}},[s("i",{staticClass:"el-icon-arrow-up"})]),s("div",{staticClass:"list"},[s("msg-list",{attrs:{id:t.id}}),s("comment-list",{attrs:{id:t.id}})],1)])},i=[],a=s("f499"),o=s.n(a),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"msg-list"},[s("transition-group",{attrs:{tag:"div"}},t._l(t.msgList,function(e){return s("div",{key:e.msgTime,staticClass:"msg-item my-card"},[s("p",{staticClass:"msg-time",domProps:{innerHTML:t._s(e.msgTimeStr)}}),s("p",{staticClass:"msg-sender"},[s("img",{staticClass:"sender-avatar",attrs:{src:t._f("picPathFormat")(e.extInfo.senderAvatar),alt:""}}),s("span",{staticClass:"sender-name",domProps:{innerHTML:t._s(e.extInfo.senderName)},on:{click:function(s){return t.getMemberDetail(e.extInfo.senderName)}}})]),s("p",{directives:[{name:"show",rawName:"v-show",value:e.extInfo.faipaiContent,expression:"item.extInfo.faipaiContent"}],staticClass:"fanpai",domProps:{innerHTML:t._s(e.extInfo.faipaiContent)}}),e.bodys.includes("jpg")?s("p",{staticClass:"msg-content"},[s("img",{staticClass:"msg-img",attrs:{src:JSON.parse(e.bodys).url,alt:""}})]):e.bodys.includes("amr")?s("p",{staticClass:"msg-content",on:{click:t.stop}},[s("el-button",{on:{click:function(s){t.getAudio(JSON.parse(e.bodys).url)}}},[t._v("\n          语音消息 "+t._s(JSON.parse(e.bodys).dur/1e3)+"s\n        ")])],1):e.bodys.includes("mp4")?s("p",{staticClass:"msg-content"},[s("video",{staticClass:"msg-video",attrs:{controls:"",src:JSON.parse(e.bodys).url,alt:""}})]):e.extInfo.referenceTitle?s("p",{staticClass:"msg-content"},[s("span",{staticClass:"live-push",domProps:{innerHTML:t._s(e.extInfo.referenceTitle)},on:{click:function(s){return t.getLivePage(e.extInfo.referenceObjectId)}}})]):e.extInfo.idolFlipTitle?s("p",{staticClass:"msg-content"},[s("span",{staticClass:"msg-flip",domProps:{innerHTML:t._s(e.extInfo.idolFlipTitle)},on:{click:function(s){return t.getAnswer(e.extInfo.idolFlipQuestionId,e.extInfo.idolFlipAnswerId,e.extInfo.idolFlipTitle)}}})]):s("p",{staticClass:"msg-content",domProps:{innerHTML:t._s(e.extInfo.text||e.extInfo.messageText)}})])}),0),s("div",{staticClass:"button",on:{click:t.getMore}},[s("i",{directives:[{name:"show",rawName:"v-show",value:t.msgList[0],expression:"msgList[0]"}],staticClass:"el-icon-arrow-down"})])],1)},c=[],u=(s("ac6a"),s("28a5"),s("6762"),s("2fdb"),s("96cf"),s("3b8d")),l={name:"msgList",data:function(){return{limit:10,base64Str:"",answerContent:{},msgList:[]}},props:["id"],methods:{getMsgList:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ajax("/getRoomBoard",{token:this.$store.getters.getToken,id:this.id},"POST");case 2:e=t.sent,this.msgList=e.content.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getMore:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.limit+=10,t.next=3,this.ajax("getRoomBoard",{token:this.$store.getters.getToken,id:this.id,limit:this.limit},"POST");case 3:e=t.sent,this.msgList=e.content.data,this.$store.commit("saveScrollTop");case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getAnswer:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e,s,n){var i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=this.$createElement,t.next=3,this.ajax("/getAnswer",{questionId:e,answerId:s,token:this.$store.getters.getToken},"POST");case 3:a=t.sent,this.answerContent=a.content,this.$msgbox({title:n,message:i("div",null,[i("p",null,this.answerContent.answer),i("p",{style:"color: #ccc"},this.answerContent.question)]),confirmButtonText:"确定"});case 6:case"end":return t.stop()}},t,this)}));function e(e,s,n){return t.apply(this,arguments)}return e}(),getAudio:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ajax("getAudio",{url:e},"POST");case 2:s=t.sent,200===s.status&&(RongIMLib.RongIMVoice.init(),this.base64Str=s.message,RongIMLib.RongIMVoice.stop(),RongIMLib.RongIMVoice.play(this.base64Str));case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),stop:function(){RongIMLib.RongIMVoice.init(),RongIMLib.RongIMVoice.stop()},getLivePage:function(t){this.$router.push({name:"livepage",params:{id:t,type:1}})},getMemberDetail:function(t){var e=[];e=t.includes("-")?t.split("-"):[t],this.$router.push({name:"memberlist",params:{group:"1",memberName:e[e.length-1]}})}},created:function(){this.getMsgList()},watch:{msgList:function(){var t=this;this.msgList.forEach(function(e){e.extInfo=JSON.parse(e.extInfo),e.bodys.includes("amr")&&(t.amr=JSON.parse(e.bodys))})}}},m=l,d=(s("db1b"),s("2877")),f=Object(d["a"])(m,r,c,!1,null,"4a3df4d1",null),p=f.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"board",staticClass:"board-list"},[t.topData.senderName?s("div",{staticClass:"board-item my-card"},[s("div",{staticClass:"sender-info"},[s("img",{staticClass:"sender-img",attrs:{src:t._f("picPathFormat")(t.topData.senderAvatar),alt:""}}),s("p",{staticClass:"board-name",staticStyle:{display:"flex","justify-content":"space-between",width:"100%"},on:{click:function(e){return t.getUserInfo(t.topData)}}},[s("span",[t._v(t._s(t.topData.senderName))]),s("el-tag",{attrs:{size:"mini",type:"danger",color:"#eee"}},[t._v("本周TOP1")])],1)]),s("p",{staticClass:"board-content",domProps:{innerHTML:t._s(t.topData.text||t.topData.content+" "+t.topData.giftName)}})]):t._e(),s("transition-group",{attrs:{tag:"div"}},t._l(t.commentList,function(e){return s("div",{key:e.msgidClient,staticClass:"board-item my-card",class:{isSpec:655632===e.extInfo.senderId}},[s("div",{staticClass:"sender-info"},[s("img",{staticClass:"sender-img",attrs:{src:t._f("picPathFormat")(e.extInfo.senderAvatar),alt:""}}),s("p",{staticClass:"board-name",domProps:{innerHTML:t._s(e.extInfo.senderName)},on:{click:function(s){return t.getUserInfo(e.extInfo)}}})]),s("p",{staticClass:"board-content",domProps:{innerHTML:t._s(e.extInfo.text||e.extInfo.content+" "+e.extInfo.giftName)}})])}),0),t.showInfo?s("div",{on:{click:function(e){t.showInfo=!t.showInfo}}},[s("popup-info",{attrs:{info:t.userInfo}})],1):t._e(),s("div",{staticClass:"button",on:{click:t.getMore}},[s("i",{directives:[{name:"show",rawName:"v-show",value:t.commentList[0],expression:"commentList[0]"}],staticClass:"el-icon-arrow-down"})])],1)},h=[],v=(s("cadf"),s("551c"),s("f751"),s("097d"),s("8050")),b={name:"commentList",data:function(){return{limit:10,commentList:[],showInfo:!1,userInfo:0,topData:{}}},props:["id"],methods:{getComments:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ajax("/getComments",{id:this.id,token:this.$store.getters.getToken},"POST");case 2:e=t.sent,e.content.top1Data&&(this.topData=JSON.parse(e.content.top1Data.extInfo)),this.commentList=e.content.data;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getMore:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.limit+=10,t.next=3,this.ajax("/getComments",{id:this.id,token:this.$store.getters.getToken,limit:this.limit},"POST");case 3:e=t.sent,this.commentList=e.content.data;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getUserInfo:function(t){this.userInfo=t,this.showInfo=!0}},created:function(){this.getComments()},watch:{commentList:function(){this.commentList.forEach(function(t){t.extInfo=JSON.parse(t.extInfo)})}},components:{popupInfo:v["a"]}},w=b,x=(s("f2f3"),Object(d["a"])(w,g,h,!1,null,"1d704980",null)),I=x.exports,C={name:"roommsg",data:function(){return{id:this.$route.params.id,bgPath:this.$route.params.bgPath||JSON.parse(localStorage.getItem("bgPath")),top:document.body.scrollTop}},methods:{toTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},mounted:function(){localStorage.setItem("bgPath",o()(this.bgPath)),this.bgPath="http://source.48.cn"+this.bgPath,this.$refs.bgPic.style.background="url("+this.bgPath+")",this.$refs.bgPic.style.backgroundPosition="center center",this.$refs.bgPic.style.backgroundAttachment="fixed"},watch:{top:function(){this.top=document.body.scrollTop}},components:{msgList:p,commentList:I}},T=C,L=(s("baa3"),Object(d["a"])(T,n,i,!1,null,"1ec1d570",null));e["default"]=L.exports},8050:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-info"},[t.info.userAvatar||t.info.senderAvatar?s("div",{staticClass:"popup-info"},[s("p",{staticStyle:{color:"white"}},[t._v("·")]),s("img",{staticClass:"juju-avatar",attrs:{src:t._f("picPathFormat")(t.info.userAvatar||t.info.senderAvatar),alt:""},on:{click:t.goToUserInfo}}),s("p",{staticClass:"name"},[t._v("\n      "+t._s(t.info.userName||t.info.senderName)+"\n      "),s("el-tag",{attrs:{size:"mini"}},[t._v(t._s("lv."+(t.info.userLevel||t.info.senderLevel[2])))])],1)]):t._e()])},i=[],a={props:["id","info"],methods:{goToUserInfo:function(){this.$router.push({name:"userinfo",params:{id:this.info.userId||this.info.senderId}})}}},o=a,r=(s("68ff"),s("2877")),c=Object(r["a"])(o,n,i,!1,null,"7c36114e",null);e["a"]=c.exports},"9a68":function(t,e,s){},ba61:function(t,e,s){},baa3:function(t,e,s){"use strict";var n=s("543b"),i=s.n(n);i.a},db1b:function(t,e,s){"use strict";var n=s("9a68"),i=s.n(n);i.a},edca:function(t,e,s){},f2f3:function(t,e,s){"use strict";var n=s("edca"),i=s.n(n);i.a}}]);
//# sourceMappingURL=chunk-36fd444c.b77a92c0.js.map