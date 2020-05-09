<template>
  <el-row>
    <el-col :span="8"><div style="color:white">
      1
    </div></el-col>
    <el-col :span="8"><div >
      <el-form ref="form" :model="UploadTask_form" label-width="80px">
        <el-form-item label="任务名称">
          <el-input v-model="UploadTask_form.title"></el-input>
        </el-form-item>
        <el-form-item label="任务描述">
          <el-input type="textarea" v-model="UploadTask_form.content"></el-input>
        </el-form-item>
        <el-form-item label="期待输入">
          <el-input type="textarea" v-model="UploadTask_form.input"></el-input>
        </el-form-item>
        <el-form-item label="期待输出">
          <el-input type="textarea" v-model="UploadTask_form.output"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmitTask()">发布</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div></el-col>
    <el-col :span="8"><div style="color:white">1</div></el-col>
  </el-row>

</template>
<script>
  export default {
    data() {
      return {
        UploadTask_form: {
          title:'',
          content:'',
          input:'',
          output:'',
        }
      }
    },
    methods: {
      onSubmitTask() {
        console.log('submit!');
      }
    }
  }
</script>
