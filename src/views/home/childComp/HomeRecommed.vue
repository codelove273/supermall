<!--  -->
<template>
  <recommend>
    <recommend-item slot="recommed-noworp" v-for="item in recommends" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
      <div class="recommend-text">{{item.title}}</div>
    </recommend-item>
  </recommend>
</template>

<script>
import {
  Recommend,
  RecommendItem
} from "../../../components/common/recommend/index";

export default {
  name: "HomeRecommed",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Recommend,
    RecommendItem
  }
};
</script>

<style  scoped>
.recommend-text {
  padding-top: 5px;
}

.recommend-item img {
  width: 65px;
}
</style>
