(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85f3eaf2"],{"33e5":function(t,e,s){"use strict";var n=s("db31"),o=s.n(n);o.a},"36ca":function(t,e,s){},"58ee":function(t,e,s){"use strict";var n=s("88ea"),o=s.n(n);o.a},"785b":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"bgPic",staticClass:"msg-container"},[s("div",{staticClass:"top",on:{click:t.toTop}},[s("i",{staticClass:"el-icon-arrow-up"})]),s("div",{staticClass:"show-all-msg"},[s("i",{staticClass:"el-icon-arrow-left",on:{click:function(e){t.shouldShowAllMsg=!t.shouldShowAllMsg}}})]),s("div",{staticClass:"list"},[s("transition-group",[s("msg-list",{directives:[{name:"show",rawName:"v-show",value:!t.shouldShowAllMsg,expression:"!shouldShowAllMsg"}],key:1,attrs:{ownerId:t.ownerId,roomId:t.roomId}}),s("comment-list",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowAllMsg,expression:"shouldShowAllMsg"}],key:2,attrs:{roomId:t.roomId}})],1)],1)])},o=[],r=s("f499"),i=s.n(r),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"msg-list"},[s("transition-group",{attrs:{tag:"div"}},t._l(t.msgList,function(e){return s("div",{key:e.msgTime,staticClass:"msg-item my-card"},[s("p",{staticClass:"msg-time",domProps:{innerHTML:t._s(new Date(parseInt(e.msgTime)).toLocaleDateString())}}),s("p",{staticClass:"msg-sender"},[s("img",{staticClass:"sender-avatar",attrs:{src:t._f("picPathFormat")(JSON.parse(e.extInfo).user.avatar),alt:""}}),s("span",{staticClass:"sender-name",domProps:{innerHTML:t._s(JSON.parse(e.extInfo).user.nickName)},on:{click:function(s){t.getMemberDetail(JSON.parse(e.extInfo).user.nickName)}}})]),"IMAGE"===e.msgType?s("p",{staticClass:"msg-content"},[s("img",{staticClass:"msg-img",attrs:{src:JSON.parse(e.bodys).url,alt:""}})]):"EXPRESS"===e.msgType?s("p",{staticClass:"msg-content"},[s("span",{domProps:{innerHTML:t._s(JSON.parse(e.extInfo).emotionName)}})]):"偶像翻牌"===e.bodys?s("p",{staticClass:"msg-content"},[s("span",{domProps:{innerHTML:t._s(JSON.parse(e.extInfo).answer)}}),s("br"),s("span",{staticClass:"fanpai",domProps:{innerHTML:t._s(JSON.parse(e.extInfo).question)}})]):JSON.parse(e.extInfo).replyName?s("p",{staticClass:"msg-content"},[s("span",{domProps:{innerHTML:t._s(JSON.parse(e.extInfo).text)}}),s("br"),s("span",{staticClass:"fanpai",domProps:{innerHTML:t._s(JSON.parse(e.extInfo).replyText)}})]):JSON.parse(e.extInfo).liveCover?s("p",{staticClass:"msg-content"},[s("span",{staticStyle:{cursor:"pointer",color:"blue"},domProps:{innerHTML:t._s("直播："+JSON.parse(e.extInfo).liveTitle)},on:{click:function(s){t.getLivePage(JSON.parse(e.extInfo).liveId)}}}),s("br")]):"AUDIO"===e.msgType?s("p",{staticClass:"msg-content",on:{click:t.stop}},[s("el-button",{on:{click:function(s){t.getAudio(JSON.parse(e.bodys).url)}}},[t._v("\n          语音消息 "+t._s(JSON.parse(e.bodys).dur/1e3)+"s\n        ")])],1):"VIDEO"===e.msgType?s("p",{staticClass:"msg-content"},[s("video",{staticClass:"msg-video",attrs:{controls:"",src:JSON.parse(e.bodys).url,alt:""}})]):"TEXT"===e.msgType?s("p",{staticClass:"msg-content",domProps:{innerHTML:t._s(JSON.parse(e.extInfo).text)}}):t._e()])}),0),s("div",{staticClass:"button",on:{click:t.getMore}},[s("i",{directives:[{name:"show",rawName:"v-show",value:t.msgList[0],expression:"msgList[0]"}],staticClass:"el-icon-arrow-down"})])],1)},c=[],u=(s("28a5"),s("6762"),s("2fdb"),s("96cf"),s("3b8d")),m={name:"msgList",data:function(){return{nextTime:0,base64Str:"",answerContent:{},msgList:[]}},props:["ownerId","roomId"],methods:{getMsgList:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ajax("/getRoomBoard",{token:this.$store.getters.getToken,ownerId:this.ownerId,roomId:this.roomId},"POST");case 2:e=t.sent,this.msgList=e.content.message,this.nextTime=e.content.nextTime;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getMore:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ajax("getRoomBoard",{token:this.$store.getters.getToken,ownerId:this.ownerId,roomId:this.roomId,nextTime:this.nextTime},"POST");case 2:e=t.sent,this.msgList=this.msgList.concat(e.content.message),this.nextTime=e.content.nextTime,this.$store.commit("saveScrollTop");case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getAnswer:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e,s,n){var o,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=this.$createElement,t.next=3,this.ajax("/getAnswer",{questionId:e,answerId:s,token:this.$store.getters.getToken},"POST");case 3:r=t.sent,this.answerContent=r.content,this.$msgbox({title:n,message:o("div",null,[o("p",null,this.answerContent.answer),o("p",{style:"color: #ccc"},this.answerContent.question)]),confirmButtonText:"确定"});case 6:case"end":return t.stop()}},t,this)}));function e(e,s,n){return t.apply(this,arguments)}return e}(),getAudio:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ajax("getAudio",{url:e},"POST");case 2:s=t.sent,200===s.status&&(RongIMLib.RongIMVoice.init(),this.base64Str=s.message,RongIMLib.RongIMVoice.stop(),RongIMLib.RongIMVoice.play(this.base64Str));case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),stop:function(){RongIMLib.RongIMVoice.init(),RongIMLib.RongIMVoice.stop()},getLivePage:function(t){this.$router.push({name:"livepage",params:{id:t,type:1}})},getMemberDetail:function(t){var e=[];e=t.includes("-")?t.split("-"):[t],this.$router.push({name:"memberlist",params:{group:"1",memberName:e[e.length-1]}})}},created:function(){this.getMsgList()}},l=m,p=(s("7ccb"),s("2877")),g=Object(p["a"])(l,a,c,!1,null,"1b03bdfa",null),d=g.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"board",staticClass:"board-list"},[s("transition-group",{attrs:{tag:"div"}},t._l(t.commentList,function(e){return s("div",{key:e.msgidClient,staticClass:"board-item my-card",class:{isSpec:655632===JSON.parse(e.extInfo).user.userId}},[s("div",{staticClass:"sender-info"},[s("img",{staticClass:"sender-img",attrs:{src:t._f("picPathFormat")(JSON.parse(e.extInfo).user.avatar),alt:""}}),s("p",{staticClass:"board-name",domProps:{innerHTML:t._s(JSON.parse(e.extInfo).user.nickName)},on:{click:function(s){t.getUserInfo(JSON.parse(e.extInfo))}}})]),s("p",{staticClass:"board-content",domProps:{innerHTML:t._s(JSON.parse(e.extInfo).text)}})])}),0),t.showInfo?s("div",{on:{click:function(e){t.showInfo=!t.showInfo}}},[s("popup-info",{attrs:{info:t.userInfo}})],1):t._e(),s("div",{staticClass:"button",on:{click:t.getMore}},[s("i",{directives:[{name:"show",rawName:"v-show",value:t.commentList[0],expression:"commentList[0]"}],staticClass:"el-icon-arrow-down"})])],1)},f=[],v=s("8050"),w={name:"commentList",data:function(){return{nextTime:0,commentList:[],showInfo:!1,userInfo:0,topData:{}}},props:["roomId"],methods:{getComments:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ajax("/getComments",{id:this.roomId,token:this.$store.getters.getToken},"POST");case 2:e=t.sent,this.commentList=e.content.message,this.nextTime=e.content.nextTime;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getMore:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ajax("/getComments",{id:this.id,token:this.$store.getters.getToken,nextTime:this.nextTime},"POST");case 2:e=t.sent,this.commentList=this.commentList.concat(e.content.message);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getUserInfo:function(t){this.userInfo=t,this.showInfo=!0}},created:function(){this.getComments()},components:{popupInfo:v["a"]}},I=w,b=(s("58ee"),Object(p["a"])(I,h,f,!1,null,"031dfe8e",null)),x=b.exports,T={name:"roommsg",data:function(){return{ownerId:this.$route.params.ownerId,roomId:this.$route.params.roomId,bgPath:this.$route.params.bgPath||JSON.parse(localStorage.getItem("bgPath")),top:document.body.scrollTop,shouldShowAllMsg:!1}},methods:{toTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},mounted:function(){localStorage.setItem("bgPath",i()(this.bgPath)),this.bgPath="http://source.48.cn"+this.bgPath,this.$refs.bgPic.style.background="url("+this.bgPath+")",this.$refs.bgPic.style.backgroundPosition="center center",this.$refs.bgPic.style.backgroundAttachment="fixed"},watch:{top:function(){this.top=document.body.scrollTop}},components:{msgList:d,commentList:x}},C=T,S=(s("9e7d"),Object(p["a"])(C,n,o,!1,null,"f6756a72",null));e["default"]=S.exports},"7ccb":function(t,e,s){"use strict";var n=s("c4e3"),o=s.n(n);o.a},8050:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-info"},[t.info.user.avatar?s("div",{staticClass:"popup-info"},[s("p",{staticStyle:{color:"white"}},[t._v("·")]),s("img",{staticClass:"juju-avatar",attrs:{src:t._f("picPathFormat")(t.info.user.avatar),alt:""},on:{click:t.goToUserInfo}}),s("p",{staticClass:"name"},[t._v("\n      "+t._s(t.info.user.nickName)+"\n      "),s("el-tag",{attrs:{size:"mini"}},[t._v(t._s("lv."+t.info.user.level))])],1)]):t._e()])},o=[],r={props:["id","info"],methods:{goToUserInfo:function(){this.$router.push({name:"userinfo",params:{id:this.info.user.userId}})}}},i=r,a=(s("33e5"),s("2877")),c=Object(a["a"])(i,n,o,!1,null,"76e71436",null);e["a"]=c.exports},"88ea":function(t,e,s){},"9e7d":function(t,e,s){"use strict";var n=s("36ca"),o=s.n(n);o.a},c4e3:function(t,e,s){},db31:function(t,e,s){}}]);
//# sourceMappingURL=chunk-85f3eaf2.f0ef23e5.js.map