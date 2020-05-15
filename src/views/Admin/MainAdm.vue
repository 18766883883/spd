<template>
<div>
    <el-col :span="3">
        <div class="grid-content bg-white"></div>
    </el-col>
    <el-col :span="18">
        <div>
            <el-row>
                <el-col :span="5">
                    <el-button round>班级系统</el-button>
                </el-col>
                <el-col :span="5">
                    <el-button round @click="ToQuestion">题目训练</el-button>
                </el-col>
                <el-col :span="5">
                    <el-button round>众包平台</el-button>
                </el-col>
                <el-col :span="5">
                    <el-button round>信息管理</el-button>
                </el-col>
                <el-col :span="4">
                </el-col>
            </el-row>
            <el-divider></el-divider>
            <router-view></router-view>
        </div>
    </el-col>
    <el-col :span="3">
        <div class="grid-content bg-white"></div>
    </el-col>

</div>
</template>

<script>
export default {
    name: "MainAdm",
    methods: {
        ToQuestion() {
            this.$router.push({
                name: 'AdmQuestion'
            });
        }
    }
}
</script>

<style scoped>
.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-white {
    background: white;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
