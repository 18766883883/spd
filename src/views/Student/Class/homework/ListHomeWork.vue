<template>
  <el-table :data="tableData" title="我的作业">
    <el-table-column prop="title" label="题目名称" width="140">
    </el-table-column>
    <el-table-column prop="type" label="题目类型" width="140">
    </el-table-column>
    <el-table-column prop="content" label="题目描述" >
    </el-table-column>

    <el-table-column label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="ToHomework(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props:['userId'],
    methods:{
      ToHomework(row){
        console.log(row.id+row.title);
        //this.$router.push({name:'StudentClass',params:{userId:this.$route.params.userId,classId:row.id,className:row.name}});
      }
    },
    data() {
      const item =
        [
          {
            title: '冒泡排序',
            content: '实现冒泡排序',
            type:'简述题',
            id:'1'
          },{
            title:'堆排序',
            content:'实现堆排序',
            type:'简述题',
            id: '2'
        }
        ]
      ;
      return {
        tableData : item
      }
    },
  };
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
