<template>
  <el-row>
    <el-col :span="8"><div style="color:white">
      1
    </div></el-col>
    <el-col :span="8"><div >
      <el-table :data="tableData">
        <el-table-column prop="number" label="人数" width="140">
        </el-table-column>
        <el-table-column prop="name" label="我的班级" >
        </el-table-column>

        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="ToClass(scope.row)" type="text" size="small">查看</el-button>
            <el-button @click="ExitClass(scope.row)" type="text" size="small">退出</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-button>添加班级</el-button>
    </div></el-col>
    <el-col :span="8"><div style="color:white">1</div></el-col>
  </el-row>

</template>

<script>
  export default {
    props:['userId'],
    methods:{
      ToClass(row){
        console.log(row.id);
        this.$router.push({name:'StudentClass',params:{userId:this.$route.params.userId,classId:row.id,className:row.name}});
      },
      ExitClass(row){
        console.log("退出"+row.name);
      }
    },
    data() {
      const item =
        [
          {
            number: '56',
            name: '数据结构与算法设计',
            id:'1'
          },{
          number:'34',
          name:'数据库',
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
