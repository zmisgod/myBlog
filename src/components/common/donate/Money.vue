<template>
    <div class="tanks-contribute">
        <div class="title">
            金钱捐赠 Money Donation
        </div>
        <div class="lists">
            <md-dialog-alert :md-active.sync="alipay" md-title="Thanks for your Contribution!" md-content="<img src='https://static.zmis.me/static/alipay.png'>" />

            <md-dialog-alert :md-active.sync="wechat" md-title="Thanks for your Contribution!" md-content="<img src='https://static.zmis.me/static/wechat.png'>" />

            <md-dialog-alert :md-active.sync="bitcoin" md-title="Thanks for your Contribution!" md-content="<img src='https://static.zmis.me/static/bitcoin.png'>" />

            <md-chip class="md-accent controbute-conatiner" :style="{backgroundColor:color.alipay}" @click="alipay = true" md-clickable><md-icon md-src="https://static.zmis.me/myBlog/static/alipay.svg">Alipay</md-icon>Alipay</md-chip>
            <md-chip class="md-accent controbute-conatiner" :style="{backgroundColor:color.wechat}" @click="wechat = true" md-clickable><md-icon md-src="https://static.zmis.me/myBlog/static/wechat.svg">Wechat</md-icon>Wechat</md-chip>
            <md-chip class="md-accent controbute-conatiner" :style="{backgroundColor:color.bitcoin}" @click="bitcoin = true" md-clickable><md-icon md-src="https://static.zmis.me/myBlog/static/bitcoin.svg">Bitcoin</md-icon>Bitcoin</md-chip>
        </div>
    </div>
</template>
<script>
export default {
  data: () => ({
    alipay: false,
    wechat: false,
    bitcoin: false,
    color: {
      bitcoin: "#FF9500",
      alipay: "#03aaee",
      wechat: "#1daf3c"
    }
  })
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