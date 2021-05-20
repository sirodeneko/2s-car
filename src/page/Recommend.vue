<template>
  <div id="recommend">
    <div class="recommend-top">
      <img src="../assets/2sc.jpg" width="100%" />
    </div>
    <div class="center tuijian">
      <el-row class="tuijain-top">
        <el-col><span class="tows-title">俊杰推荐 </span> </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col
          v-for="(item, index) in tuijianTitle"
          :key="index"
          :class="
            index != tuijianIndex
              ? 'tuijian-menu'
              : 'tuijian-menu tuijian-menu-on'
          "
          @click.native="changeIndex(index)"
          >{{ item }}</el-col
        >
      </el-row>

      <div
        v-for="(cars, index) in tuijianData"
        :key="index"
        v-show="index == tuijianIndex"
      >
        <el-row :gutter="24">
          <el-col class="r-card" :span="6" v-for="item in cars" :key="item.id">
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

      <el-row class="tuijian-bottom">
        <el-col>
          <router-link to="/buy">
            <el-button plain
              >没有中意？前去找车<i class="el-icon-right"></i>
            </el-button>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <div class="center" style="margin-top: 40px">
      <div class="tows-title">二手车平均价格全国分布</div>
      <div ref="chart2" style="width: 100%; height: 500px"></div>
    </div>
    <div class="center" style="margin-top: 40px">
      <div class="tows-title">各城市平均价格对比图</div>
      <div ref="chart1" style="width: 100%; height: 400px"></div>
    </div>
    <div class="center" style="margin-top: 40px">
      <div class="tows-title">大家都在搜索</div>
      <img src="../assets/ciyun.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    let mockCarList = [
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
      {
        id: 1,
        name: "奥迪A6L 2020款 45 TFSI 臻选动感型",
        original_price: "30",
        current_price: "19.9",
        location: "南昌",
        mileage: "2.33",
        year: "1998",
        brand: "奥迪",
        url: require("./../assets/loading.png"),
      },
      {
        id: 2,
        name: "奥迪A6L 2020款 45 TFSI 臻选动感型",
        original_price: "30",
        current_price: "19.9",
        location: "南昌",
        mileage: "2.33",
        year: "1998",
        brand: "奥迪",
        url: require("./../assets/loading.png"),
      },
      {
        id: 3,
        name: "奥迪A6L 2020款 45 TFSI 臻选动感型",
        original_price: "30",
        current_price: "19.9",
        location: "南昌",
        mileage: "2.33",
        year: "1998",
        brand: "奥迪",
        url: require("./../assets/loading.png"),
      },
      {
        id: 4,
        name: "奥迪A6L 2020款 45 TFSI 臻选动感型",
        original_price: "30",
        current_price: "19.9",
        location: "南昌",
        mileage: "2.33",
        year: "1998",
        brand: "奥迪",
        url: require("./../assets/loading.png"),
      },
      {
        id: 5,
        name: "奥迪A6L 2020款 45 TFSI 臻选动感型",
        original_price: "30",
        current_price: "19.9",
        location: "南昌",
        mileage: "2.33",
        year: "1998",
        brand: "奥迪",
        url: require("./../assets/loading.png"),
      },
      {
        id: 6,
        name: "奥迪A6L 2020款 45 TFSI 臻选动感型",
        original_price: "30",
        current_price: "19.9",
        location: "南昌",
        mileage: "2.33",
        year: "1998",
        brand: "奥迪",
        url: require("./../assets/loading.png"),
      },
      {
        id: 7,
        name: "奥迪A6L 2020款 45 TFSI 臻选动感型",
        original_price: "30",
        current_price: "19.9",
        location: "南昌",
        mileage: "2.33",
        year: "1998",
        brand: "奥迪",
        url: require("./../assets/loading.png"),
      },
      {
        id: 8,
        name: "奥迪A6L 2020款 45 TFSI 臻选动感型",
        original_price: "30",
        current_price: "19.9",
        location: "南昌",
        mileage: "2.33",
        year: "1998",
        brand: "奥迪",
        url: require("./../assets/loading.png"),
      },
      {
        id: 9,
        name: "奥迪A6L 2020款 45 TFSI 臻选动感型",
        original_price: "30",
        current_price: "19.9",
        location: "南昌",
        mileage: "2.33",
        year: "1998",
        brand: "奥迪",
        url: require("./../assets/loading.png"),
      },
      {
        id: 10,
        name: "奥迪A6L 2020款 45 TFSI 臻选动感型",
        original_price: "30",
        current_price: "19.9",
        location: "南昌",
        mileage: "2.33",
        year: "1998",
        brand: "奥迪",
        url: require("./../assets/loading.png"),
      },
      {
        id: 11,
        name: "奥迪A6L 2020款 45 TFSI 臻选动感型",
        original_price: "30",
        current_price: "19.9",
        location: "南昌",
        mileage: "2.33",
        year: "1998",
        brand: "奥迪",
        url: require("./../assets/loading.png"),
      },
    ];
    return {
      options: {
        // title: {
        //   text: "二手车平均价格全国分布图",
        //   left: "center",
        //   bottom: "20",
        // },
        tooltip: {
          triggerOn: "mousemove", //mousemove、click
          padding: 8,
          borderWidth: 1,
          borderColor: "#409eff",
          backgroundColor: "rgba(255,255,255,0.7)",
          textStyle: {
            color: "#000000",
            fontSize: 13,
          },
          formatter: function (e) {
            let data = e.data;
            if (data == undefined) {
              return `<div> <p><b style="font-size:15px;">暂无数据</b></p></div>`;
            }
            let context = `
               <div>
                   <p><b style="font-size:15px;">${data.name}</b></p>
                   <p class="tooltip_style"><span class="tooltip_left">平均价格:</span><span class="tooltip_right">${data.value}万</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">在售数量:</span><span class="tooltip_right">${data.num}</span></p>
            `;
            return context;
          },
        },
        visualMap: {
          show: true,
          left: 26,
          bottom: 60,
          showLabel: true,
          pieces: [
            {
              gte: 40,
              label: ">= 40万",
              color: "#1f307b",
            },
            {
              gte: 25,
              lt: 40,
              label: "25 - 40万",
              color: "#3c57ce",
            },
            {
              gte: 20,
              lt: 25,
              label: "20 - 25万",
              color: "#6f83db",
            },
            {
              gte: 15,
              lt: 20,
              label: "15 - 20万",
              color: "#9face7",
            },
            {
              lt: 15,
              label: "<15万",
              color: "#bcc5ee",
            },
          ],
        },
        geo: {
          map: "china",
          scaleLimit: {
            min: 1,
            max: 2,
          },
          zoom: 1,
          top: 30,
          label: {
            normal: {
              show: true,
              fontSize: "14",
              color: "rgba(0,0,0,0.7)",
            },
          },
          itemStyle: {
            normal: {
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: "#f2d5ad",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0,
            },
          },
        },
        series: [
          {
            name: "二手车价格",
            type: "map",
            geoIndex: 0,
            layoutCenter: ["30%", "30%"],
            // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
            layoutSize: 100,
            data: [],
          },
        ],
      },
      //echart data
      dataList: [
        {
          name: "北京",
          value: 70.22,
          num: 1187,
        },
        {
          name: "天津",
          value: 65.26,
          num: 1117,
        },
        {
          name: "河北",
          value: 26.75,
          num: 4744,
        },
        {
          name: "山西",
          value: 22.62,
          num: 1603,
        },
        {
          name: "内蒙古",
          value: 39.03,
          num: 658,
        },
        {
          name: "辽宁",
          value: 31.09,
          num: 2518,
        },
        {
          name: "吉林",
          value: 37.26,
          num: 1255,
        },
        {
          name: "黑龙江",
          value: 27.01,
          num: 1297,
        },
        {
          name: "上海",
          value: 44.44,
          num: 1227,
        },
        {
          name: "江苏",
          value: 25.24,
          num: 7980,
        },
        {
          name: "浙江",
          value: 25.73,
          num: 9183,
        },
        {
          name: "安徽",
          value: 25.61,
          num: 2782,
        },
        {
          name: "福建",
          value: 26.17,
          num: 3395,
        },
        {
          name: "江西",
          value: 15.67,
          num: 2495,
        },
        {
          name: "山东",
          value: 24.03,
          num: 8200,
        },
        {
          name: "河南",
          value: 23.27,
          num: 3790,
        },
        {
          name: "湖北",
          value: 18.46,
          num: 2210,
        },
        {
          name: "湖南",
          value: 26.3,
          num: 1417,
        },
        {
          name: "广东",
          value: 28.64,
          num: 9442,
        },
        {
          name: "广西",
          value: 18.18,
          num: 2210,
        },
        {
          name: "海南",
          value: 18.1,
          num: 1121,
        },
        {
          name: "重庆",
          value: 37.19,
          num: 1107,
        },
        {
          name: "四川",
          value: 25.95,
          num: 2177,
        },
        {
          name: "贵州",
          value: 17.34,
          num: 2048,
        },
        {
          name: "云南",
          value: 17.13,
          num: 2048,
        },
        {
          name: "陕西",
          value: 17.93,
          num: 1178,
        },
        {
          name: "甘肃",
          value: 16.91,
          num: 1109,
        },
        {
          name: "青海",
          value: 20.22,
          num: 62,
        },
        {
          name: "宁夏",
          value: 22.65,
          num: 602,
        },
        {
          name: "新疆",
          value: 20.28,
          num: 1106,
        },
      ],
      tuijianIndex: 0,
      tuijianTitle: ["猜您喜欢", "降价急售", "SUV", "练手车", "豪华型"],
      tuijianData: [
        mockCarList,
        mockCarList,
        mockCarList,
        mockCarList,
        mockCarList,
      ],
    };
  },
  methods: {
    load() {},
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.chart1);
      // 指定图表的配置项和数据
      let option = {
        // title: {
        //   text: "各城市平均价格 对比图",
        //   left: "center",
        //   bottom: "20",
        // },
        tooltip: {},
        legend: {
          data: ["均价"],
          right: "50",
        },
        xAxis: {
          name: "城市",
          data: [
            "深圳",
            "北京",
            "天津",
            "杭州",
            "上海",
            "包头",
            "南京",
            "郑州",
            "长春",
            "承德",
            { value: "全国", textStyle: { color: "red" } },
            { value: "南昌", textStyle: { color: "#409EFF" } },
          ],
        },
        yAxis: {
          name: "价格",
          scale: true,
        },
        axisPointer: {
          show: true,
        },
        series: [
          {
            name: "均价",
            type: "bar",
            layoutCenter: ["30%", "30%"],
            // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
            layoutSize: 100,
            data: [
              85.86, 71.41, 65.15, 64.09, 46.74, 43.3, 42.41, 39.9, 38.62,
              38.45, 26.24, 17.81,
            ],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.chart2);
      // 指定图表的配置项和数据
      this.options.series[0]["data"] = this.dataList;
      myChart.setOption(this.options);
    },
    changeIndex(index) {
      console.log("----", index);
      this.tuijianIndex = index;
    },
    goCar(car) {
      this.$store.commit("setCar", car);
      this.$router.push({ name: "Car" });
    },
  },
  created() {
    this.load();
  },
  mounted() {
    this.drawChart();
    this.drawChart2();
  },
};
</script>

<style lang="less">
#recommend {
  background-color: white;
  .tows-title {
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 22px;
    line-height: 22px;
    color: #333;
    padding: 0 22px;
    display: inline-block;
    border-left: solid 3px #409eff;
    border-right: solid 3px #409eff;
  }
  .tuijian {
    .tuijian-menu {
      width: 80px;
      margin-right: 28px;
      font-size: 16px;
      color: #999;
      cursor: pointer;
      line-height: 16px;
      margin-top: 10px;
      margin-bottom: 15px;
    }
    .tuijian-menu-on {
      color: #000;
      font-weight: 600px;
    }
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
    .tuijian-bottom {
      margin-top: 10px;
      button {
        width: 248px;
        height: 48px;
        line-height: 24px;
      }
    }
  }
}
</style>
