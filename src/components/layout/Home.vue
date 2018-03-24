<template>
  <div class="main-conatiner">
    <Header></Header>
    <ArticleList class="list-article" v-if="nowColumn !== 'chat'" :articleLoading="articleLoading" :articleLists = "articleLists" :showNextPage="showNextPage"></ArticleList>
    <Footer></Footer>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import Header from './../common/home/Header.vue'
import ArticleList from './../common/home/ArticleList.vue'
import Footer from './../common/home/Footer.vue'
export default {
  name: 'home',
  computed:{ 
      ...mapGetters([
          'articleLists',
          'nowColumn',
          'showNextPage',
          'articleLoading'
      ])
  },
  title() {
    return 'home view'
  },
  methods:{
     ...mapMutations([
        'NOWCOLUMN',
        'COLUMNID',
        'SHOWNEXTPAGE'
    ]),
  },
  components:{
    ArticleList,
    Header,
    Footer,
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
