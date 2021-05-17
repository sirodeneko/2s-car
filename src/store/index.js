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
  },
  actions: {},
  modules: {},
});
