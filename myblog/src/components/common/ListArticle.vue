<template>
  <div>
    <div class="main-frame-container">
      <div class="article-container">
        <div class="home-lists" :key="articleObj.id" v-for="(articleObj, key) in articleLists">
          <p class="a-title" @click="location_article(articleObj.id)"  v-text="articleObj.post_title"></p>
          <p class="a-info"><img src="/static/logo.png" class="user-img" alt=""><span class="a-author" v-text="articleObj.author"></span> <span class="a-post-at">发布于:</span> <span class="a-date" v-text="articleObj.post_date"></span></p>
          <p class="a-content" v-text="articleObj.post_intro"></p>
          <div class="a-tag" v-if="articleObj.tag">
            <a :key="t_id" @click="location_tag(tag.category_id)" v-for="(tag,t_id) in articleObj.tag" v-text="tag.category_name"></a>
          </div>
        </div>
        <md-button v-if="showNextPage" @click="nextPage()" class="md-raised md-primary md-icon-button show-next">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button>
      </div>
      <div class="weather-container"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  props:{
    articleLists:Array,
    showNextPage:Boolean
  },
  methods:{
    ...mapMutations([
      'NOWCOLUMN',
      'COLUMNID'
    ]),
    location_article(id) {
      this.$router.push({path: `/detail_${id}`})
      this.NOWCOLUMN('article')
      this.COLUMNID({key: 'id', value: id})
    },
    location_tag(id) {
      this.$router.push({path: `/tag_${id}`})
      this.NOWCOLUMN('tag')
      this.COLUMNID({key: 'id', value: id})
    },
    nextPage(){
        let nowTem = this.$store.state.blog.nowColumn
        this.NOWCOLUMN(nowTem)
        this.COLUMNID({key:'page', value:++this.$store.state.blog.columnId[nowTem].page})
        if(nowTem == 'tag') {
            this.$store.dispatch("showTagArticle")
        }else if(nowTem == 'category') {
            this.$store.dispatch("showCategoryArticle")
        }else{
            this.$store.dispatch("showIndexArticle")
        }
    }
  }
}
</script>
<style lang="scss">
.main-frame-container{
  margin: 30px 120px 0;
  .article-container{
    background-color: #fff;
    padding: 30px 50px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    .show-next{
      position: absolute;
      width: 60px;
      height: 60px;
      right: 150px;
    }
    .home-lists{
      padding: 20px 0;
      border-bottom: 1px solid #d6d6d6;
      .a-title{
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        padding: 10px 0;
        color: #565555;
      }
      .a-info{
        color: #81b15b;
        .a-post-at{
          font-size: 12px;
        }
        img.user-img {
          border-radius: 50%;
          width: 20px;
          height: 20px;
          margin: 0 5px;
        }
        .a-author{

        }
        .a-date{

        }
      }
      .a-content{
        padding: 5px 0;
        color: #666;
        line-height: 22px;
      }
      .a-tag{
        padding: 4px 0;
        display: flex;
        flex-direction: row-reverse;
        a{
          border: 1px solid #eee;
          border-radius: 6px;
          margin: 0 5px;
          padding: 0 5px;
          color: #2396e0;
          cursor: pointer;
        }
      }
    }
  }
  .weather-container{
    // width: 500px;
    // height: 500px;
    // display: flex;
    // background-color: #000;
  }
}
@media all and (max-width: 1023px) {
  .main-frame-container{
    margin: 30px 20px 0;
    .article-container{
      background-color: #fff;
      padding: 15px 25px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      .show-next{
        position: absolute;
        width: 60px;
        height: 60px;
        right: 40px;
      }
    }
  }
}
</style>

