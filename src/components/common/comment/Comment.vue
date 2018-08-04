<template>
    <div class="comment-comment">
        <div>评论 Comment</div>

        <div class="comment-form">
            <div>
                <md-field>
                    <label>昵称 Your User Name *</label>
                    <md-input v-model="author_name"></md-input>
                </md-field>
            </div>

            <div>
                <md-field>
                    <label>评论内容 Comment Content *</label>
                    <md-textarea v-model="content"></md-textarea>
                </md-field>
            </div>

            <div>
                <md-field>
                    <label>你的网址 Your Site</label>
                    <md-input v-model="author_url"></md-input>
                </md-field>
            </div>

            <div>
                <md-field>
                    <label>邮箱 E-mail</label>
                    <md-input v-model="author_email"></md-input>
                </md-field>
            </div>
            <span>带*标识为必填项</span>

            <md-card-actions>
                <md-button @click="doComment" class="md-primary">评论 Comment</md-button>
            </md-card-actions>
        </div>
         <md-dialog-alert :md-active.sync="error" :md-content="error_message_cn + '<br />' + error_message_en" md-confirm-text="ok!" />


         <md-snackbar md-position="center" :md-duration="duration" :md-active.sync="commentScuuess" md-persistent>
            <span>评论成功 Comment Success!</span>
            <md-button class="md-primary" @click="commentScuuess = false">OK！</md-button>
        </md-snackbar>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data: () => ({
    author_name: "",
    content: "",
    author_url: "",
    author_email: "",

    error: false,
    error_message_cn: "",
    error_message_en: "",
    commentScuuess: false,

    duration: 4000
  }),
  computed: {
    ...mapGetters(["commentRes"])
  },
  watch: {
    commentRes: function(val) {
      if (val && val.code == 200) {
        this.cleanComment();
        this.COMMENTPARAMS({});
        this.commentScuuess = true;
      } else {
        this.error = true;
        this.error_message_cn = this.commentRes.msg;
        this.error_message_en = "error";
        return;
      }
    }
  },
  methods: {
    ...mapMutations(["COMMENTPARAMS"]),
    isEmail(strEmail) {
      var reg = new RegExp(
        "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
      );
      if (!reg.test(strEmail)) {
        return false;
      }
      return true;
    },
    doComment() {
      if (this.author_name == "") {
        this.error = true;
        this.error_message_cn = "昵称必填";
        this.error_message_en = "Your User Name is required";
        return;
      }
      if (this.content == "" || this.content.length <= 15) {
        this.error = true;
        this.error_message_cn = "内容必填且不少于15个字哦！";
        this.error_message_en =
          "Comment Content is required and need at least 15 words";
        return;
      }

      if (this.author_email) {
        if (!this.isEmail(this.author_email)) {
          this.error = true;
          this.error_message_cn = "邮箱格式错误！";
          this.error_message_en = "E-mail format error";
          return;
        }
      }
      this.COMMENTPARAMS({
        comment_id: 0,
        content: this.content,
        author_url: this.author_url,
        author_email: this.author_email,
        author_name: this.author_name
      });
      this.$store.dispatch("doComment");
    },
    cleanComment() {
      this.author_name = "";
      this.content = "";
      this.author_url = "";
      this.author_email = "";
    }
  }
};
</script>
<style lang="scss">
.comment-comment {
  margin-bottom: 20px;
  padding: 0 10px;
  .comment-form {
    padding: 0 10px;
  }
}
</style>
