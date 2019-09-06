<template>
<div :class="$style.wrapper">
  <div :class="$style.header"> 
    <button 
      :class="$style.headerButtons" 
      type="button" 
      class="btn btn-primary" 
      @click="changeChart(1)">Apexchart
    </button>
    <button 
      :class="$style.headerButtons" 
      type="button" 
      class="btn btn-primary" 
      @click="changeChart(2)">ECharts
    </button>
  </div>
    <Apexchart v-if="selected === 'apexchart'" />
    <Echarts v-if="selected === 'echart'"/>
</div>
</template>

<script>
import Apexchart from './components/apexchart.vue'
import Echarts from './components/echarts.vue'

  export default {
    components: {
      Apexchart,
      Echarts
    },
    data(){
      return{
        selected: 'apexchart'
      }
    },
    methods:{
      changeChart(value){
        if(value === 1){
          this.selected = 'apexchart'
        }
        if(value === 2){
          this.selected = 'echart'
        }
      }
    }
  }
</script>

<style module>
  .wrapper{
    height: fit-content;
    width: 100%; 
    background-color: #f7ffff;
  }
  .header{
    background-color:rgb(32, 30, 30);

    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }
  .headerButtons{
    margin: 10px 10px 10px 10px;
  }

</style>