<template>
  <div>
      <md-toolbar class="md-transparent menu-pannel" md-elevation="0">
        <div class="user-main">
          <div class="user-avatar">
            <img :src="user.info.avatar" alt="">
          </div>
          <span class="user-name" v-text="user.info.name"></span>
        </div>
        <div class="user-description">
        <p v-text="user.info.description"></p>
      </div>
      </md-toolbar>
      <md-list>
        <md-list-item v-if="user.socialMedia.email" @click="lmail(user.socialMedia.email)">
          <md-icon>mail</md-icon>
          <span class="md-list-item-text">Mail</span>
        </md-list-item>

        <md-list-item  v-if="user.socialMedia.phone" @click="lphone(user.socialMedia.phone)">
          <md-icon>phone</md-icon>
          <span class="md-list-item-text">Phone</span>
        </md-list-item>

        <md-list-item  v-if="user.socialMedia.github" @click="llink(user.socialMedia.github)">
          <md-icon>github</md-icon>
          <span class="md-list-item-text">Github</span>
        </md-list-item>

        <md-list-item  v-if="user.socialMedia.weibo" @click="llink(user.socialMedia.weibo)">
          <md-icon>weibo</md-icon>
          <span class="md-list-item-text">Weibo</span>
        </md-list-item>
      </md-list>
      <div  class="getSourceCode" @click="llink(githubRepository)">
        <p>Fork this repository from Github.com</p>
      </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["user", "githubRepository"])
  },
  methods: {
    llink(url) {
      window.open(url);
    },
    lphone(phone) {
      window.open("tel:" + phone);
    },
    lmail(emial) {
      window.open("email:" + emial);
    }
  }
};
</script>
<style lang="scss">
.menu-pannel {
  width: 100%;
  height: 132px;
  background-color: #7e2dff !important;
  background: url(https://vuematerial.io/assets/examples/card-sky.jpg);
  background-position: center;
  .user-main {
    padding: 0 16px;
    display: flex;
    align-items: center;
    .user-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #fff;
      margin-right: 10px;
      overflow: hidden;
    }
    .user-name {
      font-size: 16px;
      color: #fff;
    }
  }
}
.user-description {
  width: 100%;
  height: auto;
  background-color: #ffffff45;
  color: #fff;
  padding: 5px 10px;
  word-break: keep-all;
  border-radius: 4px 4px 0 0;
  position: absolute;
  bottom: 0;
}
.md-toolbar {
  padding: 0;
}
.getSourceCode {
  color: #2db6ff;
  font-size: 12px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
</style>

