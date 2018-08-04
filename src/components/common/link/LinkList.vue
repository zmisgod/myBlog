<template>
    <div class="link-linklist">
        <div v-for="(value, index) in linkLists" :key = "index" class="link-list pic">
            <img v-if="value.link_image != ''" :src="value.link_image" alt="" height="250px">
            <p class="title" @click='visitSite(value.link_url)' v-text="value.link_name"></p>
            <p class="description" v-text="value.link_description"></p>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["linkLists"])
  },
  methods: {
    visitSite(url) {
      window.open(url + "?from=https://zmis.me");
    }
  }
};
</script>

<style lang="scss">
.gsmh {
  -webkit-filter: blur(10px); /* Chrome, Opera */
  -moz-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(10px);
}
.md-title {
  cursor: pointer;
  color: #000;
}
.md-subhead {
  color: #000;
}
.visit {
  color: #000;
}
.link-linklist {
  .link-list {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 1em;
    margin-bottom: 15px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
      rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  }
  .pic {
    color: #395762;
    img {
      border-radius: 4px;
    }
    .title {
      line-height: 28px;
      cursor: pointer;
      font-size: 24px;
      font-weight: 400;
      padding: 0.5em 0;
    }
    .description {
      color: #81b15b;
    }
  }
}
</style>
