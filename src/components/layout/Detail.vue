<template>
  <div>
    <Detal></Detal>
  </div>
</template>
<script>
import Detal from "./../common/detail/Detail.vue";
export default {
  name: "detail",
  title() {
    return "detail";
  },
  components: {
    Detal
  }
};
</script>
<style>
.pading-left-5 {
  padding-left: 5px;
}
</style>
