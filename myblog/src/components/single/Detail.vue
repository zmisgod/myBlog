<template>
  <div class="detail">
    <div class="detail_header">
      <div class="header_container">
        <p class="p_title" v-text="articleObject.post_title"></p>
        <p class="p_author" @click="seeAuthor(articleObject.author)" v-text="articleObject.author"></p>
        <div class="p_tag">
          <md-button @click="seeCategory(articleObject.category_id)" v-text="articleObject.category_name"></md-button>
          <md-button v-for="(tag,index) in articleObject.tag" :key="index" @click="seeTag(tag.category_id)" v-text="tag.category_name"></md-button> 
        </div>
      </div>
    </div>
    <div class="p_content main-content" v-html="articleObject.post_content"></div>
    <p class="p_date" v-text="'Posted at ' + articleObject.post_date"></p>
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
  },
  methods :{
    seeAuthor(author_name){
      this.$router.push({path: `/author/${author_name}`})
    },
    seeTag(tag_id){
      this.$router.push({path: `/tag_${tag_id}`})
    },
    seeCategory(category_id) {
      this.$router.push({path: `/category_${category_id}`})
    }
  }
}
</script>
<style lang="scss">
.main-content {
  font-size: 1em;
  border: 1px solid #eee;
  overflow: auto;
  p{
    padding: .2em;
    line-height: 1.5em;
  }
  pre{
    border: 1px solid #eee !important;
    border-radius: 4px;
    overflow: auto;
    code {
      line-height: 2em;
      padding-left:10px;
    }
  }
  img {
    display: flex;
  }
  table{
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    overflow: hidden;
    thead {
      th {
        text-align: left;
        padding: 0.6em 1em 0.6em 0;
      }
    }
    tr {
      border-bottom: 1px solid #eee;
      td{
        word-break: keep-all;
        padding: 0.6em 1em 0.6em 0;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.color_author{
    color: #ffc5c5;
    border: 1px solid #ffc5c5;
    background-color: #4e94ff;
    &:hover{
      color: #4e94ff;
      border: 1px solid #4e94ff;
      background-color: #ffc5c5 !important;
      border-radius: 3px;
    }
}
.md-theme-default code:not(.hljs){
  background-color: #fff;
}
@media all and (max-width: 767px) {
  .md-button{
    min-width: 60px;
    min-height: 24px;
    line-height: 24px;
    margin: 5px 3px;
    font-size: 12px;
  }
  .detail_header{
    height: 200px;
    background-color: #4e95ff;
    color: #fff;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 1em 0.5em;
  }
  .p_title{
    font-size: 1.2em;
  }
  .p_author{
    cursor: pointer;
    font-size: 0.8em;
    padding: 0 0.2em;
  }
  .p_date{
    text-align: right;
    font-size: 1em;
    padding-right: 0.5em;
  }
  .p_tag,.p_author{
    padding-top: 0.7em;
  }
  .p_content {
    padding: 1em 0.5em;
  }
}
@media all and (min-width: 768px) {
  .md-button{
    min-width: 70px;
    min-height: 30px;
    line-height: 30px;
    margin: 6px 4px;
    background-color: rgba(0,0,0,0.1);
  }
  .detail_header{
    height: 200px;
    background-color: #4e95ff;
    color: #fff;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 1em 2em;
  }
  .p_title{
    font-size: 1.5em;
  }
  .p_author{
    cursor: pointer;
    font-size: 1.2em;
    padding: 0 0.2em;
  }
  .p_date{
    text-align: right;
    font-size: 1em;
    padding-right: 2em;
  }
  .p_tag, .p_author{
    padding-top: 1.2em;
  }
  .p_content {
    font-size: 1.2em;
    padding: 1em 2em;
  }
}
</style>
