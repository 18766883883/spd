<template>
<div>
    <el-col :span="3">
        <div class="grid-content bg-white"></div>
    </el-col>

    <el-col :span="18">
        <el-row class="top-menu">
          <i class="el-icon-menu"></i>
            板块-全部
        </el-row>
        <el-row>
            <el-col :span="4">
                <el-button class="my-btn" style="background:#F1C40F">班级系统</el-button>
            </el-col>
            <el-col :span="4">
                <el-button class="my-btn" style="background:#3498DB" @click="ToQuestion">题目训练</el-button>
            </el-col>
            <el-col :span="4">
                <el-button class="my-btn" style="background:#2ECC71">众包平台</el-button>
            </el-col>
            <el-col :span="4">
                <el-button class="my-btn" style="background:#9B59B6">信息管理</el-button>
            </el-col>
            <el-col :span="8">
            </el-col>
        </el-row>
        <el-divider class="my-divider"></el-divider>
        <router-view></router-view>
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

.top-menu {
  text-align: left;
  font-size: 26px;
  margin: 10px 10px;
}

.my-btn {
  height: 100px;
  width: 60%;
  border-radius: 10px;
  font-size: 20px;
  color:whitesmoke;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
}

.my-divider{
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
}
</style>
