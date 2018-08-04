<template>
  <div class="layout-home">
    <CHeader></CHeader>
    <Containter></Containter>
    <CFooter></CFooter> 
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import CHeader from "./../common/home/Header.vue";
import Containter from "./../common/home/Container.vue";
import CFooter from "./../common/home/Footer.vue";
export default {
  computed: {
    ...mapGetters(["categoryLists", "uri"])
  },
  mounted() {
    this.$store.dispatch("showLinkLists");
  },
  title() {
    if (this.categoryLists != undefined) {
      for (let i = 0; i < this.categoryLists.length; i++) {
        if (this.categoryLists[i].location == this.uri) {
          return this.categoryLists[i].cn;
        }
      }
    }
  },
  components: {
    Containter,
    CHeader,
    CFooter
  }
};
</script>
<style>
.layout-home {
}
</style>