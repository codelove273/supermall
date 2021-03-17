<!--  -->
<template>
  <div v-if="goodsdetail.title!=null">
    <div class="detail-title">{{goodsdetail.title}}</div>
    <div class="detail-price">
      <span class="n-price">{{goodsdetail.price}}</span>
      <span class="o-price">{{goodsdetail.oldPrice}}</span>
      <span class="detail-des" v-if="goodsdetail.discountDesc">{{goodsdetail.discountDesc}}</span>
    </div>
    <div class="detail-cus">
      <span>{{goodsdetail.columns[0]}}</span>
      <span>{{goodsdetail.columns[1]}}</span>
      <span>{{goodsdetail.services[goodsdetail.services.length-1].name}}</span>
    </div>
    <div class="detail-ser">
      <div v-for="(item,index) in goodsdetail.services.length-1" :key="index">
        <img :src="goodsdetail.services[item-1].icon" alt />
        <span>{{ goodsdetail.services[item-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailInfo",
  props: {
    goodsdetail: {
      default() {}
    }
  }
};
</script>

<style  scoped>
.detail-title {
  margin: 15px 0;
  font-weight: 500;
}
.detail-price {
  padding-left: 5px;
}
.n-price {
  font-size: 20px;
  color: var(--color-high-text);
}
.o-price {
  text-decoration: line-through;
  margin-left: 5px;
  font-size: 14px;
  color: #999;
}
.detail-des {
  margin-left: 5px;
  padding: 2px 5px;
  font-size: 15px;
  border-radius: 100px;
  color: rgb(252, 252, 252);
  background-color: #f13e3a;
}
.detail-cus {
  display: flex;
  padding: 15px 6px 10px;
  justify-content: space-between;
  font-size: 14px;
  color: #999;
  border-bottom: 4px solid #eeeeee;
}
.detail-ser {
  display: flex;
  padding: 10px 6px 15px;
  font-size: 12px;
  justify-content: space-between;
  border-bottom: 4px solid #eeeeee;
}
.detail-ser img {
  width: 12px;
  height: 12px;
}
</style>
