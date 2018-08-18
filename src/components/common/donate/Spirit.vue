<template>
    <div class="tanks-contribute">
        <div class="title">
            精神支持 Spiritual Support
        </div>
        <div class="lists">
            <md-chip class="md-accent controbute-conatiner" @click="open('https://github.com/zmisgod')" :style="{backgroundColor:color.github}" md-clickable><md-icon md-src="https://static.zmis.me/myBlog/static/github.svg">Github</md-icon>Give me a star if you like!</md-chip>        
        </div>
    </div>
</template>
<script>
export default {
  data: () => ({
    github: false,
    color: {
      github: "#212529"
    }
  }),
  methods: {
    open(url) {
      window.open(url);
    }
  }
};
</script>
<style lang="scss">
.md-ripple {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
</style>

<style lang="scss" scoped>
.tanks-contribute {
  padding: 0 10px 20px;
  .title {
    font-weight: 400;
    padding-bottom: 10px;
  }
  .lists {
    display: flex;
    justify-content: center;
    .md-accent {
      cursor: pointer;
    }
  }
}
</style>