<template>
  <div id="buy" class="center">
      <div class="buy-select">
          
      </div>
  </div>
</template>

<script>
export default {
  name: "Buy",
  data() {
    return {};
  },
  methods: {
    load() {
        let price=this.$route.query.price;
        console.log(price);
        let xxx=this.$route.query.xxx;
        console.log(xxx);
    },
  },
  created() {
    this.load();
  },
};
</script>

<style lang="less">
#buy{
    .buy-select{
        width: 100%;
        margin: 3px;
        min-height: 100px;
        background-color: white;
        border-radius: 5px;
        border: solid 1px #eee;;
    }
}
</style>
