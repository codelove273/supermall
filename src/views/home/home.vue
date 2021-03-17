<!--  -->
<template>
  <div id="home">
    <nav-tabbar class="home-nav">
      <div slot="nav-center">购物街</div>
    </nav-tabbar>
    <tab-control
      class="tab-top"
      :title="['流行','爆款','时尚']"
      @tabcilck="tabclick"
      v-show="tabcontrolshow"
      ref="tabcontrol2"
    ></tab-control>

    <scroll
      class="contenr"
      ref="scroll"
      @scroll="showback"
      @pullingUp="getHomeGoods(goodtype)"
      :probeType="2"
      :pullUpLoad="true"
    >
      <home-swiper :banners="banners" ref="homeswiper" @SwipperImageLoad="SwipperImageLoad"></home-swiper>
      <home-recommed :recommends="recommends"></home-recommed>
      <feature-view></feature-view>

      <tab-control :title="['流行','爆款','时尚']" @tabcilck="tabclick" ref="tabcontrol1"></tab-control>
      <goods-list :goods="showgood"></goods-list>
    </scroll>

    <back-top @click.native="backtop" v-show="isshow"></back-top>
  </div>
</template>

<script>
// 导航栏模块
import NavTabbar from "@/components/common/navtabbar/NavTabbar";
// 导航列表模块
import TabControl from "@/components/content/tabcontrol/TabControl";
// 滑动组件模块
import Scroll from "components/common/scroll/Scroll.vue";
//backtop模块
import BackTop from "components/common/backtop/BackTop.vue";

// 轮播图模块
import HomeSwiper from "./childComp/HomeSwiper";
// 推荐信息模块
import HomeRecommed from "./childComp/HomeRecommed";
//本周流行模块
import FeatureView from "./childComp/FeatureView";
// 商品模块
import GoodsList from "@/components/content/goods/GoodsList";

import { getHomeBanner, getHomeGood } from "../../network/home";

export default {
  name: "home",
  components: {
    NavTabbar,
    TabControl,
    Scroll,
    BackTop,

    HomeSwiper,
    HomeRecommed,
    FeatureView,
    GoodsList
  },
  data() {
    return {
      //轮播图数据
      banners: [],
      // 推荐信息数据
      recommends: [],
      // 商品数据
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      // 商品类型标识
      goodtype: "pop",
      //滑动按钮显示控制
      isshow: false,
      ispull: true,
      //获取加载高度
      tabcontroltop: null,
      //控制吸顶导航栏显示
      tabcontrolshow: false
    };
  },
  //发送网络请求
  created() {
    // 请求轮播图数据
    this.getHomeBanners();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //通过事件主线 监听图片加载刷新滑动
    const refresh = this.debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("imageLoad", () => {
      this.$refs.scroll && refresh();
    });
  },
  // updated() {
  //   console.log(this.$refs.tabcontrol1.$el.offsetTop);
  // },
  methods: {
    //数据请求
    getHomeBanners() {
      getHomeBanner().then(res => {
        // console.log(res.data.data.banner.list);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        // console.log(res);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page;
      // console.log("发送前：" + this.goods[type].page);

      getHomeGood(type, page)
        .then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.data.list);
        })
        .then(() => {
          this.$refs.scroll.refresh();
          // console.log(this.$refs.scroll.refresh);
        });
      this.goods[type].page += 1;
      // console.log(this.goods[type].page);
    },
    // 切换商品请求类型
    tabclick(index) {
      // console.log(index);

      switch (index) {
        case 0:
          this.goodtype = "pop";
          break;
        case 1:
          this.goodtype = "new";
          break;
        case 2:
          this.goodtype = "sell";
          break;
      }
      //使控制点击样式的变量相等
      this.$refs.tabcontrol1.markindex = index;
      this.$refs.tabcontrol2.markindex = index;
      // console.log(this.goodtype);
    },
    //滑动显示返回按钮与吸顶展示
    showback(position) {
      this.isshow = position.y < -1000;
      this.tabcontrolshow = position.y < -this.tabcontroltop;
    },
    //返回顶部
    backtop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
      // console.log(this.$refs.scroll);
      // console.log(this.$refs.abc);
    },
    // 防抖函数
    debounce(fnc, daly) {
      let time = null;
      return function() {
        if (time) {
          clearTimeout(time);
        }
        time = setTimeout(() => {
          fnc.apply(this, arguments);
          time = null;
        }, daly);
      };
    },
    //控制吸顶展示
    SwipperImageLoad() {
      this.tabcontroltop = this.$refs.tabcontrol1.$el.offsetTop;
    }
  },
  computed: {
    showgood() {
      return this.goods[this.goodtype];
    }
  }
};
</script>

<style  scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.tab-top {
  position: fixed;
  top: 44px;
  right: 0;
  left: 0;
}
.contenr {
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>



