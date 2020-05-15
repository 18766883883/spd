<template>
<div>
    <el-col :span="18">
        <div class="left-home-window">
            <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" title="训练">
              <el-table-column prop="id" label="#" width="60" header-align="center"></el-table-column>
              <el-table-column prop="title" label="题目名称" header-align="center" align="center"></el-table-column>
              <el-table-column prop="type" label="题目类型" width="300" header-align="center" align="center"></el-table-column>
              <el-table-column prop="difficulty" label="难度" width="300" header-align="center" align="center"></el-table-column>

              <el-table-column prop="number" label="完成人数" width="300" header-align="center" align="center"></el-table-column>
                <el-table-column label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5,10]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length">
          </el-pagination>
        </div>
    </el-col>
    <el-col :span="1">
        <div class="verticalBar" style="height:100%"></div>
    </el-col>
    <el-col :span="5">
        <div class="right-home-window">
            <recommendedPath ref="recommendedPath"></recommendedPath>
        </div>
        <div class="right-home-window">
            <myProgress ref="myProgress"></myProgress>
        </div>
    </el-col>
</div>
</template>

<script>
import recommendedPath from '@/components/LearningPath/RecommendedPath'
import myProgress from '@/components/LearningPath/MyProgress'
export default {
    name: "QuestionTraining",
    data() {
        //这里有题目的所有信息，但是只展示部分，传参时全部传入题目组件
        const item = [{
            title: '钢琴演奏家',
            type: '简述题',
            id: '1',
            has_pictures: '0',
            urls: '',
            answer: 'answer',
            difficulty:'Hard',
            number:'23'
        },
          {
            title: '迷宫',
            type: '填空题',
            id: '2',
            has_pictures: '0',
            urls: '',
            answer: 'answer',
            difficulty:'Easy',
            number:'34'
        }, {
            title: '划水',
            content: '这是一个选择题',
            type: '选择题',
            id: '3',
            has_pictures: '0',
            answer: 'a',
            urls: '',
            multiple: '',
            A: '选项A',
            B: '选项B',
            C: '选项C',
            D: '选项D',
            E: '选项E',
            F: '选项F',
            difficulty:'Easy',
            number:'46'
        }, {
            title: '完全平方数',
            content: '这是一个判断题',
            type: '判断题',
            id: '4',
            urls: '',
            has_pictures: '0',
            answer: '1',
            difficulty:'Medium',
            number:'29'
        }, {
            title: '钝形三角形',
            content: '这是一个判断题',
            type: '简答题',
            id: '5',
            urls: '',
            has_pictures: '0',
            answer: '1',
            difficulty:'Easy',
            number:'41'
        }, {
            title: '组合游戏',
            content: '这是一个判断题',
            type: '填空题',
            id: '6',
            urls: '',
            has_pictures: '0',
            answer: '1',
            difficulty:'Hard',
            number:'17'
        }, {
            title: '线段树',
            content: '这是一个判断题',
            type: '判断题',
            id: '7',
            urls: '',
            has_pictures: '0',
            answer: '1',
            difficulty:'Hard',
            number:'19'
        }, {
            title: '打气球',
            content: '这是一个判断题',
            type: '选择题',
            id: '8',
            urls: '',
            has_pictures: '0',
            answer: '1',
            difficulty:'Medium',
            number:'31'
        },{
          title: '杨辉三角',
          content: '这是一个判断题',
          type: '填空题',
          id: '9',
          urls: '',
          has_pictures: '0',
          answer: '1',
          difficulty:'Hard',
          number:'23'
        }, {
          title: '二叉树',
          content: '这是一个判断题',
          type: '简答题',
          id: '10',
          urls: '',
          has_pictures: '0',
          answer: '1',
          difficulty:'Easy',
          number:'56'
        }, {
          title: '迷宫',
          content: '这是一个判断题',
          type: '选择题',
          id: '11',
          urls: '',
          has_pictures: '0',
          answer: '1',
          difficulty:'Hard',
          number:'26'
        }];
        return {
          tableData: item,
          currentPage:1,
          pageSize:5
        }
    },
    components: {
        recommendedPath,
        myProgress
    },
    methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  }

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

.left-home-window {
    height: inherit;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
}

.right-home-window {
    height: inherit;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
}
</style>
