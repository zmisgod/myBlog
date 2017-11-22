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
    ...mapMutations([
        'NOWCOLUMN',
        'COLUMNID',
        'NOWCATEGORY'
    ]),
    seeAuthor(author_name){
      this.$router.push({path: `/author/${author_name}`})
    },
    seeTag(id){
      this.$router.push({path: `/tag_${id}`})
      this.NOWCOLUMN('tag')
      this.COLUMNID({key: 'id', value: id})
    },
    seeCategory(id) {
      this.NOWCATEGORY(id)
      this.$router.push({path: `/category_${id}`})
      this.NOWCOLUMN('category')
      this.COLUMNID({key: 'id', value: id})
    }
  }
}
</script>
<style lang="scss">
.main-content {
  font-size: 1em;
  border-bottom: 1px solid #fff;
  overflow: auto;
  word-break: break-all;
  margin-top: 30px;
  p{
    padding: .3em 2em;
    line-height: 2em;
    color:#444343;
  }
  h1,h2,h3,h4,h5,h6{
    padding: 20px 0;
    color: #b35353;
  }
  strong{
    padding: 20px 0;
    color: #b35353;
  }
  pre{
    border: 1px solid #eee !important;
    border-radius: 4px;
    overflow: auto;
    box-shadow: 1px 1px 4px #7d2b2b;
    margin: .3em 2em;
    code {
      line-height: 2em;
    }
  }
  blockquote{
    border-left: 10px solid #b35353;
  }
  img {
    display: flex;
    margin: 20px 0;
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
.md-theme-default code:not(.hljs) {
    background-color: rgba(255, 255, 255, 0) !important;
    color: rgb(113, 50, 187) !important;
    border-radius: 2px !important;
}
body.md-theme-default,.main-content,.components-container {
    background-color: #fff;
    word-break: break-all;
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
@media all and (min-width: 1024px) {
  .main-content {
    max-width: 1024px;
    margin: 30px auto;
  }
}
.header_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1024px;
    margin: 0 auto;
}
.md-button{
  min-width: 60px;
  min-height: 24px;
  line-height: 24px;
  margin: 5px 3px;
  font-size: 12px;
}
.detail_header{
  height: 222px;
  background-color: #4e95ff;
  color: #fff;
  display: flex;
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
  border-bottom: 1px solid #eee
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
    height: 222px;
    background-color: #4e95ff;
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 1em 2em;
  }
  .p_title{
    font-size: 1.5em;
    line-height: 1.5em;
  }
  .p_title, .p_author, .p_tag {
    padding: 6px 0;
  }
  .p_author{
    cursor: pointer;
    font-size: 1.2em;
  }
  .p_date{
    text-align: right;
    font-size: 1em;
    padding-right: 2em;
  }
  .p_content {
    font-size: 1.2em;
    padding: 1em 2em;
  }
}
</style>
