<template>
<div>
    <div class="path-title">
        <i class="el-icon-s-opportunity"></i>
        学习路径推荐
    </div>
    <el-steps direction="vertical" :active="active" finish-status="finish" class="steps" >
        <el-step class="my-step" v-for="item in recommendedPath" :key="item.id" :title="item.name" @click.native="clickKnowledge(item.name)">
        </el-step>
    </el-steps>
    <!-- 消息提示 -->
    <el-dialog title="提示" :visible.sync="problemChioceDialogVisible" :close-on-click-modal="false" class="path-dialog">
        <div class="msg">确定练习知识点<b>{{knowledgeType}}</b>的相关题目吗?</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="problemChioceDialogVisible = false">取消</el-button>
        <el-button type="primary" @click.native="getRecommendedProblem">确定</el-button>
      </div>
    </el-dialog>
</div>
</template>

<script>
export default {
    name: "recommendedPath",

    data() {
        return {
            recommendedPath: [],
            active: 10,
            problemChioceDialogVisible: false,
            knowledgeType: "随机"
        };
    },
    props: {
        userId: Number
    },
    methods: {
        getRecommendedPath(userId, time) {
            this.$axios({
                    method: "GET",
                    url: `/api/recommendedPath?userId=${userId}&time=${time}`,
                    timeout: 30000
                })
                .then(res => {
                    this.recommendedPath = res.data;
                })
                .catch(err => {
                    if (err.response) {
                        if (err.response.status === 500) {
                            this.$message({
                                message: "获取数据失败：服务器错误",
                                type: "error"
                            });
                        }
                    } else {
                        this.$message({
                            message: "获取数据失败:网络错误",
                            type: "error"
                        });
                    }
                })
        },
        getRecommendedProblem(userId, knowledgeType) {},
        clickKnowledge(name) {
            this.problemChioceDialogVisible = true
            this.knowledgeType = name
            console.log(name)
        }
    },

    mounted() {
        // this.getRecommendedPath(this.userId);
        this.recommendedPath = [{
            name: '顺序表',
            id: 'contiguousList'
        }, {
            name: '单链表',
            id: 'singlyLinkedList'
        }, {
            name: '栈',
            id: 'stack'
        }, {
            name: '队列',
            id: 'queue'
        }, {
            name: '完全二叉树',
            id: 'completeBinaryTree'
        }, {
            name: '邻接矩阵',
            id: 'adjacencyMatrix'
        }, {
            name: '广度优先搜索',
            id: 'breadthFirstSearch'
        }, {
            name: '折半查找',
            id: 'binarySearch'
        }, {
            name: '快速排序',
            id: 'quickSort'
        }, ]
    }
};
</script>

<style scoped>
.path-title {
    margin-bottom: 10px;
    text-align: left;
    font-size: 20px;
}

.my-step:hover {
    cursor: pointer;
    color: #67c23a;
    border-color: #67c23a;
}

.steps {
    height: 400px;
}

.msg {
    font-size: 20px;
}

.path-dialog{
    width: 50%;
    margin: 0 auto;
}
</style>
