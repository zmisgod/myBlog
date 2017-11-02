<template>
  <header>
        <div class="header-top">
            <div>
                <md-button class="md-icon-button">
                    <md-icon>search</md-icon>
                </md-button>
                 <md-button class="md-icon-button">
                    <md-icon>view_module</md-icon>
                </md-button>
                <md-menu>
                    <md-button md-menu-trigger>starzmisgod@gmail.com</md-button>
                    <md-menu-content>
                        <md-menu-item>项目 1</md-menu-item>
                        <md-menu-item>项目 2</md-menu-item>
                        <md-menu-item>项目 3</md-menu-item>
                    </md-menu-content>
                </md-menu>
            </div>  
        </div>
        <div class="header-container">
            <div class="logo"></div>
            <div class="header-main-container">
                <div class="top">
                    <h4>放松心态，迎接未来</h4>
                    <p>生而为人，我很抱歉</p>
                </div>
                <div class="menu">
                    <ul>
                        <li class="selected">web</li>
                        <li>Maps</li>
                        <li>Images</li>
                        <li>Videos</li>
                        <li>Search Tools</li>
                    </ul>
                </div>
            </div>
            <div class="page-info"></div>
        </div>
  </header>
</template>
<script>
export default {
  
}
</script>
<style>
h4{
    margin: 0;
}
header{
    background-color: #2ea9f1;
    height: 264px;
    color: #fff;
}
.header-top{
    position: absolute;
    right: 40px;
    top: 20px;
}
.header-container{
    position: absolute;
    top: 100px;
    left: 40px;
    display: flex;
}
.logo{
    width: 80px;
    height: 80px;
    background:url('/static/logo.png');
    background-size: 80px;
}
.header-main-container{
    padding-left: 40px;
}
.header-main-container p{
    font-size: 16px;
    line-height: 16px;
    padding: 33px 0px;
}
.header-main-container h4{
    font-size: 30px;
    line-height: 30px;
}
.header-main-container .menu ul {
    padding-left: 0;
    list-style: none;
    margin: 0;
}
.header-main-container .menu ul li {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
}
.header-main-container .menu ul li.selected{
    border-bottom: 4px solid red;
}
</style>
