<template>
  <div id="buy" class="center">
    <div class="buy-select">
      <el-row type="flex" justify="start">
        <span class="buy-label">品 牌：</span>
        <span class="buy-label">品 牌：</span>
        <span class="buy-label">{{ city.name }}</span>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buy",
  data() {
    return {
      city: this.$store.getters.getCity,
      brandList: [],
      priceList: [],
      styleList: [],
    };
  },
  methods: {
    load() {
      let price = this.$route.query.price;
      console.log(price);
      let xxx = this.$route.query.xxx;
      console.log(xxx);
    },
  },
  watch: {
    "$store.state.city": function (newVal) {
      if (newVal) {
        this.city = this.$store.state.city;
      }
    },
  },
  created() {
    this.load();
  },
};
</script>

<style lang="less">
#buy {
  .buy-select {
    width: 100%;
    margin: 3px;
    min-height: 100px;
    background-color: white;
    border-radius: 5px;
    border: solid 1px #eee;
    padding: 20px;
    .buy-label {
      margin-left: 5px;
    }
  }
}
</style>
