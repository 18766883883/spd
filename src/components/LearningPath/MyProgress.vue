<template>
<div>
    <div class="progress-title">
        <i class="el-icon-s-data"></i>
        学习进展
    </div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <div class="progress-status">
        <el-col :span="8">
            <div>未做</div>
            <div>已完成</div>
            <div></div>
        </el-col>
        <el-col :span="8"></el-col>
        <el-col :span="8"></el-col>
    </div>
</div>
</template>
<script>
import echarts from 'echarts'
export default {
    name: "myProgress",

    data() {
        return {
            recommendedPath: [],
            active: 10
        };
    },
    props: {
        userId: Number
    },
    methods: {
        drawChart() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: {
                    text: '在Vue中使用echarts'
                },
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
            })
        }
    },

    mounted() {
        this.drawChart();
    }
}
</script>

<style scoped>
.progress-title {
    margin-bottom: 10px;
    text-align: left;
    font-size: 20px;
}
</style>
