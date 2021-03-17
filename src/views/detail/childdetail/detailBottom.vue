<template>
  <div id="detail_bottom_bar">
    <div class="bottom_left">
      <div class="service">
        <i class="icon"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="icon"></i>
        <span>店铺</span>
      </div>
      <div class="collect">
        <i class="icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom_right">
      <div class="cart" @click="addToCart">
        加入购物车
      </div>
      <div class="buy">
        购买
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    addToCart() {
      this.$emit("addEvent");
    }
  }
};
</script>
<style scoped>
#detail_bottom_bar {
  font-size: 14px;
  display: flex;
  position: fixed;
  background-color: #fff;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 49px;
  text-align: center;

}
.bottom_left {
  display: flex;
  flex: 1;
  text-align:center;
  line-height:49px
}
.bottom_left > div {
  flex: 1;
  border-right: 1px solid rgba(128, 128, 128, 0.2);
}

.bottom_right {
  display: flex;
  flex: 1;
}
.bottom_right > div {
  flex: 1;
  line-height: 49px;
}
.cart {
  background-color: rgb(255, 174, 0);
}
.buy {
  background-color: var(--color-tint);
  color: white;
}
</style>