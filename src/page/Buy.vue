<template>
  <div id="buy" class="center">
    <div class="buy-select">
      <el-row type="flex" justify="start">
        <span class="buy-label">品 牌：</span>
        <span
          class="buy-label-item"
          v-for="(item, index) in brandList"
          :key="index"
          :class="
            index == selete.brandIndex
              ? 'buy-label-item buy-label-item-highlight'
              : 'buy-label-item'
          "
          @click="selectBrand(index, item)"
          >{{ item }}</span
        >

        <span class="buy-label-item"
          ><input
            type="text"
            @blur="brandBlur"
            v-model="userBrand"
            @keydown.enter="enterToBrand"
        /></span>
      </el-row>
      <el-row type="flex" justify="start" style="margin-top: 10px">
        <span class="buy-label">价 格：</span>
        <span
          class="buy-label-item"
          v-for="(item, index) in priceList"
          :key="index"
          :class="
            index == selete.priceIndex
              ? 'buy-label-item buy-label-item-highlight'
              : 'buy-label-item'
          "
          @click="selectPrice(index, item)"
          >{{ item }} 万</span
        >
      </el-row>
      <el-row type="flex" justify="start" style="margin-top: 10px">
        <span class="buy-label">类 型：</span>
        <span
          class="buy-label-item"
          v-for="(item, index) in styleList"
          :key="index"
          :class="
            index == selete.styleIndex
              ? 'buy-label-item buy-label-item-highlight'
              : 'buy-label-item'
          "
          @click="selectStyle(index, item)"
          >{{ item }}</span
        >
      </el-row>
      <el-row type="flex" justify="start" style="margin-top: 10px">
        <span class="buy-label">年 份：</span>
        <span
          class="buy-label-item"
          v-for="(item, index) in yearList"
          :key="index"
          :class="
            index == selete.yearIndex
              ? 'buy-label-item buy-label-item-highlight'
              : 'buy-label-item'
          "
          @click="selectYear(index, item)"
          >{{ item }}</span
        >
      </el-row>
      <el-row type="flex" justify="start" style="margin-top: 10px">
        <span class="buy-label">里 程：</span>
        <span
          class="buy-label-item"
          v-for="(item, index) in mileageList"
          :key="index"
          :class="
            index == selete.mileageIndex
              ? 'buy-label-item buy-label-item-highlight'
              : 'buy-label-item'
          "
          @click="selectMileage(index, item)"
          >{{ item }}万公里以内</span
        >
      </el-row>
    </div>
    <div class="buy-select-result">
      <el-row type="flex" justify="start" align="middle">
        <span class="buy-label">已选择：</span>
        <el-tag
          v-for="tag in tags"
          :key="tag.name"
          @close="handleClose(tag)"
          :disable-transitions="true"
          size="mini"
          closable
          :style="{ marginRight: '8px' }"
        >
          {{ tag.name }}
        </el-tag>

        <el-button
          type="primary"
          size="mini"
          class="buy-select-button"
          @click="selectOK"
          >搜索</el-button
        >
      </el-row>
    </div>

    <!-- 车辆展示界面 -->
    <div class="buy-cars">
      <el-row :gutter="24">
        <el-col class="r-card" :span="6" v-for="item in carList" :key="item.id">
          <el-card
            :body-style="{ padding: '0 0 15px 0' }"
            shadow="hover"
            @click.native="goCar(item)"
          >
            <img :src="item.url" height="168px" width="100%" />
            <div class="r-card-center">
              <span class="r-card-center-title">{{ item.name }}</span>
              <div class="r-card-center-title2">
                {{ item.mileage }}万公里/{{ item.year }}/{{ item.location }}
              </div>
              <div style="margin-top: 6px">
                <span class="r-card-center-price1"
                  >{{ item.current_price }}万</span
                >
                <span class="r-card-center-price2"
                  >{{ item.original_price }}万</span
                >
              </div>
            </div>
          </el-card>
        </el-col>
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
      brandList: [
        "宝马",
        "大众",
        "奔驰",
        "奥迪",
        "别克",
        "福特",
        "丰田",
        "保时捷",
        "现代",
      ],
      userBrand: "",
      priceList: [
        "0_3",
        "3_5",
        "5_8",
        "8_10",
        "10_15",
        "15_20",
        "20_30",
        "30_50",
        "50",
      ],
      styleList: [
        "时尚型",
        "豪华版",
        "舒适型",
        "国V",
        "SUV",
        "练手车",
        "运动型",
      ],
      yearList: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
      mileageList: [1, 3, 6, 10],
      selete: {
        brandIndex: -1,
        priceIndex: -1,
      },
      tags: [{ key: "city", index: -1, name: "南昌" }],
      carList: [
        {
          id: 0,
          name: "奥迪A6L 2020款 45 TFSI 臻选动感型",
          original_price: "30",
          current_price: "19.9",
          location: "南昌",
          mileage: "2.33",
          year: "1998",
          brand: "奥迪",
          url: require("./../assets/loading.png"),
        },
      ],
    };
  },
  methods: {
    load() {
      let price = this.$route.query.price;
      console.log(price);
      let xxx = this.$route.query.xxx;
      console.log(xxx);
    },
    handleClose(tag) {
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].key == tag.key) {
          this.tags.splice(i, 1);
          return;
        }
      }
    },
    selectBrand(index, brand) {
      this.selete.brandIndex = index;
      // 先找有没这个元素
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].key == "brand") {
          this.tags.splice(i, 1);
          break;
        }
      }
      this.tags.push({ key: "brand", index: index, name: brand });
    },
    selectPrice(index, price) {
      this.selete.priceIndex = index;
      // 先找有没这个元素
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].key == "price") {
          this.tags.splice(i, 1);
          break;
        }
      }
      this.tags.push({ key: "price", index: index, name: price + "万" });
    },
    selectStyle(index, style) {
      this.selete.styleIndex = index;
      // 先找有没这个元素
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].key == "style") {
          this.tags.splice(i, 1);
          break;
        }
      }
      this.tags.push({ key: "style", index: index, name: style });
    },
    selectYear(index, year) {
      this.selete.yearIndex = index;
      // 先找有没这个元素
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].key == "year") {
          this.tags.splice(i, 1);
          break;
        }
      }
      this.tags.push({ key: "year", index: index, name: year });
    },
    selectMileage(index, mileage) {
      this.selete.mileageIndex = index;
      // 先找有没这个元素
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].key == "mileage") {
          this.tags.splice(i, 1);
          break;
        }
      }
      this.tags.push({
        key: "mileage",
        index: index,
        name: mileage + "万公里以内",
      });
    },
    brandBlur() {
      this.selete.brandIndex = -2;
      // 先找有没这个元素
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].key == "brand") {
          this.tags.splice(i, 1);
          break;
        }
      }
      this.tags.push({ key: "brand", index: -2, name: this.userBrand });
    },
    enterToBrand(event) {
      event.srcElement.blur();
    },
    selectOK() {
      //查找某标签是否存在
      let isExist = (key) => {
        for (let i = 0; i < this.tags.length; i++) {
          if (this.tags[i].key == key) {
            return this.tags[i];
          }
        }
        return false;
      };
      let form = {};
      // 城市
      if (isExist("city")) {
        form.city = this.city.id + "00";
      }
      // 品牌
      if (isExist("brand")) {
        let tag = isExist("brand");
        form.brand = tag.name;
      }
      // 价格
      if (isExist("price")) {
        let tag = isExist("price");
        form.price = this.priceList[tag.index];
      }
      // 类型
      if (isExist("style")) {
        let tag = isExist("style");
        form.style = tag.name;
      }
      // 年份
      if (isExist("year")) {
        let tag = isExist("year");
        form.year = tag.name;
      }
      // 里程
      if (isExist("mileage")) {
        let tag = isExist("mileage");
        form.mileage = this.mileageList[tag.index];
      }
      console.log(form);
    },
    goCar(car) {
      this.$store.commit("setCar", car);
      this.$router.push({ name: "Car" });
    },
  },
  watch: {
    "$store.state.city": function (newVal) {
      if (newVal) {
        for (let i = 0; i < this.tags.length; i++) {
          if (this.tags[i].key == "city") {
            this.tags.splice(i, 1);
            break;
          }
        }
        this.tags.push({ key: "city", index: -2, name: newVal.name });
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
  .buy-select-result {
    box-sizing: border-box;
    width: 100%;
    margin: 0 3px 3px 3px;
    background-color: white;
    border-radius: 0 0 5px 5px;
    border: solid 1px #eee;
    padding: 20px;
    font-size: 13px;
    .buy-select-button {
      margin-left: auto;
      margin-right: 20px;
    }
  }
  .buy-select {
    box-sizing: border-box;
    width: 100%;
    margin: 3px 3px 0 3px;
    min-height: 100px;
    background-color: white;
    border-radius: 5px 5px 0 0;
    border: solid 1px #eee;
    padding: 20px;
    font-size: 13px;
    input {
      outline: none;
      width: 30px;
      height: 12px;
      border: solid 1px rgb(185, 177, 177);
    }
    .buy-label {
      margin-right: 10px;
      padding: 1px 3px 1px 3px;
    }
    .buy-label-item {
      cursor: pointer;
      margin-right: 15px;
      line-height: 17px;
      background-color: #eee;
      padding: 1px 3px 1px 3px;
      border-radius: 2px;
      &:hover {
        color: #409eff;
      }
    }
    .buy-label-item-highlight {
      background-color: #409eff;
      color: white;
      &:hover {
        color: white;
      }
    }
  }
  .buy-cars {
    .r-card {
      margin-bottom: 15px;
    }
    .r-card-center {
      padding: 7px 15px 7px 15px;
      text-align: left;
      .r-card-center-title {
        line-height: 20px;
        height: 40px;
        overflow: hidden;
        font-size: 14px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .r-card-center-title2 {
        color: #999;
        font-size: 12px;
        line-height: 1;
        margin-top: 6px;
      }
      .r-card-center-price1 {
        color: #f43636;
        font-size: 20px;
        line-height: 20px;
        vertical-align: top;
      }
      .r-card-center-price2 {
        color: #999;
        font-size: 14px;
        margin-left: 5px;
        text-decoration: line-through;
      }
    }
  }
}
</style>
