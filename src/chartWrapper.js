Vue.component("ChartWrapper", {
    template: "#chart-wrapper-template",
    props: {
        chartData: {
          type: Object,
          default: () => {
            return {
              id: '',
              style: null,
              option: null,
            }
          }
        }
      },
      data() {
        return {
          defaultStyle: {width: '300px', height: '300px'}
        }
      },
      mounted() {
        this.initChart();
      },
      watch:{
          chartData: {
              handler:()=>{
                this.chartInstance&&this.chartInstance.drawEchart()
              },
              deep: true
          }
      },
      methods: {
        initChart() {
          this.chartInstance = echarts.init(document.getElementById(this.chartData.id));
        },
        drawChart() {
          if(this.chartInstance) {
            this.chartInstance && this.chartInstance.showLoading();
            this.chartInstance.setOption(this.chartData.option);
            this.chartInstance.hideLoading();
          }
        }
      }
})