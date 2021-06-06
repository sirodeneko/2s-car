<template>
  <div id="car" class="center">
    <div class="car-content">
      <el-row :gutter="20">
        <el-col :span="12" class="car-content-left">
          <img :src="car.img_url" alt="" width="200" />
        </el-col>
        <el-col :span="12" class="car-content-right">
          <div class="car-title">{{ car.title }}</div>
          <div class="car-simple-info"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Car",
  data() {
    return {
      car: this.$store.getters.getCar,
    };
  },
  methods: {
    load() {
      // 调整标签
      this.$store.commit("setRouterIndex", "/buy");
      console.log(this.car);
    },
  },
  created() {
    this.load();
  },
};
</script>

<style lang="less">
#car {
  .car-content {
    margin-top: 10px;
    .car-content-left {
      background-color: rosybrown;
    }
    .car-content-right {
      background-color: rosybrown;
      text-align: start;
      .car-title {
        font-size: 26px;
        line-height: 1;
        font-weight: bold;
        color: #111e36;
        padding: 5px 0;
      }
    }
  }
}
</style>
