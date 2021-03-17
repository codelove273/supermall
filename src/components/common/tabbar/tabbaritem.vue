<!--  -->
<template>
  <div id="TabBarItem" @click="itemclick">
    <slot v-if="isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="isColorStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: {
    path: String,
    isColor: {
      type: String,
      default: "coral"
    }
  },
  methods: {
    itemclick() {
      this.$router.replace(this.path).catch(err => err);
    }
  },
  computed: {
    //判断当前页面链接这是否存在当前页面路径，不存在返回ture
    isActive() {
      // console.log(this.path);

      return this.$route.path.indexOf(this.path) == -1;
    },
    isColorStyle() {
      return this.isActive ? {} : { color: this.isColor };
    }
  }
};
</script>

<style  scoped>
#TabBarItem {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  color: black;
}
#TabBarItem img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 4px 0 2px 0;
}
</style>
