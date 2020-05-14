<template>
    <el-row style="height:100%">
        <el-col :span="20" style="height:100%">
            <div class="leftWindow">
                <h1>选择题---</h1>
            </div>
        </el-col>
        <el-col :span="4" style="height:100%">
            <div class="step">
                <recommendedPath ref="recommendedPath"></recommendedPath>
            </div>      
        </el-col>
    </el-row>
</template>

<script>
import recommendedPath from '@/components/LearningPath/RecommendedPath'
export default {
    name: "ChoiceQuestion",
    components: {
        recommendedPath
    }
}
</script>

<style scoped>
.leftWindow {
    height: inherit;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
}
.step {
    height: inherit;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
}
</style>
