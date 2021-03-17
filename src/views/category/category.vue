<!--  -->
<template>
  <div>
    <car-nav class="nav"></car-nav>
    <cart-left :cartlist="list" ref="left" @isclick="showright"></cart-left>
    <cart-right :goodlist="rightlist" ref="right"></cart-right>
  </div>
</template>

<script>
import carNav from "./childcatgory/catNav";
import cartLeft from "./childcatgory/cartLeft";
import cartRight from "./childcatgory/cartRight";

import { getCategory, getCategoryInfo } from "network/category";
import { getHomeGood } from "network/home";

export default {
  name: "category",
  components: {
    carNav,
    cartLeft,
    cartRight
  },
  data() {
    return {
      list: [],
      page: 1,
      rightlist: {}
    };
  },
  mounted() {
    this.getcategory();
    this.getright(this.page);
  },
  methods: {
    //请求分类左侧信息
    getcategory() {
      getCategory().then(res => {
        this.list = res.data.data.category.list;
        // console.log(res);
      });
    },
    //请求分类右侧信息
    getright(page) {
      getHomeGood("pop", page)
        .then(res => {
          this.rightlist = res.data.data;
          // console.log(res.data.data.list);
          // console.log(page);
        })
        .then(() => {
          this.$refs.right.resh();
          console.log("aaaa");
        });
    },
    showright(index) {
      // console.log(index);
      //使用 index代替 page
      //调用 请求 获取数据
      //将数据传入 goodlist中
      //点击一次 重新发送请求 重新赋值
      this.page = index + 1;
      this.getright(this.page);
      setTimeout(() => {
        this.$refs.right.scrolltop();
      }, 800);
      // console.log(this.rightlist[0].iid, this.page);
    }
  }
};
</script>

<style  scoped>
.nav {
  font-size: 16px;
  color: #ffffff;
  background-color: var(--color-tint);
}
</style>
