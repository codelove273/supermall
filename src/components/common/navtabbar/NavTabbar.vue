<!--  -->
<template>
  <div class="nav_tabbar">
    <div class="nav-left">
      <slot name="nav-left"></slot>
    </div>
    <div class="nav-center">
      <slot name="nav-center"></slot>
    </div>
    <div class="nav-right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavTabbar"
};
</script>

<style  scoped>
.nav_tabbar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.nav-left,
.nav-right {
  width: 40px;
}
.nav-center {
  flex: 1;
}
</style>
