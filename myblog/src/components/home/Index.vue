<template>
  <div class="main-conatiner">
    <HomeHeader></HomeHeader>
    <ListArticle class="list-article" v-if="nowColumn !== 'chat'" :articleLoading="articleLoading" :articleLists = "articleLists" :showNextPage="showNextPage"></ListArticle>
    <Chat v-if="nowColumn === 'chat'"></Chat>
    <HomeFooter></HomeFooter>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import HomeHeader from './../common/HomeHeader.vue'
import ListArticle from './../common/ListArticle.vue'
import HomeFooter from './../common/HomeFooter.vue'
import Chat from './../chat/Index.vue'
export default {
  computed:{ 
      ...mapGetters([
          'articleLists',
          'nowColumn',
          'showNextPage',
          'articleLoading'
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
    HomeFooter,
    Chat
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
