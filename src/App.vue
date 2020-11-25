<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="less">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
  .el-message-box {
    width: 300px;
  }
}
p {
  margin: 0;
  padding: 0;
}
</style>
