<template>
  <div class="main-conatiner">
    <CHeader></CHeader>
    <ArticleList :articleLoading="articleLoading" :articleLists = "articleLists" :showNextPage="showNextPage"></ArticleList>
    <CFooter></CFooter> 
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import CHeader from "./../common/home/Header.vue";
import ArticleList from "./../common/home/ArticleList.vue";
import CFooter from "./../common/home/Footer.vue";
export default {
  computed: {
    ...mapGetters([
      "categoryLists",
      "articleLists",
      "showNextPage",
      "articleLoading",
      "categoryLists",
      "uri"
    ])
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
    ArticleList,
    CHeader,
    CFooter
  }
};
</script>
<style>
</style>