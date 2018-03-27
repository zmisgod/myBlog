<template>
  <div class="detail">
    <div class="irbbon"></div>
    <div class="main">
      <md-content class="md-elevation-5 main-container md-scrollbar">
        <div class="detail_header">
          <div class="header_container">
            <p class="p_title" v-text="articleObject.post_title"></p>
            <!-- <p class="p_author" @click="seeAuthor(articleObject.author)" v-text="articleObject.author"></p> -->
            <div class="p_tag">
              <md-chip class="md-accent" @click="seeCategory(articleObject.category_id)" v-text="articleObject.category_name"></md-chip>
              <md-chip class="md-primary" v-for="(tag,index) in articleObject.tag" :key="index" @click="seeTag(tag.category_id)" v-text="tag.category_name"></md-chip>
            </div>
          </div>
        </div>
        <div class="p_content main-content" v-html="articleObject.post_content"></div>
        <p class="p_date" v-text="'Posted at ' + articleObject.post_date"></p>
      </md-content>
    </div>
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
      'NOWCATEGORY'
    ]),
    seeAuthor(author_name){
      this.$router.push({path: `/author/${author_name}`})
    },
    seeTag(id){
      this.$router.push({path: `/tag_${id}`})
      this.NOWCOLUMN('tag')
    },
    seeCategory(id) {
      this.NOWCATEGORY(id)
      this.$router.push({path: `/category_${id}`})
      this.NOWCOLUMN('category')
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
  ol, ul {
    padding-left: 50px;
    li{
      padding: 10px 0;
    }
  }
  pre{
    border: 1px solid #eee !important;
    border-radius: 4px;
    overflow: auto;
    box-shadow: 1px 1px 4px #7d2b2b;
    margin: .3em 2em;
    padding-left: 10px;
    code {
      line-height: 2em;
    }
  }
  blockquote{
    border-left: 10px solid #b35353;
    font-style: italic;
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
.irbbon{
  height: 40vh;
  background-color: #4285F4;
  flex-shrink: 0;
  width: 100%;
}
.main{
  margin-top: -30vh;
}
.main-container{
  padding: 1em 2em;
  width: calc(66.66667% - 16px);
  margin: 0 auto;
  border-radius: 2px;
  padding: 80px 56px;
}
.header_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.md-button{
  min-width: 60px;
  min-height: 24px;
  line-height: 24px;
  margin: 5px 3px;
  font-size: 12px;
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
@media all and (max-width: 842px) {
  .main-container{
    padding: 0.1em 0.2em;
    max-width: 768px;
    margin: 0 auto;
    background-color: #fff;
    width: calc(100% - 16px);
    border-radius: 2px;
    padding: 40px 16px;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2);
  }
  .p_title{
    padding: 10px 20px;
  }
}
@media all and (min-width: 842px) {
  .main-content {
    margin: 30px auto;
    color: rgb(66,66,66) !important;
  }
  .md-button{
    min-width: 70px;
    min-height: 30px;
    line-height: 30px;
    margin: 6px 4px;
    background-color: rgba(0,0,0,0.1);
  }
  .p_title{
    font-size: 1.5em;
    line-height: 1.5em;
    font-weight:500;
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
  }
}
</style>