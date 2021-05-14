<template>
  <div id="index" class="center">
    <!-- 轮播图 -->
    <div class="banner">
      <el-carousel trigger="click" height="350px">
        <el-carousel-item v-for="item in bannerList" :key="item">
          <img :src="item" alt="" height="350px" width="100%" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 爷要买车 -->
    <div class="recommend-brand">
      <div class="r-b-top">
        <a href="/buy">我要买车<i class="el-icon-arrow-right"></i> </a>
      </div>

      <el-row :gutter="20" type="flex" justify="space-around">
        <el-col>
          <a href="/buy?brand=奔驰">
            <img src="@/assets/car_brand/benchi.jpg" alt="" />
            <br />
            <span>奔驰</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?brand=宝马">
            <img src="@/assets/car_brand/baoma.jpg" alt="" />
            <br />
            <span>宝马</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?brand=奥迪">
            <img src="@/assets/car_brand/aodi.jpg" alt="" />
            <br />
            <span>奥迪</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?brand=大众">
            <img src="@/assets/car_brand/dazhong.jpg" alt="" />
            <br />
            <span>大众</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?brand=保时捷">
            <img src="@/assets/car_brand/baoshijie.jpg" alt="" />
            <br />
            <span>保时捷</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?brand=丰田">
            <img src="@/assets/car_brand/fentian.jpg" alt="" />
            <br />
            <span>丰田</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?brand=路虎">
            <img src="@/assets/car_brand/luhu.jpg" alt="" />
            <br />
            <span>路虎</span>
          </a>
        </el-col>
      </el-row>
      <br />
      <el-row :gutter="20" type="flex" justify="space-around">
        <el-col>
          <a href="/buy?price=5">
            <span>3万以下</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?price=5">
            <span>5万以下</span>
          </a>
        </el-col>

        <el-col>
          <a href="/buy?price=10">
            <span>10万以下</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?price=15">
            <span>15万以下</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?price=20">
            <span>20万以下</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?price=25">
            <span>25万以下</span>
          </a>
        </el-col>

        <el-col>
          <a href="/buy?price=25">
            <span>30万以下</span>
          </a>
        </el-col>
      </el-row>
      <br />
      <el-row :gutter="20" type="flex" justify="space-around">
        <el-col>
          <a href="/buy?style=时尚型">
            <span>时尚型</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?style=豪华版">
            <span>豪华版</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?style=舒适型">
            <span>舒适型</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?style=国V">
            <span>国V</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?style=时尚型">
            <span>时尚型</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?style=运动型">
            <span>运动型</span>
          </a>
        </el-col>
        <el-col>
          <a href="/buy?style=SUV">
            <span>SUV</span>
          </a>
        </el-col>
      </el-row>
    </div>

    <!-- 今日推荐 -->
    <div class="recommend">
      <el-row class="recommend-top">
        <el-col><span>今日推荐 </span> </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col class="r-card" :span="6" v-for="item in carList" :key="item.id">
          <el-card :body-style="{ padding: '0 0 15px 0' }" shadow="hover">
            <img :src="item.url" height="168px" width="100%" />
            <div class="r-card-center">
              <span class="r-card-center-title">{{ item.name }}</span>
              <div class="r-card-center-title2">
                {{ item.mileage }}万公里/{{ item.year }}/{{ item.location }}
              </div>
              <div style="margin-top: 6px">
                <span class="r-card-center-price1">{{ item.current_price }}万</span>
                <span class="r-card-center-price2">{{ item.original_price }}万</span >
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
  name: "Index",
  data() {
    return {
      bannerList: [
        require("./../assets/banner-0.png"),
        require("./../assets/banner-1.png"),
        require("./../assets/banner-2.png"),
      ],
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
      ],
    };
  },
  methods: {
    load() {},
  },
  created() {
    this.load();
  },
};
</script>

<style lang="less">
.banner img {
  border-radius: 2px;
}
.recommend-brand {
  background-color: white;
  border-radius: 5px;
  padding: 15px 20px 15px 20px;
  margin-top: 30px;
  .r-b-top {
    text-align: left;
    margin-bottom: 5px;
  }
  img {
    width: 40px;
    height: 40px;
  }
}
.recommend {
  margin: 30px 0 20px 0;
  .recommend-top {
    text-align: center;
    margin-bottom: 30px;
    span {
      font-size: 22px;
      line-height: 22px;
      color: #333;
      padding: 0 22px;
      display: inline-block;
      border-left: solid 3px #409eff;
      border-right: solid 3px #409eff;
    }
  }
  .r-card{
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
</style>
