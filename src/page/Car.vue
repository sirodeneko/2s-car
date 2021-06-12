<template>
  <div id="car">
    <div class="center">
      <div class="car-content">
        <el-row :gutter="20">
          <el-col :span="12" class="car-content-left">
            <img
              :src="car.img_url"
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
                ¥{{ car.current_prince }}<span style="font-size: 30px">万</span>
              </div>
              <em class="car-price-text1">含过户费</em>
              <s class="car-price-text1"
                >新车含税价：{{ car.original_price }}万</s
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
      //car: this.$store.getters.getCar,
      carReference: "0~100",
      bntText: "查看号码",
      car: {
        id: 9999,
        title: "奥迪A5 2017款 Sportback 40 TFSI 时尚型",
        original_price: 111.59,
        current_prince: 63.8,
        city: "台州",
        mileage: 6.0,
        year: 2019,
        img_url: require("./../assets/7b84c5ef-d74d-4e32-8b07-1578b990f458.jpg"),
        phone: "123123123",
        html: `
      <ul class="basic-item-ul">
          <li><span class="item-name">上牌时间</span>2018年01月</li>
          <li><span class="item-name">表显里程</span>6万公里</li>
          <li><span class="item-name">变  速  箱</span>自动</li>
          <li><span class="item-name">排放标准</span>欧V</li>
          <li><span class="item-name">排       量</span>3L</li>
          <li><span class="item-name">发布时间</span>2021-05-02</li>
      </ul>
      <ul class="basic-item-ul">
          <li><span class="item-name">年检到期</span>2022-1</li>
          <li><span class="item-name">保险到期</span>2022-1</li>
          <li><span class="item-name">质保到期</span>-</li>

          <li><span class="item-name">过户次数</span>2次（以车辆登记证为准）</li>
          <li id="citygroupid"><span class="item-name">所  在  地</span>台州</li>
      </ul>
      <ul class="basic-item-ul">
          <li><span class="item-name">发  动  机</span>3.0T 340马力 V6 </li>
          <li><span class="item-name">车辆级别</span>中大型SUV</li>
          <li><span class="item-name">车身颜色</span>黑色</li>
          <li><span class="item-name">燃油标号</span>95号</li>
          <li><span class="item-name">驱动方式</span>前置四驱</li>
          
          <li><span class="item-name">更      多</span><a href="javascript:void(0);" target="_blank" id="a_moreconfig" class="link-more" eventkey="c_pc_2sc_detail_moreconfigure" name="track" infoid="39965031">全部参数配置<i class="usedfont used-youjiantou"></i></a>
          </li>
          
      </ul>
      <p class="attention fn-clear"><i class="ico-explain"></i>交易时注意查验车辆信息和车况，以车辆相关证件为准。确认交易视为您对车源信息的认可。</p>
  `,
      },
    };
  },
  methods: {
    load() {
      // 调整标签
      this.$store.commit("setRouterIndex", "/buy");
      console.log(this.car);
      let num = this.car.current_prince;
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
