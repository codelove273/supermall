<!--  -->
<template>
  <div v-if="Object.keys(commentinfo).length !== 0">
    <div class="head">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="info-user">
      <img :src="commentinfo.user.avatar" alt />
      <span>{{commentinfo.user.uname}}</span>
    </div>
    <p class="info">{{commentinfo.content}}</p>
    <img class="info-image" v-for="item in commentinfo.images" :key="item" :src="item" alt />
    <div class="info-other">
      <span>{{commentinfo.created | showDate }}</span>
      <span>{{commentinfo.style}}</span>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/network/detail";

export default {
  name: "detailComment",
  props: {
    commentinfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate(value) {
      //将时间戳转化为date对象
      const date = new Date(value * 1000);
      //将date对象格式化
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>

<style  scoped>
.head {
  padding: 15px 0;
}
.head span:nth-child(1) {
  margin-left: 15px;
}
.head span:nth-child(2) {
  float: right;
  font-weight: 550;
  margin-right: 15px;
}
.info-user img {
  width: 10vw;
  margin-left: 15px;
  border-radius: 50%;
  vertical-align: middle;
}
.info-user span {
  margin-left: 5px;
}
.info {
  padding: 10px 0;
  text-indent: 1em;
}
.info-other {
  padding-bottom: 5px;
  border-bottom: 4px solid #eeeeee;
}
.info-other span {
  padding: 5px;
  color: #bdbaba;
}
.info-image {
  width: 30vw;
  margin-right: 1vw;
}
</style>
