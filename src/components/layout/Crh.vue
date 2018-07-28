<template>
    <div>
        <md-toolbar class="md-primary">
             <h3 class="md-title">CRH maps</h3>
        </md-toolbar>
        <div id="operation">
            <div>
                缩放页面<input type="range" v-model.number="amount"> {{ amount }}%
            </div>
            <div>
                <md-button @click="createSvg()" class="md-raised">Default</md-button>
            </div>
            <div>
                <md-field>
                    <label>名称</label>
                    <md-input v-model="initial"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item">
                <md-field>
                    <label for="movie">选择高铁</label>
                    <md-select v-model="movie" name="movie" id="movie">
                        <md-option value="fight-club">Fight Club</md-option>
                        <md-option value="godfather">Godfather</md-option>
                        <md-option value="godfather-ii">Godfather II</md-option>
                        <md-option value="godfather-iii">Godfather III</md-option>
                        <md-option value="godfellas">Godfellas</md-option>
                        <md-option value="pulp-fiction">Pulp Fiction</md-option>
                        <md-option value="scarface">Scarface</md-option>
                    </md-select>
                </md-field>
            </div>
        </div>
        <div id="display-area"></div>
    </div>
</template>

<script>
var d3 = require("d3");
export default {
  name: "Crh",
  data: () => ({
    amount: 0,
    initial: "test",
    movie: "godfather"
  }),
  methods: {
    createSvg() {
      d3
        .select("#display-area")
        .append("svg")
        .attr("width", 12800)
        .attr("height", 12800);
      console.log("-=-");
    }
  },
  title() {
    return "CRH";
  }
};
</script>
<style lang="scss">
#operation {
  width: 100%;
  height: 100px;
  margin-top: 10px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #eee;
  div {
    margin-right: 20px;
  }
  div.md-layout-item {
    .md-field {
      width: 300px;
    }
  }
}
</style>
