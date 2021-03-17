<!--  -->
<template>
  <div class="recommend-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "RecommendItem"
};
</script>

<style  scoped>
.recommend-item {
  width: 100%;
  flex: 1;
}
</style>
