<template>
  <div id="login">
    <div class="center">
      <el-row>
        <el-col :span="10" :offset="12">
          <el-card class="login-card">
            <div slot="header">
              <span>{{ pageState.cardText }}</span>
            </div>
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="login-ruleForm"
            >
              <el-form-item label="用户名" prop="username">
                <el-input
                  v-model.number="ruleForm.username"
                  placeholder="电话号码"
                ></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input
                  type="password"
                  v-model="ruleForm.password"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="确认密码"
                prop="checkPass"
                v-if="!pageState.isLogin"
              >
                <el-input
                  type="password"
                  v-model="ruleForm.checkPass"
                  autocomplete="off"
                ></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >提交</el-button
                >
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button
                  style="padding: 3px 0"
                  type="text"
                  @click="changeText"
                >
                  {{ pageState.goText }}
                </el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
//import qs from 'qs';
import { postLogin, postRegister } from "@/api";
export default {
  name: "Login",
  data() {
    var checkNumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("号码不能为空"));
      }
      // setTimeout(() => {
      //   if (!Number.isInteger(value)) {
      //     callback(new Error("请输入数字值"));
      //   } else {
      //     if (value < 18) {
      //       callback(new Error("必须年满18岁"));
      //     } else {
      //       callback();
      //     }
      //   }
      // }, 1000);
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        checkPass: "",
        username: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkNumber, trigger: "blur" }],
      },
      pageState: {
        cardText: "登录",
        goText: "注册",
        isLogin: true,
      },
    };
  },
  methods: {
    load() {
      // 调整标签
      this.$store.commit("setRouterIndex", "-1");
      //this.$axios.get("http://localhost:8080/api/toLogin").then((res) => console.log(res));
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          if (this.pageState.isLogin) {
            console.log("登陆请求");
            // TODO
            postLogin(this.ruleForm)
              .then((res) => {
                console.log("返回值：", res);
                if (res.code != 0 && res.code != 200) {
                  this.$message.error("登陆失败！！！" + res.msg);
                } else {
                  this.$message.success("登陆成功！！！");
                  // 登陆成功
                  this.$store.commit("setIsLogin", true);
                  this.$store.commit("setUserInfo", {
                    username: this.ruleForm.username,
                  });
                  if (this.ruleForm.username == "zs") {
                    this.$router.push({ name: "Admin" });
                  } else {
                    this.$router.push({ name: "Recommend" });
                  }
                }
              })
              .catch((error) => {
                this.$message.error("网络原因，登陆失败！！！");
                console.log("登录失败", error);
              });
          } else {
            console.log("注册请求");
            // TODO
            this.ruleForm.mobile = "默认号码";
            postRegister(this.ruleForm)
              .then((res) => {
                // console.log("返回值：", res);
                if (res.code != 0) {
                  this.$message.error("注册失败！！！" + res.msg);
                } else {
                  this.$message.success("注册成功！！！");
                  // 登陆成功
                  this.changeText();
                }
              })
              .catch((error) => {
                this.$message.error("网络原因，登陆失败！！！");
                console.log("登录失败", error);
              });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    changeText() {
      if (this.pageState.isLogin) {
        this.pageState.isLogin = false;
        this.pageState.cardText = "注册";
        this.pageState.goText = "登录";
      } else {
        this.pageState.isLogin = true;
        this.pageState.cardText = "登录";
        this.pageState.goText = "注册";
      }
    },
  },
  created() {
    this.load();
  },
};
</script>

<style lang="less">
#login {
  background: url("../assets/login-repeat.jpg") no-repeat top center;
  .login-card {
    margin-top: 100px;
    margin-bottom: 100px;
  }
}
</style>
