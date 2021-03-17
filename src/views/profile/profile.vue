<!--  -->
<template>
  <div>
    <pronav></pronav>
    <prologo></prologo>
    <propay></propay>
    <prolist></prolist>
  </div>
</template>

<script>
import pronav from "./childprofile/pronav";
import prologo from "./childprofile/prologo";
import propay from "./childprofile/propay";
import prolist from "./childprofile/prolist";

export default {
  name: "progile",
  components: {
    pronav,
    prologo,
    propay,
    prolist
  }
};
</script>

<style  scoped>
</style>
