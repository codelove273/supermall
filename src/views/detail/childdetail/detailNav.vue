<!--  -->
<template>
  <nav-tabbar>
    <div slot="nav-left" @click="backcilck">
      <img src="~@/assets/img/detail/back.svg" alt class="detailimg" />
    </div>
    <div slot="nav-center" class="detail-nav-center">
      <span
        v-for="(item,index) in title"
        :key="index"
        :class="{active: currentIndex === index}"
        @click="detailcilck(index)"
      >{{item}}</span>
    </div>
  </nav-tabbar>
</template>

<script>
import NavTabbar from "@/components/common/navtabbar/NavTabbar";

export default {
  name: "detailNav",
 
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavTabbar
  },
  methods: {
    detailcilck(index) {
      let detailindex = index;
      this.currentIndex = index;
      this.$emit("detailcilck", detailindex);
    },
    backcilck() {
      this.$router.back();
    }
  }
};
</script>

<style  scoped>
.detail-nav-center {
  display: flex;
}
.detail-nav-center span {
  flex: 1;
  font-size: 13px;
}
.active {
  color: var(--color-high-text);
}
.detailimg {
  margin-top: 10px;
}
</style>
