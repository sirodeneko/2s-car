<template>
  <div id="car">
    <div class="center">
      <div class="car-content">
        <el-row :gutter="20">
          <el-col :span="12" class="car-content-left">
            <img
              :src="car.imgUrl"
              alt=""
              width="100%"
              height="368px"
              style="border-radius: 5px"
            />
          </el-col>
          <el-col :span="12" class="car-content-right">
            <div class="car-title">{{ car.title }}</div>
            <div class="car-simple-info">
              <div class="car-simple-info-item">
                <div class="car-simple-info-title">表显里程</div>
                <div class="car-simple-info-text">{{ car.mileage }}万公里</div>
              </div>
              <div class="car-simple-info-item">
                <div class="car-simple-info-title">上牌时间</div>
                <div class="car-simple-info-text">{{ car.year }}年</div>
              </div>
              <div class="car-simple-info-item">
                <div class="car-simple-info-title">车辆所在地</div>
                <div class="car-simple-info-text">{{ car.city }}</div>
              </div>
            </div>
            <div class="car-reference">
              <span class="car-reference-l">参考售价：</span
              ><span class="car-reference-r">{{ carReference }}万</span>
            </div>
            <div class="car-price">
              <div class="car-price-num">
                ¥{{ car.currentPrice }}<span style="font-size: 30px">万</span>
              </div>
              <em class="car-price-text1">含过户费</em>
              <s class="car-price-text1"
                >新车含税价：{{ car.originalPrice }}万</s
              >
            </div>

            <div class="car-price-bnt">
              <el-button plain @click="changeText">{{ bntText }} </el-button>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="dangan">
        <div class="dangan-title">车辆档案</div>
        <div class="dangan-text" v-html="car.html"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Car",
  data() {
    return {
      car: this.$store.getters.getCar,
      carReference: "0~100",
      bntText: "查看号码",
    };
  },
  methods: {
    load() {
      // 调整标签
      this.$store.commit("setRouterIndex", "/buy");
      console.log(this.car);
      let num = this.car.currentPrince;
      let l = Math.floor(Math.random() * 20);
      let r = Math.floor(Math.random() * 20);
      this.carReference =
        ((num * (100 - l)) / 100).toFixed(2).toString() +
        "~" +
        ((num * (100 + r)) / 100).toFixed(2).toString();
    },
    changeText() {
      this.bntText = this.car.phone;
    },
  },
  created() {
    this.load();
  },
};
</script>

<style lang="less">
#car {
  background: white;
  .car-content {
    padding-top: 10px;
    // .car-content-left {
    //   //background-color: rosybrown;
    // }
    .car-content-right {
      //background-color: rosybrown;
      text-align: start;
      .car-title {
        font-size: 26px;
        line-height: 1;
        font-weight: bold;
        color: #111e36;
        padding: 5px 0;
      }
      .car-simple-info {
        background-color: rgb(248, 249, 252);
        border-radius: 5px;
        padding: 10px;
        height: 43px;
        display: flex;
        .car-simple-info-item {
          width: 110px;
        }
        .car-simple-info-title {
          padding-bottom: 6px;
          line-height: 1;
          color: #666d7f;
          font-size: 14px;
        }
        .car-simple-info-text {
          font-size: 18px;
          line-height: 1.2;
          font-weight: bold;
          color: #111e36;
          width: 100%;
          height: 20px;
        }
      }
      .car-price {
        display: flex;
        align-items: center;
        color: #2c3e50;
        .car-price-num {
          font-size: 36px;
          font-weight: bold;
          color: #f9712c;
          padding-right: 10px;
        }
        .car-price-text1 {
          font-size: 10px;
          margin-right: 15px;
        }
      }
      .car-reference {
        display: flex;
        padding: 20px 0 20px 0;
        align-items: center;
        font-size: 20px;
        .car-reference-l {
          font-weight: 700;
        }
        .car-reference-r {
          color: tomato;
        }
      }
      .car-price-bnt {
        margin: 25px auto 0 auto;
        padding-right: 20%;
        display: flex;
        //justify-content: center;
        button {
          width: 200px;
          height: 50px;
          font-size: 20px;
          font-weight: 700;
        }
      }
    }
  }

  .dangan {
    //margin-top: 25px;

    .dangan-title {
      line-height: 1;
      font-size: 28px;
      font-weight: bold;
      color: #111e36;
      padding: 50px 0 30px;
      text-align: left;
    }
    .dangan-text {
      padding: 50px 0;
      position: relative;
      box-sizing: border-box;
      border: 1px solid #e6e6e6;
      text-align: left;
      .basic-item-ul {
        list-style: none;
        padding-left: 85px;
        border-left: 1px dotted #e6e6e6;
        float: left;
        box-sizing: border-box;
        overflow: hidden;
        width: 330px;
        &:first-child {
          padding-left: 67px;
          border-left: 0;
        }
        li {
          margin-top: 20px;
          line-height: 1;
          font-size: 14px;
          color: #1b1b1b;
          &:first-child {
            margin-top: 0;
          }
          .item-name {
            width: 80px;
            display: inline-block;
            color: #999;
          }
          .link-more {
            display: none;
          }
        }
      }
      .attention {
        padding-left: 67px;
        font-size: 12px;
        line-height: 14px;
        color: #999;
        padding-top: 20px;
        clear: both;
      }
    }
  }
}
</style>
