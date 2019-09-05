<template>
  <div>
      <div>
        <span style="padding-left: 10px">Desvantagens: Não tem muitos tipos de gráficos.</span>
        <span style="padding-left: 10px">Vantagens: Exportação em PNG e SVG, toolbar com zoom e etc.</span>
        <p style="padding-left: 10px">Opções de estilização: Cores, gradiente, temas monocromáticos (como abaixo), animações,
        </p>
      </div>
      <hr>
      <div :class="$style.libWrapper">
          <div :class="$style.chartWrapper">
            <div :class="$style.chartTitle">Título</div>
            <hr>
            <apexchart width="380" height=278 type="donut" :options="donut.chartOptions" :series="donut.series"></apexchart>
          </div>
          <div :class="$style.chartWrapper">
            <apexchart type=bar width= "380" height=300 :options="columns.chartOptions" :series="columns.series" />
          </div>
          <div :class="$style.chartWrapper">
            <apexchart type=radialBar height=325 :options="circle.chartOptions" :series="circle.series" />
          </div>
          <div :class="$style.chartWrapper">
            <apexchart type=area height=300 :options="area.chartOptions" :series="area.series" />
          </div>
          <div :class="$style.chartWrapper">
            <apexchart type=bar height=300 :options="bar.chartOptions" :series="bar.series" />
          </div>
          <div :class="$style.chartWrapper">
            <apexchart type=radialBar height=300 :options="semicircle.chartOptions" :series="semicircle.series" />
          </div>
      </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'



export default {
  data() {
    return{
      donut:{
        series: [44, 55, 41, 17, 15],
        chartOptions: {
          theme: {
            monochrome: {
              enabled: true
            }
          },
          labels: ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem"],
          responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              toolbar: {
                show:true
              },
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    },
    columns:{
      series: [{
        data: [44, 55, 41, 17, 15]
      }],
      chartOptions: {
        title:{
          text:'Outra opção de título'
        },
        theme: {
            monochrome: {
              enabled: true
            }
        },
        fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: []
          }
        },
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            columnWidth: '25%',
            distributed: true
          }
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'],
          labels: {
            style: {
              fontSize: '14px'
            }
          }
        }
      },
    },
    circle:{
      series: [75],
      chartOptions:{
        title:{
          text:'Outra opção de título'
        },
        plotOptions:{
          radialBar:{
            hollow:{
              size:'62%',
            }
          },
        dataLabels: {
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '17px'
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: '#111',
              fontSize: '36px',
              show: true,
            }
          },
        },
        labels: ['Lorem']
      }
    },
    bar:{
      series: [{
          data: [44, 55, 41, 17, 15]
        }],
        chartOptions: {
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: undefined,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 100],
              colorStops: []
              }
            },
          plotOptions: {
            bar: {
              horizontal: true,
              endingShape: 'rounded',
              barHeight: '20%',
            },
          },
          dataLabels: {
            enabled: true,
          },
          xaxis: {
            categories: ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem',],
        }
      }
    },
    area:{
      series: [{
          name: 'Lorem',
          data: [44, 55, 41, 17, 15, 55, 30]
        }, {
          name: 'Lorem',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
        chartOptions: {
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
            colors: undefined,
            strokeColors: '#fff',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            hover: {
              size: undefined,
              sizeOffset: 3
            }
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00",
              "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00",
              "2018-09-19T06:30:00"
            ],
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
          },
        }
      }
    },
    semicircle:{
      series: [76],
        chartOptions: {
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, 
                shadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: '#999',
                  opacity: 1,
                  blur: 2
                }
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY:5,
                  fontSize: '25px'
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 53, 91]
            },
          },
        }
    }
  }
},
  components:{
    apexchart: VueApexCharts
  }
}
</script>

<style module>
    .libWrapper{
      width: 98vw;
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
    .chartTitle{
      
      padding-top: 5px;
      padding-left: 30px;
    }
</style>