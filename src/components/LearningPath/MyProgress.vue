<template>
<div>
    <el-steps direction="vertical" :active="active" finish-status="success">
        <el-step  class="my-step" v-for="item in recommendedPath" :key="item.id" :title="item.name" @click.native="clickKnowledge(item.name)">
        </el-step>
    </el-steps>
</div>
</template>

<script>
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
        getRecommendedPath(userId, knowledgeType) {},
        clickKnowledge(name) {
            console.log(name)
        }
    },

    mounted() {
        // this.getRecommendedPath(this.userId);
        this.recommendedPath = [{
            name: '顺序表',
            id: 'contiguousList'
        },{
            name: '单链表',
            id: 'singlyLinkedList'
        },{
            name: '栈',
            id: 'stack'
        },{
            name: '队列',
            id: 'queue'
        },{
            name: '完全二叉树',
            id: 'completeBinaryTree'
        },{
            name: '邻接矩阵',
            id: 'adjacencyMatrix'
        },{
            name: '广度优先搜索',
            id: 'breadthFirstSearch'
        },{
            name: '折半查找',
            id: 'binarySearch'
        },{
            name: '快速排序',
            id: 'quickSort'
        },
        ]
    }
};
</script>
<style scoped>
</style>
