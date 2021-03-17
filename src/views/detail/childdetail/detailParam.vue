<!--  -->
<template>
  <div v-if="Object.keys(GoodParams).length !==0">
    <table class="table-size">
      <tr v-for="(table,index) in GoodParams.sizes[0]" :key="index">
        <td v-for="(item, index) in table" :key="index">{{item}}</td>
      </tr>
    </table>
    <table class="table-info">
      <tr v-for="(table,index) in GoodParams.info" :key="index">
        <td v-for="(item,index) in table" :key="index">{{item}}</td>
      </tr>
    </table>
    <div class="img" v-if="GoodParams.image.length !==0">
      <img :src="GoodParams.image" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "detailParam",
  props: {
    GoodParams: {}
  }
};
</script>

<style  scoped>
.table-size {
  width: 100vw;
  padding-left: 2vw;
  padding-bottom: 1vw;
  text-align: center;
  border-bottom: 4px solid #eeeeee;
}
.table-info {
  width: 100vw;
  padding-left: 2vw;
  padding-bottom: 1vw;
  border-bottom: 4px solid #eeeeee;
}
.table-size > tr > td {
  padding-top: 10px;
}
.table-info td:nth-child(1) {
  width: 28vw;
  padding-top: 10px;
  text-align: center;
}
.table-info td:nth-child(2) {
  padding-top: 10px;
  color: rgb(216, 48, 166);
}
</style>
