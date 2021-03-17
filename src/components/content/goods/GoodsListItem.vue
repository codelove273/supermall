<!--  -->
<template>
  <div class="gooditem" @click="goodsitemcilck">
    <div>
      <img :src=" showImage" @load="imgeLoad" />

      <p>{{goodslist.title}}</p>
      <div class="gooditem-text">
        <span>￥</span>
        <span>{{goodslist.price}}</span>

        <span>{{goodslist.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodslist: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  methods: {
    imgeLoad() {
      //判断路由路径决定图片加载完成是否需要发送事件
      if (this.$route.path.indexOf("/home") !== -1) {
        this.$bus.$emit("imageLoad");
      } else if (this.$route.path.indexOf("/detail") !== -1) {
        this.$bus.$emit("detailimageLoad");
      }
    },
    goodsitemcilck() {
      this.$router.push("/detail/" + this.goodslist.iid);
    }
  },
  computed: {
    showImage() {
      return this.goodslist.image || this.goodslist.show.img;
    }
  }
};
</script>

<style  scoped>
.gooditem {
  width: 49%;
  margin-top: 5px;
  padding-bottom: 30px;
  position: relative;
  border: 1px solid #eeeeee;
  border-radius: 5px;
}
.gooditem img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 5px;
}
.gooditem p {
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.gooditem-text {
  position: absolute;
  width: 100%;
  padding: 0 10px;
  bottom: 0;
}
.gooditem-text span:nth-child(1) {
  font-size: 12px;
  font-weight: 700;
  color: #fd3f31;
}
.gooditem-text span:nth-child(2) {
  color: #fd3f31;
}
.gooditem-text span:nth-child(3) {
  margin-left: 17px;
  float: right;
}
.gooditem-text span:nth-child(3)::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 2px;
  margin-bottom: -1px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
