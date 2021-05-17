<template>
  <div id="recommend" class="center">
    啊哈哈
    <div ref="chart1" id="xaxax" style="width: 600px; height: 400px"></div>

    <div ref="chart2" id="xaxax" style="width: 600px; height: 600px"></div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      options: {
          title:{
              text:"二手车价格全国分布图",
              left: "center",},
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
          bottom: 40,
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
          top: 120,
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
            data: [],
          },
        ],
      },
      //echart data
      dataList: [
        {
          name: "北京",
          value: 70.22,
          num:1187,
        },
        {
          name: "天津",
          value: 65.26,
          num:1117,
        },
        {
          name: "河北",
          value: 26.75,
          num:4744,
        },
        {
          name: "山西",
          value: 22.62,
          num:1603,
        },
        {
          name: "内蒙古",
          value: 39.03,
          num:658,
        },
        {
          name: "辽宁",
          value: 31.09,
          num:2518,
        },
        {
          name: "吉林",
          value: 37.26,
          num:1255,
        },
        {
          name: "黑龙江",
          value: 27.01,
          num:1297,
        },
        {
          name: "上海",
          value: 44.44,
          num:1227,
        },
        {
          name: "江苏",
          value: 25.24,
          num:7980,
        },
        {
          name: "浙江",
          value: 25.73,
          num:9183,
        },
        {
          name: "安徽",
          value: 25.61,
          num:2782,
        },
        {
          name: "福建",
          value: 26.17,
          num:3395,
        },
        {
          name: "江西",
          value: 15.67,
          num:2495,
        },
        {
          name: "山东",
          value: 24.03,
          num:8200,
        },
        {
          name: "河南",
          value: 23.27,
          num:3790,
        },
        {
          name: "湖北",
          value: 18.46,
          num:2210,
        },
        {
          name: "湖南",
          value: 26.30,
          num:1417,
        },
        {
          name: "广东",
          value: 28.64,
          num:9442,
        },
        {
          name: "广西",
          value: 18.18,
          num:2210,
        },
        {
          name: "海南",
          value: 18.10,
          num:1121,
        },
        {
          name: "重庆",
          value: 37.19,
          num:1107,
        },
        {
          name: "四川",
          value: 25.95,
          num:2177,
        },
        {
          name: "贵州",
          value: 17.34,
          num:2048,
        },
        {
          name: "云南",
          value: 17.13,
          num:2048,
        },
        {
          name: "陕西",
          value: 17.93,
          num:1178,
        },
        {
          name: "甘肃",
          value: 16.91,
          num:1109,
        },
        {
          name: "青海",
          value: 20.22,
          num:62,
        },
        {
          name: "宁夏",
          value: 22.65,
          num:602,
        },
        {
          name: "新疆",
          value: 20.28,
          num:1106,
        },
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
        title: {
          text: "各城市平均价格 对比图",
          left: "center",
        },
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
            data: [
              85.86,
              71.41,
              65.15,
              64.09,
              46.74,
              43.3,
              42.41,
              39.9,
              38.62,
              38.45,
              26.24,
              17.81,
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
</style>
