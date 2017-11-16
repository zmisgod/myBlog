<template>
  <header>
        <div class="top">
            <div class="top-container">
                <div class="icons-func">
                    <md-button class="md-icon-button">
                        <md-icon>search</md-icon>
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
            <div class="logo-title-container">
                <div @click="location_home()" class="logo"></div>
                <div class="bottom-main-container">
                    <div class="bottom-top">
                        <h4>放松心态，迎接未来</h4>
                        <p>生而为人，我很抱歉</p>
                    </div>
                </div>
            </div>
            <div class="menu-container">
                <div class="menu">
                    <ul>
                        <li @click="location_category(value.id, index)" :class="index == nowCategory ? 'selected': ''" :key="index" v-for="(value, index) in categoryLists" v-text="value.cn"></li>
                    </ul>
                </div>
                <div class="page-info"></div>
            </div>
        </div>
  </header>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
data (){
    return {
        type:'asdad'
    }
},
 computed:{ 
      ...mapGetters([
          'categoryLists',
          'nowCategory',
      ])
  },
  methods:{
    ...mapMutations([
      'NOWCOLUMN',
      'COLUMNID',
      'NOWCATEGORY'
    ]),
    location_home() {
      this.$router.push({path: `/`})
      this.NOWCOLUMN('home')
      this.COLUMNID({key: 'page', value: 1})
    },
    location_category(id,category_id) {
        this.NOWCATEGORY(category_id)
      if(id == 0) {
          return this.location_home()
      }
      this.$router.push({path: `/category_${id}`})
      this.NOWCOLUMN('category')
      this.COLUMNID({key: 'id', value: id})
    },
    seeMoreFunction(){
        
    }
  }
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
        top: 10px;
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
        flex-direction: column;
        .logo-title-container{
            display: flex;
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
            }
        }
        .menu-container{
            display: flex;
            .menu{
                width: 500px;
                overflow: hidden;
                padding-top: 30px;
                margin-left: 120px;
                ul{
                    padding-left: 0;
                    list-style: none;
                    margin: 0;
                    li {
                        cursor: pointer;
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
@media all and (max-width: 667px) {
    header{
        .bottom-container{
            position: absolute;
            top: 80px;
            display: flex;
            left: 20px;
            flex-direction: column;
            .logo-title-container{
                display: flex;
                .logo{
                    width: 60px;
                    height: 60px;
                    background:url('/static/logo.png');
                    background-size: 60px;
                }
                .bottom-main-container{
                    padding-left: 20px;
                    display: flex;
                    flex-direction: column;
                    .bottom-top{
                        height: 80px;
                        p{
                            font-size: 16px;
                            line-height: 16px;
                            padding: 13px 0px;
                        }
                        h4{
                            font-size: 30px;
                            line-height: 30px;
                        }
                    }
                }
            }
            .menu-container{
                display: flex;
                .menu{
                    width: 100%;
                    overflow: hidden;
                    padding-top: 20px;
                    margin-left: 0;
                    ul{
                        padding-left: 0;
                        list-style: none;
                        margin: 0;
                        li {
                            cursor: pointer;
                            display: inline-block;
                            padding: 5px 10px;
                            font-size: 14px;
                        }
                        .selected{
                            border-bottom: 4px solid red;
                        }
                    }
                }
            }
        }
    }
}
</style>
