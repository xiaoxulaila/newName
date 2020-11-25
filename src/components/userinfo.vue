<template>
  <div id="userinfo">
    <!-- 头部文件 -->
    <navbar />
    <!-- banner图片 -->
    <div id="bannerTopNew">
      <img src="../assets/bannerTop_new.png" alt="" />
    </div>
    <!-- 用户数据 -->
    <userDetail :userInfo="model" />
  </div>
</template>
<script>
import navbar from "./common/navbar.vue";
import userDetail from "./userComponent/userDetail.vue";
export default {
  data() {
    return {
      model: {},
    };
  },
  components: {
    navbar,
    userDetail,
  },
  methods: {
    // 路由
    async Userinfodata() {
      const res = await this.$http.get(
        "/user/" + localStorage.getItem("id"),
        {}
      );
      this.model = res.data[0];
      console.log(res);
    },
  },
  created() {
    this.Userinfodata();
  },
};
</script>
<style lang="less">
#userinfo {
  #bannerTopNew {
    width: 100%;
    height: 120px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
</style>