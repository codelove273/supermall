<!--  -->
<template>
  <div id="right">
    <Scroll ref="scroll1" class="center">
      <goods-list :goods="goodlist"></goods-list>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";

export default {
  name: "carRight",
  components: {
    Scroll,
    GoodsList
  },
  props: {
    goodlist: {}
  },
  mounted() {},
  methods: {
    resh() {
      this.$refs.scroll1.refresh();
      console.log(this.$refs.scroll1);
    },
    scrolltop() {
      this.$refs.scroll1.scrollTo(0, 0);
    }
  }
};
</script>

<style  scoped>
#right {
  float: right;
  width: 75vw;
  height: calc(100vh - 44px - 49px);
}
.center {
  position: relative;
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>
