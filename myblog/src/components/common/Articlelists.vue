<template>
  <div>
      <md-card md-with-hover :key="articleObj.id" v-for="(articleObj, key) in articleLists">
        <md-card-header>
          <div @click="locations(articleObj.id)" class="md-title" v-text="articleObj.post_title">Title goes here</div>
          <div class="md-subhead">zmisgod</div>
          <div class="md-subhead" v-text="articleObj.post_date"></div>
        </md-card-header>

        <md-card-content v-text="articleObj.post_intro">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
        </md-card-content>

        <md-card-actions>
          <md-button @click="locations(articleObj.id)">查看原文</md-button>
        </md-card-actions>
      </md-card>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  props:{
    articleLists:Array
  },
  methods:{
    ...mapMutations([
      'NOWCOLUMN',
      'COLUMNID'
    ]),
    locations(id) {
      this.$router.push({path: `/detail_${id}`})
      this.NOWCOLUMN('article')
      this.COLUMNID(id)
    }
  }
}
</script>
