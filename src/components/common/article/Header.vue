<template>
    <div class="article-header">
        <md-drawer class="comment-drawer" :md-active.sync="showCommentList" md-fixed>
            <CommentList></CommentList>
        </md-drawer>

        <div class="irbbon"></div>

        <div class="article-top">
          <div class="comment">
            <div class="commom-info" @click="showMenu()" v-if="articleObject.num_info && articleObject.num_info.comment_num  && articleObject.num_info.comment_num != 0">
                <div class="commom-img">
                  <img src="/static/comment.svg" alt="">
                </div>
                <span class="common-text"><b v-text="articleObject.num_info.comment_num"></b></span>
            </div>
            <div class="commom-info" v-else>
              <div class="commom-img">
                <img src="/static/comment.svg" alt="">                
              </div>
              <span class="common-text"><b>0</b></span>
            </div>
          </div>
          <div class="author-date">
              <div class="commom-info" v-if="articleObject.user_info">
                  <div class="commom-img custome">
                    <img :src="articleObject.user_info.head_url">
                  </div>
                  <span class="common-text" v-text="articleObject.user_info.nickname"></span>
              </div>
              <div class="date-info commom-info">
                  <div class="commom-img date-img">
                    <img src="/static/calendar.svg" alt="">
                  </div>
                  <span class="common-text date-time" v-text="articleObject.created_at"></span>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
import CommentList from "./../comment/CommentList.vue";
export default {
  props: {
    articleObject: Object
  },
  data() {
    return {
      showCommentList: false
    };
  },
  methods: {
    showMenu() {
      //评论默认显示第一页
      this.$store.dispatch("showCommentLists");
      this.showCommentList = true;
    },
    seeAuthor(author_name) {
      this.$router.push({ path: `/author/${author_name}` });
    },
    showMenu() {
      //评论默认显示第一页
      this.$store.dispatch("showCommentLists");
      this.showCommentList = true;
    }
  },
  components: {
    CommentList
  }
};
</script>
<style lang="scss">
@media all and (min-width: 842px) {
  .article-header {
    top: 0;
    position: fixed;
    z-index: -1;
    width: 100%;
  }
}
.article-header {
  .comment-drawer {
    width: 250px;
  }
  .irbbon {
    height: 250px;
    background-color: #4285f4;
    background-attachment: fixed;
    flex-shrink: 0;
    width: 100%;
    top: 0;
    position: fixed;
    z-index: -1;
  }
  .article-top {
    padding: 0 10px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .comment {
      width: 40px;
      .commom-info {
        display: flex;
        justify-content: center;
        align-items: center;
        .commom-img {
          display: flex;
          height: 30px;
          padding-right: 4px;
          img {
            width: 30px;
            color: #fff;
          }
        }
        .common-text {
          color: #fff;
        }
      }
    }
    .author-date {
      display: flex;
      flex-direction: column;
      .commom-info {
        display: flex;
        justify-content: center;
        align-items: center;
        .commom-img {
          display: flex;
          height: 30px;
          padding-right: 4px;
          img {
            width: 30px;
            color: #fff;
          }
        }
        .common-text {
          color: #fff;
        }
        .custome {
          img {
            background-color: #fff;
            border-radius: 50%;
          }
        }
        .date-img {
          align-items: center;
          img {
            width: 15px !important;
            height: 15px !important;
          }
        }
        .date-time {
          font-size: 12px;
        }
      }
    }
  }
}
</style>

