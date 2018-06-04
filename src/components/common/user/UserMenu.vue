<template>
  <div>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title" v-text="user.info.name"></span>
      </md-toolbar>
      <p v-text="user.info.description"></p>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  computed:{
    ...mapGetters([
      'user',
    ])
  }
}
</script>
