<!--  -->
<template>
  <div class="tabcontrol">
    <div
      class="tabcontrol-item"
      v-for=" (item,index) in title"
      :key="item"
      @click="onactive(index)"
    >
      <span :class="{active: index == markindex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      markindex: 0
    };
  },
  methods: {
    onactive(index) {
      this.markindex = index;
      this.$emit("tabcilck", index);
    }
  }
};
</script>

<style  scoped>
.tabcontrol {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 9;
}
.tabcontrol-item {
  flex: 1;
}
.active {
  padding-bottom: 3px;
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}
</style>
