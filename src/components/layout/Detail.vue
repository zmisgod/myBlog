<template>
  <div>
    <Detail></Detail>
  </div>
</template>
<script>
import Detail from "./../common/detail/Detail.vue";
export default {
  name: "detail",
  title() {
    return "detail";
  },
  components: {
    Detail
  }
};
</script>
<style>
.pading-left-5 {
  padding-left: 5px;
}
</style>
