<template>
  <div class="article-article">
    <md-drawer class="comment-drawer" :md-active.sync="showCommentList" md-fixed>
        <CommentList></CommentList>
    </md-drawer>

    <Header :articleObject="articleObject"></Header>

    <div class="article-content">
      <md-content class="md-elevation-5 main-container md-scrollbar">
        <CHeader :articleObject="articleObject"></CHeader>
        <Content class="p_content main-content" :articleContent="articleObject.contents"></Content>
      </md-content>

      <md-content class="md-elevation-5 main-container md-scrollbar contribute">
        <Thanks></Thanks>
      </md-content>

      <md-content class="md-elevation-5 main-container md-scrollbar comment" v-if="articleObject.comment_status == 1">
        <comment></Comment>
      </md-content>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Comment from "./../comment/Comment.vue";
import Content from "./Content.vue";
import CHeader from "./CHeader.vue";
import Header from "./Header.vue";
import Thanks from "./../thanks/Thanks.vue";
import CommentList from "./../comment/CommentList.vue";
export default {
  computed: {
    ...mapGetters(["articleObject", "user", "showCommentList"])
  },
  title() {
    return this.articleObject.post_title;
  },
  description() {
    return this.articleObject.post_intro;
  },
  methods: {
    seeAuthor(author_name) {
      this.$router.push({ path: `/author/${author_name}` });
    }
  },
  components: {
    Comment,
    Content,
    Header,
    CHeader,
    Thanks,
    CommentList
  }
};
</script>
<style lang="scss" scoped>
.md-theme-default code:not(.hljs) {
  background-color: rgba(255, 255, 255, 0) !important;
  color: rgb(113, 50, 187) !important;
  border-radius: 2px !important;
}
body.md-theme-default,
.main-content,
.components-container {
  background-color: #fff;
  word-break: break-all;
}
@media all and (min-width: 842px) {
  .article-article {
    margin-top: 100px;
    .article-content {
      width: calc(66.66667% - 16px);
      margin: 0 auto;
      .main-container {
        padding: 1em 2em;
      }
    }
  }
}

.article-article {
  .article-content {
    margin-top: 30px;
    padding: 0 5px;
    .main-container {
      border-radius: 12px;
      padding-top: 2em;
      padding-bottom: 10px;
    }
  }
  .comment {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .contribute {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
