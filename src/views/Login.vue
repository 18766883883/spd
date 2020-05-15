
<template>
<div id="app">
  <el-row type="flex" align="middle" justify="center"></el-row>
  <el-row type="flex" align="middle" justify="center"></el-row>
  <el-row type="flex" align="middle" justify="center"></el-row>
  <el-row type="flex" align="middle" justify="center"></el-row>
  <el-row type="flex" align="middle" justify="center"></el-row>
  <el-row type="flex" align="middle" justify="center">
    <el-col :span="10">
      <el-form :model="LoginForm" status-icon :rules="rules" ref="LoginForm" label-width="100px" class="demo-LoginForm">
        <el-form-item label="账号" prop="id" >
          <el-input  type="id" v-model="LoginForm.id" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="LoginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="" prop="role">
          <el-radio-group v-model="radio" size="medium" >
            <el-radio :label="1" @change="show(radio)">学生登陆</el-radio>
            <el-radio :label="2" @change="show(radio)">老师登陆</el-radio>
            <el-radio :label="3" @change="show(radio)">管理员登陆</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('LoginForm',LoginForm.id,LoginForm.password,radio)">
          提交
          </el-button>
          <el-button type="primary" @click="resetForm('LoginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</div>
</template>
<script>
  import axios from 'axios'
  export default {
    data: function () {
      var validateId = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }  else {
          callback();
        }
      };

      return {
        radio:1,
        LoginForm: {
          id:'',
          password:''
        },
        rules: {
          id: [
            {validator: validateId, trigger: 'blur'}
          ],
          password: [
            {validator: validatePassword, trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      show(radio){
        console.log('change to radio:  ');
        console.log(radio);
      },
      submitForm(formName,id,password,radio) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(radio+'登陆，id='+id+'    password='+password);//此处进行登陆验证
            let result = false;
            switch (radio) {
              case 1:
                //学生登陆验证
                //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                axios.post('/login',{
                  username:this.LoginForm.id,
                  password:this.LoginForm.password,
                  role:radio
                }).then((res)=>{
                  console.log(res.data);
                  if(res.data == 'success'){
                    result=true;
                    console.log(result);
                    this.$router.push({name:'StudentMain',params:{userId:id}});
                  }else {
                    alert("用户名或密码错误");
                  }
                })
                .catch(err=>console.log(err));

                break;
              case 2:
                axios.post('/login',{
                  username:this.LoginForm.id,
                  password:this.LoginForm.password,
                  role:radio
                }).then((res)=>{
                  console.log(res.data);
                  if(res.data == 'success'){
                    result=true;
                    console.log(result);
                    this.$router.push({name:'TeacherMain',params:{userId:id}});
                  }else {
                    alert("用户名或密码错误");
                  }
                })
                  .catch(err=>console.log(err));
                break;
              case 3:
                //管理员登陆验证
                axios.post('/login',{
                  username:this.LoginForm.id,
                  password:this.LoginForm.password,
                  role:radio
                }).then((res)=>{
                  console.log(res.data);
                  if(res.data == 'success'){
                    result=true;
                    console.log(result);
                    this.$router.push({name:'AdminMain'});
                  }else {
                    alert("用户名或密码错误");
                  }
                })
                  .catch(err=>console.log(err));
                break;
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
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
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
