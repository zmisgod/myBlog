<template>
    <div class="crh">
        <md-toolbar class="md-primary fxied header">
             <h3 class="md-title" style="flex: 1"> China High Speed Railway Maps (CHSR Maps)</h3>
             <md-button class="md-primary" @click="goback()"><md-icon>home</md-icon>Go Back Home</md-button>
        </md-toolbar>
        <div id="operation" class="fxied tools">
          <div v-if="!isGen">
            <md-button @click="createSvg()" class="md-raised"><md-icon>loop</md-icon>Generate Map</md-button>
          </div>
          <div v-if="isGen">
            <!-- <md-button @click="saveSvg()" class="md-raised" disabled><md-icon>get_app</md-icon>Save Map</md-button> -->
          </div>
          <div v-if="isGen">
              <md-button class="md-raised md-primary" :disabled="isMax" @click="max"><md-icon>zoom_in</md-icon>Enlarge</md-button>
              <md-button class="md-raised md-primary" :disabled="isMin" @click="min"><md-icon>zoom_out</md-icon>Reduce</md-button>
          </div>
          <div v-if="isGen">
            <!-- <md-button class="md-raised md-primary" @click="runMap"><md-icon>play_arrow</md-icon>Run</md-button> -->
          </div>
          <div class="md-layout-item"  v-if="isGen">
            <!-- <md-field>
              <label for="trainNo">请选择铁路线路</label>
              <md-select v-model="trainNo" name="trainNo" id="trainNo">
                  <md-option value="">请选择</md-option>
                  <md-option :key="index" v-for="(value,index) in crhTrainLists" :value="value.train_no">{{value.name}}</md-option>
              </md-select>
            </md-field> -->
          </div>
        </div>
        <div v-if="isGen" id="display-area" v-html="crhMap"></div>

        <md-snackbar md-position="center" :md-duration="duration" :md-active.sync="showMessage" md-persistent>
          <span>{{message}}</span>
          <md-button class="md-primary" @click="showMessage = false">Ok</md-button>
        </md-snackbar>
    </div>
</template>

<script>
var d3 = require("d3");
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Crh",
  data: () => ({
    isMax: false,
    isMin: false,

    svgObject: {},
    isGen: false,
    zoom: 10,
    minZoom: 0,
    maxZoom: 100,
    selectedEmployee: "",
    trainNo: "",
    showImage: false,

    selectStation: {
      name: "",
      address: "",
      latitude: "",
      longtitude: ""
    },

    showMessage: false,
    message: "",
    duration: 4000
  }),
  computed: {
    ...mapGetters([
      "crhOneTrainDetail",
      "crhMap",
      "crhTrainLists",
      "staticHost"
    ])
  },
  created() {
    // this.CRHREQUEST(this.staticHost + "static/group_list.json");
    // this.CRHSETTYPE(1);
    // this.$store.dispatch("crhQuery");
  },
  mounted() {
    this.$nextTick(function() {
      // window.addEventListener("click", this.clickCircle);
      // window.addEventListener("mouseover", this.hoverCircle);
      // window.addEventListener("mouseout", this.leaveCircle);
    });
  },
  watch: {
    trainNo() {
      if (this.trainNo == "") {
        this.showMessage = true;
        this.message = "errrrr";
      } else {
        this.CRHREQUEST(
          this.staticHost + "static/crhJSON/" + this.trainNo + ".json"
        );
        this.CRHSETTYPE(2);
        this.$store.dispatch("crhQuery");
      }
    },
    crhOneTrainDetail() {
      d3
        .select("#display-area svg")
        .append("polyline")
        .attr("points", this.crhOneTrainDetail.path)
        .attr("id", this.crhOneTrainDetail.train_no)
        .attr(
          "style",
          "fill:none;stroke:" +
            "#000" +
            ";stroke-width:" +
            this.crhOneTrainDetail.stroke_width
        );
    }
  },
  methods: {
    goback() {
      history.go(-1);
    },
    ...mapMutations(["CRHREQUEST", "CRHSETTYPE"]),
    multipleString() {
      return this.zoom * 10;
    },
    max() {
      if (this.zoom < this.maxZoom) {
        this.isMin = false;
        this.isMax = false;
        this.zoom += 1;
        this.zoomMap();
      } else {
        this.isMax = true;
      }
    },
    min() {
      if (this.zoom > this.minZoom) {
        this.isMin = false;
        this.isMax = false;
        this.zoom -= 1;
        this.zoomMap();
      } else {
        this.isMin = true;
      }
    },
    runMap() {
      let res = this.crhTrainLists;
      res.map(value => {
        this.CRHREQUEST(
          this.staticHost + "/static/crhJSON/" + value.train_no + ".json"
        );
        this.CRHSETTYPE(2);
        this.$store.dispatch("crhQuery");
      });
    },
    zoomMap() {
      this.svgObject = d3.select("#display-area svg")._groups[0][0];
      this.svgObject.setAttribute("width", this.multipleString() + "%");
      this.svgObject.setAttribute("height", this.multipleString() + "%");
    },
    createSvg() {
      this.isGen = true;
      this.showImage = true;
      this.CRHREQUEST(this.staticHost + "static/stations.svg");
      this.CRHSETTYPE(0);
      this.$store.dispatch("crhQuery");
    },
    saveSvg() {
      var svgSourceCode = document.getElementById("display-area");
      console.log(svgSourceCode.innerHTML);
    },
    clickCircle() {
      var lis = document.getElementsByTagName("circle");
      for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function(e) {
          if (e.path[0].getAttribute("r") != 6) {
            e.path[0].setAttribute("r", 6);
          }
        };
      }
    },
    hoverCircle() {
      var lis = document.getElementsByTagName("circle");
      for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function(e) {
          if (e.path[0].getAttribute("r") == 6) {
            e.path[0].setAttribute("r", 2);
          } else {
            e.path[0].setAttribute("r", 6);
          }
        };
      }
    },
    leaveCircle() {
      var lis = document.getElementsByTagName("circle");
      for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseout = function(e) {
          if (e.path[0].getAttribute("r") == 6) {
            e.path[0].setAttribute("r", 2);
          } else {
            e.path[0].setAttribute("r", 6);
          }
        };
      }
    }
  },
  title() {
    return "CHSR";
  },
  description() {
    return "China High Speed Railway Maps";
  },
  keywords() {
    return "crh, maps, CHSR, CHSR maps";
  }
};
</script>
<style lang="scss" scoped>
.md-button-content {
  justify-content: center;
  align-items: center;
  display: flex;
}
svg {
  transform: scale(1, -1);
  z-index: -222;
}
.crh {
  color: #eee;
}
circle {
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
}
.fxied {
  position: fixed;
}
.tools {
  top: 60px;
}
#operation {
  width: 100%;
  height: 100px;
  margin-top: 10px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #eee;
  z-index: 999;
  div {
    margin-right: 20px;
  }
  div.md-layout-item {
    .md-field {
      width: 300px;
    }
  }
}
#display-area {
  padding-top: 64px;
}
</style>
