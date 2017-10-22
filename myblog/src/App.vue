<template>
  <div>
      <transition class="animated" name="bounce"
  enter-active-class="bounceInLeft"
  leave-active-class="bounceOutRight">
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'app',
  data(){
      return {
          transitionName: 'animated zoomInDown',
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
body{
    margin: 0;
    padding: 0;
}
p {
    margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
