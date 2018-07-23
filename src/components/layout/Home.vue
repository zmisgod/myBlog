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
      "articleLists",
      "nowColumn",
      "showNextPage",
      "articleLoading"
    ])
  },
  title() {
    return "home view";
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