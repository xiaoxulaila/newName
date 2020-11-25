<template>
  <div class="hello">
    <button @click="getData()">请求数据</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    //获取数据
    getData() {
      axios
        .get("http://112.74.99.5:3000/web/api/category/")
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log("error", error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
