<template>
  <div class="editBtn">
    <div @click="$router.push('/login')">退出登录</div>
    <div @click="$router.push('/userinfo')">返回空间</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less">
.editBtn {
  div {
    margin: 1px 0;
    text-align: center;
    background-color: #fff;
    padding: 10px 0;
    font-size: 3.6vw;
  }
}
</style>