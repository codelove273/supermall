<!--  -->
<template>
  <div class="goodlist">
    <goods-list-item :goodslist="item" v-for="(item,index) in goods.list " :key="index" />
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    GoodsListItem
  }
};
</script>

<style  scoped>
.goodlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: var(--color-background);
}
</style>
