<template>
  <header>
        <div class="top">
            <div class="top-container">
                <div class="icons-func">
                    <md-input-container md-theme="white" v-if="showSearchFrame">
                        <label>Search Keyword</label>
                        <md-input v-model="keyword"></md-input>
                    </md-input-container>
                </div>
                <md-button class="md-icon-button" @click="doSearch()">
                    <md-icon>search</md-icon>
                </md-button>
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
                        <router-link to="/">全部文章</router-link>
                        <router-link to="/category_3">技术分享</router-link>
                        <router-link to="/category_1">业界资讯</router-link>
                        <router-link to="/category_2">心情感悟</router-link>
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
        keyword:''
    }
},
 computed:{ 
      ...mapGetters([
          'categoryLists',
          'nowCategory',
          'showSearchFrame',
          'searchWord',
          'channel'
      ])
  },
  methods:{
    ...mapMutations([
      'NOWCOLUMN',
      'COLUMNID',
      'NOWCATEGORY',
      'SHOWSEARCHFRAME',
      'SEARCHWORD'
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
      this.COLUMNID({key: 'page', value: 1})
    },
    location_channel(channel){
        this.NOWCATEGORY(channel)
        this.$router.push({path: `/chat`})
        this.NOWCOLUMN('channel')
    },
    doSearch(){
        this.SEARCHWORD(this.keyword)
        this.SHOWSEARCHFRAME("")
        if(this.showSearchFrame && this.keyword != "") {
            this.$router.push({path: `/search?keyword=${this.keyword}`})
            this.NOWCOLUMN('search')
            this.COLUMNID({key: 'page', value: 1})
        }
    },
  }
}
</script>
<style lang="scss">
h4{
    margin: 0;
}
.md-input-container.md-has-value input{
    color: #fff;
}
.md-theme-white input{
    color: #fff;
    text-shadow: 0 0 0 #fff !important;
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
            justify-content: flex-end;
            align-items: center;
            height: 60px;
            .icons-func{
                display: flex;
                flex-direction: row;
                width: 320px;
                justify-content: center;
                align-items: center;
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
                background-color: #fff;
                background-image:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMzkwLjAwMDAwMHB0IiBoZWlnaHQ9IjM5MC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDM5MC4wMDAwMDAgMzkwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE1LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwzOTAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTAzMyAyOTY3IGM4IC0yMiAzMTggLTUzMCAzMzUgLTU0OSAxNCAtMTYgNTUgLTE4IDUzMCAtMjAgbDUxNiAtMwotNjUzIC03MDAgYy0zNjAgLTM4NSAtNjcwIC03MTcgLTY4OSAtNzM3IGwtMzYgLTM4IDkzMyAwIGM4NDEgMCA5MzMgMiA5MjcgMTYKLTMgOCAtODEgMTM5IC0xNzMgMjkwIGwtMTY2IDI3NCAtMjAzIDAgLTIwMiAwIC05MSAtOTcgLTkxIC05OCAyMzcgLTUgMjM3IC01CjQ4IC04MCBjMjYgLTQ0IDQ4IC04MyA0OCAtODcgMCAtNSAtMjMyIC04IC01MTUgLTggLTI4MyAwIC01MTUgMyAtNTE1IDggMCA0CjMxMSAzMzggNjkxIDc0MiBsNjkxIDczNSAtNzAzIDMgLTcwNCAzIC00NyA3OSBjLTI3IDQzIC00OCA4MSAtNDggODQgMCAzIDMzOAo3IDc1MCA4IGw3NTEgMyAtNjEgOTggLTYxIDk3IC04NzEgMCBjLTcyMyAwIC04NjkgLTIgLTg2NSAtMTN6Ii8+CjxwYXRoIGQ9Ik0xMzU3IDE4ODAgbC0zMjcgLTM1MCAwIC0xNDMgMCAtMTQyIDQzIDQ1IGMyNCAyNSAyMDUgMjE4IDQwMiA0MzAKMTk3IDIxMiAzODYgNDEzIDQxOSA0NDggbDYwIDYyIC0xMzUgMCAtMTM1IDAgLTMyNyAtMzUweiIvPgo8L2c+Cjwvc3ZnPgo=');
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
                width: 512px;
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
        .top{
            right:20px;
            left: 20px;
        }
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
                            padding: 18px 0px;
                        }
                        h4{
                            font-size: 24px;
                            line-height: 24px;
                        }
                    }
                }
            }
            .menu-container{
                display: flex;
                overflow: hidden;
                width: 300px;
                .menu{
                    width: 380px;
                    overflow-x: auto;
                    overflow-y: hidden;
                    padding-top: 20px;
                    margin-left: 0;
                    ul{
                        width: 380px;
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
