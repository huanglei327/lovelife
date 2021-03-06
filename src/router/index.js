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
//密码登陆
import PwdSignIn from '../views/login/pwdsignin/index.vue'
//发布首页
import ReleaseIndex from '../views/release/index/index.vue'
//发布历史
import History from '../views/release/history/index.vue'
//发布
import Publish from '../views/release/publish/index.vue'
//发布详情
import Details from '../views/release/details/index.vue'
//搜索
import SearchInfo from '../views/release/search/index.vue'
//搜索LIST
import SearchList from '../views/release/searchlist/index.vue'
//个人信息
import MySelf from '../views/user/myself/index.vue'
//个人中心
import Personal from '../views/user/personal/index.vue'
//修改密码
import UpPwd  from '../views/user/uppwd/index.vue'
//账户安全
import Safety  from '../views/user/safety/index.vue'
//验证身份
import authentication from '../views/user/authentication/index.vue'
//朋友圈首页
import friendCircleIndex from '../views/friendcircle/index/index.vue'
//人脉首页
import voiceIndex from '../views/voice/index/index.vue'
//视频首页
import videoIndex from '../views/video/index/index.vue'



Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/index',
      name: 'Home',
      component: Home,
      meta:{
        title:'首页',
        tshow:false,
        bshow:true,
        requireAuth:false,
        tabbarActive:0,
        scrollTop:true,
        keepAlive:true
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        title:'首页',
        tshow:false,
        bshow:true,
        requireAuth:false,
        tabbarActive:0,
        scrollTop:true,
        keepAlive:true
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
        requireAuth:true,
        tabbarActive:5
      }
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn,
      meta:{
        title:'手机号登陆',
        tshow:false,
        bshow:false,
      }
    },
    {
      path: '/PwdSignIn',
      name: 'PwdSignIn',
      component: PwdSignIn,
      meta:{
        title:'密码登陆',
        tshow:false,
        bshow:false,
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta:{
        title:'手机号注册',
        tshow:true,
        bshow:false,
      }
    },
    {
      path: '/friendCircleIndex',
      name: 'friendCircleIndex',
      component: friendCircleIndex,
      meta:{
        title:'朋友圈',
        tshow:false,
        bshow:true,
        requireAuth:true,
        tabbarActive:4
      }
    },
    {
      path: '/videoIndex',
      name: 'videoIndex',
      component: videoIndex,
      meta:{
        title:'视频',
        tshow:false,
        bshow:true,
        requireAuth:true,
        tabbarActive:2
      }
    },
    {
      path: '/voiceIndex',
      name: 'voiceIndex',
      component: voiceIndex,
      meta:{
        title:'语音',
        tshow:false,
        bshow:true,
        requireAuth:true,
        tabbarActive:3
      }
    },
    {
      path: '/SearchInfo',
      name: 'SearchInfo',
      component: SearchInfo,
      meta:{
        title:'搜索',
        tshow:true,
        bshow:false,
        requireAuth:false,
        keepAlive:true,
      }
    },
    {
      path: '/SearchList',
      name: 'SearchList',
      component: SearchList,
      meta:{
        title:'产品列表',
        tshow:true,
        bshow:false,
        requireAuth:false,
        keepAlive:true,
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
        requireAuth:true,
        tabbarActive:1
      }
    },
    {
      path: '/History',
      name: 'History',
      component: History,
      meta:{
        title:'发布历史',
        tshow:true,
        bshow:false,
        requireAuth:true,
        keepAlive:true,
      }
    },
    {
      path: '/Publish',
      name: 'Publish',
      component: Publish,
      meta:{
        title:'发布',
        tshow:true,
        bshow:false,
        requireAuth:true
      }
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details,
      meta:{
        title:'发布详情',
        tshow:false,
        bshow:false,
        requireAuth:false
      }
    },
    {
      path: '/MySelf',
      name: 'MySelf',
      component: MySelf,
      meta:{
        title:'个人信息',
        tshow:false,
        bshow:false,
        requireAuth:true
      }
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal,
      meta:{
        title:'个人中心',
        tshow:true,
        bshow:false,
        requireAuth:true
      }
    },
    {
      path: '/UpPwd',
      name: 'UpPwd',
      component: UpPwd,
      meta:{
        title:'修改密码',
        tshow:true,
        bshow:false,
        requireAuth:true
      }
    },
    {
      path: '/Safety',
      name: 'Safety',
      component: Safety,
      meta:{
        title:'账户安全',
        tshow:true,
        bshow:false,
        requireAuth:true
      }
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: authentication,
      meta:{
        title:'验证身份',
        tshow:true,
        bshow:false,
        requireAuth:true
      }
    }
  ]
})
