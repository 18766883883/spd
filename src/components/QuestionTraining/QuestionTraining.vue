<template>
    <div>
      <el-col :span="18">
        <div>
          <el-table :data="tableData" title="训练" >
            <el-table-column prop="id" label="#" width="30" header-align="center"></el-table-column>
            <el-table-column prop="title" label="题目名称" width="340" header-align="center" align="center">
            </el-table-column>
            <el-table-column prop="type" label="题目类型" width="340" header-align="center" align="center">
            </el-table-column>
            <el-table-column label="操作" width="100" >
              <template slot-scope="scope">
                <el-button type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>

      <el-col :span="1"><div class="verticalBar" style="height:100%"></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </div>
</template>

<script>
    export default {
      name: "QuestionTraining",
      data() {
        //这里有题目的所有信息，但是只展示部分，传参时全部传入题目组件
        const item =
          [
            {
              title: '钢琴演奏家',
              type:'简述题',
              id:'1',
              has_pictures:'0',
              urls: '',
              answer:'answer'
            },{
            title:'迷宫',
            type:'填空题',
            id: '2',
            has_pictures:'0',
            urls:'',
            answer:'answer'
          },{
            title:'划水',
            content:'这是一个选择题',
            type:'选择题',
            id: '3',
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
            title:'完全平方数',
            content:'这是一个判断题',
            type:'判断题',
            id: '4',
            urls:'',
            has_pictures:'0',
            answer:'1'
          },{
            title:'完全平方数',
            content:'这是一个判断题',
            type:'判断题',
            id: '4',
            urls:'',
            has_pictures:'0',
            answer:'1'
          },{
            title:'完全平方数',
            content:'这是一个判断题',
            type:'判断题',
            id: '4',
            urls:'',
            has_pictures:'0',
            answer:'1'
          },{
            title:'完全平方数',
            content:'这是一个判断题',
            type:'判断题',
            id: '4',
            urls:'',
            has_pictures:'0',
            answer:'1'
          },{
            title:'钝形三角形',
            content:'这是一个判断题',
            type:'简答题',
            id: '5',
            urls:'',
            has_pictures:'0',
            answer:'1'
          },{
            title:'组合游戏',
            content:'这是一个判断题',
            type:'填空题',
            id: '6',
            urls:'',
            has_pictures:'0',
            answer:'1'
          },{
            title:'线段树',
            content:'这是一个判断题',
            type:'判断题',
            id: '7',
            urls:'',
            has_pictures:'0',
            answer:'1'
          },{
            title:'打气球',
            content:'这是一个判断题',
            type:'选择题',
            id: '8',
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
    }
</script>

<style scoped>

  .verticalBar {
    width: 2px;
    height: 30px;
    background: #807b7b;
    display: inline-block;
    vertical-align: top;
    margin-right: 29px;
    margin-left: 30px;
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

