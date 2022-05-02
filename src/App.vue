<template>
  <div class="app">
      <div class="header">
        <div class="title">Demo</div>
      </div>
      <Barchart class="barchart" :canvasWidth="toWidth(0.8)" :canvasHeight="toHeight(0.8)"></Barchart>
  </div>
</template>

<script>
const d3 = require("d3")
import $ from 'jquery'
import {mapState} from "vuex"
import global from "@/constants/global"

import Barchart from "@/components/Barchart.vue"

const baseSize = 16

export default {
  name: 'App',
  data() {
    return {
      renderComponent: true,
      curSelect: null,
    }
  },
  computed: {
    ...mapState(['rem']),
  },
  components: {
    Barchart,
  },
  methods: {
    toWidth(p) {
      return window.innerWidth * p;
    },
    toHeight(p) {
      return window.innerHeight * p;
    },
    setRem() {   
      // 用于根据页面大小设定rem，以自适应元素大小
      let self =this
      const scale = global.PageSize().width / 1280   
      let rem = (baseSize * Math.min(scale, 50))
      self.$store.commit("changeRem", rem)
      document.documentElement.style.fontSize = rem + 'px' 
    },
    init(){
      let self = this;
      self.setRem()
      window.onresize = function () { 
        self.init();
      }
    }
  },
  created() {
  },
  mounted() {
    let self = this
    self.init()
  }
}
</script>

<style lang="scss">
html, body, #app {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

<style scoped lang="scss">

.app {
  $gap: 1.2vh;
  $header-height: 10vh;
  $side-width: 25vw;
  $info-height: 50vh;
  height: 100vh;
  width: 100vw;
  background-color: #FCFCFC;

  & > div {
    position: fixed;
    background-color: #FCFCFC;
  }

  .header {
    top: 0;
    width: 100vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: gainsboro;

    .title {
      display: block;
      height: 3vh;
      font-size: 1.2rem;
    }
  }

  .barchart {
    top: 5vh;
    left: 20vw;
    width: 80vw;
    height: 65vh;
  }
}


</style>
