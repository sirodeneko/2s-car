<template>
  <div id="admin" class="center">
    <el-tabs type="border-card" class="admin-tab">
      <el-tab-pane label="信息爬取">
        <div class="admin-tab-spider">
          <div class="admin-tab-spider-chart" ref="lineChart"></div>
          <div class="admin-tab-spider-info">
            <div>
              今日爬取数据任务完成，新增<span style="color: red">31</span>条数据
              <el-button
                type="primary"
                plain
                :loading="loading"
                @click="buttonClick"
                :style="{ marginTop: '20px' }"
                >{{ buttonText }}</el-button
              >
            </div>
          </div>
        </div>
      </el-tab-pane>
      <!-- <el-tab-pane label="每日推荐管理">每日推荐管理</el-tab-pane>
      <el-tab-pane label="二手车推荐管理">二手车推荐管理</el-tab-pane> -->
      <el-tab-pane label="用户信息">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="id" label="ID" width="180"> </el-table-column>
          <el-table-column prop="name" label="账号" width="180">
          </el-table-column>
          <el-table-column prop="tag" label="标签">
            <template slot-scope="scope">
              <el-tag disable-transitions>{{ scope.row.tag }}</el-tag>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          small
          layout="prev, pager, next"
          :hide-on-single-page="false"
          :total="total"
          :page-size="pageSize"
          :style="{ marginTop: '20px' }"
          @current-change="pageChange"
        >
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      loading: false,
      buttonText: "重新爬取",
      tableData: [
        { id: 1, name: "小胖" },
        { id: 2, name: "小胖" },
        { id: 3, name: "小胖" },
        { id: 4, name: "小胖" },
        { id: 5, name: "小胖" },
      ],
      total: 5,
      pageSize: 10,
    };
  },
  methods: {
    load() {
      // 调整标签
      this.$store.commit("setRouterIndex", "-1");

      // 给用户加上标签
      for (let i = 0; i < this.tableData.length; i++) {
        this.tableData[i].tag = this.getTag(this.randomNum(1, 4), 1).join(
          " - "
        );
      }
    },
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.lineChart);
      // 指定图表的配置项和数据
      let option = {
        // title: {
        //   text: "各城市平均价格 对比图",
        //   left: "center",
        //   bottom: "20",
        // },
        tooltip: {},
        legend: {
          data: ["每日新增数据"],
          right: "50",
        },
        xAxis: {
          name: "日期",
          data: [
            "5-25",
            "5-26",
            "5-27",
            "5-28",
            "5-29",
            "5-30",
            { value: "6-01", textStyle: { color: "#409EFF" } },
          ],
        },
        yAxis: {
          name: "新增数据",
          scale: true,
        },
        axisPointer: {
          show: true,
        },
        series: [
          {
            name: "每日新增数据",
            type: "line",
            layoutCenter: ["30%", "30%"],
            // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
            layoutSize: 100,
            data: [30, 32, 11, 25, 16, 27, 31],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    buttonClick() {
      this.loading = true;
      this.buttonText = "爬取中~";
    },
    getTag(num, flag) {
      let result = [];
      let tagList = [
        ["南昌", "北京", "上海", "西安", "东莞", "吉安", "赣州", "景德镇"],
        [
          "宝马",
          "奔驰",
          "路虎",
          "现代",
          "雪佛兰",
          "大众",
          "别克",
          "红色",
          "舒适",
          "越野",
          "家用",
          "练习",
        ],
        ["10万", "15万", "20万"],
      ];
      // flag=1表示要city
      if (flag == 1) {
        result.push(tagList[0][this.randomNum(0, tagList[0].length - 1)]);
      }
      num--;
      if (num > 0) {
        result.push(tagList[2][this.randomNum(0, tagList[2].length - 1)]);
      }
      num--;
      while (num > 0) {
        result.push(tagList[1][this.randomNum(0, tagList[1].length - 1)]);
        num--;
      }
      return result;
    },
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
          return 0;
      }
    },
    pageChange(page) {
      console.log(page);
    },
  },
  created() {
    this.load();
  },
  mounted() {
    this.drawChart();
  },
};
</script>

<style lang="less">
#admin {
  .admin-tab {
    margin-top: 20px;
    min-height: 500px;
    .admin-tab-spider {
      display: flex;
      align-items: center;
      padding-top: 20px;
      .admin-tab-spider-chart {
        width: 600px;
        height: 400px;
      }
    }
  }
}
</style>
