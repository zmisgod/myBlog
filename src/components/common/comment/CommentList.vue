<template>
  <div class="commentComponents">
      <md-toolbar class="md-transparent comment-pannel" md-elevation="0">
        <md-chip class="md-primary close-btn" @click="closeComment" md-clickable>Close</md-chip>
      </md-toolbar>
      <div :key="index" v-for="( value, index) in commentLists" class="one-comment">
        <div class="md-list-item-text">
          <a :href="value.author_url == '' ? '#' : value.author_url">
            <img :src="value.author_image" v-if="value.author_image">
            <span v-text="value.author_name"></span>
          </a>
        </div>
        <p v-text="value.content"></p>
        <div class="comment-date">
          <span v-text="value.created_at"></span>
        </div>
      </div>
      <div  class="show-loading">
        <md-button v-if="nowPage >= 2" class="md-accent" @click="showPreCommentPage" >Prev Comments</md-button>
        <md-button v-if="commentLists.length == 12" class="md-primary" @click="showNextCommentPage">Loading More Comments</md-button>
      </div>
      <div  class="getSourceCode" @click="llink(githubRepository)">
        <p>Fork this repository from Github.com</p>
      </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["commentLists", "githubRepository"])
  },
  data() {
    return {
      nowPage: 1
    };
  },
  methods: {
    ...mapMutations(["COMMENTNOWPAGE", "SHOWCOMMENTLIST"]),
    llink(url) {
      window.open(url);
    },
    showNextCommentPage() {
      this.COMMENTNOWPAGE(++this.nowPage);
      this.$store.dispatch("showCommentLists");
    },
    closeComment() {
      this.SHOWCOMMENTLIST(false);
    },
    showPreCommentPage() {
      if (this.nowPage >= 2) {
        this.nowPage--;
        this.COMMENTNOWPAGE(this.nowPage);
        this.$store.dispatch("showCommentLists");
      }
    }
  }
};
</script>
<style lang="scss">
.commentComponents {
  .comment-pannel {
    width: 100%;
    height: 132px;
    background-color: #7e2dff !important;
    background: url(https://vuematerial.io/assets/examples/card-sky.jpg);
    background-position: center;
    justify-content: flex-end;
    .close-btn {
      display: flex;
    }
  }
  .one-comment {
    padding: 1em;
    .md-list-item-text {
      a {
        span {
        }
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #fff;
          border: 1px solid #eee;
        }
      }
    }
    .comment-date {
      font-size: 12px;
      text-align: right;
    }
    p {
      text-indent: 1em;
      padding: 1em 0.3em;
      font-size: 12px;
    }
  }
  .show-loading {
    display: flex;
    justify-content: center;
  }
  .getSourceCode {
    color: #2db6ff;
    font-size: 12px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
}
</style>