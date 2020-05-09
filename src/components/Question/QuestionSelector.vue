<template>

    <el-row>
      <el-row class="el-row">
        <el-col :span="24"><div class="bg-blue-spd">
          每日一题
        </div></el-col>
      </el-row>

      <el-col :span="24"><div>
        <el-table :data="tableData" title="训练" >
        <el-table-column prop="title" label="题目名称" width="340" header-align="center" align="center">
        </el-table-column>
        <el-table-column prop="type" label="题目类型" width="340" header-align="center" align="center">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="ToQuestion(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table></div>
      </el-col>

    </el-row>


</template>

<script>
  export default {
    props:['userId'],
    methods:{
      ToQuestion(row){
        console.log(row.id+row.title);
        switch (row.type) {
          case '简述题':
            this.$router.push({name:'ShortQuestion',params:{userId:this.$route.params.userId,object:row}});
            break;
          case '选择题':
            this.$router.push({name:'ChoiceQuestion',params:{userId:this.$route.params.userId,object:row}});
            break;
          case '判断题':
            this.$router.push({name:'TrfQuestion',params:{userId:this.$route.params.userId,object:row}});
            break;
          case '填空题':
            this.$router.push({name:'FillQuestion',params:{userId:this.$route.params.userId,object:row}});
            break;
        }
        //this.$router.push({name:'StudentClass',params:{userId:this.$route.params.userId,classId:row.id,className:row.name}});
      }
    },
    data() {
      //这里有题目的所有信息，但是只展示部分，传参时全部传入题目组件
      const item =
        [
          {
            title: '简述题样例',
            type:'简述题',
            sa_uid:'1',
            has_pictures:'0',
            urls: '',
            answer:'answer'
          },{
          title:'填空题样例',
          type:'填空题',
          fi_uid: '2',
          has_pictures:'0',
          urls:'',
          answer:'answer'
        },{
          title:'选择题例子',
          content:'这是一个选择题',
          type:'选择题',
          mc_uid: '2',
          has_pictures:'0',
          answer:'a',
          urls:'',
          multiple:'',
          A:'选项A',
          B:'选项B',
          C:'选项C',
          D:'选项D',
          E:'选项E',
          F:'选项F',
        },{
          title:'判断题样例',
          content:'这是一个判断题',
          type:'判断题',
          trf_uid: '2',
          urls:'',
          has_pictures:'0',
          answer:'1'
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
  .el-row {
    margin-bottom: 20px;
    min-height:20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-blue-spd{
    background: #bbeeee;
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

