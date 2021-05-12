<template>
  <div id="index"  class="center">
    <!-- 轮播图 -->
    <div class="banner">
      <el-carousel trigger="click" height="350px">
        <el-carousel-item v-for="item in bannerList" :key="item">
          <img :src="item" alt="" height="350px" width="100%" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 今日推荐 -->
    <div class="recommend">
      <el-row class="recommend-top">
        <el-col><span>今日推荐 </span> </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      bannerList: [
        require("./../assets/banner-0.png"),
        require("./../assets/banner-1.png"),
        require("./../assets/banner-2.png"),
      ],
    };
  },
  methods: {
    load() {},
  },
  created() {
    this.load();
  },
};
</script>

<style lang="less">
.banner img {
  border-radius: 2px;
}
.recommend {
    margin: 30px 0 20px 0;
  .recommend-top {
    text-align: center;
    margin-bottom: 30px;
    span{
        font-size: 22px;
    line-height: 22px;
    color: #333;
    padding: 0 22px;
    display: inline-block;
    border-left: solid 3px #409EFF;
    border-right: solid 3px #409EFF;
    }
  }
}
</style>
