<template>
  <footer>
      <md-button @click="nextPage()" class="md-icon-button md-raised md-warn show-pre">
        <md-icon>keyboard_arrow_left</md-icon>
      </md-button>
      <md-button @click="nextPage()" class="md-raised md-primary md-icon-button show-next">
        <md-icon>keyboard_arrow_right</md-icon>
      </md-button>
  </footer>
</template>
<script>
export default {
  methods:{
      nextPage(){

      }
  }
}
</script>
<style lang="scss" scoped>
footer{
    width: 100%;
    height: 100px;
    background-color: #395762;
    .show-pre{
        position: absolute;
        width: 60px;
        height: 60px;
        bottom: 70px;
        left: 50px;
    }
    .show-next{
        position: absolute;
        width: 60px;
        height: 60px;
        bottom: 70px;
        left: 698px;
    }
}
</style>
