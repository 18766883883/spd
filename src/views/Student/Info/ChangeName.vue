
<template>
  <div id="app">
    <el-row type="flex" align="middle" justify="center"></el-row>
    <el-row type="flex" align="middle" justify="center"></el-row>
    <el-row type="flex" align="middle" justify="center"></el-row>
    <el-row type="flex" align="middle" justify="center"></el-row>
    <el-row type="flex" align="middle" justify="center"></el-row>
    <el-row type="flex" align="middle" justify="center">
      <el-col :span="10">
        <el-form :model="ChangeNameForm" status-icon :rules="rules" ref="ChangeNameForm" label-width="100px" class="demo-ChangeNameForm">
          <el-form-item label="新昵称" prop="name">
            <el-input type="id" v-model="ChangeNameForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button  @click="submitForm('ChangeNameForm',ChangeNameForm.name)">
              提交
            </el-button>
            <el-button  @click="resetForm('ChangeNameForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  export default {
    data: function () {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入昵称'));
        } else {
          callback();
        }
      };

      return {
        ChangeNameForm: {
          Name:''
        },
        rules: {
          Name: [
            {validator: validateName, trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      submitForm(formName,Name) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let result = false;
            if(Name==null){
              this.$alert("昵称不能为空")
            }else{
              //changepassword(password,this.$route.params.userId)
              this.$alert("修改昵称成功")
            }
          } else {
            console.log('error submit!!');
            return "/login";
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  a{
    text-decoration: none;
  }

  .router-link-active {
    text-decoration: none;
  }
  .bg-white{
    background: #ffffff;
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
