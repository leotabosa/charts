<template>
  <div>
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
            <apexchart type=heatmap height=300 width=500 :options="heatmap.chartOptions" :series="heatmap.series" />
          </div>
          <div :class="$style.chartWrapper">
            <apexchart type=radialBar height=300 :options="semicircle.chartOptions" :series="semicircle.series" />
          </div>
          <div :class="$style.chartWrapper">
            <apexchart type=line height=300 :options="line.chartOptions" :series="line.series" />
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
          type: 'bar' 
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
    },
    heatmap:{
      series: [{
            name: 'Metric1',
            data: generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric2',
            data: generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric3',
            data: generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric4',
            data: generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric5',
            data: generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric6',
            data: generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric7',
            data: generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric8',
            data: generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric9',
            data: generateData(18, {
              min: 0,
              max: 90
            })
          }
        ],
        chartOptions: {
          dataLabels: {
            enabled: false
          },
          colors: ["#008FFB"],

          title: {
            text: 'HeatMap Chart (Single color)'
          }
        }
      },
      line:{
        series: [{
            name: "Session Duration",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
          },
          {
            name: "Page Views",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
          },
          {
            name: 'Total Visits',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
          }
        ],
        chartOptions: {
          chart: {
            zoom: {
              enabled: false
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [5, 7, 5],
            curve: 'straight',
            dashArray: [0, 8, 5]
          },

          title: {
            text: 'Page Statistics',
            align: 'left'
          },
          markers: {
            size: 0,
            
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
              '10 Jan', '11 Jan', '12 Jan'
            ],
          },
          tooltip: {
            y: [{
              title: {
                formatter: function (val) {
                  return val + " (mins)"
                }
              }
            }, {
              title: {
                formatter: function (val) {
                  return val + " per session"
                }
              }
            }, {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            }]
          },
          grid: {
            borderColor: '#f1f1f1',
          }
        }
      }
    }
  },
  components:{
    apexchart: VueApexCharts
  }
}
function generateData(count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = 'w' + (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
          x: x,
          y: y
        });
        i++;
      }
      return series;
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
    .chartTitle{
      padding-top: 5px;
      padding-left: 30px;
    }
</style>