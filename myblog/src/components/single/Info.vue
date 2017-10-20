<template>
  <div>
    <h1 v-text="articleObject.post_title"></h1>
    <p v-text="articleObject.post_author"></p>
    <p v-text="articleObject.post_date"></p>
    <p v-html="articleObject.post_content"></p>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  mounted(){
    this.$store.dispatch("showArticle")
  },
  computed:{
    ...mapGetters([
          'articleObject',
      ])
  }
}
</script>
<style>

</style>
