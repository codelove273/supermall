<!--  -->
<template>
  <div>
    <swiper>
      <swiper-item v-for=" item in banners" :key="item.image">
        <a :href="item.link">
          <img :src="item.image" alt @load="SwipperImageLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array
    }
  },
  methods: {
    SwipperImageLoad() {
      this.$emit("SwipperImageLoad");
    }
  }
};
</script>

<style  scoped>
</style>
