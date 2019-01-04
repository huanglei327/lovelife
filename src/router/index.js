import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../views/home/index.vue'
//用户首页
import UserIndex from '../views/user/index/index.vue'
//登陆
import SignIn from '../views/login/signin/index.vue'
//注册
import Register from '../views/login/register/index.vue'
//发布首页
import ReleaseIndex from '../views/release/index/index.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        title:'首页',
        tshow:false,
        bshow:true,
      }
    },
    {
      path: '/UserIndex',
      name: 'UserIndex',
      component: UserIndex,
      meta:{
        title:'个人信息',
        tshow:false,
        bshow:true,
      }
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn,
      meta:{
        title:'手机号登陆',
        tshow:true,
        bshow:false,
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta:{
        title:'',
        tshow:true,
        bshow:false,
      }
    },
    {
      path: '/ReleaseIndex',
      name: 'ReleaseIndex',
      component: ReleaseIndex,
      meta:{
        title:'发布',
        tshow:false,
        bshow:true,
      }
    }
  ]
})
