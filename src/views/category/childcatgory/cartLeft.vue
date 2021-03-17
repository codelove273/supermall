<!--  -->
<template>
  <div id="cart-left">
    <!-- <scroll class="center" ref="scroll"> -->
    <div
      class="cart-list"
      :class="{isactive:index == isshow}"
      v-for="(item,index) in cartlist"
      :key="index"
      @click="isclick(index)"
    >
      <span>{{item.title}}</span>
    </div>
    <!-- </scroll> -->
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "carLeft",
  components: {
    Scroll
  },
  props: {
    cartlist: {
      typr: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isshow: 0
    };
  },

  methods: {
    resh() {
      // this.$refs.scroll.refresh();
    },
    isclick(index) {
      this.isshow = index;
      this.$emit("isclick", index);
    }
  }
};
</script>

<style  scoped>
#cart-left {
  float: left;
  width: 25vw;
  height: calc(100vh - 44px - 49px);
  background-color: #eaeaea;
}
.center {
  height: 100%;
  overflow: hidden;
}
.cart-list {
  height: 5vh;
  text-align: center;
}
.cart-list > span {
  display: inline-block;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
}
.isactive {
  border-left: 2px solid rgb(159, 200, 248);
  background-color: #fff;
}
</style>
