<!--  -->
<template>
  <div>
    <nav-tabbar class="nav">
      <div slot="nav-center">个人中心</div>
    </nav-tabbar>
  </div>
</template>

<script>
import NavTabbar from "components/common/navtabbar/NavTabbar";

export default {
  name: "pronav",
  components: {
    NavTabbar
  }
};
</script>

<style  scoped>
.nav {
  color: #ffffff;
  border-bottom: 1px solid #cecccc;
  background-color: var(--color-tint);
}
</style>
