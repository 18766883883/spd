
<template>
  <div id="app">
    <el-row type="flex" align="middle" justify="center"></el-row>
    <el-row type="flex" align="middle" justify="center"></el-row>
    <el-row type="flex" align="middle" justify="center"></el-row>
    <el-row type="flex" align="middle" justify="center"></el-row>
    <el-row type="flex" align="middle" justify="center"></el-row>
    <el-row type="flex" align="middle" justify="center">
      <el-col :span="10">
        <el-form :model="ChangePasswordForm" status-icon :rules="rules" ref="ChangePasswordForm" label-width="100px" class="demo-ChangePasswordForm">
          <el-form-item label="旧密码" prop="old_password" >
            <el-input  type="password" v-model="ChangePasswordForm.old_password" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="password">
            <el-input type="password" v-model="ChangePasswordForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button  @click="submitForm('ChangePasswordForm',ChangePasswordForm.old_password,ChangePasswordForm.password)">
              提交
            </el-button>
            <el-button  @click="resetForm('ChangePasswordForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  export default {
    data: function () {
      var validateOld = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入旧密码'));
        } else {
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        }  else {
          callback();
        }
      };

      return {
        ChangePasswordForm: {
          old_password:'',
          password:''
        },
        rules: {
          old_password: [
            {validator: validateOld, trigger: 'blur'}
          ],
          password: [
            {validator: validatePassword, trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      submitForm(formName,old_password,password) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let result = false;

            if(old_password!="123456"){
              this.$alert("旧密码错误")
            }else{
              //changepassword(password,this.$route.params.userId)
              this.$alert("修改密码成功")
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
