<!--  -->
<template>
  <swiper class="detailSwiper">
    <swiper-item v-for="(item,index) in topimg" :key="index">
      <img :src="item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";

export default {
  name: "detailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topimg: {
      default() {
        return [];
      }
    }
  }
};
</script>

<style  scoped>
.detailSwiper {
  height: 300px;
  overflow: hidden;
}
</style>
