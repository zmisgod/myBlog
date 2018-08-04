<template>
  <div class="home-conatiner" >
    <div class="article-container">
      <ArticleList></ArticleList>
    </div>
    <div class="link-contrainer">
      <LinkList></LinkList>
    </div>
  </div>
</template>
<script>
import LinkList from "./../link/LinkList.vue";
import ArticleList from "./../article/ArticleList.vue";
export default {
  components: {
    LinkList,
    ArticleList
  }
};
</script>
<style lang="scss">
.home-conatiner {
  display: flex;
  margin: 1em 2em 0;
  .article-container {
    background-color: #fff;
    padding: 1em 2em;
    border-radius: 10px;
  }
  .link-contrainer {
    padding: 0em 2em;
    width: 30%;
  }
}
@media all and (max-width: 1200px) and (min-width: 668px) {
  .home-conatiner {
    display: flex;
    margin: 1em 1em 0;
    .article-container {
      background-color: #fff;
      padding: 1em 1em;
      border-radius: 10px;
    }
    .link-contrainer {
      padding: 0em 1em;
      width: 50%;
    }
  }
}
@media all and (max-width: 667px) {
  .home-conatiner {
    width: 100%;
    display: flex;
    margin: 1em 0 0 0;
    flex-wrap: wrap-reverse;
    .article-container {
      background-color: #fff;
      padding: 1em 1em;
      border-radius: 10px;
      width: 100%;
    }
    .link-contrainer {
      padding: 0em 2em;
      width: 100%;
    }
  }
}
</style>