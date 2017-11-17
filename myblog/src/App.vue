<template>
  <div class="components-container">
      <transition class="animated" name="bounce" enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
          <router-view></router-view>
      </transition>
      <md-button @click="goTop()" v-show="toTop" class="md-fab md-mini go-top">
        <md-icon>publish</md-icon>
      </md-button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
let timer= false
export default {
  name: 'app',
  data(){
      return {
          toTop: false,
          transitionName: 'animated zoomInDown',
          swipeable:true
      }
  },
  created(){
      this.NOWCOLUMN(this.$route.name)
      if(this.nowColumn == 'tag') {
            this.COLUMNID({key:'id', value:this.$route.params.id})
            this.$store.dispatch("showTagArticle")
        }else if(this.nowColumn == 'category') {
            this.COLUMNID({key:'id', value:this.$route.params.id})
            this.$store.dispatch("showCategoryArticle")
        }else if(this.nowColumn == 'home'){
            this.$store.dispatch("showIndexArticle")
        }else if(this.nowColumn == 'search' && this.$route.query.keyword != "") {
            this.SEARCHWORD(this.$route.query.keyword)
            this.$store.dispatch("showSearchArticle")
        }
  },
  mounted(){
      
  },
  computed:{
      ...mapGetters([
          'title',
          'nowColumn'
      ])
  },
  watch: {
    '$route' (to, from) {
        this.NOWCOLUMN(to.name)
        if(to.name == 'tag') {
            this.$store.dispatch("showTagArticle")
        }else if(to.name == 'category') {
            this.$store.dispatch("showCategoryArticle")
        }else if(to.name == 'home'){
            this.$store.dispatch("showIndexArticle")
        } else if(to.name == 'search') {
            this.$store.dispatch("showSearchArticle")
        }
    }
  },
  mounted(){
      this.$nextTick(function () {  
         window.addEventListener('scroll', this.needToTop);  //滚动事件监听  
      }); 
  },
  methods: {
    ...mapMutations([
        'NOWCOLUMN',
        'COLUMNID',
        'SEARCHWORD'
    ]),
    goTop() {// 回到顶部方法
        clearInterval(timer)
        timer = setInterval(function() {
            let curHeight = document.documentElement.scrollTop || document.body.scrollTop// 得到当前高度  
            var now = curHeight
            var speed = (0 - now) / 7// 随着高度减速
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
            if (curHeight === 0) {//当前高度为零,停止这次计时器  
              clearInterval(timer)// C1  
            }
            document.documentElement.scrollTop = curHeight + speed//直接给高度赋值,会调用needtotop方法  
            document.body.scrollTop = curHeight + speed//谷歌的  
            stop = false// A
       }, 30)
    },
    needToTop() {
        let curHeight = document.documentElement.scrollTop || document.body.scrollTop
        let viewHeight = document.documentElement.clientHeight
        if (curHeight > viewHeight + 100) {
          this.toTop = true //赋值是为了按钮的v-show='toTop'  
        }else  {
          this.toTop = false;  
        }
        if (stop) {//STOP  
          clearInterval(timer)//C2  
        }
        stop = true//B  
    }
  }
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
}
p,h1,h2,h3,h4 {
    margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
.components-container{
    background-color: #fff;
}
.go-top{
    position: fixed !important;
    bottom: 20px;
    right: 30px;
}
</style>
