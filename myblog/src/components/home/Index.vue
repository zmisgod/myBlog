<template>
  <div class="main-conatiner">
    <HomeHeader></HomeHeader>
    <ListArticle class="list-article" :articleLists = "articleLists" :showNextPage="showNextPage"></ListArticle>
    <HomeFooter></HomeFooter>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import HomeHeader from './../common/HomeHeader.vue'
import ListArticle from './../common/ListArticle.vue'
import HomeFooter from './../common/HomeFooter.vue'
export default {
  computed:{ 
      ...mapGetters([
          'articleLists',
          'nowColumn',
          'showNextPage'
      ])
  },
  methods:{
     ...mapMutations([
        'NOWCOLUMN',
        'COLUMNID',
        'SHOWNEXTPAGE'
    ]),
  },
  components:{
    ListArticle,
    HomeHeader,
    HomeFooter
  }
}
</script>
<style>
.list-article{
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  background-color: #eee;
}
</style>
