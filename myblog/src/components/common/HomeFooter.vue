<template>
  <footer>
      <md-button @click="nextPage()" class="md-raised md-primary md-icon-button show-next">
        <md-icon>keyboard_arrow_right</md-icon>
      </md-button>
  </footer>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  methods:{
      ...mapMutations([
        'NOWCOLUMN',
        'COLUMNID'
    ]),
    nextPage(){
        this.NOWCOLUMN('home')
        this.COLUMNID(++this.$store.state.blog.columnId.home)
        this.$store.dispatch("showIndexArticle")
    }
  }
}
</script>
<style lang="scss" scoped>
footer{
    width: 100%;
    height: 100px;
    background-color: #395762;
    .show-next{
        position: absolute;
        width: 60px;
        height: 60px;
        bottom: 70px;
        left: 698px;
    }
}
</style>
