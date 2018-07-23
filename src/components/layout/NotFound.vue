<template>
  <div class="notfound">
      <md-icon class="md-size-5x ppppp" :style="{color:customStyle.ACCENT_COLOR}" v-text="showIcon"></md-icon>
      <h1 class="ppppp" :style="{color:customStyle.SECONDARY_TEXT}" v-text="showLabel"></h1>
      <p class="ppppp" :style="{color:customStyle.SECONDARY_TEXT}" v-text="showDescription"></p>
      <md-button class="md-primary ppppp" @click="goHome(showBackUrl)" v-text="'back to ' + showBackurlBotton"></md-button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "EmptyStateBasic",
  props: {
    showIcon: String,
    showLabel: String,
    showDescription: String,
    showBackUrl: String,
    showBackurlBotton: String
  },
  computed: {
    ...mapGetters(["customStyle"])
  },
  methods: {
    goHome(url) {
      this.$router.push({ path: url });
    }
  }
};
</script>
<style lang="scss" scoped>
.md-empty-state-icon {
  font-size: 100px !important;
}
.ppppp {
  padding: 10px 0;
  &:last-child {
    padding: 0 20px;
  }
}
.notfound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 25px;
  }
}
</style>
