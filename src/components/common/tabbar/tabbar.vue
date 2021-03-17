<!--  -->
<template>
  <div id="TabBar">
      <slot></slot>
  </div>
</template>

<script>
export default {
   name: "tabbar" 
}
</script>

<style  scoped>
#TabBar{
    display: flex;
    background-color: #ffffff;

    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
}

</style>
