<template>
<div class="container">

</div>
</template>

<script>
const d3 = require("d3")
import $ from 'jquery'
import * as Data from "@/data/dataLoader"
import { mapState } from 'vuex'

const margin = {
  "left": 0.05,
  "right": 0.05,
  "top": 0.05,
  "bottom": 0.05
}

export default {
  name: "Barchart",
  props: ['canvasWidth', 'canvasHeight'],
  data() {
    return {
        
    }
  },
  computed: {
    ...mapState(['rem'])
  },
  watch: {
   
  },
  methods: {
    initializeDrawingFunction() {
      let self = this
      self.barRect = rect => {
        rect.attr("fill", "#69b3a2")
      }
    },
    drawbarchart(data, width, height) {
      // barchart example taken from d3 gallery
      // src link: https://d3-graph-gallery.com/graph/barplot_basic.html
      let self = this

      var x = d3.scaleBand()
        .range([ 0, width ])
        .domain(data.map(function(d) { return d.Country; }))
        .padding(0.2);
      self.barchart.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");

      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, 13000])
        .range([ height, 0]);
      self.barchart.append("g")
        .call(d3.axisLeft(y));

      // Bars
      self.barchart.selectAll("mybar")
        .data(data)
        .enter()
        .append("rect")
          .attr("x", function(d) { return x(d.Country); })
          .attr("y", function(d) { return y(d.Value); })
          .attr("width", x.bandwidth())
          .attr("height", function(d) { return height - y(d.Value); })
          .call(self.barRect)
    },
    initializebarchart(width, height) {
      let self = this
      d3.select(self.$el).selectAll("svg").remove()
      self.svg = d3.select(self.$el)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
      self.barchart = self.svg.append("g")
        .attr("id", "barchart")
        .attr("transform", `translate(${width * margin.left}, ${height * margin.top})`)

      let svgWidth = width * (1 - margin.left - margin.right)
      let svgHeight = height * (1 - margin.top - margin.bottom)

      let data = Data.get_data() // 获取数据
      self.initializeDrawingFunction()
      self.drawbarchart(data, svgWidth, svgHeight)
    }
  },
  mounted() {
    this.initializebarchart(this.canvasWidth, this.canvasHeight)
  }
}
</script>
