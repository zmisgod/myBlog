<template>
  <div class="detail">
    <md-drawer class="user-drawer" :md-active.sync="userMenu" md-fixed>
      <userMenu></userMenu>
    </md-drawer>

    <div class="irbbon"></div>
    <div class="user_info">
      <div class="user_head" @click="showMenu()">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="390.000000pt" height="390.000000pt" viewBox="0 0 390.000000 390.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,390.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M1033 2967 c8 -22 318 -530 335 -549 14 -16 55 -18 530 -20 l516 -3 -653 -700 c-360 -385 -670 -717 -689 -737 l-36 -38 933 0 c841 0 933 2 927 16 -3 8 -81 139 -173 290 l-166 274 -203 0 -202 0 -91 -97 -91 -98 237 -5 237 -5 48 -80 c26 -44 48 -83 48 -87 0 -5 -232 -8 -515 -8 -283 0 -515 3 -515 8 0 4 311 338 691 742 l691 735 -703 3 -704 3 -47 79 c-27 43 -48 81 -48 84 0 3 338 7 750 8 l751 3 -61 98 -61 97 -871 0 c-723 0 -869 -2 -865 -13z"/><path d="M1357 1880 l-327 -350 0 -143 0 -142 43 45 c24 25 205 218 402 430 197 212 386 413 419 448 l60 62 -135 0 -135 0 -327 -350z"/></g></svg>
      </div>
      <div class="user_intro">
        <div class="p_user">
          <div class="blog_author">
            <span>作者</span>
            <socialMedia :socialMedia="user.socialMedia"></socialMedia>
          </div>
          <p class="author_name">zmisgod</p>
        </div>
        <div class="p_date">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm116 204c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40z"/></svg>
              <md-tooltip md-direction="bottom">Post Time</md-tooltip>
            </span>
            <p v-text="articleObject.post_date"></p>
        </div>
      </div>
    </div>
    <div class="main">
      <md-content class="md-elevation-5 main-container md-scrollbar">
        <div class="detail_header">
          <div class="header_container">
            <p class="p_title" v-text="articleObject.post_title"></p>
            <div class="p_tag" v-if="articleObject.category_name !== undefined">
              <md-chip class="md-accent" @click="seeCategory(articleObject.category_id)" v-text="articleObject.category_name"></md-chip>
              <md-chip class="md-primary" v-for="(tag,index) in articleObject.tag" :key="index" @click="seeTag(tag.category_id)" v-text="tag.category_name"></md-chip>
            </div>
          </div>
        </div>
        <div class="p_content main-content" v-html="articleObject.post_content"></div>
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
export default {
  mounted() {
    this.$store.dispatch("showArticle");
  },
  data() {
    return {
      userMenu: false
    };
  },
  computed: {
    ...mapGetters(["articleObject", "user"])
  },
  methods: {
    ...mapMutations(["NOWCOLUMN", "NOWCATEGORY"]),
    showMenu() {
      this.userMenu = true;
    },
    seeAuthor(author_name) {
      this.$router.push({ path: `/author/${author_name}` });
    },
    seeTag(id) {
      this.$router.push({ path: `/tag_${id}` });
    },
    seeCategory(id) {
      this.$router.push({ path: `/category_${id}` });
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
    padding: 0.3em 0.3em;
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
    box-shadow: 1px 1px 4px #7d2b2b;
    margin: 0.3em 2em;
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
  height: 35vh;
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
.user_info {
  display: flex;
  width: 100%;
  padding: 20px 0;
  margin-top: -250px;
  padding: 2em 2em;
  color: #fff;
  .user_head {
    border: 1px solid #eee;
    cursor: pointer;
    border-radius: 50%;
    margin-right: 20px;
    height: 60px;
    background-color: #fff;
    svg {
      width: 60px;
      height: 60px;
    }
  }
  .user_intro {
    width: 100%;
    .p_user {
      padding: 5px 0;
      float: left;
      .blog_author {
        span {
          font-size: 16px;
          padding-right: 10px;
        }
      }
      .author_name {
        font-size: 20px;
        color: #fff;
      }
    }
    .p_date {
      display: flex;
      float: right;
      padding-top: 0;
      padding-right: 0;
      svg {
        width: 20px;
        height: 20px;
        fill: #fff;
        padding-right: 5px;
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
    padding: 0.3em 0.2em !important;
  }
  .user_info {
    display: flex;
    width: 100%;
    padding: 10px 0;
    margin-top: -250px;
    padding: 2em 1em;
    color: #fff;
    .user_head {
      border: 1px solid #eee;
      border-radius: 50%;
      margin-right: 10px;
      height: 40px;
      background-color: #fff;
      svg {
        width: 40px;
        height: 40px;
      }
    }
    .user_intro {
      width: 100%;
      .p_user {
        padding: 0;
        float: left;
        .blog_author {
          span {
            font-size: 14px;
            padding-right: 10px;
          }
        }
        .author_name {
          font-size: 16px;
          color: #fff;
        }
      }
      .p_date {
        padding-top: 18px;
        font-size: 12px;
      }
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
