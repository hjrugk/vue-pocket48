<template>
  <div class="board-list" ref="board">
    <transition-group tag="div">
      <div
        class="board-item"
        v-for="item in commentList"
        :class="{isSpec:JSON.parse(item.extInfo).user.roleId===3}"
        v-show="item.msgType==='TEXT'"
        :key="item.msgTime"
      >
        <div class="sender-info">
          <img 
            @click="getUserInfo(JSON.parse(item.extInfo))"
            :title="JSON.parse(item.extInfo).user.nickName"
            :src="JSON.parse(item.extInfo).user.avatar | picPathFormat" alt class="sender-img">
        </div>
        <p class="board-content"
          v-html="JSON.parse(item.extInfo).text"></p>
      </div>
    </transition-group>
    <div v-if="showInfo" @click="showInfo = !showInfo">
      <popup-info :info="userInfo"></popup-info>
    </div>
    <div class="button" @click="getMore">
      <i class="el-icon-arrow-down" v-show="commentList[0]"></i>
    </div>
  </div>
</template>
<script>
import popupInfo from "@/components/common/popupInfo";
export default {
  name: "commentList",
  data() {
    return {
      nextTime: 0,
      commentList: [],
      showInfo: false,
      userInfo: 0,
      topData: {}
    };
  },
  props: ["roomId","ownerId"],
  methods: {
    async getComments() {
      // 获取成员房间留言列表
      const res = await this.ajax(
        "/getComments",
        { id: this.roomId, token: this.$store.getters.getToken },
        "POST"
      );
      // if(res.content.top1Data){
      //   this.topData = JSON.parse(res.content.top1Data.extInfo)
      // }
      this.commentList = res.content.message;
      this.nextTime = res.content.nextTime;
    },
    async getMore() {
      const res = await this.ajax(
        "/getComments",
        {
          token: this.$store.getters.getToken,
          id: this.roomId,
          nextTime: this.nextTime
        },
        "POST"
      );
      this.commentList = this.commentList.concat(res.content.message);
      this.nextTime = res.content.nextTime;
    },
    getUserInfo(info) {
      // 获取聚聚信息
      this.userInfo = info;
      this.showInfo = true;
    }
  },
  created() {
    this.getComments();
  },
  components: {
    popupInfo
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/less/global";
.board-list {
  .user-info {
    width: calc(100vw);
    height: calc(100vh);
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    .popup-info {
      width: 240px;
      height: 200px;
      background-color: #fff;
      border-radius: 5px;
      text-align: center;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
  }
  .board-item {
    display: flex;
    position: relative;
    justify-content: flex-end;
    // flex-direction: column;
    // background-color: #666;
    max-width: 360px;
    min-width: 300px;
    // &:hover {
    //   background-color: #555;
    // }
    .sender-info {
      .flex-align-center();
      justify-content: flex-start;
      position: absolute;
      right: 0;
      bottom: 16px;
      // border-bottom: 1px solid #ccc;
      .sender-img {
        width: 30px;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin-left: 10px;
        cursor: pointer;
      }
      // .board-name {
      //   color: #eee;
      //   cursor: pointer;
      // }
    }
    .board-content {
      // color: #fff;
      padding: 30px;
      margin-right: 40px;
      background-color: #fff;
      border-radius: 10px 10px 0 10px;
      border: 1px solid #71a9e9;;
      box-sizing: border-box;
    }
  }
  .isSpec {
    justify-content: flex-start;
    margin-left: -40px;
    .sender-info{
      left: 0;
      right: auto;
      .sender-img{
        margin-left: auto;
        margin-right: 10px;
      }
    }
    .board-content{
      margin-right: auto;
      background-color: #9bc3f2;
      margin-left: 40px;
      border-radius: 10px 10px 10px 0;
    }
  }
  .button {
    .button-container();
    .flex-all-center();
  }
}
</style>

