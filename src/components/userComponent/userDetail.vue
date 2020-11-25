<template>
  <div>
    <div id="userDetail">
      <div class="user_img">
        <!-- 头像 -->
        <img :src="userInfo.user_img" alt="" v-if="userInfo.user_img" />
        <img src="../../assets/default_img.jpg" alt="" v-else />
      </div>
      <div class="uesr_edit">
        <div class="uesr_relation">
          <p>
            <span>0</span>
            <br />
            <span class="uesr_relation_text">粉丝</span>
          </p>
          <span class="split"></span>
          <p>
            <span>0</span>
            <br />
            <span class="uesr_relation_text">关注</span>
          </p>
          <span class="split"></span>
          <p>
            <span>0</span>
            <br />
            <span class="uesr_relation_text">获赞</span>
          </p>
        </div>
        <div @click="$router.push('/edit')">
          <div class="user_editBtn">编辑资料</div>
        </div>
      </div>
    </div>
    <div class="oneself">
      <!-- 名称 -->
      <div class="oneselfName">{{ userInfo.name }}</div>
      <!-- 介绍 -->
      <div class="oneselfMotto">
        <span v-if="userInfo.user_desc">{{ userInfo.user_desc }}</span>
        <span v-else>这个人很懒，什么也没有留下</span>
        <span class="oneselfMottoBut">收起</span>
      </div>
      <!-- id号 -->
      <div class="oneselfUid"><span>uid:636962556</span></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["userInfo"],
  created() {
    console.log(this.userInfo);
  },
};
</script>
<style lang="less">
#userDetail {
  background-color: #fff;
  padding: 0 12px;
  display: flex;
  .user_img {
    width: 84px;
    height: 84px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    top: -10px;
    img {
      width: 84px;
    }
  }
  .uesr_edit {
    margin: 5px 0 0 10px;
    width: 250px;
    .uesr_relation {
      display: flex;
      p {
        flex: 1;
        text-align: center;
        .uesr_relation_text {
          color: #999;
          font-size: 2.93333vw;
        }
      }
      .split {
        margin-top: 10px;
        width: 1px;
        height: 4.26667vw;
        background: #e7e7e7;
      }
    }
    .user_editBtn {
      border: 1px solid #fb7a9f;
      border-radius: 5px;
      text-align: center;
      padding: 2.5px 0;
      margin: 5px 0;
      color: #fb7a9f;
    }
  }
}
.oneself {
  background-color: #fff;
  padding-left: 10px;
  .oneselfName {
    font-size: 4.8vw;
    padding: 5px 0;
  }
  .oneselfMotto {
    clear: both;
    span:nth-child(1) {
      font-size: 3.46vw;
      float: left;
      width: 90%;
      color: #999;
    }
    .oneselfMottoBut {
      float: right;
      width: 10%;
      color: #1389bf;
      font-size: 3.2vw;
    }
  }
  .oneselfUid {
    color: #505050;
    font-size: 1.4vw;
    padding: 5px 0;
    border-radius: 0.53333vw;
    display: inline-block;
    span {
      background: #f4f4f4;
      display: none;
    }
  }
}
</style>