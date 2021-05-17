<template>
  <div id="nav">
    <div class="center">
      <router-link to="/" id="logo">俊杰二手车</router-link>
      <el-cascader
        v-model="value"
        :options="options"
        @change="handleChange"
        :show-all-levels="false"
      ></el-cascader>

      <el-menu :default-active="'/'" mode="horizontal" router>
        <el-menu-item index="/"> 首页 </el-menu-item>
        <el-menu-item index="/tuijian"> 二手车推荐 </el-menu-item>
        <el-menu-item index="/buy"> 找车 </el-menu-item>
      </el-menu>
      <div>
        <router-link to="/login" class="login-text" v-show="!isLogin()"
          >登录/注册</router-link
        >
      </div>
      <div>
        <router-link to="/user" class="login-text" v-show="isLogin()"
          >欢迎：{{ userInfo().username }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import cityInfo from "../tools/city.js";

export default {
  name: "Nav",
  props: {
    // msg: String,
  },
  data() {
    return {
      options: cityInfo,
      value: ["36", "3601"],
    };
  },
  methods: {
    test() {
      console.log("test click");
      this.$store.commit("setIsLogin", true);
      this.$store.commit("setUserInfo", { username: "小白菜" });
    },
    handleChange(value) {
      console.log(value);
    },
    isLogin() {
      return this.$store.getters.getIsLogin;
    },
    userInfo() {
      return this.$store.getters.getUserInfo;
    },
  },
};
</script>

<style lang="less">
#nav {
  width: 100%;
  background-color: white;
}
#nav .center {
  padding: 0 30px 0px 30px;
  display: flex;
  align-items: center;
  justify-content: start;
  border-bottom: solid 1px #e6e6e6;
  a {
    font-size: 30px;
    font-weight: 800;
    color: #2c3e50;
  }
  .login-text {
    font-size: 16px;
    font-weight: 400;
  }
  #logo {
    margin-right: 10px;
  }
  .el-input__inner {
    width: 105px;
    border: 0; // 去除未选中状态边框
    outline: none; // 去除选中状态边框
    background-color: rgba(0, 0, 0, 0); // 透明背景
  }
  ul {
    flex-grow: 1;
    border: none;
    li {
      font-weight: 600;
    }
  }
}
</style>
