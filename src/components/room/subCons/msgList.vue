<template>
  <div class="msg-list" :class="{'max-height':!msgList[0]}">
    <transition-group tag="div" v-if="msgList[0]">
      <div v-for="item in msgList" :key="item.msgTime" class="msg-item" @click.self="stop(JSON.parse(item.extInfo))">
        <div class="msg-sender">
          <img
            :src="JSON.parse(item.extInfo).user.avatar | picPathFormat"
            :title="JSON.parse(item.extInfo).user.nickName+'-查看更多信息'"
            @click="getMemberDetail(JSON.parse(item.extInfo).user.nickName)"
            class="sender-avatar"
          >
        </div>
        <div class="msg-content msg-img" v-if="item.msgType==='IMAGE'" 
          @click.self="showImage(JSON.parse(item.bodys).url)"
          :style="'background-image:url('+JSON.parse(item.bodys).url+');'">
        </div>
        <div class="msg-content bubble" v-else-if="item.msgType==='EXPRESS'">
          <span v-html="'emoji_'+JSON.parse(item.extInfo).emotionName"></span>
        </div>
        <div class="msg-content idol-reply" v-else-if="item.bodys==='偶像翻牌'">
          <span v-html="JSON.parse(item.extInfo).answer"></span>
          <span v-html="JSON.parse(item.extInfo).question" class="fanpai"></span>
          <div class="msg-time" style="color: #000;"
            v-html="item.bodys"
          ></div>
        </div>
        <div class="msg-content idol-reply" v-else-if="JSON.parse(item.extInfo).replyName">
          <span v-html="JSON.parse(item.extInfo).text"></span>
          <span v-html="JSON.parse(item.extInfo).replyText" class="fanpai"></span>
          <div class="msg-time" style="color: #000;"
            v-html="new Date(parseInt(item.msgTime)).toLocaleString()"
          ></div>
        </div>
        <div class="msg-content msg-img" 
          :style="'background-image:url('+'http://source.48.cn'+JSON.parse(item.extInfo).liveCover+');'"
          :title="JSON.parse(item.extInfo).user.nickName+'的直播间'"
          v-else-if="JSON.parse(item.extInfo).liveCover">
          <div class="msg-time" 
            v-html="new Date(parseInt(item.msgTime)).toLocaleString()"
          ></div>
          <div class="mask" @click="getLivePage(JSON.parse(item.extInfo),item.msgTime)">
            <img src="@/assets/images/home_square_live.webp" alt="">
            <playBtn />
          </div>
        </div>
        <div class="msg-content msg-audio" v-else-if="item.msgType==='AUDIO'">
          <audio :src="JSON.parse(item.bodys).url" controls ></audio>
          <div 
            class="audio-item"
            v-if="JSON.parse(item.bodys).ext==='amr'"
            @click="getAudio(JSON.parse(item.bodys))" 
          >
            <span :id="JSON.parse(item.bodys).url">{{(JSON.parse(item.bodys).dur/1000).toFixed(2)}} s</span>
            <img class="voice-img" src="@/assets/images/icon_jvjv_voice_in.webp" alt="">
          </div>
        </div>
        <div class="msg-content msg-video" 
          style="width:360px;height:480px"
          v-else-if="item.msgType==='VIDEO'">
          <video controls :src="JSON.parse(item.bodys).url" alt width="100%"></video>
        </div>
        <div
          class="msg-content msg-vote bubble"
          v-else-if="item.bodys==='投票消息'"
        >
          {{JSON.parse(item.extInfo).text}}
          <img src="@/assets/images/ic_post_vote.webp" width="30" >
          <div class="msg-time" style="color: #000;"
            v-html="item.bodys"
          ></div>
        </div>
        <div
          class="msg-content bubble"
          v-else
        >
          <div class="sender-name" @click="getMemberDetail(JSON.parse(item.extInfo).user.nickName)">
            {{JSON.parse(item.extInfo).user.nickName}}
            <img width="18px" v-if="JSON.parse(item.extInfo).sessionRole===2" src="@/assets/images/ic_houseowner.webp" >
            <img width="20px" v-if="JSON.parse(item.extInfo).user.teamLogo" :src="JSON.parse(item.extInfo).user.teamLogo | picPathFormat" >
          </div>
          <div>{{JSON.parse(item.extInfo).text}}</div>
          <div class="msg-time" 
            v-html="new Date(parseInt(item.msgTime)).toLocaleString()"
          ></div>
        </div>
      </div>
    </transition-group>
    <alt-loading v-else></alt-loading>
    <audio src ref="voice"></audio>
    <div class="msg-next" v-if="msgList[0]">
      <span class="time-stamp" v-html="new Date(parseInt(nextTime)).toLocaleString()"></span>
    </div>
    <div class="button" @click="getMore">
      <i class="el-icon-arrow-down" v-show="msgList[0]"></i>
    </div>
  </div>
