<template>
  <header class="md-elevation-4" :style="{backgroundColor:customStyle.PRIMARY_COLOR,color:customStyle.COLOR}">
        <div class="top">
            <div class="top-container">
                <div class="icons-func">
                    <md-field md-theme="white" v-if="showSearchFrame">
                        <label class="small-keyword">Search keyword</label>
                        <md-input class="small-input" v-model="keyword"></md-input>
                    </md-field>
                </div>
                <md-button class="md-icon-button" :style="{color:customStyle.COLOR}" @click="doSearch()">
                    <md-icon :style="{color:customStyle.COLOR}">search</md-icon>
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
                        <li @click="location_category(value.id, index)" :class="index == nowCategory ? 'selected': ''" :key="index" v-for="(value, index) in categoryLists" v-text="value.cn"></li>
                    </ul>
                </div>
                <div class="page-info"></div>
            </div>
        </div>
  </header>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      keyword: this.searchWord
    };
  },
  computed: {
    ...mapGetters([
      "categoryLists",
      "nowCategory",
      "showSearchFrame",
      "searchWord",
      "customStyle"
    ])
  },
  methods: {
    location_home() {
      this.$router.push({ path: `/` });
    },
    location_category(id, category_id) {
      if (id == 0) {
        return this.location_home();
      }
      this.$router.push({ path: `/category/${id}` });
    },
    location_channel(channel) {
      this.$router.push({ path: `/chat` });
    },
    doSearch() {
      if (
        this.showSearchFrame &&
        this.keyword !== "" &&
        this.keyword !== undefined
      ) {
        this.$router.push({ path: "/search?keyword=" + this.keyword });
      } else {
        if (this.showSearchFrame) {
          this.SHOWSEARCHFRAME(false);
        } else {
          this.SHOWSEARCHFRAME(true);
        }
      }
    }
  }
};
</script>
<style lang="scss">
.md-field label {
  font-size: 14px;
}
input.md-input {
  font-size: 14px !important;
  color: #fff;
  border-bottom: 1px solid #fff !important;
}
h4 {
  margin: 0;
}
svg {
  fill: #fff;
}
header {
  .top {
    .top-container {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 60px;
      .icons-func {
        display: flex;
        flex-direction: row;
        width: 320px;
        justify-content: center;
        align-items: center;
      }
      .header-user-info {
        justify-content: center;
        align-items: center;
        display: flex;
        padding: 0 10px;
        a {
          cursor: pointer;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
  .bottom-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    .logo-title-container {
      display: flex;
      height: 80px;
      margin-bottom: 20px;
      margin-left: 40px;
      .logo {
        width: 80px;
        height: 80px;
        background-color: #fff;
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMzkwLjAwMDAwMHB0IiBoZWlnaHQ9IjM5MC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDM5MC4wMDAwMDAgMzkwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE1LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwzOTAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTAzMyAyOTY3IGM4IC0yMiAzMTggLTUzMCAzMzUgLTU0OSAxNCAtMTYgNTUgLTE4IDUzMCAtMjAgbDUxNiAtMwotNjUzIC03MDAgYy0zNjAgLTM4NSAtNjcwIC03MTcgLTY4OSAtNzM3IGwtMzYgLTM4IDkzMyAwIGM4NDEgMCA5MzMgMiA5MjcgMTYKLTMgOCAtODEgMTM5IC0xNzMgMjkwIGwtMTY2IDI3NCAtMjAzIDAgLTIwMiAwIC05MSAtOTcgLTkxIC05OCAyMzcgLTUgMjM3IC01CjQ4IC04MCBjMjYgLTQ0IDQ4IC04MyA0OCAtODcgMCAtNSAtMjMyIC04IC01MTUgLTggLTI4MyAwIC01MTUgMyAtNTE1IDggMCA0CjMxMSAzMzggNjkxIDc0MiBsNjkxIDczNSAtNzAzIDMgLTcwNCAzIC00NyA3OSBjLTI3IDQzIC00OCA4MSAtNDggODQgMCAzIDMzOAo3IDc1MCA4IGw3NTEgMyAtNjEgOTggLTYxIDk3IC04NzEgMCBjLTcyMyAwIC04NjkgLTIgLTg2NSAtMTN6Ii8+CjxwYXRoIGQ9Ik0xMzU3IDE4ODAgbC0zMjcgLTM1MCAwIC0xNDMgMCAtMTQyIDQzIDQ1IGMyNCAyNSAyMDUgMjE4IDQwMiA0MzAKMTk3IDIxMiAzODYgNDEzIDQxOSA0NDggbDYwIDYyIC0xMzUgMCAtMTM1IDAgLTMyNyAtMzUweiIvPgo8L2c+Cjwvc3ZnPgo=");
        background-size: 80px;
        border-radius: 50%;
      }
      .bottom-main-container {
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .bottom-top {
          p {
            font-size: 16px;
            line-height: 16px;
            padding: 11px 0px 0;
          }
          h4 {
            font-size: 30px;
            line-height: 30px;
          }
        }
      }
    }
    .menu-container {
      display: flex;
      .menu {
        width: 512px;
        overflow: hidden;
        margin-left: 40px;
        ul {
          padding-left: 0;
          list-style: none;
          margin: 0;
          li {
            cursor: pointer;
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
          }
          .selected {
            border-bottom: 4px solid red;
          }
        }
      }
    }
  }
}
@media all and (max-width: 667px) {
  .small-keyword {
    font-size: 14px !important;
  }
  .md-focused .small-input {
    border-bottom: 1px solid #fff !important;
  }
  header {
    .bottom-container {
      display: flex;
      flex-direction: column;
      .logo-title-container {
        display: flex;
        margin-left: 20px;
        margin-bottom: 20px;
        height: auto;
        .logo {
          width: 60px;
          height: 60px;
          background-size: 60px;
          border-radius: 50%;
        }
        .bottom-main-container {
          display: flex;
          flex-direction: column;
          padding-left: 10px;
          .bottom-top {
            p {
              font-size: 16px;
              line-height: 16px;
            }
            h4 {
              font-size: 24px;
              line-height: 24px;
            }
          }
        }
      }
      .menu-container {
        display: flex;
        overflow: hidden;
        .menu {
          width: 380px;
          overflow-x: auto;
          overflow-y: hidden;
          padding-top: 28px;
          margin-left: 0;
          height: 62px;
          ul {
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
            .selected {
              border-bottom: 4px solid red;
            }
          }
        }
      }
    }
  }
}
</style>