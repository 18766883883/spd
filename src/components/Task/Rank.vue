<template>
  <el-row>
    <el-col :span="8"><div style="color:white">
    1
    </div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-light">
      <el-table :data="Rank_tableData" title="排行榜">
        <el-table-column prop="sname" label="姓名" width="140">
        </el-table-column>
        <el-table-column prop="point" label="积分" width="140" >
        </el-table-column>
      </el-table>
    </div></el-col>
    <el-col :span="8"><div style="color:white">1</div></el-col>
  </el-row>

</template>

<script>
  import axios from 'axios'
  export default {
    name:'Rank',
    props:['userId'],
    data() {
      return {
        Rank_tableData :null
      }
    },
    beforeCreate() {
      axios.get('/stu_main/get_rank',{
        data:{
          userId:this.$route.params.userId
        }
      }).then((res)=>{
        console.log(res.data+"-----------------");
        this.Rank_tableData=res.data;
      }).catch((err)=>{
        console.log(err);
      })
    },
    methods:{

    }
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
