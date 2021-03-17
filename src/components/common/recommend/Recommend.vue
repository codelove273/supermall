<!--  -->
<template>
  <div id="recommend">
    <slot name="recommed-noworp"></slot>
    <slot name="recommed-worp"></slot>
  </div>
</template>

<script>
export default {
  name: "Recommend"
};
</script>

<style  scoped>
#recommend {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);

  padding: 10px 0 12px;
  border-bottom: 8px solid #eeeeee;
}
</style>
