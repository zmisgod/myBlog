<template>
  <div class="detail">
    <md-drawer class="user-drawer" :md-active.sync="userMenu" md-fixed>
      <userMenu></userMenu>
    </md-drawer>

    <div class="irbbon"></div>
    <div class="user_info">
      <div class="user_head" @click="showMenu()" v-if="articleObject.num_info && articleObject.num_info.comment_num  && articleObject.num_info.comment_num != 0">
        <svg aria-hidden="true" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>
        <span class="pading-left-5"><b v-text="articleObject.num_info.comment_num"></b></span>
      </div>
      <div class="user_head" v-else>
        <svg aria-hidden="true" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>
        <span class="pading-left-5"><b>0</b></span>
      </div>
      <div class="article_simple_intro">
          <div class="article_author" v-if="articleObject.user_info">
            <div class="user-head-info">
              <img :src="articleObject.user_info.head_url">
            </div>
            <span class="author_name" v-text="articleObject.user_info.nickname"></span>
          </div>
          <div class="articel_post_time">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm116 204c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40z"/></svg>
            <p v-text="articleObject.created_at"></p>
          </div>
      </div>
    </div>
    <div class="main">
      <md-content class="md-elevation-5 main-container md-scrollbar">
        <div class="detail_header">
          <div class="header_container">
            <p class="p_title" v-text="articleObject.post_title"></p>
            <div class="p_tag" v-if="articleObject.category_id != 0">
              <md-chip class="md-accent" @click="seeCategory(articleObject.category_id)" md-clickable>{{articleObject.category_name}}</md-chip>
              <md-chip class="md-primary" v-for="(tag,index) in articleObject.tags" :key="index" @click="seeTag(tag.tag_id)" md-clickable>{{tag.tag_name}}</md-chip>
            </div>
          </div>
        </div>
        <div class="p_content main-content" v-html="articleObject.contents"></div>
      </md-content>
      <div class="related-conatiner" style="display:none">
        <p class="related-text">相关评论</p>
        <div class="md-elevation-5 related-border">
          <ul>
            <li>Mysql中的TIMESTAMP插入修改不报错的问题探究</li>
            <li>Mysql中的TIMESTAMP插入修改不报错的问题探究</li>
            <li>Mysql中的TIMESTAMP插入修改不报错的问题探究</li>
            <li>Mysql中的TIMESTAMP插入修改不报错的问题探究</li>
            <li>Mysql中的TIMESTAMP插入修改不报错的问题探究</li>
            <li>Mysql中的TIMESTAMP插入修改不报错的问题探究</li>
            <li>Mysql中的TIMESTAMP插入修改不报错的问题探究</li>
            <li>Mysql中的TIMESTAMP插入修改不报错的问题探究</li>
            <li>Mysql中的TIMESTAMP插入修改不报错的问题探究</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import socialMedia from "./../user/SocialMedia.vue";
