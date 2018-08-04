<template>
    <div class="article-cheader">
        <h1 class="p-title" v-text="articleObject.post_title"></h1>
        <div class="p-tag" v-if="articleObject.category_id != 0">
            <md-chip class="md-accent" @click="seeCategory(articleObject.category_id)" md-clickable>{{articleObject.category_name}}</md-chip>
            <md-chip class="md-primary" v-for="(tag,index) in articleObject.tags" :key="index" @click="seeTag(tag.tag_id)" md-clickable>{{tag.tag_name}}</md-chip>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    articleObject: Object
  },
  methods: {
    seeTag(id) {
      this.$router.push({ path: `/tag/${id}` });
    },
    seeCategory(id) {
      this.$router.push({ path: `/category/${id}` });
    }
  }
};
</script>
<style lang="scss">
.article-cheader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .p-title {
    font-size: 1.2em;
    padding: 10px 20px;
    font-weight: 400;
  }
  .p-tag {
    padding-top: 0.7em;
    width: 100%;
    display: flex;
    overflow: scroll;
    margin: 0 1em;
    padding: 0 1em;
  }
}
@media all and (min-width: 842px) {
  .article-cheader {
    .p-title {
      font-size: 1.5em;
      line-height: 1.5em;
      font-weight: 500;
      padding: 6px 0;
    }
    .p-tag {
      padding: 6px 0;
      justify-content: center;
      overflow: hidden;
    }
  }
}
</style>
