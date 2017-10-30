<template>
  <div>
    <HomeHeader></HomeHeader>
    <ArticleList :articleLists = "articleLists"></ArticleList>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import HomeHeader from './../common/HomeHeader.vue'
import ArticleList from './../common/Articlelists.vue'
export default {
  name: 'articlelists',
  mounted(){
    this.$store.dispatch("showIndexArticle")
  },
  computed:{ 
      ...mapGetters([
          'articleLists',
      ])
  },
  components:{
    ArticleList,
    HomeHeader
  }
}
</script>
<style>

</style>
