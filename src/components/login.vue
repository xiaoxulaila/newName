<template>
  <div>
    <LoginTop middleTop="登录">
      <div
        slot="returnTop"
        @click="$router.push('/register')"
        style="font-size: 12px"
      >
        返回注册
      </div>
    </LoginTop>

    <!-- 用户信息 -->
    <loginMain />
    <!-- 进去按钮 -->
  </div>
</template>
<script>
import LoginTop from "./common/LoginTop";
import loginMain from "./common/loginMain";
export default {
  name: "register",
  components: {
    LoginTop,
    loginMain,
  },
  methods: {},
};
</script>
<style>
</style>
