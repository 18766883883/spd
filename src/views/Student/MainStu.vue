<template>
<el-container style="height: 100%; border: 1px solid #ffffff">

    <el-aside width="160px" style="background-color: rgb(255,255,255)">
        <el-menu :default-openeds="['0']">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>班级</template>
                <el-menu-item-group>
                    <el-menu-item index="1-1" @click="ToList">我的班级</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>训练</template>
                <el-menu-item index="2-1" @click="ToQuestionSelector">题目训练</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>任务市场</template>
                <el-menu-item-group>
                    <el-menu-item index="3-1" @click="ToRank()">天梯</el-menu-item>
                    <el-menu-item index="3-2" @click="ToGetTask()">领任务</el-menu-item>
                    <el-menu-item index="3-2" @click="ToUpTask()">发布任务</el-menu-item>
                </el-menu-item-group>

            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-setting"></i>用户管理</template>
                <el-menu-item-group>
                    <el-menu-item index="4-1" @click="ToChangePassword">修改密码</el-menu-item>
                    <el-menu-item index="4-2" @click="ToChangeName">修改昵称</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>

    <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <span>{{className}}</span>
            <span>欢迎！{{userId}}</span>
        </el-header>

        <el-main style="height:100%">
            <router-view></router-view>
        </el-main>
    </el-container>

</el-container>
</template>

<script>
export default {
    props: ['userId', 'className'],
    methods: {
        ToList() {
            this.$router.push({
                name: 'StudentList',
                params: {
                    userId: this.$route.params.userId
                }
            });
        },
        ToChangePassword() {
            this.$router.push({
                name: 'StudentChangePassword',
                params: {
                    userId: this.$route.params.userId
                }
            });
        },
        ToChangeName() {
            this.$router.push({
                name: 'StudentChangeName',
                params: {
                    userId: this.$route.params.userId
                }
            });
        },
        ToQuestionSelector() {
            this.$router.push({
                name: 'QuestionSelector',
                params: {
                    userId: this.$route.params.userId
                }
            });
        },
        ToGetTask() {
            this.$router.push({
                name: 'GetTask',
                params: {
                    userId: this.$route.params.userId
                }
            });
        },
        ToUpTask() {
            this.$router.push({
                name: 'UploadTask',
                params: {
                    userId: this.$route.params.userId
                }
            });
        },
        ToRank() {
            this.$router.push({
                name: 'Rank',
                params: {
                    userId: this.$route.params.userId
                }
            });

        }
    },

};
</script>

<style scoped>
.html {
    height: 100%;
}

.body {
    height: 100%;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}

.el-row {
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
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
