<!--  -->
<template>
  <div id="list">
    <div class="list-item" v-for="(item,index) in info " :key="index">
      <img :src="item.img" alt />

      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "prolist",
  props: {
    info: {
      type: Array,
      default() {
        return [
          { img: "/img/信封.659a2beb.svg", title: "我的消息" },
          { img: "/img/金币.a6f846b4.svg", title: "积分商城" },
          { img: "/img/皇冠.f87565d2.svg", title: "会员卡" },
          { img: "/img/购物车.564ae940.svg", title: "购物车" },
          { img: "/img/手机.a841e71d.svg", title: "app下载" }
        ];
      }
    }
  }
};
</script>

<style  scoped>
.list-item {
  height: 5vh;

  border-bottom: 1px solid #eaeaea;
}
.list-item img {
  width: 22px;
  color: var(--color-tint);
  margin: 2vw 5vw;
  vertical-align: middle;
}
</style>
