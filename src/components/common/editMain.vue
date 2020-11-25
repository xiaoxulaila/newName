<template>
  <div id="editMain">
    <span>{{ left }}</span>
    <span>
        <slot name="right"/>
    </span>
  </div>
</template>
<script>
export default {
  props: ["left"],
  data() {
    return {};
  },
};
</script>
<style lang="less">
#editMain {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin: 1px 0;
  padding: 10px;
  span:nth-child(1){
      color: #505050;
      display: flex;
      align-items: center;
      font-size: 4vw;
  }
  span:nth-child(2){
      color: #999;
      font-size: 4vw;
      a{
          color: #999;
          font-size: 4vw;
      }
      img{
          width: 12vw;
          height: 12vw;
          border-radius: 50%;
          font-size: 4vw;
      }
  }
}
</style>