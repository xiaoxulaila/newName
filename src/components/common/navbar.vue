<template>
  <div class="navbar">
    <div class="logo"><img src="../../assets/logo.png" /></div>
    <div><p class="el-icon-search">123121231</p></div>
    <div>
      <img src="../../assets/default_img.jpg" alt="" />
      <div><p>下载APP</p></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.navbar {
  height: 12.5vw;
  background-color: #fff;
  display: flex;
  .logo {
    width: 120px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
    }
  }
  div:nth-child(2) {
    flex: 1;
    display: flex;
    align-items: center;
    p {
      background-color: #f4f4f4;
      padding: 4px 5px;
      width: 90%;
      border-radius: 10px;
      color: #ccc;
      margin: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 113px;
    img {
      max-width: 24px;
      height: 24px;
      border-radius: 50%;
    }
    p {
      padding: 5px 10px;
      background-color: #fb7299;
      color: #fff;
      font-size: 11px;
      margin: 0 10px;
    }
  }
}
</style>