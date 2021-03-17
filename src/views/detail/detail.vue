<!--  -->
<template>
  <div id="detail">
    <detail-nav ref="nav" @detailcilck="detailcilck"></detail-nav>
    <scroll class="conter" ref="scroll2" @scroll="showback" :probeType="3">
      <detail-swiper :topimg="topimg"></detail-swiper>
      <detail-info :goodsdetail="goodsdetail"></detail-info>
      <detail-shop :shopdetail="shopdetail"></detail-shop>
      <detail-infos ref="datailInfos" :detailinfo="detailinfo" @doload="doload"></detail-infos>
      <detail-param ref="datailParms" :GoodParams="GoodParams"></detail-param>
      <detail-comment ref="datailComment" :commentinfo="commentinfo"></detail-comment>
      <Goods-list ref="datailGood" :goods="recommendDate"></Goods-list>
    </scroll>
    <back-top v-show="showbackimage" @click.native="backtop"></back-top>
    <detail-bottom @addEvent="addevent"></detail-bottom>
  </div>
</template>

<script>
//顶部导航栏模块
import detailNav from "./childdetail/detailNav";
//轮播图
import detailSwiper from "./childdetail/detailSwiper";
//商品信息
import detailInfo from "./childdetail/detailInfo";
//店铺信息
import detailShop from "./childdetail/detailShop";
//滑动组件
import Scroll from "components/common/scroll/Scroll";
//推荐详情
import detailInfos from "./childdetail/detailInfos";
//商品信息模块
import detailParam from "./childdetail/detailParam";
//商品评价
import detailComment from "./childdetail/detailComment";
//商品推荐可以复用goodlist组件
import GoodsList from "@/components/content/goods/GoodsList";
//返回顶部
import BackTop from "@/components/common/backtop/BackTop";
//
import detailBottom from "./childdetail/detailBottom";

import { getdetail, getRecommend, Shop, GoodParams } from "@/network/detail";

