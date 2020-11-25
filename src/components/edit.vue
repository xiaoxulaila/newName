<template>
  <div id="edit">
    <!-- 头部文件 -->
    <navbar />
    <!-- 内部文件 -->

    <div id="editContent">
      <div class="uploadfile">
        <el-upload
          :show-file-list="true"
          :on-success="afterRead"
          :before-upload="beforeAvatarUpload"
          class="uplodaimg"
        >
        </el-upload>
        <editMain left="头像">
          <img src="model.user_img" alt="" slot="right" v-if="model.user_img" />
          <img src="../assets/default_img.jpg" alt="" slot="right" v-else />
        </editMain>
      </div>
      <el-button type="text" @click="open">
        <editMain left="昵称">
          <a href="javascript:;" slot="right">{{ model.name }}</a>
        </editMain>
      </el-button>
      <editMain left="UID">
        <a href="" slot="right">王富贵</a>
      </editMain>
      <editMain left="性别">
        <a href="" slot="right">王富贵</a>
      </editMain>
      <editMain left="出生日期">
        <a href="" slot="right">王富贵</a>
      </editMain>
      <editMain left="个性签名">
        <a href="" slot="right">王富贵</a>
      </editMain>
    </div>
    <edit-btn />
  </div>
</template>
<script>
import navbar from "./common/navbar.vue";
import editMain from "./common/editMain.vue";
import editBtn from "./common/editBtn.vue";
export default {
  data() {
    return {
      model: {},
      imageUrl: "",
    };
  },
  components: {
    navbar,
    editMain,
    editBtn,
  },
  methods: {
    // 路由拦截
    async Userinfodata() {
      const res = await this.$http.get(
        "/user/" + localStorage.getItem("id"),
        {}
      );
      this.model = res.data[0];
      console.log(res);
    },
    selectUser() {},
    async afterRead(file) {
      const fromdata = new FormData();
      fromdata.append("file", file.file);
      const res = await this.$http.post("/upload", fromdata);
      this.model.user_img = res.data.url;
      this.UserUpdate();
    },
    // 路由连接
    async UserUpdate() {
      const res = await this.$http.post(
        "/updata/" + localStorage.getItem("id"),
        this.model
      );
      console.log(res);
    },
    // handleAvatarSuccess(res, file) {
    //   this.imageUrl = URL.createObjectURL(file.raw);
    //   console.log(res);
    // },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG && !isPNG) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M && isPNG;
    },
    // 昵称修改
    open() {
      this.$prompt(" ", "昵称修改", {
        confirmButtonText: "修改",
        cancelButtonText: "我不想改了",
        inputPattern: /[\u4e00-\u9fa5]/,
        inputErrorMessage: "昵称格式不正确",
      })
        // 昵称修改成功
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的新昵称是: " + value,
            
          });
        })
        // 昵称修改失败
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
  },
  created() {
    this.selectUser();
    this.Userinfodata();
  },
};
</script>
<style lang="less">
#edit {
  #editContent {
    margin: 15px 0;
    .el-button--text {
      width: 100vw;
      padding: 0;
      margin: 0;
    }
    .uploadfile {
      position: relative;
      overflow: hidden;
      .uplodaimg {
        width: 100vw;
        position: absolute;
        .el-upload {
          width: 100vw;
          height: 200px;
        }
      }
    }
  }
}
</style>