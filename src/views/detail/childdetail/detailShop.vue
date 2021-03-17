<!--  -->
<template>
  <div v-if="shopdetail.name != null">
    <div class="log">
      <img :src="shopdetail.logo" />
      <span>{{shopdetail.name}}</span>
    </div>
    <div class="info">
      <div class="info-left">
        <div class="info-flex">
          <div class="addwidth">{{shopdetail.sells|saveNum}}</div>
          <div>总销量</div>
        </div>
        <div class="info-flex">
          <div class="addwidth">{{shopdetail.goodsCount}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="info-right flex">
        <div v-for="(item,index) in shopdetail.score" :key="index">
          <span class="right-flex">{{item.name}}</span>
          <span class="right-flex textscorecolor" :class="{istext:item.isBetter}">{{item.score}}</span>
          <span
            class="right-flex textcolor scroecolor"
            :class="{isbetter:item.isBetter}"
          >{{item.isBetter ? "高" : "低"}}</span>
        </div>
      </div>
    </div>
    <div class="info-warp">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailShop",
  props: {
    shopdetail: {}
  },

  filters: {
    saveNum(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style  scoped>
.log {
  padding: 20px 0 20px 15px;
  font-size: 18px;
}
.log img {
  width: 45px;
  height: 45px;
  margin-right: 15px;
  border-radius: 50%;
  vertical-align: middle;
}
.info {
  display: flex;
}
.info-left {
  margin: 10px 0;
  width: 45%;

  display: flex;
  flex: 1;
  text-align: center;
  justify-content: space-evenly;

  border-right: 1px solid #ececec;
}

.addwidth {
  margin-bottom: 5px;
  font-weight: 600;
}

.info-right {
  margin-left: 20px;
  width: 45%;
  font-size: 12px;
}
.info-right > div > span:nth-child(2) {
  margin: 5px 20px;
  display: inline-block;
  width: 30px;
}
.textscorecolor {
  color: #15e743;
}
.istext {
  color: #e91010;
}
.textcolor {
  color: #fff;
}
.scroecolor {
  background-color: #15e743;
}
.isbetter {
  background-color: #e91010;
}
.info-warp {
  /* margin-bottom: 100px; */
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
}
.info-warp span {
  display: inline-block;
  padding: 6px 30px;
  background-color: #f2f2f2;
  border-radius: 100px;
}
</style>
