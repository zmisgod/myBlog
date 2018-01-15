<template>
  <div>
    <div class="main-frame-container">
      <div class="article-container" v-if="articleLoading">
        <div class="home-lists showan" :key="articleObj.id" v-for="(articleObj, key) in articleLists">
          <p class="a-title" @click="location_article(articleObj.id)"  v-html="articleObj.post_title"></p>
          <p class="a-info"><img src="/static/logo.png" class="user-img" alt=""><span class="a-author" v-text="articleObj.author"></span> <span class="a-post-at">发布于:</span> <span class="a-date" v-text="articleObj.post_date"></span></p>
          <p class="a-content" v-html="articleObj.post_intro"></p>
          <div class="a-tag" v-if="articleObj.tag">
            <a :key="t_id" @click="location_tag(tag.category_id)" v-for="(tag,t_id) in articleObj.tag" v-text="tag.category_name"></a>
          </div>
        </div>
        <md-button v-if="showNextPage" @click="nextPage()" class="md-raised md-primary md-icon-button show-next">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button>
      </div>
       <div class="article-container" v-else>
         <VueContentLoading class="home-lists" :key="key" :binds="value" v-for="(value, key) in loading_dom" :rows="8" :width="800" :height="100" :primary="primaryColor" :speed="2">
          <rect y="0" rx="4" ry="4" width="200" height="12" />
          <circle cx="10" cy="26" r="10"/>
          <rect x="24" y="20" rx="4" ry="4" width="30" height="12" />
          <rect x="60" y="20" rx="4" ry="4" width="70" height="12" />
          <rect y="43" rx="4" ry="4" width="100%" height="12" />
          <rect y="63" rx="4" ry="4" width="50%" height="12" />
          <rect x="760" y="88" rx="4" ry="4" width="40" height="12" />
        </VueContentLoading>
       </div>
      <div class="weather-container"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import VueContentLoading from 'vue-content-loading'
export default {
  props:{
    articleLists:Array,
    showNextPage:Boolean,
    articleLoading:Boolean
  },
  data () {
    return {
      primaryColor: '#bdc3c7',
      loading_dom : [
        1,2,3,4,5,6,7,8,9,10,11,12
      ]
    }
  },
  components:{
     VueContentLoading,
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
      this.COLUMNID({key: 'page', value: 1})
    },
    location_tag(id) {
      this.$router.push({path: `/tag_${id}`})
      this.NOWCOLUMN('tag')
      this.COLUMNID({key: 'id', value: id})
      this.COLUMNID({key: 'page', value: 1})
    },
    nextPage(){
        let nowTem = this.$store.state.blog.nowColumn
        this.NOWCOLUMN(nowTem)
        this.COLUMNID({key:'page', value:++this.$store.state.blog.columnId[nowTem].page})
        if(nowTem == 'tag') {
            this.$store.dispatch("showTagArticle")
        }else if(nowTem == 'category') {
            this.$store.dispatch("showCategoryArticle")
        }else if(nowTem == 'search'){
            this.$store.dispatch("showSearchArticle")
        }else{
            this.$store.dispatch("showIndexArticle")
        }
    }
  }
}
</script>
<style lang="scss">
@keyframes myfirst
{
  0%   {opacity:0;}
  25%  {opacity:0;}
  50%  {opacity:0.5;}
  100% {opacity:1;}
}
.showan{
  animation: myfirst 1s;
}
.main-frame-container{
  margin: 30px 120px 0;
  width: 100%;
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
        color: rgb(50, 50, 93);
        word-break: break-all;
      }
      .a-info{
        color: #81b15b;
        word-break: break-all;
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
        color: rgb(136, 152, 170);
        line-height: 22px;
        word-break: break-all;
      }
      .a-tag{
        padding: 4px 0;
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        a{
          border: 1px solid #eee;
          border-radius: 6px;
          margin: 3px 5px;
          padding: 0 5px;
          color: #2396e0;
          cursor: pointer;
        }
      }
    }
  }
  .loading{
    text-align: center;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin: 30px 10px 0;
    width: 100%;
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
.pre-article{
  width: 100%;
  height: auto;
}
</style>

