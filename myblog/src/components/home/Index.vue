<template>
  <div class="main-conatiner">
    <HomeHeader></HomeHeader>
    <ListArticle :articleLists = "articleLists"></ListArticle>
    <HomeFooter></HomeFooter>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import HomeHeader from './../common/HomeHeader.vue'
import ListArticle from './../common/ListArticle.vue'
import HomeFooter from './../common/HomeFooter.vue'
export default {
  mounted(){
    this.$store.dispatch("showIndexArticle")
  },
  computed:{ 
      ...mapGetters([
          'articleLists',
      ])
  },
  components:{
    ListArticle,
    HomeHeader,
    HomeFooter
  }
}
</script>
<style>

</style>
