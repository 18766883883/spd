<template>
  <el-row>
    <el-col :span="8"><div style="color:white">
      1
    </div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-light">
      <el-table :data="Task_TableData" title="任务">
        <el-table-column prop="title" label="任务名称" width="140">
        </el-table-column>
        <el-table-column prop="content" label="任务描述" width="140">
        </el-table-column>


        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="To_Task(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div></el-col>
    <el-col :span="8"><div style="color:white">1</div></el-col>
  </el-row>

</template>

<script>
    export default {
        name: "GetTask",
      data(){
        const item=[
          {
            idtask : '001',
            title : '任务一',
            content : '任务一描述内容',
            input : '任务一输入',
            output : '任务一输出'
          },{
            idtask : '002',
            title : '任务二',
            content : '任务二描述内容',
            input : '任务二输入',
            output : '任务二输出'
          }
        ];
        return {
          Task_TableData:item
        }
      },
      methods:{
          To_Task(row){
            console.log(row.title);
          }
      }
    }
</script>

<style scoped>

</style>