</template>
<script>
import altLoading from '@/components/common/altLoading'
import playBtn from '@/components/common/playBtn'
export default {
  name: "msgList",
  data() {
    return {
      nextTime: 0,
      base64Str: "",
      answerContent: {},
      msgList: [],
      progress: null
    };
  },
  props: ["ownerId", "roomId"],
  methods: {
    async getMsgList() {
      // 获取成员房间所有消息
      const res = await this.ajax(
        "/getRoomBoard",
        {
          token: this.$store.getters.getToken,
          ownerId: this.ownerId,
          roomId: this.roomId
        },
        "POST"
      );
      this.msgList = res.content.message;
      this.nextTime = res.content.nextTime;
    },
    async getMore() {
      // 获取更多消息
      const res = await this.ajax(
        "getRoomBoard",
        {
          token: this.$store.getters.getToken,
          ownerId: this.ownerId,
          roomId: this.roomId,
          nextTime: this.nextTime
        },
        "POST"
      );
      this.msgList = this.msgList.concat(res.content.message);
      this.nextTime = res.content.nextTime;
      this.$store.commit("saveScrollTop");
    },
    async getAnswer(questionId, answerId, title) {
      // 获取翻牌消息，以弹出框形式呈现
      const h = this.$createElement;
      const res = await this.ajax(
        "/getAnswer",
        {
          questionId,
          answerId,
          token: this.$store.getters.getToken
        },
        "POST"
      );
      this.answerContent = res.content;
      this.$msgbox({
        title,
        message: h("div", null, [
          h("p", null, this.answerContent.answer),
          h("p", { style: "color: #ccc" }, this.answerContent.question)
        ]),
        confirmButtonText: "确定"
      });
    },
    async getAudio({ext,url,dur}) {
      // 获取语音消息
      if(ext === 'amr'){
        const res = await this.ajax("getAudio", { url }, "POST");
        if (res.status === 200) {
          // eslint-disable-next-line
          RongIMLib.RongIMVoice.init();
          this.base64Str = res.message;
          // eslint-disable-next-line
          RongIMLib.RongIMVoice.stop();
          // eslint-disable-next-line
          RongIMLib.RongIMVoice.play(this.base64Str);
        }
      }else{
        this.$refs.voice.src = url
        this.$refs.voice.addEventListener('loadeddata', () => {
          this.$refs.voice.play()
          this.progressHandler(url,dur)
        })
      }
    },
    stop({dur}) {
      // 暂停语音播放
      if(this.$refs.voice.played){
        this.$refs.voice.pause()
        if(this.progress){
          this.progress.innerText = dur
        }
      }
      // eslint-disable-next-line
      RongIMLib.RongIMVoice.init();
      // eslint-disable-next-line
      RongIMLib.RongIMVoice.stop();
    },
    async getLivePage(liveInfo, time) {
      const res = await this.ajax("/getLivePage", { id: liveInfo.liveId });
      let info = res.content;
      // 跳转到该成员的直播列表页面
      localStorage.setItem(
        "type",
        JSON.stringify({ type: info.liveType, cover: liveInfo.liveCover, title: liveInfo.liveTitle, ctime: time })
      );
      let url = this.$router.resolve({
        name: "livepage",
        params: { id: liveInfo.liveId, type: liveInfo.liveType, title: liveInfo.liveTitle, ctime: time }
      });
      window.open(url.href, "_blank");
    },
    getMemberDetail(memberName) {
      // 跳转到成员列表页面
      let n = [];
      if (memberName.includes("-")) {
        n = memberName.split("-");
      } else {
        n = [memberName];
      }
      this.$router.push({
        name: "memberlist",
        params: { group: "1", memberName: n[n.length - 1] }
      });
    },
    progressHandler(url,dur){
      if(this.progress){
        this.progress.innerText = (JSON.parse(localStorage.getItem('duration'))/1000).toFixed(2)
        this.progress = null
      }
      this.progress = document.getElementById(url)
      localStorage.setItem('duration',JSON.stringify(dur))
      this.$refs.voice.addEventListener('timeupdate', () => {
        this.progress.innerText = (this.$refs.voice.duration - this.$refs.voice.currentTime).toFixed(2)
      })
      this.$refs.voice.addEventListener('ended', () => {
        this.progress.innerText = (dur/1000).toFixed(2)
      })
    },
    showImage(url){
      window.open(url,'_blank')
    }
  },
  created() {
    this.getMsgList();
  },
  components: {
    altLoading,
    playBtn
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/less/global";
.max-height{
  height: calc(100vh);
}
.msg-list {
  div {
    .msg-item {
      max-width: 520px;
      // min-width: 400px;
      padding-bottom: 0;
      // flex: 1;
      margin-bottom: 20px;
      position: relative;
      // &:hover {
      //   background-color: #efefef;
      // }
      .msg-time {
        font-size: 12px;
        z-index: 99;
        color: #fff;
        position: absolute;
        right: 10px;
        bottom: 10px;
        // background-color: #fff;
        padding: 5px 10px;
        // border-radius: 8px;
      }
      .msg-content {
        background-color: #9bc3f2;
        padding: 30px 30px 40px 30px;
        border-radius: 10px;
        border: 1px solid #9bc3f2;
        box-sizing: border-box;
        margin-left: 40px;
        &.bubble:before{
          position: absolute;
          left: 30px;
          bottom: -5px;
          content: "";
          width: 0;
          height: 0;
          border-top: 20px solid #9bc3f2;
          border-radius: 7px 0 0;
          border-left: 10px solid transparent;
          transform: rotate(75deg);
        }
        .sender-name{
          .flex-align-center();
          font-size: 12px;
          margin-bottom: 5px;
          cursor: pointer;
          img{
            margin-top: 2px;
            margin-left: 5px;
          }
        }
        &.msg-video{
          padding: 0;
          border-radius: 0;
          box-sizing: content-box;
          background-color: #000;
          video{
            height: 480px;
          }
        }
        &.msg-audio{
          padding: 0;
          background: none;
          border: none;
          .audio-item{
            .flex-align-center();
            width: 150px;
            height: 40px;
            border-radius: 20px;
            cursor: pointer;
            background: #fff;
            padding: 10px;
            justify-content: space-between;
            .voice-img{
              width: 20px;
            }
          }
        }
        &.msg-vote{
          .flex-align-center();
          background-color: #fff;
        }
        &.idol-reply{
          background-color: #fff;
        }
        .mask{
          position: absolute;
          transition: all 0.1s ease-out;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          .flex-all-center();
        }
        &:hover{
          .mask{
            background-color: rgba(0,0,0,.2);
            .play-btn{
              opacity: 1;
              transform: scale(1.05);
            }
            img{
              opacity: 0;
            }
          }
        }
        .msg-flip {
          cursor: pointer;
        }
        &.msg-img {
          padding: 0;
          width: 200px;
          height: 200px;
          position: relative;
          background-size: cover;
          cursor: pointer;
        }
        .live-push {
          cursor: pointer;
        }
        .fanpai {
          font-size: 14px;
          margin-top: 10px;
          padding-top: 10px;
          display: block;
          border-top: 1px solid #ccc;
          color: #999;
        }
        .reply{
          background-color: #9bc3f2;
        }
      }
      .msg-sender {
        color: #000;
        .sender-avatar {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 30px;
          border: 1px solid #ccc;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
  }
  .button {
    .flex-all-center();
    .button-container();
  }
  .msg-next{
    width: 100%;
    height: 30px;
    .flex-all-center();
    .time-stamp{
      font-size: 12px;
      padding: 5px;
      background-color: #eee;
    }
  }
}
</style>