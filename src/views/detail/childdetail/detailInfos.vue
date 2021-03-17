<!--  -->
<template>
  <div class="goods-info" v-if="Object.keys(detailinfo).length !== 0">
    <div class="top-style"></div>
    <div class="title">{{detailinfo.desc}}</div>
    <div class="end-style"></div>
    <div>{{detailinfo.detailImage[0].key}}</div>
    <div v-for="(item,index) in detailinfo.detailImage[0].list " :key="index">
      <img :src="item" alt @load="doload" />
    </div>
  </div>
</template>

<script>
export default {
  name: "detailInfos",
  props: {
    detailinfo: {}
  },
  methods: {
    doload() {
        //判断所有图片都加载完进行事件发送
      this.$emit("doload");
    }
  }
};
</script>

<style  scoped>
.goods-info {
  position: relative;
  border-top: 4px solid #eeeeee;
}
.top-style {
  margin: 15px 10px;
  width: 60px;
  height: 1px;
  background-color: #333;
}
.top-style::before {
  width: 5px;
  height: 5px;
  content: "";
  position: absolute;
  top: 10px;
  background-color: rgb(0, 0, 0);
}
.title {
  margin-bottom: 10px;
}
.end-style {
  width: 60px;
  height: 1px;
  position: absolute;
  right: 10px;
  background-color: #333;
}
.end-style::after {
  position: absolute;
  right: 0px;
  bottom: 1px;
  width: 5px;
  height: 5px;
  content: "";
  background-color: #333;
}
img {
  width: 100%;
}
</style>
