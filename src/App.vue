<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <maintabbar></maintabbar>
  </div>
</template>


<script>
import Maintabbar from "./components/content/Maintabbar/maintabbar";
import request from "./network/request";

export default {
  name: "App",
  components: {
    Maintabbar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
