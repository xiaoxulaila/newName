<template>
  <div>
    <div class="LoginTop">
      <div></div>
      <div>{{ middleTop }}</div>
      <div>
        <slot name="returnTop"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["middleTop"],
  data() {
    return {
      // success: false,
      // error: false,
    };
  },
};
</script>
<style  lang="less">
.LoginTop {
  height: 45px;
  background-color: #ffffff;
  display: flex;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.44vw;
  }
}
</style>