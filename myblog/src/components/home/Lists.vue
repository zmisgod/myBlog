<template>
  <div>
    <ImageAround></ImageAround>
    <ArticleList :articleLists = "articleLists"></ArticleList>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import ImageAround from './../common/Imagearound.vue'
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
    ImageAround
  }
}
</script>
<style>

</style>
