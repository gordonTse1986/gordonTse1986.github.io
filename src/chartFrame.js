Vue.component("ChartFrame", {
    name: "chart-frame",
    template: "#chart-frame-template",
    data() {
        return {
            chartData: {
              id: 'firstEchart',
              style: {width: '1000px', height: '650px'},
              option:  {
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    type: 'cross',
                    crossStyle: {
                      color: '#999'
                    }
                  }
                },
                toolbox: {
                  feature: {
                    restore: { show: true },
                  }
                },
                legend: {
                  data: ['频率', 'LEV', 'LCM']
                },
                xAxis: [
                  {
                    type: 'category',
                    data: rawData.map(item=>item.date),
                    axisPointer: {
                      type: 'shadow'
                    }
                  }
                ],
                yAxis: [
                  {
                    type: 'value',
                    name: '频率',
                    min: 0,
                    max: 45,
                    interval: 1,
                    axisLabel: {
                      formatter: '{value} 次'
                    }
                  },
                  {
                    type: 'value',
                    name: '剂量',
                    min: 0,
                    max: 7,
                    interval: 0.5,
                    axisLabel: {
                      formatter: '{value} ml'
                    }
                  }
                ],
                series: [
                  {
                    name: '频率',
                    type: 'line',
                    smooth: true,
                    yAxisIndex: 0,
                    tooltip: {
                      valueFormatter: function (value) {
                        return value + ' 次';
                      }
                    },
                    data: rawData.map(item=>item.frequency)
                  },
                  {
                    name: 'LEV',
                    type: 'line',
                    yAxisIndex: 1,
                    tooltip: {
                      valueFormatter: function (value) {
                        return value + ' ml';
                      }
                    },
                    data: rawData.map(item=>item.LEV)
                  },
                  {
                    name: 'LCM',
                    type: 'line',
                    yAxisIndex: 1,
                    tooltip: {
                      valueFormatter: function (value) {
                        return value + ' ml';
                      }
                    },
                    data: rawData.map(item=>item.LCM)
                  }
                ]
              }
            }
          };
    },
    
  mounted() {
    this.$refs.firstEchart.drawChart();
  },
})
