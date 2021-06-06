import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: {
      id: 3601,
      name: "南昌市",
    },
    isLogin: false,
    userInfo: {
      id: 0,
      username: "",
      mobile: "",
      email: "",
    },
    car: {
      id: 9999,
      title: "奥迪A5 2017款 Sportback 40 TFSI 时尚型",
      original_price: 111.59,
      current_prince: 63.80,
      city: "台州",
      mileage: 6.00,
      year: 2019,
      img_url: "/img/qvanchifang.jpg",
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
    routerIndex: "/",
  },
  getters: {
    getCity(state) {
      return state.city;
    },
    getIsLogin(state) {
      return state.isLogin;
    },
    getUserInfo(state) {
      return state.userInfo;
    },
    getCar(state) {
      return state.car;
    },
  },
  mutations: {
    setCity(state, data) {
      state.city = data;
    },
    setIsLogin(state, data) {
      state.isLogin = data;
    },
    setUserInfo(state, data) {
      state.userInfo = data;
    },
    setCar(state, data) {
      state.car = data;
    },
    setRouterIndex(state, data) {
      state.routerIndex = data;
    },
  },
  actions: {},
  modules: {},
});
