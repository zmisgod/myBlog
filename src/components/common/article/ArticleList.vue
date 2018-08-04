<template>
    <div class="article-container" v-if="articleLists.length != 0">
        <div  class="article-list" :key="articleObj.id" v-for="(articleObj) in articleLists">
            <h1 class="title" @click="location_article(articleObj.id)"  v-html="articleObj.post_title"></h1>
            <p class="info"><span class="a-author" v-text="'作者:' + articleObj.user_name"></span> <span class="a-post-at">发布于:</span> <span class="a-date" v-text="articleObj.created_at"></span></p>
            <p class="intro" v-html="articleObj.post_intro"></p>
            <div class="tags" v-if="articleObj.tags">
                <a :key="tag_id" @click="location_tag(tag.tag_id)" v-for="(tag,tag_id) in articleObj.tags">
                    <md-chip class="md-transparent" md-clickable>{{tag.tag_name}}</md-chip>
                </a>
            </div>
        </div>
        <md-button v-if="showNextPage" @click="nextPage()" class="md-raised md-primary md-icon-button show-next">
            <md-icon>keyboard_arrow_right</md-icon>
        </md-button>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import NotFound from "./../../layout/NotFound.vue";
export default {
  computed: {
    ...mapGetters(["uri", "queryString", "articleLists", "showNextPage"])
  },
  methods: {
    location_article(id) {
      this.$router.push({ path: `/article/${id}` });
    },
    location_tag(id) {
      this.$router.push({ path: `/tag/${id}` });
    },
    nextPage() {
      let uri = this.uri;
      let params = this.queryString;
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
@media all and (max-width: 1200px) and (min-width: 980px) {
}
.article-container {
  width: 100%;
  color: #000;
  .article-list {
    width: 100%;
    padding: 1em 0 0.5em;
    border-bottom: 1px solid #eee;
    .title {
      color: #32325d;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
      padding: 10px 0;
    }
    .info {
      color: #81b15b;
      word-break: break-all;
    }
    .intro {
      padding: 5px 0;
      color: #8898aa;
      line-height: 22px;
      word-break: break-all;
    }
    .tags {
      padding: 4px 0;
      display: flex;
      flex-direction: row-reverse;
      flex-wrap: wrap;
      a {
        margin: 3px 5px;
        cursor: pointer;
        &:hover {
          transition: all 0.3s linear;
          color: red;
        }
      }
    }
  }
  .show-next {
    position: absolute;
    width: 60px;
    height: 60px;
    right: 150px;
  }
}
</style>

