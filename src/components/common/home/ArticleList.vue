<template>
  <div class="list-article md-scrollbar" >
    <div class="main-frame-container">
      <div class="article-container" v-if="articleLists.length != 0">
        <div  class="home-lists showan" :key="articleObj.id" v-for="(articleObj) in articleLists">
          <p class="a-title" @click="location_article(articleObj.id)"  v-html="articleObj.post_title"></p>
          <p class="a-info"><span class="a-author" v-text="'作者:' + articleObj.author"></span> <span class="a-post-at">发布于:</span> <span class="a-date" v-text="articleObj.post_date"></span></p>
          <p class="a-content" v-html="articleObj.post_intro"></p>
          <div class="a-tag" v-if="articleObj.tag">
            <a :key="t_id" @click="location_tag(tag.category_id)" v-for="(tag,t_id) in articleObj.tag">
              <md-chip class="md-transparent"  v-text="tag.category_name"></md-chip>
            </a>
          </div>
        </div>
        <md-button v-if="showNextPage" @click="nextPage()" class="md-raised md-primary md-icon-button show-next">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button>
      </div>
      <div v-else>
        <NotFound :showIcon="showIcon" :showBackUrl="showBackUrl" :showBackurlBotton="showBackurlBotton" :showLabel="showLabel" :showDescription="showDescription"></NotFound>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import VueContentLoading from "vue-content-loading";
import NotFound from "./../../layout/NotFound.vue";
export default {
  data() {
    return {
      showBackUrl: "/",
      showBackurlBotton: "Home",
      showDescription: "There's nothong here",
      showLabel: "OOPS",
      showIcon: "home"
    };
  },
  props: {
    articleLists: Array,
    showNextPage: Boolean,
    articleLoading: Boolean
  },
  components: {
    NotFound
  },
  methods: {
    ...mapMutations(["NOWCOLUMN"]),
    location_article(id) {
      this.$router.push({ path: `/detail_${id}` });
    },
    location_tag(id) {
      this.$router.push({ path: `/tag_${id}` });
    },
    nextPage() {
      let uri = this.$store.state.blog.uri;
      let params = this.$store.state.blog.queryString;
      if (params.page === undefined) {
        params.page = 2;
      } else {
        params.page = Number(params.page) + 1;
      }
      let qstring = "";
      for (let i in params) {
        if (i !== "") {
          qstring += i + "=" + params[i] + "&";
        }
      }
      this.$router.push({ path: uri + "?" + qstring });
    }
  }
};
</script>
<style lang="scss">
@keyframes myfirst {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.showan {
  animation: myfirst 1s;
}
.list-article {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  background-color: #f6f6f6;
}
.main-frame-container {
  margin: 30px 40px 0;
  width: 100%;
  .article-container {
    background-color: #fff;
    padding: 30px 50px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    .show-next {
      position: absolute;
      width: 60px;
      height: 60px;
      right: 150px;
    }
    .home-lists {
      padding: 20px 20px;
      border-bottom: 1px solid #d6d6d6;
      .a-title {
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        padding: 10px 0;
        color: rgb(50, 50, 93);
        word-break: break-all;
      }
      .a-info {
        color: #81b15b;
        word-break: break-all;
        .a-post-at {
          font-size: 12px;
        }
        img.user-img {
          border-radius: 50%;
          width: 20px;
          height: 20px;
          margin: 0 5px;
        }
        .a-author {
        }
        .a-date {
        }
      }
      .a-content {
        padding: 5px 0;
        color: rgb(136, 152, 170);
        line-height: 22px;
        word-break: break-all;
      }
      .a-tag {
        padding: 4px 0;
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        a {
          margin: 3px 5px;
          cursor: pointer;
        }
      }
    }
  }
  .loading {
    text-align: center;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .weather-container {
    // width: 500px;
    // height: 500px;
    // display: flex;
    // background-color: #000;
  }
}
@media all and (max-width: 1023px) {
  .main-frame-container {
    margin: 0;
    width: 100%;
    .article-container {
      background-color: #fff;
      padding: 0px 5px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      .show-next {
        position: absolute;
        width: 60px;
        height: 60px;
        right: 20px;
        bottom: 80px;
      }
    }
  }
}
.pre-article {
  width: 100%;
  height: auto;
}
</style>