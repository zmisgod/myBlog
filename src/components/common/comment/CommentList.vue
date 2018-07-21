<template>
  <div>
      <md-toolbar class="md-transparent menu-pannel" md-elevation="0">
        <div class="user-description"></div>
      </md-toolbar>
      <div :key="index" v-for="( value, index) in commentLists">
        <div class="md-list-item-text">
          <a :href="value.author_url == '' ? '#' : value.author_url">
            <span v-text="value.author_name"></span>
            <img :src="value.author_image">
          </a>
        </div>
        <p v-text="value.content"></p>
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
    ...mapGetters(["commentLists", "githubRepository", "articleObject"])
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