<!--  -->
<template>
  <div id="shop-cart">
    <cart-nav></cart-nav>
    <scroll class="cart-list" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cartBar></cartBar>
  </div>
</template>

<script>
import cartNav from "./childcart/cartNav";
import Scroll from "components/common/scroll/Scroll";
import cartList from "./childcart/cartList";
import cartBar from "./childcart/cartBar";

export default {
  name: "shopcart",
  components: {
    cartNav,
    Scroll,
    cartList,
    cartBar
  },
  actived() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style  scoped>
#shop-cart {
  height: 100vh;
}
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>
