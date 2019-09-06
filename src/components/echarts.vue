<template>
  <div :class="$style.libWrapper">
    <div :class="$style.chartWrapper">
      <VueEcharts :options="optionBar" :autoresize="true" @click="alert"></VueEcharts>
    </div>
    <div :class="$style.chartWrapper">
      <VueEcharts :options="optionPie" :autoresize="true" @click="alert"></VueEcharts>
    </div>
    <div :class="$style.chartWrapper">
      <VueEcharts :options="optionLine" :autoresize="true" @click="alert"></VueEcharts>
    </div>
    <div :class="$style.chartWrapper">
      <VueEcharts :options="optionAreaLine" :autoresize="true" @click="alert"></VueEcharts>
    </div>
  </div>
</template>

<script>
import vueEcharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'

const colors = [{
          type: 'linear',
          x: 1,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [{
              offset: 0, color: '#00FFFF'
          }, 
          {
              offset: 0.5, color: '#20B2AA'
          },
          {
              offset: 1, color: '#20B2AA'
          }],
        }, 
        {
          type: 'linear',
            x: 1,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{
                offset: 0, color: '#00FFFF'
            }, 
            {
                offset: 0.5, color: '#1E90FF'
            },
            {
                offset: 1, color: '#4682B4'
            }]
          },
          {
          type: 'linear',
            x: 1,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{
                offset: 0, color: '#87CEEB'
            }, 
            {
                offset: 0.5, color: '#87CEEB'
            },
            {
                offset: 1, color: '#4682B4'
            }]
          }
        ]

export default {
  components:{
    VueEcharts: vueEcharts
  },
  methods:{
    alert(){
      alert('Detalhes')
    }
  },
  data () {
    return {
      optionBar: {
        legend: {},
        color: [{
          type: 'linear',
            x: 1,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{
                offset: 0, color: '#1E40FF'
            }, 
            {
                offset: 0.5, color: '#1E90FF'
            },
            {
                offset: 1, color: '#87CEEB'
            }]
          }
        ],
        tooltip: {},
        dataset: {
          source: [
            ['Lorus Ipsem', 44, 55, 41, 17, 15],
          ]
        },
        xAxis: {type: 'category'},
        yAxis: {},
        series: [
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'}
        ],
        toolbox:{
          show: true,
          saveAsImage:{
            type: 'png'
          }
        }
      },
      optionPie:{
        color: colors,
        title: {
          text: 'Pie',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem']
        },
        series: [
          {
            name: 'Pie',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 44, name: 'Lorem I' },
              { value: 55, name: 'Lorem Ip' },
              { value: 41, name: 'Lorem Ips' },
              { value: 17, name: 'Lorem Ipsu' },
              { value: 15, name: 'Lorem Ipsum' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      optionLine:{
        color: colors,
        xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
          type: 'line'
        },
        {
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
          type: 'line'
        },
        {
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
          type: 'line'
        }]
      },
      optionAreaLine:{
        color: colors,
        title: {
        text: 'Lorem'
        },
        tooltip : {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type : 'category',
            boundaryGap : false,
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type : 'value'
          }
        ],
        series: [
          {
            name:'Lorem',
            type:'line',
            stack: 'Lorem',

            areaStyle: {
              color: colors[2]
            },
            data:[120, 132, 101, 134, 90, 230, 210]
          },
        ]
      }
    }
  }
}
</script>

<style module>
  .libWrapper{
    width: 98vw;
    margin-bottom: 50px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .chartWrapper{
    height: fit-content;
    width: fit-content;
    border-radius: 10px;
    padding-top: 10px;
    margin: 30px 30px 10px 10px;
    box-shadow: 1px 1px 2px 1px lightgray;
  }
</style>