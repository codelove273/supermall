<!--  -->
<template>
  <div v-if="this.$store.state.cartList.length !== 0 ">
    <div v-for="(item,index) in this.$store.state.cartList" :key="index" class="list">
      <div class="cart-item">
        <span class="radio-style" :class="{ active : item.check == true}" @click="cartclick(index)"></span>
        <span
          class="radio-style radio-cilck"
          :class="{ active : item.check == false}"
          @click="cartclick(index)"
        ></span>
      </div>
      <img :src="item.images" alt class="list-image" />
      <div class="list-text">
        <div class="list-title">{{item.title}}</div>
        <div class="list-desc">{{item.desc}}</div>
        <div class="list-bot">
          <span>{{item.price}}</span>
          <span class="bot-center">x</span>
          <span>
            <button @click="addcount(index)">+</button>
            <span class="list-count">{{item.count}}</span>
            <button @click="lesscount(index)">-</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartList",
  data() {
    return {};
  },

  methods: {
    //修改vuex中选中状态
    cartclick(index) {
      //   this.activeclick[a].check = !this.activeclick[a].check;
      this.$store.state.cartList[index].check = !this.$store.state.cartList[
        index
      ].check;
      //   console.log(this.$store.state.cartList[index].check);
    },
    addcount(index) {
      this.$store.state.cartList[index].count += 1;
    },
    lesscount(index) {
      if (this.$store.state.cartList[index].count > 1) {
        this.$store.state.cartList[index].count -= 1;
      }
      //   console.log(this.$store.state.cartList[index].count);
    }
  }
};
</script>

<style  scoped>
.list {
  display: flex;
  width: 100vw;
  padding: 2vw;
  border-bottom: 1px solid #eaeaea;
}
.cart-item {
  margin: 0 3vw 0 0;
  align-self: center;
}
.cart-radio {
  opacity: 0;
}
.radio-style {
  width: 5vw;
  height: 5vw;
  display: inline-block;
  border: 2px solid #eaeaea;
  border-radius: 50%;
}
.radio-cilck {
  background-color: var(--color-tint);
  background-image: url("~@/assets/img/common/change.svg");
}
.list-image {
  width: 20%;
  border-radius: 3px;
}
.list-text {
  position: relative;
  width: 70%;
  padding-left: 2vw;
}
.list-title {
  padding: 2vw 0;
  font-size: 18px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list-desc {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #aca6a6c0;
}
.list-bot {
  position: absolute;
  right: 0;
  bottom: 0;
}
.list-count {
  display: inline-block;
  width: 8vw;
  text-align: center;
}
.list-bot button {
  display: inline-block;
  width: 20px;
}
.bot-center {
  padding: 0 3vw;
}
.active {
  display: none;
}
</style>
