<template>
  <div class="main-conatiner">
    <Header></Header>
    <ArticleList :articleLoading="articleLoading" :articleLists = "articleLists" :showNextPage="showNextPage"></ArticleList>
    <Footer></Footer>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Header from "./../common/home/Header.vue";
import ArticleList from "./../common/home/ArticleList.vue";
import Footer from "./../common/home/Footer.vue";
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
  methods: {
    ...mapMutations(["NOWCOLUMN", "SHOWNEXTPAGE"])
  },
  components: {
    ArticleList,
    Header,
    Footer
  }
};
</script>
<style>
</style>