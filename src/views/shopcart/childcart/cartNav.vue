<!--  -->
<template>
  <div>
    <nav-tabbar class="nav">
      <div class="nav-center" slot="nav-center">购物车({{cartlength}})</div>
    </nav-tabbar>
  </div>
</template>

<script>
import NavTabbar from "@/components/common/navtabbar/NavTabbar";

import { mapGetters } from "vuex";

export default {
  name: "cartNav",
  components: {
    NavTabbar
  },
  computed: {
    // cartlength() {
    //   return this.$store.getters.cartlength;
    // },
    ...mapGetters(["cartlength"])
  }
};
</script>

<style  scoped>
.nav {
  background-color: var(--color-tint);
}
.nav-center {
  color: #fff;
}
</style>
