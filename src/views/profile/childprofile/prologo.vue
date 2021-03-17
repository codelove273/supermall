<!--  -->
<template>
  <div>
    <div id="logo" v-if="info">
      <div class="left">
        <img src="@/assets/img/profile/头像.svg" alt />
      </div>
      <div class="center">
        <div>登录/注册</div>
        <span>暂无绑定手机号</span>
      </div>
      <div class="right">
        <span>></span>
      </div>
    </div>
    <div id="load" v-else>
      <div class="left">
        <img :src="info.img" alt />
      </div>
      <div class="center">
        <div>{{info.img}}</div>
        <span>暂无绑定手机号</span>
      </div>
      <div class="right">
        <span>></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "prologo",
  props: {
    info: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  mounted() {
    console.log(this.info);
  }
};
</script>

<style  scoped>
#logo,
#load {
  display: flex;
  height: 15vh;
  color: #ffffff;
  background-color: var(--color-tint);
}
.left {
  width: 30vw;
  padding: 5vw;
}
.left img {
  width: 100%;
  border-radius: 50%;
  background-color: #eaeaea;
}
.center {
  flex: 1;
  font-size: 18px;
  padding: 7vw 0 0 0;
}
.right {
  width: 15vw;
  font-size: 18px;
}
.right > span {
  display: inline-block;
  position: relative;
  top: 50%;
  left: 50%;
  font-size: 25px;
  transform: translate(-50%, -50%);
}
</style>
