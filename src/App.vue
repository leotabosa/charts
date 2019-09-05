<template>
<div :class="$style.wrapper">
  <div :class="$style.header"> 
    <button 
      :class="$style.headerButtons" 
      type="button" 
      class="btn btn-primary" 
      @click="changeChart(1)">Apexchart
    </button>
  </div>
    <Apexchart v-if="selected === 'apexchart'" />
</div>
</template>

<script>
import Apexchart from './components/apexchart.vue'
  export default {
    components: {
      Apexchart
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
      }
    }
  }
</script>

<style module>
  .wrapper{
    height: fit-content;
    width: 100%;  
  }
  .header{
    background-color:lightblue;

    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-bottom: 10px;
  }
  .headerButtons{
    margin: 10px 10px 10px 10px;
  }

</style>