import userMenu from "./../user/UserMenu.vue";
const markdown = require("markdown").markdown;
export default {
  data() {
    return {
      userMenu: false
    };
  },
  computed: {
    ...mapGetters(["articleObject", "user"])
  },
  title() {
    return this.articleObject.post_title;
  },
  description() {
    return this.articleObject.post_intro;
  },
  methods: {
    showMenu() {
      this.userMenu = true;
    },
    seeAuthor(author_name) {
      this.$router.push({ path: `/author/${author_name}` });
    },
    seeTag(id) {
      this.$router.push({ path: `/tag/${id}` });
    },
    seeCategory(id) {
      this.$router.push({ path: `/category/${id}` });
    }
  },
  components: {
    socialMedia,
    userMenu
  }
};
</script>
<style lang="scss">
.main-content {
  font-size: 1em;
  border-bottom: 1px solid #fff;
  overflow: auto;
  word-break: break-all;
  margin-top: 30px;
  p {
    padding: 0.3em 1em;
    line-height: 2em;
    color: #444343;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 20px 0;
    color: #b35353;
  }
  strong {
    padding: 20px 0;
    color: #b35353;
  }
  ol,
  ul {
    padding-left: 50px;
    li {
      padding: 10px 0;
    }
  }
  pre {
    border: 1px solid #eee !important;
    border-radius: 4px;
    overflow: auto;
    -webkit-box-shadow: 1px 1px 4px #7d2b2b;
    box-shadow: 1px 1px 4px #f1f1f1;
    margin: 1px 15px;
    padding-left: 10px;
    code {
      line-height: 2em;
    }
  }
  blockquote {
    border-left: 10px solid #b35353;
    font-style: italic;
  }
  img {
    display: flex;
    margin: 20px 0;
    border-radius: 4px;
  }
  table {
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
      td {
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
body.md-theme-default,
.main-content,
.components-container {
  background-color: #fff;
  word-break: break-all;
}
</style>

<style lang="scss" scoped>
.detail {
  background-color: #eee;
}
.color_author {
  color: #ffc5c5;
  border: 1px solid #ffc5c5;
  background-color: #4e94ff;
  &:hover {
    color: #4e94ff;
    border: 1px solid #4e94ff;
    background-color: #ffc5c5 !important;
    border-radius: 3px;
  }
}
.irbbon {
  height: 250px;
  background-color: #4285f4;
  flex-shrink: 0;
  width: 100%;
}
.main-container {
  padding: 1em 2em;
  width: calc(66.66667% - 16px);
  margin: 0 auto;
  border-radius: 2px;
  padding: 80px 56px;
}
.header_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.md-chip {
  margin: 10px;
}
.user-head-info {
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 5px;
}
.user_info {
  display: flex;
  width: 100%;
  padding: 20px 0;
  margin-top: -250px;
  padding: 2em 2em;
  color: #fff;
  .user_head {
    cursor: pointer;
    width: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      max-width: 30px;
      height: 30px;
      fill: #fff;
    }
  }
  .article_simple_intro {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .article_author {
      font-size: 14px;
      display: flex;
      align-items: center;
      svg {
        width: 15px;
        height: 15px;
        fill: #fff;
      }
    }
    .articel_post_time {
      display: flex;
      align-items: center;
      padding-top: 10px;
      svg {
        width: 15px;
        height: 15px;
        fill: #fff;
      }
      p {
        font-size: 12px;
        padding-left: 5px;
      }
    }
  }
}
.md-button {
  min-width: 60px;
  min-height: 24px;
  line-height: 24px;
  margin: 5px 3px;
  font-size: 12px;
}
.p_title {
  font-size: 1.2em;
}
.p_author {
  cursor: pointer;
  font-size: 0.8em;
  padding: 0 0.2em;
}
.p_date {
  text-align: right;
  font-size: 1em;
  padding-right: 0.5em;
  padding-top: 25px;
}
.p_tag,
.p_author {
  padding-top: 0.7em;
}
.related-text {
  margin: 0 auto;
  width: calc(66.66667% - 16px);
  font-size: 30px;
  padding: 2em 0 1em 1em;
}
.related-conatiner {
  overflow: hidden;
  margin: 0 auto;
  border-radius: 2px;
  padding-bottom: 2em;
}
.related-border {
  margin: 0 auto;
  width: calc(66.66667% - 16px);
  border-radius: 8px;
  padding: 30px 50px;
  background-color: #fff;
}
@media all and (max-width: 842px) {
  .related-border {
    width: calc(100% - 16px) !important;
  }
  .related-text {
    width: calc(100% - 16px) !important;
  }
  .related-conatiner {
    margin: 0 10px !important;
  }
  .main-content p {
    padding: 0.3em 1em !important;
  }
  .user_info {
    display: flex;
    width: 100%;
    padding: 10px 0;
    margin-top: -220px;
    padding: 2em 1em;
    color: #fff;
    .user_head {
      border-radius: 50%;
      margin-right: 10px;
      max-width: 40px;
      height: 40px;
      svg {
        max-width: 40px;
        height: 40px;
      }
      .comments_count {
      }
    }
    .article_simple_intro {
      width: 100%;
    }
  }
  .main-container {
    padding: 0.1em 0.2em;
    max-width: 768px;
    margin: 0 auto;
    background-color: #fff;
    width: calc(100% - 16px);
    border-radius: 8px;
    padding: 40px 5px;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
  .p_title {
    padding: 10px 20px;
  }
}
@media all and (min-width: 842px) {
  .main-content {
    margin: 30px auto;
    color: rgb(66, 66, 66) !important;
  }
  .md-button {
    min-width: 70px;
    min-height: 30px;
    line-height: 30px;
    margin: 6px 4px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .p_title {
    font-size: 1.5em;
    line-height: 1.5em;
    font-weight: 500;
  }
  .p_title,
  .p_author,
  .p_tag {
    padding: 6px 0;
  }
  .p_author {
    cursor: pointer;
    font-size: 1.2em;
  }
  .p_date {
    text-align: right;
    font-size: 1em;
    padding-right: 2em;
  }
  .p_content {
    font-size: 1.2em;
  }
}
</style>


<style>
.user-drawer {
  width: 250px;
}
</style>
