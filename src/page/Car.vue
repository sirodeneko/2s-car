<template>
  <div id="car" class="center">
      好快的的车车
      
  </div>
</template>

<script>
export default {
  name: "Car",
  data() {
    return {
        car:this.$store.getters.getCar,
    };
  },
  methods: {
    load() {
        console.log(this.car);
    },
  },
  created() {
    this.load();
  },
};
</script>

<style lang="less"></style>
