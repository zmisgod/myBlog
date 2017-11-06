<template>
  <header>
        <div class="top">
            <div class="top-container">
                <div class="icons-func">
                    <md-button class="md-icon-button">
                        <md-icon>search</md-icon>
                    </md-button>
                    <md-button class="md-icon-button">
                        <md-icon>view_module</md-icon>
                    </md-button>
                </div>
                <md-menu class="header-user-info">
                    <a class="user-email" md-menu-trigger>starzmisgod@gmail.com</a>
                    <md-menu-content>
                        <md-menu-item>项目 1</md-menu-item>
                        <md-menu-item>项目 2</md-menu-item>
                        <md-menu-item>项目 3</md-menu-item>
                    </md-menu-content>
                </md-menu>
            </div>  
        </div>
        <div class="bottom-container">
            <div class="logo"></div>
            <div class="bottom-main-container">
                <div class="bottom-top">
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
<style lang="scss">
h4{
    margin: 0;
}
header{
    background-color: #2ea9f1;
    height: 222px;
    color: #fff;
    .top{
        position: absolute;
        right: 40px;
        top: 20px;
        overflow: hidden;
        .top-container{
            display: flex;
            .icons-func{
                display: flex;
                flex-direction: row;
            }
            .header-user-info{
                justify-content: center;
                align-items: center;
                display: flex;
                color: #fff;
                padding: 0 10px;
                a{
                    cursor: pointer;
                    &:hover{
                        text-decoration: none;
                    }   
                }
                .user-email{
                    color: #fff;
                }
            }
        }
    }
    .bottom-container{
        position: absolute;
        top: 60px;
        display: flex;
        left: 40px;
        flex-direction: row;
        .logo{
            width: 80px;
            height: 80px;
            background:url('/static/logo.png');
            background-size: 80px;
        }
        .bottom-main-container{
            padding-left: 40px;
            display: flex;
            flex-direction: column;
            .bottom-top{
                height: 80px;
                p{
                    font-size: 16px;
                    line-height: 16px;
                    padding: 33px 0px;
                }
                h4{
                    font-size: 30px;
                    line-height: 30px;
                }
            }
            .menu{
                width: 500px;
                overflow: hidden;
                padding-top: 30px;
                ul{
                    padding-left: 0;
                    list-style: none;
                    margin: 0;
                    li {
                        display: inline-block;
                        padding: 10px 20px;
                        font-size: 16px;
                    }
                    .selected{
                        border-bottom: 4px solid red;
                    }
                }
            }
        }
    }
}
</style>
