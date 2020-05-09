import Vue from 'vue'
import VueRouter from "vue-router";
import Login from "../views/Login";
import MainStu from "../views/Student/MainStu";
import NotFound from "../views/NotFound";
import ListClass from "../views/Student/Class/ListClass";
import {Main} from "element-ui";
import MainTea from "../views/Teacher/MainTea";
import MainAdm from "../views/Admin/MainAdm";
import ListHomeWork from "../views/Student/Class/homework/ListHomeWork";
import ChangePassword from "../views/Student/Info/ChangePassword";
import ChangeName from "../views/Student/Info/ChangeName";
import QuestionSelector from "../components/Question/QuestionSelector";
import ShortAnswerQuestion from "../components/Question/Questions/ShortAnswerQuestion";
import FillBlankQuestion from "../components/Question/Questions/FillBlankQuestion";
import TrfQuesiton from "../components/Question/Questions/TrfQuesiton";
import ChoiceQuestion from "../components/Question/Questions/ChoiceQuestion";
import GetTask from "../components/Task/GetTask";
import UploadTask from "../components/Task/UploadTask";
import Rank from "../components/Task/Rank";
Vue.use(VueRouter);

export default new VueRouter({
  mode:"history",
  routes:[
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      component: Login
    },
    {
      path:'/stu_main/:userId',
      name:'StudentMain',
      props:true,
      component: MainStu,
      children:[
        {
          path: '/stu_main/stu_list/:userId',
          name: 'StudentList',
          props: true,
          components: {
            default: ListClass
          }
        },{
          path:'/stu_main/stu_class/:userId/:classId/:className',
          name:'StudentClass',
          props: true,
          component:ListHomeWork
        },{
          path:'/stu_main/stu_password/:userId',
          name:'StudentChangePassword',
          props:true,
          component:ChangePassword
        },{
          path:'/stu_main/stu_name/:userId',
          name:'StudentChangeName',
          props:true,
          component:ChangeName
        },{
          path:'/stu_main/QuestionSelector/:userId',
          name:'QuestionSelector',
          props:true,
          component:QuestionSelector
        },{
          path:'/stu_main/ShortQuestion/:userId/:object',
          name:'ShortQuestion',
          props:true,
          component:ShortAnswerQuestion
        },{
          path:'/stu_main/FillQuestion/:userId/:object',
          name:'FillQuestion',
          props:true,
          component:FillBlankQuestion
        },{
          path:'/stu_main/TrfQuestion/:userId/:object',
          name:'TrfQuestion',
          props:true,
          component:TrfQuesiton
        },{
          path:'/stu_main/ChoiceQuestion/:userId/:object',
          name:'ChoiceQuestion',
          props:true,
          component:ChoiceQuestion
        },{
          path:'/stu_main/get_task/:userId',
          name:'GetTask',
          props:true,
          component:GetTask
        },{
          path:'/stu_main/up_task/:userId',
          name:'UploadTask',
          props:true,
          component:UploadTask
        },{
          path:'/stu_main/get_rank/:userId',
          name:'Rank',
          props:true,
          component:Rank
        }
      ]
    },
    {
      path:'/tea_main',
      name:'TeacherMain',
      component: MainTea
    },
    {
      path:'/adm_main',
      name:'AdminMain',
      component: MainAdm
    },
    {
      path:'*',
      component:NotFound
    }
  ]
})
