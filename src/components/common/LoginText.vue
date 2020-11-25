<template>
  <div id="LoginText">
    <el-alert title="注册成功" type="success" center show-icon v-show="success">
    </el-alert>
    <el-alert title="注册失败" type="error" center show-icon v-show="error">
    </el-alert>
    <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
      <div class="LoginTextName">
        <el-form-item label="姓名" prop="name">
          <el-input
            v-model="loginForm.name"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
      </div>
      <div class="LoginTextName">
        <el-form-item label="账号" prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
      </div>
      <div class="LoginTextButton">
        <el-form-item>
          <el-button type="primary" @click="registerLoginForm">注册</el-button>
          <el-button @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  props: [],

  data() {
    return {
      // 表单绑定对象
      loginForm: {
        name: "",
        username: "",
        password: "",
      },
      //表单验证对象
      loginFormRules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
      //注册是否成功提示
      success: false,
      error: false,
    };
  },
  methods: {
    //重置表单
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    // 注册
    registerLoginForm() {
      this.$refs.loginFormRef.validate((a) => {
        if (a) {
          this.$http
            .post("/register", {
              name: this.loginForm.name,
              username: this.loginForm.name,
              password: this.loginForm.password,
            })
            .then((a) => {
              console.log(a);
              a ? (this.success = true) : (this.error = true);
              localStorage.setItem("id", a.data.id);
              localStorage.setItem("token", a.data.objtoken);
              let aRou = a.data.code;
              setTimeout(() => {
                if (aRou === 200) {
                  this.$router.push("/userinfo");
                }
              }, 1000);
            });
        }
      });
    },
  },
};
</script>
<style lang="less">
#LoginText {
  .LoginTextName {
    width: 100%;
    height: auto;
    background-color: #fff;
    margin: 20px 0;
    .el-form-item__label::after,
    .el-form-item__label::before {
      display: none;
    }
    .el-form-item__label {
      padding: 0;
      width: 20%;
      text-align: center;
    }
    .el-input {
      position: absolute;
      top: 0px;
      width: 80%;
      .el-input__inner {
        border: 0px;
      }
    }
  }
  .LoginTextButton {
    text-align: center;
    .el-form-item {
      .el-form-item__content {
        text-align: center;
      }
      .el-button {
        width: 30%;
      }
    }
  }
}
</style>