<!--  -->
<template>
  <div class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      }
    },
    pullUpLoad: {
      default() {
        return false;
      }
    }
  },
  mounted() {
    this.bs = new Bscroll(".wrapper", {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // console.log(this.bs);
    this.bs.on("scroll", position => {
      // console.log(position);
      this.$emit("scroll", position);
    });
    this.bs.on("pullingUp", () => {
      this.$emit("pullingUp");
      0;
      this.bs.finishPullUp();
    });
    // this.refresh();
  },
  methods: {
    scrollTo(x, y, time = 300) {
      // console.log(this.bs);
      this.bs.scrollTo(x, y, time);
    },
    refresh() {
      this.bs && this.bs.refresh();
      // console.log("debounce");
    }
  }
};
</script>

<style  scoped>
</style>
