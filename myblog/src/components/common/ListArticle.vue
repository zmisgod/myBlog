<template>
  <div class="list-container">
    <div class="article-container">
      <div class="home-lists" :key="articleObj.id" v-for="(articleObj, key) in articleLists">
        <p class="a-title" @click="location_article(articleObj.id)"  v-text="articleObj.post_title"></p>
        <p class="a-info"><span class="a-author" v-text="articleObj.author"></span> / <span class="a-category" v-text="articleObj.category_name"></span> / <span class="a-date" v-text="articleObj.post_date"></span></p>
        <p class="a-content" v-text="articleObj.post_intro"></p>
        <div class="a-tag" v-if="articleObj.tag">
          <a href="" :key="t_id" v-for="(tag,t_id) in articleObj.tag" v-text="tag.category_name"></a>
        </div>
      </div>
    </div>
    <div class="weather-container"></div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  props:{
    articleLists:Array
  },
  methods:{
    ...mapMutations([
      'NOWCOLUMN',
      'COLUMNID'
    ]),
    location_article(id) {
      this.$router.push({path: `/detail_${id}`})
      this.NOWCOLUMN('article')
      this.COLUMNID(id)
    }
  }
}
</script>
<style lang="scss">
.list-container{
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  background-color: #eee;
  .article-container{
    width: 720px;
    background-color: #fff;
    padding: 30px 50px;
    margin: 30px 50px 0;
    .home-lists{
      padding: 20px 0;
      border-bottom: 1px solid #d6d6d6;
      .a-title{
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        padding: 10px 0;
      }
      .a-info{
        color: #81b15b;
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
</style>

