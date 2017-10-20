<template>
  <div>
      <div>
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'app',
  data(){
      return {
          swipeable:true
      }
  },
  created(){
      this.NOWCOLUMN(this.$route.name)
      this.COLUMNID(this.$route.params.id)
  },
  computed:{
      ...mapGetters([
          'title',
      ])
  },
  watch: {
    '$route' (to, from) {
      this.NOWCOLUMN(to.name)
    }
  },
  methods: {
    ...mapMutations([
        'NOWCOLUMN',
        'COLUMNID'
    ]),
    toggleLeftSidenav() {
       this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav() {
       this.$refs.rightSidenav.toggle()
    },
      closeRightSidenav() {
          this.$refs.rightSidenav.close()
      },
      open(ref) {
          console.log('Opened: ' + ref)
      },
      close(ref) {
          console.log('关闭d: ' + ref)
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
