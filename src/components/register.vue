<template>
  <div>
    <LoginTop middleTop="注册">
      <div
        slot="returnTop"
        @click="$router.push('/login')"
        style="font-size: 12px"
      >
        返回登录
      </div>
    </LoginTop>

    <!-- 用户信息 -->
    <LoginText />
    <!-- 进去按钮 -->
  </div>
</template>
<script>
import LoginTop from "./common/LoginTop";
import LoginText from "./common/LoginText";
export default {
  name: "register",
  components: {
    LoginTop,
    LoginText,
  },
  methods: {},
};
</script>
<style>
</style>