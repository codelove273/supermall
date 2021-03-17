<!--  -->
<template>
  <div class="bar">
    <div class="bar-left">
      <span class="barspan-style" :class="{active: actclick == true}" @click="cartclick"></span>
      <span
        class="barspan-style barspan-cilck"
        :class="{active: actclick == false}"
        @click="cartclick"
      ></span>
      <span>全选</span>
      <span>合计：￥{{price}}</span>
      <span class="bar-right">结算({{this.$store.state.cartList.length}})</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartBar",
  data() {
    return {
      actclick: true
    };
  },
  updated() {
    // console.log("-----");
    this.conentbar();
  },
  methods: {
    cartclick() {
      if (this.actclick) {
        for (let item of this.$store.state.cartList) {
          item.check = false;
        }
      } else {
        for (let item of this.$store.state.cartList) {
          item.check = true;
        }
      }
      this.actclick = !this.actclick;
    },
    conentbar() {
      if (this.$store.state.cartList.find(item => item.check == false)) {
        this.actclick = false;
      } else {
        this.actclick = true;
      }
    }
  },
  computed: {
    price() {
      return this.$store.state.cartList
        .filter(item => {
          return item.check;
        })
        .reduce((pro, item) => {
          let a = item.price.slice(1);
          // console.log(item.price, item.count, a);
          return pro + a * item.count;
        }, 0)
        .toFixed(2);
    }
  }
};
</script>

<style  scoped>
.bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  z-index: 9;
  height: 40px;
  background-color: rgb(228, 224, 224);
}
.bar-left {
  line-height: 10vw;
  vertical-align: middle;
}
.barspan-style {
  position: relative;
  top: 0.5vw;
  width: 4vw;
  height: 4vw;
  margin: 0 2vw;
  display: inline-block;
  border: 2px solid #eaeaea;
  border-radius: 50%;
}
.barspan-cilck {
  background-color: var(--color-tint);
  background-image: url("~@/assets/img/common/change.svg");
  background-repeat: no-repeat;
  background-position: -0.5vw -0.5vw;
}
.bar span:nth-child(3) {
  padding-left: 2vw;
}
.bar-right {
  float: right;
  width: 30vw;
  color: #eaeaea;
  text-align: center;
  background-color: coral;
}
.active {
  display: none;
}
</style>
