<template>
  <div class="live-pic" v-if="type === 2">
    <div :style="{width: topWidth}">
      <el-carousel :interval="carouselTime" indicator-position="none" arrow="never" :height="'700px'">
        <el-carousel-item v-for="item in radiocover" :key="item">
          <img :src="'http://source.48.cn'+item" alt>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type", "topWidth", "radiocover","carouselTime"]
};
</script>
<style lang="less" scoped>
@import "../../../assets/less/global";
.live-pic {
  .flex-all-center();
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  div {
    img {
      z-index: 98;
      width: 100%;
    }
  }
  .el-carousel__item {
    .flex-all-center();
  }
}
</style>

