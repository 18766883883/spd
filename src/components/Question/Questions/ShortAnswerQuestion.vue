<template>
  <el-row :gutter="10">
    <el-page-header @back="Goback" content="详情页面">
    </el-page-header>
    <el-col :span="6"><p style="color: white" >1</p></el-col>
    <el-col :span="12">
      <div>
        {{this.$route.params.object.title}}
      </div>
    </el-col>
    <el-col :span="6"><p style="color: white">1</p></el-col>
  </el-row>

</template>

<script>
    export default {
        name: "ShortAnswerQuestion",
      data(){
          return {
            textarea1:''
          }
      },
      methods:{
          Goback(){
            this.$router.push({name:'QuestionSelector',params:{userId:this.$route.params.userId}});
          }
      }
    }
</script>

<style scoped>

</style>