export default {
  name: "detail",
  components: {
    detailNav,
    detailSwiper,
    detailInfo,
    detailShop,
    Scroll,
    detailInfos,
    detailParam,
    detailComment,
    GoodsList,
    BackTop,
    detailBottom
  },
  data() {
    return {
      id: null,
      topimg: [],
      goodsdetail: {
        title: null,
        price: null,
        oldPrice: null,
        lowNowPrice: null,
        discountDesc: null,
        columns: null,
        services: null
      },
      shopdetail: {},
      detailinfo: {},
      GoodParams: {},
      commentinfo: {},
      recommendDate: {},
      datailoffset: {
        parmsset: null,
        commentset: null,
        goodset: null
      },
      showbackimage: false,
      fo: null,
      controlcilck: 99,
      off: 0,
      showclick: false
    };
  },
  created() {
    //将动态id赋值
    this.id = this.$route.params.id;
    //通过id发送请求
    this.getDetailimg(this.id);
    this.getDetailgoods(this.id);
    this.getDetailshops(this.id);
    this.getDetailinfo(this.id);
    this.getGoodParams(this.id);
    this.getcommentinfo(this.id);
    this.getrecommend();
    // this.$refs.scroll.refresh();
  },
  mounted() {
    // console.log(this.$refs.datailInfos);
  },
  updated() {},
  methods: {
    //封装请求方法
    //图片
    getDetailimg(id) {
      getdetail(id).then(res => {
        this.topimg = res.data.result.itemInfo.topImages;
        console.log(res);
      });
    },
    //商品介绍信息
    getDetailgoods(id) {
      getdetail(id).then(res => {
        const itemInfo = res.data.result.itemInfo;
        this.goodsdetail.title = itemInfo.title;
        this.goodsdetail.price = itemInfo.price;
        this.goodsdetail.oldPrice = itemInfo.oldPrice;
        this.goodsdetail.lowNowPrice = itemInfo.lowNowPrice;
        this.goodsdetail.discountDesc = itemInfo.discountDesc;
        this.goodsdetail.columns = res.data.result.columns;
        this.goodsdetail.services = res.data.result.shopInfo.services;
      });
    },
    //店铺信息
    getDetailshops(id) {
      getdetail(id).then(res => {
        this.shopdetail = new Shop(res.data.result.shopInfo);
      });
    },
    //详情信息
    getDetailinfo(id) {
      getdetail(id).then(res => {
        // console.log(res.data.result.detailInfo);

        this.detailinfo = res.data.result.detailInfo;
      });
    },
    //尺寸信息
    getGoodParams(id) {
      getdetail(id).then(res => {
        // console.log(res.data);

        this.GoodParams = new GoodParams(
          res.data.result.itemParams.info,
          res.data.result.itemParams.rule
        );
        // console.log(this.GoodParams);
      });
    },
    //评论信息
    getcommentinfo(id) {
      getdetail(id)
        .then(res => {
          // console.log(res.data.result.rate.list);
          if (res.data.result.rate.cRate !== 0) {
            this.commentinfo = res.data.result.rate.list[0];
          }
        })
        .then(() => {
          this.$refs.scroll2.refresh();
          this.showclick = true;
        });
    },
    //推荐信息
    getrecommend() {
      getRecommend()
        .then(res => {
          // console.log(res.data.data.list);
          this.recommendDate = res.data.data;
          // console.log(this.recommendDate);
        })
        .then(() => {
          this.$refs.scroll2.refresh();
        });
    },
    //监听异步数据是否接收完毕，刷新滑动高度
    doload() {
      this.$refs.scroll2.refresh();
    },
    //实现导航点击跳转
    detailcilck(detailindex) {
      this.getshowTop();
      // console.log(this.datailoffset);
      switch (detailindex) {
        case 0:
          this.$refs.scroll2.scrollTo(0, 0, 500);
          break;
        case 1:
          // console.log(this.fo);
          if (this.fo !== 1) {
            this.$refs.scroll2.scrollTo(
              0,
              -this.datailoffset.parmsset + 44,
              800
            );
            // console.log(-this.datailoffset.parmsset);
          } else {
            this.$refs.scroll2.scrollTo(0, -this.datailoffset.parmsset, 800);
            // console.log(-this.datailoffset.parmsset);
          }
          this.fo = 1;
          break;
        case 2:
          this.$refs.scroll2.scrollTo(0, -this.datailoffset.commentset, 500);
          this.fo = 1;
          break;
        case 3:
          this.fo = 1;
          this.$refs.scroll2.scrollTo(0, -this.datailoffset.goodset, 500);
          break;
      }
    },
    //判断返回图标是否展示
    showback(position) {
      // console.log(position);
      this.showbackimage = position.y < -800;
      //判断scroll是否已经滚动过
      if (this.fo !== 1 && position.y < -1) {
        this.fo = 1;
      }
      //判断当前展示区域位置
      // 如果  大于 0 小于 this.datailoffset.parmsset 赋值为0
      //       大于 this.datailoffset.parmsset < this.datailoffset.commentset 赋值为1
      //       大于 this.datailoffset.commentset < this.datailoffset.goodset 赋值为2
      //       大于 this.datailoffset.goodset 赋值3
      if (this.controlcilck == 99) {
        this.getshowTop();
        this.controlcilck = 0;
        // console.log("打印了方法", position.y, this.datailoffset.goodset);
      }
      if (position.y <= 0 && position.y > -this.datailoffset.parmsset) {
        this.controlcilck = 0;
        this.$refs.nav.currentIndex = this.controlcilck;
      } else if (
        position.y <= -this.datailoffset.parmsset &&
        position.y > -this.datailoffset.commentset
      ) {
        this.controlcilck = 1;
        this.$refs.nav.currentIndex = this.controlcilck;
      } else if (
        position.y <= -this.datailoffset.commentset &&
        position.y > -this.datailoffset.goodset
      ) {
        this.controlcilck = 2;
        this.$refs.nav.currentIndex = this.controlcilck;
      } else if (
        position.y <= -this.datailoffset.goodset &&
        this.datailoffset.goodset !== null
      ) {
        this.controlcilck = 3;
        this.$refs.nav.currentIndex = this.controlcilck;
      }
      // console.log( this.controlcilck,position.y,this.datailoffset.parmsset);
    },
    //返回顶部
    backtop() {
      this.fo = 1;
      this.$refs.scroll2.scrollTo(0, 0, 500);
      this.controlcilck = 0;
    },
    //封装获取高度方法
    getshowTop() {
      //获取各分类数据离顶部距离
      if (this.showclick) {
        this.$refs.scroll2.refresh();
        this.datailoffset.parmsset = this.$refs.datailParms.$el.offsetTop;
        this.datailoffset.commentset = this.$refs.datailComment.$el.offsetTop;
        this.datailoffset.goodset = this.$refs.datailGood.$el.offsetTop;
      }
    },
    addevent() {
      // 获取购物所展示的信息
      const product = {};
      product.id = this.id;
      product.images = this.topimg[0];
      product.title = this.goodsdetail.title;
      product.desc = this.detailinfo.desc;
      product.price = this.goodsdetail.oldPrice;
      // 将购物车信息传入vuex中
      // this.$store.commit("addcart", product);
      console.log(
        this.$store
          .dispatch("backaddcart", product)
          .then(res => console.log(res))
      );
    }
  }
};
</script>

<style  scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 9;
  background-color: #fff;
}
.conter {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>
