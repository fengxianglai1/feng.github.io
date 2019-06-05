<template>
    <div id="echarts">
         {{this.$store.state.com.loading}}
        <div id="echartContainer" style="width:100%; height:500px"></div>
    </div>
</template>

<script>
var echarts = require('echarts')
export default {
    mounted() {
        var myChart = echarts.init(document.getElementById('echartContainer'));
        
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }

}
</script>
<style lang="scss" scoped="" type="text/css">
*{
  margin:0;
  padding:0;
}
#echarts{
    width:calc(100% - 200px);
    margin-left:200px;
}
</style>