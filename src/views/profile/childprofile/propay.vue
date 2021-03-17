<!--  -->
<template>
  <div>
    <div id="pay">
      <div class="pay-items" v-for="(item,index) in info " :key="index">
        <div class="item-text">{{item.num}}</div>
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "propay",

  components: {},
  props: {
    info: {
      type: Array,
      default() {
        return [
          { num: "0.00", title: "余额" },
          { num: 0, title: "优惠劵" },
          { num: 0, title: "积分" }
        ];
      }
    }
  }
};
</script>

<style  scoped>
#pay {
  display: flex;
  height: 10vh;
  align-items: center;
  border-bottom: 8px solid #eeeeee;
}
.pay-items {
  flex: 1;
  text-align: center;
}
.item-text {
  font-size: 20px;
  color: rgb(216, 37, 37);
}
</style>
