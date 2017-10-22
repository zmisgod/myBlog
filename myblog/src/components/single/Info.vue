<template>
  <div>
    <div class="p_header">
      <div>
        <p class="p_title" v-text="articleObject.post_title"></p>
        <div class="p_tag">
          <md-button class="color_author" @click="seeAuthor(articleObject.post_author)" v-text="'by ' + articleObject.post_author">
            <md-tooltip md-delay="400" md-direction="top">我的提示</md-tooltip>
          </md-button>
          <md-button>默认</md-button>
          <md-button>主要</md-button>
          <md-button>吸引</md-button>
          <md-button>暖色</md-button>
          <md-button>浓厚</md-button>
        </div>
        <p class="p_date" v-text="articleObject.post_date"></p>
      </div>
    </div>
    <div class="p_content" v-html="articleObject.post_content"></div>
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
    }
  }
}
</script>
<style>
.md-button{
  background-color: rgba(0,0,0,0.1);
}
@media all and (max-width: 767px) {
  .p_header{
    height: 200px;
    background-color: #4e95ff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    padding: 0 0.5em;
  }
  .p_title{
    font-size: 1.2em;
  }
  .p_author{
    text-align: center;
  }
  .p_author span {
    cursor: pointer;
    padding: 0 0.2em;
  }
  .p_date{
    text-align: center;
  }
  .p_author, .p_date{
    padding-top: 0.3em;
  }
  .p_content {
    font-size: 1em;
    padding: 0.5em 0.5em;
    border-bottom: 1px solid #eee
  }
  .p_content p{
    padding: .4em;
    line-height: 1.2em;
  }
  .p_content pre{
    margin: 0.2em 0px;
    overflow-x: scroll;
  }
  .p_content pre code{
    line-height: 2em;
  }
}
@media all and (min-width: 768px) {
  .md-button{
    min-width: 66px;
    min-height: 25px;
    line-height: 25px;
    margin: 6px 4px;
  }
  .p_header{
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
  .color_author{
    color:#ffc5c5;
  }
  .p_author span {
    cursor: pointer;
    font-size: 1.2em;
    padding: 0 0.2em;
  }
  .p_date{
    text-align: right;
    font-size: 1em;
  }
  .p_author, .p_date, .p_tag{
    padding-top: 0.3em;
  }
  .p_content {
    font-size: 1.5em;
    padding: 1em 2em;
    border: 1px solid #eee
  }
  .p_content p{
    padding: .4em;
    line-height: 1.5em;
  }
  .p_content pre{
    margin: 0.4em 0px;
    overflow-x: scroll;
  }
   .p_content pre code {
    line-height: 2em;
   }
}

</style>
